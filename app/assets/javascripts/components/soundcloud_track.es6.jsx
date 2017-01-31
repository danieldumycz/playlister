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
	    		<div className="right_align">
          	{this.state.clicked ? null : <div className="right-align" onClick={this.onClick}>Add</div>  }
        	</div>
	        {this.state.clicked ? 
	          <SpotifySearchContainer title={this.props.track.title} />
	           : null
	        }
	   	</div>
    );
  }
}

