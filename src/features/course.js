import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courseTitle: "",
    category: "",
    subCategory: "",
    level: "",
    type: "",
    price: "",
    description: "",
    currency: "",
    curriculum: [],
    requirements: [],
    courseCoverImage: null,
    totalDuration: "",
    includedOptions: []
  };
  

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    updateCourseData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetCourseData: () => {
      return initialState;
    },
    addTopic: (state, action) => {
      if (!Array.isArray(state.curriculum)) {
        state.curriculum = [];
      }
      state.curriculum.push(action.payload);
    },
    updateTopic: (state, action) => {
      const { index, topic } = action.payload;
      if (Array.isArray(state.curriculum) && index < state.curriculum.length) {
        state.curriculum[index] = topic;
      }
    },
    removeTopic: (state, action) => {
      if (Array.isArray(state.curriculum)) {
        state.curriculum.splice(action.payload, 1);
      }
    },
    setRequirements: (state, action) => {
      // Ensure action.payload is an array
      if (Array.isArray(action.payload)) {
        // Filter out invalid values and convert each string into an object
        const filteredPayload = action.payload
          .filter((tag) => typeof tag === "string" && tag.trim() !== "") // Filter out invalid values
          .map((tag) => ({ name: tag.trim() })); // Convert each string into an object with the specified format

        // Check if filteredPayload is an array and each element is an object with the specified format
        if (
          Array.isArray(filteredPayload) &&
          filteredPayload.every(
            (tagObject) => typeof tagObject === "object" && tagObject.name
          )
        ) {
          state.requirements = filteredPayload;
        } else {
          console.error(
            "Invalid payload in setRequirements reducer:",
            filteredPayload
          );
        }
      }
    },
    setCourseCoverImage: (state, action) => {
        state.courseCoverImage = action.payload;
      },
      setTotalDuration: (state, action) => {
        state.totalDuration = action.payload;
      },
      setIncludedOptions: (state, action) => {
        state.includedOptions = action.payload;
      }
  },
});

export const {
    updateCourseData,
    resetCourseData,
    addTopic,
    updateTopic,
    removeTopic,
    setRequirements,
    setCourseCoverImage,
    setTotalDuration,
    setIncludedOptions
  } = courseSlice.actions;
  
  export default courseSlice.reducer;