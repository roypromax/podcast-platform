import React, { useEffect, useState } from "react";
import CreateProject from "./CreateProject";
import ListProjects from "./ListProjects";
import axios from "axios";
import { backendURL } from "../constants";
import CreateNewProjectPopup from "./CreateNewProjectPopup";

const user = JSON.parse(localStorage.getItem("lamaUser"));

const HomeMain = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${backendURL}/project/${user._id}`)
      .then((res) => {
        console.log(res.data);
        setProjects(res.data.projects);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {isPopupOpen && (
        <CreateNewProjectPopup
          user={user}
          closePopup={closePopup}
          setProjects={setProjects}
        />
      )}
      {loading ? (
        <div>Loading.......</div>
      ) : projects === null || projects.length === 0 ? (
        <CreateProject openPopup={openPopup} />
      ) : (
        <ListProjects projects={projects} openPopup={openPopup} />
      )}
    </div>
  );
};

export default HomeMain;
