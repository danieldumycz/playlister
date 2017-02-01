class SoundcloudTrack extends React.Component {
	constructor(){
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
  	let user = null;
  	if (this.props.track.user.username){
  		user = "Poster: " + this.props.track.user.username;
  	} else {
  		user = "ID: " + this.props.track.user.id;

  	}
    return (
    	<div className="small_card">
	    		{this.props.track.title} <sub className="right_align">{user}</sub>
          {this.state.clicked ? <div className="cursorPointer" onClick={this.onClick}>Hide Search</div> : <div className="cursorPointer" onClick={this.onClick}>Search</div>  }
	        {this.state.clicked ? 
	          <SpotifySearchContainer spotify_token={this.props.spotify_token} title={this.props.track.title} />
	           : null
	        }
	   	</div>
    );
  }
}

