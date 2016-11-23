class SpotifyPlaylists extends React.Component {
  render () {
    return (
    	<div class="list-group">
	    	{this.props.playlists.map(function(object, i){
	        return <SpotifyPlaylist playlist={object} key={i} />;
	    	})}
	    </div>	
    );
  }

}