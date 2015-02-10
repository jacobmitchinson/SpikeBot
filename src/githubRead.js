fs = require('fs');

var lines = null;

function readContents(callback) {

  fs.readFile('../course.wiki/Calendar.md', 'utf8', function(err,data) {
    if(err) {
      console.log(err);
    }
    lines = data.toString().split('\n');
    callback();
  });

}

function printGithub() {

  lines.forEach(function(line) {
    if(line.match("AM")) {
      console.log(line);
    }
  });

}

readContents(printGithub);