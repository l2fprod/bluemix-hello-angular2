import { BluemixHelloAngular2Page } from './app.po';

describe('bluemix-hello-angular2 App', () => {
  let page: BluemixHelloAngular2Page;

  beforeEach(() => {
    page = new BluemixHelloAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
