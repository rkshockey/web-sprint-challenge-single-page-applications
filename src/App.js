import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import PizzaForm from './components/PizzaForm';
import axios from 'axios'

const initialFormValues = {
  name: '',
  size: '',
  crust: 'original',
  sauce: '',
  pepperoni: false,
  sausage: false,
  bacon: false,
  chicken: false,
  onions: false,
  olives: false,
  mushrooms: false,
  bellPeppers: false,
  jalapenos: false,
  tomatoes: false,
  special: ''
}

const toppings = [
  'pepperoni',
  'sausage',
  'bacon',
  'chicken',
  'onions',
  'olives',
  'mushrooms',
  'bellPeppers',
  'jalapenos',
  'tomatoes'
]

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)

  function changeForm (name, value){
    setFormValues({...formValues, [name]: value})
  }

  function submitForm (){
    const newOrder = formValues;
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    setFormValues(initialFormValues)
  }

  function cancelForm (){
    setFormValues(initialFormValues)
  }

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
          <PizzaForm values={formValues} submit={submitForm} change={changeForm} cancel={cancelForm} toppings={toppings} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
