import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { Col } from 'react-bootstrap';
import '../CommunityChat/Header.css';

const TwoLayeredBox = () => {
  const [image, setImage] = useState(null);
  const [logo, setLogo] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="two-layered-box">
      <div className="upper-layer">
        {image ? (
          <img src={image} alt="Selected" className="image-preview" />
        ) : (
          <div className="placeholder">Click the pen icon to add an image</div>
        )}
        <label htmlFor="image-upload" className="edit-icon">
          <FaPen />
        </label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </div>
      <div className="divider">
        {logo ? (
          <img src={logo} alt="Logo" className="logo-preview" />
        ) : (
          <div className="placeholder-logo">Click the pen icon to add a logo</div>
        )}
        <label htmlFor="logo-upload" className="edit-icon logo-icon">
          <FaPen />
        </label>
        <input
          type="file"
          id="logo-upload"
          accept="image/*"
          onChange={handleLogoChange}
          style={{ display: 'none' }}
        />
      </div>
      <Col xs={12} className="mt-4 text-container">
            <h2 className="mb-0 text-right p-3">Google Developer Groups (GDG)</h2>
            <p className="text-muted mb-0">Technology, Information and Internet·</p>
            <div className="mt-2">
              {/* <Button variant="primary" className="me-2">+ Follow</Button>
              <Button variant="outline-primary">Visit website</Button> */}
            </div>
          </Col>
    </div>
  );
};

export default TwoLayeredBox;
