describe ('Hotels Search', () => {
    it('should open the main url and verify the title', () => {
        browser.url('https://www.hotels.com/');
        expect(browser).toHaveTitle('Hotels.com - Deals & Discounts for Hotel Reservations from Luxury Hotels to Budget Accommodations');
    })

    it('should search for a destination and verify the search text value', () => {
        const searchInput = $('#destination_form_field-menu');
        const searchBtn = $('#submit_button');   

        searchInput.addValue('Madrid');
        searchBtn.click();
        expect(searchInput).toHaveValue('Madrid');
    })

    it('should redirect to a new page and verify the title', () => {
        expect(browser).toHaveTitle('Madrid (and vicinity), Community of Madrid, Spain Hotel Search results');
    })
})