import Greeting from "./Greetings";
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('Greeting component',()=>{

    test('renders Hello World as text',()=>{
        //three A's -> arrange, act, assert
    
        //arrange
        render(<Greeting/>);
    
        //act
        //...nothing
    
        //assert
        const helloWorldElement = screen.getByText('Hello World',{exact: false});
        expect(helloWorldElement).toBeInTheDocument();
    
    
    });

    test('renders good to see you if button not clicked',()=>{
        render(<Greeting/>);

        const outputElement = screen.getByText('good to see you', {exact: false});
        expect(outputElement).toBeInTheDocument();
    });


    test('renders changed if the button was clicked', ()=>{
        //Arrange
        render(<Greeting/>);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const outputElement = screen.getByText('Changed!', {exact:false});
        expect(outputElement).toBeInTheDocument();
        
    })

    test('does not render good to see you if the button was clicked', ()=>{
        //Arrange
        render(<Greeting/>);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const outputElement = screen.queryByText('good to see you', {exact:false});
        expect(outputElement).toBeNull();
        
    });
});


