var deferredPrompt;

self.addEventListener("install", event => {
    console.log("Service Workers installing... ", event);
   });
   self.addEventListener("activate", event => {
    console.log("Activating Service Workers ", event);
    return self.clients.claim();
   });
   self.addEventListener("fetch", event => {
    console.log("Fetching something... ", event);
   });
window.addEventListener("beforeinstallprompt", function(event)
{
 console.log("beforeinstallprompt отменен");
 event.preventDefault();
 deferredPrompt = event;
 return false;
});