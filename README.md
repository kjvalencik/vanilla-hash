Vanilla Hash
============

This is a simple straight port of the Vanilla Forums cookie
hashing. No attempts have been made to optimize the code
for node.js. Instead, it uses phpjs to replicate functions (e.g.,
pack) that do not exist in javascript. It was developed in order to
support the vanilla-auth module.

Password Hashing
----------------

If you need to authenticate users as well, password hashing in Vanilla
uses the portable PHP password hashing framework. This has been implemented
in node by the excellent [phpass](https://github.com/jhurliman/node-phpass) module 

Travis CI Build Status
----------------------

[![Build Status](https://secure.travis-ci.org/kjvalencik/vanilla-hash.png?branch=master)](http://travis-ci.org/kjvalencik/vanilla-hash)

Use
---

    var vanillaHash = require('vanilla-hash')('salt', 'md5'),
    	hashed = vanillaHash.hash('data');
    if (vanillaHash.checkCookie('Vanilla cookie')) {
    	console.log('Cookie has not been manipulated.');
    }

As-Is policy
------------

No guarantees are made about this software. It is provided as-is. It is
under active development and may or may not be production ready. 