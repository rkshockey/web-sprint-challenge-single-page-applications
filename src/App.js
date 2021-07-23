import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import PizzaForm from './components/PizzaForm';

const App = () => {
  return (
    <div className='page'>
      <Switch>
        <Route exact path='/'>
          <h1>Lambda Eats</h1>
          <p>You can remove this code and create your own header</p>
          <Link to='/pizza'>
            <button id='order-pizza'>Pizza?</button>
          </Link>
        </Route>
        <Route path='/pizza'>
          <PizzaForm />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
