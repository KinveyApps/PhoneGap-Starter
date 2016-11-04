import { AppPage } from './app.page';
import regeneratorRuntime from 'regenerator-runtime'; // eslint-disable-line no-unused-vars

export class LogoutPage extends AppPage {
  async get() {
    // Go to the logout page
    browser.get('/#/logout');

    // Switch contexts
    await this.switchToContext();
  }

  async switchToContext() {
    // Get available window handles
    browser.ignoreSynchronization = false;
    const handles = await browser.getAllWindowHandles();

    // Switch context
    await browser.switchTo().window(handles[0]);
  }
}
