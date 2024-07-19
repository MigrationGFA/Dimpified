// formUtils.js or templateUtils.js
import { useDispatch } from 'react-redux';
import { updateContent, updateStyles } from '../features/Template/Form1';


export const useFormActions = () => {
  const dispatch = useDispatch();

  const handleContentChange = (section, field, value, index = null) => {
    dispatch(updateContent({ section, field, value, index }));
  };

  const handleBackgroundColorChange = (sectionId, color) => {
    dispatch(
      updateStyles({
        section: sectionId,
        styles: { backgroundColor: color },
      })
    );
  };

  const handleLogoChange = (section, field, value) => {
    handleContentChange(section, field, value);
  };



  const handleTextColorChange = (sectionId, color) => {
    dispatch(
      updateStyles({
        section: sectionId,
        styles: { color: color },
      })
    );
  };

  const handleButtonColorChange = (sectionId, color) => {
    dispatch(
      updateContent({
        section: sectionId,
        field: "buttonColor",
        value: color, // Ensure this captures the correct value
      })
    );
  };

  const handleFontChange = (sectionId, fontFamily) => {
    dispatch(
      updateStyles({
        section: sectionId,
        styles: { fontFamily },
      })
    );
  };

  return {
    handleContentChange,
    handleBackgroundColorChange,
    handleTextColorChange,
    handleFontChange,
    handleLogoChange,
    handleButtonColorChange
  };
};



