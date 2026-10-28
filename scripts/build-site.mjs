import {mkdir,cp,writeFile} from 'node:fs/promises';
const root=new URL('../',import.meta.url);
const target=new URL('site/',root);
await mkdir(target,{recursive:true});
for(const item of ['index.html','src','public','sw.js','manifest.webmanifest'])await cp(new URL(item,root),new URL(item,target),{recursive:true});
await writeFile(new URL('.nojekyll',target),'');
console.log('Built site/: only the app shell and synthetic demo data.');
