// config SW

let swLocation = "sw.js";

//"/pwa-bootstrap-1/sw.js"
if (navigator.serviceWorker){
  if(window.location.href.includes("localhost")) swLocation = "/sw.js"
  navigator.serviceWorker.register(swLocation);
}

//Logic of web app
console.log("Hello World");



