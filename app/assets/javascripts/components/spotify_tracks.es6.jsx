class SpotifyTracks extends React.Component {
  render () {
    return (
    	<div>
    		{!this.props.search?
    			(this.props.tracks.map(track => <SpotifyTrack track={track.track} key={track.track.id} />))
    			:(this.props.tracks.map(track => <SpotifyTrack track={track} key={track.id} search={this.props.search} />))
    		}
	
	    </div>
    );
  }
}

