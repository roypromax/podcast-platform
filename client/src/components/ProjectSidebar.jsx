import React, { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";

const ProjectSidebar = () => {
  const { projectData, setProjectDetails } = useContext(ProjectContext);

  console.log(projectData);

  const handleTabClick = (tab) => {
    setProjectDetails((prevData) => ({ ...prevData, selectedTab: tab }));
  };

  return (
    <div className="w-1/4 p-8 bg-[#F3E8FF] flex flex-col justify-between">
      <div className="flex flex-col items-start mb-8">
        <button
          className={`flex items-center w-full py-2 px-4 rounded ${
            projectData.selectedTab === "Projects"
              ? "bg-[#7E22CE] text-white"
              : ""
          }`}
          onClick={() => handleTabClick("Projects")}
        >
          <img className="w-5 mr-2" src="sidebarIcon.svg" alt="Projects Icon" />
          Projects
        </button>
        <button
          className={`flex items-center w-full py-2 px-4 rounded ${
            projectData.selectedTab === "Widget Configurations"
              ? "bg-[#7E22CE] text-white"
              : ""
          }`}
          onClick={() => handleTabClick("Widget Configurations")}
        >
          <img
            className="w-5 mr-2"
            src="sidebarIcon.svg"
            alt="Widget Configurations Icon"
          />
          Widget Configurations
        </button>
        <button
          className={`flex items-center w-full py-2 px-4 rounded ${
            projectData.selectedTab === "Deployment"
              ? "bg-[#7E22CE] text-white"
              : ""
          }`}
          onClick={() => handleTabClick("Deployment")}
        >
          <img
            className="w-5 mr-2"
            src="sidebarIcon.svg"
            alt="Deployment Icon"
          />
          Deployment
        </button>
        <button
          className={`flex items-center w-full py-2 px-4 rounded ${
            projectData.selectedTab === "Pricing"
              ? "bg-[#7E22CE] text-white"
              : ""
          }`}
          onClick={() => handleTabClick("Pricing")}
        >
          <img className="w-5 mr-2" src="sidebarIcon.svg" alt="Pricing Icon" />
          Pricing
        </button>
      </div>

      <div>
        <button
          className={`flex items-center w-full py-2 px-4 rounded ${
            projectData.selectedTab === "Settings"
              ? "bg-[#7E22CE] text-white"
              : ""
          }`}
          onClick={() => handleTabClick("Settings")}
        >
          <img
            className="w-7 mr-2"
            src="sidebarSettingsIcon.svg"
            alt="Settings Icon"
          />
          Settings
        </button>
      </div>
    </div>
  );
};

export default ProjectSidebar;
