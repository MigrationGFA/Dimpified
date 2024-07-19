import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Col, Row, Image, Pagination, Form, Button, Spinner } from "react-bootstrap";
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
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setLoading(false);
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
        setReviewText(""); // Clear review text after submission
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
        // Handle errors if any
      });
  };

  // Function to render formatted date
  const renderDate = (dateString) => {
    // Implement your logic here to render date in the desired format
  };

  // Get current reviews
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      {/* Your review submission form goes here */}

      <h3 className="mb-4">Reviews</h3>
      {/* Render reviews or no review message */}
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : reviews.length === 0 ? (
        <p>No reviews found. Be the first to review by purchasing this course.</p>
      ) : (
        <Fragment>
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
                  <span className="ms-1 fs-6 text-muted">{renderDate(review.date)}</span>
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
      )}
    </Fragment>
  );
};

export default ReviewsTab;
