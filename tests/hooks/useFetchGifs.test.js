import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Test in useFetchGif hook', () => { 

    test('It must be return the initial state', () => {
        const {result} = renderHook( () => useFetchGifs());
        const { images, isLoading } = result.current;
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });

    test('It must be return an array of images and the isLoading value would be false', async() => {
        const {result} = renderHook( () => useFetchGifs());
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {
                timeout: 3000
            }
        );
        const { images, isLoading } = result.current;
        expect( images.length ).toBeGreaterThan(0);
        expect ( isLoading ).toBeFalsy();
    });
});