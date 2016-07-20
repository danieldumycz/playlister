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
end
