import React from 'react';

const ProfileHeader = ({ name, bio, imageUrl }) => {
  return (
    <div className="profile-header">
      <div className="profile-avatar">
        {/* Placeholder image if not provided, using a stylish default */}
        <img 
          src={imageUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"} 
          alt={name} 
        />
      </div>
      <h1 className="profile-name text-gradient">{name}</h1>
      <p className="profile-bio">{bio}</p>
    </div>
  );
};

export default ProfileHeader;
