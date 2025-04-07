describe('Header and Footer Buttons', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space');
    });

    it('Should find and verify the "Sign up" button', () => {
        cy.contains('Sign up')
            .should('be.visible')
            .and('have.attr', 'href');
    });

    it('Should check all footer links and contacts', () => {
        const footerLinks = [
            'https://www.facebook.com/',
            'https://web.telegram.org/',
            'https://www.youtube.com/',
            'https://www.instagram.com/',
            'https://www.linkedin.com/',
            'https://ithillel.ua/',
            'mailto:support@ithillel.ua'
        ];

        footerLinks.forEach((link) => {
            cy.get(`a[href="${link}"]`).should('be.visible');
        });
    });
});
