import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import { Card } from 'primereact/card';

describe('Testing GifGridItem', () => {

    const title = 'titulo';
    const url = 'https://localhost/imagen.jpg';
    const header = ( <img src={ url } alt={ title }/> );
    
    test('should show the component GifGridItem correctly', () => {
        const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('should show the component Card correctly', () => {
        const wrapper = shallow( <Card subTitle={ title } header={ header } /> );
        expect(wrapper).toMatchSnapshot();
    });
    
    
})
