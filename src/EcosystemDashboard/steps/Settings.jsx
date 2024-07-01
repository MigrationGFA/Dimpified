import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import GKTagsInput from "../../Components/elements/tags/GKTagsInput";

const Settings = ({ onNext, onPrevious }) => {
  const [tags, setTags] = useState([]);

  // Load tags from session storage on component mount
  useEffect(() => {
    const storedTags = sessionStorage.getItem("requirements");
    if (storedTags) {
      setTags(JSON.parse(storedTags));
    }
  }, []);

  const handleAddTag = (tag) => {
    const newTags = [...tags, tag];
    setTags(newTags);
  };

  const handleRemoveTag = (indexToRemove) => {
    const newTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(newTags);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save tags to session storage
    sessionStorage.setItem("requirements", JSON.stringify(tags));
    // Proceed to the next step or perform any other action
    onNext();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Card className="mb-3 border-0">
        <Card.Header className="border-bottom px-4 py-3">
          <h4 className="mb-0">Requirements</h4>
        </Card.Header>
        <Card.Body>
          <GKTagsInput
            defaultTags={tags}
            onAddTag={handleAddTag}
            onRemoveTag={handleRemoveTag}
          />
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-between mb-3">
        <Button variant="secondary" onClick={onPrevious}>
          Previous
        </Button>
        <Button variant="primary" type="submit" disabled={tags.length === 0}>
          Next
        </Button>
      </div>
    </Form>
  );
};

export default Settings;
