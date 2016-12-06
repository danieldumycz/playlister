class SpotifyPlaylists extends React.Component {
  render () {
		return (
			<ul>
				{this.props.playlists.map(playlist =>
					<SpotifyPlaylist access_token={this.props.access_token} playlist={playlist} key={playlist.id}/>  
	    	)}
    	</ul>
		);
  }
}