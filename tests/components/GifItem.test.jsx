import { render, screen } from '@testing-library/react';
import { GifItem } from './../../src/components/GifItem';

describe('Pruebas <GifItem />', () => {
    const title = 'Dragon Ball';
    const url = 'https://google.com';

    test('Debe hacer match en el snapchot', () => {
        const {container} = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test(`Debe de mostrar la imagen con el URL y el ALT indicado`, () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url + '/');
        expect(alt).toBe(title);
    })

    test(`Debe mostrar el texto indicado`, () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
});