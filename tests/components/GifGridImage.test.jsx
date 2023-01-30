import { render, screen } from '@testing-library/react';
import { default as GifGridImage } from '../../src/components/GifGridImage';

describe('Testing in GifGridImage component', () => {
	const title = 'Goku';
	const url = 'http://www.google.cl/';

	test('should be to match snapshot', () => {
		const { container } = render(<GifGridImage title={title} url={url} />);

		expect(container).toMatchSnapshot();
	});

	test('should be show an image with correct url and alt', () => {
		render(<GifGridImage title={title} url={url} />);

		const { src, alt } = screen.getByRole('img');

		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test('Should be show the component title', () => {
		render(<GifGridImage title={title} url={url} />);

		expect(screen.getByText(title)).toBeTruthy();
	});
});
