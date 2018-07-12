import { PipesPage } from './app.po';

describe('pipes App', () => {
  let page: PipesPage;

  beforeEach(() => {
    page = new PipesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
