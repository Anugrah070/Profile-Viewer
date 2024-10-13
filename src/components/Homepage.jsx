import React, { useState, useEffect } from "react";
import profiles from "../data/profiles";
import ProfileCard from "./ProfileCard";
import ProfileForm from "./ProfileForm";

export default function Homepage() {
  const [pro, setProfiles] = useState(profiles);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProfile, setEditingProfile] = useState(null);

  const handleAddProfile = (newProfile) => {
    setProfiles([...pro, { ...newProfile, id: pro.length + 1 }]);
  };

  const handleDeleteProfile = (id) => {
    setProfiles(pro.filter((profile) => profile.id !== id));
  };

  const handleEditProfile = (profile) => {
    setIsEditing(true);
    setEditingProfile(profile);
  };

  const handleUpdateProfile = (updatedProfile) => {
    setProfiles(
      pro.map((profile) =>
        profile.id === updatedProfile.id ? updatedProfile : profile
      )
    );
    setIsEditing(false);
    setEditingProfile(null);
  };

  return (
    <div>
      <h1>Profiles</h1>

      <div className="profile-list">
        {pro.map((profile) => (
          <li key={profile.id}>
            <ProfileCard profile={profile} />
            <button className="Modifybtn" onClick={() => handleEditProfile(profile)}>Edit</button>
            <button className="Modifybtn" onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
          </li>
        ))}
      </div>

      <ProfileForm
        onSubmit={isEditing ? handleUpdateProfile : handleAddProfile}
        isEditing={isEditing}
        editingProfile={editingProfile}
      />
    </div>
  );
}

