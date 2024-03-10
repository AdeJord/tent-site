import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const googleMapUrl = process.env.GOOGLE_MAP_URL

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAG9y7Pqx9w1_0NoqBiZAXReSeVoKasYZ8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: 52.674392008660035, lng: -2.0957279156720516 }}>
    
    <Marker position={{ lat: 52.674392008660035, lng: -2.0957279156720516 }} />

  </GoogleMap>
));
export default MyMapComponent;
