describe('Transactions', () => {

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

  it('can open pay account activity page', () => {
    $('#account_activity_tab').click();
    const h2 = $('h2');
    h2.waitForExist();
    expect(h2).toHaveText('Show Transactions');
  })

  it('can open pay find transactions tab', () => {
    $('#tabs > ul > li:nth-child(2)').click();
    const form = $('#find_transactions_form');
    form.waitForExist();
    expect(form).toBeVisible();
  })

  it('can set a description', () => {
    const input = $('#aa_description')
    input.waitForExist();
    input.setValue('test');
    expect(input).toHaveValue('test');
  })

  it('search for \'test\' has no results', () => {
    const submit = $('button[type="submit"]');
    submit.waitForExist();
    submit.click();

    const results = $('#filtered_transactions_for_account');
    results.waitForExist();
    expect(results).toHaveText('No results.');
  })
})