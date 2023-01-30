import { render, screen } from '@testing-library/react';
import GifGrid from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test in GifGrid component', () => {
	const category = 'Goku';

	test('Should to show loading message', () => {
		useFetchGifs.mockReturnValue({
			gifs: [],
			isLoading: true,
		});

		render(<GifGrid category={category} />);

		expect(screen.getByText('Cargando...')).toBeTruthy();
		expect(screen.getByText(category)).toBeTruthy();
	});

	test('Should to show images using useFetchGifs', () => {
		const gifs = [
			{
				id: '1234',
				title: 'Goku',
				url: 'https://www.google.com',
			},
			{
				id: '1235',
				title: 'Goku2',
				url: 'https://www.google.com',
			},
		];

		useFetchGifs.mockReturnValue({
			gifs,
			isLoading: false,
		});

		render(<GifGrid category={category} />);

		expect(screen.getAllByRole('img').length).toBe(2);
	});
});
