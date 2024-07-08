// GDGNav.jsx
import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import GDGPosts from '../CommunityChat/PostFeed';  

const GDGNav = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const handleSelect = (selectedKey) => {
    console.log('Selected Tab:', selectedKey);
    setActiveTab(selectedKey);
  };

  return (
    <Container>
      <Nav variant="tabs" activeKey={activeTab} onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey="posts">Posts</Nav.Link>
        </Nav.Item>
      </Nav>
      {activeTab === 'posts' && <GDGPosts />}
    </Container>
  );
};

export default GDGNav;
