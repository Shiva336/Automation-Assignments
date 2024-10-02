class Homepage {
    get fromField() {return $("//div[@class='sc-htoDjs kyqvCq']/label[text()='From']/../input")}

    get toField() {return $("//div[@class='sc-htoDjs kyqvCq']/label[text()='To']/../input")}

    get dateField() {return $("//span[@class='dateText']")}

    get searchButton() {return $("//button[text()='SEARCH BUSES']")}

    get viewSeatButton() {return $("//div[text()='View Seats'][1]")}

    get seatCanvas() {return $("//canvas")}

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
        const targetDate = '2';
    
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

    async selectSeats() {
        await this.seatCanvas.waitForDisplayed();
        const canvas = await browser.execute(() => {
            const canvas = document.querySelector('canvas');
            if (canvas) {
                return canvas.getBoundingClientRect();
            }
            return null;  
        });

        console.log(canvas)
    
        const xStart = canvas.left;
        const xEnd = canvas.right;
        const yStart = canvas.top;
        const yEnd =canvas.bottom;
    
        for (let x = xStart; x <= xEnd; x += 1) {  
            for (let y = yStart; y <= yEnd; y += 1) {
                await browser.execute((xCoord, yCoord) => {
                    console.log(x,y);
                    const clickEvent = new MouseEvent('click', {
                        clientX: xCoord,
                        clientY: yCoord,
                        bubbles: true,
                        cancelable: true,
                        view: window,
                    });
                    document.dispatchEvent(clickEvent);
                }, x, y);
            }
        }
    }
}

export default new Homepage();