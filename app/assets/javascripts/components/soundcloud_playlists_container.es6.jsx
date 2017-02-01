class SoundcloudPlaylistsContainer extends React.Component {
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
    var uri = 'https://api.soundcloud.com/me/playlists?oauth_token=' + this.props.access_token
 		$.ajax({
      url: uri,
      dataType: 'json',
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
            {this.state.clicked ? <a onClick={this.onClick}></a> : <a onClick={this.onClick}>Load Soundcloud Data</a> }
            <br/>
        </div>
        <div>
          {this.state.clicked ? <SoundcloudPlaylists spotify_token={this.props.spotify_token} access_token={this.props.access_token} playlists={this.state.data} />
          : null }
    	  </div>
      </div>
	  );
  }
}


