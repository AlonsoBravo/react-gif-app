import PropTypes from 'prop-types';

const GifGridImage = ({ url, title }) => {
	return (
		<div className='card'>
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

GifGridImage.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default GifGridImage;
