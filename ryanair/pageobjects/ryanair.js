const {expect, browser, $ } = require('@wdio/globals');
const moment = require('moment');

class ryanAir {
    constructor() {
       this.url = 'https://www.ryanair.com/gb/en'
       this.firstPassenger = {
        firstName: "Shiva", 
        lastName: "Sundar"
       }
       this.secondPassenger = {
        firstName: "Malathy",
        lastName: "SG"
       }
       this.currentMonth = moment().format('MMM')
       this.currentDay = moment().format('DD')
       this.currentDate = moment().format('YYYY-MM-DD')
    }

    get acceptCookiesButton() {return $("//button[text()='Yes, I agree']")}
    get oneWayButton() {return $("//ry-radio-button[@data-ref='flight-search-trip-type__one-way-trip']")}
    get boardingField() {return $("//input[@id='input-button__departure']")}
    get germanyDeparture() {return $("//span[text()=' Germany ']")}
    get frankfurtHahnDeparture() {return $("//span[text()=' Frankfurt Hahn ']")}
    get destinationField() {return $("//input[@id='input-button__destination']")}
    get spainDesitnation() {return $("//span[text()=' Spain ']")}
    get barcelonaDestination() {return $("//span[text()=' Barcelona ']")}
    get mayMonth() {return $(`//div[@data-id='May']`)}
    get seventeenDate() {return $(`//div[@data-id='2025-05-17']`)}
    get increaseAdultCounterButton() {return $("//ry-counter-button[@aria-label='1Adults+1']/..")}
    get doneButton() {return $("//button[text()=' Done ']")}
    get searchFlightButton() {return $("//button[@data-ref='flight-search-widget__cta']")}
    get selectFlightButton() {return $("//button[text()=' Select ']")}
    get regularFareSelectButton() {return $("//th[@data-e2e='fare-card-regular']/div")}
    get loginLaterButton() {return $("//span[text()='Log in later']/../../..//button[@class='login-touchpoint__expansion-bar']")}
    get firstPassengerTitleDropdown() {return $("//span[text()=' Passenger 1 ']/../../..//ry-dropdown/div/button")}
    get secondPassengerTitleDropdown() {return $("//span[text()=' Passenger 2 ']/../../..//ry-dropdown/div/button")}
    get MrDropdownItem() {return $("//div[text()=' Mr ']/../../../button")}
    get MrsDropdownItem() {return $("//div[text()=' Mrs ']/../../../button")}
    get firstPassengerFirstName() {return $("//input[@id='form.passengers.ADT-0.name']")}
    get firstPassengerLastName() {return $("//input[@id='form.passengers.ADT-0.surname']")}
    get secondPassengerFirstName() {return $("//input[@id='form.passengers.ADT-1.name']")}
    get secondPassengerLastName() {return $("//input[@id='form.passengers.ADT-1.surname']")}
    get continueButton() {return $("//button[text()=' Continue ']")}
    get seat04F() {return $("//button[@id='seat-04F']")}
    get seat04E() {return $("//button[@id='seat-04E']")}
    get noThanksButton() {return $("//button[text()=' No, thanks ']")}
    get selectAllPassengersButton() {return $("//bags-table-row-cta/span[@data-ref='product.CBAG']")}
    get continueBagButton() {return $("//button[@data-ref='bags-continue-button']")}
    get addForAllButton() {return $("//button[text()=' Add for all ']")}
    get addStandardInsuranceButton() {return $("//button[text()=' Agree and add ' and @data-ref='insurance-main-card__button__RYAN31']")}
    get continueInsuranceButton() {return $("//button[@class='airport-and-flight__cta ry-button--gradient-yellow ry-button--large']")}
    get continueBookingButton() {return $("//button[@class='transport__cta ry-button--gradient-yellow ry-button--large']")}

    get currentMonthButton() {return $(`//div[@data-id='${this.currentMonth}']`)}
    get currentDateButton() {return $(`//div[@data-id='${this.currentDate}']`)}
   

    async openBrowser() {
        await browser.url(this.url);      
        await browser.maximizeWindow();
        await this.acceptCookiesButton.waitForDisplayed();
        await this.acceptCookiesButton.click();
    }

    async selectBoardingPoint() {
        await this.oneWayButton.click();
        await this.boardingField.waitForDisplayed();
        await this.boardingField.click();
        await this.germanyDeparture.waitForDisplayed();
        await this.germanyDeparture.click();
        await this.frankfurtHahnDeparture.click();        
    }

    async selectDestinationPoint() {
        await this.spainDesitnation.waitForDisplayed();
        await this.spainDesitnation.click();
        await this.barcelonaDestination.click();
    }

    async selectDate() {
        await this.currentMonthButton.waitForDisplayed();
        await this.currentMonthButton.click();

        await this.currentDateButton.waitForDisplayed();
        await this.currentDateButton.click();
    }

    async selectNumberOfPassengers() {
        await this.increaseAdultCounterButton.waitForDisplayed();
        await this.increaseAdultCounterButton.click();
        await this.doneButton.click();
    }

    async searchFlights() {
        await this.searchFlightButton.click();
    }

    async selectFlight() {
        try {
            await this.selectFlightButton.waitForDisplayed();
            await expect(this.selectFlightButton).toBeClickable();
            await this.selectFlightButton.click();
        }
        catch(error) {
            throw new Error('No flights available');
       }
    }

    async selectRegularFare() {
        try {
            await this.regularFareSelectButton.waitForDisplayed();
            await expect(this.regularFareSelectButton).toBeDisplayed();
            await this.regularFareSelectButton.scrollIntoView();
            await this.regularFareSelectButton.click();
        }
        catch(error) {
            throw new Error('Regulare Fare Button not displayed!');
       }
    }

    async clickLoginLater() {
        await this.loginLaterButton.waitForDisplayed();
        await this.loginLaterButton.scrollIntoView();
        await this.loginLaterButton.click();
    }

    async enterFirstPassengerDetails() {
       try {
            await this.firstPassengerTitleDropdown.waitForDisplayed();
            await this.firstPassengerTitleDropdown.click();
            await this.MrDropdownItem.click();
            await this.firstPassengerFirstName.setValue(this.firstPassenger.firstName);
            await this.firstPassengerLastName.setValue(this.firstPassenger.lastName);

            await expect(this.firstPassengerFirstName).toHaveValue(this.firstPassenger.firstName);
            await expect(this.firstPassengerLastName).toHaveValue(this.firstPassenger.lastName);
       }
       catch(error) {
            throw new Error('First passenger details are incorrect!');
       }
    }

    async enterSecondPassengerDetails() {
        try{ 
            await this.secondPassengerTitleDropdown.click();
            await this.MrsDropdownItem.click();
            await this.secondPassengerFirstName.setValue(this.secondPassenger.firstName);
            await this.secondPassengerLastName.setValue(this.secondPassenger.lastName);

            await expect(this.secondPassengerFirstName).toHaveValue(this.secondPassenger.firstName);
            await expect(this.secondPassengerLastName).toHaveValue(this.secondPassenger.lastName);
        }
        catch(error) {
            throw new Error('Second passenger details are incorrect!');
        }
    }

    async clickContinue() {
        try {
            await expect(this.continueButton).toBeDisplayed();
            await this.continueButton.click();
        }
        catch(error) {
            throw new Error('Continue Button not displayed!');
        }
    }

    async selectSeats() {
        try {
            await this.seat04F.waitForDisplayed();
            await this.seat04F.scrollIntoView();
            await expect(this.seat04E).toBeClickable();
            await expect(this.seat04F).toBeClickable();
            await this.seat04F.click();
            await this.seat04E.click();
            await this.continueButton.click();

            await this.noThanksButton.click();
        }
        
        catch(error) {
            throw new Error('Selected seats are not available!');
        }
    }

    async selectBagOptions() {
        await this.continueBagButton.waitForDisplayed();

        await this.continueBagButton.scrollIntoView();
        await this.continueBagButton.click();
    }

    async selectStandardInsurance() {
        await this.addForAllButton.waitForDisplayed();
        await this.addForAllButton.click();

        await this.addStandardInsuranceButton.scrollIntoView();
        await this.addStandardInsuranceButton.click();

        await this.continueInsuranceButton.scrollIntoView();
        await this.continueInsuranceButton.click();
    }

    async confirmBooking() {
        await this.continueBookingButton.waitForDisplayed();
        await this.continueBookingButton.scrollIntoView();
        await this.continueBookingButton.click();
    }
}

export default new ryanAir();
