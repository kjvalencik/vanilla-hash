var assert      = require('assert'),
	vanillaHash = require('../'),
	pass, fail, bad;

// TODO: Need to test sha1.
// TODO: Need more test cases.

pass = [{
	method : 'md5',
	key    : '38NML8YF7V',
	data   : '1-1369340879',
	hash   : '74c5d8e6a60743f1df88e85cccc594a0',
	cookie : '1-1369340879|74c5d8e6a60743f1df88e85cccc594a0|1366748879|1|1369340879'
}];

fail = [{
	method : 'md5',
	key    : '38NML8YF7V',
	data   : '1-1369340879',
	hash   : '0',
	cookie : '1-1369340879|0|1366748879|1|1369340879'
}, {
	method : 'md5',
	key    : '38NML8YF7V',
	data   : '1-1369340879',
	hash   : '0',
	cookie : '1-1369340879'
}];

bad = [{
	method : 'fake hash method',
	key    : '',
	data   : '',
	hash   : '',
	cookie : '',
	err    : 'Unsupported hash method'
}];

pass.forEach(function (item) {
	var hasher = vanillaHash(item.key, item.method);
	assert.strictEqual(item.hash, hasher.hash(item.data));
	assert.strictEqual(true, hasher.checkCookie(item.cookie));
});

fail.forEach(function (item) {
	var hasher = vanillaHash(item.key, item.method);
	assert.notStrictEqual(item.hash, hasher.hash(item.data));
	assert.strictEqual(false, hasher.checkCookie(item.cookie));
});

bad.forEach(function (item) {
	try {
		var hasher = vanillaHash(item.key, item.method);
	} catch (e) {
		assert.strictEqual(e.message, item.err);
	}
});