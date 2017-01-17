class SoundcloudTrack extends React.Component {
  render () {
    return (
    	<div>
	    	<li className="w3-card">
	    		{this.props.track.title}
	    	</li>
	   	</div>
    );
  }
}

