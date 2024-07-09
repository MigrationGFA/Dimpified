// import React, { useState } from "react";
// import { Button, Col, Form, Modal, Row, Card } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// // import { addService, updateService, removeService } from "../../../../../features/services";

// const AddService = () => {
//   const [show, setShow] = useState(false);
//   const [serviceName, setServiceName] = useState("");
//   const [shortDescription, setShortDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [deliveryTime, setDeliveryTime] = useState("");
//   const [jobSalaryFormat, setJobSalaryFormat] = useState("");
//   const [currency, setCurrency] = useState("");
//   const [pricingPlan, setPricingPlan] = useState("");
//   const [editData, setEditData] = useState(null);

//   const dispatch = useDispatch();
//   const services = useSelector((state) => state.services);

//    const [pricingPackages, setPricingPackages] = useState({
//     professional: {
//       basic: {
//         serviceName: "",
//         shortDescription: "",
//         price: "",
//         deliveryTime: "",
//         jobSalaryFormat: "",
//       },
//       standard: {
//         serviceName: "",
//         shortDescription: "",
//         price: "",
//         deliveryTime: "",
//         jobSalaryFormat: "",
//       },
//       premium: {
//         serviceName: "",
//         shortDescription: "",
//         price: "",
//         deliveryTime: "",
//         jobSalaryFormat: "",
//       },
//     },
//   });

//   const handleServicePackageChange = (packageType, field, value, planType) => {
//     setPricingPackages((prevPackages) => ({
//       ...prevPackages,
//       [planType]: {
//         ...prevPackages[planType],
//         [packageType]: {
//           ...prevPackages[planType][packageType],
//           [field]: value,
//         },
//       },
//     }));
//   };

//   const handleClose = () => {
//     setShow(false);
//     resetForm();
//   };

//   const handleShow = () => setShow(true);

//   const resetForm = () => {
//     setServiceName("");
//     setShortDescription("");
//     setPrice("");
//     setDeliveryTime("");
//     setJobSalaryFormat("");
//     setCurrency("");
//     setPricingPlan("");
//     setEditData(null);
//   };

//   const handleAddService = () => {
//     const newService = {
//       serviceName,
//       shortDescription,
//       price,
//       deliveryTime,
//       jobSalaryFormat,
//       currency,
//       pricingPlan,
//     };

//     // Dispatch addService or updateService based on editData
//     if (editData) {
//       dispatch(updateService({ ...editData, ...newService }));
//     } else {
//       dispatch(addService(newService));
//     }

//     handleClose();
//   };

//   const handleEditService = (service) => {
//     setEditData(service);
//     setServiceName(service.serviceName);
//     setShortDescription(service.shortDescription);
//     setPrice(service.price);
//     setDeliveryTime(service.deliveryTime);
//     setJobSalaryFormat(service.jobSalaryFormat);
//     setCurrency(service.currency);
//     setPricingPlan(service.pricingPlan);
//     handleShow();
//   };

//   const handleDeleteService = (serviceId) => {
//     dispatch(removeService(serviceId));
//   };

//   const currencyType = [
//     { value: "NGN", label: "Naira" },
//     { value: "USD", label: "Dollars" },
//     { value: "EUR", label: "Euros" },
//     { value: "GBP", label: "Pounds" },
//   ];

//   const pricingTypes = [
//     { value: "", label: "Select your Pricing Plan" },
//     { value: "starter", label: "Starter" },
//     { value: "professional", label: "Professional" },
//   ];

//   const jobSalaryFormats = [
//     { value: "hourly", label: "Hourly" },
//     { value: "daily", label: "Daily" },
//     { value: "weekly", label: "Weekly" },
//     { value: "monthly", label: "Monthly" },
//   ];

//   return (
//     <>
//       <Card className="p-4">
//         <Row>
//           <Col md={12}>
//             <Form.Group as={Row} className="mb-3 mt-4 justify-content-center">
//               <Col md={6}>
//                 <Form.Label htmlFor="currency">
//                   Currency<span className="text-danger">*</span>
//                 </Form.Label>
//                 <Form.Select
//                   id="currency"
//                   value={currency}
//                   onChange={(e) => setCurrency(e.target.value)}
//                   required
//                 >
//                   {currencyType.map((currency, index) => (
//                     <option key={index} value={currency.value}>
//                       {currency.label}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Col>
//               <Col md={6}>
//                 <Form.Label htmlFor="pricingPlan">
//                   Pricing Plan<span className="text-danger">*</span>
//                 </Form.Label>
//                 <Form.Select
//                   id="pricingPlan"
//                   value={pricingPlan}
//                   onChange={(e) => setPricingPlan(e.target.value)}
//                   required
//                 >
//                   {pricingTypes.map((plan, index) => (
//                     <option key={index} value={plan.value}>
//                       {plan.label}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Col>
//             </Form.Group>
//           </Col>
//         </Row>
//         <Col md={3}>
//           <Button
//             variant="outline-primary"
//             className="btn btn-outline-primary btn-sm mt-3"
//             onClick={handleShow}
//           >
//             Add Pricing Plan
//           </Button>
//         </Col>
//       </Card>
//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//         size="lg"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{editData ? "Edit Service" : "Add Service"}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="pb-0">
//           {pricingPlan === "starter" && (
//             <>
//               <h2 className="text-center" style={{ color: "#754ffe" }}>
//                 Starter Plan
//               </h2>
//               <Form.Group className="mb-3" controlId="formServiceName">
//                 <Form.Control
//                   type="text"
//                   placeholder="Service Name"
//                   value={serviceName}
//                   onChange={(e) => setServiceName(e.target.value)}
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="formServiceDescription">
//                 <Form.Control
//                   as="textarea"
//                   placeholder="Short Description"
//                   value={shortDescription}
//                   onChange={(e) => setShortDescription(e.target.value)}
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="formServicePrice">
//                 <Form.Control
//                   type="text"
//                   placeholder="Price"
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="formServiceDeliveryTime">
//                 <Form.Control
//                   type="text"
//                   placeholder="Delivery Time"
//                   value={deliveryTime}
//                   onChange={(e) => setDeliveryTime(e.target.value)}
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="formJobSalaryFormat">
//                 <Form.Control
//                   as="select"
//                   placeholder="Job Salary Format"
//                   value={jobSalaryFormat}
//                   onChange={(e) => setJobSalaryFormat(e.target.value)}
//                 >
//                   <option value="">Select Job Salary Format</option>
//                   {jobSalaryFormats.map((format) => (
//                     <option key={format.value} value={format.value}>
//                       {format.label}
//                     </option>
//                   ))}
//                 </Form.Control>
//               </Form.Group>
//             </>
//           )}

//           {pricingPlan === "professional" && (
//             <>
//               <h2 className="text-center" style={{ color: "#754ffe" }}>
//                 Professional Plan
//               </h2>

//               {/* BASIC SECTION */}
//               <Form.Group as={Row} className="mb-3 mt-4 justify-content-center">
//                 <h3 className="text-center mb-2" style={{ color: "#754ffe" }}>
//                   BASIC
//                 </h3>
//                 <Col md={5} className="mb-3">
//                   <Form.Label htmlFor="basicServiceName">
//                     Service Name<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     type="text"
//                     id="basicServiceName"
//                     placeholder="Enter service name"
//                     value={pricingPackages.professional.basic.serviceName}
//                     onChange={(e) =>
//                       handleServicePackageChange(
//                         "basic",
//                         "serviceName",
//                         e.target.value,
//                         "professional"
//                       )
//                     }
//                     required
//                   />
//                 </Col>
//                 <Col md={5} className="mb-3">
//                   <Form.Label htmlFor="basicShortDescription">
//                     Short Description<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     type="text"
//                     id="basicShortDescription"
//                     placeholder="Enter short description"
//                     value={pricingPackages.professional.basic.shortDescription}
//                     onChange={(e) =>
//                       handleServicePackageChange(
//                         "basic",
//                         "shortDescription",
//                         e.target.value,
//                         "professional"
//                       )
//                     }
//                     required
//                   />
//                 </Col>
//                 <Col md={5} className="mb-3">
//                   <Form.Label htmlFor="basicPrice">
//                     Price<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     type="text"
//                     id="basicPrice"
//                     placeholder="Enter price"
//                     value={pricingPackages.professional.basic.price}
//                     onChange={(e) =>
//                       handleServicePackageChange(
//                         "basic",
//                         "price",
//                         e.target.value,
//                         "professional"
//                       )
//                     }
//                     required
//                   />
//                 </Col>
//                 <Col md={5} className="mb-3">
//                   <Form.Label htmlFor="basicDeliveryTime">
//                     Delivery Time<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     type="text"
//                     id="basicDeliveryTime"
//                     placeholder="Enter delivery time"
//                     value={pricingPackages.professional.basic.deliveryTime}
//                     onChange={(e) =>
//                       handleServicePackageChange(
//                         "basic",
//                         "deliveryTime",
//                         e.target.value,
//                         "professional"
//                       )
//                     }
//                     required
//                   />
//                 </Col>
//                 <Col md={5} className="mb-3">
//                   <Form.Label htmlFor="basicJobSalaryFormat">
//                     Job Salary Format<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     as="select"
//                     id="basicJobSalaryFormat"
//                     value={pricingPackages.professional.basic.jobSalaryFormat}
//                     onChange={(e) =>
//                       handleServicePackageChange(
//                         "basic",
//                         "jobSalaryFormat",
//                         e.target.value,
//                         "professional"
//                       )
//                     }
//                     required
//                   >
//                     <option value="">Select job salary format</option>
//                     {jobSalaryFormats.map((format) => (
//                       <option key={format.value} value={format.value}>
//                         {format.label}
//                       </option>
//                     ))}
//                   </Form.Control>
//                 </Col>
//               </Form.Group>

//               {/* STANDARD SECTION */}
//               <Form.Group as={Row} className="mb-3 mt-4 justify-content-center">
//                 <h3 className="text-center mb-2" style={{ color: "#754ffe" }}>
//                   STANDARD
//                 </h3>
//                 <Col md={5} className="mb-3">
//                   <Form.Label htmlFor="standardServiceName">
//                     Service Name<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     type="text"
//                     id="standardServiceName"
//                     placeholder="Enter service name"
//                     value={pricingPackages.professional.standard.serviceName}
//                     onChange={(e) =>
//                       handleServicePackageChange(
//                         "standard",
//                         "serviceName",
//                         e.target.value,
//                         "professional"
//                       )
//                     }
//                     required
//                   />
//                 </Col>
//                 <Col md={5} className="mb-3">
//                   <Form.Label htmlFor="standardShortDescription">
//                     Short Description<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     type="text"
//                     id="standardShortDescription"
//                     placeholder="Enter short description"
//                     value={
//                       pricingPackages.professional.standard.shortDescription
//                     }
//                     onChange={(e) =>
//                       handleServicePackageChange(
//                         "standard",
//                         "shortDescription",
//                         e.target.value,
//                         "professional"
//                       )
//                     }
//                     required
//                   />
//                 </Col>
//                 <Col md={5} className="mb-3">
//                   <Form.Label htmlFor="standardPrice">
//                     Price<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     type="text"
//                     id="standardPrice"
//                     placeholder="Enter price"
//                     value={pricingPackages.professional.standard.price}
//                     onChange={(e) =>
//                       handleServicePackageChange(
//                         "standard",
//                         "price",
//                         e.target.value,
//                         "professional"
//                       )
//                     }
//                     required
//                   />
//                 </Col>
//                 <Col md={5} className="mb-3">
//                   <Form.Label htmlFor="standardDeliveryTime">
//                     Delivery Time<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     type="text"
//                     id="standardDeliveryTime"
//                     placeholder="Enter delivery time"
//                     value={pricingPackages.professional.standard.deliveryTime}
//                     onChange={(e) =>
//                       handleServicePackageChange(
//                         "standard",
//                         "deliveryTime",
//                         e.target.value,
//                         "professional"
//                       )
//                     }
//                     required
//                   />
//                 </Col>
//                 <Col md={5} className="mb-3">
//                   <Form.Label htmlFor="standardJobSalaryFormat">
//                     Job Salary Format<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     as="select"
//                     id="standardJobSalaryFormat"
//                     value={
//                       pricingPackages.professional.standard.jobSalaryFormat
//                     }
//                     onChange={(e) =>
//                       handleServicePackageChange(
//                         "standard",
//                         "jobSalaryFormat",
//                         e.target.value,
//                         "professional"
//                       )
//                     }
//                     required
//                   >
//                     <option value="">Select job salary format</option>
//                     {jobSalaryFormats.map((format) => (
//                       <option key={format.value} value={format.value}>
//                         {format.label}
//                       </option>
//                     ))}
//                   </Form.Control>
//                 </Col>
//               </Form.Group>

//               {/* PREMIUM SECTION */}
//               <Form.Group as={Row} className="mb-3 mt-4 justify-content-center">
//                 <h3 className="text-center mb-2" style={{ color: "#754ffe" }}>
//                   PREMIUM
//                 </h3>
//                 <Col md={5} className="mb-3">
//                   <Form.Label htmlFor="premiumServiceName">
//                     Service Name<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     type="text"
//                     id="premiumServiceName"
//                     placeholder="Enter service name"
//                     value={pricingPackages.professional.premium.serviceName}
//                     onChange={(e) =>
//                       handleServicePackageChange(
//                         "premium",
//                         "serviceName",
//                         e.target.value,
//                         "professional"
//                       )
//                     }
//                     required
//                   />
//                 </Col>
//                 <Col md={5} className="mb-3">
//                   <Form.Label htmlFor="premiumShortDescription">
//                     Short Description<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     type="text"
//                     id="premiumShortDescription"
//                     placeholder="Enter short description"
//                     value={
//                       pricingPackages.professional.premium.shortDescription
//                     }
//                     onChange={(e) =>
//                       handleServicePackageChange(
//                         "premium",
//                         "shortDescription",
//                         e.target.value,
//                         "professional"
//                       )
//                     }
//                     required
//                   />
//                 </Col>
//                 <Col md={5} className="mb-3">
//                   <Form.Label htmlFor="premiumPrice">
//                     Price<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     type="text"
//                     id="premiumPrice"
//                     placeholder="Enter price"
//                     value={pricingPackages.professional.premium.price}
//                     onChange={(e) =>
//                       handleServicePackageChange(
//                         "premium",
//                         "price",
//                         e.target.value,
//                         "professional"
//                       )
//                     }
//                     required
//                   />
//                 </Col>
//                 <Col md={5} className="mb-3">
//                   <Form.Label htmlFor="premiumDeliveryTime">
//                     Delivery Time<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     type="text"
//                     id="premiumDeliveryTime"
//                     placeholder="Enter delivery time"
//                     value={pricingPackages.professional.premium.deliveryTime}
//                     onChange={(e) =>
//                       handleServicePackageChange(
//                         "premium",
//                         "deliveryTime",
//                         e.target.value,
//                         "professional"
//                       )
//                     }
//                     required
//                   />
//                 </Col>
//                 <Col md={5} className="mb-3">
//                   <Form.Label htmlFor="premiumJobSalaryFormat">
//                     Job Salary Format<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     as="select"
//                     id="premiumJobSalaryFormat"
//                     value={
//                       pricingPackages.professional.premium.jobSalaryFormat
//                     }
//                     onChange={(e) =>
//                       handleServicePackageChange(
//                         "premium",
//                         "jobSalaryFormat",
//                         e.target.value,
//                         "professional"
//                       )
//                     }
//                     required
//                   >
//                     <option value="">Select job salary format</option>
//                     {jobSalaryFormats.map((format) => (
//                       <option key={format.value} value={format.value}>
//                         {format.label}
//                       </option>
//                     ))}
//                   </Form.Control>
//                 </Col>
//               </Form.Group>
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleAddService}>
//             {editData ? "Update Service" : "Add Service"}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       <div className="mt-3">
//         <h3>Services List</h3>
//         {services && services.map((service) => (
//           <Card key={service.id} className="mb-2">
//             <Card.Body>
//               <Card.Title>{service.serviceName}</Card.Title>
//               <Card.Text>{service.shortDescription}</Card.Text>
//               <Card.Text>Price: {service.price}</Card.Text>
//               <Card.Text>Delivery Time: {service.deliveryTime}</Card.Text>
//               <Card.Text>Job Salary Format: {service.jobSalaryFormat}</Card.Text>
//               <Button
//                 variant="outline-secondary"
//                 onClick={() => handleEditService(service)}
//               >
//                 Edit
//               </Button>
//               <Button
//                 variant="outline-danger"
//                 className="ml-2"
//                 onClick={() => handleDeleteService(service.id)}
//               >
//                 Delete
//               </Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </>
//   );
// };

// export default AddService;

import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addService,
  updateService,
  deleteService,
} from "../../../../../features/service";

const AddService = () => {
  const [show, setShow] = useState(false);
  const [serviceName, setServiceName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [price, setPrice] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [jobSalaryFormat, setJobSalaryFormat] = useState("");
  const [currency, setCurrency] = useState("");

  const dispatch = useDispatch();

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
    setServiceName("");
    setShortDescription("");
    setPrice("");
    setDeliveryTime("");
    setJobSalaryFormat("");
    setCurrency("");
  };

  const handleShow = () => setShow(true);

  const handleAddService = () => {
    dispatch(
      addService({
        serviceName,
        shortDescription,
        price,
        deliveryTime,
        jobSalaryFormat,
        currency,
      })
    );
    handleClose();
  };
  const currencyType = [
    { value: "NGN", label: "Naira" },
    { value: "USD", label: "Dollars" },
    { value: "EUR", label: "Euros" },
    { value: "GBP", label: "Pounds" },
  ];

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
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
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
              value={jobSalaryFormat}
              onChange={(e) => setJobSalaryFormat(e.target.value)}
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
            <Form.Label htmlFor="currency">
              Currency<span className="text-danger">*</span>
            </Form.Label>
            <Form.Select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              required
            >
              <option value="">Select Currency</option>
              {currencyType.map((currency, index) => (
                <option key={index} value={currency.value}>
                  {currency.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="pt-0 border-0 d-inline">
          <Button variant="primary" onClick={handleAddService}>
            save Service
          </Button>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const Service = ({ onNext, onPrevious }) => {
  const sections = useSelector((state) => state.service.services) || [];
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState(null);
  const [editServiceName, setEditServiceName] = useState("");
  const [editShortDescription, setEditShortDescription] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editDeliveryTime, setEditDeliveryTime] = useState("");
  const [editJobSalaryFormat, setEditJobSalaryFormat] = useState("");
  const [editCurrency, setEditCurrency] = useState("");

  useEffect(() => {
    if (editIndex !== null) {
      const {
        serviceName,
        shortDescription,
        price,
        deliveryTime,
        jobSalaryFormat,
        currency,
      } = sections[editIndex];
      setEditServiceName(serviceName);
      setEditShortDescription(shortDescription);
      setEditPrice(price);
      setEditDeliveryTime(deliveryTime);
      setEditJobSalaryFormat(jobSalaryFormat);
      setEditCurrency(currency);
    }
  }, [editIndex, sections]);

  const handleRemoveService = (index) => {
    dispatch(deleteService(index));
  };

  const handleEditService = (index) => {
    setEditIndex(index);
    const {
      serviceName,
      shortDescription,
      price,
      deliveryTime,
      jobSalaryFormat,
      currency,
    } = sections[index];
    setEditServiceName(serviceName);
    setEditShortDescription(shortDescription);
    setEditPrice(price);
    setEditDeliveryTime(deliveryTime);
    setEditJobSalaryFormat(jobSalaryFormat);
    setEditCurrency(currency);
  };

  const currencyType = [
    { value: "NGN", label: "Naira" },
    { value: "USD", label: "Dollars" },
    { value: "EUR", label: "Euros" },
    { value: "GBP", label: "Pounds" },
  ];

  const handleFieldChange = (field, value) => {
    switch (field) {
      case "serviceName":
        setEditServiceName(value);
        break;
      case "shortDescription":
        setEditShortDescription(value);
        break;
      case "price":
        setEditPrice(value);
        break;
      case "currency":
        setEditCurrency(value);
        break;
      case "deliveryTime":
        setEditDeliveryTime(value);
        break;
      case "jobSalaryFormat":
        setEditJobSalaryFormat(value);
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
          serviceName: editServiceName,
          shortDescription: editShortDescription,
          price: editPrice,
          currency: editCurrency,
          deliveryTime: editDeliveryTime,
          jobSalaryFormat: editJobSalaryFormat,
        },
      })
    );
    setEditIndex(null);
  };
  const jobSalaryFormats = [
    { value: "Fixed", label: "Fixed" },
    { value: "Hourly", label: "Hourly" },
    { value: "Daily", label: "Daily" },
    { value: "Weekly", label: "Weekly" },
    { value: "Monthly", label: "Monthly" },
    { value: "Yearly", label: "Yearly" },
  ];

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
                      value={editServiceName}
                      onChange={(e) =>
                        handleFieldChange("serviceName", e.target.value)
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
                    <Form.Label>Currency</Form.Label>
                    <Form.Select
                      id="currency"
                      value={editCurrency}
                      onChange={(e) =>
                        handleFieldChange("currency", e.target.value)
                      }
                    >
                      <option value="">Select Currency</option>
                      {currencyType.map((currency, index) => (
                        <option key={index} value={currency.value}>
                          {currency.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Pricing Format</Form.Label>
                    <Form.Select
                      type="text"
                      placeholder="Job Salary Format"
                      value={editJobSalaryFormat}
                      onChange={(e) =>
                        handleFieldChange("jobSalaryFormat", e.target.value)
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
                  <h4>{service.serviceName}</h4>
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
                    {service.currency}
                  </p>
                  <p
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #ced4da",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    {service.jobSalaryFormat}
                  </p>
                </div>
              )}
            </div>
          ))}
          <AddService />
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-between">
        <Button variant="secondary" onClick={onPrevious}>
          Previous
        </Button>
        <Button
          variant="primary"
          onClick={onNext}
          disabled={sections.length === 0}
        >
          Next
        </Button>
      </div>
    </Form>
  );
};

export default Service;
