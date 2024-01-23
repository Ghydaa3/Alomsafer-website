/// <reference types= "cypress" />

describe("Aspire testcase", () => {
  it.skip("check the currency", () => {
    const expectedcurrency = "SAR";
    cy.visit("https://global.almosafer.com/en");
    cy.get(".cta__saudi").click();
    cy.get('[data-testid="Header__CurrencySelector"]')
      .invoke("text")
      .should("include", expectedcurrency);
  });

  it('check the language', () => {
      const attr='lang'
      const expectedlang='en'

      cy.visit('https://global.almosafer.com/en')
      cy.get('.cta__saudi').click()
      cy.get('html').should('have.attr' , attr , expectedlang)

  });

  it("check the language", () => {
    let websites = [
      "https://global.almosafer.com/en",
      "https://global.almosafer.com/ar",
    ];

    let RandomIndex = Math.floor(Math.random() * websites.length);
    cy.visit(websites[RandomIndex]);
    cy.get(".cta__saudi").click();
    cy.get('#uncontrolled-tab-example-tab-hotels').click()

    if (RandomIndex == 0 ){
        cy.get('[data-testid="AutoCompleteInput"]').type('Dubai')
    }

    else if ( RandomIndex == 1) {
        cy.get('[data-testid="AutoCompleteInput"]').type('دبي')
    }
  });
});
