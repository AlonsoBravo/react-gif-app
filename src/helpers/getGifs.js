const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=51V6PvpGtF7wYWdCJsd6gmT2PnSEh6pA&q=${category}&limit=20`;

	const response = await fetch(url);

	const { data = [] } = await response.json();

	return data.map(({ id, title, images }) => ({
		id,
		title,
		url: images.downsized_medium.url,
	}));
};

export default getGifs;
