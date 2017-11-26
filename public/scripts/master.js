$(document).ready(function() {
  const messageForm = $('#message-form');
  const leaveBtn = $('#leave-btn');
  const formBtn = $('#form-btn');
  const readBtn = $('#read-btn');
  const message = $('#message');
  const messageTxt = $('#message-text');
  const author = $('#author');
  const url = '/api/message';
  readBtn.on('click', () => {

    $.getJSON(url, (data) => {
      let randNum = Math.floor((Math.random() * data.length));
      let htmlData = data[randNum];
      messageTxt.text(htmlData.message);
      author.text("-" + htmlData.author);
      message.fadeIn(() => {
      });
    });
  });

  formBtn.on('click', (e) => {
    let messageData = $('#message-input').val();
    let authorData = $('#author-input').val();
    $.post(url, {
      message: messageData,
      author: authorData
    });
    messageForm.fadeOut();
  });

  leaveBtn.on('click', () => {
    messageForm.fadeIn();
  });
});
