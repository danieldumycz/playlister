class SpotifyAddPlaylistContainer extends React.Component {
  constructor() {
    super();
    this.state = {
    	data: null,
    	playlistID: null,
    	response: null,
      clicked: false
  	}
  	this.addPlaylist = this.addPlaylist.bind(this);
  	this.postPlaylist = this.postPlaylist.bind(this);
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
      	this.setState({data: data}, function () {
    					this.addPlaylist(this.state.data);
    		});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
 	}

 	addPlaylist(data){
		let playlistID = null;
		for(var i=0;i<data.items.length;i++){
			if(data.items[i].name == "Soundcloud")
				playlistID = data.items[i].id;
		}

		if(playlistID){
			this.postTrack(playlistID);
		} else {
			console.log("dun be stupid");
			this.postPlaylist();
		}
 	}

 	postPlaylist(){
 		console.log(this.props.spotify.access_token);
 		var data = {"name": "Soundcloud"};
 		var uri = "https://api.spotify.com/v1/users/" + this.props.spotify.uid + "/playlists";
 		$.ajax({
 			type: 'POST',
      url: uri,
      dataType: 'json',
      data: data,
      headers: {
         'Authorization': 'Bearer ' + this.props.spotify.access_token
      },
      success: function(data) {
      	console.log("Successfully Created Playlist" + data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(xhr, status, err.toString());
      }.bind(this)
    });
 	}

 	postTrack(playlistID){
 		var tracks = []; //Tracks using spotify POST must be parsed as an array
 		tracks.push(this.props.track);
 		var uri = "https://api.spotify.com/v1/users/" + this.props.spotify.uid + "/playlists/" + playlistID + "/tracks";
 		$.ajax({
 			type: 'POST',
      url: uri,
      data: tracks,
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
 				
      </div>
	  );
  }
}

