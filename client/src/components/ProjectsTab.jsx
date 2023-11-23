import React, { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import UploadFilePopup from "./UploadFilePopup";
import FilesSection from "./FilesSection";
import axios from "axios";
import { backendURL } from "../constants";
import Spinner from "./Spinner";

const ProjectsTab = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const { projectData } = useContext(ProjectContext);
  console.log(projectData);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const getAllFiles = (projectID) => {
    setLoading(true);
    axios
      .get(`${backendURL}/podcastFile/${projectID}`)
      .then((res) => {
        console.log(res.data);
        setFiles(res.data.podcastFiles);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllFiles(projectData._id);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col">
          <h1 className="text-3xl font-extrabold text-[#7E22CE] mb-10">
            {projectData.name}
          </h1>
          <div className="flex justify-around">
            <div
              className="flex items-center space-x-2 border rounded-lg shadow-lg p-3 hover:cursor-pointer"
              onClick={openPopup}
            >
              <img className="w-10" src="youtubeIcon.svg" alt="Youtube Icon" />
              <p className="font-medium">Upload Youtube Video</p>
            </div>
            <div
              className="flex items-center space-x-2 border rounded-lg shadow-lg p-3 hover:cursor-pointer"
              onClick={openPopup}
            >
              <img className="w-10" src="spotifyIcon.svg" alt="Spotify Icon" />
              <p className="font-medium">Upload Spotify Podcast</p>
            </div>
            <div
              className="flex items-center space-x-2 border rounded-lg shadow-lg p-3 hover:cursor-pointer"
              onClick={openPopup}
            >
              <img className="w-10" src="rssIcon.svg" alt="RSS Icon" />
              <p className="font-medium">Upload from RSS Feed</p>
            </div>
          </div>
          {isPopupOpen && (
            <UploadFilePopup
              setFiles={setFiles}
              project={projectData._id}
              closePopup={closePopup}
            />
          )}
          <FilesSection files={files} getAllFiles={getAllFiles} />
        </div>
      )}
    </>
  );
};

export default ProjectsTab;
