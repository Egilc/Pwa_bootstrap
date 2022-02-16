const STATIC_CACHE = "static";
const APP_SHELL = [
 "/",
   "index.html",
   "House.jpeg",
   "Conseiller.jpeg",
   "feliz.jpeg",
   "bootstrap-5.1.3-dist/css/bootstrap.min.css",
  "icons-1.7.2/font/bootstrap-icons.css",
  "bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js",
  
  
  


  
];

self.addEventListener('install', (e) => {
  const cacheStatic = caches
  .open(STATIC_CACHE)
  .then((cache => cache.addAll(APP_SHELL)));

  e.waitUntil(cacheStatic);

 
});
    }).catch(() => caches.match('/page-hors-ligne.html'))
  );
});