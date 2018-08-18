import { TestNGProjectPage } from './app.po';

describe('test-ngproject App', () => {
  let page: TestNGProjectPage;

  beforeEach(() => {
    page = new TestNGProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
