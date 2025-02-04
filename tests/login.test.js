const { remote } = require('webdriverio');
const { expect } = require('chai');
const LoginPage = require('../pages/login.page');
const RecipientsPage = require('../pages/recipients.page');
const ProfilePage = require('../pages/profile.page');
const { takeScreenshot } = require('../utils/screenshotHelper');
const { logStep } = require('../utils/logger');
const testData = require('../dataSet/testData.json');

 

describe('Login and Add Recipient Test', () => {
  it('should handle pop-ups, login, add a recipient, and logout', async () => {
    logStep('Starting login and add recipient test');

    // Perform Login using JSON data
    await LoginPage.login(testData.login.username, testData.login.password);
    await takeScreenshot('Login_Success');

    // Skip email verification 
    await RecipientsPage.skipEmailVerification();

    // Add Recipient using JSON data
    await RecipientsPage.addRecipient(testData.recipient.name, testData.recipient.bankIFSC, testData.recipient.accountNumber);
    await takeScreenshot('Recipient_Added');

    // Navigate to Profile and Logout
    await ProfilePage.pressNavigateUp();
    await ProfilePage.openProfile();
    await ProfilePage.logout();
    await takeScreenshot('Logout_Success');
  });
});
