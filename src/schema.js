import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().required('Name is required').min(2, 'name must be at least 2 characters'),
    size: yup.string().oneOf(['S', 'M', 'L', 'XL'], 'you must choose a size'),
    sauce: yup.string().oneOf(['original', 'garlic-alfredo', 'blackened-ranch', 'olive-oil'], 'must choose a sauce'),
    crust: yup.string(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    bacon: yup.boolean(),
    chicken: yup.boolean(),
    onions: yup.boolean(),
    olives: yup.boolean(),
    mushrooms: yup.boolean(),
    bellPeppers: yup.boolean(),
    jalapenos: yup.boolean(),
    tomatoes: yup.boolean(),
    special: yup.string()
})

export default schema