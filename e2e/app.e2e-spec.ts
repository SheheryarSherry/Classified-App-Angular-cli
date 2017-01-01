import { ClassifiedApplicationPage } from './app.po';

describe('classified-application App', function() {
  let page: ClassifiedApplicationPage;

  beforeEach(() => {
    page = new ClassifiedApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
