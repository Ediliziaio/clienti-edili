import { readFileSync } from 'node:fs';
const source=readFileSync(new URL('../src/data/blogPosts.ts',import.meta.url),'utf8');
const slugs=[...source.matchAll(/slug:\s*"([^"]+)"/g)].map(m=>m[1]);
if(!slugs.length)throw new Error('No published blog slugs found');
for(const slug of slugs){
 const data=readFileSync(new URL('../public/blog-covers/'+slug+'.jpg',import.meta.url));
 if(data[0]!==0xff||data[1]!==0xd8)throw new Error('Invalid JPEG cover for '+slug);
}
console.log('Verified JPEG covers for '+slugs.length+' blog posts');
