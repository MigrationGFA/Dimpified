import { Fragment, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Col, Row, Image, Pagination, Form, Button } from "react-bootstrap";
import Ratings from "../../../../../Components/marketing/common/ratings/Ratings";
import axios from "axios";
import { useGlobalContext } from "../../../../../context/AuthContext";
import { showToast } from "../../../../../Components/Showtoast";

const ReviewsTab = () => {
  const { userId } = useGlobalContext();
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5; // Number of reviews to display per page
  const location = useLocation();
  const courseId = new URLSearchParams(location.search).get("id");

  useEffect(() => {
    fetchReviews();
  }, [courseId]);

  const fetchReviews = () => {
    axios
      .get(
        `https://remsana-backend-testing.azurewebsites.net/api/v1/getCourseRating/${courseId}`
      )
      .then((response) => {
        // Sort reviews by date in descending order
        const sortedReviews = response.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setReviews(sortedReviews);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        // Handle errors if any
      });
  };

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmitReview = () => {
    const data = {
      course_id: courseId,
      user_id: userId,
      rating: rating,
      review: reviewText,
    };

    axios
      .post(
        "https://remsana-backend-testing.azurewebsites.net/api/v1/submit-rating",
        data
      )
      .then((response) => {
        console.log("Response from endpoint:", response.data);
        showToast(response.data.message);
        fetchReviews();
          
          setReviewText("");
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
        // Handle errors if any
      });
  };

  // Function to render formatted date
  const renderDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffInMs = Math.abs(today - date);
    const seconds = Math.floor(diffInMs / 1000);
    if (seconds < 60) {
      return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
    }
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    }
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    }
    const days = Math.floor(hours / 24);
    if (days < 30) {
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    }
    const months = Math.floor(days / 30);
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  };

  // Get current reviews
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <div className="mb-3">
        <h3 className="mb-4">Give Your Review on this Course</h3>
        <Row className="align-items-center">
          <Col xs="auto" className="text-center">
            <h6 className="">press any of the star for your star rating</h6>
            {/* Render the rating stars */}
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
            {/* Display rating */}
            <span className="ms-2 fs-5">{rating}/5</span>
          </Col>
        </Row>
      </div>

      {/* Add Review Section */}
      <div className="w-100 mb-3">
        <h4 className="mb-3">Write Your Review</h4>
        {/* Add Review Form */}
        <Form className="position-relative">
          {/* Add Review Textarea */}
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
        {/* Add Review Button */}
        <Button variant="primary" onClick={handleSubmitReview}>
          Submit Review
        </Button>
      </div>

      <h3 className="mb-4">Reviews</h3>
      {/* Render reviews */}
      {currentReviews.map((review, index) => (
        <div key={index} className="d-flex border-bottom pb-4 mb-4">
          <Image
            src={review.imageUrl}
            alt={review.username}
            className="rounded-circle avatar-lg"
          />
          <div className="ms-3">
            <h4 className="mb-1">
              {review.username}{" "}
              <span className="ms-1 fs-6 text-muted">
                {renderDate(review.date)}
              </span>
            </h4>
            <div className="fs-6 mb-2 text-warning">
              <Ratings rating={review.rating} />
            </div>
            <p>{review.review}</p>
            {/* <div className="d-lg-flex">
              <p className="mb-0">Was this review helpful?</p>
              <Link to="#" className="btn btn-xs btn-primary ms-lg-3">
                Yes
              </Link>
              <Link to="#" className="btn btn-xs btn-outline-secondary ms-1">
                No
              </Link>
            </div> */}
          </div>
        </div>
      ))}
      {/* Pagination component */}
      <Pagination className="mt-4 justify-content-center">
        <Pagination.First onClick={() => paginate(1)} />
        <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
        {Array.from(
          { length: Math.ceil(reviews.length / reviewsPerPage) },
          (_, i) => (
            <Pagination.Item
              key={i}
              active={i + 1 === currentPage}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          )
        )}
        <Pagination.Next onClick={() => paginate(currentPage + 1)} />
        <Pagination.Last
          onClick={() => paginate(Math.ceil(reviews.length / reviewsPerPage))}
        />
      </Pagination>
    </Fragment>
  );
};

export default ReviewsTab;
