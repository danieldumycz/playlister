class SoundcloudUserContainer extends React.Component {
  constructor() {
    super();
    this.state = {
    	user: ''
  	}
  }

 	componentWillMount(){
 		$.ajax({
      url: 'https://api.soundcloud.com/me?oauth_token=' + this.props.access_token,
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
    	<SoundcloudUser user={this.state.user} />
    );
  }
}
