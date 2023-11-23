import React, { useState } from "react";
import axios from "axios";
import { backendURL } from "../constants";
import Spinner from "./Spinner";

const UploadFilePopup = ({ closePopup, project, setFiles }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isloading, setLoading] = useState(false);

  const handleCreateFile = () => {
    setLoading(true);
    axios
      .post(`${backendURL}/podcastFile/create`, {
        project,
        name,
        description,
      })
      .then((response) => {
        setFiles(response.data.podcastFiles);
        setLoading(false);
        closePopup();
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
      {isloading ? (
        <Spinner />
      ) : (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-1/2">
            <h1 className="text-2xl font-bold mb-4">Upload File</h1>
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <label className="block mb-2">Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
                onClick={handleCreateFile}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadFilePopup;
