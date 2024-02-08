/*
NODE_DEBUG=esm node packages/vitejs-investigation-app/repro.mjs

ESM 73852: Storing file:///home/hiroshi/code/tmp/vite-15829-dedupe/packages/vitejs-investigation-app/repro.mjs (implicit type) in ModuleLoadMap
ESM 73852: Translating StandardModule file:///home/hiroshi/code/tmp/vite-15829-dedupe/packages/vitejs-investigation-app/repro.mjs
ESM 73852: Storing file:///home/hiroshi/code/tmp/vite-15829-dedupe/packages/vitejs-investigation-app/node_modules/picocolors/picocolors.js (implicit type) in ModuleLoadMap
ESM 73852: Translating CJSModule file:///home/hiroshi/code/tmp/vite-15829-dedupe/packages/vitejs-investigation-app/node_modules/picocolors/picocolors.js
ESM 73852: Loading CJSModule file:///home/hiroshi/code/tmp/vite-15829-dedupe/packages/vitejs-investigation-app/node_modules/picocolors/picocolors.js
ESM 73852: Storing file:///home/hiroshi/code/tmp/vite-15829-dedupe/packages/vitejs-investigation-dynamic-import/dist/index.js (implicit type) in ModuleLoadMap
ESM 73852: Translating StandardModule file:///home/hiroshi/code/tmp/vite-15829-dedupe/packages/vitejs-investigation-dynamic-import/dist/index.js
ESM 73852: Storing file:///home/hiroshi/code/tmp/vite-15829-dedupe/packages/vitejs-investigation-dynamic-import/node_modules/picocolors/picocolors.js (implicit type) in ModuleLoadMap
ESM 73852: Translating CJSModule file:///home/hiroshi/code/tmp/vite-15829-dedupe/packages/vitejs-investigation-dynamic-import/node_modules/picocolors/picocolors.js
ESM 73852: Loading CJSModule file:///home/hiroshi/code/tmp/vite-15829-dedupe/packages/vitejs-investigation-dynamic-import/node_modules/picocolors/picocolors.js
false
*/

async function main() {
  const dep1 = await import("picocolors")

  const lib = await import("@vitejs-investigation/dynamic-import")
  const dep2 = await lib.getDep();

  console.log(dep1 === dep2);
}

main()
