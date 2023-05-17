import test from '../utils/fixtures';

test.describe('Verify dropdown values', () => {
    test.beforeEach(async ({page, mainPage}) => {
        await page.goto('https://www.shino.de/parkcalc/index.php');
    });

    test('SMAR-1: Verify all parking lot options are displayed',async ({
        mainPage,
    }) => {
        await mainPage.verifyAllDropdownValues();
    });
    
    test('SMAR-2: Verify user can select "Valet Parking"',async ({
        mainPage,
    }) => {
        await mainPage.verifyDropdownValue('Valet');
    });
    
    test('SMAR-3: Verify user can select "Short-Term (hourly) Parking"',async ({
        mainPage,
    }) => {
        await mainPage.verifyDropdownValue('Short');
    });
    
    test('SMAR-4: Verify user can select "Long-Term Garage Parking"',async ({
        mainPage,
    }) => {
        await mainPage.verifyDropdownValue('Long-Garage');
    });
    
    test('SMAR-5: Verify user can select "Long-Term Surface Parking (North Lot)"',async ({
        mainPage,
    }) => {
        await mainPage.verifyDropdownValue('Long-Surface');
    });
    
    test('SMAR-6: Verify user can select "Economy Lot Parking"',async ({
        mainPage,
    }) => {
        await mainPage.verifyDropdownValue('Economy');
    });
});
