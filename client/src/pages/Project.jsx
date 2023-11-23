import React, { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import ProjectSidebar from "../components/ProjectSidebar";
import ProjectsTab from "../components/ProjectsTab";
import WidgetConfigurationsTab from "../components/WidgetConfigurationsTab";
import DeploymentAndPricingTab from "../components/DeploymentTab";
import SettingsTab from "../components/SettingsTab";
import Navbar from "../components/Navbar";
import PricingTab from "../components/PricingTab";

const ProjectPage = () => {
  const { projectData } = useContext(ProjectContext);

  console.log(projectData);

  return (
    <div className="flex flex-col border-2 h-screen">
      <Navbar />
      <div className="flex h-full">
        <ProjectSidebar />

        <div className="flex-grow p-8">
          {projectData && (
            <>
              {projectData.selectedTab === "Projects" && <ProjectsTab />}
              {projectData.selectedTab === "Widget Configurations" && (
                <WidgetConfigurationsTab />
              )}
              {projectData.selectedTab === "Deployment" && (
                <DeploymentAndPricingTab />
              )}
              {projectData.selectedTab === "Pricing" && <PricingTab />}
              {projectData.selectedTab === "Settings" && <SettingsTab />}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
