describe('Browser Actions', () => {

  it('can set the value of an input element', () => {
    browser.url('https://devexpress.github.io/testcafe/example/');
    const input = $('#developer-name');
    input.waitForExist();
    input.setValue('Joe Bloggs');
    browser.pause(3000);
    input.clearValue();
    browser.pause(3000);
    input.addValue('Joe');
    input.addValue(' ');
    input.addValue('Bloggs');
    browser.pause(3000);
  })

  it('can click a button', () => {
    const button = $('#populate');
    button.waitForExist();
    button.click();
    button.doubleClick();
  })
})