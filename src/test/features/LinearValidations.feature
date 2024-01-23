Feature: Validations on Linear Table


Scenario: users logins to verify the validations of linear table 
    Given User navigates to the application url "https://app-ut.bradkeninsite.com/"
    When I click element ".MuiButton-root"
    Then I enter "bdk-insite-user-system-admin-1@bradkeninsiteut.onmicrosoft.com" in the field "input[type=email]"
    When I click element "input[type=submit]" 
    Then I enter "ndj.exq@xcg3gvy8PQW" in the field "input[name=passwd]"
    When I click element "input[type=submit]"
    When I click element "input[type=submit]" 
    When I click element "//div[text()='Testing']" 
    When I click element "//div[text()='Test Site 1']" 
    When I click element "//div[text()='Sample Asset 1']" 
    When I click element "//button[text()='Asset Details']" 
    When I click element "//button[text()='Manage']" 
    When I click element "//button[text()='Add new']" 
    Then The element "//p[text()='Liner Position is required']" is visible
    Then The element "//p[text()='Bradken Part No. is required']" is visible 
    Then The element "//p[text()='Material is required']/following-sibling::p" is visible 


