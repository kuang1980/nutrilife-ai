import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const root=new URL('../',import.meta.url);
test('app assets and manifest support a GitHub project subdirectory',async()=>{
 const html=await readFile(new URL('index.html',root),'utf8');
 const app=await readFile(new URL('src/app.js',root),'utf8');
 assert.match(html,/href="\.\/src\/style.css"/);assert.match(html,/src="\.\/src\/app.js"/);
 assert.doesNotMatch(html,/(?:src|href)="\/(?!\/)/);
 assert.doesNotMatch(app,/src="\/public/);assert.match(app,/register\('\.\/sw.js'\)/);
 const manifest=JSON.parse(await readFile(new URL('manifest.webmanifest',root),'utf8'));
 assert.equal(new URL(manifest.start_url,'https://example.github.io/nutrilife-ai/').pathname,'/nutrilife-ai/');
 assert.equal(manifest.display,'standalone');
});
test('offline cache stays within this project and preserves unrelated caches',async()=>{
 const code=await readFile(new URL('sw.js',root),'utf8');const handlers={};let added=[],deleted=[];
 const scope='https://example.github.io/nutrilife-ai/';const prefix='nutrilife-shell-'+encodeURIComponent(scope)+'-';
 const self={registration:{scope},addEventListener:(name,fn)=>handlers[name]=fn,skipWaiting:async()=>{},clients:{claim:async()=>{}}};
 const cached=new Response('cached shell');
 const caches={open:async()=>({addAll:async urls=>{added=urls;},put:async()=>{}}),keys:async()=>[prefix+'v1',prefix+'v2','another-project-cache'],delete:async k=>deleted.push(k),match:async url=>url===scope?cached:undefined};
 vm.runInNewContext(code,{self,caches,URL,Response,fetch:async()=>{throw Error('offline');}});
 let pending;handlers.install({waitUntil:p=>pending=p});await pending;
 assert.ok(added.length>=8);assert.ok(added.every(url=>url.startsWith(scope)));
 handlers.activate({waitUntil:p=>pending=p});await pending;assert.deepEqual(deleted,[prefix+'v1']);
 let result;handlers.fetch({request:{method:'GET',url:scope+'?demo=1'},respondWith:p=>result=p,waitUntil:()=>{}});
 assert.equal(await (await result).text(),'cached shell');
 result=undefined;handlers.fetch({request:{method:'GET',url:'https://example.github.io/other/'},respondWith:p=>result=p});assert.equal(result,undefined);
});
