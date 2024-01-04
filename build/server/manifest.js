const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["alcantara.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DjawPtPc.js","app":"_app/immutable/entry/app.CqzIiwkC.js","imports":["_app/immutable/entry/start.DjawPtPc.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/singletons.a4aoRjTV.js","_app/immutable/entry/app.CqzIiwkC.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.mN9cRR75.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-JpHkhnf2.js')),
			__memo(() => import('./chunks/1-m8tlMGN4.js')),
			__memo(() => import('./chunks/2-qk5CDKaK.js'))
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

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
