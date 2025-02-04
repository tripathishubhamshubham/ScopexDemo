const allure = require('@wdio/allure-reporter').default;
const fs = require('fs');
const path = require('path');

     

exports.config = {
    runner: 'local',
    port: 4723,
    specs: ['../tests/*.test.js'],
    framework: 'mocha',
    mochaOpts: {
      timeout: 60000 // Increase timeout to 30 seconds
  },
  
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'reports/allure-results',
            disableWebdriverStepsReporting: false,  // Keep steps in the report
            disableWebdriverScreenshotsReporting: false  // Ensure screenshots are attached
        }]
    ],

    capabilities: [{
        platformName: "Android",
        "appium:deviceName": "emulator-5554", // Ensure this matches adb devices output
        "appium:automationName": "UiAutomator2",
        "appium:appPackage": "com.scopex.scopexmobile",
        "appium:appActivity": ".MainActivity",
         
    }],

     
    
    afterTest: async function (test, context, { error }) {
        if (error) {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const filename = path.join('./reports/screenshots/', `Error_${test.title}_${timestamp}.png`);
    
            // Take screenshot using Appium driver
            const screenshot = await driver.takeScreenshot();  // Use 'driver' instead of 'browser'
            fs.writeFileSync(filename, screenshot, 'base64');  // Save screenshot as base64
    
            console.log(`⚠️ Test failed! Screenshot saved: ${filename}`);
    
            // Attach screenshot to Allure report
            try {
                allure.addAttachment('Error Screenshot', fs.readFileSync(filename), 'image/png');
            } catch (error) {
                console.log("Failed to attach screenshot to Allure report:", error);
            }
        }
    },

  services: ['appium'],
    
};
