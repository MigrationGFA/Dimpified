// import node module libraries
import { Fragment, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { NavDropdown } from "react-bootstrap";
import { Col, Row, Image, ListGroup } from "react-bootstrap";

// import context file
import { AppConfigContext } from "./Context";

const UseCasesMenu = ({ className }) => {
  const ConfigContext = useContext(AppConfigContext);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const CustomerTraining = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Customer Training</h5>
        <p className="mb-0 fs-6">
          Drive business results through <br/>powerful Customer education.
        </p>
      </div>
    );
  };
  const Enterprise = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Enterprise LMS</h5>
        <p className="mb-0 fs-6">
          A lightweight LMS that's<br/> fast, flexible & easy to use.
        </p>
      </div>
    );
  };
  const NGO = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Non Profit (NGO)</h5>
        <p className="mb-0 fs-6">
          Your elearning platform to<br/> Educate, Connect, & Inspire!
        </p>
      </div>
    );
  };
  const Creators = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Creators</h5>
        <p className="mb-0 fs-6">
          Cash in on your passion. <br/>Make money in ways you never thought of!
        </p>
      </div>
    );
  };
  const Coaching = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Coaching</h5>
        <p className="mb-0 fs-6">
          Transform the way you <br/>coach and maximize your impact.
        </p>
      </div>
    );
  };
  const Fitness = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Fitness</h5>
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

  const DocMenuDesktop = () => {
    return (
      <NavDropdown
        title="Use Cases"
        id="basic-nav-dropdown"
        bsPrefix="no-dropdown-arrow d-block nav-link fs-4 lh-1 pt-2"
        className={className}
        show
      >
        <Row className="align-items-center">
        <Col lg={3} md={6} xs={12}></Col>
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
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <Fitness />
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
                <Finance />
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

export default UseCasesMenu;
