// import { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// const EditableBlock = ({
//   initialContent,
//   isButton = false,
//   onContentChange,
// }) => {
//   const [content, setContent] = useState(initialContent);
//   const [isEditing, setIsEditing] = useState(false);

//   const handleChange = (event) => {
//     setContent(event.target.value);
//     onContentChange(event.target.value);
//   };
//   const handleQuillChange = (value) => {
//     setContent(value);
//     onContentChange(value);
//   };

//   return (
//     <div onDoubleClick={() => setIsEditing(true)}>
//       {isEditing ? (
//         <div>
//           {isButton ? (
//             <Form.Control
//               type="text"
//               value={content}
//               // onChange={(e) => setContent(e.target.value)}
//               onChange={handleChange}
//               onBlur={() => setIsEditing(false)}
//             />
//           ) : (
//             // <ReactQuill theme="snow" value={content} onChange={setContent} />
//             <ReactQuill
//               theme="snow"
//               value={content}
//               onChange={handleQuillChange}
//               onBlur={() => setIsEditing(false)}
//             />
//           )}
//         </div>
//       ) : isButton ? (
//         <Button variant="primary" onClick={() => setIsEditing(true)}>
//           {content}
//         </Button>
//       ) : (
//         <div dangerouslySetInnerHTML={{ __html: content }} />
//       )}
//     </div>
//   );
// };

// export default EditableBlock;

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
    setContent(value);
    onContentChange(value);
  };

  return (
    <div onDoubleClick={() => setIsEditing(true)}>
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
