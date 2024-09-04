// import { useRef, useState } from "react";

// const useVideoEditor = () => {
//   const fileInputRefs = useRef({});
//   const [loadingVideo, setLoading] = useState(false);

//   const handleEditVideoClick = (section, field) => {
//     // Trigger the correct input for video upload
//     if (fileInputRefs.current[`${section}-${field}`]) {
//       fileInputRefs.current[`${section}-${field}`].click();
//     }
//   };

//   const handleVideoChange = async (event, section, field) => {
//     const file = event.target.files[0];
//     if (file) {
//       setLoading(true);
//       const formData = new FormData();
//       formData.append("file", file);
//       formData.append("upload_preset", "dimpified");
//       formData.append("cloud_name", "diz6tdgeo");

//       try {
//         const response = await fetch(
//           "https://api.cloudinary.com/v1_1/diz6tdgeo/video/upload",
//           {
//             method: "POST",
//             body: formData,
//           }
//         );

//         const data = await response.json();
//         if (data.secure_url) {
//           setLoading(false);
//           console.log("this is video", data.secure_url);
//           return data.secure_url; // Return the uploaded video URL
//         }
//       } catch (error) {
//         setLoading(false);
//         console.error("Error uploading video to Cloudinary:", error);
//       }
//     }
//   };

//   return {
//     fileInputRefs,
//     handleEditVideoClick,
//     handleVideoChange,
//     loadingVideo,
//   };
// };

// export default useVideoEditor;

import { useRef, useState } from "react";

const useVideoEditor = (handleSectionChange) => {
  const fileInputRefs = useRef({});
  const [loadingVideo, setLoading] = useState(false);

  const handleEditVideoClick = (section, field) => {
    // Trigger the correct input for video upload
    if (fileInputRefs.current[`${section}-${field}`]) {
      fileInputRefs.current[`${section}-${field}`].click();
    }
  };

  const handleVideoChange = async (event, sectionIndex, field) => {
    const file = event.target.files[0];
    if (file) {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", `${import.meta.env.VITE_UPLOAD_PRESET}`);
      formData.append("cloud_name", `${import.meta.env.VITE_CLOUD_NAME}`);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${
            import.meta.env.VITE_CLOUD_NAME
          }/video/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        if (data.secure_url) {
          setLoading(false);
          handleSectionChange(sectionIndex, field, data.secure_url); // Update the section with the video URL
        }
      } catch (error) {
        setLoading(false);
        console.error("Error uploading video to Cloudinary:", error);
      }
    }
  };

  return {
    fileInputRefs,
    handleEditVideoClick,
    handleVideoChange,
    loadingVideo,
  };
};

export default useVideoEditor;
