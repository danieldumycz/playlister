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
    	<div className="card" onClick={this.onClick}>
	    	<ul>
	    		<h4>
	    			{this.props.playlist.title + " "}
	    		</h4>
	    		{this.state.clicked ? 
	    			<SoundcloudTracks access_token={this.props.access_token} tracks={this.props.playlist.tracks} />
						: null
					}
	    	</ul>
	    	<br />
	    </div>
    ); 
  }
}

