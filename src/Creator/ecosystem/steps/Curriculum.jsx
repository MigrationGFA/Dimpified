import React, { useState, useEffect } from "react";
import { Card, Form, Button, Modal } from "react-bootstrap";

const AddTopic = ({ onAddTopic }) => {
  const [show, setShow] = useState(false);
  const [topic, setTopic] = useState("");
  const [topicDescription, setTopicDescription] = useState("");
  const [topicVideoUrl, setTopicVideoUrl] = useState("");
  const [topicVideoDuration, setTopicVideoDuration] = useState("");
  const [sections, setSections] = useState([
    { title: "", contentLink: "", duration: "" },
  ]);

  const handleClose = () => {
    setShow(false);
    setTopic("");
    setTopicDescription("");
    setTopicVideoUrl("");
    setTopicVideoDuration("");
    setSections([{ title: "", contentLink: "", duration: "" }]);
  };

  const handleShow = () => setShow(true);

  const handleAddSection = () => {
    setSections([...sections, { title: "", contentLink: "", duration: "" }]);
  };

  const handleRemoveSection = (index) => {
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
  };

  const handleSectionChange = (index, field, value) => {
    const newSections = [...sections];
    newSections[index][field] = value;
    setSections(newSections);
  };

  const handleAddTopic = () => {
    onAddTopic({
      topic,
      topicDescription,
      topicVideoUrl,
      topicVideoDuration,
      sections,
    });
    handleClose();
  };

  const isInitialSectionFilled =
    sections[0].title && sections[0].contentLink && sections[0].duration;

  return (
    <>
      <Button
        variant="outline-primary"
        className="btn btn-outline-primary btn-sm mt-3"
        onClick={handleShow}
      >
        Add Module
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Module</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-0">
          <Form.Group className="mb-3" controlId="formTopic">
            <Form.Control
              type="text"
              placeholder="Module Title"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTopicDescription">
            <Form.Control
              as="textarea"
              placeholder="Module Description"
              value={topicDescription}
              onChange={(e) => setTopicDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formTopicCourseContentDuration"
          >
            <Form.Control
              type="number"
              placeholder="Total Audio/Video/Document course content duration"
              value={topicVideoDuration}
              onChange={(e) => setTopicVideoDuration(e.target.value)}
            />
          </Form.Group>
          {sections.map((section, index) => (
            <div key={index} className="d-flex align-items-center mb-3 gap-3">
              <Form.Group>
                <Form.Label>Section Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Section Title"
                  value={section.title}
                  onChange={(e) =>
                    handleSectionChange(index, "title", e.target.value)
                  }
                  className="me-2"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Section Content Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Section Content Link"
                  value={section.contentLink}
                  onChange={(e) =>
                    handleSectionChange(index, "contentLink", e.target.value)
                  }
                  className="me-2"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Section Duration</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Section Duration"
                  value={section.duration}
                  onChange={(e) =>
                    handleSectionChange(index, "duration", e.target.value)
                  }
                  className="me-2"
                />
              </Form.Group>

              {index > 0 && (
                <Button
                  variant="outline-danger"
                  onClick={() => handleRemoveSection(index)}
                  className="mt-5"
                >
                  Remove
                </Button>
              )}
            </div>
          ))}
          <Button
            variant="outline-primary"
            onClick={handleAddSection}
            disabled={!isInitialSectionFilled}
            className="mb-3"
          >
            Add Section
          </Button>
        </Modal.Body>
        <Modal.Footer className="pt-0 border-0 d-inline ">
          <Button variant="primary" onClick={handleAddTopic}>
            Add New Module
          </Button>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const Curriculum = ({ onNext, onPrevious }) => {
  const [sections, setSections] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editCourseName, setEditCourseName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editVideoUrl, setEditVideoUrl] = useState("");
  const [editVideoDuration, setEditVideoDuration] = useState("");
  const [editSections, setEditSections] = useState([]);

  useEffect(() => {
    const storedData = sessionStorage.getItem("curriculum");
    if (storedData) {
      setSections(JSON.parse(storedData));
    }
  }, []);

  const handleAddTopic = (newTopic) => {
    setSections([
      ...sections,
      {
        courseName: newTopic.topic,
        description: newTopic.topicDescription,
        videoUrl: newTopic.topicVideoUrl,
        videoDuration: newTopic.topicVideoDuration,
        sections: newTopic.sections,
      },
    ]);
  };

  const handleRemoveSection = (index) => {
    const updatedSections = [...sections];
    updatedSections.splice(index, 1);
    setSections(updatedSections);
  };

  const handleEditSection = (index) => {
    setEditIndex(index);
    setEditCourseName(sections[index].courseName);
    setEditDescription(sections[index].description);
    setEditVideoUrl(sections[index].videoUrl);
    setEditVideoDuration(sections[index].videoDuration);
    setEditSections(sections[index].sections);
  };

  const handleSaveEdit = () => {
    const updatedSections = [...sections];
    updatedSections[editIndex] = {
      courseName: editCourseName,
      description: editDescription,
      videoUrl: editVideoUrl,
      videoDuration: editVideoDuration,
      sections: editSections,
    };
    setSections(updatedSections);
    setEditIndex(null);
  };

  const handleNext = () => {
    sessionStorage.setItem("curriculum", JSON.stringify(sections));
    onNext();
  };

  return (
    <Form>
      <Card className="mb-3 border-0">
        <Card.Header className="border-bottom px-4 py-3">
          <h4 className="mb-0">Curriculum</h4>
        </Card.Header>
        <Card.Body>
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-light rounded p-2 mb-4 position-relative"
            >
              {editIndex === index ? (
                <div className="position-relative">
                  <Form.Group controlId={`edit-courseName-${index}`}>
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={editCourseName}
                      onChange={(e) => setEditCourseName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId={`edit-description-${index}`}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId={`edit-videoUrl-${index}`}>
                    <Form.Label>Audio/Video/Document content link</Form.Label>
                    <Form.Control
                      type="text"
                      value={editVideoUrl}
                      onChange={(e) => setEditVideoUrl(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId={`edit-videoDuration-${index}`}>
                    <Form.Label>
                      Audio/Video/Document course content Duration{" "}
                    </Form.Label>
                    <Form.Control
                      type="number"
                      value={editVideoDuration}
                      onChange={(e) => setEditVideoDuration(e.target.value)}
                    />
                  </Form.Group>
                  {editSections.map((section, secIndex) => (
                    <div
                      key={secIndex}
                      className="d-flex align-items-center mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Section Title"
                        value={section.title}
                        onChange={(e) =>
                          handleSectionChange(secIndex, "title", e.target.value)
                        }
                        className="me-2"
                      />
                      <Form.Control
                        type="text"
                        placeholder="Section Content Link"
                        value={section.contentLink}
                        onChange={(e) =>
                          handleSectionChange(
                            secIndex,
                            "contentLink",
                            e.target.value
                          )
                        }
                        className="me-2"
                      />
                      <Form.Control
                        type="number"
                        placeholder="Section Duration"
                        value={section.duration}
                        onChange={(e) =>
                          handleSectionChange(
                            secIndex,
                            "duration",
                            e.target.value
                          )
                        }
                        className="me-2"
                      />
                      {secIndex > 0 && (
                        <Button
                          variant="outline-danger"
                          onClick={() => handleRemoveSection(secIndex)}
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button variant="outline-primary" onClick={handleAddSection}>
                    Add Section
                  </Button>
                  <div className="mt-5">
                    <Button onClick={handleSaveEdit}>Save</Button>
                    <Button
                      onClick={() => setEditIndex(null)}
                      className="me-2 position-absolute "
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
                    className="position-absolute top-0 end-0 text-danger me-2 "
                    onClick={() => handleRemoveSection(index)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="link"
                    className="position-absolute top-0  text-primary me-4"
                    onClick={() => handleEditSection(index)}
                    style={{ right: "10%", maxWidth: "80%" }}
                  >
                    Edit
                  </Button>
                  <h4>{section.courseName}</h4>
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
                    {section.description}
                  </p>
                </div>
              )}
            </div>
          ))}
          <AddTopic onAddTopic={handleAddTopic} />
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-between">
        <Button variant="secondary" onClick={onPrevious}>
          Previous
        </Button>
        <Button
          variant="primary"
          onClick={handleNext}
          disabled={sections.length === 0}
        >
          Next
        </Button>
      </div>
    </Form>
  );
};

export default Curriculum;
