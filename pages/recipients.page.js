class RecipientsPage {
  // Skip email verification
  get skipButton() { return $('//android.widget.TextView[@text="Skip"]'); }

  // Navigation to recipients tab
  get recipientsTab() { return $('//android.widget.TextView[@text="Recipients"]'); }

  // Add recipient button
  get addRecipientButton() { return $('//android.widget.TextView[@text="Add recipient"]'); }

  // Name input field
  get nameField() { return $('//android.widget.EditText[@resource-id="RNE__Input__text-input" and @text="Ex: john"]'); }

  // IFSC code input field
  get ifscField() { return $('//android.widget.EditText[@resource-id="RNE__Input__text-input" and @text="Ex: KKBKxxxxx"]'); }

  // Account number input field
  get accountNumberField() { return $('//android.widget.EditText[@resource-id="RNE__Input__text-input" and @text="Ex: 754521xxxx"]'); }

  // Confirm Add recipient button
  get confirmAddRecipientButton() { return $('//android.widget.Button[@content-desc="Add recipient"]'); }

  // Function to explicitly wait for an element
  async waitForElement(element, timeout = 5000) {
    await element.waitForDisplayed({ timeout });
    await element.waitForEnabled({ timeout });
  }

  // Function to skip email verification
  async skipEmailVerification() {
    await this.waitForElement(this.skipButton);
    await this.skipButton.click();
    console.log("✅ Email verification skipped!");
  }

  // Function to add a recipient and capture toast message
  async addRecipient(name, ifscCode, accountNumber) {
    // Wait for and click on 'Recipients' tab
    await this.waitForElement(this.recipientsTab);
    await this.recipientsTab.click();
    console.log(" Navigated to Recipients page!");

    // Wait for and click on 'Add recipient' button
    await this.waitForElement(this.addRecipientButton);
    await this.addRecipientButton.click();
    console.log("Add recipient button clicked!");

    // Fill in Name field
    await this.waitForElement(this.nameField);
    await this.nameField.setValue(name);
    console.log(` Name entered: ${name}`);

    // Fill in IFSC code field
    await this.waitForElement(this.ifscField);
    await this.ifscField.setValue(ifscCode);
    console.log(` IFSC code entered: ${ifscCode}`);

    // Fill in Account number field
    await this.waitForElement(this.accountNumberField);
    await this.accountNumberField.setValue(accountNumber);
    console.log(` Account number entered: ${accountNumber}`);

    // Click on 'Add recipient' button to confirm
    await this.waitForElement(this.confirmAddRecipientButton);
    await this.confirmAddRecipientButton.click();
    console.log(" Recipient add button clicked");

    
  }
}

module.exports = new RecipientsPage();
