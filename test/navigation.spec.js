describe('Navigation', () => {

  before(() => {
    browser.url('http://www.example.com');
  })

  afterEach(() => {
    browser.pause(1000);
  })

  it('correct url has loaded', () => {
    expect(browser).toHaveUrl('http://www.example.com/');
  })

  it('has the correct title', () => {
    expect(browser).toHaveTitle('Example Domain');
  })

  it('h1 is visible', () => {
    const h1 = $('h1');
    h1.waitForExist();
    expect(h1).toBeVisible();
  })

  it('p is visible', () => {
    const p = $('p');
    p.waitForExist();
    expect(p).toBeVisible();
  })

  it('link points to correct location', () => {
    const link = $('a');
    link.waitForExist();
    expect(link).toHaveLink('https://www.iana.org/domains/example');
  })

  it('h1 element has correct content', () => {
    const element = $('h1');
    element.waitForExist();
    expect(element).toHaveText('Example Domain');
  })

})