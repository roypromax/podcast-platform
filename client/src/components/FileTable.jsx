import axios from "axios";
import React from "react";
import { backendURL } from "../constants";

const FileTable = ({ files, getAllFiles }) => {
  const handleFileDelete = (file) => {
    axios
      .delete(`${backendURL}/podcastFile/delete/${file._id}`)
      .then((res) => {
        console.log(res);
        getAllFiles(file.project);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <table className="w-full mt-20">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border">Name</th>
          <th className="py-2 px-4 border">Upload Date & Time</th>
          <th className="py-2 px-4 border">Status</th>
          <th className="py-2 px-4 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {files.map((file) => (
          <tr key={file._id}>
            <td className="py-2 px-4 border text-center">{file.name}</td>
            <td className="py-2 px-4 border text-center">
              {new Date(file.uploadDateTime).toLocaleString()}
            </td>
            <td className="py-2 px-4 border text-center">
              {file.status ? "Done" : ""}
            </td>
            <td className="py-2 px-4 border text-center">
              <button className="mr-2 border-2 px-2 py-1 rounded">Edit</button>
              <button
                onClick={() => handleFileDelete(file)}
                className=" border-2 text-red-600 px-2 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FileTable;
