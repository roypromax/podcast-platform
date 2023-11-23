import { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projectData, setProjectData] = useState(null);

  const setProjectDetails = (data) => {
    setProjectData(data);
  };

  return (
    <ProjectContext.Provider value={{ projectData, setProjectDetails }}>
      {children}
    </ProjectContext.Provider>
  );
};
