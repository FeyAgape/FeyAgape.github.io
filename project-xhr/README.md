[Website](https://feyagape.github.io/project-xhr/)

 Using Asynchronous data request. Using the XHR object to send and recieve data Asynchronous. The site uses the Unsplash API for images and the NYT API for the articles.

### XHR Usage 
There are a number of steps you need to take to send an HTTP request asynchronously with JavaScript.

To Send An Async Request
create an XHR object with the XMLHttpRequest constructor function
use the `.open()` method - set the HTTP method and the URL of the resource to be fetched
set the `.onload` property - set this to a function that will run upon a successful fetch
set the `.onerror` property - set this to a function that will run when an error occurs
use the `.send()` method - send the request

**To Use The Response**
use the `.responseText` property - holds the text of the async request's response

