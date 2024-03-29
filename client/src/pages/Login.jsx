import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import { backendURL } from "../constants";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Spinner from "../components/Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const { isLoggedIn, login } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (isLoggedIn) {
    navigate("/");
  }

  const loginUserBackend = () => {
    setLoading(true);
    axios
      .post(`${backendURL}/users/login`, {
        email: email,
      })
      .then(function (response) {
        console.log(response.data);
        setUser(response.data.user);
        login();

        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        alert("Login/Signup failed. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex rounded-md border-2 shadow-md flex-col items-center w-4/12 m-auto mt-44 p-6">
          <div className="flex items-center space-x-2">
            <img className="w-10 h-10" src="directright.svg" alt="Logo" />
            <span className="text-2xl font-bold text-[#7E22CE]">LAMA.</span>
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border-2 rounded-md outline-none border-gray-500 px-3 py-1 my-5"
            type="text"
            placeholder="Enter email"
          />
          <button
            onClick={loginUserBackend}
            className="bg-[#211935] py-3 px-3 rounded-lg"
          >
            <span className="text-white font-medium text-lg">Login/Signup</span>
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
