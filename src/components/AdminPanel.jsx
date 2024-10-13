import React, { useState } from 'react';
import profiles from '../data/profiles';
import ProfileForm from './ProfileForm';
import { useEffect } from 'react';

export default function AdminPanel() {
    const [profile, setProfiles] = useState(profiles);
    useEffect(() => {
        try {
          const savedProfiles = JSON.parse(localStorage.getItem('profiles'));
          if (savedProfiles && Array.isArray(savedProfiles)) {
            setProfiles(savedProfiles);
          } else {
            setProfiles(profiles);
          }
        } catch (error) {
          console.error('Failed to parse profiles from localStorage:', error);
          setProfiles(profiles);
        }
      }, []);
      
      useEffect(() => {
        try {
          localStorage.setItem('profiles', JSON.stringify(profiles));
        } catch (error) {
          console.error('Failed to save profiles to localStorage:', error);
        }
      }, [profiles]);
      
    const [isEditing, setIsEditing] = useState(false);
    const [editingProfile, setEditingProfile] = useState(null);
  
    const handleAddProfile = (newProfile) => {
      setProfiles([...profile, { ...newProfile, id: profile.length + 1 }]);
    };
  
    const handleDeleteProfile = (id) => {
      setProfiles(profile.filter((profile) => profile.id !== id));
    };
  
    const handleEditProfile = (profile) => {
      setIsEditing(true);
      setEditingProfile(profile);
    };
  
    const handleUpdateProfile = (updatedProfile) => {
      setProfiles(profile.map((profile) =>
        profile.id === updatedProfile.id ? updatedProfile : profile
      ));
      setIsEditing(false);
      setEditingProfile(null);
    };
  
    return (
      <div>
        <h1>Admin Panel</h1>
        <ProfileForm
          onSubmit={isEditing ? handleUpdateProfile : handleAddProfile}
          isEditing={isEditing}
          editingProfile={editingProfile}
        />
  
        <h2>Manage Profiles</h2>
        <ul>
          {profile.map((profile) => (
            <li key={profile.id}>
              <img src={profile.photo} alt={profile.name} style={{ width: '50px', height: '50px' }} />
              <span>{profile.name}</span>
              <button onClick={() => handleEditProfile(profile)}>Edit</button>
              <button onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }