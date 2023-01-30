import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ onAddCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		const value = inputValue.trim();

		if (value.length <= 1) {
			return;
		}

		onAddCategory(value);
		setInputValue('');
	};

	return (
		<form onSubmit={onSubmit} aria-label='form'>
			<input
				type={'text'}
				placeholder='Buscar gifs'
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};

AddCategory.propTypes = {
	onAddCategory: PropTypes.func.isRequired,
};

export default AddCategory;
