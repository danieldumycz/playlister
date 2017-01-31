class SpotifyTracks extends React.Component {
  render () {
    return (
    	<div>
	    	{this.props.tracks.map(track =>
					<SpotifyTrack track={track.track} key={track.track.id} />
				)}
	    </div>
    );
  }
}

