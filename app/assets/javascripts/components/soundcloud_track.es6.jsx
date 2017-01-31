class SoundcloudTrack extends React.Component {
	constructor(){
		super();
		this.state = {
			clicked: false
		}
		this.onClick = this.onClick.bind(this);
	}

  onClick() {
    if(this.state.clicked){
      this.setState({ clicked : false});
    } else {
      this.setState({ clicked : true});
    }
  }

  render () {
    return (
    	<div className="small_card">
	    		{this.props.track.title}
          {this.state.clicked ? <div className="cursorPointer" onClick={this.onClick}>Hide Search</div> : <div className="cursorPointer" onClick={this.onClick}>Search</div>  }
	        {this.state.clicked ? 
	          <SpotifySearchContainer title={this.props.track.title} />
	           : null
	        }
	   	</div>
    );
  }
}

