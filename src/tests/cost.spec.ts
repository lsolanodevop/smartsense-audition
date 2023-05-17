import test from '../utils/fixtures';
import Parking from '../utils/parking';

test.describe('Tests to validate the date & time',async () => {
    test.beforeEach(async ({page, mainPage}) => {
        await page.goto('https://www.shino.de/parkcalc/index.php');
    });

    test('SMAR-15: Validate Valet Parking Cost Calculation - Case 1',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '01:00', 'PM', '05/15/2023', '06:00', 'PM');
        await mainPage.verifyDropdownValue('Valet');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 12.00');
    }); 
    test('SMAR-16: Validate Valet Parking Cost Calculation - Case 2',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '01:00', 'PM', '05/16/2023', '01:00', 'PM');
        await mainPage.verifyDropdownValue('Valet');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 18.00');
    }); 
    test('SMAR-17: Validate Valet Parking Cost Calculation - Case 3',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '01:00', 'PM', '05/17/2023', '01:00', 'PM');
        await mainPage.verifyDropdownValue('Valet');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 36.00');
    }); 
    test('SMAR-18: Validate Short-Term Parking Cost Calculation - Case 1',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '10:00', 'AM', '05/15/2023', '11:30', 'AM');
        await mainPage.verifyDropdownValue('Short');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 3.00');
    }); 
    test('SMAR-19: Validate Short-Term Parking Cost Calculation - Case 2',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '01:00', 'PM', '05/15/2023', '03:30', 'PM');
        await mainPage.verifyDropdownValue('Short');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 5.00');
    }); 
    test('SMAR-20: Validate Short-Term Parking Cost Calculation - Case 3',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '08:30', 'AM', '05/15/2023', '01:30', 'PM');
        await mainPage.verifyDropdownValue('Short');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 10.00');
    }); 
    test('SMAR-21: Validate Short-Term Parking Cost Calculation - Case 4',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '04:00', 'PM', '05/16/2023', '10:00', 'AM');
        await mainPage.verifyDropdownValue('Short');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 24.00');
    }); 
    test('SMAR-22: Validate Long-Term Garage Parking Cost Calculation - Case 1',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '10:00', 'AM', '05/15/2023', '11:00', 'AM');
        await mainPage.verifyDropdownValue('Long-Garage');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 2.00');
    }); 
    test('SMAR-23: Validate Long-Term Garage Parking Cost Calculation - Case 2',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '01:00', 'PM', '05/15/2023', '03:30', 'PM');
        await mainPage.verifyDropdownValue('Long-Garage');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 6.00');
    }); 
    test('SMAR-24: Validate Long-Term Garage Parking Cost Calculation - Case 3',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '08:30', 'AM', '05/17/2023', '01:30', 'PM');
        await mainPage.verifyDropdownValue('Long-Garage');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 34.00');
    }); 
    test('SMAR-25: Validate Long-Term Garage Parking Cost Calculation - Case 4',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '04:00', 'PM', '05/22/2023', '10:00', 'AM');
        await mainPage.verifyDropdownValue('Long-Garage');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 72.00');
    }); 
    test('SMAR-26: Validate Long-Term Surface Parking (North Lot) Cost Calculation - Case 1',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '10:00', 'AM', '05/15/2023', '11:00', 'AM');
        await mainPage.verifyDropdownValue('Long-Surface');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 2.00');
    }); 
    test('SMAR-27: Validate Long-Term Surface Parking (North Lot) Cost Calculation - Case 2',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '01:00', 'PM', '05/15/2023', '03:30', 'PM');
        await mainPage.verifyDropdownValue('Long-Surface');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 6.00');
    }); 
    test('SMAR-28: Validate Long-Term Surface Parking (North Lot) Cost Calculation - Case 3',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '08:30', 'AM', '05/16/2023', '01:30', 'PM');
        await mainPage.verifyDropdownValue('Long-Surface');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 20.00');
    }); 
    test('SMAR-29: Validate Long-Term Surface Parking (North Lot) Cost Calculation - Case 4',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '04:00', 'PM', '05/22/2023', '10:00', 'AM');
        await mainPage.verifyDropdownValue('Long-Surface');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 60.00');
    }); 
    test('SMAR-30: Validate Economy Lot Parking  Cost Calculation - Case 1',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '10:00', 'AM', '05/15/2023', '11:00', 'AM');
        await mainPage.verifyDropdownValue('Economy');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 2.00');
    }); 
    test('SMAR-31: Validate Economy Lot Parking  Cost Calculation - Case 2',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '08:30', 'AM', '05/15/2023', '01:30', 'PM');
        await mainPage.verifyDropdownValue('Economy');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 9.00');
    }); 
    test('SMAR-32: Validate Economy Lot Parking  Cost Calculation - Case 3',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '08:30', 'AM', '05/17/2023', '01:30', 'PM');
        await mainPage.verifyDropdownValue('Economy');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 27.00');
    }); 
    test('SMAR-33: Validate Economy Lot Parking  Cost Calculation - Case 4',async ({
        mainPage,
    }) => {
        const parking = new Parking('05/15/2023', '04:00', 'PM', '05/16/2023', '10:00', 'AM');
        await mainPage.verifyDropdownValue('Economy');
        await mainPage.insertData(parking);
        await mainPage.checkValidCost('$ 9.00');
    }); 
});