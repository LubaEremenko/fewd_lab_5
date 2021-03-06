
var msg = '<h2>browser window</h2><p>width: ' + window.innerWidth + '</p>';
msg += '<p>height: ' + window.innerHeight + '</p>';
msg += '<h2>history</h2><p>items: ' + window.history.length + '</p>';
msg += '<h2>screen</h2><p>width: ' + window.screen.width + '</p>';
msg += '<p>height: ' + window.screen.height + '</p>';

var el = document.getElementById('about');
el.innerHTML = msg;
alert('Current page: ' + window.location);

var msg2 = '<p><b>page title: </b>' + document.title + '<br />';
msg2 += '<b>page address: </b>' + document.URL + '<br />';
msg2 += '<b>last modified: </b>' + document.lastModified + '</p>';


var el2 = document.getElementById('footer');
el2.innerHTML = msg2;


// Create a variable to hold a new Date object (defaults to now)
var today = new Date();
// Create a variable to hold the year this year
var year = today.getFullYear();

// Create a variable called el to hold the element whose id attribute has a value of footer
var el4 = document.getElementById('footer');
// Write the year into that element.
el4.innerHTML += '<p>Copyright &copy;' + year + '</p>';

// Misson years
var today = new Date();
var year = today.getFullYear();
// Set the date that the company was established
var est = new Date('May 06, 2006 10:10:10');
// Get difference between then & now in milliseconds
var difference = today.getTime() - est.getTime();
// Divide by number of milliseconds to get years
difference = (difference / 31556900000);

// Create a variable called elMsg to hold the element whose id attribute has a value of message
var elMsg = document.getElementById('mission');
// Write the message into that element.
elMsg.textContent = 'We have been successfully organizing travel for ' + Math.floor(difference) + ' years';