import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  sidebar: {
    image: "https://via.placeholder.com/1200x800",
    styles: {
      color: "#000000",
    },
  },

  logo: {
     image: "https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image-300x300.png",
  },
  
   Page1: {
    heading: "Your Journey begins here!",
    sub: `Kindly fill up the fields to join our ecosystem`,
    topic1: `First Name`,
    topic2: `Last Name`,
    topic3: `Email`,
    topic4: `Phone`,
     buttonText1: "Next",
     footer: "Already have an account? Sign-in",
    styles: {
      backgroundColor: "#FCFCFC",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
       
    },
  },
  Page3: {
    heading: "FInal step!",
    sub: `Kindly fill up the fields to join our ecosystem`,
    topic1: `Username`,
    topic2: `Password`,
    topic3: `Confirm Password`,
    topic4: `Country`,
     buttonText1: "Submit",
     buttonText2: "Back",
    styles: {
      backgroundColor: "#FCFCFC",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
       
    },
  },

  Page2: {
    heading: "You're gettimg there!",
    sub: `Kindly fill up the fields to join our ecosystem`,
    topic1: `Address`,
    topic2: `Zip Code`,
    topic3: `City`,
    topic4: `Country`,
     buttonText1: "Next",
     buttonText2: "Next",
    styles: {
      backgroundColor: "#FCFCFC",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
       
    },
  },

};

const FormSlice1 = createSlice({
  name: 'form1',
  initialState,
  reducers: {
    updateContent(state, action) {
      const { section, field, value, index } = action.payload;
      if (typeof index === 'number') {
        state[section][index][field] = value;
      } else {
        state[section][field] = value;
      }
    },
    updateStyles(state, action) {
      const { section, styles } = action.payload;
      state[section].styles = { ...state[section].styles, ...styles };
    },
  },
});



export const { updateContent, updateStyles, } = FormSlice1.actions;
export default FormSlice1.reducer;

