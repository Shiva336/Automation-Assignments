const { Given, When, Then } = require('@wdio/cucumber-framework');
const {expect, browser } = require('@wdio/globals')
import ryanAir from '../pageobjects/ryanair';

Given("I am on the home page", async function (){
   await ryanAir.openBrowser();    
   await expect(browser).toHaveUrl('https://www.ryanair.com/gb/en')
   await browser.pause(3000); 
});

When("I select the boarding point", async function (){
   await ryanAir.selectBoardingPoint();
   await browser.pause(3000); 
 });

 When("I select the destination", async function (){
    await ryanAir.selectDestinationPoint();
    await browser.pause(3000); 
  });

  When("I select the date", async function (){
    await ryanAir.selectDate();
    await browser.pause(3000); 
  });

  When("I increase the number of adults", async function (){
    await ryanAir.selectNumberOfPassengers();
    await browser.pause(3000); 
  });

  When("I search for flights", async function (){
    await ryanAir.searchFlights();
    await browser.pause(3000); 
  });

  When("I select the flight", async function (){
    await ryanAir.selectFlight();
    await browser.pause(3000); 
  });

  When("I select regular fare", async function (){
    await ryanAir.selectRegularFare();
    await browser.pause(3000); 
  });

  When("I select log in later", async function (){
    await ryanAir.clickLoginLater();
    await browser.pause(2000); 
  });

  When("I enter details of the first passenger", async function (){
    await ryanAir.enterFirstPassengerDetails();
    await browser.pause(1000); 
  });

  When("I enter details of the second passenger", async function (){
    await ryanAir.enterSecondPassengerDetails();
    await browser.pause(2000); 
  });

  When("I click continue", async function (){
    await ryanAir.clickContinue();
    await browser.pause(4000); 
  });

  When("I select seats and bag options", async function (){
    const currentUrl = await browser.getUrl();
    if(currentUrl.includes("bags")) {
      await ryanAir.selectBagOptions();
      await browser.pause(3000);
      await ryanAir.selectSeats();
    } else {
      await ryanAir.selectSeats();
      await browser.pause(3000);
      await ryanAir.selectBagOptions();
    }

    await browser.pause(4000); 
  });

  When("I add standard insurance", async function (){
    await ryanAir.selectStandardInsurance();
    await browser.pause(3000); 
  });

  Then("I confirm my booking", async function (){
    await ryanAir.confirmBooking();
    await expect(browser).toHaveUrl("https://www.ryanair.com/gb/en/payment?tpAdults=2&tpTeens=0&tpChildren=0&tpInfants=0&tpStartDate=2025-05-17&tpEndDate=&tpDiscount=0&tpPromoCode=&tpOriginIata=HHN&tpDestinationIata=BCN")
    await browser.pause(12000); 
  });


