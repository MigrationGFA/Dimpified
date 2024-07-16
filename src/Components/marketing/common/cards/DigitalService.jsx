import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

// Function to shorten a message
function shortenMessage(message, maxLength = 20) {
  if (message.length > maxLength) {
    return message.slice(0, maxLength) + "...";
  }
  return message;
}

const DigitalServiceCard = ({ item }) => {
  let { ecosystemDomain } = useParams();

  const firstServicePrice =
    item.services && item.services.length > 0 ? item.services[0].price : null;

  // Function to format price with currency symbol
  const formatPrice = (currencyName, priceValue) => {
    switch (currencyName) {
      case "naira":
      case "NGN":
        return `From ₦${priceValue}`;
      case "dollars":
      case "USD":
        return `From $${priceValue}`;
      case "euros":
      case "EUR":
        return `From €${priceValue}`;
      case "pounds":
      case "GBP":
        return `From £${priceValue}`;
      default:
        return `From ₦${priceValue}`;
    }
  };

  return (
    <Card className="card-bordered card-hover cursor-pointer h-100 ">
      <Card.Body className="p-0">
        <div
          className="position-relative  top-0 start-0 w-100 "
          style={{
            height: "200px",
            backgroundImage: `url(${item.backgroundCover[0]})`,
            backgroundSize: "cover",
            borderRadius: "5px 5px 0 0",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            objectFit: "contain",
          }}
        >
          <div
            className="mb-3 mb-md-0  pt-13 "
            style={{
              width: "100px",
              height: "110px",
              marginLeft: "10px",
              // border: "5px white solid",
              // borderRadius: "40px",
              // position: "relative",
              // bottom: "0px",
            }}
          >
            {/* {item.user && item.user.image && (
              <Image
                src={item.user.image}
                alt={item.user.name}
                className="img-fluid user-image button-0"
                style={{
                  height: "100px",
                  borderRadius: "10px",
                }} */}
            {/* /> )} */}
          </div>
        </div>

        <div className="content w-100 mt-2 px-3">
          <div className="d-flex justify-content-between mb-2">
            <div>
              <div>
                {/* {item.user && item.user.name && (
                  <span>by {item.user.name}</span>
                )} */}
              </div>
              <h4 className="mb-1 fs-4">
                <Link
                  to={`/services/listing?id=${item._id}`}
                  className="text-inherit me-1"
                >
                  {item.header}
                </Link>
              </h4>
            </div>
            <div>{/* Bookmark */}</div>
          </div>
        </div>
        <div className="details px-3 pb-1">
          <div className="mb-3">
            <div className="mb-2 mb-md-0">
              <div className="w-100 d-inline-flex justify-content-between px-1">
                <div className="mt-1">
                  <i className="fe fe-briefcase text-muted"></i>
                  <span className="ms-1">{item.category}</span>
                </div>
                <div className="mt-1">
                  <i className="fe fe-map-pin text-muted"></i>
                  <span className="ms-1 ">{item.format}</span>
                </div>
              </div>
              <div className="mt-3">
                <p>{formatPrice(item.currency, firstServicePrice)}</p>
              </div>
              <div className="mt-3">
                <p>{shortenMessage(item.description)}</p>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DigitalServiceCard;
