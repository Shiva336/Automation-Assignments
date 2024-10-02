const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

var tableText = [];

Given(/^I'm on the table page$/, function() {
    browser.url("https://www.toolsqa.com/automation-practice-table/");
})

When(/^I extract the text from a table row$/, function() {
    var table = $("#//*/table/tbody");

    table.$$("//tr/th").map((element)=> {
        tableText.push(element.getText());
    });
})

Then(/^I shall able to print column texts$/, function() {
    console.log("All text from table columngs: " + tableText);
})

