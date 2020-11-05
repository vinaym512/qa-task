const { Selector } = require("testcafe")

fixture`test factorial of a number`

test('find factorial of a given number', async t => {
    await t
        .navigateTo('http://localhost:3000/')
        .expect(Selector('.side-menu').exists).ok()
        .click('[href="factorial"]')
        .typeText('input#factBox', '5')
        .click('button#factCalc')
        .expect(Selector('#output').exists).ok()
        .expect(Selector('#output').withText('Factorial of 5 is 120').exists).ok()

})

test('find factorial of a given invalid number', async t => {
    await t
        .navigateTo('http://localhost:3000/')
        .expect(Selector('.side-menu').exists).ok()
        .click('[href="factorial"]')
        .typeText('input#factBox', '11')
        .click('button#factCalc')
        .expect(Selector('#output').exists).ok()
        .expect(Selector('#output').withText('Factorial of 11 is Not supported').exists).ok()

})