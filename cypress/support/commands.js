Cypress.Commands.add("login", (email, password) => {
	cy.visit("/login");
	cy.get(".flex-dir-col > :nth-child(1) > .input > input")
	
		.should("be.visible")
		.type(email)

	cy.get(".mt-9 > .input-container > .input > input")
		.should("be.visible")
		.type(password);
	cy.get(".mt-10").should("be.visible").should("be.visible").click();
	cy.wait(5000);
		cy.get("body").then(($body) => {
			if ($body.find(".whats-new-popup .button-close").length > 0) {
				cy.get(".whats-new-popup .button-close")
					.should("be.visible")
					.click();
			}
		});
});