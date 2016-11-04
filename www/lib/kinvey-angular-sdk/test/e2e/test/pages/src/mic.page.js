import regeneratorRuntime from 'regenerator-runtime'; // eslint-disable-line no-unused-vars

export class MICPage {
  async get() {
    // Switch contexts
    await this.switchToContext();

    // Grab references to elements on page
    this.usernameInput = element(by.name('username'));
    this.passwordInput = element(by.name('password'));
    this.loginButton = element(by.tagName('button'));
  }

  async switchToContext() {
    // Get available window handles
    browser.ignoreSynchronization = true;
    const handles = await browser.getAllWindowHandles();

    // Check that a MIC page was opened
    if (handles.length < 2) {
      throw new Error('It does not appear that a MIC popup window was opened.');
    }

    // Switch context
    await browser.switchTo().window(handles[1]);
  }

  setUsername(username) {
    return this.usernameInput.sendKeys(username);
  }

  setPassword(password) {
    return this.passwordInput.sendKeys(password);
  }

  login() {
    return this.loginButton.click();
  }
}
