class SoundcloudTracks extends React.Component {
  render () {
    return (
    	<div>
	    	{this.props.tracks.map(track =>
					<SoundcloudTrack spotify={this.props.spotify} track={track} key={track.id} />
				)}
	    </div>
    );
  }
}


