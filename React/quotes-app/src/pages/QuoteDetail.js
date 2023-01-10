import React from "react";
import { useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HiighlitedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    {id:'q1',author:'Jamile', text:'Test'},
    {id:'q2',author:'Jam', text:'Test2'}
];


const QuoteDetail = () => {

    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if(!quote){
        return <p>No quote found</p>;
    }

    return(
  
        <React.Fragment>
            <h1>QuoteDetail page</h1>
            <p>{params.quoteId}</p>
            <HiighlitedQuote text={quote.text} author={quote.author}></HiighlitedQuote>
            <p>Comments...</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments></Comments>
            </Route>
        </React.Fragment>
    );
};

export default QuoteDetail;