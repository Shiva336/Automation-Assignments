Feature: Sending mail

        Background:
            Given I am on the home page

        Scenario:
             When I select the boarding point
              And I select the destination
              And I select the date
              And I increase the number of adults
              And I search for flights
              And I select the flight
              And I select regular fare
              And I select log in later
              And I enter details of the first passenger
              And I enter details of the second passenger
              And I click continue
              And I select seats and bag options
              And I add standard insurance
             Then I confirm my booking
             


     