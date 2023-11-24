import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { backendURL } from "../constants";
import Spinner from "./Spinner";

const SettingsTab = () => {
  const { user, setUser } = useContext(UserContext);
  const [isEditing, setEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(user.username);
  const [isLoading, setLoading] = useState(false);

  const handleUpdateUsername = () => {
    setLoading(true);
    axios
      .patch(`${backendURL}/users/update`, {
        username: newUsername,
        email: user.email,
      })
      .then((res) => {
        console.log(res);
        setUser(res.data.user);
        setEditing(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <h1 className="text-3xl font-bold text-[#7E22CE] mb-6">
            Account Settings
          </h1>
          <div className="flex items-center mb-6">
            <img
              src="dummyAvatar.svg"
              alt="User Avatar"
              className="w-28 h-28 rounded-full mr-4"
            />
            <div className="flex flex-col">
              <label htmlFor="username" className="mb-1">
                User Name:
              </label>
              <input
                type="text"
                id="username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="border border-[#7E22CE] rounded-md p-2 mb-2"
                readOnly={!isEditing}
              />
            </div>
            <div className="flex flex-col ml-4">
              <label htmlFor="email" className="mb-1">
                Email:
              </label>
              <input
                type="text"
                id="email"
                value={user.email}
                className="border border-[#7E22CE] rounded-md p-2 mb-2"
                readOnly
              />
            </div>
          </div>
          {!isEditing && (
            <button
              className="bg-[#211935] text-white px-4 py-2 rounded"
              onClick={() => setEditing(true)}
            >
              Edit Username
            </button>
          )}
          {isEditing && (
            <div className="flex justify-end mt-4 mr-64">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
              <button
                className="bg-[#7E22CE] text-white px-4 py-2 rounded"
                onClick={handleUpdateUsername}
              >
                Update Username
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SettingsTab;
