import {Route, Switch, Redirect} from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Products from './pages/Products';
import Welcome from './pages/Welcome';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
      
      <MainHeader></MainHeader>
      <main></main>
      <Switch>
        <Route path='/' exact>
          <Redirect to="/welcome"></Redirect>
        </Route>

        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>

        <Route path="/products" exact>
          <Products></Products>
        </Route>

        <Route path="/products/:productId">
          <ProductDetail></ProductDetail>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
