describe('Form Controls', () => {

  before(() => {
    browser.url('https://devexpress.github.io/testcafe/example/');
  });

  afterEach(() => {
    browser.pause(1000);
  });

  it('can set the value of an input element', () => {
    const input = $('#developer-name');
    input.waitForExist();
    input.setValue('Joe Bloggs');
    expect(input).toHaveValue('Joe Bloggs');
  })

  it('can clear the value of an input element', () => {
    const input = $('#developer-name');
    input.waitForExist();
    input.clearValue();
    expect(input).toHaveValue('');
  })

  it('can clear the value of an input element', () => {
    const input = $('#developer-name');
    input.addValue('Joe');
    input.addValue(' ');
    input.addValue('Bloggs');
    expect(input).toHaveValue('Joe Bloggs');
  })

  // How can you assert that a button has been clicked?
  it('can click a button', () => {
    const button = $('#populate');
    button.waitForExist();
    button.click();
    button.doubleClick();
  })

  it('can select a radio button', () => {
    const radio = $('#linux');
    radio.waitForExist();
    radio.click();
    expect(radio.isSelected()).toBe(true);
  })

  it('can select a checkbox', () => {
    const checkbox = $('#remote-testing');
    checkbox.waitForExist();
    checkbox.click();
    expect(checkbox.isSelected()).toBe(true);
  })

  it('can select an option in a select box', () => {
    const select = $('#preferred-interface');
    select.waitForExist();
    select.selectByVisibleText('JavaScript API');
    expect(select.getText('option:checked')).toMatch('JavaScript API');
  })
})