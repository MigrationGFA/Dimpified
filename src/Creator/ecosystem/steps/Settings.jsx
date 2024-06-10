import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import GKTagsInput from "../../../Components/elements/tags/GKTagsInput";
import { useDispatch, useSelector } from "react-redux";
import { setRequirements } from "../../../features/course";

const Settings = ({ onNext, onPrevious }) => {
  const dispatch = useDispatch();
  const requirements = useSelector((state) => state.course.requirements) || [];
  console.log(requirements);
  const [tags, setTags] = useState(requirements.map((req) => req.name));

  useEffect(() => {
    setTags(requirements.map((req) => req.name));
  }, [requirements]);

  const handleAddTag = (tag) => {
    const newTags = [...tags, tag];
    setTags(newTags);
    dispatch(setRequirements(newTags)); // Dispatch the action to set requirements
  };

  const handleRemoveTag = (indexToRemove) => {
    const newTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(newTags);
    dispatch(setRequirements(newTags)); // Dispatch the action to set requirements
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setRequirements(tags)); // Dispatch the action to set requirements
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
            defaultTags={tags} // Use tags directly
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
