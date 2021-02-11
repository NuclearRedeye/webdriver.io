describe('First Steps with with WDIO', () => {
  it('Load http://www.example.com', () => {
    browser.url('http://www.example.com');
    browser.pause(3000);
  })

  it('Load https://webdriver.io', () => {
    browser.url('https://webdriver.io');
    browser.pause(3000);
  })
})