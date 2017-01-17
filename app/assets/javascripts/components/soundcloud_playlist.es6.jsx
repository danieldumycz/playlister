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
    	<div>
	    	<ul>
	    		<h4>
	    			{this.props.playlist.title + " "}
	    			({this.state.clicked ? <a onClick={this.onClick}>Hide</a> : <a onClick={this.onClick}>Show</a> })
	    		</h4>
	    		{this.state.clicked ? 
	    			<SoundcloudTracksContainer access_token={this.props.access_token} playlist={this.props.playlist} />
						: null
					}
	    	</ul>
	    	<br />
	    </div>
    ); 
  }
}

