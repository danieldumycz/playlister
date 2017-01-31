class SpotifyTracksContainer extends React.Component {
  constructor() {
    super();
    this.state = {
    	data: null,
      next: null,
      clicked: false
  	}
    this.onClick = this.onClick.bind(this);
  }

	componentDidMount() {
	    this.loadData();
	}

 	loadData(){
    if(this.props.next){
      console.log("Next");
      var uri = this.props.next;
    } else {
      console.log("Original");
 		  var uri = "https://api.spotify.com/v1/users/" + this.props.uid + "/playlists/" + this.props.playlist.id + "/tracks";
    }
 		$.ajax({
      url: uri,
      dataType: 'json',
      headers: {
         'Authorization': 'Bearer ' + this.props.access_token
      },
      success: function(data) {
        this.setState({ 
        	data: data,
          next: data.next,
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
        <SpotifyTracks tracks={this.state.data.items} access_token={this.props.access_token} next={this.state.next} />
        {this.state.next? <a className="right_align" onClick={this.onClick}>More/Hide</a> : null }
        {this.state.clicked? 
          <SpotifyTracksContainer uid={this.props.playlist.owner.id} next={this.state.next} playlist={this.props.playlist} access_token={this.props.access_token} />
           : null
        }
      </div>
	  );
  }
}