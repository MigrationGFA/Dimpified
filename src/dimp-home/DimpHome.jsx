// import node module libraries
import { Fragment } from "react";
import { Container } from "react-bootstrap";

// import custom components

import CTA2Buttons from "./CTA2Buttons";

// import sub components
import HeroFormCenter from "./HeroFormCenter";
import HeroRightImage from "./HeroRightImage";
import HeroRightImage2 from "./HeroRightImage2";
import HeroLeftImage from "./HeroLeftImage";
import TemplatesNoPlay from "./TemplatesNoPlay";
import Template4Columns from "./Template4Columns";
// import FeaturesWithBullets from "./FeaturesWithBullets";
import AppIntegration from "./AppIntegration";
import BecomeInstructor from "./BecomeInstructor";
import CourseCategory from "./CourseCategory";

import TestimonialSection from "./TestimonialSection";

// import layouts
import NavbarLanding from "./NavbarLanding";
import FooterWithLinks from "./FooterWithLinks";
import GradientBG from "../assets/images/background/gradient-bg.png";

// import required data files

const DimpHome = () => {
  return (
    <Fragment>
      {/* Default Navbar */}
      <NavbarLanding center />

      <main>
        {/* Page Content */}

        <HeroFormCenter />

        <section className="px-lg-20 px-6 py-8 py-lg-6 bg-white">
          <BecomeInstructor />
          <CourseCategory />
          <div className="my-6 my-lg-10 lh-2 mb-5 border-bottom"></div>

          {/* <Features4Columns /> */}
        </section>

        <section className="px-lg-20 px-6 py-4 py-lg-6 bg-white">
          <HeroLeftImage />

          {/* <Features4Columns /> */}
        </section>
        <section
          className="bg-cover"
          style={{ backgroundImage: `url(${GradientBG})` }}
        >
          <TemplatesNoPlay />
          <Template4Columns />
        </section>
        <section className="px-lg-20 px-6 py-8 py-lg-6 bg-white">
          <HeroRightImage />
        </section>
        <section className="px-lg-20 px-6 py-8 py-lg-6 bg-white">
          <HeroRightImage2 />
        </section>
        <AppIntegration />

        <section className="px-lg-20 px-6 py-8 py-lg-6 bg-white">
          <TestimonialSection />
        </section>

        {/*  CTA section */}
        <CTA2Buttons
          className="bg-primary"
          title="Are you ready? Sign Up Now!"
          btntext1="Get started for Free"
          btnlink1="/creator/signup"
          btntext2="Schedule a demo"
          btnlink2="https://calendly.com/jesutofunmi-ne2s"
        />
      </main>

      {/* Footer section */}
      <FooterWithLinks />
    </Fragment>
  );
};
export default DimpHome;
