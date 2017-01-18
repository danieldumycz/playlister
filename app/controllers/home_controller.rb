class HomeController < ApplicationController
	before_action :authenticate_user!
	before_action :set_spotify
	before_action :set_soundcloud

  def index
  	if(params.has_key?(:access_token))
  		@access_token = params[:access_token]
  		@soundcloud.save_soundcloud_token(@access_token)
  	end
  end

  def set_spotify
  	@spotify = current_user.identities.where(provider:'spotify').first
	end

  def set_soundcloud
  	@soundcloud = current_user.identities.where(provider:'soundcloud').first
	end

end
