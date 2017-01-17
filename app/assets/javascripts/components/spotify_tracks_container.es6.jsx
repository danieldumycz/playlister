class SpotifyTracksContainer extends React.Component {
  constructor() {
    super();
    this.state = {
    	data: null,
  	}
  }
	componentDidMount() {
	    this.loadPlaylistData();
	}

 	loadPlaylistData(){
 		var uri = "https://api.spotify.com/v1/users/" + this.props.uid + "/playlists/" + this.props.playlist.id + "/tracks";
 		$.ajax({
      url: uri,
      dataType: 'json',
      headers: {
         'Authorization': 'Bearer ' + this.props.access_token
      },
      success: function(data) {
        console.log(data);
        this.setState({ 
        	data: data,
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
 	}

	
  render () {
  	if(this.state.data === null){
  		return <Loading />;
  	}

  	return (
	    <div>
	  		<SpotifyTracks tracks={this.state.data.items} />
	    </div>
	  );
  }
}


