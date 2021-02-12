describe('Browser Actions', () => {

  it('can set the value of an input element', () => {
    browser.url('https://devexpress.github.io/testcafe/example/');
    const input = $('#developer-name');
    input.waitForExist();
    input.setValue('Joe Bloggs');
    browser.pause(1000);
    input.clearValue();
    browser.pause(1000);
    input.addValue('Joe');
    browser.pause(500);
    input.addValue(' ');
    browser.pause(500);
    input.addValue('Bloggs');
    browser.pause(1000);
  })

  it('can click a button', () => {
    const button = $('#populate');
    button.waitForExist();
    button.click();
    button.doubleClick();
  })

  it('can select a radio button', () => {
    const button = $('#linux');
    button.waitForExist();
    button.click();
    browser.pause(1000);
  })

  it('can select a checkbox', () => {
    const checkbox = $('#remote-testing');
    checkbox.waitForExist();
    checkbox.click();
    browser.pause(1000);
  })
})