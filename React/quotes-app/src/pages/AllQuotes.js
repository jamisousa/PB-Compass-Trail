import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id:'q1',author:'Jamile', text:'Test'},
    {id:'q2',author:'Jam', text:'Test2'}
];

const AllQuotes = () => {
    return(
        <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
    );
};

export default AllQuotes;