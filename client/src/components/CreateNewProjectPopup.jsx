import React, { useState } from "react";
import axios from "axios";
import { backendURL } from "../constants";

const CreateNewProjectPopup = ({ closePopup, user, setProjects }) => {
  const [projectName, setProjectName] = useState("");

  const handleCreateProject = () => {
    axios
      .post(`${backendURL}/project/create`, {
        user: user,
        name: projectName,
      })
      .then((response) => {
        setProjects(response.data.projects);
        closePopup();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-1/2">
        <h1 className="text-2xl font-bold mb-4">Create Project</h1>
        <label className="block mb-2">Enter Project Name:</label>
        <input
          type="text"
          placeholder="Type here"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        />
        <div className="flex justify-end">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
            onClick={closePopup}
          >
            Cancel
          </button>
          <button
            className="bg-[#7E22CE] text-white px-4 py-2 rounded"
            onClick={handleCreateProject}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewProjectPopup;
