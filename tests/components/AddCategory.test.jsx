import { fireEvent, render, screen } from '@testing-library/react';
import AddCategory from '../../src/components/AddCategory';

describe('Tests in AddCategory component', () => {
	test('Should to change de text box value', () => {
		render(<AddCategory onAddCategory={() => {}} />);

		const input = screen.getByRole('textbox');

		fireEvent.input(input, { target: { value: 'goku' } });

		expect(input.value).toBe('goku');
	});

	test('Should to call onAddCategory if input has a value', () => {
		const value = 'goku';
		const onAddCategory = jest.fn();

		render(<AddCategory onAddCategory={onAddCategory} />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value } });
		fireEvent.submit(form);

		expect(input.value).toBe('');
		expect(onAddCategory).toHaveBeenCalled();
		expect(onAddCategory).toHaveBeenCalledWith(value);
	});

	test('Should not to call onAddCategory if input is empty', () => {
		const onAddCategory = jest.fn();

		render(<AddCategory onAddCategory={onAddCategory} />);

		const form = screen.getByRole('form');

		fireEvent.submit(form);

		expect(onAddCategory).toHaveBeenCalledTimes(0);
	});
});
