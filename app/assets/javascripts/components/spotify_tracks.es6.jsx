class SpotifyTracks extends React.Component {
  render () {
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

