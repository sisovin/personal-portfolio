import { useState } from 'react';
import { useUserProfile } from '../../../hooks/useUserProfile';
import { Button } from '../../../components/ui/Button';

const Profile = () => {
  const { user, loading, error } = useUserProfile();
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [bio, setBio] = useState(user?.bio || '');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleSave = () => {
    // Save profile changes
    setEditMode(false);
  };

  return (
    <div className="p-4">
      <h1>User Profile Settings</h1>
      {editMode ? (
        <div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Bio:</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={() => setEditMode(false)}>Cancel</Button>
        </div>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
          <Button onClick={() => setEditMode(true)}>Edit Profile</Button>
        </div>
      )}
    </div>
  );
};

export default Profile;
