import { getGifs } from '../../helpers/getGifs'

describe('Testing getGifs function', () => {
    
    test('should get 10 gifs', async() => {
        const gifs = await getGifs('Friends');
        expect(gifs.length).toBe(10);
    });

    test('should get 10 gifs', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
    
})
