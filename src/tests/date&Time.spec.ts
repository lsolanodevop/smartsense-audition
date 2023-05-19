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

    test('SMAR-8: Scenario with empty date/time input',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '12:00', 'PM', null, null, null);
        await mainPage.verifyDropdownValue('Short');
        await mainPage.insertData(parking);
        await mainPage.checkErrorMessage('Empty');
    }); 
    
    test('SMAR-:9 Test with invalid date format',async ({
        mainPage,
    }) => {
        const parking = new Parking('52/67/207', '12:00', 'PM', '68/16/208', '12:00', 'PM');
        await mainPage.verifyDropdownValue('Long-Surface');
        await mainPage.insertData(parking);
        await mainPage.checkErrorMessage('Invalid');
    }); 
    test('SMAR-10: Test with non-existent dates',async ({
        mainPage,
    }) => {
        const parking = new Parking('02/30/2023', '12:00', 'PM', '02/31/2023', '12:00', 'PM');
        await mainPage.verifyDropdownValue('Economy');
        await mainPage.insertData(parking);
        await mainPage.checkErrorMessage('Non-Existent');
    }); 
    test('SMAR-11: Test with negative or zero values',async ({
        mainPage,
    }) => {
        const parking = new Parking('0/00/0000', '12:00', 'PM', '-1/-1/-1', '12:00', 'PM');
        await mainPage.verifyDropdownValue('Valet');
        await mainPage.insertData(parking);
        await mainPage.checkErrorMessage('Negative');
    }); 
    test('SMAR-12: Test with date and time mismatch',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '12:00', 'PM', '05/10/2023', '12:00', 'PM');
        await mainPage.verifyDropdownValue('Short');
        await mainPage.insertData(parking);
        await mainPage.checkErrorMessage('Mismatch');
    }); 
    test('SMAR-13: Test with alphabetical or special characters',async ({
        mainPage,
    }) => {
        const parking = new Parking('AB/CD/FGHI', 'XD:DX', 'PM', '!@/@#/$%^^', '@@:^^', 'PM');
        await mainPage.verifyDropdownValue('Short');
        await mainPage.insertData(parking);
        await mainPage.checkErrorMessage('Alphabetical');
    }); 
});