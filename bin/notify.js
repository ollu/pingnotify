var Notification = require('node-notifier');

var notifier = new Notification();

var child_process = require('child_process').exec;
var title = "Agent of T.E.R.M.I.N.A.L";
var subtitle = "";
var message = "";
var default_host = "pong.sunet.se";
var command = "ping -c 1 " + default_host;

child_process(command,
  function (error, stdout, stderr) {
    message = stdout;
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    else {
      show_message(title, subtitle, message);
    }
  }
);

function show_message(title, subtitle, message) {
  notifier.notify({
    "title": title,
    "subtitle": subtitle,
    "message": message
  });
}
