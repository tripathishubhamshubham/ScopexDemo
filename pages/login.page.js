const WaitHelper = require('../utils/waitHelper');

class LoginPage {
    get usernameField() { return $('//android.widget.EditText[@resource-id="login-email-input"]'); }
    get passwordField() { return $('//android.widget.EditText[@resource-id="login-password-input"]'); }
    get loginButton() { return $('//android.widget.Button[@content-desc="Log In"]'); }

    // Pop-ups
    get firstPopupButton() { return $('android=new UiSelector().resourceId("android:id/button1")'); }
    get secondPopupButton() { return $('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")'); }
    get skipButton() { return $('//android.widget.TextView[@text="Skip"]'); }

    async handlePopups() {
        try {
            // Handle First Notification Pop-up (Enable / Not Now)
            if (await this.firstPopupButton.waitForDisplayed({ timeout: 5000 })) {
                await this.firstPopupButton.click();
                console.log("First pop-up handled!");
            }
        } catch (error) {
            console.log("First notification pop-up not found or already handled.");
        }

        try {
            // Handle Second Notification Pop-up (Allow)
            if (await this.secondPopupButton.waitForDisplayed({ timeout: 5000 })) {
                await this.secondPopupButton.click();
                console.log("Second pop-up handled!");
            }
        } catch (error) {
            console.log("Second notification pop-up not found or already handled.");
        }

        try {
            // Handle 'Skip' Button
            if (await this.skipButton.waitForDisplayed({ timeout: 5000 })) {
                await this.skipButton.click();
                console.log("Skip button clicked!");
            }
        } catch (error) {
            console.log("Skip button not found or already handled.");
        }
    }

    async login(username, password) {
        await this.handlePopups();  // Ensure popups are handled first

        await WaitHelper.waitForElement(this.usernameField);
        await this.usernameField.setValue(username);

        await WaitHelper.waitForElement(this.passwordField);
        await this.passwordField.setValue(password);

        await WaitHelper.waitForElement(this.loginButton);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();
