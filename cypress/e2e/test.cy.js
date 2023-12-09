/// <reference types= "cypress" />

describe('Aspire testcase', () => {
    it.skip('check the currency', () => {
        const expectedcurrency= 'SAR'
        cy.visit('https://global.almosafer.com/en')
        cy.get('.cta__saudi').click()
        cy.get('[data-testid="Header__CurrencySelector"]').invoke('text').should('include',expectedcurrency)
    });

    it('check the language', () => {
        const attr='lang'
        const expectedlang='en'
        
        cy.visit('https://global.almosafer.com/en')
        cy.get('.cta__saudi').click()
        cy.get('html').should('have.attr' , attr , expectedlang)



        
    });
});