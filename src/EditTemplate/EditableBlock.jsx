// import React, { useState } from "react";
// import { Form } from "react-bootstrap";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// const EditableBlock = ({ initialContent }) => {
//   const [content, setContent] = useState(initialContent);
//   const [isEditing, setIsEditing] = useState(false);

//   return (
//     <div onDoubleClick={() => setIsEditing(true)}>
//       {isEditing ? (
//         <div>
//           <Form.Control
//             as="textarea"
//             rows={3}
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             onBlur={() => setIsEditing(false)}
//           />
//           <ReactQuill theme="snow" value={content} onChange={setContent} />
//         </div>
//       ) : (
//         <div dangerouslySetInnerHTML={{ __html: content }} />
//       )}
//     </div>
//   );
// };

// export default EditableBlock;

import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./EditableBlock.css";

const EditableBlock = ({ initialContent }) => {
  const [content, setContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div onClick={() => setIsEditing(true)}>
      {isEditing ? (
        <div>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            onBlur={() => setIsEditing(false)}
          />
        </div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  );
};

export default EditableBlock;
