import React, { useEffect, useRef } from "react";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import { Tooltip } from "flowbite-react";
import {
  updateServiceData,
  addBackgroundCover,
  removeBackgroundCover,
} from "../../../../../features/service";

const Settings = ({ onNext, onPrevious }) => {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.service) || {};

  const currencyType = [
    { value: "NGN", label: "Naira" },
    { value: "USD", label: "Dollars" },
    { value: "EUR", label: "Euros" },
    { value: "GBP", label: "Pounds" },
  ];

  const productType = [
    { value: "music", label: "Music" },
    { value: "software", label: "Software" },
    { value: "art", label: "Art" },
    { value: "graphics", label: "Graphics" },
    { value: "ebook", label: "eBook" },
    { value: "video", label: "Video" },
    { value: "photography", label: "Photography" },
    { value: "tutorial", label: "Tutorial" },
    { value: "game", label: "Game" },
    { value: "plugin", label: "Plugin" },
    { value: "others", label: "Others" }
  ];
  

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const filesArray = Array.from(event.target.files);
    filesArray.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        dispatch(addBackgroundCover({ name: file.name, preview: e.target.result }));
      };
      reader.readAsDataURL(file);
    });
  };
  
  

  const handleRemoveBackground = (index) => {
    dispatch(removeBackgroundCover(index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  useEffect(() => {
    return () => {
      service.backgroundCover.forEach((image) => {
        URL.revokeObjectURL(image.preview);
      });
    };
  }, [service.backgroundCover]);

  return (
    <Form onSubmit={handleSubmit}>
      <Card className="mb-3 border-0 shadow-sm">
        <Card.Header className="border-bottom px-4 py-3 bg-light">
          <h4 className="mb-0">Digital Product Details</h4>
        </Card.Header>
        <Card.Body>
          <p className="text-muted">Provide the details of your digital product.</p>
          <Col md={12} className="mx-auto">
            <Form.Group as={Row} className="mb-4">
              {/* Header */}
              <Col md={12} className="mb-3">
                <Form.Label htmlFor="header">
                  Product Name<span className="text-danger">*</span>
                </Form.Label>
                <div className="d-flex ">
                  <Form.Control
                    type="text"
                    id="header"
                    placeholder="Enter your product Name"
                    value={service.header}
                    onChange={(e) =>
                      dispatch(updateServiceData({ header: e.target.value }))
                    }
                    required
                    className="flex-grow-1"
                  />
                  <Tooltip
                    content="Enter the product Name of what you are selling"
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
                    placeholder="e.g Discover the ultimate eBook that transforms your understanding of [Topic]. Packed with insightful content, this digital product offers in-depth explanations, engaging visuals, and practical tips to help you master [Topic]. Whether you're a beginner or looking to refine your skills, this eBook is designed to cater to all levels. Download now and elevate your knowledge with this comprehensive guide."
                    value={service.description}
                    onChange={(e) =>
                      dispatch(
                        updateServiceData({ description: e.target.value })
                      )
                    }
                    required
                  />
                  <Tooltip
                    content="Provide detailed information about your digital product like the e.g"
                    placement="left"
                    className="custom-tooltip bg-primary text-white"
                    style={{ minWidth: "150px" }}
                  >
                    <FaEye className="ms-2 cursor-pointer" />
                  </Tooltip>
                </div>
              </Col>

              {/* Currency */}
              <Col md={12} className="mb-3">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="currency">
                    Currency<span className="text-danger">*</span>
                  </Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Select
                      id="currency"
                      value={service.currency}
                      onChange={(e) =>
                        dispatch(
                          updateServiceData({ currency: e.target.value })
                        )
                      }
                      required
                    >
                      <option value="">Select Currency</option>
                      {currencyType.map((currency, index) => (
                        <option key={index} value={currency.value}>
                          {currency.label}
                        </option>
                      ))}
                    </Form.Select>
                    <Tooltip
                      content="Choose your Currency according to you locality"
                      placement="left"
                      className="bg-primary text-white"
                      style={{ minWidth: "150px" }}
                    >
                      <FaEye className="ms-2 cursor-pointer" />
                    </Tooltip>
                  </div>
                </Form.Group>
              </Col>

              {/* Product Type */}
              <Col md={12} className="mb-3">
                <Form.Label htmlFor="format">
                  Product Type<span className="text-danger">*</span>
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
                    <option value="">Select Product Type</option>
                    {productType.map((dept, index) => (
                      <option key={index} value={dept.value}>
                        {dept.label}
                      </option>
                    ))}
                  </Form.Select>
                  <Tooltip
                    content="Choose the digital product type that fits your product"
                    placement="left"
                    className="custom-tooltip bg-primary text-white"
                    style={{ minWidth: "150px" }}
                  >
                    <FaEye className="ms-2 cursor-pointer" />
                  </Tooltip>
                </div>
              </Col>

              {/* Author */}
              <Col md={12} className="mb-3">
                <Form.Label htmlFor="header">
                  Author<span className="text-danger">*</span>
                </Form.Label>
                <div className="d-flex ">
                  <Form.Control
                    type="text"
                    id="header"
                    placeholder="Enter the Author of your digital product"
                    value={service.header}
                    onChange={(e) =>
                      dispatch(updateServiceData({ header: e.target.value }))
                    }
                    required
                    className="flex-grow-1"
                  />
                  <Tooltip
                    content="Enter the product Name of what you are selling"
                    placement="left"
                    className="bg-primary text-white"
                    style={{ minWidth: "150px" }}
                  >
                    <FaEye className="ms-2 cursor-pointer" />
                  </Tooltip>
                </div>
              </Col>

              {/* Service Background */}
              <Col md={12} className="mb-3">
                <Form.Label htmlFor="backgroundCover">
                  Digital Product Background{" "}
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
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                  <Tooltip
                    content="Upload images related to your digital product"
                    placement="left"
                    className="custom-tooltip bg-primary text-white"
                    style={{ minWidth: "150px" }}
                  >
                    <FaEye className="ms-2 cursor-pointer" />
                  </Tooltip>
                </div>
                <div style={{ marginTop: "0.5rem" }}>
                  {service.backgroundCover.map((image, index) => (
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
