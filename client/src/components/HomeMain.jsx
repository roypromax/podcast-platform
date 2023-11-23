import React, { useEffect, useState } from "react";
import CreateProject from "./CreateProject";
import ListProjects from "./ListProjects";
import axios from "axios";
import { backendURL } from "../constants";

const user = JSON.parse(localStorage.getItem("lamaUser"));

const HomeMain = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${backendURL}/project/${user._id}`)
      .then((res) => {
        setProjects(res.data.projects);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <div>Loading.......</div>;
  } else if (projects === null || projects.length === 0) {
    return <CreateProject />;
  } else {
    return <ListProjects projects={projects} />;
  }
};

export default HomeMain;
