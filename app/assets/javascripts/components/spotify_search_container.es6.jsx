class SpotifySearchContainer extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	data: null,
      clicked: false
  	};
    this.onClick = this.onClick.bind(this);
    this.encodeTrack = this.encodeTrack.bind(this);
  }

 	componentWillMount(){
 		this.encodeTrack(this.props.title);
 	}

	componentDidMount() {
	  this.loadData();
	}

	encodeTrack(title) {
		if(title.includes("-")){
			title = title.split("-");
			title = encodeURI(title[1]);
		} else {
			title = encodeURI(title);
		}
		this.setState({
			track_name: title
		});
	}

 	loadData(){
 		console.log(this.state.track_name);
 		var uri = "https://api.spotify.com/v1/search?q=" + this.state.track_name + "&type=track";
 		$.ajax({
      url: uri,
      dataType: 'json',
      success: function(data) {
        this.setState({ 
        	data: data
      	});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
 	}
  
  onClick() {
    if(this.state.clicked){
      this.setState({ clicked : false});
    } else {
      this.setState({ clicked : true});
    }
  }
	
  render () {
  	if(this.state.data === null){
  		return <Loading />;
  	}

  	return (
      <div>
  	  	<SpotifySearch tracks={this.state.data.items}/>
      </div>
	  );
  }
}

