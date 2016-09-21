import { AngularOnBluemixPage } from './app.po';

describe('angular-on-bluemix App', function() {
  let page: AngularOnBluemixPage;

  beforeEach(() => {
    page = new AngularOnBluemixPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
