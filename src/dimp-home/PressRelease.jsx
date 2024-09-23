import { Fragment } from "react";
import { Container, Row, Button, Col, Image } from "react-bootstrap";
import NavbarLanding from "./NavbarLanding";
import FooterWithLinks from "./FooterWithLinks";
import Barberbg from "./images/barber-bg.png"

const PressRelease = () => {
  return (
    <Fragment>
      <NavbarLanding />
      <div className="bg-white">
        
        <section className="p-4">
          <Container className="">
            <Row className="justify-content-center">
              <Col lg={10} className="overlap-section text-center">
                <div className="px-lg-14 py-lg-10 p-4 box-shadow-extra-large border-radius-4px bg-white text-center">
                  <Button
                    to="#"
                    variant="light"
                    className="bg-solitude-blue text-uppercase fs-13 px-3 py-2 alt-font fw-500 text-base-color lh-40 sm-lh-55 rounded-3 mb-3 sm-mb-15px"
                  >
                    Press Release
                  </Button>
                  <h3 className="alt-font fs-40 lh-1 sm-fs-30 text-dark-gray fw-600 ls-minus-1 mb-15px">
                    GFA Technologies Launches the DIMP Innovative Website
                    Builder for Barbers and Barbershops Across Nigeria -
                    International Expansion Planned for 2025
                  </h3>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="overlap-section text-center p-0 sm-pt-30px">
          <Image
            className="rounded-circle box-shadow-extra-large w-130px h-130px border border-8 border-color-white"
            src="https://gfa-tech.com/images/gfa-blue.png"
            alt=""
            style={{ marginTop: "-65px " }}
            roundedCircle
          />
        </section>
        <section className="p-4">
          <Container>
            <Row className="justify-content-center">
              <Col lg={9} className="dropcap-style-01">
                <p className="mb-6 text-dark ">
                  <span className="alt-font first-letter text-dark-gray">
                    G
                  </span>
                  GFA Technologies, developer of DIMP, a leading website builder
                  platform, is proud to announce the launch of its latest
                  product tailored specifically for barbers and barbershops
                  across Nigeria. With a focus on empowering barbers to elevate
                  their businesses, DIMP's new platform offers an easy-to-use
                  website builder that enables barbers to create professional
                  online stores, manage appointments, and showcase their skills,
                  all in one place.
                </p>

                <p className="mb-6 text-dark ">
                  The launch of this platform aims to meet the growing demand
                  for digital tools in the Nigerian market, where barbers can
                  now enhance their customer experience and expand their reach.
                  DIMP is committed to helping small business owners,
                  particularly in the barbering industry, take advantage of the
                  benefits of having a strong online presence.
                </p>
                <Row className="mb-lg-5 mb-3">
                  <h6 className="alt-font fs-30 sm-fs-20 fw-500 text-dark-gray ls-minus-05px mb-15px">
                    Key Features of DIMP for Barbers:
                  </h6>
                  <Col md={6} className="sm-mb-30px">
                    <div className="border-radius-5px text-dark border-1 border border-color-light-medium-gray h-100 py-lg-8 p-3 px-lg-10 last-paragraph-no-margin">
                      <span className="fw-500 fs-20  text-dark-gray mb-5px d-inline-block">
                        Online Store Creation
                      </span>
                      <p>
                        Barbers can now create their own websites and sell
                        services directly from the websites, creating new
                        revenue streams and improving customer convenience.
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="border-radius-5px text-dark border-1 border border-color-light-medium-gray h-100  py-lg-8 p-3 px-lg-10 last-paragraph-no-margin">
                      <span className="fw-500 fs-20 text-dark-gray mb-5px d-inline-block">
                        Scheduling System
                      </span>
                      <p>
                        The integrated booking system helps barbers manage
                        appointments and manage their time, reduce no-shows, and
                        provide customers with a seamless booking experience.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-lg-5 mb-3">
                  <Col md={4} className="sm-mb-30px">
                    <div className="border-radius-5px text-dark border-1 border border-color-light-medium-gray h-100 py-lg-8 p-3 px-lg-6  last-paragraph-no-margin">
                      <span className="fw-500 fs-20 text-dark-gray mb-5px d-inline-block">
                        SEO Optimized Pages
                      </span>
                      <p>
                        DIMP ensures that each barber’s website is optimized for
                        search engines, helping them attract more clients.
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="border-radius-5px text-dark border-1 border border-color-light-medium-gray h-100  py-lg-8 p-3 px-lg-6  last-paragraph-no-margin">
                      <span className="fw-500 fs-20 text-dark-gray mb-5px d-inline-block">
                        Portfolio Showcase
                      </span>
                      <p>
                        Barbers can easily display their work, showcasing
                        different styles and haircuts to attract new customers.
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="sm-mb-30px">
                    <div className="border-radius-5px text-dark border-1 border border-color-light-medium-gray h-100 py-lg-8 p-3 px-lg-6 last-paragraph-no-margin">
                      <span className="fw-500 fs-20 text-dark-gray mb-5px d-inline-block">
                        Payments
                      </span>
                      <p>
                        Barbers can take payments online and offline and manage
                        their finances
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-lg-5 mb-3"></Row>
                <p className="mb-6 text-dark ">
                  "We are excited to launch DIMP for barbers and barbershops in
                  Nigeria" said Debo Omololu, CEO & Co-Founder of GFA
                  Technologies, the developers of the DIMP solution. "This
                  platform is designed to empower barbers by giving them the
                  tools they need to grow their businesses online.
                </p>
                <p className="mb-6 text-dark ">
                  Emmanuel Oke, Chief Commercial Officer & Co-Founder of GFA
                  Technologies also added, "With the rapid adoption of digital
                  services, it's essential for barbers to have a professional
                  online presence, and we're here to make that process as simple
                  and effective as possible"
                </p>
                <p className="mb-6 text-dark ">
                  Barbers across Nigeria can now sign up and start building
                  their websites by visiting the DIMP for barbers' page. The
                  platform is available immediately, with plans for
                  international expansion in 2025.
                </p>
                <p className="mb-6 text-dark ">
                  For more information, contact:
                  <br /> Emmanuel Oke <br />
                  Chief Commercial Officer, GFA Technologies
                  <br /> Email: info@gfa-tech.com
                  <br /> Phone: +234 (0) 707 0876303
                </p>
                <h6 className="alt-font fs-30 sm-fs-20 fw-500 text-dark-gray ls-minus-05px mb-15px">
                  About DIMP
                </h6>
                <p className="mb-6 text-dark ">
                  DIMP is a website builder platform dedicated to helping
                  service-based businesses establish a strong online presence.
                  With a focus on user-friendly design and powerful features,
                  DIMP makes it easy for businesses to create professional
                  websites that drive growth. DIMP is currently available in
                  Nigeria, with plans to expand globally in 2025.
                </p>
                <p className="mb-6 text-dark ">
                  Visit Website: <a href="/barbers" className="text-primary fw-bold">https://dimpified.com/barbers</a>
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <FooterWithLinks />
    </Fragment>
  );
};

export default PressRelease;
