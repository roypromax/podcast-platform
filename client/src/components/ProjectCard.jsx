import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../contexts/ProjectContext";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const { setProjectDetails } = useContext(ProjectContext);

  const handleCardClick = () => {
    setProjectDetails((prevData) => ({ ...prevData, ...project }));

    navigate("/project");
  };

  return (
    <div
      className="flex items-center space-x-4 border-2 p-5 rounded-2xl shadow-lg cursor-pointer hover:bg-gray-100"
      onClick={handleCardClick}
    >
      <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-blue-400">
        <span className="text-3xl text-white font-medium"> SP </span>
      </div>
      <div>
        <h3 className="text-3xl font-semibold">{project.name}</h3>
        <p className="text-xl mb-4">4 Episodes</p>
        <p className="text-gray-600">last edited a week ago</p>
      </div>
    </div>
  );
};

export default ProjectCard;
