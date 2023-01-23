import Greeting from "./Greetings";
import {render, screen} from '@testing-library/react';

test('renders Hello World as text',()=>{
    //three A's -> arrange, act, assert

    //arrange
    render(<Greeting/>);

    //act
    //nothing

    //assert
    const helloWorldElement = screen.getByText('Hello World',{exact: false});
    expect(helloWorldElement).toBeInTheDocument();


});