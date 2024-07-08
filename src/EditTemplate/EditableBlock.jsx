import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditableBlock = ({
  initialContent,
  isButton = false,
  onContentChange,
}) => {
  const [content, setContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  const handleChange = (value) => {
    // const sanitizedContent = sanitizeHtml(value, {
    //   allowedTags: ["b", "i", "em", "strong", "a"], // Add allowed tags here
    //   allowedAttributes: {
    //     a: ["href"],
    //   },
    // });
    setContent(value);
    onContentChange(value);
    // setContent(sanitizedContent);
    // onContentChange(sanitizedContent);
  };

  return (
    <div
      onDoubleClick={() => setIsEditing(true)}
      style={{
        cursor: "pointer",
      }}
    >
      {isEditing ? (
        <div>
          {isButton ? (
            <Form.Control
              type="text"
              value={content}
              onChange={(e) => handleChange(e.target.value)}
              onBlur={() => setIsEditing(false)}
            />
          ) : (
            <ReactQuill
              theme="snow"
              value={content}
              onChange={handleChange}
              onBlur={() => setIsEditing(false)}
            />
          )}
        </div>
      ) : isButton ? (
        <Button variant="primary" onClick={() => setIsEditing(true)}>
          {content}
        </Button>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  );
};

export default EditableBlock;
