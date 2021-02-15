describe('Help', () => {

  before(() => {
    browser.url('http://zero.webappsecurity.com/');
  })

  it('can open login form', () => {
    const button = $('#signin_button');
    button.waitForExist();
    button.click();
    expect(browser.getUrl()).toMatch('http://zero.webappsecurity.com/login.html');
  })

  it('can login with valid credentials', () => {
    $('#login_form').waitForExist();
    $('#user_login').setValue('username');
    $('#user_password').setValue('password');
    $('input[type=submit]').click();
    $('.nav-tabs').waitForExist();
  })

  it('can navigate to the help page', () => {
    $('.icon-cog').click();
    const link = $('#help_link');
    link.waitForExist();
    expect(link).toBeVisible();
    link.click();
    expect(browser.getUrl()).toMatch('http://zero.webappsecurity.com/help.html');
  })

  it('can navigate to the transfer funds help page', () => {
    $('*=transfer funds').click();
    expect(browser.getUrl()).toMatch('http://zero.webappsecurity.com/help.html?topic=/help/topic2.html');
  })

  it('can navigate to the pay bills help page', () => {
    $('*=pay bills').click();
    expect(browser.getUrl()).toMatch('http://zero.webappsecurity.com/help.html?topic=/help/topic3.html');
  })

});