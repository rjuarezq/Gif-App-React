import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe ('Test in <GifItem.jsx', () => {
    const title = 'Ricardo Juarez';
    const url = 'https://juarezqricardo.com/profile.jpg';
    
    test('It have to match with snapshot', () => {
        const { container } = render(<GifItem title = {title} url = {url}/>);
        expect( container ).toMatchSnapshot();
    });

    test('This test sould show the img with the url and alt attribute', () => {
        render(<GifItem title= {title} url = {url} />);
        //screen.debug(); //show the node element in terminal 
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test('This test should show the component title', () => {
        render (<GifItem title = {title} url= {url}/>);
        expect( screen.getByText( title )).toBeTruthy();
    });
});