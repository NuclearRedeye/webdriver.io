describe('Viewport', () => {

  before(() => {
    browser.url('https://devexpress.github.io/testcafe/example/');
  });

  afterEach(() => {
    browser.pause(1000);
  });

  it('can set browser viewport dimensions', () => {
    browser.setWindowSize(1280, 720);
    expect(browser.getWindowSize()).toEqual({'width': 1280, 'height': 720});
  })
})