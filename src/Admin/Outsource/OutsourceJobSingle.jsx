import React, { useState, useEffect } from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom";

function getTimeDifference(updatedAt) {
    const updatedAtDate = new Date(updatedAt);
    const currentTime = new Date();
    const timeDifference = currentTime - updatedAtDate;
    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    return { days, hours: hours % 24, minutes: minutes % 60 };
}

const OutsourceJobSingle = () => {
    const [ecosystemDetails, setEcosystemDetails] = useState(null);
    const location = useLocation();
    const queryParam = new URLSearchParams(location.search);
    const ecosystemId = queryParam.get("id");

    const getTimeDifferenceString = (time) => {
        if (!time) {
            return "Unknown";
        }
        if (time.days > 0) {
            return `${time.days} days ago`;
        } else if (time.hours > 0) {
            return `${time.hours} hours ago`;
        } else {
            return `${time.minutes} minutes ago`;
        }
    };

    const time = ecosystemDetails ? getTimeDifference(ecosystemDetails.updatedAt) : null;
    const timeString = getTimeDifferenceString(time);

    const fetchEcosystemDetails = async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/admin-get-an-ecosystem/${ecosystemId}`
            );
            if (response.data && response.data.ecosystem) {
                setEcosystemDetails(response.data.ecosystem);
            }
        } catch (error) {
            console.error("Error fetching ecosystem details:", error);
        }
    };

    useEffect(() => {
        fetchEcosystemDetails();
    }, [ecosystemId]);

    if (!ecosystemDetails) {
        return <div>Loading...</div>;
    }

    return (
        <section className="py-14 bg-white">
            <Container>
                <Row>
                    <Col xl={{ span: 8, offset: 2 }} md={12}>
                        <div className="d-xl-flex ">
                            <div className="mb-3 mb-md-0">
                                {ecosystemDetails.ecoCertificate.length > 0 && (
                                    <Image
                                        src={ecosystemDetails.ecoCertificate[0]} // Assuming this is the logo or image
                                        alt="logo"
                                        className="icon-shape border rounded-circle"
                                        style={{ height: "100px", width: "120px" }}
                                    />
                                )}
                            </div>

                            {/* text */}
                            <div className="ms-xl-3  w-100 mt-3 mt-xl-0">
                                <div className="d-flex justify-content-between mb-5">
                                    <div>
                                        <h1 className="mb-1 h2">
                                            {ecosystemDetails.ecosystemName}
                                        </h1>
                                        <h5>Domain: {ecosystemDetails.ecosystemDomain}</h5>
                                        <h5>Target Audience: {ecosystemDetails.targetAudienceSector}</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-md-flex justify-content-between ">
                                        <div className="mb-2 mb-md-0">
                                            <i className="fe fe-clock text-muted"></i>{" "}
                                            <span>{timeString}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xl={{ span: 8, offset: 2 }} md={12}>
                        <h3>Description</h3>
                        <p>{ecosystemDetails.ecosystemDescription}</p>
                        <div className="mt-5">
                            <h1 className="fs-3">Main Objective</h1>
                            <p>{ecosystemDetails.mainObjective}</p>
                        </div>
                        <div className="mt-5">
                            <h1 className="fs-3">Expected Audience Number</h1>
                            <p>{ecosystemDetails.expectedAudienceNumber}</p>
                        </div>
                        <div className="mt-5">
                            <h1 className="fs-3">Experience</h1>
                            <p>{ecosystemDetails.experience}</p>
                        </div>
                        <div className="mt-5">
                            <h1 className="fs-3">Status</h1>
                            <p>{ecosystemDetails.status}</p>
                        </div>
                    </Col>
                </Row>
                <Col xl={{ span: 8, offset: 2 }} md={12} className="mt-8">
                    <div className="d-xl-flex border p-4 rounded">
                        <div className="mb-3 mb-md-0">
                            {ecosystemDetails.ecoCertificate.length > 0 && (
                                <Image
                                    src={ecosystemDetails.ecoCertificate[0]}
                                    alt="Ecosystem Certificate"
                                    className="icon-shape border rounded-circle"
                                    style={{ height: "100px", width: "120px" }}
                                />
                            )}
                        </div>
                        <div className="ms-xl-3 w-100 mt-3 mt-xl-0">
                            <div className="d-flex justify-content-between mb-5">
                                <div>
                                    <h1 className="mb-1 h2">{ecosystemDetails.ecosystemName}</h1>
                                    {/* <h5>Contact Information: Not Provided</h5> */}
                                </div>
                                <div>
                                    <Button variant="success">Contact Information</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Container>
        </section>
    );
};

export default OutsourceJobSingle;
