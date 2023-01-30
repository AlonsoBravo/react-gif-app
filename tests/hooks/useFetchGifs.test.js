import { renderHook, waitFor } from '@testing-library/react';
import useFetchGifs from '../../src/hooks/useFetchGifs';

describe('Test in useFetchGifs hook', () => {
	const category = 'Goku';

	test('Should return state initial value', () => {
		const { result } = renderHook(() => useFetchGifs(category));

		const { gifs, isLoading } = result.current;

		expect(gifs.length).toBe(0);
		expect(isLoading).toBeTruthy();
	});

	test('Should return an image array and isLoading with false value', async () => {
		const { result } = renderHook(() => useFetchGifs(category));

		await waitFor(() =>
			expect(result.current.gifs.length).toBeGreaterThan(0)
		);

		const { gifs, isLoading } = result.current;

		expect(gifs.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
