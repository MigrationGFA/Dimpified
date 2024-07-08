import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaThumbsUp, FaCommentAlt, FaShare, FaPaperPlane } from 'react-icons/fa'; // Import icons
import '../PostFeed.css';
import img1 from '../../../assets/SocialImages/Img 1.jpeg';
import img2 from '../../../assets/SocialImages/Img 2.jpeg';
import img3 from '../../../assets/SocialImages/Img 3.jpeg';

const posts = [
  {
    type: 'image',
    caption: 'As #GoogleIO comes to a close, we\'re filled with immense gratitude for everyone who joined us on this inspiring journey.',
    images: [img1, img2, img3,],
    likeCount: 2287,
    commentCount: 12,
    repostCount: 25,
  },
];

const PostCard = ({ post }) => (
  <Card className="mb-3 post-card">
    <Card.Body>
      <Card.Text>{post.caption}</Card.Text>
      <Row className="post-images">
        {post.images.slice(0, 4).map((image, index) => (
          <Col key={index} xs={6} md={3}>
            <img src={image} alt={`Post Image ${index}`} className="img-fluid post-image" />
          </Col>
        ))}
        {post.images.length > 4 && (
          <Col xs={6} md={3} className="d-flex align-items-center justify-content-center post-image-more">
            +{post.images.length - 4}
          </Col>
        )}
      </Row>
      <div className="post-interactions d-flex justify-content-between align-items-center mt-3">
        <div className="interaction-icons">
          <FaThumbsUp className="icon" /> {post.likeCount}
        </div>
        <div className="interaction-details">
          {post.commentCount} comments · {post.repostCount} reposts
        </div>
      </div>
      <div className="interaction-buttons d-flex justify-content-between mt-2">
        <button className="interaction-button">
          <FaThumbsUp className="icon" /> Like
        </button>
        <button className="interaction-button">
          <FaCommentAlt className="icon" /> Comment
        </button>
        {/* <button className="interaction-button">
          <FaShare className="icon" /> Repost
        </button>
        <button className="interaction-button">
          <FaPaperPlane className="icon" /> Send
        </button> */}
      </div>
    </Card.Body>
  </Card>
);

const ImagesPosts = () => (
  <div>
    {posts.map((post, index) => (
      <PostCard key={index} post={post} />
    ))}
  </div>
);

export default ImagesPosts;
