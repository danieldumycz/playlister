class SpotifyPlaylist extends React.Component {
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
	    			{this.props.playlist.name + " "}
	    		</h4>
	    		{this.state.clicked ? 
	    			<SpotifyTracksContainer access_token={this.props.access_token} uid={this.props.playlist.owner.id} playlist={this.props.playlist} />
						: null
					}
	    	</ul>
	    	<br />
	    </div>
    ); 
  }
}

