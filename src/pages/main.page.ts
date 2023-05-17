import {expect, Locator, Page} from "@playwright/test";
import Wrapper from "../base/Wrapper";

export default class MainPage extends Wrapper {
    readonly parkingDropdown: Locator;
    readonly entryDate: Locator;
    readonly entryTime: Locator;
    readonly entryAM_PM: Locator;
    readonly leavingDate: Locator;
    readonly leavingTime: Locator;
    readonly leavingAM_PM: Locator;
    readonly parkingCost: Locator;
    readonly calculateButton: Locator;

    constructor(public page: Page){
        super(page);
        this.page = page;
    }
}