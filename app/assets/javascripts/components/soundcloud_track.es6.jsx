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
          {this.state.clicked ? 
            <div className="small-button" onClick={this.onClick}> Hide </div>
            :<div className="small-button" onClick={this.onClick}> Search </div> }
	         &nbsp;{this.props.track.title}
          {this.state.clicked ? 
	          <SpotifySearchContainer spotify={this.props.spotify} title={this.props.track.title} />
	           :null
	        }
	   	</div>
    );
  }
}

