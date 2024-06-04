// import node module libraries
import { Fragment } from "react";
import { Container } from "react-bootstrap";

// import custom components

import CTA2Buttons from "./CTA2Buttons";

// import sub components
import HeroFormCenter from "./HeroFormCenter";
import Features4Columns from "./Features4Columns";
import HeroRightImage from "./HeroRightImage";
import HeroLeftImage from "./HeroLeftImage";
import TemplatesShowcase from "./TemplateShowcase";
import FeaturesWithBullets from "./FeaturesWithBullets";
import AppIntegration from "./AppIntegration";

import TestimonialSection from "./TestimonialSection";

// import layouts
import NavbarLanding from "./NavbarLanding";
import FooterWithLinks from "./FooterWithLinks";

// import required data files

const DimpHome = () => {
  return (
    <Fragment>
      {/* Default Navbar */}
      <NavbarLanding center />

      <main>
        {/* Page Content */}

        <HeroFormCenter />
        
        <section className="px-lg-16 px-6 py-8 py-lg-16 bg-white">
          <HeroLeftImage />
          <TemplatesShowcase />
          <FeaturesWithBullets />
          <Features4Columns />
          <HeroRightImage />
        </section>
        <AppIntegration />

        <section className="bg-white">
          {/* <BecomeInstructor /> */}

          <Container>
            
            
            <TestimonialSection />
          </Container>
        </section>

        {/*  CTA section */}
        <CTA2Buttons
          className="bg-dark"
          title="Are you ready? Sign Up Now!"
          btntext1="Get started for Free"
          btnlink1="/authentication/sign-up"
          btntext2="Watch Demo"
          btnlink2="/authentication/sign-up"
        />
      </main>

      {/* Footer section */}
      <FooterWithLinks />
    </Fragment>
  );
};
export default DimpHome;
