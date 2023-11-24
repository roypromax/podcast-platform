import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { backendURL } from "../constants";
import { ProjectContext } from "../contexts/ProjectContext";
import Spinner from "./Spinner";

const WidgetConfigurationsTab = () => {
  const { projectData } = useContext(ProjectContext);
  const [botIcon, setBotIcon] = useState("");
  const [newBotIcon, setNewBotIcon] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewBotIcon(file);
  };

  const handleUpdateBotIcon = () => {
    if (newBotIcon) {
      const formData = new FormData();
      formData.append("file", newBotIcon);

      setLoading(true);

      axios
        .post(`${backendURL}/widget/create/${projectData._id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setBotIcon(response.data.botIcon);
        })
        .catch((error) => {
          console.log(error);
          setNewBotIcon(null);
          alert("Error uploading bot icon. Please try again.");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      alert("Please upload an image.");
    }
  };

  const getBotIcon = () => {
    axios
      .get(`${backendURL}/widget/${projectData._id}`)
      .then((response) => {
        setBotIcon(response.data.botIcon);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBotIcon();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <h1 className="text-3xl font-bold text-[#7E22CE] mb-6">
            Configuration
          </h1>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Bot Icon</h2>
            <div className="flex items-center mb-4">
              <img
                src={botIcon || "botIcon.svg"}
                alt="Bot Icon"
                className="w-32 h-32 rounded-full mr-4"
              />
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mb-2"
                />
                <button
                  className="bg-[#211935] text-white px-4 py-2 rounded"
                  onClick={handleUpdateBotIcon}
                >
                  Update Bot Icon
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WidgetConfigurationsTab;
