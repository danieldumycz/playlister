class SpotifyPlaylistsContainer extends React.Component {
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
 		var uri = "https://api.spotify.com/v1/users/" + this.props.spotify.uid + "/playlists";
 		$.ajax({
      url: uri,
      dataType: 'json',
      headers: {
         'Authorization': 'Bearer ' + this.props.spotify.access_token
      },
      success: function(data) {
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
	  		<SpotifyPlaylists playlists={this.state.data.items} />
	    </div>
	  );
  }
}

