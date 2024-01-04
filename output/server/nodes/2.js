

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.4p7yk6Yg.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.mN9cRR75.js"];
export const stylesheets = ["_app/immutable/assets/2.BsXIZjgX.css","_app/immutable/assets/app.H5y-RLEa.css"];
export const fonts = [];
