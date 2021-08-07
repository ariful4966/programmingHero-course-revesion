import React, { useState } from 'react'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const location = {
    lat: 23.792495,
    lng: 90.404542
};
function Direction() {

    const [directionResponse, setDirectionResponse] = useState(null)
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyD-jWqRkl7OxyPQVSSoE7Zt3DIpRov52Ns"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={14}
            >
                <DirectionsService
                    // required
                    options={{
                        destination: "United Hospital Dhaka Bangladesh",
                        origin: "Gulshan 1 Circle Dhaka Bangladesh",
                        travelMode: "DRIVING"
                    }}
                    // required
                    callback={res => {
                        if (res !== null) {
                            setDirectionResponse(res)
                        }
                    }}

                />
                {
                    directionResponse &&
                    <DirectionsRenderer
                        // required
                        options={{
                            directions: directionResponse
                        }}
                    />
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Direction)