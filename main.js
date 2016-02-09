//Cali - The missing menubar calendar widget for Mac
//www.aravindvs.com


var menubar = require('menubar');

var mb = menubar({
	'width':300,
	'height':270,
	'preload-window': true,
	'tooltip':'Cali - The missing menubar calendar widget for Mac.'
});

mb.on('ready', function ready () {
  console.log('We are now loaded!')
  console.log('By Aravind | www.aravindvs.com');
});
