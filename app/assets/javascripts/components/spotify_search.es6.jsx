class SpotifySearch extends React.Component {
  render () {
    return (
    	<div>
    		{this.props.tracks.length > 0?
    			<h6><SpotifyTracks  spotify={this.props.spotify}  tracks={this.props.tracks} search={true}/></h6>
    			: <h6>I'm sorry, but we couldn't find anything for: {this.props.title}</h6>
    		}
    	</div>
    );
  }
}

