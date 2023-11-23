import React from "react";

const CreateProject = () => {
  return (
    <div className="flex flex-col items-center px-44 my-10">
      <h1 className="text-5xl font-extrabold text-[#7E22CE] mb-10">
        Create a New Project
      </h1>
      <img className="w-96" src="mainImage.svg" alt="Main Image" />
      <p className="w-10/12 text-center my-10 text-gray-700 text-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam sequi
        eaque earum atque sit saepe, quo harum est vero error veritatis alias
        odio unde tenetur commodi proellendus eligendi magni natus ducimus
        tempora amet recusandae laboriosam temporibus?
      </p>
      <button className="bg-[#211935] flex space-x-2 items-center py-3 px-8 rounded-lg">
        <img
          className="w-7"
          src="createProjectButton.svg"
          alt="Create Project Button"
        />
        <span className="text-white font-medium text-2xl">
          Create New Project
        </span>
      </button>
    </div>
  );
};

export default CreateProject;
