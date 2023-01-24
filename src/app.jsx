import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const App = () => {
	const [categories, setCategories] = useState([]);

	const onAddCategory = (category) => {
		if (categories.includes(category)) return;

		setCategories([category, ...categories]);
	};

	return (
		<>
			<h1>GifExpert App</h1>
			<AddCategory onAddCategory={onAddCategory} />

			{categories.map((item) => (
				<GifGrid key={item} category={item} />
			))}
		</>
	);
};

export default App;
