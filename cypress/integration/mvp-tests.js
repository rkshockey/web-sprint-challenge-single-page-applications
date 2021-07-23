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
const nextBtn1 = () => cy.get('button[id="next1"]')
const nextBtn2 = () => cy.get('button[id="next2"]')
const backBtn1 = () => cy.get('button[id="back1"]')
const backBtn2 = () => cy.get('button[id="back2"]') 

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
        nextBtn1().click()
        nextBtn2().click()
        specialInput().should('have.value', '').type('None').should('have.value', 'None')
    })

    it('can select multiple toppings', () => {
        nextBtn1().click()
        topping1().click().should('be.checked')
        topping2().click().should('be.checked')
        topping3().click().should('be.checked')
    })

    it('can submit form', () => {
        nextBtn1().click()
        nextBtn2().click()
        submitBtn().should('be.disabled')
        backBtn2().click()
        backBtn1().click()
        nameInput().type('Rob')
        sizeInput().select('S')
        sauceInput().select('original')
        nextBtn1().click()
        nextBtn2().click()
        submitBtn().should('not.be.disabled').click()
        backBtn2().click()
        backBtn1().click()
        nameInput().should('have.value', '')
    })
})