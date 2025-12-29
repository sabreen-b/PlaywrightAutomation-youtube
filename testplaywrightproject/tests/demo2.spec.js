const{test,expect}=require('@playwright/test')

test('1st assertion test',async({page})=>{
    expect(125).toBe(125)
})

test.only('2nd assertion test',async({page})=>{
    expect(100).toBeGreaterThan(10)
})