
import React, { Component } from 'react';
import Map from '../components/GoogleMap';
// Now export the above Map component into another component by passing the props values
class GMap extends Component {
  render() {
    return(
        <Map
     google={this.props.google}
     center={{lat: 18.5204, lng: 73.8567}}
     height='300px'
     zoom={15}
    />
      )
  }
    
    
    
}

export default GMap;