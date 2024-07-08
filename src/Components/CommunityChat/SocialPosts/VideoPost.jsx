import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaThumbsUp, FaCommentAlt, FaShare, FaPaperPlane } from 'react-icons/fa';
import '../PostFeed.css';

const posts = [
  {
    type: 'video',
    caption: 'Check out our latest video content!',
    images: ['https://via.placeholder.com/150'], 
    likeCount: 200,
    commentCount: 10,
    repostCount: 5,
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

const VideosPosts = () => (
  <div>
    {posts.map((post, index) => (
      <PostCard key={index} post={post} />
    ))}
  </div>
);

export default VideosPosts;
