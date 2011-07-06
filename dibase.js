(function (cmds) {
	'use strict';
	if (typeof window.di === 'undefined') { window.di = {}; }; di.con = {}; var noop = function () { }; di.usecon = typeof console !== 'undefined';
	var cl = cmds.length; for (var i = 0; i < cl; i++) { var c = cmds[i];
		(function (c) { di.con[c] = di.usecon ? function () { if (di.usecon && typeof console !== 'undefined' && console[c]) { return console[c].apply(console, arguments); } } : noop })(c);
	};
})('log debug info warn error assert clear dir dirxml trace group groupCollapsed groupEnd time timeEnd profile profileEnd count exception table'.split(' '));
