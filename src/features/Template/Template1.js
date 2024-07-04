import { createSlice } from '@reduxjs/toolkit';
// import { Audience } from 'EditTemplate/Template2';

const initialState = {
  navbar: {
    logo: "https://gfa-tech.com/testnet/lagup/images/logo-placeholder.png",
    links: [
      { text: "Home", href: "#hero" },
      { text: "About Us", href: "#about" },
      { text: "Audience", href: "#audience" },
      { text: "Benefit", href: "#benefit" },
      { text: "Contact-Us", href: "#contact" },
      { text: "FAQ", href: "#faq" },
    ],
    buttonText1: "Login",
    buttonText2: "Sign Up",
    styles: {
      backgroundColor: "#0F172A",
      color: "#94A398",
      fontFamily: "Arial, sans-serif",
    },
  },
  hero: {
    title: `Your Preferred Ecosystem Title.`,
    summary: `We are a company dedicated to providing the best solutions for your
            business needs. Our team of experts is here to support you every
            step of the way.`,
    buttonText: "Get Started",
    buttonColor: "#6343D8",
    backgroundImage: 'https://via.placeholder.com/1200x800',
    styles: {
      color: "#000000",
      fontFamily: "Arial, sans-serif",    
    },
  },
  aboutUs: {
    title: "About Us",
    header: `Providing Comprehensive Upskilling
              To Youths And SMEs`,
    text1: `We are a company dedicated to providing the best solutions for your
          business needs. Our team of experts is here to support you every step
          of the way.`,
    text2: `We are a company dedicated to providing the best solutions for your
          business needs. Our team of experts is here to support you every step
          of the way.`,
    styles: {
      backgroundColor: "#FFFFFF",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
       
    },
  },
   Vision: {
    heading: "Our Vision and Mission",
    text1: ` We are a company dedicated to providing the best solutions for your
          business needs. Our team of experts is here to support you every step
          of the way.`,
    text2: ` We are a company dedicated to providing the best solutions for your
          business needs. Our team of experts is here to support you every step
          of the way.`,
     buttonText1: "Join Us",
     image: "https://via.placeholder.com/1200x800",
    styles: {
      backgroundColor: "#FCFCFC",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
       
    },
  },
  Audience: {
    heading: "Who Should Enroll?",
    title1: `Professionals`,
    body1: `High-achieving individuals looking for advanced tools and
              resources to succeed.`,
    image1: "https://via.placeholder.com/150",
    title2: `Businesses`,
    body2: `Companies seeking innovative solutions to improve their operations
              and growth.`,
    image2: "https://via.placeholder.com/150",
     title3: `Entrepreneurs`,
    body3: `Visionary leaders ready to take their startups to the next level.`,
    image3: "https://via.placeholder.com/150",
    title4: `Entrepreneurs`,
    body4: `Visionary leaders ready to take their startups to the next level.`,
    image4: "https://via.placeholder.com/150",
    styles: {
      backgroundColor: "#CBD5E1",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
       
    },
  },

  CTA: {
    heading: "Join Us Today",
    text1: `Become part of our community and start enjoying the benefits right away!.`,
    
     buttonText1: "Get Started",
     image: "https://via.placeholder.com/500x300",
    styles: {
      color: "#000000",
      fontFamily: "Arial, sans-serif",
    },
  },
  WhyUs: {
    topic: "Why should you apply for the program?",
    header: `We are a company dedicated to providing the best solutions for your
          business needs. Our team of experts is here to support you every step
          of the way.`,
    title1: `Innovative Solutions`,
    body1: `Our cutting-edge solutions are 
                  designed to address the unique
                  
                  challenges of your business.`,
    title2: `Expert Support`,
    body2: ` Our team of experts is available 24/7 to provide the support
                  you need to succeed.`,
     title3: `Scalable Services`,
    body3: `Our services are designed to grow with your business, ensuring
                  you always have what you need.`,
    title4: `Cost Effective`,
    body4: `We offer competitive pricing to ensure you get the best value
                  for your investment.`,
    styles: {
      backgroundColor: "#FCFCFC",
      color: "#000000",
      fontFamily: "Arial, sans-serif",

    },
  },

  contactUs: {
    heading: "Contact Us",
    Name: "Full-Name",
    Email: "Email",
    Message: "Message",
    buttonText1: "Submit",
    styles: {
      backgroundColor: "#FFFFFF",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
    },
  },
  faq: [
    {
      question: "What services do you offer?",
      answer: "We offer a variety of services tailored to your needs.",
      styles: {
      backgroundColor: "#0F172A",
      color: "#FFFFFF",
      fontFamily: "Arial, sans-serif",
    },
    },
    {
      question: "How can we contact you?",
      answer: "You can contact us via phone or email.",
      styles: {
      backgroundColor: "#0F172A",
      color: "#FFFFFF",
      fontFamily: "Arial, sans-serif",
    },
    },
    {
      question: "What are your pricing plan?",
      answer: "We offer flexible pricing plans to meet the needs of different types of businesses. Please visit our pricing page for more details.",
      styles: {
      backgroundColor: "#0F172A",
      color: "#FFFFFF",
      fontFamily: "Arial, sans-serif",
    },
    },
     {
      question: "Can i customize my service?",
      answer: "Yes, we offer customizable service packages to ensure you get exactly what you need for your business.",
      styles: {
      backgroundColor: "#0F172A",
      color: "#FFFFFF",
      fontFamily: "Arial, sans-serif",
    },
    }
  ],
   faqStyles: {
      backgroundColor: "#CBD5E1",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
    },

 footer: {
    logo: "https://gfa-tech.com/testnet/lagup/images/logo-placeholder.png",
    header: `Your Ecosystem Summary`,
    title1: `Company`,
    title2: `Support`,
    title3: `Get in touch`,
    body1name1: `About`,
    body1name2: `Benefit`,
    body1name3: `Audience`,
    body2name1: `FAQs`,
    body2name2: `Contact Us`,
     body3name1: `Your Address: put your address address`,
    body3name2: `Email: @email@youremail-tech.com`,
    body3name3: `Phone: 090000000000`,
    footerTags: "© 2024 GFA-Tech, Inc. All Rights Reserved",
    styles: {
      backgroundColor: "#0F172A",
      color: "#FFFFFF",
      fontFamily: "Arial, sans-serif",
    },
  },
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
    updateFAQ(state, action) {
      const { index, field, value } = action.payload;
      state.faq[index][field] = value;
    },
  },
});



export const { updateContent, updateStyles, updateFAQ } = templateSlice.actions;
export default templateSlice.reducer;

