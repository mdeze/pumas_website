import { PumasWebsitePage } from './app.po';

describe('pumas-website App', function() {
  let page: PumasWebsitePage;

  beforeEach(() => {
    page = new PumasWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
