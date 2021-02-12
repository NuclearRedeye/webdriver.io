describe('Exchange', () => {

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

  it('can open purchase foreign curreny page', () => {
    $('#tabs > ul > li:nth-child(3) > a').click();
    const form = $('#pc_purchase_currency_form');
    form.waitForExist();
    expect(form).toBeVisible();
  })

  it('can select a currency', () => {
    const currency = $('#pc_currency');
    currency.waitForExist();
    currency.selectByAttribute('value', 'GBP');
    expect(currency.getText('option:checked')).toMatch('Great Britain (pound)');
  })

  it('can set an amount', () => {
    const amount = $('#pc_amount');
    amount.waitForExist();
    amount.setValue('124');
    expect(amount).toHaveValue('124');
  })

  it('can select to convert to or convert from', () => {
    const radio = $('#pc_inDollars_false');
    radio.waitForExist();
    radio.click();
    expect(radio.isSelected()).toBe(true);
  })

  it('can select to convert to or convert from', () => {
    const radio = $('#pc_inDollars_false');
    radio.waitForExist();
    radio.click();
    expect(radio.isSelected()).toBe(true);
  })

  it('can submit the request', () => {
    const submit = $('#purchase_cash');
    submit.waitForExist();
    submit.click();
    
    const confirm = $('#alert_content');
    confirm.waitForExist();
    expect(confirm).toHaveText('Foreign currency cash was successfully purchased.');
  })

})