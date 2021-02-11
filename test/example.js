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

  it('title content equals', () => {
    const element = $('h1');
    element.waitForExist();
    expect(element).toHaveText('Example Domain');
  })

  it('title content equals', () => {
    const element = $('h1');
    element.waitForExist();
    expect(element).toHaveText('Example Domain');
  })

  it('submit button is disabled', () => {
    browser.url('https://devexpress.github.io/testcafe/example/');
    const button = $('#submit-button');
    button.waitForExist();
    expect(button).toHaveAttrContaining('type', 'submit');
  })
})