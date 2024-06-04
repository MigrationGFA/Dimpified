// import node module libraries
import { Fragment, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { NavDropdown } from "react-bootstrap";
import { Col, Row, Image, ListGroup } from "react-bootstrap";

// import context file
import { AppConfigContext } from "../context/Context";
import TemplatesImage from '../dimp-home/images/security.png';

const SupportMenu = ({ className }) => {
  const ConfigContext = useContext(AppConfigContext);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const CustomerTraining = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Dimp Academy</h5>
        <p className="mb-0 fs-6">
          Drive business results through <br/>powerful Customer education.
        </p>
      </div>
    );
  };
  const Enterprise = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Help Center</h5>
        <p className="mb-0 fs-6">
          A lightweight LMS that's<br/> fast, flexible & easy to use.
        </p>
      </div>
    );
  };
  const NGO = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Experts</h5>
        <p className="mb-0 fs-6">
          Your elearning platform to<br/> Educate, Connect, & Inspire!
        </p>
      </div>
    );
  };
  const Creators = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Daily Webinars</h5>
        <p className="mb-0 fs-6">
          Cash in on your passion. <br/>Make money in ways you never thought of!
        </p>
      </div>
    );
  };
  const Coaching = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Course Masters</h5>
        <p className="mb-0 fs-6">
          Transform the way you <br/>coach and maximize your impact.
        </p>
      </div>
    );
  };
  const Fitness = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">AI Central</h5>
        <p className="mb-0 fs-6">
          Shape up your fitness online<br/> business & boost profits.
        </p>
      </div>
    );
  };
  const Finance = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Finance</h5>
        <p className="mb-0 fs-6">
          Educate the next generation<br/> of financial experts.
        </p>
      </div>
    );
  };
  const Health = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Health</h5>
        <p className="mb-0 fs-6">
          Lead the future of Health <br/>and Medical online training.
        </p>
      </div>
    );
  };
  const Employee = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Employee Training</h5>
        <p className="mb-0 fs-6">
        Set your business up for success with<br/>
          internal education & onboarding.
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
            <NavDropdown.Item
              href="/dashboard/documentation"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <CustomerTraining />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <Enterprise />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/dashboard/documentation"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <Fitness />
              </div>
            </NavDropdown.Item>
          </Col>
          <Col lg={3} md={6} xs={12}>
            <NavDropdown.Item
              href="/dashboard/documentation"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <Employee />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <Creators />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <NGO />
              </div>
            </NavDropdown.Item>
          </Col>
          <Col lg={3} md={6} xs={12}>
            <NavDropdown.Item
              href="/dashboard/documentation"
              className="py-4 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <Blog />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-4 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <Blog />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/dashboard/documentation"
              className="py-4 px-3"
            >
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
        title="Features"
        id="basic-nav-dropdown"
        bsPrefix="no-dropdown-arrow d-block nav-link fs-3 lh-1 pt-0"
      >
        <NavDropdown.Item href="/dashboard/documentation" className="py-2 px-3">
          <div className="d-flex align-items-center">
            <i className="fe fe-file-text fs-3 text-primary"></i>
            
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
          <div className="d-flex align-items-center">
            <i className="fe fe-layers fs-3 text-primary"></i>
            
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
