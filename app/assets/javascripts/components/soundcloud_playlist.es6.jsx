class SoundcloudPlaylist extends React.Component {
	constructor() {
    super();
    this.state = {
    	clicked: false
  	}
  	this.onClick = this.onClick.bind(this);
  }

  onClick() {
  	if(this.state.clicked){
  		this.setState({ clicked : false});
  	} else {
  		this.setState({ clicked : true});
  	}
  }

  render () {
    return (
    	<div className="card">
	    	<ul onClick={this.onClick}>
	    		<h4>
	    			{this.props.playlist.title + " "}
            <p className="subheading">
              #{this.props.playlist.track_count} tracks
            </p>
	    		</h4>
	    	</ul>
        <hr></hr>
        {this.state.clicked ? 
            <SoundcloudTracks spotify={this.props.spotify} access_token={this.props.access_token} tracks={this.props.playlist.tracks} />
            : null
          }
        <br/>
	    </div>
    ); 
  }
}

