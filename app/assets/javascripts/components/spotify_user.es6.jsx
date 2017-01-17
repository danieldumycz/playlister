const divStyle = {
  color: '#07d159'
};
//Presentation Component. Reference: https://css-tricks.com/learning-react-container-components/
class SpotifyUser extends React.Component {
  render () {
    return (    	
    	<div>
    		<h2>
    			Connected to <span style={divStyle}> Spotify</span>
    		</h2>
    		<p><b>Owner: </b>{this.props.user.display_name}</p>
    	</div>
    );
  }
}
