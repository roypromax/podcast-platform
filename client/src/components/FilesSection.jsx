import React from "react";
import FileTable from "./FileTable";

const FilesSection = ({ files, getAllFiles }) => {
  if (files.length === 0) {
    return (
      <h1 className="text-3xl text-center font-extrabold text-[#7E22CE] mt-36">
        No Files Found. Please Upload!
      </h1>
    );
  } else {
    return <FileTable files={files} getAllFiles={getAllFiles} />;
  }
};

export default FilesSection;
