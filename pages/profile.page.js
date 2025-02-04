class ProfilePage {
  // Locators
  get profileNavBar() { 
      return $('//android.widget.TextView[@text="Profile"]'); 
  }

  get logoutButton() { 
      return $('//android.widget.TextView[@text="Log out"]'); 
  }

  get navigateUpButton() { 
      return $('//android.widget.ImageButton[@content-desc="Navigate up"]'); 
  }

  // Generic function to wait for element
  async waitForElement(element, timeout = 10000) {
      try {
          await element.waitForDisplayed({ timeout });
          await element.waitForEnabled({ timeout });
      } catch (error) {
          throw new Error(`❌ Element not found: ${element.selector}`);
      }
  }

  // Navigate to Profile page
  async openProfile() {
      await this.waitForElement(this.profileNavBar);
      await this.profileNavBar.click();
      console.log("✅ Navigated to Profile page");
  }

  // Attempt to find and click Logout button with retries
  async logout() {
      try {
          await this.waitForElement(this.logoutButton, 7000);
          await this.logoutButton.click();
          console.log("✅ Logged out successfully");
      } catch (error) {
          console.warn("⚠️ Logout button not found, retrying...");
          await driver.pause(2000); // Give time for UI update
          if (await this.logoutButton.isDisplayed()) {
              await this.logoutButton.click();
              console.log("✅ Retried and logged out successfully");
          } else {
              throw new Error("❌ Logout button still not found");
          }
      }
  }

  // Navigate back
  async pressNavigateUp() {
      await this.waitForElement(this.navigateUpButton);
      await this.navigateUpButton.click();
      console.log("✅ Navigate button pressed.");
  }
}

module.exports = new ProfilePage();
