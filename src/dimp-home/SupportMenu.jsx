// import node module libraries
import { Fragment, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { NavDropdown } from "react-bootstrap";
import { Col, Row, Image, ListGroup } from "react-bootstrap";

// import context file
import { AppConfigContext } from "../context/Context";
import TemplatesImage from "../dimp-home/images/security.png";

const SupportMenu = ({ className }) => {
  const ConfigContext = useContext(AppConfigContext);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const DimpAcademy = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Dimp Academy</h5>
        <p className="mb-0 fs-6">
          Achieve success through learning
          <br /> and growth with our academy.
        </p>
      </div>
    );
  };
  const HelpCenter = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Help Center</h5>
        <p className="mb-0 fs-6">
          Access over 600 articles
          <br /> to enhance your ecosystem.
        </p>
      </div>
    );
  };
  const Experts = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Experts</h5>
        <p className="mb-0 fs-6">
          Expand your academy with the support
          <br /> of vetted consultants and agencies.
        </p>
      </div>
    );
  };
  const Webinars = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Daily Webinars</h5>
        <p className="mb-0 fs-6">
          Participate in daily webinars tailored
          <br /> for both new and experienced school owners.
        </p>
      </div>
    );
  };
  const CourseMasters = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Course Masters</h5>
        <p className="mb-0 fs-6">
          Accelerate your business growth using
          <br /> industry best practices from experts.
        </p>
      </div>
    );
  };
  const AI = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">AI Central</h5>
        <p className="mb-0 fs-6">
          Your comprehensive hub for AI
          <br /> and online course resources.
        </p>
      </div>
    );
  };
  const Blog = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Blog</h5>
      </div>
    );
  };

  const DocMenuDesktop = () => {
    return (
      <NavDropdown
        title="360 Support"
        id="basic-nav-dropdown"
        bsPrefix="dropdown-arrow d-block nav-link fs-4 lh-1 pt-2"
        className={className}
        show
      >
        <Row className="align-items-center">
          <Col lg={3} md={6} xs={12}>
            <Image src={TemplatesImage} alt="..." className="img-fluid w-100" />
          </Col>
          <Col lg={3} md={6} xs={12}>
            <NavDropdown.Item href="#" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <DimpAcademy />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <Experts />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <CourseMasters />
              </div>
            </NavDropdown.Item>
          </Col>
          <Col lg={3} md={6} xs={12}>
            <NavDropdown.Item href="#" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <HelpCenter />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <Webinars />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <AI />
              </div>
            </NavDropdown.Item>
          </Col>
          <Col lg={3} md={6} xs={12}>
            <NavDropdown.Item href="#" className="py-4 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <Blog />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="py-4 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <Blog />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="py-4 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <Blog />
              </div>
            </NavDropdown.Item>
          </Col>
        </Row>
      </NavDropdown>
    );
  };
  const DocMenuMobile = () => {
    return (
      <NavDropdown
        title="360 Support"
        id="basic-nav-dropdown"
        bsPrefix="no-dropdown-arrow d-block nav-link fs-3 lh-1 pt-0"
      >
        <NavDropdown.Item href="#" className="py-2 px-3">
          <div className="d-flex align-items-center">
            <i className="fe fe-file-text fs-3 text-primary"></i>
            <DimpAcademy />
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item href="#" className="py-2 px-3">
          <div className="d-flex align-items-center">
            <i className="fe fe-layers fs-3 text-primary"></i>
            <Experts />
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item href="#" className="py-2 px-3">
          <div className="d-flex align-items-center">
            <i className="fe fe-file-text fs-3 text-primary"></i>
            <CourseMasters />
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item href="#" className="py-2 px-3">
          <div className="d-flex align-items-center">
            <i className="fe fe-file-text fs-3 text-primary"></i>
            <HelpCenter />
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item href="#" className="py-2 px-3">
          <div className="d-flex align-items-center">
            <i className="fe fe-layers fs-3 text-primary"></i>
            <Webinars />
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item href="#" className="py-2 px-3">
          <div className="d-flex align-items-center">
            <i className="fe fe-layers fs-3 text-primary"></i>
            <AI />
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item href="#" className="py-4 px-3">
          <div className="d-flex align-items-center">
            <i className="fe fe-file-text fs-3 text-primary"></i>
            <Blog />
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item href="#" className="py-4 px-3">
          <div className="d-flex align-items-center">
            <i className="fe fe-layers fs-3 text-primary"></i>
            <Blog />
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item href="#" className="py-4 px-3">
          <div className="d-flex align-items-center">
            <i className="fe fe-file-text fs-3 text-primary"></i>
            <Blog />
          </div>
        </NavDropdown.Item>
      </NavDropdown>
    );
  };

  return (
    <Fragment>{isDesktop ? <DocMenuDesktop /> : <DocMenuMobile />}</Fragment>
  );
};

export default SupportMenu;
