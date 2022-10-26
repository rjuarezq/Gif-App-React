import { fireEvent, render, screen } from "@testing-library/react";
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
});