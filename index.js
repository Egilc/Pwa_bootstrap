// config SW

let swLocation = "sw.js";

//"/pwa-bootstrap-1/sw.js"
if (navigator.serviceWorker){
  if(window.location.href.includes("localhost")) swLocation = "/"
  navigator.serviceWorker.register(swLocation);
}

//Logic of web app
console.log("Hello World");

//Invitation to Install
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
Toasty();

 

// Initialize deferredPrompt for use later to show browser install prompt.

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  //showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  //console.log(`'beforeinstallprompt' event was fired.`);
  const installAppButton = document.getElementById('installAppButton');
  if (installAppButton) {

    installAppButton.addEventListener('click', function () {
      deferredPrompt.prompt();

 

    })

  }

});

 

var option = {

  animation: true,

  delay: 4000

};

function Toasty() {

  var toastHTMLElement = document.getElementById("EpicToast");
  var toastElement = new bootstrap.Toast(toastHTMLElement, option);
  toastElement.show();

}
}
