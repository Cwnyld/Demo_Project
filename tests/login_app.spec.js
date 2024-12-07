const { test, expect } = require('@playwright/test');
const LoginPage = require("../page-object/loginPage");

test.describe('Login Automation', () => {

  test.beforeEach(async ({page}) => {

    const login = new LoginPage(page);
      await login.navigate();
      await login.loginToApplication();
  });

  test('Test Case - 1', async ({ page }) => {

    const test1 = new LoginPage(page);
     await test1.TestCase1();
     await expect(test1.TASK_TC1).toBeVisible();

    const texts = ['Feature', 'High Priority']
  
  for(let i = 0; i < texts.length; i++) {
    const element = await test1.CHILDREN_TC1.nth(i)
    await expect(element).toHaveText(texts[i]);
    await expect(element).toBeVisible();
    };

  });
  
  test('Test Case - 2', async ({ page })  => {

    const test2 = new LoginPage(page)
    await test2.TestCase2()
   
  });

    
 test('Test Case - 3', async ({ page })  => { 

  const test3 = new LoginPage(page)
  await test3.TestCase3()

  });
  
  test('Test Case - 4', async ({ page })  =>  {

    const test4 = new LoginPage(page)
    await test4.TestCase4()
  
  });

  test('Test Case - 5', async({page}) => {

    const test5 = new LoginPage(page)
    await test5.TestCase5()
   
    const texts = ['Feature', 'High Priority'];
  
  for(let i = 0; i < texts.length; i++) {
    const element = await test5.ELEMENT_TC5.nth(i);
    await expect(element).toHaveText(texts[i]);
    await expect(element).toBeVisible();
    }
  });

  test('Test Case - 6', async ({ page })  => {

    const test6 = new LoginPage(page)
    await test6.TestCase6()
  
  });
});


