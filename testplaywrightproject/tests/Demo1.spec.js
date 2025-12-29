const { test, expect } = require('@playwright/test');

// traditional function
test('1st playwright test', async function display({ page }) {
  console.log("Running 1st playwright test using traditional function");
});

// anonymous function
test('2nd playwright test', async function ({ page }) {
  console.log("Running 2nd playwright test using anonymous function");
});

// arrow function
test('3rd playwright test', async ({ page }) => {
  console.log("Running 3rd playwright test using arrow function");
});
