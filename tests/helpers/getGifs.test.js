import getGifs from '../../src/helpers/getGifs';

describe('Testing in getGifs function', () => {
	test('Should return a gifs array', async () => {
		const gifs = await getGifs('goku');

		expect(gifs.length).toBeGreaterThan(0);
		expect(gifs[0]).toEqual({
			id: expect.any(String),
			title: expect.any(String),
			url: expect.any(String),
		});
	});
});
