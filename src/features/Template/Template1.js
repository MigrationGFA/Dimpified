import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navbar: {
    logo: "https://via.placeholder.com/50",
    links: [
      { text: "Home", href: "#landingPage" },
      { text: "About Us", href: "#landingPage" },
      { text: "Who We Are", href: "#whoWeAre" },
      { text: "Contact Us", href: "#contactUs" },
      { text: "FAQ", href: "#faq" },
    ],
    buttonText: "Get Started",
    styles: {
      backgroundColor: "#ffffff",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
    },
  },
  landingPage: {
    heading: `Welcome OGun Tech Skil",
    subheading: "The Heart Land Skills Program is a visionary initiative aimed to provide youth and SMEs comprehensive support in areas such as digital literacy, entrepreneurship training, access to finance, mentorship, as well as placement for jobs and income generation opportunities. Our mission is to unleash the potentials of youth and SMEs through relevant technological training and skill acquisition.
     <br />
    Our vision involves selecting and nurturing potential youths and early-stage businesses in imo State. Through tailored mentorship, skill enhancement, and the seamless integration of cutting-edge technology, we aspire to make youths job-ready and catapult businesses to unprecedented levels of success.
    `,
    buttonText: "Get Started",
    styles: {
      backgroundColor: "#CBD5E1",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
      minHeight: "400px",
      textAlign: "center",
       paddingTop: "50px",
    paddingBottom: "30px",
      width: "100%"
    },
  },
  aboutUs: {
    heading: "About Us",
    text: `<i className="fa fa-quote-left" />
                      <br />
                      We are committed to harnessing the incredible potential of
                      our city to become Africa's leading tech skill hub. With
                      our vibrant ecosystem, diverse talent pool, and strategic
                      partnerships, we're laying the foundation for innovation
                      and entrepreneurship to thrive.
                      <br /> <br />
                      Together, we will propel imo to the forefront of
                      technological advancement, empowering our youth and
                      driving economic growth for generations to come.
                      <br />
                      <i className="fa fa-quote-right" />`,
    styles: {
      backgroundColor: "#FFFFFF",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
       minHeight: "400px",
      textAlign: "center",
       paddingTop: "50px",
    paddingBottom: "30px",
      width: "100%"
    },
  },
  whoWeAre: {
    heading: "Who Should Enroll",
    text: ` The Program is for indigenes and resident of ogun state that are:`,
    styles: {
      backgroundColor: "#CBD5E1",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
       minHeight: "400px",
      textAlign: "center",
       paddingTop: "50px",
    paddingBottom: "30px",
      width: "100%"
    },
  },
  contactUs: {
    heading: "Contact Us",
    address: "123 Business St, Business City, BC 12345",
    phone: "(123) 456-7890",
    email: "info@company.com",
    styles: {
      backgroundColor: "#FFFFFF",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
       minHeight: "400px",
      textAlign: "center",
       paddingTop: "50px",
    paddingBottom: "30px",
      width: "100%"
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
   faqStyles: {
      backgroundColor: "#CBD5E1",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
       minHeight: "400px",
      textAlign: "center",
       paddingTop: "50px",
    paddingBottom: "30px",
      width: "100%"
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
  },
});



export const { updateContent, updateStyles } = templateSlice.actions;
export default templateSlice.reducer;

