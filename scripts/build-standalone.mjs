import {readFile,writeFile} from 'node:fs/promises';
const root=new URL('../',import.meta.url);
const read=p=>readFile(new URL(p,root),'utf8');
const [html,css,domain,app,svg]=await Promise.all(['index.html','src/style.css','src/domain.js','src/app.js','public/meal.svg'].map(read));
const art='data:image/svg+xml;base64,'+Buffer.from(svg).toString('base64');
const script=domain.replaceAll('export ','')+'\n'+app.replace(/^import .*?;\n/,'').replaceAll('./public/meal.svg',art);
const output=html.replace(/<link rel="(?:manifest|icon)"[^>]*>/g,'').replace('<link rel="stylesheet" href="./src/style.css">',`<style>${css}</style>`).replace('<script type="module" src="./src/app.js"></script>','').replace('</body>',`<script type="module">${script.replaceAll('</script','<\\/script')}</script></body>`);
await writeFile(new URL('demo.html',root),output);
console.log('Built demo.html: self-contained, no server required.');
