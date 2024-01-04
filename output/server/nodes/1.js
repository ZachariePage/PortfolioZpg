

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.vZGoBQDH.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.mN9cRR75.js","_app/immutable/chunks/singletons.Mm5wFJ2y.js"];
export const stylesheets = [];
export const fonts = [];
