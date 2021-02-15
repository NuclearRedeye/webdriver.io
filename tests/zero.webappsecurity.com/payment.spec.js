describe('Payment', () => {

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

  it('can open pay bills page', () => {
    $('#pay_bills_tab').click();
    const h2 = $('h2');
    h2.waitForExist();
    expect(h2).toHaveText('Make payments to your saved payees');
  })

  it('can select a payee', () => {
    const select = $('#sp_payee');
    select.waitForExist();
    select.selectByAttribute('value', 'apple');
    expect(select.getText('option:checked')).toMatch('Apple');
  })

  it('can select account', () => {
    const select = $('#sp_account');
    select.waitForExist();
    select.selectByVisibleText('Credit Card');
    expect(select.getText('option:checked')).toMatch('Credit Card');
  })

  it('can set an amount', () => {
    const input = $('#sp_amount');
    input.waitForExist();
    input.setValue('120');
    expect(input).toHaveValue('120');
  })

  it('can set a date', () => {
    const date = $('#sp_date');
    date.waitForExist();
    date.setValue('2021-01-31');
    expect(date).toHaveValue('2021-01-31');
  })

  it('can set a date', () => {
    const text = $('#sp_description');
    text.waitForExist();
    text.setValue('Hello World');
    expect(text).toHaveValue('Hello World');
  })

  it('can submit the request', () => {
    const submit = $('#pay_saved_payees');
    submit.waitForExist();
    submit.click();
    
    const confirm = $('#alert_content');
    confirm.waitForExist();
    expect(confirm).toHaveText('The payment was successfully submitted.');
  })

})