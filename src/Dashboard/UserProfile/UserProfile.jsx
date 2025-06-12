import React, { useEffect, useState } from "react";

const ProfilePage = ({ email }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!email) return;

    fetch(`http://localhost:5000/user/profile/${email}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch profile");
        return res.json();
      })
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [email]);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!profile) return <p>No profile data</p>;

  return (
    <div className="max-w-md mx-auto p-6 border rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <img
        src={profile.photoURL || "https://i.pravatar.cc/150?u=" + profile.email}
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <p>
        <strong>Name:</strong> {profile.name || "No name provided"}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
      <p>
        <strong>Phone:</strong> {profile.phone || "No phone number"}
      </p>
      <p>
        <strong>Address:</strong> {profile.address || "No address"}
      </p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default ProfilePage;
