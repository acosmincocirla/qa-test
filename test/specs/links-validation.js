const selectors = {
  priceOff : 'li:nth-of-type(1) > .uitk-typelist-item-child',
}
describe("Homepage text and links validations", () => {
  it("should open the homepage and check for some text validation", async () => {
    browser.url("https://www.hotels.com/");
    expect(browser).toHaveTitle(
      "Hotels.com - Deals & Discounts for Hotel Reservations from Luxury Hotels to Budget Accommodations"
    );
    //const priceOff = await $("li:nth-of-type(1) > .uitk-typelist-item-child");
    await expect(priceOff).toHaveText(
      "Get instant access to better pricing — an extra 10% off"
    );
    const earnReward = await $("li:nth-of-type(2) > .uitk-typelist-item-child");
    await expect(earnReward).toHaveText(
      "Earn 1 reward night* for every 10 nights you stay"
    );
    const searchBookSave = await $(
      "li:nth-of-type(3) > .uitk-typelist-item-child"
    );
    await expect(searchBookSave).toHaveText("Search, book, and save on the go");
  });
  it("should open the homepage and check for some link validation", async () => {
    browser.url("https://www.hotels.com/");
    const learnAbout = await $(
      'a[href="https://www.hotels.com/hotel-rewards-pillar/hotelscomrewards.html"]'
    );
    await expect(learnAbout).toExist();
    const signUp = await $(
      'a[href="https://www.hotels.com/profile/signup.html"]'
    );
    await expect(signUp).toExist();
    const signIn = await $(
      'a[href="https://www.hotels.com/profile/signin.html"]'
    );
    await expect(signIn).toExist();
  });
});
