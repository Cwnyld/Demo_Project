const { test, expect } = require('@playwright/test');
const LoginPage = require("../page-object/loginPage");

test.describe('Login Automation', () => {

  test.beforeEach(async ({page}) => {

    const login = new LoginPage(page);
      login.navigate();
      login.loginToApplication();
  });


  test('Test Case - 1', async ({ page }) => {

    const todoColumn = page.locator('text="To Do"').locator('..').filter({ hasText: "To Do" });
    const task = todoColumn.locator('text="Implement user authentication"').filter({ hasText: "Implement user authentication"});
    await expect(task).toBeVisible();

    const parent = page.locator('div div.flex-wrap').nth(0);
    const children = parent.locator('>*');
    const texts = ['Feature', 'High Priority']
  
  for(let i = 0; i < texts.length; i++) {
    const element = await children.nth(i)
    await expect(element).toHaveText(texts[i]);
    await expect(element).toBeVisible();
    };

  });
  
  test('Test Case - 2', async ({ page })  => {

    const todoColumn = page.locator('text="To Do"').locator('..').filter({ hasText: "To Do" });
    const task = todoColumn.locator('text="Fix navigation bug"').filter({ hasText: "Fix navigation bug"});
    await expect(task).toBeVisible();

    const bug = ['Bug'];
    await expect(page.locator('div span.px-2').getByText(bug)).toBeVisible();

  });

    
 test('Test Case - 3', async ({ page })  => { 

    const progressColumn = page.locator('text="In Progress"').locator('..');
    const task = progressColumn.locator('text="Design system updates"');
    await expect(task).toBeVisible();

    const design = ['Design']
    await expect(page.locator('div span.px-2').getByText(design)).toBeVisible();

  });
  

  test('Test Case - 4', async ({ page })  =>  {

    const mobileApp = await page.locator('nav button').getByText('Mobile Application')
    await mobileApp.click()

    const toDoColumn = page.locator('text="To Do"').locator('..');
    const task = toDoColumn.locator('text="Push notification system"');
    await expect(task).toBeVisible();

    await expect(page.locator('div span.px-2').nth(0)).toBeVisible();

  });

   test('Test Case - 5', async({page}) => {

    const mobileApp =  await page.locator('nav button').getByText('Mobile Application')
    await mobileApp.click()

    const progressColumn = page.locator('text="In Progress"').locator('..').filter({ hasText: "In Progress" });
    const task = progressColumn.locator('text="Offline mode"').filter({ hasText: "Offline mode" });
    await expect(task).toBeVisible();

    const parent = page.locator('div div.flex-wrap').nth(1);
    const children = parent.locator('>*');
    const texts = ['Feature', 'High Priority'];
  
  for(let i = 0; i < texts.length; i++) {
    const element = await children.nth(i);
    await expect(element).toHaveText(texts[i]);
    await expect(element).toBeVisible();
    }
  });

   test('Test Case - 6', async ({ page })  => {

    const mobileApp =  await page.locator('nav button').getByText('Mobile Application')
    await mobileApp.click()

    const progressColumn = page.locator('text="Done"').locator('..').filter({ hasText: "Done" });
    const task = progressColumn.locator('text="App icon design"').filter({ hasText: "App icon design" });
    await expect(task).toBeVisible();

    const design = ['Design']
    await expect(page.locator('div span.px-2').getByText(design)).toBeVisible();

  });
});


