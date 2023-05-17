import {expect, Locator, Page} from "@playwright/test";
import Wrapper from "../base/Wrapper";
import { areSetsEqual } from '../utils/utils';
import Parking from "../utils/parking";

export default class MainPage extends Wrapper {
    readonly parkingDropdown: Locator;
    readonly entryDate: Locator;
    readonly entryTime: Locator;
    readonly entryAM: Locator;
    readonly entryPM: Locator;
    readonly leavingDate: Locator;
    readonly leavingTime: Locator;
    readonly leavingAM: Locator;
    readonly leavingPM: Locator;
    readonly parkingCost: Locator;
    readonly calculateButton: Locator;
    readonly dropdownValues: string[] = ["Valet Parking","Short-Term Parking","Economy Parking","Long-Term Garage Parking","Long-Term Surface Parking"]

    constructor(public page: Page){
        super(page);
        this.page = page;
        this.parkingDropdown = page.locator('#ParkingLot');
        this.entryDate = page.locator('#StartingDate');
        this.entryTime = page.locator('#StartingTime');
        this.entryAM = page.getByRole('radio').first();
        this.entryPM = page.getByRole('radio').nth(1);
        this.leavingDate = page.locator('#LeavingDate');
        this.leavingTime = page.locator('#LeavingTime');
        this.leavingAM = page.getByRole('radio').nth(2);
        this.leavingPM = page.getByRole('radio').nth(3);
        this.calculateButton = page.getByRole('button', { name: 'Calculate' });
    }
    //SMAR-1
    async verifyAllDropdownValues(){
        const values = await this.parkingDropdown.locator('option').all();

        const optionsValues: string[] = (await Promise.all(
            values.map(element => element.textContent())
        )).filter((text): text is string => text !== null);
    
        const setExpectedValues = new Set(this.dropdownValues);
        const setOptionsValues = new Set(optionsValues);

        expect(areSetsEqual(setExpectedValues, setOptionsValues),'The correct values are present').toBe(true);
    }
    //SMAR-2 TO SMAR-6
    async verifyDropdownValue(value:string){
        const valueMap: Record<string, string> = {
            'Long-Garage': 'Long-Term Garage Parking',
            'Long-Surface': 'Long-Term Surface Parking',
        };

        await this.parkingDropdown.selectOption({value: value});

        const actualSelectedText = await this.parkingDropdown.evaluate(
            (element) => (element as HTMLSelectElement).selectedOptions[0]?.textContent || ''
        );

        const expectedValue = valueMap[value] || value;

        expect(actualSelectedText, `The selected option should contain ${value}`).toContain(expectedValue);
    }

    async insertData(ticket: Parking) {
        const { entryDate, entryTime, entryAMPM, leavingDate, leavingTime, leavingAMPM } = ticket;
    
        await this.entryDate.fill(entryDate ?? '');
        await this.entryTime.fill(entryTime ?? '');
    
        switch (entryAMPM) {
            case 'AM':
                await this.entryAM.check();
                break;
            case 'PM':
                await this.entryPM.check();
                break;
        }
    
        await this.leavingDate.fill(leavingDate ?? '');
        await this.leavingTime.fill(leavingTime ?? '');
    
        switch (leavingAMPM) {
            case 'AM':
                await this.leavingAM.check();
                break;
            case 'PM':
                await this.leavingPM.check();
                break;
        }
        await this.calculateButton.click();
    }
    
    //SMAR-7 / SMAR-14 TO SMAR-33 It is not optimal but it kinda works
    async checkValidCost(priceToPay){
        const parking = await this.page.getByText(priceToPay);
        const amountToPayTimeSpent = await parking.textContent();
        expect(amountToPayTimeSpent,'The amount should be the same').toContain(priceToPay);
    }
}