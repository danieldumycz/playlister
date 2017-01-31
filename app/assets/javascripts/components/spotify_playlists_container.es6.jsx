class SpotifyPlaylistsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
    	data: null,
      clicked: false
  	}
    this.onClick = this.onClick.bind(this);
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

  onClick() {
    if(this.state.clicked){
      this.setState({ clicked : false});
    } else {
      this.setState({ clicked : true});
    }
  }
	
  render () {
  	if(this.state.data === null){
  		return <Loading />;
  	}
  	return (
	    <div>
        <div className="right_align">
          {this.state.clicked ? <a onClick={this.onClick}></a> : <a onClick={this.onClick}>Load Spotify Data</a> }
          <br/>
        </div>
        <div>
          {this.state.clicked ? <SpotifyPlaylists access_token={this.props.spotify.access_token} playlists={this.state.data.items} />
           : null }
  	    </div>
      </div>
	  );
  }
}

