import React, { useEffect, useState } from "react";

const FileViewer = () => {
  const [fileData, setFileData] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_PLAIN_URL}/files/ms14991499.txt`) // Backend endpoint
      .then((response) => response.text()) // Use response.text() for plain text
      .then((data) => setFileData(data))
      .catch((error) => console.error("Error fetching the file:", error));
  }, []);

  return (
    <div>
      <pre>{fileData}</pre> {/* Display the file content */}
    </div>
  );
};

export default FileViewer;
