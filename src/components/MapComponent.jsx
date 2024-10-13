import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { geocodeAddress } from './Geocode';

function MapComponent({ address }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    geocodeAddress(address)
      .then((coords) => setLocation(coords))
      .catch((error) => console.error('Error geocoding address:', error));
  }, [address]);

  const mapContainerStyle = {
    width: '1000px',
    height: '1000px',
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBe1chlT1I_xDkJHHdsoOnTpogJYtSQQpM">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={location || defaultCenter}
        zoom={10}
      >
        {location && <Marker position={location} />}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
