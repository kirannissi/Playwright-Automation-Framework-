# Feature: Add New Liner and save 


# Scenario: users logins to verify the validations of linear table 
#     Given User navigates to the application url "https://app-ut.bradkeninsite.com/"
#     Then I should click element ".MuiButton-root"
#     Then I enter "bdk-insite-user-system-admin-1@bradkeninsiteut.onmicrosoft.com" in the field "input[type=email]"
#     Then I should click element "input[type=submit]" 
#     Then I enter "ndj.exq@xcg3gvy8PQW" in the field "input[name=passwd]"
#     Then I should click element "input[type=submit]"
#     Then I should click element "input[type=submit]" 
#     Then I should click element "//div[text()='Testing']" 
#     Then I should click element "//div[text()='Test Site 1']" 
#     Then I should click element "//div[text()='Sample Asset 1']" 
#     Then I should click element "//button[text()='Asset Details']" 
#     Then I should click element "//button[text()='Manage']" 
#     Then I should click element "//button[text()='Add new']" 
#     Then The element "//p[text()='Liner Position is required']" is visible
#     Then The element "//p[text()='Bradken Part No. is required']" is visible 
#     Then The element "//p[text()='Material is required']/following-sibling::p" is visible 
#     Then I enter "2" in the field "//div[contains(@class,'MuiDataGrid-row MuiDataGrid-row--lastVisible')]//div)[1]" 
#     Then I enter "BrakenPartTest" in the field "//div[contains(@class,'MuiDataGrid-row MuiDataGrid-row--lastVisible')]//div)[3]"
#     Then I enter "Customer123Test" in the field "//div[contains(@class,'MuiDataGrid-row MuiDataGrid-row--lastVisible')]//div)[5]"
#     When I click dropdown "//div[contains(@class,'MuiDataGrid-row MuiDataGrid-row--lastVisible')]//div)[7]" and select "AR PLATE, 400BHN, 12mm" 
#     Then I should click element "//div[@class='MuiDataGrid-virtualScroller css-frlfct']//div)[1]"
#     Then I should click element "//button[text()='Save']" 