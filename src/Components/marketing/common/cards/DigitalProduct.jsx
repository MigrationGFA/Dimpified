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

const DigitalProductCard = ({ item }) => {
  let { ecosystemDomain } = useParams();

  const firstServicePrice =
    item.package && item.package.length > 0 ? item.package[0].price : null;

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

  let originalImgUrl = item?.backgroundCover?.[0] || "";
  let updatedImgUrl = originalImgUrl ? encodeURI(originalImgUrl) : "";

  return (
    <Card className="card-bordered card-hover cursor-pointer h-100 ">
      <Card.Body className="p-0">
        <Link
          to={`/${ecosystemDomain}/service/${item._id}`}
          className="text-inherit me-1"
        >
          <div
            className="position-relative  top-0 start-0 w-100 "
            style={{
              height: "200px",
              backgroundImage: `url(${updatedImgUrl})`,
              backgroundSize: "cover",
              borderRadius: "5px 5px 0 0",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "contain",
            }}
          ></div>
        </Link>

        <div className="content w-100 mt-2 px-3">
          <div className="d-flex justify-content-between mb-2">
            <div>
              <Link
                to={`/${ecosystemDomain}/service/${item._id}`}
                className="text-inherit me-1"
              >
                <h4 className="mb-1 fs-4">{item.productName}</h4>
              </Link>
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
                  <span className="ms-1 ">{item.productType[0]}</span>
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

export default DigitalProductCard;
