"use strict";

// build/edge/static.js
var static_default = ["/.nojekyll", "/alcantara.png", "/favicon.png", "/_app/immutable/assets/app.H5y-RLEa.css", "/_app/immutable/assets/marteau.UfHW56Cj.jpg", "/_app/immutable/chunks/index.mN9cRR75.js", "/_app/immutable/chunks/scheduler.V7bLW0bx.js", "/_app/immutable/chunks/singletons.29Dy3bnL.js", "/_app/immutable/entry/app.DNwg5AGe.js", "/_app/immutable/entry/start.c8qzJerz.js", "/_app/immutable/nodes/0.LuceE1mR.js", "/_app/immutable/nodes/1.WjK7Y_nN.js", "/_app/immutable/nodes/2.wYTRiuoT.js", "/_app/version.json"];

// build/edge/_router.js
exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  if (request.method !== "GET") {
    callback(null, request);
    return;
  }
  let uri = request.uri;
  if (static_default.includes(uri)) {
    callback(null, performReWrite(uri, request));
    return;
  }
  if (uri.slice(-1) === "/") {
    uri = uri.substring(0, uri.length - 1);
  }
  if (static_default.includes(uri + "/index.html")) {
    callback(null, performReWrite(uri + "/index.html", request));
    return;
  }
  if (static_default.includes(uri + ".html")) {
    callback(null, performReWrite(uri + ".html", request));
    return;
  }
  callback(null, request);
};
function performReWrite(uri, request) {
  request.uri = uri;
  const domainName = request.origin.custom.customHeaders["s3-host"][0].value;
  request.origin.custom.domainName = domainName;
  request.origin.custom.path = "";
  request.headers["host"] = [{ key: "host", value: domainName }];
  return request;
}
