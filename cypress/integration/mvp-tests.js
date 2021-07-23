const pizzaBtn = () => cy.get('button[id="order-pizza"]')
const nameInput = () => cy.get('input[name=name]')
const specialInput = () => cy.get('input[name=special]')
const sizeInput = () => cy.get('select[name=size]')
const sauceInput = () => cy.get('select[name=sauce]')
const topping1 = () => cy.get('input[name=pepperoni]')
const topping2 = () => cy.get('input[name=olives]')
const topping3 = () => cy.get('input[name=tomatoes')
const submitBtn = () => cy.get('button[id="order-button"]')
const cancelBtn = () => cy.get('button[id="cancel-button"]')

describe('MVP tests', () =>{
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        pizzaBtn().click()
    })

    it('sanity check', () => {
        expect(1+2).to.equal(3)
        expect(2+2).not.to.equal(5)
    })

    it('can put text in text inputs', () => {
        nameInput().should('have.value', '').type('Rob').should('have.value', 'Rob')
        specialInput().should('have.value', '').type('None').should('have.value', 'None')
    })

    it('can select multiple toppings', () => {
        topping1().click().should('be.checked')
        topping2().click().should('be.checked')
        topping3().click().should('be.checked')
    })

    it('can submit form', () => {
        submitBtn().should('be.disabled')
        nameInput().type('Rob')
        sizeInput().select('S')
        sauceInput().select('original')
        submitBtn().should('not.be.disabled').click()
        nameInput().should('have.value', '')
    })
})