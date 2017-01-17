class SoundcloudTracks extends React.Component {
  render () {
    return (
    	<div>
	    	{this.props.tracks.map(track =>
					<SoundcloudTrack track={track} key={track.id} />
				)}
	    </div>
    );
  }
}


