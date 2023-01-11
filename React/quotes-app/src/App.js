import React, {Suspense} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import LoadingSpinner from './components/UI/LoadingSpinner';

//lazy loading
const NewQuote = React.lazy(()=>import('./pages/NewQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(()=> import('./pages/NotFound'));
const Layout = React.lazy(() => import('./components/layout/Layout'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));


function App() {
  return (
    <Layout>
      <Suspense fallback={
        <div className="centered"><LoadingSpinner></LoadingSpinner></div>
      }>
      <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes"></Redirect>
          </Route>

          <Route path="/quotes" exact>
            <AllQuotes></AllQuotes>
          </Route>

          <Route path="/quotes/:quoteId">
            <QuoteDetail></QuoteDetail>
          </Route>

          <Route path="/new-quote">
            <NewQuote></NewQuote>
          </Route>

          <Route path="/*">
            <NotFound></NotFound>
          </Route>

      </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
