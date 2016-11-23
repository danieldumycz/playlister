//Container Component. See: https://css-tricks.com/learning-react-container-components/
class SpotifyUserContainer extends React.Component {
  constructor() {
    super();
    this.state = {
    	user: ''
  	}
  }

 	componentWillMount(){
 		$.ajax({
      url: 'https://api.spotify.com/v1/me',
      headers: {
         'Authorization': 'Bearer ' + this.props.spotify.access_token
      },
      success: function(data) {
        this.setState({ 
        	user: data 
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
 	}
	
  render () {
    if(this.state.data === null){
      return <Loading />;
    }

    return (    	
    	<SpotifyUser user={this.state.user} />
    );
  }
}