import React, { Fragment, useState, useEffect } from "react";
import { Col, Row, Container, Tab } from "react-bootstrap";
import PageHeading from "../../../../Components/marketing/common/page-headings/PageHeading";
import FilterOptions from "./course-filter-page/FilterOptions";
import CourseGridView from "./course-filter-page/CourseGridView";
import CourseListView from './course-filter-page/CourseListView';
import NavbarDefault from "../../../../Pages/home-academy/navbars/NavbarDefault";
import FormSelect from "../../../../Components/elements/form-select/FormSelect";
import GridListViewButton from "../../../../Components/elements/miscellaneous/GridListViewButton";

const CourseFilterPage = () => {
  const [filterOptions, setFilterOptions] = useState({});
  const [totalFilteredCourses, setTotalFilteredCourses] = useState(0); 
  const [currentPage, setCurrentPage] = useState(1); 

  useEffect(() => {
    // Set initial filter options to display all courses
    setFilterOptions({ displayAll: true });
  }, []);

  // Function to handle filter change
  const handleFilterChange = (filterData) => {
    setFilterOptions(filterData);
    // Reset current page to 1 when filter changes
    setCurrentPage(1);
    // Reset total count when filter changes
    setTotalFilteredCourses(0);
  };
  
  // const sortByOptions = [
  //   { value: "newest", label: "Newest" },
  //   { value: "free", label: "Free" },
  //   { value: "most-popular", label: "Most Popular" },
  //   { value: "highest-rated", label: "Highest Rated" },
  // ];

  // Calculate the starting index for the current page
  const startIndex = (currentPage - 1) * 9 + 1;

  // Calculate the ending index for the current page
  let endIndex = startIndex + 8;
  if (endIndex > totalFilteredCourses) {
    endIndex = totalFilteredCourses;
  }

  // Calculate the displayed count
  const displayedCoursesCount = endIndex - startIndex + 1;

  return (
    <Fragment>
      <NavbarDefault />
      {/* Page header */}
      <PageHeading pagetitle="Browse Course" />

      {/* Content */}
      <section className="py-6">
        <Container>
          <Tab.Container defaultActiveKey="grid">
            <Col lg={12} md={12} sm={12} className="mb-4">
              <Row className="d-lg-flex justify-content-between align-items-center">
                <Col md={6} lg={8} xl={9}>
                  <h4 className="mb-3 mb-lg-0">
                    Displaying {displayedCoursesCount} out of {totalFilteredCourses} courses
                  </h4>
                </Col>
                <Col md={6} lg={4} xl={3} className="d-inline-flex">
                  <div className="me-2">
                    <GridListViewButton keyGrid="grid" keyList="list" />
                  </div>
                  {/* <FormSelect options={sortByOptions} placeholder="Sort by" /> */}
                </Col>
              </Row>
            </Col>
            <Row>
              <Col xl={3} lg={3} md={4} sm={12} className="mb-4 mb-lg-0">
                {/* Pass handleFilterChange function as a prop */}
                <FilterOptions onFilterChange={handleFilterChange} />
              </Col>
              {/* Pass filterOptions as a prop and setTotalFilteredCourses function to update total count */}
              <Col xl={9} lg={9} md={8} sm={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="grid" className="pb-4 px-0">
                    <CourseGridView filterOptions={filterOptions} setTotalFilteredCourses={setTotalFilteredCourses} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="list" className="pb-4 px-0 react-code">
                    <CourseListView filterOptions={filterOptions} setTotalFilteredCourses={setTotalFilteredCourses} />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
    </Fragment>
  );
};

export default CourseFilterPage;
