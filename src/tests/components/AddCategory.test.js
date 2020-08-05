import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import { InputText } from 'primereact/inputtext';

describe('Testing AddCategory component', () => {

    const setCategories = jest.fn();
    const id = 'id';
    const type = 'text';
    let value = '';
    const onChange = jest.fn();
    let wrapperAddCategory = shallow( <AddCategory setCategories={ setCategories } /> );
    let wrapperInputText = shallow( <InputText id={ id } type={ type } value={ value } onChange={ onChange } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapperAddCategory = shallow( <AddCategory setCategories={ setCategories } /> );
        wrapperInputText = shallow( <InputText id={ id } type={ type } value={ value } onChange={ onChange } /> );
    });
    
    test('should show the AddCategory component correctly', () => {
        expect(wrapperAddCategory).toMatchSnapshot();
    });

    test('should show the InputText component correctly', () => {
        expect(wrapperInputText).toMatchSnapshot();
        wrapperInputText.simulate('change', { target: { value } });
        expect(wrapperInputText.prop('id')).toBe(id);
        expect(wrapperInputText.prop('type')).toBe(type);
        expect(wrapperInputText.prop('value')).toBe(value);
        expect(wrapperInputText.prop('onChange')).toBe(onChange);
    });

    test('should NOT post the info on submit', () => {
        wrapperAddCategory.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });
    
    test('should call to setCategories and clean the inputText', () => {
        value = 'Hola Mundo'
        wrapperAddCategory.find('InputText').simulate('change', { target: { value } });
        wrapperAddCategory.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapperAddCategory.find('InputText').prop('value')).toBe('');
    });
    
    
})
