import React, { PropTypes } from 'react';

const TextInput = ({name, value, label, onChange, error, placeholder}) => {
	let wrapperClass = 'form-group';
	if(error && error.length > 0) {
		wrapperClass += " " + 'has-error';
	}

	return (
		<div className={wrapperClass}>
			<label htmlFor={name}>{label}</label>
			<div className="field">
				<input
					type="text"
					name={name}
					className="form-control"
					value={value}
					placeholder={placeholder}
					onChange={onChange}/>
				{error && <div className="alert alert-danger">{error}</div>}
			</div>
		</div>
	);
};

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string,
	placeholder: PropTypes.string,	
	value: PropTypes.string
};

export default TextInput;