import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import HomeMain from "../components/HomeMain";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Navbar />
      <HomeMain />
    </div>
  );
};

export default Home;
