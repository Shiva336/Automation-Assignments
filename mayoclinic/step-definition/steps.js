const { Given, When, Then } = require('@wdio/cucumber-framework');
const {expect, browser } = require('@wdio/globals')
import mayoclinic from '../pageobjects/mayoclinic';

Given("I am on the home page", async function (){
   mayoclinic.openBrowser();    
   await expect(browser).toHaveUrl('https://www.mayoclinic.org/')
   await browser.pause(3000); 
});

When("I go to the health library", async function (){
   mayoclinic.searchHealthLibrary();
   await expect(browser).toHaveUrl('https://www.mayoclinic.org/tests-procedures/gene-therapy/about/pac-20384619')
   await browser.pause(3000); 
 });

When("I click the request appointment button", async function (){
   mayoclinic.clickRequestAppointment();
   await expect(browser).toHaveUrl('https://www.mayoclinic.org/appointments')
   await browser.pause(3000); 
 });

 When("I click the New Patient button", async function () {
   mayoclinic.ClickNewPatientButton();
   await expect(browser).toHaveUrl('https://www.mayoclinic.org/appointments/location')
   await browser.pause(3000);
 })

 When("I click the Inside of the U.S. button", async function () {
   mayoclinic.clickLivingInsideUSButton();
   await expect(browser).toHaveUrl('https://onlineservices.mayoclinic.org/NewAppointments/?screen=patient')
   await browser.pause(3000);
 })

 When("I click that I am the Patient", async function () {
   mayoclinic.iAmPatientButton();
   await browser.pause(3000);
 })

 When("I click NO whether I previously recieved care at Mayo Clinic", async function () {
   mayoclinic.recievedCareAtMayoClinic();
   await browser.pause(3000);
 })

 When("I give patient information", async function () {
   mayoclinic.enterPatientInformation();
   await browser.pause(3000);
 })

 When("I give my dob and sex", async function () {
   mayoclinic.enterDobAndSex();
   await browser.pause(3000);
 })

 When("I give my contact information", async function () {
   mayoclinic.provideContactInfo();
   await browser.pause(3000);
 })

 When("I select No interpreter", async function () {
   mayoclinic.selectNoInterpreter();
   await browser.pause(3000);
 })

 When("I give my home address", async function () {
   mayoclinic.enterHomeAddress();
   await browser.pause(3000);
 })

 When("I enter my primary medical concern", async function () {
   mayoclinic.enterPrimaryConcern();
   await browser.pause(3000);
 })

 When("I enter my other medical concerns", async function () {
   mayoclinic.enterOtherConcernAndConfirm();
   await browser.pause(5000);
 })

 When("I click I have health insurance", async function () {
   mayoclinic.clickYesHealthInsurance();
   await browser.pause(3000);
 })

 When("I click no worker compensation claim", async function () {
   mayoclinic.clickNoWorkersCompensation();
   await browser.pause(3000);
 })

 When("I submit my request", async function () {
   mayoclinic.submitRequest();
   await browser.pause(120000);
 })
