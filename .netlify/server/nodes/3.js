

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.4f0c792b.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/index.ae027891.js","_app/immutable/chunks/store.9c79a317.js","_app/immutable/chunks/index.ee0540d2.js"];
export const stylesheets = ["_app/immutable/assets/3.d27256a5.css"];
export const fonts = [];
