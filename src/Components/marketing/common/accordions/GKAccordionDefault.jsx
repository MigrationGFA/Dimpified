import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";

const GKAccordionDefault = ({ itemClass, courseData }) => {
  const ContextAwareToggle = ({ children, eventKey }) => {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => console.log("Accordion toggled") // Instead of using 'callback' which is not defined
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    const handleClick = (e) => {
      e.preventDefault(); // Prevent the default behavior of the link
      decoratedOnClick(e); // Call the decoratedOnClick function to handle accordion state
    };

    return (
      <Fragment>
        <Link
          to="#"
          onClick={handleClick}
          aria-expanded={isCurrentEventKey}
          className="d-flex align-items-center text-inherit text-decoration-none h4 mb-0"
          data-bs-toggle="collapse"
          aria-controls="courseTwo"
        >
          <div className="me-auto">{children}</div>
          <span className="chevron-arrow ms-4">
            <i className="fe fe-chevron-down fs-4"></i>
          </span>
        </Link>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <Accordion
        defaultActiveKey={
          courseData?.curriculum && courseData.curriculum.length > 0
            ? courseData.curriculum[0]._id
            : null
        }
      >
        <ListGroup as="ul" variant="flush">
          {courseData &&
            courseData.curriculum &&
            courseData.curriculum.map((item, index) => {
              return (
                <ListGroup.Item
                  key={index}
                  as="li"
                  className={`${itemClass ? itemClass : ""}`}
                >
                  <ContextAwareToggle eventKey={item._id}>
                    <div className="d-flex justify-content-between">
                      <span>
                        {item && item.courseName ? item.courseName : ""}
                      </span>
                      <span className="h6 mt-2 me-2">
                        ({item && item.totalDuration ? item.totalDuration : ""})
                      </span>
                    </div>
                  </ContextAwareToggle>

                  <Accordion.Collapse eventKey={item._id}>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="border-0 fs-5 px-0 py-4">
                        {item && item.description ? item.description : ""}

                        
                        {item && item.section && Array.isArray(item.section)
                          ? item.section.map((section, index) => (
                            <Row className="mt-3"> 
                               <Col className="font-weight-bold text-primary fs-5">Sections</Col>
                              <Row key={index} className="mt-1">
                                
                                <Col>{section.title ? section.title : ""}</Col>
                                <Col className="text-end">
                                  {section.duration
                                    ? `${section.duration} mins`
                                    : ""}
                                </Col>
                              </Row>
                              </Row>
                            ))
                          : null}
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Collapse>
                </ListGroup.Item>
              );
            })}
        </ListGroup>
      </Accordion>
    </Fragment>
  );
};

export default GKAccordionDefault;
