import React, { createContext, useState } from "react";

export const FileEditContext = createContext();

export const FileEditProvider = ({ children }) => {
  const [editMode, setEditMode] = useState(false);
  const [editFile, setEditFile] = useState(null);

  const endEditMode = () => {
    setEditMode(false);
  };

  const updateEditFile = (file) => {
    setEditFile(file);
    setEditMode(true);
  };

  return (
    <FileEditContext.Provider
      value={{ editMode, editFile, endEditMode, updateEditFile }}
    >
      {children}
    </FileEditContext.Provider>
  );
};
