

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.LuceE1mR.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.mN9cRR75.js"];
export const stylesheets = ["_app/immutable/assets/app.H5y-RLEa.css"];
export const fonts = [];
