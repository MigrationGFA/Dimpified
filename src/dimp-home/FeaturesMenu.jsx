// import node module libraries
import { Fragment, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { NavDropdown } from "react-bootstrap";
import { Col, Row, Image, ListGroup } from "react-bootstrap";

// import context file
import { AppConfigContext } from "../context/Context";
import TemplatesImage from '../dimp-home/images/security.png';

const FeaturesMenu = ({ className }) => {
  const ConfigContext = useContext(AppConfigContext);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const W1 = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Bespoke Templates</h5>
        
      </div>
    );
  };
  const W2 = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Website Builder</h5>
        
      </div>
    );
  };
  const W3 = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Custom Domain</h5>
        
      </div>
    );
  };
  const W4 = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Mobile App</h5>
        
      </div>
    );
  };
  const W5 = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Ecosystem Clone & Sync</h5>
        
      </div>
    );
  };
  const C1 = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Course planner & Builder</h5>
        
      </div>
    );
  };
  const C2 = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Interactive Videos</h5>
        
      </div>
    );
  };
  const C3 = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Assessment & Certificates</h5>
        
      </div>
    );
  };
  const C4 = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Live Classes & Webinars</h5>
        
      </div>
    );
  };
  const C5 = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Statistics & Visualization</h5>
        
      </div>
    );
  };
  const P1 = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Bundles & Subscriptions</h5>
        
      </div>
    );
  };
  const P2 = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Payment Management</h5>
        
      </div>
    );
  };
  const P3 = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Multi-Currency Module</h5>
        
      </div>
    );
  };
  const P4 = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Payment Gateways</h5>
        
      </div>
    );
  };
  const P5 = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Financial Records</h5>
        
      </div>
    );
  };

  const DocMenuDesktop = () => {
    return (
      <NavDropdown
        title="Features"
        id="basic-nav-dropdown"
        bsPrefix="dropdown-arrow d-block nav-link fs-4 lh-1 pt-2"
        className={className}
        show
      >
        <Row className="align-items-center">
        <Col lg={3} md={6} xs={12} style={{backgroundColor: "#f1f1f1"}}>
        <Image src={TemplatesImage} alt="..." className="img-fluid w-100" />
        </Col>
          
          <Col lg={3} md={6} xs={12}>
          <h6 class="px-3">WEBSITE & LANDING PAGE </h6>
            <hr class="px-6" />
            <NavDropdown.Item
              href="/dashboard/documentation"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <W1 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <W2 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <W3 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <W4 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <W5 />
              </div>
            </NavDropdown.Item>
          </Col>
          <Col lg={3} md={6} xs={12}>
          <h6 class="px-3">COURSE MANAGEMENT </h6>
            <hr class="px-6" />
            <NavDropdown.Item
              href="/dashboard/documentation"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <C1 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <C2 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/dashboard/documentation"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <C3 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <C4 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/dashboard/documentation"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <C5 />
              </div>
            </NavDropdown.Item>
          </Col>
          <Col lg={3} md={6} xs={12}>
            <h6 class="px-3">PAYMENTS & SUBSCRIPTIONS </h6>
            <hr class="px-6" />
            <NavDropdown.Item
              href="/dashboard/documentation"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <P1 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/dashboard/documentation"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <P2 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <P3 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/dashboard/documentation"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <P4 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <P5 />
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
        <h6 class="px-3 py-3">WEBSITE & LANDING PAGE </h6>
            <hr class="px-6" />
            <NavDropdown.Item
              href="/dashboard/documentation"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <W1 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <W2 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <W3 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <W4 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <W5 />
              </div>
            </NavDropdown.Item>
          
          <h6 class="px-3 py-3">COURSE MANAGEMENT </h6>
            <hr class="px-6" />
            <NavDropdown.Item
              href="/dashboard/documentation"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <C1 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <C2 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/dashboard/documentation"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <C3 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <C4 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/dashboard/documentation"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <C5 />
              </div>
            </NavDropdown.Item>
         
            <h6 class="px-3 py-3">PAYMENTS & SUBSCRIPTIONS </h6>
            <hr class="px-6" />
            <NavDropdown.Item
              href="/dashboard/documentation"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <P1 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/dashboard/documentation"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <P2 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <P3 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/dashboard/documentation"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <P4 />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <P5 />
              </div>
            </NavDropdown.Item>
          
      </NavDropdown>
    );
  };

  return (
    <Fragment>{isDesktop ? <DocMenuDesktop /> : <DocMenuMobile />}</Fragment>
  );
};

export default FeaturesMenu;
