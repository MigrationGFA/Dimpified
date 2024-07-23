import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Image, Card, Row, Col, ListGroup, Badge } from "react-bootstrap";
import axios from "axios"; // Import axios library
import Ratings from "../../common/ratings/Ratings";
import LevelIcon from "../../common/miscellaneous/LevelIcon";
import GKTippy from "../../../../Components/elements/tooltips/GKTippy";
import { numberWithCommas } from "../../../../helper/utils";
import { showToast } from "../../../../Components/Showtoast";
import "./CourseCard.css";

const CourseCard = ({ item, viewby, extraclass, link }) => {
  let {ecosystemDomain} = useParams();

  // const handleBookmarkClick = async () => {
  //   try {
  //     // Send POST request to bookmark endpoint
  //     const response = await axios.post(
  //       "https://remsana-backend-testing.azurewebsites.net/api/v1/bookmark",
  //       {
  //         courseId: item._id, // Use courseId from item object
  //         userId: userId, // Use userId from global context
  //       }
  //     );
  //     showToast(response.data.msg);
  //     // You can add any further handling here, like showing a success message
  //   } catch (error) {
  //     console.error("Error adding bookmark:", error);
  //     // Handle error here, like showing an error message
  //   }
  // };

  const ecoLogo = sessionStorage.getItem("ecoLogo")
  const GridView = () => (
    <Card
      className={`mb-4 card-hover ${extraclass} h-100 overflow-auto course-card`}
    >
      <Link to={link}>
        <Image
          src={item.image}
          alt=""
          className="card-img-top rounded-top-md"
          style={{ maxHeight: "200px", width: "100%", objectFit: "cover" }}
        />
      </Link>
      {/* Card body */}
      <Card.Body>
        {/* Title */}
        <h3 className="h4 mb-2 text-truncate-line-2">
          <Link to={link} className="text-inherit">
            {item.title
              .split(" ")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}
          </Link>
        </h3>
        {/* List Group for Duration and Level */}
        <ListGroup as="ul" bsPrefix="list-inline" className="mb-3">
          <ListGroup.Item as="li" bsPrefix="list-inline-item">
            <i className="far fa-clock me-1"></i>
            {item.hour}
          </ListGroup.Item>
          <ListGroup.Item as="li" bsPrefix="list-inline-item">
            <LevelIcon level={item.level} />
            {item.level}
          </ListGroup.Item>
        </ListGroup>
        {/* Ratings */}
        <div className="lh-1 d-flex align-items-center">
          <span className="text-warning me-1 mb-1">
            <Ratings rating={item.rating} size="0.92rem" />
          </span>
          <span className="text-warning me-1"> {item.rating?.toFixed(1)}</span>
          <span className="fs-6 text-muted">
            {" "}
            ({numberWithCommas(item.ratingby)})
          </span>
        </div>
        {/* Price */}
        <div className="lh-1 mt-3">
          <span className="text-dark fw-bold">₦{item.price}</span>
        </div>
      </Card.Body>
      {/* Card Footer */}
      <Card.Footer>
        {/* Instructor */}
        <Row className="align-items-center g-0">
          <Col xs="auto">
            <Image
              src={
                ecoLogo
              }
              className="rounded-circle avatar-xs"
              alt=""
            />
          </Col>
          <Col className="col ms-2">
            <span>
              {ecosystemDomain}
            </span>
          </Col>
          <Col xs="auto">
            <GKTippy content="Add to Bookmarks">
              <Link to="#"
               //onClick={handleBookmarkClick}
               >
                <i className="fe fe-bookmark"></i>
              </Link>
            </GKTippy>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );

  /** Used in Course Filter Page  */
  const ListView = () => {
    return (
      <Card className="mb-4 card-hover">
        <Row className="g-0">
          <Link
            to={link}
            className="bg-cover img-left-rounded col-12 col-md-12 col-xl-3 col-lg-3 "
            style={{
              background: `url(${item.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top center",
            }}
          >
            <Image
              src={item.image}
              alt="..."
              className="img-fluid d-lg-none "
            />
          </Link>
          <Col lg={9} md={12} sm={12}>
            {/* <!-- Card body --> */}
            <Card.Body>
              <h3 className="mb-2 text-truncate-line-2 ">
                <Link to={link} className="text-inherit">
                  {item.title
                    .split(" ")
                    .map(
                      (word) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    )
                    .join(" ")}
                </Link>
              </h3>
              {/* <!-- List inline --> */}
              <ListGroup as="ul" bsPrefix="list-inline" className="mb-5">
                <ListGroup.Item as="li" bsPrefix="list-inline-item">
                  <i className="far fa-clock me-1"></i>
                  {item.hour}
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix="list-inline-item">
                  <LevelIcon level={item.level} />
                  {item.level}
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix="list-inline-item">
                  <span className="text-warning">
                    {item.rating && item.rating.toFixed(1)}{" "}
                    {/* Check if rating is defined */}
                  </span>
                  <span className="fs-6 text-muted">
                    ({numberWithCommas(item.ratingby)})
                  </span>
                </ListGroup.Item>
              </ListGroup>
              {/* <!-- Row --> */}
              <Row className="align-items-center g-0">
                <Col xs="auto">
                  <Image
                    src={
                      ecoLogo
                    }
                    className="rounded-circle avatar-xs"
                    alt=""
                  />
                </Col>
                <Col className="col ms-2">
                  <span>
                    {ecosystemDomain}
                  </span>
                </Col>
                <Col xs="auto">
                  <GKTippy content="Add to Bookmarks">
                    <Link to="#">
                      <i className="fe fe-bookmark"></i>
                    </Link>
                  </GKTippy>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
  };

  const ListGroupView = () => {
    return (
      <div className="d-lg-flex align-items-center">
        <div>
          <Image src={item.image} alt="" className="rounded img-4by3-lg" />
        </div>
        <div className="ms-lg-3 mt-2 mt-lg-0">
          <h4 className="text-primary-hover">
            {item.title
              .split(" ")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}
            <Badge bg="light-success" className="text-success">
              New
            </Badge>
          </h4>
          <ListGroup
            as="ul"
            bsPrefix="list-inline"
            className="fs-6 mb-0 text-inherit"
          >
            <ListGroup.Item as="li" bsPrefix="list-inline-item">
              <i className="far fa-clock me-1"></i>
              {item.hour}
            </ListGroup.Item>
            <ListGroup.Item as="li" bsPrefix="list-inline-item">
              <LevelIcon level={item.level} />
              {item.level}
            </ListGroup.Item>
            <ListGroup.Item as="li" bsPrefix="list-inline-item">
              <span className="text-warning">
                {" "}
                <Ratings rating={item.rating} /> {item.rating.toFixed(1)}
              </span>
              <span className="fs-6 text-muted">
                {" "}
                ({numberWithCommas(item.ratingby)})
              </span>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
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

CourseCard.defaultProps = {
  free: false,
  viewby: "grid",
  showprogressbar: false,
  extraclass: "",
  link: "/student/single-course",
};

CourseCard.propTypes = {
  item: PropTypes.object.isRequired,
  free: PropTypes.bool,
  viewby: PropTypes.string,
  showprogressbar: PropTypes.bool,
  extraclass: PropTypes.string,
  link: PropTypes.string,
};

export default CourseCard;
