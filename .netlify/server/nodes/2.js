

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.e45fd4b6.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/index.ae027891.js","_app/immutable/chunks/store.9c79a317.js","_app/immutable/chunks/index.ee0540d2.js"];
export const stylesheets = ["_app/immutable/assets/2.751c1253.css"];
export const fonts = [];
