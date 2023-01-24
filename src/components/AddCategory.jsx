import { useState } from 'react';

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
		<form onSubmit={onSubmit}>
			<input
				type={'text'}
				placeholder='Buscar gifs'
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};

export default AddCategory;
