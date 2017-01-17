class SoundcloudTracks extends React.Component {
  render () {
    return (
    	<div>
		    <ul>
		    	{this.props.tracks.map(track =>
						<SoundcloudTrack track={track} key={track.id} />
					)}
		    </ul>	
	    </div>
    );
  }
}


