import { Ng4FireBasePropertyLisitngPage } from './app.po';

describe('ng4-fire-base-property-lisitng App', () => {
  let page: Ng4FireBasePropertyLisitngPage;

  beforeEach(() => {
    page = new Ng4FireBasePropertyLisitngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
