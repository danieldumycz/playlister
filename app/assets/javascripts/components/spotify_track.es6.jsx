class SpotifyTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: props.search,
      clicked: false
    }
    this.onClick = this.onClick.bind(this);
    this.setSearch = this.setSearch.bind(this);
  }

  onClick() {
    if(this.state.clicked){
      this.setState({ clicked : false});
    } else {
      this.setState({ clicked : true});
    }
  }

  setSearch(){
    if(this.state.search){
      this.setState({ search : false});
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
    		{track}{this.state.search?(<a onClick={this.onClick} className="right_align">Add</a>):null}
        {this.state.clicked? 
          <SpotifyAddTrackPlaylistContainer  spotify={this.props.spotify} track_uri={this.props.track.uri} />
           : null
        }
        {this.state.clicked?this.setSearch():null}
	   	</div>
    );
  }
}

