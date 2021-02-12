describe('Feedback Form', () => {

  before(() => {
    browser.url('http://zero.webappsecurity.com/');
  })

  it('can open feedback form', () => {
    const button = $('#feedback');
    button.waitForExist();
    button.click();
    expect(browser.getUrl()).toMatch('http://zero.webappsecurity.com/feedback.html');
  })

  it('can populate name', () => {
    const name = $('#name');
    name.setValue('username');
    expect(name).toHaveValue('username');
  })

  it('can populate email', () => {
    const email = $('#email');
    email.setValue('username@example.com');
    expect(email).toHaveValue('username@example.com');
  })

  it('can populate subject', () => {
    const subject = $('#subject');
    subject.setValue('My Message');
    expect(subject).toHaveValue('My Message');
  })

  it('can populate comment', () => {
    const comment = $('#comment');
    comment.setValue('Hello world!');
    expect(comment).toHaveValue('Hello world!');
  })

  it('can clear form', () => {
    $('input[type=reset]').click();
    expect($('#name')).toHaveValue('');
    expect($('#email')).toHaveValue('');
    expect($('#subject')).toHaveValue('');
    expect($('#comment')).toHaveValue('');
  })

  it('can\'t submit empty form', () => {
    $('input[type=reset]').click();
    expect(browser).toHaveUrl('http://zero.webappsecurity.com/feedback.html');
  })

  it('can submit feedback', () => {
    $('#name').setValue('username');
    $('#email').setValue('username@example.com');
    $('#subject').setValue('Test Message');
    $('#comment').setValue('Hello World!');
    $('input[type=submit]').click();
    expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html');
  })

})