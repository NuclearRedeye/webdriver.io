describe('First Steps with with WDIO', () => {
  it('Load http://www.example.com', () => {
    browser.url('http://www.example.com');
    browser.pause(3000);
    expect(browser).toHaveUrl('http://www.example.com/');
    expect(browser).toHaveTitle('Example Domain');
  })

  it('Load https://webdriver.io', () => {
    browser.url('https://webdriver.io');
    browser.pause(3000);
  })
})