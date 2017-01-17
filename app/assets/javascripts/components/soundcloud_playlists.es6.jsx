class SoundcloudPlaylists extends React.Component {
  render () {
		return (
			<ul>
				{this.props.playlists.map(playlist =>
					<SoundcloudPlaylist access_token={this.props.access_token} playlist={playlist} key={playlist.id}/>  
	    	)}
    	</ul>
		);
  }
}

