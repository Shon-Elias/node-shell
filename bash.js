// var sys = require('sys');
var exec = require('child_process').exec;

function puts(error, stdout, stderr){
  process.stdout.write(stdout)
  process.stdout.write('prompt > ');
}

// Output a prompt
process.stdout.write('prompt > ');
/*
our process doesn't immediately end this time.
That's because we've registered a listener to stdin,
so Node won't kill the process automatically,
as it assumes you may want to keep waiting for more user input.
If you want to quit your Node prompt,
*/

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('prompt > ');



  switch (cmd) {
    case 'pwd':
        process.stdout.write(__dirname+"\n");
        process.stdout.write('prompt > ');
      break;
    case 'date':

      exec("date", puts);

      // date

    default:
      break;
  }




});
