import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from './../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    test('Debe cambiar valor en caja de texto', () => {
        render(<AddCategory emitAddCategory={ () => {} } />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Jack' } });

        // screen.debug();
        expect(input.value).toBe('Jack');
    })

    test('Debe llamar emitAddCategory si input tiene un valor', () => {
        const inputVal = 'Midoriya';
        const emitAddCategory = jest.fn();

        render(<AddCategory emitAddCategory={ emitAddCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputVal } });
        expect(input.value).toBe(inputVal);

        fireEvent.submit(form);
        expect(input.value).toBe('');

        expect( emitAddCategory ).toHaveBeenCalledTimes(1);
    })

    test('No debe llamar emitAddCategory si input esta vacio', () => {
        const emitAddCategory = jest.fn();

        render(<AddCategory emitAddCategory={ emitAddCategory } />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect( emitAddCategory ).not.toHaveBeenCalled();
    })

})
