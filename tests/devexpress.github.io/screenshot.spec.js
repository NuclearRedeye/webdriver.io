describe('Screenshots', () => {

  before(() => {
    browser.url('https://devexpress.github.io/testcafe/example/');
  });

  afterEach(() => {
    browser.pause(1000);
  });

  it('can save a screenshot', () => {
    browser.saveScreenshot('screenshots/screenshot.png');
  })
  
})