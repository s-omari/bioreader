import { ApiTestPage } from './app.po';

describe('api-test App', () => {
  let page: ApiTestPage;

  beforeEach(() => {
    page = new ApiTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
