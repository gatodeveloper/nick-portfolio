import { AngularBoilerplatePage } from './app.po';

describe('angular-boilerplate App', () => {
  let page: AngularBoilerplatePage;

  beforeEach(() => {
    page = new AngularBoilerplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
