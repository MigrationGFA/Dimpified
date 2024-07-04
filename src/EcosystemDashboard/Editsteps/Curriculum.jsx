import { Fragment, useState } from 'react';
import { Card, Form, Button, Modal } from 'react-bootstrap';

const AddTopic = ({ onAddTopic }) => {
    const [show, setShow] = useState(false);
    const [topic, setTopic] = useState('');
    const [topicDescription, setTopicDescription] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddTopic = () => {
        onAddTopic({ topic, topicDescription });
        setTopic('');
        setTopicDescription('');
        handleClose();
    };

    return (
        <Fragment>
            <Button
                variant="outline-primary"
                className="btn btn-outline-primary btn-sm mt-3"
                onClick={handleShow}
            >
                Add Topic
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Topic</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pb-0">
                    <Form.Group className="mb-3" controlId="formTopic">
                        <Form.Control 
                            type="text" 
                            placeholder="Topic"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTopicDescription">
                        <Form.Control 
                            as="textarea" 
                            placeholder="Topic Description" 
                            value={topicDescription}
                            onChange={(e) => setTopicDescription(e.target.value)} 
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="pt-0 border-0 d-inline ">
                    <Button variant="primary" onClick={handleAddTopic}>Add New Topic</Button>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

const Curriculum = (props) => {
    const { next, previous } = props;
    const [sections, setSections] = useState([]);

    const handleAddTopic = (newTopic) => {
        setSections([...sections, newTopic]);
    };

    const handleRemoveSection = (index) => {
        const updatedSections = [...sections];
        updatedSections.splice(index, 1);
        setSections(updatedSections);
    };

    return (
        <Form>
            <Card className="mb-3  border-0">
                <Card.Header className="border-bottom px-4 py-3">
                    <h4 className="mb-0">Curriculum</h4>
                </Card.Header>
                <Card.Body>
                    {sections.map((section, index) => (
                        <div key={index} className="bg-light rounded p-2 mb-4 position-relative">
                            <Button 
                                variant="link" 
                                className="position-absolute top-0 end-0 text-danger" 
                                onClick={() => handleRemoveSection(index)}
                            >
                                &times;
                            </Button>
                            <h4>{section.topic}</h4>
                            <p style={{ backgroundColor: 'white', border: '1px solid #ced4da', padding: '10px', borderRadius: '5px', height: '150px', overflowY: 'auto' }}>{section.topicDescription}</p>
                        </div>
                    ))}
                    <AddTopic onAddTopic={handleAddTopic} />
                </Card.Body>
            </Card>
            <div className="d-flex justify-content-between">
                <Button variant="secondary" onClick={previous}>
                    Previous
                </Button>
                <Button variant="primary" onClick={next}>
                    Next
                </Button>
            </div>
        </Form>
    );
};
export default Curriculum;
