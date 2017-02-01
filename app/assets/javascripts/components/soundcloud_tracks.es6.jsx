class SoundcloudTracks extends React.Component {
  render () {
    return (
    	<div>
	    	{this.props.tracks.map(track =>
					<SoundcloudTrack spotify_token={this.props.spotify_token} track={track} key={track.id} />
				)}
	    </div>
    );
  }
}


