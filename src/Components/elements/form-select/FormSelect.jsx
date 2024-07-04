
import { Fragment } from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

export const FormSelect = ({
  placeholder = '',
  selectedValue = '',
  options,
  id,
  name,
  style = {},
  onChange,
  required = false
}) => {

  // Ensure options is an array and not null or undefined
  if (!Array.isArray(options)) {
    console.error('Options must be an array.');
    return null;
  }

  return (
    <Fragment>
      <Form.Select
        value={selectedValue}
        id={id}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        style={style}
      >
        {placeholder && (
          <option value="" className="text-muted">
            {placeholder}
          </option>
        )}
        {options.map((item, index) => (
          <option key={index} value={item.value} className="text-dark">
            {item.label}
          </option>
        ))}
      </Form.Select>
    </Fragment>
  );
};

FormSelect.propTypes = {
  placeholder: PropTypes.string,
  selectedValue: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool
};

export default FormSelect;
