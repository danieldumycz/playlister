//Presentation Component. Reference: https://css-tricks.com/learning-react-container-components/
class SpotifyUser extends React.Component {
  render () {
    return (    	
    	<div>
    		<h2>Connected to {this.props.user.display_name}</h2>
    	</div>
    );
  }
}
