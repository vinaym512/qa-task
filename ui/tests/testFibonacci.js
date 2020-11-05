const { Selector } = require("testcafe")

fixture`test fibonacci of a number`

test('find fibonacci of a given number', async t => {
    await t
        .navigateTo('http://localhost:3000/')
        .expect(Selector('.side-menu').exists).ok()
        .click('[href="fibonacci"]')
        .typeText('input#fibBox', '5')
        .click('button#fibCalc')
        .expect(Selector('#output').exists).ok()
        .expect(Selector('#output').withText('Fibonacci number at position 5 is 5').exists).ok()

})

test('find fibonacci of a given invalid number', async t => {
    await t
        .navigateTo('http://localhost:3000/')
        .expect(Selector('.side-menu').exists).ok()
        .click('[href="fibonacci"]')
        .typeText('input#fibBox', '11')
        .click('button#fibCalc')
        .expect(Selector('#output').exists).ok()
        .expect(Selector('#output').withText('Fibonacci number at position 11 is Not supported').exists).ok()

})