import React, { useState, useRef } from 'react';
import { Button, Image, Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CommunityChat/Comment.css';

// Import your images
import Box from '../../assets/Comment.jpeg';
import Logo from '../../assets/LogoList/FgnAlatLogo.jpg';

// Utility function to format time
const formatTime = (date) => {
  const now = new Date();
  const diff = Math.floor((now - date) / 1000); // time difference in seconds

  if (diff < 60) return `${diff} seconds ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;

  return `on ${date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}`;
};

const CommentSection = ({ comments, setComments }) => {
  const [newComment, setNewComment] = useState('');
  const [reply, setReply] = useState('');
  const [replyToCommentId, setReplyToCommentId] = useState(null);
  const [showCommentInput, setShowCommentInput] = useState(false); // Track if the comment input box should be shown
  const commentInputRef = useRef(null);

  const handleCommentChange = (e) => setNewComment(e.target.value);

  const handleReplyChange = (e) => setReply(e.target.value);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), text: newComment, replies: [], time: new Date(), likes: 0 }]);
      setNewComment('');
      commentInputRef.current.focus();
    }
  };

  const handleAddReply = (commentId) => {
    if (reply.trim()) {
      setComments(comments.map(comment =>
        comment.id === commentId
          ? { ...comment, replies: [...(comment.replies || []), { text: reply, time: new Date(), likes: 0 }] }
          : comment
      ));
      setReply('');
      setReplyToCommentId(null);
    }
  };

  const handleLikeComment = (commentId) => {
    setComments(comments.map(comment =>
      comment.id === commentId
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

  const handleLikeReply = (commentId, replyIndex) => {
    setComments(comments.map(comment =>
      comment.id === commentId
        ? { 
            ...comment, 
            replies: comment.replies.map((reply, index) =>
              index === replyIndex
                ? { ...reply, likes: reply.likes + 1 }
                : reply
            ) 
          }
        : comment
    ));
  };

  const handleNoCommentsClick = () => {
    setShowCommentInput(true);
  };

  return (
    <Container className="comment-section mt-3">
      {!showCommentInput ? (
        <div className="text-center no-comments-message" onClick={handleNoCommentsClick}>
          <img src={Box} alt="No Comments" className="no-comments-icon" />
          <h3 className="font-weight-bold">No comments yet</h3>
          <p>Be the first to comment</p>
        </div>
      ) : (
        <Row className="new-comment">
          <Col xs={1}>
            <Image src={Logo} roundedCircle className="user-image" />
          </Col>
          <Col xs={11}>
            <div className="active-comment-box">
              <Form.Control
                type="text"
                value={newComment}
                onChange={handleCommentChange}
                placeholder="Type your comment..."
                ref={commentInputRef}
              />
              <Button onClick={handleAddComment}>Post</Button>
            </div>
          </Col>
        </Row>
      )}

      {comments.map(comment => (
        <Row key={comment.id} className="comment">
          <Col xs={1}>
            <Image src={Logo} roundedCircle className="commenter-image" />
          </Col>
          <Col xs={11}>
            <div className="comment-content">
              <div className="comment-header">Commenter Name</div>
              <div className="comment-text">{comment.text}</div>
              <div className="comment-footer">
                <span className="comment-time">{formatTime(new Date(comment.time))}</span>
                <Button 
                  variant="link" 
                  className="like-button" 
                  onClick={() => handleLikeComment(comment.id)}
                >
                  Like ({comment.likes})
                </Button>
                <Button 
                  variant="link" 
                  className="reply-button" 
                  onClick={() => setReplyToCommentId(comment.id)}
                >
                  Reply
                </Button>
              </div>
              {comment.replies && comment.replies.map((reply, index) => (
                <Row key={index} className="reply">
                  <Col xs={1}>
                    <Image src={Logo} roundedCircle className="replier-image" />
                  </Col>
                  <Col xs={11} style={{ marginLeft: 'auto' }}>
                    <div className="reply-content">
                      <div className="replier-name">Replier Name</div>
                      <div className="reply-text">{reply.text}</div>
                      <div className="reply-footer">
                        <span className="reply-time">{formatTime(new Date(reply.time))}</span>
                        <Button 
                          variant="link" 
                          className="like-button" 
                          onClick={() => handleLikeReply(comment.id, index)}
                        >
                          Like ({reply.likes})
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              ))}
            </div>
            {replyToCommentId === comment.id && (
              <Row className="reply-input">
                <Col xs={1}>
                  <Image src={Logo} roundedCircle className="replier-image" />
                </Col>
                <Col xs={11}>
                  <Form.Control
                    type="text"
                    value={reply}
                    onChange={handleReplyChange}
                    placeholder="Type your reply here..."
                    ref={commentInputRef}
                  />
                  <Button onClick={() => handleAddReply(comment.id)}>Post Reply</Button>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default CommentSection;
