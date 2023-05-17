import test from '../utils/fixtures';
import Parking from '../utils/parking';

test.describe('Tests to validate the date & time',async () => {
    test.beforeEach(async ({page, mainPage}) => {
        await page.goto('https://www.shino.de/parkcalc/index.php');
    });

    test('SMAR-7: Test with correct data',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '12:00', 'PM', '05/16/2023', '12:00', 'PM');
        await mainPage.verifyDropdownValue('Long-Garage');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 12.00');
    }); 
});