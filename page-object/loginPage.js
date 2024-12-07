const { expect } = require('@playwright/test');

const testdata = JSON.parse(JSON.stringify(require('../testData/login.json')));

class LoginPage {

  constructor(page) {

    this.page=page
    this.USERNAME_INPUT ='#username';
    this.PASSWORD_INPUT ='#password';
    this.LOGIN_BUTTON ='[type="submit"]';

   
    this.TODO_COLUMN_TC1 = page.locator('text="To Do"').locator('..').filter({ hasText: "To Do" });
    this.TASK_TC1 = this.TODO_COLUMN_TC1.locator('text="Implement user authentication"')
    .filter({ hasText: "Implement user authentication"});

    this.PARENT_TC1 = page.locator('div div.flex-wrap').nth(0);
    this.CHILDREN_TC1 = this.PARENT_TC1.locator('>*');

    this.TODO_COLUMN_TC2 = page.locator('text="To Do"').locator('..').filter({ hasText: "To Do" });
    this.TASK_TC2 = this.TODO_COLUMN_TC2.locator('text="Fix navigation bug"')
    .filter({ hasText: "Fix navigation bug"});
    this.BUG = page.locator('text="Bug"')

    this.PROGRESS_COLUMN_TC3 = page.locator('text="In Progress"').locator('..');
    this.TASK_TC3 = this.PROGRESS_COLUMN_TC3.locator('text="Design system updates"');
    this.DESIGN = page.locator('text="Design"')

    this.MOBILE_APP_TC4 = page.locator('text="Mobile Application"')
    this.TODO_COLUMN_TC4 = page.locator('text="To Do"').locator('..');
    this.TASK_TC4 = this.TODO_COLUMN_TC4.locator('text="Push notification system"');
    this.FEATURE_TC4 = page.locator('div span.px-2').nth(0)

    this.TASK_TC5 = this.PROGRESS_COLUMN_TC3.locator('text="Offline mode"')
    this.EL_TC5 = page.locator('div div.flex-wrap').nth(1);
    this.ELEMENT_TC5 = this.EL_TC5.locator('>*')

    this.PROGRESS_COLUMN_TC6 = page.locator('text="Done"').locator('..')
    .filter({ hasText: "Done" });
    this.TASK_TC6 = this.PROGRESS_COLUMN_TC6.locator('text="App icon design"')
    .filter({ hasText: "App icon design" });

  }

  async TestCase1() {
    await this.page.locator(this.TODO_COLUMN_TC1)
    await this.page.locator(this.TASK_TC1)
    await this.page.locator(this.PARENT_TC1) //toBeVisible()
    await this.page.locator(this.CHILDREN_TC1)
  }

  async TestCase2() {
    await this.TODO_COLUMN_TC2.locator(this.TODO_COLUMN_TC2)
    await this.TASK_TC2.locator(this.TASK_TC2)
    //await this.BUG.locator(this.BUG)
    await expect(this.BUG).toBeVisible()
  }

  async TestCase3() {
    await this.PROGRESS_COLUMN_TC3
    await expect(this.TASK_TC3).toBeVisible()
    await expect(this.DESIGN).toBeVisible()
  }

  async TestCase4() {
    await this.MOBILE_APP_TC4.click()
    await expect(this.TODO_COLUMN_TC4).toBeVisible()
    await this.TASK_TC4
    await expect(this.FEATURE_TC4).toBeVisible()
  }

  async TestCase5() {
    await this.MOBILE_APP_TC4.click()
    await this.PROGRESS_COLUMN_TC3
    await expect(this.TASK_TC5).toBeVisible()
    await this.EL_TC5
    await this.ELEMENT_TC5
  }

  async TestCase6() {
    await this.MOBILE_APP_TC4.click()
    await this.PROGRESS_COLUMN_TC6
    await expect(this.TASK_TC6).toBeVisible()
    await expect(this.DESIGN).toBeVisible()
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
