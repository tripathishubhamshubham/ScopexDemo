const fs = require('fs');
const path = require('path');

/**
 * Capture and save a screenshot with a unique name and attach it to the Allure report.
 * @param {string} name - The base name for the screenshot file.
 */
async function takeScreenshot(name) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-'); // Unique timestamp
    const folderPath = './reports/screenshots/';
    const filename = path.join(folderPath, `${name}_${timestamp}.png`);

    // Ensure the folder exists
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    // Take a screenshot using Appium (Appium driver should be used here)
    const screenshot = await driver.takeScreenshot(); // Appium driver instead of browser
    fs.writeFileSync(filename, screenshot, 'base64');
    
    // Attach the screenshot to Allure report
    try {
        // This part is important: use Allure API to attach the screenshot
        allure.addAttachment('Screenshot', fs.readFileSync(filename), 'image/png');
    } catch (error) {
        console.error("Failed to attach screenshot to Allure report:", error);
    }

    console.log(`📸 Screenshot saved: ${filename}`);
}

module.exports = { takeScreenshot };
