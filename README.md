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

* In case if app is not installed then use below command to insatll the app in emulator

adb install-multiple apk\android\ScopeXAPK\base.apk apk\android\ScopeXAPK\split_config.en.apk apk\android\ScopeXAPK\split_config.x86_64.apk apk\android\ScopeXAPK\split_config.xxhdpi.apk