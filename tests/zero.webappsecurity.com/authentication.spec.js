describe('Authentication', () => {

  before(() => {
    browser.url('http://zero.webappsecurity.com/');
  })

  it('can open login form', () => {
    const button = $('#signin_button');
    button.waitForExist();
    button.click();
    expect(browser.getUrl()).toMatch('http://zero.webappsecurity.com/login.html');
  })

  it('can not login with invalid credentials', () => {
    $('#login_form').waitForExist();
    $('#user_login').setValue('dummy');
    $('#user_password').setValue('dummy');
    $('input[type=submit]').click();
    const error = $('.alert-error');
    expect(error).toHaveText('Login and/or password are wrong.');
  })

  it('can login with valid credentials after failure', () => {
    $('#login_form').waitForExist();
    $('#user_login').setValue('username');
    $('#user_password').setValue('password');
    $('input[type=submit]').click();
    $('.nav-tabs').waitForExist();
  })

  it('can logout', () => {
    $('.icon-user').waitForExist();
    $('.icon-user').click()
    $('#logout_link').waitForExist();
    $('#logout_link').click();
    $('#signin_button').waitForExist();
  })

})