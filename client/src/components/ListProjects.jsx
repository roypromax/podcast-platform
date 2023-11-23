import React from "react";
import ProjectCard from "./ProjectCard";

const ListProjects = ({ projects, openPopup }) => {
  return (
    <div className="px-44">
      <div className="flex justify-between items-center my-10">
        <h1 className="text-5xl font-semibold text-[#7E22CE]">Projects</h1>

        <button
          onClick={openPopup}
          className="bg-[#211935] flex space-x-2 items-center py-2 px-5 rounded-lg"
        >
          <img
            className="w-5"
            src="createProjectButton.svg"
            alt="Create Project Button"
          />
          <span className="text-white font-medium">Create New Project</span>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project._id} project={project} />;
        })}
      </div>
    </div>
  );
};

export default ListProjects;
