import React, { useState } from "react";
import { FaPen, FaThumbsUp, FaCommentAlt } from "react-icons/fa";
import { Card, Row, Col } from "react-bootstrap";
import "../CommunityChat/Header.css";
import "../CommunityChat/PostFeed.css";
import img1 from "../../assets/SocialImages/Img 1.jpeg";
import img2 from "../../assets/SocialImages/Img 2.jpeg";
import img3 from "../../assets/SocialImages/Img 3.jpeg";
import img4 from "../../assets/SocialImages/Img 4.jpeg";
import Logo from "../../assets/LogoList/FgnAlatLogo.jpg";

const posts = [
  {
    type: "image",
    caption:
      "As #GoogleIO comes to a close, we're filled with immense gratitude for everyone who joined us on this inspiring journey.",
    images: [img1, img2, img3, img4],
    likeCount: 2287,
    commentCount: 12,
  },
];

const PostCard = ({ post }) => (
  <Card className="mb-3 post-card">
    <Card.Body>
      <div className="header-top d-flex align-items-center mb-3">
        <img
          src={Logo}
          alt="Logo"
          style={{
            borderRadius: "50%",
            height: "60px",
            width: "60px",
          }}
        />
        <div>
          <h3 className="mb-0">Google Developer Groups (GDG)</h3>
          <p className="text-muted mb-0 font-text-bold">2 months ago</p>
        </div>
      </div>
      <Card.Text style={{ color: "black" }}>{post.caption}</Card.Text>
      <Row className="post-images">
        {post.images.slice(0, 4).map((image, index) => (
          <Col key={index} xs={6} md={3}>
            <img
              src={image}
              alt={`Post Image ${index}`}
              className="img-fluid post-image"
            />
          </Col>
        ))}
        {post.images.length > 4 && (
          <Col
            xs={6}
            md={3}
            className="d-flex align-items-center justify-content-center post-image-more"
          >
            +{post.images.length - 4}
          </Col>
        )}
      </Row>
      <div className="post-interactions d-flex justify-content-between align-items-center mt-3">
        <div className="interaction-icons">
          <FaThumbsUp className="icon" /> {post.likeCount}
        </div>
        <div className="interaction-details">
          {post.commentCount} comments
        </div>
      </div>
      <div className="interaction-buttons d-flex justify-content-between mt-2">
        <button className="interaction-button">
          <FaThumbsUp className="icon" /> Like
        </button>
        <button className="interaction-button">
          <FaCommentAlt className="icon" /> Comment
        </button>
      </div>
    </Card.Body>
  </Card>
);

const AllPosts = () => (
  <div>
    {posts.map((post, index) => (
      <PostCard key={index} post={post} />
    ))}
  </div>
);

const Header = () => {
  const [image, setImage] = useState(null);

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

  return (
    <div className="container">
      <div className="two-layered-box">
        <div className="upper-layer">
          {image ? (
            <img src={image} alt="Selected" className="image-preview" />
          ) : (
            <div className="placeholder">
              Click the pen icon to add an image
            </div>
          )}
          <label htmlFor="image-upload" className="edit-icon">
            <FaPen />
          </label>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
        <div className="divider">
          <img src={Logo} alt="Logo" className="logo-preview rounded-full" />
        </div>
        <div className="lower-layer">
          <Col xs={12} className="text-container p-5">
            <h3 className="mb-0 text-right font-weight-bold">
              Google Developer Groups (GDG)
            </h3>
            <p className="text-muted mb-0">
              Technology, Information and Internet·
            </p>
          </Col>
        </div>
      </div>
      <AllPosts />
    </div>
  );
};

export default Header;
