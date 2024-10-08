// import node module libraries
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { NavDropdown } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

// import data files
import NavbarMegaMenuRoutes from "./NavbarMegaMenuRoutes";

const FeaturesMenu = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const MegaMenuDesktop = () => {
    return (
      <div className="nav-item dropdown dropdown-fullwidth">
        <Link
          className="nav-link dropdown-toggle"
          to="#"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Features
        </Link>
        <div className="dropdown-menu dropdown-menu-md">
          <div className="px-lg-16 py-lg-4 py-4 pt-2 pb-2">
            <Row>
              <Col xs={12}>
                <div className="lh-1 mb-5 border-bottom">
                  <h3 className="mb-1">Create your dream ecosystem</h3>
                  <p>
                    DIMP has ton of features at your fingertips to provide a
                    seamless ecosystem experience.
                  </p>
                </div>
              </Col>
              {NavbarMegaMenuRoutes.map((item, index) => {
                return (
                  <Col lg={3} xs={12} key={index}>
                    {item.children.map((subitem, subindex) => {
                      return subitem.button ? (
                        <div className="mt-4" key={subindex}>
                          {/* <Link
                            to={subitem.link}
                            className="btn btn-outline-primary btn-sm"
                          >
                            {subitem.menuitem}
                          </Link> */}
                        </div>
                      ) : (
                        <div className="" key={subindex}>
                          <Link to={subitem.link}>
                            <div className="d-flex mb-3">
                              <img
                                src={subitem.image}
                                alt=""
                                style={{
                                  height: "2.5rem",
                                  width: "auto",
                                }}
                              />
                              <div className="ms-2">
                                <h5 className="mb-0 pt-2">
                                  {subitem.menuitem}
                                </h5>
                                <small className="text-body">
                                  {subitem.subtitle}
                                </small>
                                <br />
                                <small className="text-body">
                                  {subitem.subtitle2}
                                </small>
                                <br />
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    );
  };

  const MegaMenuMobile = () => {
    return (
      <NavDropdown
        title="Features"
        className="dropdown-fullwidth"
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item as="div" className="py-2 px-3">
          <Row>
            <Col lg={12} md={12} xs={12} className="lh-1 mb-1">
              <h3 className="mb-1 fs-4">Create your dream ecosystem</h3>
              <p className="fs-6">
                DIMP has ton of features at your fingertips
                <br /> to provide a seamless ecosystem experience.
              </p>
            </Col>
            {NavbarMegaMenuRoutes.map((item, index) => {
              return (
                <Col lg={4} xs={12} key={index}>
                  {item.children.map((subitem, subindex) => {
                    return subitem.button ? (
                      <div className="mt-4" key={subindex}>
                        <Link
                          to={subitem.link}
                          className="btn btn-outline-primary btn-sm mb-2"
                        >
                          {subitem.menuitem}
                        </Link>
                      </div>
                    ) : (
                      <div className="" key={subindex}>
                        <Link to={subitem.link}>
                          <div className="d-flex mb-3">
                            <img
                              src={subitem.image}
                              alt=""
                              style={{
                                height: "2rem",
                                width: "auto",
                                border: "1px solid #d3d3d3",
                                padding: "5px",
                                borderRadius: "4px",
                              }}
                            />
                            <div className="ms-2 pt-2">
                              <h6 className="mb-0">{subitem.menuitem}</h6>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </Col>
              );
            })}
          </Row>
        </NavDropdown.Item>
      </NavDropdown>
    );
  };

  return (
    <Fragment>{isDesktop ? <MegaMenuDesktop /> : <MegaMenuMobile />}</Fragment>
  );
};

export default FeaturesMenu;
