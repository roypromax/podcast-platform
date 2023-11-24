import React, { useContext, useState } from "react";
import axios from "axios";
import { backendURL } from "../constants";
import { FileEditContext } from "../contexts/FileEditContext";
import { ProjectContext } from "../contexts/ProjectContext";
import Spinner from "./Spinner";

const EditDescriptionTab = () => {
  const { editFile, endEditMode } = useContext(FileEditContext);
  const { projectData } = useContext(ProjectContext);
  const [description, setDescription] = useState(editFile.description);
  const [isEditing, setEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveAndExit = () => {
    setIsLoading(true);
    axios
      .patch(`${backendURL}/podcastFile/update/${editFile._id}`, {
        description: description,
      })
      .then((res) => {
        console.log(res);
        endEditMode();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleDiscard = () => {
    setDescription(editFile.description);
    setEditing(false);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <h1 className="font-bold mb-4 text-[#7E22CE]">{`${projectData.name} / ${editFile.name}`}</h1>
          <h1 className="text-3xl text-[#7E22CE] font-bold">
            Edit Description
          </h1>
          {!isEditing && (
            <button
              className="bg-[#211935] text-white px-4 py-2 rounded my-4"
              onClick={() => setEditing(true)}
            >
              Edit Description
            </button>
          )}
          {isEditing && (
            <div className="flex justify-end my-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                onClick={handleDiscard}
              >
                Discard
              </button>
              <button
                className="bg-[#7E22CE] text-white px-4 py-2 rounded"
                onClick={handleSaveAndExit}
              >
                Save and Exit
              </button>
            </div>
          )}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`border border-[#7E22CE] rounded-md p-2 mb-4 w-full h-40 ${
              isEditing ? "bg-gray-50" : "bg-gray-300"
            }`}
            readOnly={!isEditing}
          />
          <button
            className="bg-[#211935] text-white px-4 py-2 rounded my-4 float-right"
            onClick={() => endEditMode()}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default EditDescriptionTab;
