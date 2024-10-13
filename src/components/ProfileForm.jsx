import React, { useState, useEffect } from 'react';

export default function ProfileForm({ onSubmit, isEditing, editingProfile }) {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (isEditing && editingProfile) {
      setName(editingProfile.name);
      setPhoto(editingProfile.photo);
      setDescription(editingProfile.description);
      setAddress(editingProfile.address);
    } else {
      // Clear form when not editing
      setName('');
      setPhoto('');
      setDescription('');
      setAddress('');
    }
  }, [isEditing, editingProfile]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProfile = {
      id: editingProfile ? editingProfile.id : Date.now(),
      name,
      photo,
      description,
      address,
    };

    onSubmit(newProfile);

    // Clear form fields after submission
    setName('');
    setPhoto('');
    setDescription('');
    setAddress('');
  };

  return (
    <form className='Profile-Form' onSubmit={handleSubmit}>
      <h2>{isEditing ? 'Edit Profile' : 'Add Profile'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Photo URL"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <button type="submit">{isEditing ? 'Update Profile' : 'Add Profile'}</button>
    </form>
  );
}
