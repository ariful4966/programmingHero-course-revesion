import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import { connect } from 'react-redux';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function SimpleMap(props) {
    const [place, setPlace] = useState(
        {
            showingInfoWindow: false,  // Hides or shows the InfoWindow
            activeMarker: {},          // Shows the active marker upon click
            selectedPlace: {}
        }
    )
    const onMarkerClick = (props, marker, e) =>
        setPlace({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    const onClose = props => {
        if (place.showingInfoWindow) {
            setPlace({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    const { id, places } = props.dataFilter;
    const center = {
        lat: places[0].latlong.lat,
        lng: places[0].latlong.lon
    };
    const zoom = 11;

   


    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyATA6RIXr-AdyXWK7fxDKSc2VHTGOuuKqY' }}
                onGoogleApiLoaded={({ map, maps }) => {
                    console.log(map, maps);
                }}
                defaultCenter={
                    center
                }
                defaultZoom={zoom}
                // style={{style}}
            >
                {
                    places.map(pl =>
                        <AnyReactComponent
                            key={pl.id}
                            lat={pl.latlong.lat}
                            lng={pl.latlong.lon}
                            text={pl.title}
                        />
                    )
                }
            </GoogleMapReact>
        </div>
    );

}

const mapStateToProps = (state) => {
    return state.bookingReducer
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleMap);