import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Testing GifGrid component', () => {

    const category = 'Friends';
    
    test('should show the component GifGrid correctly', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('should show items when useFetchGifs load images', () => {

        const gifs = [{
            id: '123',
            url: 'https://localhost/imagen.jpg',
            title: 'title'
        }];

        useFetchGifs.mockReturnValue({
            images: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
    
})
