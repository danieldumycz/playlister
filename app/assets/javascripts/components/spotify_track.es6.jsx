class SpotifyTrack extends React.Component {
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
  	let track = null;
  	if(this.props.track.artists.length > 1){
  		track = this.props.track.artists[0].name + "  (" + this.props.track.artists.length + " more) | " + this.props.track.name; 
  	} else {
  		track = this.props.track.artists[0].name + " | " + this.props.track.name; 
  	}
    return (
    	<div className="small_card">
    		{track}{this.props.search?(<a onClick={this.onClick} className="right_align">Add</a>):null}
        {this.state.clicked? 
          <SpotifyAddPlaylistContainer  spotify={this.props.spotify} track={this.props.track.id} />
           : null
        }
	   	</div>
    );
  }
}

