import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  landingPage: {
    heading: "Welcome to Our Company",
    subheading: "We provide the best solutions for your business.",
    buttonText: "Get Started",
    styles: {
      backgroundColor: "#ffffff",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
    },
  },
  aboutUs: {
    heading: "About Us",
    text: "We are a leading company in our industry, committed to providing top-notch services to our clients.",
    styles: {
      backgroundColor: "#ffffff",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
    },
  },
  whoWeAre: {
    heading: "Who We Are",
    text: "Our team consists of experts with extensive experience and a passion for excellence.",
    styles: {
      backgroundColor: "#ffffff",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
    },
  },
  contactUs: {
    heading: "Contact Us",
    address: "123 Business St, Business City, BC 12345",
    phone: "(123) 456-7890",
    email: "info@company.com",
    styles: {
      backgroundColor: "#ffffff",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
    },
  },
  faq: [
    {
      question: "What services do you offer?",
      answer: "We offer a variety of services tailored to your needs.",
      styles: {
        backgroundColor: "#ffffff",
        color: "#000000",
        fontFamily: "Arial, sans-serif",
      },
    },
    {
      question: "How can we contact you?",
      answer: "You can contact us via phone or email.",
      styles: {
        backgroundColor: "#ffffff",
        color: "#000000",
        fontFamily: "Arial, sans-serif",
      },
    },
  ],
};

const templateSlice = createSlice({
  name: 'template',
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



export const { updateContent, updateStyles } = templateSlice.actions;
export default templateSlice.reducer;

