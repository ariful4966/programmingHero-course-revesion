import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const location = {
    lat: 23.496311,
    lng: 90.416386
};
const onLoad = marker => {
    console.log('marker: ', marker)
}

function Map() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyD-jWqRkl7OxyPQVSSoE7Zt3DIpRov52Ns"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={16}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <Marker
                    onLoad={onLoad}
                    position={location}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map)