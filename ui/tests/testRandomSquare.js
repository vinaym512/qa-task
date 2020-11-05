const { Selector } = require("testcafe")

fixture`test square of a random number`

test('find square of random number of a given number', async t => {
    await t
        .navigateTo('http://localhost:3000/')
        .expect(Selector('.side-menu').exists).ok()
        .click('[href="random-square"]')
        .typeText('input#sqrBox', '12556789')
        .click('button#fibCalc')
        .expect(Selector('#output').exists).ok()
        .expect(Selector('#output').withText('Random square of 12556789 is 811359570025').exists).ok()

})

test('find square of random number of a given invalid number', async t => {
    await t
        .navigateTo('http://localhost:3000/')
        .expect(Selector('.side-menu').exists).ok()
        .click('[href="random-square"]')
        .typeText('input#sqrBox', '0')
        .click('button#fibCalc')
        .expect(Selector('#output').exists).ok()
        .expect(Selector('#output').withText('Random square of 0 is Not Supported').exists).ok()

})