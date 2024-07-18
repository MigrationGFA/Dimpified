import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addPackage,
  updatePackage,
  deletePackage,
  resetProductData,
} from "../../../../../features/product";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../../../../Components/Showtoast";
import axios from "axios";

const AddPackage = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [fileType, setFileType] = useState("");
  const [price, setPrice] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  

  const handleClose = () => {
    setShow(false);
    setTitle("");
    setFileType("");
    setPrice("");
    setDownloadUrl("");
  };

  const handleShow = () => setShow(true);

  const handleAddPackage = () => {
    dispatch(
      addPackage({
        title,
        fileType,
        price,
        downloadUrl,
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
        Add New Digital Product
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Digital Product</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-0">
          <Form.Group className="mb-3">
            <Form.Label>Digital Product Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="product title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>File Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="File Type e.g., PDF, MP3, MP4"
              value={fileType}
              onChange={(e) => setFileType(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Download URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter downloading Link here"
              value={downloadUrl}
              onChange={(e) => setDownloadUrl(e.target.value)}
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

        </Modal.Body>
        <Modal.Footer className="pt-0 border-0 d-inline">
          <Button variant="primary" onClick={handleAddPackage}>
            Save Digital Product
          </Button>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const Product = ({ submit, onPrevious }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const sections = useSelector((state) => state.product.packAge) || [];
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState(null);
  const [ediTitle, setEditTitle] = useState("");
  const [editFileType, setEditFileType] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editDownloadUrl, setEditDownloadUrl] = useState("");
 

  const user = useSelector((state) => state.authentication.user);
  const creatorId = user?.data?.CreatorId;
  const ecosystemId = useSelector((state) => state.ecosystem.ecosystemDomain);
  console.log(ecosystemId)

  const ProductData = useSelector((state) => state.product);
  const {
    category,
    subCategory,
    productName,
    author,
    productType,
    description,
    currency,
    backgroundCover,
    packAge,
  } = ProductData;

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
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("author", author);
    formData.append("productType", productType);
    formData.append("currency", currency);
    formData.append("package", JSON.stringify(packAge));

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
      let imageProp = ProductData;
      try {
        for (const k of keys) {
          imageProp = imageProp[k];
          if (imageProp === undefined) break; 
        }
        if (
          typeof imageProp === "string" &&
          imageProp.startsWith("data:image")
        ) {
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
        if (
          typeof image.preview === "string" &&
          image.preview.startsWith("data:image")
        ) {
          const convertedFile = convertBase64ToFile(
            image.preview,
            `backgroundCover${index}.png`
          );
          formData.append("backgroundCover", convertedFile);
        }
      });
    } else {
      console.error("Invalid backgroundCover data:", backgroundCover);
    }

    formData.append("creatorId", creatorId);
    formData.append("ecosystemDomain", ecosystemId);

    axios
      .post(`${import.meta.env.VITE_API_URL}/create-digital-product`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setLoading(false);
        if (response.data) {
          showToast(response.data.message);
        }
        dispatch(resetProductData());
        navigate("/creator/dashboard/Products");
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
      const { title, fileType, price, downloadUrl } =
        sections[editIndex];
      setEditTitle(title);
      setEditFileType(fileType);
      setEditPrice(price);
      setEditDownloadUrl(downloadUrl);
    }
  }, [editIndex, sections]);

  const handleRemovePackage = (index) => {
    dispatch(deletePackage(index));
  };

  const handleEditPackage = (index) => {
    setEditIndex(index);
    const {title, fileType, price, downloadUrl  } =
      sections[index];
      setEditTitle(title);
      setEditFileType(fileType);
      setEditPrice(price);
      setEditDownloadUrl(downloadUrl);
  };

  const handleFieldChange = (field, value) => {
    switch (field) {
      case "title":
        setEditTitle(value);
        break;
      case "fileType":
        setEditFileType(value);
        break;
      case "price":
        setEditPrice(value);
        break;
      case "downloadUrl":
        setEditDownloadUrl(value);
        break;
      default:
        break;
    }
  };

  const handleSaveEdit = () => {
    dispatch(
      updatePackage({
        index: editIndex,
        package: {
          name: editName,
          shortDescription: editShortDescription,
          price: editPrice,
          deliveryTime: editDeliveryTime,
          
        },
      })
    );
    setEditIndex(null);
  };

  return (
    <Form>
      <Card className="mb-3 border-0">
        <Card.Header className="border-bottom px-4 py-3">
          <h4 className="mb-0">Digital Product(s)</h4>
        </Card.Header>
        <Card.Body>
          {sections.map((packages, prIndex) => (
            <div
              key={prIndex}
              className="bg-light rounded p-2 mb-4 position-relative"
            >
              {editIndex === prIndex ? (
                <div className="position-relative">
                  <Form.Group>
                    <Form.Label>Digital Product Title</Form.Label>
                    <Form.Control
                      type="text"
                      value={ediTitle}
                      onChange={(e) =>
                        handleFieldChange("title", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>File Type</Form.Label>
                    <Form.Control
                    type="text"
                      value={editFileType}
                      onChange={(e) =>
                        handleFieldChange("fileType", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Download Link </Form.Label>
                    <Form.Control
                      type="text"
                      value={editDownloadUrl}
                      onChange={(e) =>
                        handleFieldChange("downloadUrl", e.target.value)
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
                    onClick={() => handleRemovePackage(prIndex)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="link"
                    className="position-absolute top-0 text-primary me-4"
                    onClick={() => handleEditPackage(prIndex)}
                    style={{ right: "10%", maxWidth: "80%" }}
                  >
                    Edit
                  </Button>
                  <h4>{packages.title}</h4>
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
                    {packages.fileType}
                  </p>
                  <p
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #ced4da",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    {packages.price}
                  </p>
                  <p
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #ced4da",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    {packages.downloadUrl}
                  </p>
                </div>
              )}
            </div>
          ))}
          <AddPackage />
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

export default Product;
