Feature: Sending mail

        Background:
            Given I am on the home page

        Scenario:
             When I go to the health library
              And I click the request appointment button
              And I click the New Patient button
              And I click the Inside of the U.S. button
              And I click that I am the Patient
              And I click NO whether I previously recieved care at Mayo Clinic
              And I give patient information
              And I give my dob and sex
              And I give my contact information
              And I select No interpreter
              And I give my home address
              And I enter my primary medical concern
              And I enter my other medical concerns
              And I click I have health insurance
              And I click no worker compensation claim
              And I submit my request

     