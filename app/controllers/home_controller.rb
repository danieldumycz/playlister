class HomeController < ApplicationController
  def index
  	if(params.has_key?(:access_token))
  		@access_token = params[:access_token]
  		soundcloud = Identity.where(provider: 'soundcloud').first
  		soundcloud.save_soundcloud_token(@access_token)
  	end
  end
end
