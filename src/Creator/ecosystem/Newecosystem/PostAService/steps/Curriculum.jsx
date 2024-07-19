import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addService, updateService, deleteService, resetServiceData } from "../../../../../features/service";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../../../../Components/Showtoast";
import axios from 'axios';

const AddService = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [price, setPrice] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [priceFormat, setPriceFormat] = useState("");

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
              type="text"
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

  const jobSalaryFormats = [
    { value: "Fixed", label: "Fixed" },
    { value: "Hourly", label: "Hourly" },
    { value: "Daily", label: "Daily" },
    { value: "Weekly", label: "Weekly" },
    { value: "Monthly", label: "Monthly" },
    { value: "Yearly", label: "Yearly" },
  ];

  const user = useSelector((state) => state.authentication.user);
  const creatorId = user?.data?.CreatorId;
  const ecosystemId = useSelector((state) => state.ecosystem.ecosystemDomain);

  const serviceData = useSelector((state) => state.service);
  const {
    category,
    subCategory,
    prefix,
    header,
    description,
    format,
    currency,
    backgroundCover,
    services,
  } = serviceData;

  const convertBase64ToFile = (base64String, filename) => {
    const arr = base64String.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  const handleSubmit = () => {
    setLoading(true);
  
    const formData = new FormData();
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("header", `${prefix} ${header}`);
    formData.append("description", description);
    formData.append("format", format);
    formData.append("currency", currency);
    formData.append("services", JSON.stringify(services));
  
    // Convert and append base64 images directly to FormData
    const imageProperties = {
      "product.mainImage": "mainImage.png",
      "product.thumbnailImage": "thumbnailImage.png",
      "gallery.image1": "galleryImage1.png",
      "gallery.image2": "galleryImage2.png",
      "gallery.image3": "galleryImage3.png",
      "gallery.image4": "galleryImage4.png",
      "details.coverImage": "coverImage.png",
    };
  
    // Assuming image data is within the serviceData object
    for (const [key, filename] of Object.entries(imageProperties)) {
      const keys = key.split(".");
      let imageProp = serviceData;
      try {
        for (const k of keys) {
          imageProp = imageProp[k];
          if (imageProp === undefined) break; // Exit loop if property is undefined
        }
        if (typeof imageProp === "string" && imageProp.startsWith("data:image")) {
          const convertedFile = convertBase64ToFile(imageProp, filename);
          formData.append(key, convertedFile);
        }
      } catch (error) {
        console.error(`Error accessing property ${key}:`, error);
      }
    }
  
    // Convert backgroundCover images from base64 to binary and append to formData as separate fields under the same key
    if (Array.isArray(backgroundCover)) {
      backgroundCover.forEach((image, index) => {
        if (typeof image.preview === "string" && image.preview.startsWith("data:image")) {
          const convertedFile = convertBase64ToFile(image.preview, `backgroundCover${index}.png`);
          formData.append("backgroundCover", convertedFile);
        }
      });
    } else {
      console.error("Invalid backgroundCover data:", backgroundCover);
    }
  
    formData.append("creatorId", creatorId);
    formData.append("ecosystemDomain", ecosystemId);
  
    axios
      .post(`${import.meta.env.VITE_API_URL}/create-service`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setLoading(false);
        if (response.data) {
          showToast(response.data.message);
        }
        dispatch(resetServiceData());
        navigate("/creator/dashboard/Products");
        submit();
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
  
  useEffect(() => {
    if (submit && typeof submit !== 'function') {
      console.error('submit is not a function');
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
      } = sections[editIndex];
      setEditName(name);
      setEditShortDescription(shortDescription);
      setEditPrice(price);
      setEditDeliveryTime(deliveryTime);
      setEditPriceFormat(priceFormat);
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
    } = sections[index];
    setEditName(name);
    setEditShortDescription(shortDescription);
    setEditPrice(price);
    setEditDeliveryTime(deliveryTime);
    setEditPriceFormat(priceFormat);
  };

  const handleFieldChange = (field, value) => {
    switch (field) {
      case "serviceName":
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
        },
      })
    );
    setEditIndex(null);
  };

  return (
    <Form>
      <Card className="mb-3 border-0">
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
                      type="text"
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
                    className="position-absolute top-0 end-0 text-danger me-2"
                    onClick={() => handleRemoveService(prIndex)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="link"
                    className="position-absolute top-0 text-primary me-4"
                    onClick={() => handleEditService(prIndex)}
                    style={{ right: "10%", maxWidth: "80%" }}
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