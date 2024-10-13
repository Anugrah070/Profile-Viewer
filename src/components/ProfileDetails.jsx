import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { geocodeAddress } from './Geocode';
import profiles from '../data/profiles';

export default function ProfileDetails(){
    const {id}=useParams()
    const [profile, setProfile] = useState(null);
    const [location, setLocation] = useState(null);

    useEffect(() => {
        setProfile(null); 
        setLocation(null); 
        console.log('Profile ID from params:', id);
         
    const selectedProfile = profiles.find((p) => p.id === parseInt(id, 10));
    console.log('Selected profile:', selectedProfile);
    setProfile(selectedProfile);
    
    if (selectedProfile) {
        geocodeAddress(selectedProfile.address)
          .then((coords) => {
            setLocation(coords);
            console.log('Geocoded location:', coords);
          })
          .catch((error) => console.error('Error geocoding address:', error));
      }
      }, [id]);

      const mapContainerStyle = {
        width: '800px',
        height: '400px',
      };

      const defaultCenter = {
        lat: 37.7749, // Default latitude
        lng: -122.4194, // Default longitude
      };

      if (!profile) {
        return <p>Loading profile or profile not found. Please try again.</p>;
      }
  

  return(
    <div className='Profile-Details'>
      <h1>{profile.name}</h1>
      <img src={profile.photo} alt={profile.name} style={{ width: '150px', height: '150px',borderRadius:'20px' }} />
      <h3><b>Name:</b> {profile.name}</h3>

      <p><b>Address:</b> {profile.address}</p>

      <p><b>EmailID:</b> {profile.email}</p>

      <p><b>Address:</b> {profile.address}</p>

      <p><b>Interests:</b> {profile.interests}</p>

      
      <h2>Location on Map</h2>
      
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={location || defaultCenter}
          zoom={10}
        >
          {location && <Marker position={location} />}
        </GoogleMap>
      
    </div>

    

  )

    

}