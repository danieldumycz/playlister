class Identity < ActiveRecord::Base
  belongs_to :user
  validates_presence_of :uid, :provider
  validates_uniqueness_of :uid, :scope => :provider


  def self.find_for_oauth(auth)
    find_or_create_by(uid: auth.uid, provider: auth.provider)
  end

  def self.create_from_soundcloud(user_id, uid, access_token)
  	#TODO add error handling for soundcloud user with or without a UID field
  	identity = Identity.create(user_id: user_id.id, uid: uid, access_token: access_token, provider: "soundcloud")
  	identity.save!
  end

  def auth_spotify(code, state)
    redirect_uri = "http://localhost:8888/callback"
    encoded_client_id_secret = Base64.strict_encode64("#{client_id}:#{client_secret}")
    result = HTTParty.post(
        "https://accounts.spotify.com/api/token",
        :body => {:grant_type => "authorization_code",
                  :code => "#{code}",
                  :redirect_uri => "#{redirect_uri}"},
        :headers => {"Authorization" => "Basic #{encoded_client_id_secret}"}
        )
    if result.code == 200
      self.access_token = result['access_token']
      self.refresh_token = result['refresh_token']
      self.save!
    else
      puts "Error in authorization: #{result.code}"
    end    
  end

  def refresh_spotify_token
    encoded_client_id_secret = Base64.strict_encode64("#{client_id}:#{client_secret}")
    result = HTTParty.post(
        "https://accounts.spotify.com/api/token",
        :body => {:grant_type => "refresh_token",
                  :refresh_token => "#{refresh_token}"},
        :headers => {"Authorization" => "Basic #{encoded_client_id_secret}"}
        )
    self.access_token = result['access_token']
    self.save!
  end

  def test_spotify_auth
    result = HTTParty.get(
        "https://api.spotify.com/v1/me",
        :body => {},
        :headers => {"Authorization" => "Bearer #{access_token}"}
        )
    case result.code
      when 200
        return 200
      when 401
        return self.refresh_spotify_token
      when 404
        return "API endpoint has depreciated: #{result.code}"
      when 500...600
        return "Error: #{result.code}"
    end
  end

  def test_soundcloud_auth
    result = HTTParty.get(
        "https://api.spotify.com/v1/me",
        :body => {},
        :headers => {"Authorization" => "Bearer #{access_token}"}
        )
    case result.code
      when 200
        return 200
      when 401
        return self.refresh_soundcloud_token
      when 404
        return "API endpoint has depreciated: #{result.code}"
      when 500...600
        return "Error: #{result.code}"
    end
  end

  def save_soundcloud_token(access_token)
    self.update(uid: self.uid, provider: self.provider, access_token: access_token)
    self.save
  end
end
