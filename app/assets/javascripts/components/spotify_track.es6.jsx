class SpotifyTrack extends React.Component {
  render () {
  	let track = null;
  	if(!this.props.search){
  		track = this.props.track.name;
  	} else {
  		track = this.props.track.name + " by " + this.props.track.artists[0].name; 
  	}
    return (
    	<div className="small_card">
    		{track}
	   	</div>
    );
  }
}

