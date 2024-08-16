import React, { Fragment, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal, Form, Row, Col, Image } from "react-bootstrap";
// import DotBadge from "../Components/elements/bootstrap/DotBadge";
import TanstackTable from "../../Components/elements/advance-table/TanstackTable";
import { showToast } from "../../Components/Showtoast";
import axios from "axios";
import { toast } from "react-toastify";

const JobTable = ({ data, header }) => {
  const [loading, setLoading] = useState(false);
  const [loadingC, setLoadingC] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState(null);
  const [selectedItemType, setSelectedItemType] = useState(null);
  const [selectedEcosystemDomain, setSelectedEcosystemDomain] = useState(null);

  const [Rloading, setRLoading] = useState(false);

  function truncateDescription(description, maxLength = 40) {
    if (description.length <= maxLength) {
      return description;
    } else {
      return `${description.slice(0, maxLength)}...`;
    }
  }
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

   // Function to handle star rating click
   const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmitReview = async () => {
    setRLoading(true);
    if (!selectedItemId) {
      setRLoading(false);
      showToast("Item ID not provided");
      return;
    }
    const reviewData = {
      reviewedItemType: selectedItemType,
      userId: selectedUserId,
      reviewedItemId: selectedItemId,
      rating: rating,
      title: selectedCourseTitle,
      review: reviewText,
      ecosystemDomain: selectedEcosystemDomain,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/ecosystem/create-reviews`,
        reviewData
      );
      setRLoading(false);
      showToast(response.data.message);
      setShowReviewModal(false);
    } catch (error) {
      setRLoading(false);
      showToast("Error submitting review");
    }
  };

  const handleShow = (userId, itemId, title, itemType, ecosystemDomain) => {
    setSelectedItemId(itemId);
    setSelectedUserId(userId);
    setSelectedCourseTitle(title);
    setSelectedItemType(itemType);
    setSelectedEcosystemDomain(ecosystemDomain);
    setShowReviewModal(true);
   
  };

  const columns = useMemo(() => {
    return header.map(({ accessorKey, header }) => ({
      header: header,
      accessorKey: accessorKey,
      cell: ({ row }) => {
        if (accessorKey === "title") {
          return (
            <Link
              to=""
              // {`/jobs/listing/dashboard-job-list/?id=${row.original._id}`}
              className="text-inherit"
            >
              <h4 className="mb-1 text-primary-hover">{row.original.title}</h4>
              <h4 className="mb-1 text-primary-hover">{row.original.header}</h4>
              <h4 className="mb-1 text-primary-hover">{row.original.productName}</h4>
              <span className="text-inherit" style={{ width: "30px" }}>
                {truncateDescription(row.original.course.description)}
              </span>
            </Link>
          );
        }  else if (accessorKey === "category") {
          return (
            <Fragment>
              <p className="mb-1 text-primary-hover">{row.original.course.category} </p>
            </Fragment>
          );
        }  else if (accessorKey === "image") {
          return (
            <div>
              <Image
                src={row.original.course.image || row.original.backgroundCover[0]}
                alt=""
                className="rounded-circle img-fluid" 
                style={{ 
                  width: '80px',
                  height: '70px'
                }}
              />
            </div>
          );
        } else if (accessorKey === "format") {
          return (
            <Fragment>
              <p className="mb-1 text-primary-hover">{row.original.format}</p>
            </Fragment>
          );
        } else if (accessorKey === "totalNumberOfEnrolledStudent") {
            return (
              <Fragment>
                <p className="mb-1 text-primary-hover">{row.original.course.totalNumberOfEnrolledStudent}</p>
              </Fragment>
            );
          } else if (accessorKey === "deliveryDate") {
          const updatedAt = new Date(row.original.updatedAt);
          const formattedDate = updatedAt.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });
          return (
            <Fragment>
              <p>{formattedDate}</p>
            </Fragment>
          );
        } else if (accessorKey === "paymentStatus") {
          return (
            <Fragment>
              {row.original.paymentStatus === "paid" ? (
                <Button variant="success" disabled>
                  Paid
                </Button>
              ) : (
                <button
                  className="btn btn-primary"
                  disabled={loading}
                  style={{ opacity: loading ? 0.7 : 1 }}
                  onClick={() => {
                    handlePaymentClick(row);
                  }}
                >
                  {loading ? "Processing" : "Make Payment"}
                </button>
              )}
            </Fragment>
          );
        }  else if (accessorKey === "review") {
            return (
              <Fragment>
                <Button
                  variant="primary"
                  onClick={() =>
                    handleShow(
                      row.original.userId,
                      row.original.course._id,
                      row.original.course.title,
                      row.original.itemType,
                      row.original.ecosystemDomain,
                    )
                  }
                >
                  Post Review
                </Button>
              </Fragment>
            );
          } else if (accessorKey === "action") {
          return (
            <Fragment>
              {row.original.paymentStatus === "paid" ? (
                <Button
                  href="#"
                  variant="success"
                  className="btn-sm"
                  disabled={loadingC}
                  style={{ opacity: loadingC ? 0.7 : 1 }}
                  onClick={() => markCompleted(row.original._id)}
                >
                  {loadingC ? "Processing" : "Completed"}
                </Button>
              ) : (
                <Button
                  href="#"
                  variant="success"
                  className="btn-sm"
                  style={{ opacity: ".7" }}
                  disabled
                >
                  View Details
                </Button>
              )}
            </Fragment>
          );
        } else if (accessorKey === "price") {
          return (
            <span>
              {formatPrice(row.original.currency, row.original.course.price || row.original.service.price)}
            </span>
          );
        } else {
          return <span>{row.original[accessorKey]}</span>;
        } 
      },
    }));
  }, [header]);

  return data ? (
    <Fragment>
      <TanstackTable
        data={data}
        columns={columns}
        filter={true}
        filterPlaceholder="Search My Products"
        pagination={true}
      />
      {/* Modal component for submitting review */}
      <Modal
        show={showReviewModal}
        onHide={() => {
          setReviewText("");
          setRating(0);
          setShowReviewModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Post Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <h3 className="mb-4">Give Your Review on this Job</h3>
            <Row className="align-items-center">
              <Col xs="auto" className="text-center">
                <h6 className="">
                  Press any of the stars for your star rating
                </h6>

                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    className="text-warning"
                    onClick={() => handleStarClick(value)}
                  >
                    <i
                      className={`fa${value <= rating ? "s" : "r"} fa-star`}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    />
                  </span>
                ))}

                <span className="ms-2 fs-5">{rating}/5</span>
              </Col>
            </Row>
          </div>

          <div className="w-100 mb-3">
            <h4 className="mb-3">Write Your Review</h4>

            <Form className="position-relative">
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Write your review here..."
                  className="w-100"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                />
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setReviewText("");
              setRating(0);
              setShowReviewModal(false);
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            disabled={Rloading}
            onClick={handleSubmitReview}
          >
            {Rloading ? "Processing" : "Submit Review"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  ) : (
    <div>Loading...</div>
  );
};

export default JobTable;
