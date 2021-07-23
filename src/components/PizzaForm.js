import React from 'react'

function PizzaForm (props) {
    const { values, submit, cancel, change } = props;

    function changeForm (e) {
        const { name, value, type, checked } = evt.target;
        const valToUse = type === checkbox ? checked : value;
        change(name, valToUse);
    }

    function submitForm (e){
        e.preventDefault;
        submit()
    }

    function cancelForm (e){
        e.preventDefault;
        cancel()
    }

    return (
        <form id='pizza-form' onSubmit={submitForm}>
            
        </form>
    )
}

export default PizzaForm