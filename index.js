var aes256 = require('aes256');
var base64 = require('base-64');
var dotenv = require('dotenv');

dotenv.load();

var key_machine = process.env.KEY_MACHINE;
var key;
var plaintext;

module.exports = {
  encrypt: function(key_input, plaintext) {
    key = key_input + key_machine;
    var encrypted = base64.encode(aes256.encrypt(key, plaintext));
    console.log("encrypted: " + encrypted);
  },
  decrypt: function(key_input, encrypted) {
    key = key_input + key_machine;
    var decrypted = aes256.decrypt(key, base64.decode(encrypted));
    console.log("decrypted: " + decrypted);
  }
};

require('make-runnable');
