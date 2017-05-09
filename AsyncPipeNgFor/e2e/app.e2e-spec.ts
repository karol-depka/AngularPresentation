import { AsyncPipeNgForPage } from './app.po';

describe('async-pipe-ng-for App', () => {
  let page: AsyncPipeNgForPage;

  beforeEach(() => {
    page = new AsyncPipeNgForPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
