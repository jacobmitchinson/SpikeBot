var slackbot = require('node-slackbot');

var bot = new slackbot('xoxb-3664957276-x4H5juXjVNiHKheMYsz1VdHa');

bot.use(function(message, cb) {
  if ('message' == message.type) {
    console.log(message.user + ' said: ' + message.text);
  }
  cb();
});

bot.use(function(message, cb) {

  if (message.text == "121?") {
    console.log(true);
    bot.sendMessage('D03KJU58J', 'https://github.com/makersacademy/course/wiki/121-and-Challenge-Review-slots');
  };
  cb();
});

bot.use(function(message, cb) {

  if (message.text == "Help") {
    console.log(true);
    bot.sendMessage('D03KJU58J', "You can say: '121?'");
  };
  cb();
});





bot.connect();