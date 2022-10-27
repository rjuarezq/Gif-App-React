import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";


describe('Test for <AddCategory/> Component', () => {  
    test('Must change the value of the text box', () => {
        render(<AddCategory onNewCategory={ () => {}}/>);
        //Get the reference about input
        const input = screen.getByRole('textbox');
        //screen.debug();
        //Fire the simulated event of an input with value
        fireEvent.input(input, {target: {value: 'Ricardo Juarez'}});
        //Compare if the simulated event is equal to new expected value 
        expect(input.value).toBe('Ricardo Juarez');
    });

    test('Calling onNewCategory prop if the input has a value ', () => {

        const inputValue = 'Ricardo Juarez';
        const newElement = jest.fn();
        render(<AddCategory onNewCategory = { newElement } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form', {name:'search-form'});
        
        fireEvent.input(input, {target: {value : inputValue}});
        fireEvent.submit( form );

        //screen.debug();
        expect(input.value).toBe('');
        expect( newElement ).toHaveBeenCalled();
        expect( newElement ).toHaveBeenCalledTimes(1);
        expect( newElement ).toHaveBeenLastCalledWith(inputValue);
    });

    test('Not Calling onNewCategory prop if the input has not a value', () => {

        const newElement = jest.fn();
        render(<AddCategory onNewCategory={ newElement }/>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect ( newElement ).not.toHaveBeenCalled();

    });
});