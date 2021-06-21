import './App.css'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={ProductListing} />
          <Route path='/product/:productId' exact component={ProductDetails} />
          <Route>404 Not Found</Route> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
