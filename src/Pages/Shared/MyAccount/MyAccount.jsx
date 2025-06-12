import React from "react";
import useAuth from "../../../hooks/useAuth";

const MyAccount = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6">
        <p className="text-2xl font-medium text-center">
          Please login to access your account.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 flex justify-center items-start pt-20 px-6 md:px-12">
      <div className="max-w-4xl w-full bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-10">
        {/* Header */}
        <h1 className="text-4xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          Welcome back, <span className="text-indigo-600 dark:text-indigo-400">{user.displayName || "User"}</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Keep your profile up to date to get the best experience. Manage your account information below.
        </p>

        {/* Main content grid */}
        <div className="flex flex-col md:flex-row md:space-x-10">

          {/* Profile Image Section */}
          <div className="flex flex-col items-center mb-10 md:mb-0 md:w-1/3">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || "User"}
                className="w-32 h-32 rounded-full object-cover border border-gray-300 dark:border-gray-600"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-indigo-500 flex items-center justify-center text-6xl font-bold text-white">
                {user.displayName ? user.displayName[0].toUpperCase() : "U"}
              </div>
            )}
            <button
              onClick={() => alert("Profile picture update coming soon!")}
              className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium underline focus:outline-none"
            >
              Change Photo
            </button>
          </div>

          {/* User Info Section */}
          <div className="md:w-2/3 space-y-6">
            <Field label="Full Name" value={user.displayName} />
            <Field label="Email Address" value={user.email} />
            <Field label="Phone Number" value={user.phoneNumber || "Not provided"} />
            <Field label="Username" value={user.username || "Not provided"} />
            <Field label="User ID" value={user.uid} />
            <Field label="Gender" value={user.gender || "Not specified"} />

            <button
              onClick={() => alert("Profile update feature coming soon!")}
              className="mt-8 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Field = ({ label, value }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <input
      type="text"
      readOnly
      value={value || ""}
      placeholder="Not provided"
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 cursor-not-allowed focus:outline-none"
    />
  </div>
);

export default MyAccount;
