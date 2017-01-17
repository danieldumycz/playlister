class SpotifyMoreTracks extends React.Component {
  render () {
  	console.log(this.props.next)
  	return (
    	<div>
	    	{this.props.tracks.map(track =>
					<SpotifyTrack track={track.track} key={track.track.id} />
				)}
	    	{this.props.next? <SpotifyMoreTracksContainer access_token={this.props.access_token} next={this.props.next} />
          : null}
	    </div>
    );
  }
}


