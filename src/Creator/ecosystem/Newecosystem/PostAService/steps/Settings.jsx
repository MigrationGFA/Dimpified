import React, { useEffect } from "react";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import { Tooltip } from "flowbite-react";
import {
  updateServiceData,
  addServiceBackground,
  removeServiceBackground,
} from "../../../../../features/service";

const Settings = ({ onNext, onPrevious }) => {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.service) || {};

  const formatType = [
    { label: "Select Format" },
    { value: "remote", label: "Remote" },
    { value: "onsite", label: "Onsite" },
    { value: "hybrid", label: "Hybrid" },
  ];

  const handleBackgroundChange = (files) => {
    dispatch(addServiceBackground(Array.from(files)));
  };

  const handleRemoveBackground = (index) => {
    dispatch(removeServiceBackground(index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  useEffect(() => {
    // Revoke object URLs on component unmount
    return () => {
      service.serviceBackground.forEach((image) => {
        if (image instanceof File || image instanceof Blob) {
          URL.revokeObjectURL(image.preview);
        }
      });
    };
  }, [service.serviceBackground]);

  // Add preview URLs to images in serviceBackground
  const serviceBackgroundWithPreviews = service.serviceBackground.map((image) => {
    if (image instanceof File || image instanceof Blob) {
      return { ...image, preview: URL.createObjectURL(image) };
    }
    return image;
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Card className="mb-3 border-0 shadow-sm">
        <Card.Header className="border-bottom px-4 py-3 bg-light">
          <h4 className="mb-0">Service Details</h4>
        </Card.Header>
        <Card.Body>
          <p className="text-muted">Provide the details of your service.</p>
          <Col md={12} className="mx-auto">
            <Form.Group as={Row} className="mb-4">
              {/* Header */}
              <Col md={12} className="mb-3">
                <Form.Label htmlFor="header">
                  Header<span className="text-danger">*</span>
                </Form.Label>
                <div className="d-flex">
                  <Form.Select
                    value={service.prefix}
                    onChange={(e) =>
                      dispatch(updateServiceData({ prefix: e.target.value }))
                    }
                    className="flex-shrink-0"
                    style={{
                      maxWidth: "150px",
                      borderTopRightRadius: "0",
                      borderBottomRightRadius: "0",
                    }}
                  >
                    <option value="I will">I will</option>
                    <option value="Our Agency will">Our Agency will</option>
                  </Form.Select>
                  <Form.Control
                    type="text"
                    id="header"
                    placeholder="Give a professional Haircut"
                    value={service.header}
                    onChange={(e) =>
                      dispatch(updateServiceData({ header: e.target.value }))
                    }
                    required
                    className="flex-grow-1"
                    style={{
                      borderTopLeftRadius: "0",
                      borderBottomLeftRadius: "0",
                    }}
                  />
                  <Tooltip
                    content="Describe briefly the service you are offering"
                    placement="left"
                    className="bg-primary text-white"
                    style={{ minWidth: "150px" }}
                  >
                    <FaEye className="ms-2 cursor-pointer" />
                  </Tooltip>
                </div>
              </Col>

              {/* Description */}
              <Col md={12} className="mb-3">
                <Form.Label htmlFor="description">
                  Description<span className="text-danger">*</span>
                </Form.Label>
                <div className="d-flex">
                  <Form.Control
                    as="textarea"
                    id="description"
                    rows={4}
                    placeholder="e.g Experience top-notch grooming with our professional barber service. We offer precision haircuts, classic shaves, and personalized styles in a relaxing atmosphere. Our skilled barbers use premium products to ensure you leave looking and feeling your best. Book your appointment today for a tailored grooming experience"
                    value={service.description}
                    onChange={(e) =>
                      dispatch(updateServiceData({ description: e.target.value }))
                    }
                    required
                  />
                  <Tooltip
                    content="Provide detailed information about the service like the e.g"
                    placement="left"
                    className="custom-tooltip bg-primary text-white"
                    style={{ minWidth: "150px" }}
                  >
                    <FaEye className="ms-2 cursor-pointer" />
                  </Tooltip>
                </div>
              </Col>

              {/* Format */}
              <Col md={12} className="mb-3">
                <Form.Label htmlFor="format">
                  Format<span className="text-danger">*</span>
                </Form.Label>
                <div className="d-flex">
                  <Form.Select
                    id="format"
                    value={service.format}
                    onChange={(e) =>
                      dispatch(updateServiceData({ format: e.target.value }))
                    }
                    required
                  >
                    {formatType.map((dept, index) => (
                      <option key={index} value={dept.value}>
                        {dept.label}
                      </option>
                    ))}
                  </Form.Select>
                  <Tooltip
                    content="Choose the format of the service (e.g., online, in-person)"
                    placement="left"
                    className="custom-tooltip bg-primary text-white"
                    style={{ minWidth: "150px" }}
                  >
                    <FaEye className="ms-2 cursor-pointer" />
                  </Tooltip>
                </div>
              </Col>

              {/* Service Background */}
              <Col md={12} className="mb-3">
                <Form.Label md={4} htmlFor="serviceBackground">
                  Service Background{" "}
                  <small className="text-muted">
                    <em className="text-sm">
                      (image files only: png, jpeg, jpg, etc....)
                    </em>
                  </small>
                  <span className="text-danger">*</span>
                </Form.Label>
                <div className="d-flex align-items-center">
                  <Form.Control
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleBackgroundChange(e.target.files)}
                  />
                  <Tooltip
                    content="Upload background images related to the service"
                    placement="left"
                    className="custom-tooltip bg-primary text-white"
                    style={{ minWidth: "150px" }}
                  >
                    <FaEye className="ms-2 cursor-pointer" />
                  </Tooltip>
                </div>
                <div style={{ marginTop: "0.5rem" }}>
                  {serviceBackgroundWithPreviews.map((image, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "0.5rem",
                      }}
                      className="d-inline-flex"
                    >
                      <img
                        src={image.preview}
                        alt={`Background ${index}`}
                        style={{
                          width: "80px",
                          height: "80px",
                          marginRight: "1px",
                        }}
                      />
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleRemoveBackground(index)}
                        style={{ marginRight: "10px" }}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              </Col>
            </Form.Group>
          </Col>
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-between mb-3">
        <Button variant="secondary" onClick={onPrevious}>
          Previous
        </Button>
        <Button variant="primary" type="submit">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default Settings;
