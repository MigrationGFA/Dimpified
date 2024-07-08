import React, { useState } from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import AllPosts from '../CommunityChat/SocialPosts/AllPosts';
import ImagesPosts from '../CommunityChat/SocialPosts/ImagePost';
import VideosPosts from '../CommunityChat/SocialPosts/VideoPost';
import ArticlesPosts from '../CommunityChat/SocialPosts/ArticlesPost';
import DocumentsPosts from '../CommunityChat/SocialPosts/DocumentPost';

import '../CommunityChat/PostFeed.css'; 

const GDGPosts = () => {
  const [activeSubTab, setActiveSubTab] = useState('all');

  const handleSelect = (selectedKey) => {
    setActiveSubTab(selectedKey);
  };

  return (
    <div>
      <Nav variant="tabs" activeKey={activeSubTab} onSelect={handleSelect} className="mt-3 custom-nav">
        <Nav.Item>
          <Nav.Link eventKey="all" className={`rounded-pill ${activeSubTab === 'all' ? 'active' : ''}`}>All</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="images" className={`rounded-pill ${activeSubTab === 'images' ? 'active' : ''}`}>Images</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="videos" className={`rounded-pill ${activeSubTab === 'videos' ? 'active' : ''}`}>Videos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="articles" className={`rounded-pill ${activeSubTab === 'articles' ? 'active' : ''}`}>Articles</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="documents" className={`rounded-pill ${activeSubTab === 'documents' ? 'active' : ''}`}>Documents</Nav.Link>
        </Nav.Item>
      </Nav>
      <Row className="mt-3">
        <Col xs={12}>
          {activeSubTab === 'all' && <AllPosts />}
          {activeSubTab === 'images' && <ImagesPosts />}
          {activeSubTab === 'videos' && <VideosPosts />}
          {activeSubTab === 'articles' && <ArticlesPosts />}
          {activeSubTab === 'documents' && <DocumentsPosts />}
        </Col>
      </Row>
    </div>
  );
};

export default GDGPosts;
