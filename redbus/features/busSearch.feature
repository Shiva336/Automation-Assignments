Feature: Performing a search for buses

        Background:
            Given I am on the home page

        Scenario: Select travel details
             When I set where I want to begin my journey from
              And I set where I want to go
              And I select the date
              And I click the search button
              And I view the seats
              And I select the seats
              And I choose my boarding point
              And I choose my dropping point
              And I enter my details
             Then I get my bus ticket