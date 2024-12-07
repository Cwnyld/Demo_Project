const testdata = JSON.parse(JSON.stringify(require('../testData/login.json')));

class LoginPage {

  constructor(page) {

    this.page=page
    this.USERNAME_INPUT='#username';
    this.PASSWORD_INPUT='#password';
    this.LOGIN_BUTTON='[type="submit"]';
  }

  async navigate() {
    await this.page.goto(testdata.url)
  }
  
  async loginToApplication() {

    await this.page.locator(this.USERNAME_INPUT).fill(testdata.username);
    await this.page.locator(this.PASSWORD_INPUT).fill(testdata.password);
    await this.page.locator(this.LOGIN_BUTTON).click()
  
  }
}
module.exports = LoginPage;
