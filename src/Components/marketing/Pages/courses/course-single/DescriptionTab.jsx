// import node module libraries
import { Fragment } from "react";
import { Col, Row, ListGroup } from "react-bootstrap";

const DescriptionTab = ({ courseData, requirement }) => {
  return (
    <Fragment>
      <div className="mb-4">
        <h3 className="mb-2">Course Descriptions</h3>
        <p>{courseData && courseData.description}</p>
      </div>
      <h4 className="mb-3">Requirement to take this course</h4>
      <Row className="mb-3">
        {courseData &&
          courseData.requirement &&
          courseData.requirement.map((req, index) => (
            <div key={index}>{req.name}</div>
          ))}
      </Row>
      <h4 className="mb-2">Course Content Type</h4>
      <p>{courseData && courseData.courseType}</p>
    </Fragment>
  );
};
export default DescriptionTab;
