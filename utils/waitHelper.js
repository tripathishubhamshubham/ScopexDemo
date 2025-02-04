class WaitHelper {
    /**
     * Wait for an element to be displayed within a given timeout.
     * @param {WebdriverIO.Element} element - The element to wait for.
     * @param {number} [timeout=15000] - Maximum wait time in milliseconds.
     */
    static async waitForElement(element, timeout = 15000) {
        await browser.waitUntil(
            async () => await element.isDisplayed(),
            {
                timeout,
                interval: 500, // Check every 500ms
                timeoutMsg:  'Element ${await element.selector} did not appear in time!',
            }
        );
    }
}

module.exports = WaitHelper;
