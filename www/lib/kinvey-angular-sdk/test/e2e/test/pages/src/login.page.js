import { AppPage } from './app.page';
import regeneratorRuntime from 'regenerator-runtime'; // eslint-disable-line no-unused-vars

export class LoginPage extends AppPage {
  async get() {
    // Go to the login page
    browser.get('/#/login');

    // Switch contexts
    await this.switchToContext();

    // Grab references to elements on page
    this.usernameInput = element(by.model('username'));
    this.passwordInput = element(by.model('password'));
    this.loginButton = element(by.id('login'));
    this.loginWithMICButton = element(by.id('loginWithMIC'));
  }

  async switchToContext() {
    // Get available window handles
    browser.ignoreSynchronization = false;
    const handles = await browser.getAllWindowHandles();

    // Switch context
    await browser.switchTo().window(handles[0]);
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

  loginWithMIC() {
    return this.loginWithMICButton.click();
  }

  async logout() {
    return browser.get('/#/logout');
  }
}
