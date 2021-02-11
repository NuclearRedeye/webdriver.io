describe('First Steps with with WDIO', () => {
  it('Load http://www.example.com', () => {
    browser.url('http://www.example.com');
    browser.pause(3000);
    expect(browser).toHaveUrl('http://www.example.com/');
    expect(browser).toHaveTitle('Example Domain');
  })

  it('h1 should be visible', () => {
    const h1 = $('h1');
    h1.waitForExist();
    expect(h1).toBeVisible();
  })

  it('p should be visible', () => {
    const p = $('p');
    p.waitForExist();
    expect(p).toBeVisible();
  })

  it('link should equal', () => {
    const link = $('a');
    link.waitForExist();
    expect(link).toHaveLink('https://www.iana.org/domains/example');
  })
})