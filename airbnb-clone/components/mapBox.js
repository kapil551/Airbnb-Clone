import React, { useState } from 'react';

// https://github.com/visgl/react-map-gl
import ReactMapGL from 'react-map-gl';

// https://github.com/manuelbieh/geolib#getcentercoords
import getCenter from 'geolib/es/getCenter';

function MapBox({ searchResults }) {

    // transform the searchResults into this array
    /*
        [
            { latitude: 52.516272, longitude: 13.377722 },
            { latitude: 51.515, longitude: 7.453619 },
            { latitude: 51.503333, longitude: -0.119722 },
        ]
    */
    let coordinates = searchResults.map(({ lat, long }) => {
        return {
            latitude: lat,
            longitude: long
        }
    });

    console.log(coordinates);

    let centerCoordinate = getCenter(coordinates);
    console.log(centerCoordinate);

    const [viewport, setViewport] = React.useState({
        latitude: centerCoordinate.latitude,
        longitude: centerCoordinate.longitude,
        zoom: 11,
    });


    return (

        <ReactMapGL
            mapStyle={`mapbox://styles/kapilcr7/ckx42nw6o3rz714o5zbr49gjz`}
            mapboxApiAccessToken={process.env.mapbox_key}
            width="100%"
            height="100%"
            {...viewport} // spread operator ...
            onViewportChange={(nextViewport) => {
                setViewport(nextViewport)
            }}
        />
    )
}

export default MapBox;
