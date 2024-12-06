class LoginPage {

  constructor(page) {

    this.page=page
    this.USERNAME_INPUT='#username';
    this.PASSWORD_INPUT='#password';
    this.LOGIN_BUTTON='[type="submit"]';
   // this.URL='https://animated-gingersnap-8cf7f2.netlify.app/';
  }

  async navigate(url) {
    await this.page.goto(this.url)
  }
  
  async loginToApplication() {

    await this.page.locator(this.USERNAME_INPUT).fill(username);
    await this.page.locator(this.PASSWORD_INPUT).fill(password);
    await this.page.locator(this.LOGIN_BUTTON).click()
  
  }
}
module.exports = LoginPage;
