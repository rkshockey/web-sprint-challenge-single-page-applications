import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import PizzaForm from './components/PizzaForm';
import schema from './schema'
import axios from 'axios'
import { reach } from 'yup'

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

const initialErrors = {
  name: '',
  size: '',
  sauce: ''
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
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(true)

  function changeForm (name, value){
    setFormValues({...formValues, [name]: value})
    validate(name, value)
  }

  function submitForm (){
    const newOrder = formValues;
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    setFormValues(initialFormValues)
  }

  function validate (name, value){
    reach(schema, name)
      .validate(value)
      .then(res => setErrors({...errors, [name]: ''}))
      .catch(err => setErrors({...errors, [name]: err.errors[0]}))
  }

  function cancelForm (){
    setFormValues(initialFormValues)
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

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
          <PizzaForm values={formValues} submit={submitForm} change={changeForm} cancel={cancelForm} toppings={toppings} disabled={disabled} errors={errors} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
