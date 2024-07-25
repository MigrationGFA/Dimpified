import React, { Fragment, useState, useEffect } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "react-feather";
import CourseCard from "../FilterCourseCard";
import axios from "axios";
import { useParams } from "react-router-dom";

const CourseGridView = ({ filterOptions, setTotalFilteredCourses }) => {
  let {ecosystemDomain} = useParams();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const recordsPerPage = 9;
  const pagesVisited = pageNumber * recordsPerPage;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let filteredCourses = [];

        // Check if filterOptions are provided and apply filters
        if (
          filterOptions &&
          (filterOptions.selectedCategories || filterOptions.selectedLevels)
        ) {
          const requestData = {
            category: filterOptions.selectedCategories || [],
            level:
              filterOptions.selectedLevels?.map((level) =>
                level.toLowerCase()
              ) || [],
          };

          const response = await axios.post(
            "https://remsana-backend-testing.azurewebsites.net/api/v1/search-courses",
            requestData
          );

          if (response.data && Array.isArray(response.data.courses)) {
            filteredCourses = response.data.courses;
            // Update total filtered courses count using setTotalFilteredCourses
            setTotalFilteredCourses(filteredCourses.length);
          }
        } else {
          // Fetch all courses if no filters applied
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/ecosystem-courses/${ecosystemDomain}`
          );
          if (response.data && Array.isArray(response.data.courses)) {
            filteredCourses = response.data.courses;
            // Update total filtered courses count using setTotalFilteredCourses
            setTotalFilteredCourses(filteredCourses.length);
          }
        }

        setCourses(filteredCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filterOptions, setTotalFilteredCourses]);

  // Ensure that courses is an array before calling slice
  const displayCourses =
    Array.isArray(courses) && courses.length > 0
      ? courses
          .slice(pagesVisited, pagesVisited + recordsPerPage)
          .map((item, index) => (
            <Col lg={3} md={6} sm={12} key={item.id || item._id} className="mb-5">
            <CourseCard
              key={index}
              item={item}
              free={true}
              viewby="grid"
              showprogressbar={false}
              extraclass="mx-2"
              link={`/${ecosystemDomain}/${item._id}`} // Adjust the link to match your routing
            />
          </Col>
          ))
      : null;

  return (
    <Fragment>
      {loading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          {/* Display loading spinner */}
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      {!loading && (
        <Row>
          {displayCourses && displayCourses.length > 0 ? (
            displayCourses
          ) : (
            <Col>No courses found.</Col>
          )}
        </Row>
      )}

      <ReactPaginate
        previousLabel={<ChevronLeft size="14px" />}
        nextLabel={<ChevronRight size="14px" />}
        pageCount={Math.ceil((courses || []).length / recordsPerPage)}
        onPageChange={({ selected }) => setPageNumber(selected)}
        containerClassName={"justify-content-center mb-0 pagination"}
        previousLinkClassName={"page-link mx-1 rounded"}
        nextLinkClassName={"page-link mx-1 rounded"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link mx-1 rounded"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"active"}
      />
    </Fragment>
  );
};

export default CourseGridView;
