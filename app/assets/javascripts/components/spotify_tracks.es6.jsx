class SpotifyTracks extends React.Component {
  render () {
    return (
    	<div>
    		{this.props.search?
          (this.props.tracks.map(track => <SpotifyTrack spotify={this.props.spotify} search={true} track={track} key={track.id} search={this.props.search} />))
    			:(this.props.tracks.map(track => <SpotifyTrack track={track.track} key={track.track.id} />))
    		}
	
	    </div>
    );
  }
}

