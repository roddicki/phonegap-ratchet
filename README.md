# phonegap-Ratchet template
1.This is a demo phonegap application  that shows [Ratchet](https://github.com/maker/ratchet) working with (PhoneGap)[http://phonegap.com]. 
2. It is ready for testing and further development.
3.Note it does not contain a config.xml file
4.It uses the ratchet framework see http://goratchet.com/ for documentation

How to use
----------
1.Create a new phonegap project using Phonegap cli or desktop app 
2.Replace the www directory with this repository.

More information
----------
This repository is based on Ryan Stewart's change to the Ratchet js https://github.com/ryanstewart/phonegap-ratchet-demo but updated with Ratchet v2.0.2

In order to get Ratchet to work with PhoneGap there is a small change to `rachet.js`. In that file:

`if (xhr.readyState == 4) xhr.status == 200 ? success(xhr, options) : failure(options.url);`

has been replaced with

`      if (xhr.readyState == 4) xhr.status == 200 || (xhr.status == 0 && options.url.indexOf('file:///') != -1) ? success(xhr, options) : failure(options.url);`

By also allowing for an XMLHttpRequest status of 0 when we're working with the filesystem, PhoneGap can work with push.js that Ratchet uses. (Thanks to [@macdonst](https://twitter.com/macdonst) for the tip).
(from https://github.com/ryanstewart/phonegap-ratchet-demo)
