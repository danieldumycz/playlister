class SpotifyTracks extends React.Component {
  render () {
    return (
    	<div>
		    <ul>
		    	{this.props.tracks.map(track =>
						<SpotifyTrack track={track.track} key={track.id} />
					)}
		    </ul>	
	    </div>
    );
  }
}

