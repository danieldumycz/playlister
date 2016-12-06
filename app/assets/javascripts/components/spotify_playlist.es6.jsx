class SpotifyPlaylist extends React.Component {
  render () {
    return (
    	<div>
	    	<ul>
	    		<h4>{this.props.playlist.name}</h4>
	    		<SpotifyTracksContainer access_token={this.props.access_token} uid={this.props.playlist.owner.id} playlist={this.props.playlist} />
	    	</ul>
	    	<br />
	    </div>
    ); 
  }
}

