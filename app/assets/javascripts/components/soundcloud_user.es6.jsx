const divStyle2 = {
  color: '#f66b0f'
};
class SoundcloudUser extends React.Component {
  render () {
    return (    	
    	<div>
    		<h2>
    			Connected to <span style={divStyle2}> Soundcloud</span>
    		</h2>
    		<p class="super"><b>Owner: </b>{this.props.user.username}</p>
    	</div>
    );
  }
}

