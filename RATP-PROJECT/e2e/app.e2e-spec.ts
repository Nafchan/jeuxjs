import { SvgPage } from './app.po';

describe('svg App', () => {
  let page: SvgPage;

  beforeEach(() => {
    page = new SvgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
