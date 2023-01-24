import {render, screen} from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {

    test('renders post if request succeeds', async()=>{
        //arrange
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async() => [{id: 'p1', title: 'First post'}],
        });
        render(<Async></Async>)

        const listItemElements = await screen.findAllByRole('listitem');

        expect(listItemElements).not.toHaveLength(0);
            
    })

})