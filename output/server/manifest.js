export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","alcantara.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.UyWF1w3K.js","app":"_app/immutable/entry/app.cu7G3TUD.js","imports":["_app/immutable/entry/start.UyWF1w3K.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/singletons.Mm5wFJ2y.js","_app/immutable/entry/app.cu7G3TUD.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.mN9cRR75.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
