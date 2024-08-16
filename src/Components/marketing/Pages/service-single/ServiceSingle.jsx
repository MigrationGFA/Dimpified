// import node module libraries
import {
  Row,
  Col,
  Container,
  Button,
  Image,
  Modal,
  Card,
  Tabs,
  Tab,
  Collapse,
} from "react-bootstrap";
import { Form, Link, useLocation, useParams } from "react-router-dom";

import { FaArrowRight, FaBookmark, FaNairaSign } from "react-icons/fa6";

import GKTippy from "../../../elements/tooltips/GKTippy";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { IoMdTime } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { MdBookmarkBorder } from "react-icons/md";

import { showToast } from "../../../Showtoast";
import { IoPersonOutline } from "react-icons/io5";
import RequestModalForm from "./RequestModalForm";
import { useSelector } from "react-redux";
import NavbarDefault from "../../../../Pages/Pages/home-academy/navbars/NavbarDefault";

function getTimeDifference(updatedAt) {
  // Parse the updatedAt string to a Date object
  const updatedAtDate = new Date(updatedAt);

  // Get the current time
  const currentTime = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentTime - updatedAtDate;

  // Convert milliseconds to minutes
  const minutes = Math.floor(timeDifference / (1000 * 60));

  // Convert minutes to hours
  const hours = Math.floor(minutes / 60);

  // Convert hours to days
  const days = Math.floor(hours / 24);

  return { days, hours: hours % 24, minutes: minutes % 60 };
}

const ServicesSingle = () => {
  //   const slug = slugInfo.slug;
  //   const job = JobsListingData.find((job) => job.slug === slug);
  //   const similarJobs = JobsListingData.filter((job) => job.slug !== slug).slice(
  //     0,
  //     4
  //   );
  const [serviceDetails, setServiceDetails] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const serviceId = queryParam.get("id");
  const [showFallback, setShowFallback] = useState(false);
  const [key, setKey] = useState("basic");
  const [open, setOpen] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [show, setShow] = useState(false);

  const url = window.location.href;

  let { ecosystemDomain, id } = useParams();

  const user = useSelector((state) => state.authentication.user);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleContinue = () => {
    showToast("Continue button clicked!");
  };

  useEffect(() => {
    const getAService = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/get-a-service/${id}`
        );
        console.log("Response received:", response.data);
        setServiceDetails(response.data.service);
        setUserDetails(response.data.userDetails);
      } catch (error) {
        console.log(error);
      }
    };
    getAService();
  }, [id]);

  const handleToggle = (id) => {
    setOpen(open === id ? false : id);
  };

  // const handleBookmark = async () => {
  //   try {
  //     const response = await axios.post(
  //       `https://unleashified-backend.azurewebsites.net/api/v1/save-service/${serviceId}`,
  //       { userId: userId }
  //     );

  //     if (response.status === 200 && response.data) {
  //       setBookmarked(!bookmarked);
  //       showToast(response.data.message);

  //       // Save bookmark status to local storage
  //       localStorage.setItem(
  //         `bookmarked-${serviceId}`,
  //         JSON.stringify(!bookmarked)
  //       );
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const savedBookmarkStatus = localStorage.getItem(`bookmarked-${serviceId}`);
    if (savedBookmarkStatus !== null) {
      setBookmarked(JSON.parse(savedBookmarkStatus));
    }
  }, [serviceId]);

  const getTimeDifferenceString = (time) => {
    if (time.days > 0) {
      return `${time.days} days ago`;
    } else if (time.hours > 0) {
      return `${time.hours} hours ago`;
    } else {
      return `${time.minutes} minutes ago`;
    }
  };

  const time = getTimeDifference(serviceDetails.updatedAt);
  const timeString = getTimeDifferenceString(time);

  // to share service
  const handleShare = async () => {
    try {
      // Check if Web Share API is supported by the browser
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          url: url,
        });
        console.log("Page shared successfully");
      } else {
        console.log("coming here");
        // Show fallback for browsers that don't support Web Share API
        setShowFallback(true);
      }
    } catch (error) {
      console.error("Error sharing page:", error);
    }
  };

  const handleCopy = () => {
    // Copy the URL to the clipboard
    navigator.clipboard.writeText(url);
  };

  const currencyName = serviceDetails.currency;
  const priceValue = serviceDetails.price;

  // Function to format price with currency symbol
  const formatPrice = (currencyName, priceValue) => {
    switch (currencyName) {
      case "naira":
      case "NGN":
        return ` ₦${priceValue}`;
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

  return (
    <Fragment>
      <NavbarDefault />
      <section className="py-10 px-8 bg-white overflow-hidden">
        {/* <Container className="px-2"> */}
        <Row className="g-6">
          <Col xl={7} md={12} style={{ span: 8, offset: 2 }}>
            {/* { span: 8, offset: 2 } */}

            <style jsx>{`
              .zoom-image {
                transition: transform 0.3s ease-in-out;
              }

              .zoom-image:hover {
                transform: scale(1.02);
              }
            `}</style>
            <div>
              <div className="mb-3 mb-md-2 d-flex justify-content-center">
                {serviceDetails && (
                  <Image
                    src={
                      serviceDetails && serviceDetails.backgroundCover == null
                        ? ""
                        : serviceDetails.backgroundCover[0]
                    }
                    alt={`${userDetails && userDetails.firstName} ${
                      ecosystemDomain
                    }`}
                    className="img-fluid border zoom-image"
                    style={{ height: "400px", width: "100%" }}
                  />
                )}
              </div>
              {/* text */}
              <div className="ms-xl-1 mt-1 mt-xl-0 px-2">
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <div className="d-inline-flex align-items-center">
                      <IoPersonOutline
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: "1",
                        }}
                      />{" "}
                      <h1 className="mb-2 mt-2 h4 ">
                        {/* {`${userDetails && userDetails.firstName} ${
                        userDetails.lastName
                      }`} */}

                        {serviceDetails.ecosystemDomain}
                      </h1>
                    </div>

                    <div>
                      <h1 className="mb-2 mt-2 h1 ">
                        {/* {`${userDetails && userDetails.firstName} ${
                        userDetails.lastName
                      }`} */}
                        {serviceDetails.header}
                      </h1>
                      <h1 className="mb-1 h3">
                        {serviceDetails && serviceDetails.description}
                      </h1>
                    </div>
                    <div>
                      {/* {serviceDetails && serviceDetails.serviceName && (
                          <span>Service as {serviceDetails.serviceName}, </span>
                        )} */}
                      {/* {serviceDetails && serviceDetails.department && (
                        <span>Department: {serviceDetails.department} </span>
                      )} */}
                      {/* star */}
                      {/* <span className="text-dark ms-2 fw-medium">
                          {job.rating}{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning align-baseline"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </span> */}
                      {/* <span className="ms-0">({job.totalReviews} Reviews)</span> */}
                    </div>
                    {/* {userDetails && userDetails.phoneNumber && (
                        <span>Contact: {userDetails.phoneNumber} </span>
                      )}
                      ,
                      {userDetails && userDetails.emailAddress && (
                        <span>Email: {userDetails.emailAddress} </span>
                      )} */}
                  </div>
                  <div className="d-inline-flex justify-content-between">
                    <div>
                      <button
                        type="button"
                        // onClick={handleBookmark}
                        style={{
                          background: "none",
                          border: "none",
                          padding: 0,
                          cursor: "pointer",
                        }}
                      >
                        {bookmarked ? (
                          <FaBookmark
                            style={{
                              height: "25px",
                              marginRight: 3,
                              marginTop: 4,
                              width: "30px",
                            }}
                          />
                        ) : (
                          <MdBookmarkBorder
                            style={{
                              height: "40px",
                              marginRight: 3,
                              marginBottom: 4,
                              width: "30px",
                            }}
                          />
                        )}
                      </button>
                    </div>
                    <div onClick={handleShare} style={{ marginTop: 6 }}>
                      {/* bookmark */}

                      <GKTippy content="Share Job Post">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          // width="100"
                          // height="100"
                          width="24"
                          height="24"
                          // viewBox="0 0 16 16"
                          viewBox="0 0 24 24"
                        >
                          <path d="M 18 2 A 3 3 0 0 0 15 5 A 3 3 0 0 0 15.054688 5.5605469 L 7.9394531 9.7109375 A 3 3 0 0 0 6 9 A 3 3 0 0 0 3 12 A 3 3 0 0 0 6 15 A 3 3 0 0 0 7.9355469 14.287109 L 15.054688 18.439453 A 3 3 0 0 0 15 19 A 3 3 0 0 0 18 22 A 3 3 0 0 0 21 19 A 3 3 0 0 0 18 16 A 3 3 0 0 0 16.0625 16.712891 L 8.9453125 12.560547 A 3 3 0 0 0 9 12 A 3 3 0 0 0 8.9453125 11.439453 L 16.060547 7.2890625 A 3 3 0 0 0 18 8 A 3 3 0 0 0 21 5 A 3 3 0 0 0 18 2 z"></path>
                        </svg>
                      </GKTippy>
                    </div>
                  </div>
                </div>
                <div>
                  {/* year */}
                  <div className="d-md-flex justify-content-between ">
                    <div className="mb-2 mb-md-0">
                      <span className="me-2">
                        {" "}
                        <i className="fe fe-briefcase text-muted"></i>
                        <span className="ms-1 ">
                          {serviceDetails && serviceDetails.category && (
                            <span>
                              Department: {serviceDetails.category}
                            </span>
                          )}
                        </span>
                      </span>
                      {/* text */}
                      <span className="me-4">
                        {/* <FaNairaSign style={{ height: "15px" }} /> */}
                        <span className="ms-1 ">
                          {serviceDetails.currency &&
                          serviceDetails.services ? (
                            <span className="font-weight-bold">
                              {formatPrice(
                                serviceDetails.currency,
                                serviceDetails.services[0].price
                              )}
                            </span>
                          ) : (
                            <span>Loading...</span>
                          )}
                        </span>
                      </span>
                      <span className="me-4">
                        <i className="fe fe-clock text-muted"></i>
                        <span className="ms-1 ">
                          {serviceDetails.format} 
                        </span>
                      </span>
                      {/* location */}
                      <span className="me-2">
                      <i className="fe fe-map-pin text-muted"></i>
                      <span className="ms-1 ">{serviceDetails.services && serviceDetails.services[0].priceFormat}</span>
                    </span>
                    </div>
                    <div>
                      {/* time */}
                      <i className="fe fe-clock text-muted"></i>{" "}
                      <span>{timeString}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-inline-flex flex-wrap">
              {/* {userDetails.skills &&
              userDetails.skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-1 m-1 rounded-pill bg-secondary text-white"
                  style={{ fontSize: "small" }}
                >
                  {skill}
                </div>
              ))} */}
            </div>
            <hr className="my-4" />
            <div>
              <p>
                <span>
                  Total Job Done:{" "}
                  <span className="text-dark">
                    {serviceDetails.totalJobDone || 0}
                  </span>
                </span>
              </p>
            </div>
            {/* <div
                dangerouslySetInnerHTML={{
                  __html: job.jobDetails,
                }}
              /> */}
            {/* button */}
            <div className="mt-5">
              <h1 className="fs-3">Service description</h1>
              <p>{serviceDetails.description}</p>
            </div>
            <div className="mt-5">
              <h1 className="fs-3">Role</h1>
              <p>{serviceDetails.header}</p>
            </div>
            <div className="mt-5">
              {serviceDetails.benefit && serviceDetails.benefit.length > 0 ? (
                <div>
                  <h3 className="fe-3">Benefits:</h3>
                  {serviceDetails.benefit.map((benefits) => (
                    <li key={benefits._id}>{benefits.name}</li>
                  ))}
                </div>
              ) : (
                <p>No responsibilities specified</p>
              )}
            </div>
            <div className="mt-5">
              {serviceDetails.serviceUrl &&
              serviceDetails.serviceUrl.length > 0 ? (
                <div>
                  <h3 className="fe-3">Name and Link(s) to Job done before</h3>
                  {serviceDetails.serviceUrl.map((serviceUrl) => (
                    <li key={serviceUrl._id}>
                      {serviceUrl.name} :- {serviceUrl.url}{" "}
                    </li>
                  ))}
                </div>
              ) : (
                <p> No Name and Link(s) to Job done before</p>
              )}
            </div>
            {/* <Link to={`/jobs/apply-for-this-job/?id=${serviceId}`}>
                <div className="mt-5 d-grid">
                  <Button type="button" variant="primary">
                    Apply for this Job
                  </Button>
                </div>
              </Link> */}
          </Col>
          <Col
            xl={5}
            className="position-sticky"
            style={{ top: "20px", overflow: "hidden" }}
          >
            {serviceDetails && serviceDetails.services && (
              <Tabs
                id="plan-tabs"
                // activeKey=
                onSelect={(k) => setKey(k)}
                fill
                className="border border-light rounded"
              >
                {serviceDetails.services.map((pkg) => (
                  <Tab eventKey={pkg.name} title={pkg.name} key={pkg._id}>
                    <Card body className="text-body">
                      <div
                        style={{ width: "100%" }}
                        className="d-flex justify-content-between"
                      >
                        <h3>{pkg.name}</h3>
                        <h3>{formatPrice(currencyName, pkg.price)}</h3>
                      </div>

                      <div className="mt-2">
                        <p>{pkg.shortDescription}</p>
                        <p>
                          <IoMdTime /> {pkg.deliveryTime} delivery &nbsp;{" "}
                          <TfiReload />{" "}
                          {/* {pkg.additionalRevision
                                      ? pkg.additionalRevision.additionalDays
                                      : 0}{" "}
                                    Revision{pkg.additionalRevision ? `s` : ""} */}
                        </p>
                      </div>

                      <div>
                        <Button
                          onClick={() => handleToggle(pkg._id)}
                          aria-controls={`example-collapse-text-${pkg._id}`}
                          aria-expanded={open === pkg._id}
                          variant="link"
                        >
                          What&apos;s Included
                        </Button>
                        <Collapse in={open === pkg._id}>
                          <div id={`example-collapse-text-${pkg._id}`}>
                            <ul>
                              {pkg.incentives && <li>{pkg.incentives}</li>}
                            </ul>
                          </div>
                        </Collapse>
                      </div>

                      <br />
                      <div>
                        <Button style={{ width: "100%" }} onClick={handleShow}>
                          Continue <FaArrowRight />
                        </Button>

                        <div
                          className="custom-modal"
                          style={{
                            position: "fixed",
                            top: 0,
                            right: 0,
                            height: "100%",
                            width: show ? "33.33%" : "0",
                            overflow: "hidden",
                            backgroundColor: "#fff",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                            transform: show
                              ? "translateX(0)"
                              : "translateX(100%)",
                            transition:
                              "transform 0.3s ease-out, width 0.3s ease-out",
                            zIndex: 1050, // Same as Bootstrap modal z-index
                          }}
                        >
                          <Modal.Header onHide={handleClose}>
                            <Modal.Title className="p-4 mt-2 display-6 fw-bold">
                              Additional payment Information
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body className="p-4">
                            <RequestModalForm
                              service={serviceDetails}
                              name={pkg.name}
                              header={pkg.header}
                              shortDescription={pkg.shortDescription}
                              price={formatPrice(currencyName, pkg.price)}
                              // additionalRevision={pkg.additionalRevision.price}
                            />
                          </Modal.Body>
                          <Modal.Footer className="d-flex justify-content-around">
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button variant="primary" onClick={handleContinue}>
                              Continue
                            </Button>
                          </Modal.Footer>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          textAlign: "center",
                          marginTop: 8,
                        }}
                      >
                        <Link>Compare packages</Link>
                      </div>
                    </Card>
                  </Tab>
                ))}
              </Tabs>
            )}

            <div className="d-flex justify-content-center">
              <a
                href="#contact-section"
                style={{ width: "90%", marginTop: 20 }}
                className="btn btn-outline-primary"
              >
                Contact me <FaArrowRight />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          {/* <Col xl={{ span: 8, offset: 2 }} md={12}>
              <div className="mt-12">
                <h2 className="mb-4">Similar Jobs</h2>
                {similarJobs.map((job, index) => {
                  return <JobListingListviewCard item={job} key={index} />;
                })}
              </div>
            </Col> */}
          {/* <Col xl={{ span: 8, offset: 2 }} md={12} className="mt-8">
            <div className="d-xl-flex border p-4 rounded">
              <div className="mb-3 mb-md-0">
                {userDetails && (
                  <img
                    src={userDetails.userImage}
                    alt={`${userDetails.firstName} ${userDetails.lastName}`}
                    className="icon-shape border rounded-circle"
                    style={{ maxHeight: "100px", maxWidth: "100%" }}
                  />
                )}
              </div>

              
              <div id="contact-section" className="ms-xl-3 w-100 mt-3 mt-xl-0">
                <div className="d-flex justify-content-between mb-5">
                  <div>
                   
                      <h5>Contact: {userDetails.phoneNumber} </h5>
                  
                    {userDetails && userDetails.emailAddress && (
                      <h5>Email: {userDetails.emailAddress} </h5>
                    )}

                    {serviceDetails && serviceDetails.serviceName && (
                      <span>Service as {serviceDetails.serviceName}, </span>
                    )}
                  </div>
                  <div>
                    <Button variant="success">Contact Information</Button>
                  </div>
                </div>
              </div>
            </div>
          </Col> */}
        </Row>
        {showFallback && (
          <Modal show={showFallback} onHide={() => setShowFallback(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Copy Service Link</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input type="text" value={url} readOnly /> <br />
              <Button className="mt-5 " onClick={handleCopy}>
                Copy
              </Button>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowFallback(false)}
              >
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        {/* </Container> */}
      </section>
    </Fragment>
  );
};

export default ServicesSingle;
