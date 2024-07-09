// import node module libraries
import { Fragment } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SizeSelect = (props) => {
	const {
		placeholder,
		value,
		options,
		id,
		name,
		style,
		onChange,
		required
	} = props;

	const handleSizeChange = (event) => {
		const selectedValue = event.target.value;
		onChange(selectedValue);
	};

	return (
		<Fragment>
			<Form.Select
				value={value}
				id={id}
				name={name}
				onChange={handleSizeChange}
				required={required}
				style={style ? style : {}}
			>
				{placeholder ? (
					<option value="" className="text-muted">
						{placeholder}
					</option>
				) : (
					''
				)}
				{options.map((item, index) => {
					return (
						<option key={index} value={item.value} className="text-dark">
							{item.label}
						</option>
					);
				})}
			</Form.Select>
		</Fragment>
	);
};

SizeSelect.propTypes = {
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired
		})
	).isRequired,
	id: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	required: PropTypes.bool
};

SizeSelect.defaultProps = {
	placeholder: '',
	value: '',
	id: '',
	name: '',
	required: false
};


export { SizeSelect };