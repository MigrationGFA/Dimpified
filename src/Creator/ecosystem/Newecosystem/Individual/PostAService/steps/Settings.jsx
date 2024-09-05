import React, { useEffect, useRef } from "react";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import { Tooltip } from "flowbite-react";
import {
  updateServiceData,
  addBackgroundCover,
  removeBackgroundCover,
} from "../../../../../../features/service";

const Settings = ({ onNext, onPrevious }) => {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.service) || {};

  const currencyType = [
    { value: "NGN", label: "Naira" },
    { value: "USD", label: "Dollars" },
    { value: "EUR", label: "Euros" },
    { value: "GBP", label: "Pounds" },
  ];

  const formatType = [
    { label: "Select Format" },
    { value: "remote", label: "Remote" },
    { value: "onsite", label: "Onsite" },
    { value: "hybrid", label: "Hybrid" },
  ];

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const filesArray = Array.from(event.target.files);
    filesArray.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        dispatch(
          addBackgroundCover({ name: file.name, preview: e.target.result })
        );
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
                      dispatch(
                        updateServiceData({ description: e.target.value })
                      )
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
