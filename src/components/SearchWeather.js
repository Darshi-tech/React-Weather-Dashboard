import React, { Component } from "react";
import { render } from "react-dom";
class SearchWeather extends React.Component {
constructor(props) {
super(props);
this.state = {
name: "React",
YOUR_LATITUDE: '',
lng: '' 
};
}
componentDidMount() {
this.map = new window.google.maps.Map(document.getElementById('map'), {
center: { lat: this.state.lat, lng: this.state.lng },
zoom: 13,
mapTypeId: 'roadmap',
});
}
componentWillReceiveProps(nextProps) {
if (nextProps.selectedVenue.lat !== this.props.selectedVenue.lat
|| nextProps.selectedVenue.lng !== this.props.selectedVenue.lng) {
this.map.setCenter({lat: nextProps.selectedVenue.lat, lng: nextProps.selectedVenue.lng});
}
}
render() {
return (
<div>
   <h4>Using geolocation JavaScript API SearchWeather React</h4>
</div>
);
}
}
export default SearchWeather;