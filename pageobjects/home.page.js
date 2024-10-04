class Homepage {
    get fromField() {return $("//div[@class='sc-htoDjs kyqvCq']/label[text()='From']/../input")}

    get toField() {return $("//div[@class='sc-htoDjs kyqvCq']/label[text()='To']/../input")}

    get dateField() {return $("//span[@class='dateText']")}

    get searchButton() {return $("//button[text()='SEARCH BUSES']")}

    get viewSeatButton() {return $("//div[text()='View Seats'][1]")}

    get seatCanvas() {return $("//canvas[@data-type='lower']")}

    get boardingPoint() {return $("//span[text()='Yeshwantpur']/../../../div[@class='radio-css ']")}

    get droppingPoint() {return $("//span[text()='Kasaragod New Bus Stand Building']/../../../div[@class='radio-css ']")}

    get continueButton() {return $("//button[text()='continue']")}

    get proceedButton() {return $("//button[text()='Proceed to book']")}

    get nameField() {return $("//input[@placeholder='Name']")}

    get maleRadioButton() {return $("//input[@value='Male']/../div")}

    get ageField() {return $("//input[@placeholder='Age']")}

    get residenceField() {return $("//input[@id='201']")}

    get emailField() {return $("//input[@placeholder='Email ID']")}

    get phoneField() {return $("//input[@placeholder='Phone']")}

    get noAssuranceButton() {return $("//input[@value='no']/../span[@class='checkmark-radio']")}

    get proceedToPayButton() {return $("//input[@value='Proceed to pay']")}

    async openBrowser() {
        await browser.url("https://www.redbus.in/");      
        await browser.maximizeWindow();
    }

    async setFromField() {
        await this.fromField.setValue("Bangalore");  
        const boardingStation = await $("//text[@class='placeHolderMainText' and text()='Bangalore']")
        await boardingStation.waitForDisplayed({timeout: 5000});
        await boardingStation.click();
        await browser.pause(3000); 
    }

    async setToField() {
        await this.toField.setValue("Kasaragod");
        
        const destinationStation = await $("//text[@class='placeHolderMainText' and text()='Kasaragod']")
        await destinationStation.waitForDisplayed({timeout: 5000});
        await destinationStation.click();
        await browser.pause(3000); 
    }

    async selectDate() {
        await this.dateField.click();
        await browser.pause(1000);
        await this.dateField.click();
    
        const targetMonth = 'Oct';
        const targetYear = '2024';
        const targetDate = '10';
    
        const calendarHeader = await $("//div[@class='DayNavigator__CalendarHeader-qj8jdz-1 fxvMrr']//div[2]");
        
        await calendarHeader.waitForDisplayed({ timeout: 5000 });
        
        while (true) {
            const calenderText = await calendarHeader.getText();
            const [monthYear] = calenderText.split('\n').filter(line=> line.trim()!=='')
            const[mon, yr]=monthYear.trim().split(' ')
    
            console.log(`Month: ${mon}, Year: ${yr}`)
    
            if (mon === targetMonth && yr === targetYear) {
                break;  
            } else {
                await browser.$("//div[@class='DayNavigator__CalendarHeader-qj8jdz-1 fxvMrr']//div[3]//*[name()='svg']").click();
            }
        }
    
        await browser.$(`//span[text()='${targetDate}']`).click()
        await browser.pause(3000); 
    }

    async searchBuses() {   
        await this.searchButton.click();
    }

    async viewSeats() {
        await this.viewSeatButton.click();
    }

    async selectSeats(x,y) {
        await browser.pause(4000);
    
        await this.seatCanvas.moveTo()
        await this.seatCanvas.waitForDisplayed(); 
        await browser.execute((xCoord, yCoord) => {
            const canvas = document.querySelector('canvas[data-type="lower"]');
            console.log(canvas);

            const rect = canvas.getBoundingClientRect();
            const clickEvent = new MouseEvent('click', {
                clientX: rect.left + xCoord,
                clientY: rect.top + yCoord,
                view: window
            });
            canvas.dispatchEvent(clickEvent);
        }, x, y);  
    }

    async selectBoardingPoint() {
        // await this.boardingPoint.scrollIntoView();
        await this.boardingPoint.click();
    }

    async selectDroppingPoint() {
        //await this.droppingPoint.scrollIntoView();
        await this.droppingPoint.click();
        await this.proceedButton.waitForDisplayed();
        await this.proceedButton.click();
    }

    async enterDetails() {
        await this.nameField.setValue("Shiva Sundar R")
        await this.maleRadioButton.click();
        await this.ageField.setValue("22");
        await this.residenceField.setValue("Kerala");

        const keralaButton = await $("//li[@value='Kerala']");
        await keralaButton.click();
        await this.emailField.setValue("shivasundar911@gmail.com")
        await this.phoneField.setValue("8089715069")

        await this.noAssuranceButton.click();
        await this.proceedToPayButton.click();
    }
}

export default new Homepage();