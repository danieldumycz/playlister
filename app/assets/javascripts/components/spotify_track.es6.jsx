class SpotifyTrack extends React.Component {
  render () {
  	console.log(this.props.track);
  	let track = null;
  	if(this.props.track.artists.length > 1){
  		track = this.props.track.artists[0].name + "  (" + this.props.track.artists.length + " more) | " + this.props.track.name; 
  	} else {
  		track = this.props.track.artists[0].name + " | " + this.props.track.name; 
  	}
    return (
    	<div className="small_card">
    		{track}
	   	</div>
    );
  }
}

