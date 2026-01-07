const{test,expect}=require('@playwright/test')

test.beforeEach(async()=>{
console.log('before each')
})

test.afterEach(async()=>{
console.log('after each')
})

test('1st test', async({page})=> {
    console.log('1st test')
})
test('2nd test', async({page})=> {
    console.log('2nd test')
})

test('3rd test', async({page})=> {
    console.log('3rd test')
})
test('4th test', async({page})=> {
    console.log('4th test')
})