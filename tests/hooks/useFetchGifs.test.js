import { fireEvent, render, renderHook, waitFor, screen } from '@testing-library/react';
import { GifGrid } from './../../src/components/GifGrid';
import { useFetchGifs } from './../../src/hooks/useFetchGifs';

describe('Pruebas en hook useFetchGifs ', () => {
    test('debe regresar el estado inicial', () => {
        const { result } = renderHook( () => useFetchGifs('Berserk') )
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })

    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {
        const { result } = renderHook( () => useFetchGifs('Berserk') )

        await waitFor(() => expect( result.current.images.length ).toBeGreaterThan(0));

        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
})