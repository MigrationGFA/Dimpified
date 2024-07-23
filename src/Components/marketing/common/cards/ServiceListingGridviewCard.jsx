import React from "react";
import { Card, Image, ListGroup, Row, Col } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaNairaSign } from "react-icons/fa6";
import axios from "axios";
import Ratings from "../../common/ratings/Ratings";
import LevelIcon from "../../common/miscellaneous/LevelIcon";
import GKTippy from "../../../../Components/elements/tooltips/GKTippy";
import { numberWithCommas } from "../../../../helper/utils";

function getTimeDifference(updatedAt) {
  const updatedAtDate = new Date(updatedAt);
  const currentTime = new Date();
  const timeDifference = currentTime - updatedAtDate;
  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  return { days, hours: hours % 24, minutes: minutes % 60 };
}

const ServiceListingGridviewCard = (props) => {
  let {ecosystemDomain} = useParams();
  const { item, extraclass, link } = props;

  const getTimeDifferenceString = (time) => {
    if (time.days > 0) {
      return `${time.days} days ago`;
    } else if (time.hours > 0) {
      return `${time.hours} hours ago`;
    } else {
      return `${time.minutes} minutes ago`;
    }
  };
  const ecoLogo = sessionStorage.getItem("ecoLogo")

  // Function to format price with currency symbol
  const formatPrice = (currencyName, priceValue) => {
    switch (currencyName) {
      case "naira":
      case "NGN":
        return `₦${priceValue}`;
      case "dollars":
      case "USD":
        return `$${priceValue}`;
      case "euros":
      case "EUR":
        return `€${priceValue}`;
      case "pounds":
      case "GBP":
        return `£${priceValue}`;
      default:
        return `₦${priceValue}`;
    }
  };

  const time = getTimeDifference(item.updatedAt);
  const timeString = getTimeDifferenceString(time);

  // const SearchActivity = async ({ name }) => {
  //   try {
  //     const response = await axios.post(
  //       "https://unleashified-backend.azurewebsites.net/api/v1/create-activity",
  //       {
  //         UserAction: name ? name : null,
  //         UserId: userId,
  //         UserEmail: userEmail,
  //         ActionType: "Service-Click",
  //       }
  //     );
  //     console.log("this is the service response", response.data);
  //   } catch (error) {
  //     console.log("error");
  //   }
  // };

  const navigate = useNavigate();

  

  return (
    <Card
    className={`mb-4 card-hover ${extraclass} h-100 overflow-auto course-card`}
  >
    <Link to={link}>
      <Image
        src={item.backgroundCover[0]}
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
          {item.header
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
          {item.services[0].deliveryTime}
        </ListGroup.Item>
        <ListGroup.Item as="li" bsPrefix="list-inline-item">
          <LevelIcon level={item.format} />
          service format: {item.format}
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
        <span className="text-dark fw-bold">{formatPrice(item.currency, item.services[0].price)}</span>
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
};

export default ServiceListingGridviewCard;
