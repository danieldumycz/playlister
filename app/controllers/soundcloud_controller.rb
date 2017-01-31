class SoundcloudController < ApplicationController
	require 'soundcloud'
	before_action :authenticate_user!
	before_action :set_soundcloud

  def connect
  	# create client object with app credentials
		client = Soundcloud.new(:client_id => @soundcloud.client_id,
		                    		:client_secret => @soundcloud.client_secret,
		                        :redirect_uri => "http://localhost:3000/soundcloud/oauth-callback",
		                        :response_type => 'code')
		# redirect user to authorize URL
		redirect_to client.authorize_url(:grant_type => 'authorization_code', :scope => 'non-expiring', :display => 'popup') 
  end

	def connected
		# create client object with app credentials
		client = Soundcloud.new(:client_id => @soundcloud.client_id,
		                    :client_secret => @soundcloud.client_secret,
		                    :redirect_uri => "http://localhost:3000/soundcloud/oauth-callback")
		# exchange authorization code for access token
		access_token = client.exchange_token(:code => params[:code])
		client = Soundcloud.new(:access_token => access_token["access_token"])
		# make an authenticated call
		soundcloud_user = client.get('/me')
		unless Identity.where(:uid => soundcloud_user["id"]).present?
		  Identity.create_from_soundcloud(current_user, soundcloud_user["id"], access_token)
		end

		redirect_to(root_path(:notice => 'Please register as a new user', :access_token => access_token["access_token"]))
		# redirect_to root_url, , notice: "Successfully Connected to Soundcloud" 
	end

	def refresh
		# create client object with app credentials and refresh token
		client = Soundcloud.new(:client_id => @soundcloud.client_id,
		                    		:client_secret => @soundcloud.client_secret,
		                        :refresh_token => 'SOME_REFRESH_TOKEN')

		# the client can now be used to make authenticated API calls
		puts client.get('/me').username
	end

	def set_soundcloud
		@soundcloud = current_user.identities.where(provider:'soundcloud').first
	end
end
