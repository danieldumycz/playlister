class SpotifyTracks extends React.Component {
  render () {
    return (
    	<div>
		    <ul>
		    	{this.props.tracks.map(track =>
						<SpotifyTrack track={track.track} key={track.track.id} />
					)}
		    </ul>	
	    </div>
    );
  }
}

