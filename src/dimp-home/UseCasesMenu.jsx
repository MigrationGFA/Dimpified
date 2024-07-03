// import node module libraries
import { Fragment, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { NavDropdown } from "react-bootstrap";
import { Col, Row, Image, ListGroup } from "react-bootstrap";

// import context file
import { AppConfigContext } from "../context/Context";
import TemplatesImage from '../dimp-home/images/learning-liaisons-slider.jpg';

const UseCasesMenu = ({ className }) => {
  const ConfigContext = useContext(AppConfigContext);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const SME = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">SME</h5>
        <p className="mb-0 fs-6">
        Staff training and evaluation,<br/> customer training e.t.c.
        </p>
      </div>
    );
  };
  const Corporate = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Corporate</h5>
        <p className="mb-0 fs-6">
        Hackathons, pitch competitions,<br/> upskilling programs.
        </p>
      </div>
    );
  };
  const Creators = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Creators/Influencers</h5>
        <p className="mb-0 fs-6">
        Acquiring subscribers,<br/> managing your community.
        </p>
      </div>
    );
  };
  const Religious = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Religious Bodies</h5>
        <p className="mb-0 fs-6">
        Mosque Management,<br/> church management.
        </p>
      </div>
    );
  };
  const   NGO = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Non Profit/NGO</h5>
        <p className="mb-0 fs-6">
        Donor & Volunteer management,<br/>Alumni, parents/teachers associations.
        </p>
      </div>
    );
  };
  const Fundraising = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Fundraising</h5>
        <p className="mb-0 fs-6">
        Fundraising, investor engagement,<br/> investor database management.
        </p>
      </div>
    );
  };
  const Education = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Education</h5>
        <p className="mb-0 fs-6">
        Training, digital certificate issuance.
        </p>
      </div>
    );
  };
  const Government = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Government</h5>
        <p className="mb-0 fs-6">
        Licensing, e-governance, <br/>tax management, skills management.
        </p>
      </div>
    );
  };
  const Medical = () => {
    return (
      <div className="ms-3 lh-3">
        <h5 className="mb-0">Medical</h5>
        <p className="mb-0 fs-6">
        Patient-care management, <br/>clinical research management.
        </p>
      </div>
    );
  };
 
  const DocMenuDesktop = () => {
    return (
      <NavDropdown
        title="Use Cases"
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
              href="#"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <SME />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <Corporate />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <Creators />
              </div>
            </NavDropdown.Item>
          </Col>
          <Col lg={3} md={6} xs={12}>
            <NavDropdown.Item
              href="#"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <Medical />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <NGO />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <Religious />
              </div>
            </NavDropdown.Item>
          </Col>
          <Col lg={3} md={6} xs={12}>
            <NavDropdown.Item
              href="#"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <Fundraising />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <Government />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/education"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <Education />
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
        title="Use Cases"
        id="basic-nav-dropdown"
        bsPrefix="no-dropdown-arrow d-block nav-link fs-3 lh-1 pt-0"
      >
        <NavDropdown.Item
              href="#"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <SME />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <Corporate />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <Creators />
              </div>
        </NavDropdown.Item>
        <NavDropdown.Item
              href="#"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <Medical />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <NGO />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <Religious />
              </div>
        </NavDropdown.Item>
        <NavDropdown.Item
              href="#"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <Fundraising />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#" className="py-2 px-3">
              <div className="d-flex align-items-center">
                <i className="fe fe-layers fs-3 text-primary"></i>
                <Government />
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/education"
              className="py-2 px-3"
            >
              <div className="d-flex align-items-center">
                <i className="fe fe-file-text fs-3 text-primary"></i>
                <Education />
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
