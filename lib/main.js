// Import the page-mod API
var pageMod = require('sdk/page-mod');
// Import the self API
var self = require('sdk/self');
 
// Create a page mod
// It will run a script whenever a '.org' URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
  include: 'https://mainframe.nerdery.com/timesheet.php*',
  contentScriptFile: self.data.url('scripts/admin-helper.js'),
  contentStyleFile: self.data.url('styles/admin-helper.css')
});