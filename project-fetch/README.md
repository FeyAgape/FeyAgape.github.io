[Website](https://feyagape.github.io/project-fetch/)

 Using Asynchronous data request. Using the The `fetch()` method to send and recieve data Asynchronous. The site uses the Unsplash API for images and the NYT API for the articles.

###  `fetch()` method 

Fetch is the new way to make network requests! After looking at all of the manual setup that needs to go into setting up an XMLHttpRequest, you might be feeling (like I sure did!) that a lot of complexity went into making a simple request. If all I want is an image from Unsplash, why do I need to do all this setup before I can even make the request? I just want an image file, so let me just ask for the file without having to drill through the unnecessarily complicated XHR spec.

Fetch is a new API that was built to make requesting resources (primarily across a network) a whole lot easier. One thing that makes the new Fetch API a lot nicer than the old XHR way of doing things is that Fetch is promise-based!

Hopefully you're sold that Fetch is the way of the future for making requests, so let's see it in action!

## ⚠️ Fetch Is Promise-based ⚠️
As mentioned above, the new Fetch API utilizes Promises under the hood. If you've got a handle on how Promises work, then give yourself a pat on the back then skip down to the next section. If the word "Promises" makes you feel a little queasy and unsure of your life's future, don't panic! Breathe! Then head over to our short course on JavaScript Promises to level up your JavaScript muscles.

## ⚠️ Might Need A Polyfill ⚠️
Check out [http://caniuse.com/#feat=fetch](http://caniuse.com/#feat=fetch) to see if your browser supports this awesome new API!

If your browser is not supported, just add [this polyfill](https://github.com/github/fetch) to your project, so you can start using Fetch even without your browser supporting it!
