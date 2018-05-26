import { browser, by, element } from 'protractor';

export class A4DemoProjectB6Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
