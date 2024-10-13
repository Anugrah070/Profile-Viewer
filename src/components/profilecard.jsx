import React,{useState}from "react";
import MapComponent from "./MapComponent";
import { useNavigate } from 'react-router-dom';

export default function ProfileCard({profile}){
    const navigate = useNavigate();
    const handleProfileClick = () => {
        navigate(`/profile/${profile.id}`);
      };
    // const [showMap, setShowMap] = useState(false);
    // const handleViewOnMap = () => {
    //     setShowMap(!showMap);
    //   };
    return(
        <>
        <div className="profile-card" onClick={handleProfileClick}>
        <img src={profile.photo} alt=""  style={{ width: '100px', height: '100px', borderRadius: '20px' }}/>
        <h2>{profile.name}</h2>
        <p>{profile.description}</p>
        <button className="Modifybtn">View Summary</button>
        {/* <button onClick={handleViewOnMap}>{showMap ? 'Hide Map' : 'View on Map'}</button> */}
        {/* {showMap && <MapComponent address={profile.address} />} */}
        </div>
        </>
    
    )
}