import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Testing useFetchGifs hook', () => {
    
    test('should return initial state', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Friends'));
        const { images, loading } = result.current;
        await waitForNextUpdate();

        expect(images.length).toBe(0);
        expect(loading).toBe(true);
    });

    test('should return an array of images and loading must be false', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Friends'));
        await waitForNextUpdate();
        const { images, loading } = result.current;

        expect(images.length).toBe(10);
        expect(loading).toBe(false);
    });
    
    
})
