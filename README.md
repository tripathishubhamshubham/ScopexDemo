Before Running the project please follow the below steps.

$  git clone https://github.com/tripathishubhamshubham/ScopexDemo.git

$  cd ScopeXTest

$ npm install 

Run the code:
$ npx wdio ./config/wdio.android.conf.js --spec tests/login.test.js

Generate the Allure report:
$ allure generate reports/allure-results --clean -o reports/allure-report

View the Report:
$ allure open reports/allure-report

To change the user name and password Go to dataSet folder inside that test.json add or change the credential.
Same for to change the Name, IFSC Code, Account number.

Screenshot and Steps added into the Allure report.