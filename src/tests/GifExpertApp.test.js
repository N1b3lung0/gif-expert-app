import React from 'react'
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Testing GifExpertApp component', () => {
    
    test('should show the GifExpertApp component correctly', () => {
        const wrapper = shallow( <GifExpertApp /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('should show a list of categories', () => {
        const categories = ['Friends', 'Game of Thrones'];

        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
})
