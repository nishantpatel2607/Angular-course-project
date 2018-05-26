import { A4DemoProjectB6Page } from './app.po';

describe('a4-demo-project-b6 App', () => {
  let page: A4DemoProjectB6Page;

  beforeEach(() => {
    page = new A4DemoProjectB6Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
