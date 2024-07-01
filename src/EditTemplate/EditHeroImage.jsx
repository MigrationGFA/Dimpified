import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateContent } from "../features/Template/Form1"; // Adjust the import path as needed

const EditHeroImage = (section, field) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleEditImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(
          updateContent({
            section: section,
            field: field,
            value: reader.result,
          })
        );
      };
      reader.readAsDataURL(file);
    }
  };

  return {
    fileInputRef,
    handleEditImageClick,
    handleImageChange,
  };
};

export default EditHeroImage;
