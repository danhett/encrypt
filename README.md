# ENCRYPT

Encrypts messages for artwork.

Requires two keys: one stored in [REDACTED] and the other stored in the RFID chip implanted in Dan Hett's left hand.

Accepts arbitrary text content and encrypts with AES256. Output is base64 encoded to control character set, as these messages are used in artworks and require stencils etc.

Basically this is an easy wrapper for some simple crypto as I'm lazy and use this a lot. More info on the storage can be found on this post: http://blog.danhett.com/2017/07/dan.html

Usage:
node index.js encrypt KEYGOESHERE "This is my text to encrypt"

node index.js decrypt KEYGOESHERE ENCRYPTEDBLOCKGOESHERE
