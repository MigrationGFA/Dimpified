import React, { useRef } from "react";

export const EditableImage = ({ initialImage, onImageChange }) => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      onImageChange(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div onClick={handleImageClick} style={{ cursor: "pointer" }}>
      <img src={initialImage} alt="logo" width="100" />
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

// editable logo image
export const EditableBackgroundImage = ({ initialImage, onImageChange }) => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      onImageChange(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div onClick={handleImageClick} style={{ cursor: "pointer" }}>
      <img src={initialImage} alt="image" />
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};
