import { useEffect, useState } from 'react';
import GifGridImage from './GifGridImage';
import { useFetchGifs } from '../hooks';

const GifGrid = ({ category }) => {
	const { gifs, isLoading } = useFetchGifs(category);

	return (
		<>
			{isLoading && <h2>Cargando...</h2>}
			<h3>{category}</h3>
			<div className='card-grid'>
				{gifs.map(({ id, title, url }) => (
					<GifGridImage key={id} title={title} url={url} />
				))}
			</div>
		</>
	);
};

export default GifGrid;
