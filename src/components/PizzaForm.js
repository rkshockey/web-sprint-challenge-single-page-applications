import React from 'react'

function PizzaForm (props) {
    const { values, submit, cancel, change, toppings } = props;

    function changeForm (e) {
        const { name, value, type, checked } = e.target;
        const valToUse = type === 'checkbox' ? checked : value;
        change(name, valToUse);
    }

    function submitForm (e){
        e.preventDefault();
        submit()
    }

    function cancelForm (e){
        e.preventDefault();
        cancel()
    }

    return (
        <form id='pizza-form' onSubmit={submitForm}>
            <label htmlFor='name'> Name
                <input type='text' name='name' id='name' onChange={changeForm} value={values.name} />
            </label>
            <label htmlFor='size'> Size
                <select name='size' id='size' onChange={changeForm} value={values.size}>
                    <option value=''>--Select a size--</option>
                    <option value='S'>Personal</option>
                    <option value='M'>Medium</option>
                    <option value='L'>Large</option>
                    <option value='XL'>Extra Large</option>
                </select>
            </label>
            <div className='crust'>
                <label htmlFor='original'> Original
                    <input type='radio' name='crust' id='original' value='original' checked={values.crust === 'original'} onChange={changeForm}/>
                </label>
                <label htmlFor='pan-crust'> Pan Crust
                    <input type='radio' name='crust' id='pan-crust' value='pan-crust' checked={values.crust === 'pan-crust'} onChange={changeForm} />
                </label>
                <label htmlFor='deep-dish'> Deep Dish
                    <input type='radio' name='crust' id='deep-dish' value='deep-dish' checked={values.crust === 'deep-dish'} onChange={changeForm} />
                </label>
            </div>
            <label htmlFor='sauce'> Sauce
                <select name='sauce' id='sauce' onChange={changeForm} value={values.sauce}>
                    <option value=''>--Select a sauce--</option>
                    <option value='original'>Original</option>
                    <option value='garlic-alfredo'>Garlic Alfredo</option>
                    <option value='blackened-rance'>Blackened Ranch</option>
                    <option value='olive-oil'>Olive Oil</option>
                </select>
            </label>
            <div className='toppings'>
                <h3>Toppings</h3>
                {toppings.map(top => { return (
                    <label htmlFor={top} key={top}>{top}
                        <input type='checkbox' name={top} id={top} checked={values[top]} onChange={changeForm} />
                    </label>
                )})}
            </div>
            <label htmlFor='special'>
                <input type='text' name='special' id='special' value={values.special} onChange={changeForm} />
            </label>
            <button type='submit'>Submit</button>
            <button type='cancel' onClick={cancelForm}>Cancel</button>
        </form>
    )
}

export default PizzaForm