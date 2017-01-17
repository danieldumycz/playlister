class SpotifyMoreTracksContainer extends React.Component {
  constructor() {
    super();
    this.state = {
    	data: null,
      next: null
  	}
  }
	componentDidMount() {
	    this.loadPlaylistData();
	}

 	loadPlaylistData(){
 		var uri = this.props.next;
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

	
  render () {
  	if(this.state.data === null){
  		return <Loading />;
  	}

  	return (
	    <div>
	  		<SpotifyMoreTracks access_token={this.props.access_token} tracks={this.state.data.items} next={this.state.next}/>
	    </div>
	  );
  }
}

