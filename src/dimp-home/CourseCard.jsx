// import node module libraries
import { Fragment, useState } from "react";
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
  const [showMore, setShowMore] = useState(false);

  const GridView = () => {
    return (
      <Card className="mb-4 card-hover">
        {/* Card body  */}
        <Card.Body className="">
          <div className="d-flex">
            <Link to={item.link} className="text-inherit">
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
            </Link>
            <div className="ms-0">
              <Link to={item.link} className="text-inherit">
                <h5 className="mb-1">{item.title}</h5>
              </Link>
              <p className="mb-1 fs-6">{item.subtitle1}</p>
              <p className="mb-1 fs-6">{item.subtitle2}</p>
              <p className="mb-1 fs-6">{item.subtitle3}</p>

              {showMore && (
                <>
                  <p className="mb-1 fs-6">{item.subtitle4}</p>
                  <p className="mb-1 fs-6">{item.subtitle5}</p>
                  <p className="mb-1 fs-6">{item.subtitle6}</p>
                  <p className="mb-1 fs-6">{item.subtitle7}</p>
                  <p className="mb-1 fs-6">{item.subtitle8}</p>
                  <p className="mb-1 fs-6">{item.subtitle9}</p>
                  <p className="mb-1 fs-6">{item.subtitle10}</p>
                  <p className="mb-1 fs-6">{item.subtitle11}</p>
                  <p className="mb-1 fs-6">{item.subtitle12}</p>
                  <p className="mb-1 fs-6">{item.subtitle13}</p>
                  <p className="mb-1 fs-6">{item.subtitle14}</p>
                  <p className="mb-1 fs-6">{item.subtitle15}</p>
                  <p className="mb-1 fs-6">{item.subtitle16}</p>
                  <p className="mb-1 fs-6">{item.subtitle17}</p>
                  <p className="mb-1 fs-6">{item.subtitle18}</p>
                  <p className="mb-1 fs-6">{item.subtitle19}</p>
                  <p className="mb-1 fs-6">{item.subtitle20}</p>
                </>
              )}
              <button
                onClick={() => setShowMore(!showMore)}
                className="btn btn-link p-0"
                style={{
                  textTransform: "uppercase",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "gray",
                  textDecoration: "underline",
                  textDecorationThickness: "1px",
                  textUnderlineOffset: "3px",
                  marginTop: "5px",
                }}
              >
                {showMore ? "View Less" : "View More"}
              </button>
              <br />
            </div>
          </div>
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
