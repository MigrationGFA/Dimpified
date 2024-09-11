// import node module libraries
import { Fragment } from "react";
import { Container, Button, Col } from "react-bootstrap";

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
import { PlayCircleFill } from "react-bootstrap-icons";

// import required data files

const DimpHome = () => {
  return (
    <Fragment>
      {/* Default Navbar */}
      <NavbarLanding center />

      <main className="primary-font text-dark">
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

        <section className="px-lg-20 px-4 py-8 py-lg-6  bg-white">
          <TestimonialSection />
        </section>

        {/*  CTA section */}
        <section className="">
          <Container>
            <Col xl={12} lg={12} md={12}>
              <div className="bg-primary py-lg-16 p-6 mb-lg-10 mb-6 px-lg-20 rounded-4 text-center">
                <div>
                  <h2 className="alt-font fs-40 fw-400 text-white ls-minus-2px mb-4">
                    Your business just got way more easier.
                  </h2>
                  <p className="text-white fs-4">
                    Get a website. Get booked. Increase sales. Delight
                    customers.
                  </p>
                  <Button
                    variant="white"
                    href="/creator/signup"
                    className="btn btn-extra-large rounded-3 px-6"
                  >
                    Get Started For Free
                  </Button>
                </div>
              </div>
            </Col>
          </Container>
        </section>
        <Button
          variant="medium btn-primary btn-big border-1 border-color-transparent-white-light btn-rounded"
          style={{
            position: "fixed",
            right: "40px",
            bottom: "60px",
            zIndex: 1000,
            fontSize: "16px",
          }}
        >
          Watch Demo{" "}
          <span>
            <PlayCircleFill size={20} />
          </span>
        </Button>
      </main>

      {/* Footer section */}
      <FooterWithLinks />
    </Fragment>
  );
};
export default DimpHome;
