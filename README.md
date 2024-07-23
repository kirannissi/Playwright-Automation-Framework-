# Playwright Demo Test Automation
 Playwright test Automation Frame work


Debugging Features
From CLI
npm run debug - headful mode with APIs enables both APIs and debug options
npm run api - headless mode with debug apis
npm run video - headless mode vith video
In Visual Studio Code
Open the feature
Select the debug options in the VSCode debugger
Set breakpoints in the code
To stop the feature, you can add the Then debug step inside your feature. It will stop your debugger.

To choose a reporter
The last reporter/formatter found on the cucumber-js command-line wins:

--format summary --format @cucumber/pretty-formatter --format cucumber-console-formatter
In cucumber.mjs file, modify the options.

To use Allure reporting, you can run with env param: USE_ALLURE=1, and then use the npm run allure to show the report.

To ignore a scenario
tag the scenario with @ignore
To check for typescript, linting and gherkin errors
run the command npm run build.
To view the steps usage
run the command npm run steps-usage.
To view the html report of the last run
run the command npm run report.
At least in Lubuntu 20.04 to open the html report
Modify the package.json in "report": "xdg-open reports/report.html"
To view allure report
run the command npm run allure.
