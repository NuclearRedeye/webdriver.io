describe('Search', () => {

  before(() => {
    browser.url('http://zero.webappsecurity.com/');
  })

  it('search box exists', () => {
    $('#searchTerm').waitForExist();
  })

  it('can submit a search', () => {
    $('#searchTerm').setValue('bank');
    browser.keys('Enter');
    const h2 = $('h2');
    h2.waitForExist();
    expect(h2).toHaveText('Search Results\:');
  })

})