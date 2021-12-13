import React, { useState } from 'react';

// https://github.com/visgl/react-map-gl
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

// https://github.com/manuelbieh/geolib#getcentercoords
import getCenter from 'geolib/es/getCenter';

function MapBox({ searchResults }) {

    // useState hook
    const [currCoordinates, setCurrCoordinates] = useState({});

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

    // console.log(coordinates);

    let centerCoordinate = getCenter(coordinates);
    // console.log(centerCoordinate);

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
        >

            {/* run through the searchResults and show a marker
                for each searchResutls item on the map 
            */}
            {
                searchResults.map((item) => {
                    
                    return (
                        <div key={item.long}>
                            {/* https://visgl.github.io/react-map-gl/docs/api-reference/marker */}
                            <Marker
                                longitude ={item.long}
                                latitude ={item.lat}
                                offSetLeft ={-20}
                                offSetTop={-10}
                            >
                            <p 
                                className="animate-bounce cursor-pointer text-2xl"
                                onClick={() => {
                                    // console.log(item.title);
                                    setCurrCoordinates(item)
                                }}
                                role='img'
                                aria-label='push-pin'
                                > 
                                📌
                            </p>
                            </Marker>
                              
                            {/* The popup that should show if the user clicks on a marker */}
                            {/* https://visgl.github.io/react-map-gl/docs/api-reference/popup */}
                            {
                                currCoordinates.long === item.long && 
                                (
                                    <Popup
                                        onClose={() => setCurrCoordinates({})}
                                        closeOnClick={true}
                                        latitude={item.lat}
                                        longitude={item.long}
                                        
                                    >
                                        { item.title }
                                        {`on click`}
                                    </Popup>
                                )
                            }
                        </div>
                    )
                })
            }
        </ReactMapGL>
    )
}

export default MapBox;
