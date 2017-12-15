import { DeveloperrealityPage } from './app.po';

describe('developerreality App', () => {
  let page: DeveloperrealityPage;

  beforeEach(() => {
    page = new DeveloperrealityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
