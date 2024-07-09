// import node module libraries
import { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Image,
  Card,
  Row,
  Col,
  ProgressBar,
  ListGroup,
  Badge,
} from "react-bootstrap";

const CourseCard = ({
  item,
  free,
  viewby,
  showprogressbar,
  extraclass,
  link,
}) => {
  /** Used in Course Index, Course Category, Course Filter Page, Student Dashboard etc...  */
  const GridView = () => {
    return (
      <Card className="mb-4 card-hover ">
        {/* Card body  */}
        <Card.Body className="">
          <Link to={item.link} className="text-inherit">
            <div className="d-flex">
              <Image
                src={item.image}
                alt=""
                className="card-img-top rounded-top-md align-items-center text-center"
                style={{
                  height: "3rem",
                  width: "auto",
                  border: "1px solid #d3d3d3",
                  padding: "5px",
                  borderRadius: "4px",
                  marginRight: "1rem",
                }}
              />
              <div className="ms-0">
                <h4 className="mb-0 ">{item.title}</h4>
                <p className="mb-0 fs-6">{item.subtitle1}</p>
                <p className="mb-0 fs-6">{item.subtitle2}</p>
                <p className="mb-0 fs-6">{item.subtitle3}</p>
                <p className="mb-0 fs-6">{item.subtitle4}</p>
                <br />
              </div>
            </div>
          </Link>
        </Card.Body>
        {/* Card Footer */}
      </Card>
    );
  };

  return (
    <Fragment>
      {viewby === "grid" ? (
        <GridView />
      ) : viewby === "list" ? (
        <ListView />
      ) : (
        <ListGroupView />
      )}
    </Fragment>
  );
};

// Specifies the default values for props
CourseCard.defaultProps = {
  free: false,
  viewby: "grid",
  showprogressbar: false,
  extraclass: "",
  link: "#",
};

// Typechecking With PropTypes
CourseCard.propTypes = {
  item: PropTypes.object.isRequired,
  free: PropTypes.bool,
  viewby: PropTypes.string,
  showprogressbar: PropTypes.bool,
  extraclass: PropTypes.string,
  link: PropTypes.string,
};

export default CourseCard;
