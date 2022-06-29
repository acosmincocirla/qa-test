const selectors = {
  searchField: "div[aria-expanded='false'] div:nth-child(2)",
  searchInput: "#destination_form_field",
  destinationSelected:
    "button[data-stid='destination_form_field-menu-trigger']",
  datesSelected: "button[data-name='date_form_field']",
  submitButton: "#submit_button",
  getAppButton: "#submitBtn",
};
describe("Hotels Search", () => {
  it("should open the main url and verify the title", async () => {
    browser.url("https://www.hotels.com/");
    expect(browser).toHaveTitle(
      "Hotels.com - Deals & Discounts for Hotel Reservations from Luxury Hotels to Budget Accommodations"
    );
  });

  it("should search for a destination and verify the search text value", async () => {
    await browser.waitUntil(
      async () => await (await $(selectors.searchField)).isDisplayed()
    );
    await $(selectors.searchField).click();
    await $(selectors.searchInput).setValue("Madrid");
    await browser.keys("Enter");
    await $(selectors.destinationSelected).getText();
    console.log(await $(selectors.destinationSelected).getText());
    await $(selectors.datesSelected).getText();
    await $(selectors.submitButton).click();
    await browser.pause(8000);
  });
  it("Validate if search and get the app buttons exists on homagepage", async () => {
    await $(selectors.submitButton).isExisting();
    await $(selectors.getAppButton).isExisting();
  });
});
