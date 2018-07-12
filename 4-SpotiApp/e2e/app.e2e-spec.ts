import { SpotiAppPage } from './app.po';

describe('spoti-app App', () => {
  let page: SpotiAppPage;

  beforeEach(() => {
    page = new SpotiAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
