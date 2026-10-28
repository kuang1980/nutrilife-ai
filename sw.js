// Relative URLs keep offline mode inside this GitHub Pages project.
const PREFIX='nutrilife-shell-'+encodeURIComponent(self.registration.scope)+'-';
const CACHE=PREFIX+'v2';
const shell=['./','./index.html','./src/style.css','./src/app.js','./src/domain.js','./public/meal.svg','./manifest.webmanifest','./public/icon.svg'].map(p=>new URL(p,self.registration.scope).href);
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(shell)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);url.hash='';url.search='';
  if(e.request.method!=='GET'||!shell.includes(url.href))return;
  e.respondWith(fetch(e.request).then(r=>{
    if(r.ok){const copy=r.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put(url.href,copy)));}
    return r;
  }).catch(async()=>await caches.match(url.href)||new Response('Offline file unavailable. Reconnect and reload the demo once.',{status:503,headers:{'Content-Type':'text/plain'}})));
});
