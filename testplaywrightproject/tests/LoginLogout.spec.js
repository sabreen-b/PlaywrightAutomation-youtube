const{test,expect}=require('@playwright/test')

test('Login to HRM application', async({page})=>{
    await page.goto("  ")
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[placeholder='Username']").fill('Admin')
await page.locator("input[placeholder='Password']").fill('admin123')
await page.locator("button[type='submit']").click()
await page.waitForTimeout(9000)

})

test('Logout HRM',async({page})=>{
   // await expect(page).toHaveURL(/dashboard/);
    await page.locator("//p[@class='oxd-userdropdown-name']").click()
    await page.locator("//a[normalize-space()='Logout']").click()
})