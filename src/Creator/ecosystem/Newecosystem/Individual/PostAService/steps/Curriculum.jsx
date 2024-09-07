import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addService,
  updateService,
  deleteService,
  resetServiceData,
} from "../../../../../../features/service";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { showToast } from "../../../../../../Components/Showtoast";
import axios from "axios";
import { useImageUploader } from "../../../../../../helper/UploadImage";

const AddService = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [price, setPrice] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [priceFormat, setPriceFormat] = useState("");
  const [serviceImage, setServiceImage] = useState("");

  const {
    fileInputRefs,
    handleEditImageClick,
    handleImageChange,
    loadingImage,
  } = useImageUploader();

  const jobSalaryFormats = [
    { value: "Fixed", label: "Fixed" },
    { value: "Hourly", label: "Hourly" },
    { value: "Daily", label: "Daily" },
    { value: "Weekly", label: "Weekly" },
    { value: "Monthly", label: "Monthly" },
    { value: "Yearly", label: "Yearly" },
  ];

  const handleClose = () => {
    setShow(false);
    setName("");
    setShortDescription("");
    setPrice("");
    setDeliveryTime("");
    setPriceFormat("");
    setServiceImage("");
  };

  const handleShow = () => setShow(true);

  const handleAddService = () => {
    dispatch(
      addService({
        name,
        shortDescription,
        price,
        deliveryTime,
        priceFormat,
        serviceImage,
      })
    );
    handleClose();
  };

  return (
    <>
      <Button
        variant="outline-primary"
        className="btn btn-outline-primary btn-sm mt-3"
        onClick={handleShow}
      >
        Add New Service
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Service</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-0">
          <Form.Group className="mb-3">
            <Form.Label>Service Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Service Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Short Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Short Description"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Delivery Time</Form.Label>
            <Form.Control
              type="text"
              placeholder="Delivery Time"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Pricing Format</Form.Label>
            <Form.Select
              type="text"
              placeholder="Job Salary Format"
              value={priceFormat}
              onChange={(e) => setPriceFormat(e.target.value)}
            >
              <option value="">Select Pricing Format</option>
              {jobSalaryFormats.map((jobSalaryFormat, index) => (
                <option key={index} value={jobSalaryFormat.value}>
                  {jobSalaryFormat.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Service Image</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Control
                type="text"
                placeholder="Service Image URL"
                value={serviceImage}
                onChange={(e) => setServiceImage(e.target.value)}
                readOnly // Make the input read-only as the image URL will be set automatically after upload
                className="me-2"
                disabled
              />

              <input
                type="file"
                accept="image/*"
                ref={(el) => (fileInputRefs.current["service-image"] = el)}
                onChange={async (e) => {
                  const imageUrl = await handleImageChange(
                    e,
                    "service",
                    "image"
                  );
                  setServiceImage(imageUrl);
                }}
                style={{ display: "none" }}
              />

              <Button
                variant="primary"
                onClick={() => handleEditImageClick("service", "image")}
                disabled={loadingImage}
              >
                {loadingImage ? "Uploading..." : "Upload Image"}
              </Button>
            </div>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="pt-0 border-0 d-inline">
          <Button variant="primary" onClick={handleAddService}>
            Save Service
          </Button>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const Service = ({ submit, onPrevious }) => {
  const { ecosystemDomain } = useParams();
  const location = useLocation();
  const ecosystemFromState = useSelector(
    (state) => state.ecosystem.ecosystemDomain
  );
  const user = useSelector((state) => state.authentication.user);
  const userType = useSelector((state) => state.authentication.user.data.role);
  const creatorId = user?.data?.CreatorId;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const sections = useSelector((state) => state.service.services) || [];
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editShortDescription, setEditShortDescription] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editDeliveryTime, setEditDeliveryTime] = useState("");
  const [editPriceFormat, setEditPriceFormat] = useState("");
  const [editImage, setEditImage] = useState("");

  const jobSalaryFormats = [
    { value: "Fixed", label: "Fixed" },
    { value: "Hourly", label: "Hourly" },
    { value: "Daily", label: "Daily" },
    { value: "Weekly", label: "Weekly" },
    { value: "Monthly", label: "Monthly" },
    { value: "Yearly", label: "Yearly" },
  ];

  const serviceData = useSelector((state) => state.service);
  const {
    category,
    subCategory,
    prefix,
    header,
    description,
    format,
    currency,
    services,
  } = serviceData;

  let ecosystem;
  if (ecosystemDomain) {
    ecosystem = ecosystemDomain;
  } else {
    ecosystem = ecosystemFromState;
  }

  console.log(ecosystem);

  const handleSubmit = () => {
    setLoading(true);

    const serviceDetails = {
      category: category,
      subCategory: subCategory,
      header: `${prefix} ${header}`,
      description: description,
      format: format,
      currency: currency,
      services: services,
      creatorId: creatorId,
      ecosystemDomain: ecosystem,
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/create-service`, serviceDetails)
      .then((response) => {
        setLoading(false);
        if (response.data) {
          showToast(response.data.message);
        }

        if (location.pathname.includes(`/${ecosystemDomain}/`)) {
          dispatch(resetServiceData());
          navigate(`/${ecosystemDomain}/Ecosystemdashboard`);
        } else {
          if (userType === "consumer") {
            navigate("/creator/dashboard/Edit-Template/individual");
          } else {
            navigate("/creator/dashboard/Products");
          }
        }
        submit();
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (submit && typeof submit !== "function") {
      console.error("submit is not a function");
    }
  }, [submit]);

  const handlePrevious = () => {
    if (onPrevious) {
      onPrevious();
    }
  };

  useEffect(() => {
    if (editIndex !== null) {
      const {
        name,
        shortDescription,
        price,
        deliveryTime,
        priceFormat,
        serviceImage,
      } = sections[editIndex];
      setEditName(name);
      setEditShortDescription(shortDescription);
      setEditPrice(price);
      setEditDeliveryTime(deliveryTime);
      setEditPriceFormat(priceFormat);
      setEditImage(serviceImage);
    }
  }, [editIndex, sections]);

  const handleRemoveService = (index) => {
    dispatch(deleteService(index));
  };

  const handleEditService = (index) => {
    setEditIndex(index);
    const {
      name,
      shortDescription,
      price,
      deliveryTime,
      priceFormat,
      serviceImage,
    } = sections[index];
    setEditName(name);
    setEditShortDescription(shortDescription);
    setEditPrice(price);
    setEditDeliveryTime(deliveryTime);
    setEditPriceFormat(priceFormat);
    setEditImage(serviceImage);
  };

  const handleFieldChange = (field, value) => {
    switch (field) {
      case "name":
        setEditName(value);
        break;
      case "shortDescription":
        setEditShortDescription(value);
        break;
      case "price":
        setEditPrice(value);
        break;
      case "deliveryTime":
        setEditDeliveryTime(value);
        break;
      case "priceFormat":
        setEditPriceFormat(value);
        break;
      default:
        break;
    }
  };

  const handleSaveEdit = () => {
    dispatch(
      updateService({
        index: editIndex,
        service: {
          name: editName,
          shortDescription: editShortDescription,
          price: editPrice,
          deliveryTime: editDeliveryTime,
          priceFormat: editPriceFormat,
          serviceImage: editImage,
        },
      })
    );
    setEditIndex(null);
  };

  return (
    <Form>
      <Card className="mb-3 border-0 ">
        <Card.Header className="border-bottom px-4 py-3">
          <h4 className="mb-0">Service</h4>
        </Card.Header>
        <Card.Body>
          {sections.map((service, prIndex) => (
            <div
              key={prIndex}
              className="bg-light rounded p-2 mb-4 position-relative"
            >
              {editIndex === prIndex ? (
                <div className="position-relative">
                  <Form.Group>
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={editName}
                      onChange={(e) =>
                        handleFieldChange("name", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      value={editShortDescription}
                      onChange={(e) =>
                        handleFieldChange("shortDescription", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      value={editPrice}
                      onChange={(e) =>
                        handleFieldChange("price", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Delivery Time</Form.Label>
                    <Form.Control
                      type="text"
                      value={editDeliveryTime}
                      onChange={(e) =>
                        handleFieldChange("deliveryTime", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Pricing Format</Form.Label>
                    <Form.Select
                      type="text"
                      placeholder="Job Salary Format"
                      value={editPriceFormat}
                      onChange={(e) =>
                        handleFieldChange("priceFormat", e.target.value)
                      }
                    >
                      <option value="">Select Pricing Format</option>
                      {jobSalaryFormats.map((jobSalaryFormat, index) => (
                        <option key={index} value={jobSalaryFormat.value}>
                          {jobSalaryFormat.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <div className="mt-5">
                    <Button onClick={handleSaveEdit}>Save</Button>
                    <Button
                      onClick={() => setEditIndex(null)}
                      className="me-2 position-absolute"
                      style={{ right: "0%", maxWidth: "80%" }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <Button
                    variant="link"
                    className="position-absolute top-0 end-0 text-danger me-2 "
                    onClick={() => handleRemoveService(prIndex)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="link"
                    className="position-absolute top-0 text-primary "
                    onClick={() => handleEditService(prIndex)}
                    style={{ right: "20%", maxWidth: "80%" }}
                  >
                    Edit
                  </Button>
                  <h4>{service.name}</h4>
                  <p
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #ced4da",
                      padding: "10px",
                      borderRadius: "5px",
                      height: "150px",
                      overflowY: "auto",
                    }}
                  >
                    {service.shortDescription}
                  </p>
                  <p
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #ced4da",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    {service.price}
                  </p>
                  <p
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #ced4da",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    {service.deliveryTime}
                  </p>
                  <p
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #ced4da",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    {service.priceFormat}
                  </p>
                  <img
                    src={service.serviceImage}
                    alt="image"
                    style={{
                      height: "50px",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
          <AddService />
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-between">
        <Button
          variant="outline-secondary"
          className="mr-2"
          onClick={handlePrevious}
        >
          Previous
        </Button>
        <Button variant="primary" onClick={handleSubmit} disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </Form>
  );
};

export default Service;
