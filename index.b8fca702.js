// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eWdrD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3cYfC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rows", ()=>rows);
parcelHelpers.export(exports, "cells", ()=>cells);
var _domFunctions = require("./domFunctions");
var _helpers = require("./helpers");
var _moveFunctions = require("./moveFunctions");
const rows = document.getElementsByClassName("field-row");
const cells = document.getElementsByClassName("field-cell");
const button = document.querySelector(".button");
const message = document.querySelectorAll(".message");
const score = document.querySelector(".game-score");
let isPlaying = false;
const resetTheGame = ()=>{
    button.removeEventListener("click", resetTheGame);
    (0, _domFunctions.clearCells)();
    score.textContent = 0;
    (0, _domFunctions.handleButtonChange)(button, "Start");
    message[0].classList.add("hidden");
    message[1].classList.add("hidden");
    message[2].classList.remove("hidden");
    button.addEventListener("click", startTheGame);
    isPlaying = false;
};
const startTheGame = ()=>{
    button.removeEventListener("click", startTheGame);
    (0, _domFunctions.addRandomCell)();
    (0, _domFunctions.handleButtonChange)(button, "Restart");
    button.addEventListener("click", resetTheGame);
    message[2].classList.add("hidden");
    isPlaying = true;
};
button.addEventListener("click", startTheGame);
document.addEventListener("keydown", (e)=>{
    if (!isPlaying) return;
    if ((0, _helpers.isGameOver)(cells)) {
        message[0].classList.remove("hidden");
        isPlaying = false;
        return;
    }
    switch(e.key){
        case "ArrowUp":
            (0, _moveFunctions.moveUp)();
            break;
        case "ArrowDown":
            (0, _moveFunctions.moveDown)();
            break;
        case "ArrowLeft":
            (0, _moveFunctions.moveLeft)();
            break;
        case "ArrowRight":
            (0, _moveFunctions.moveRight)();
            break;
        default:
            break;
    }
    score.textContent = (0, _helpers.getTotalPoints)(cells);
    if ((0, _helpers.isWin)(cells)) {
        message[1].classList.remove("hidden");
        isPlaying = false;
    }
});
// MOBILE - SWIPE
const swipeArea = document.querySelector(".game-field");
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;
swipeArea.addEventListener("touchstart", (event)=>{
    event.preventDefault();
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
});
swipeArea.addEventListener("touchend", (event)=>{
    touchEndX = event.changedTouches[0].clientX;
    touchEndY = event.changedTouches[0].clientY;
    handleSwipe();
});
function handleSwipe() {
    if (!isPlaying) return;
    if ((0, _helpers.isGameOver)(cells)) {
        message[0].classList.remove("hidden");
        isPlaying = false;
        return;
    }
    const swipeDistanceX = touchEndX - touchStartX;
    const swipeDistanceY = touchEndY - touchStartY;
    const minSwipeDistance = 25;
    const isHorizontalSwipe = Math.abs(swipeDistanceX) > Math.abs(swipeDistanceY);
    if (isHorizontalSwipe) {
        const isRightSwipe = swipeDistanceX > minSwipeDistance;
        const isLeftSwipe = swipeDistanceX < -minSwipeDistance;
        if (isRightSwipe) (0, _moveFunctions.moveRight)();
        else if (isLeftSwipe) (0, _moveFunctions.moveLeft)();
    } else {
        const isDownSwipe = swipeDistanceY > minSwipeDistance;
        const isUpSwipe = swipeDistanceY < -minSwipeDistance;
        if (isDownSwipe) (0, _moveFunctions.moveDown)();
        else if (isUpSwipe) (0, _moveFunctions.moveUp)();
    }
    score.textContent = (0, _helpers.getTotalPoints)(cells);
    if ((0, _helpers.isWin)(cells)) {
        message[1].classList.remove("hidden");
        isPlaying = false;
    }
}

},{"./domFunctions":"h4Ixj","./helpers":"luDvE","./moveFunctions":"gBEuo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h4Ixj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GRID_SIZE", ()=>GRID_SIZE);
parcelHelpers.export(exports, "fillCell", ()=>fillCell);
parcelHelpers.export(exports, "clearCells", ()=>clearCells);
parcelHelpers.export(exports, "createEmptyCell", ()=>createEmptyCell);
parcelHelpers.export(exports, "addRandomCell", ()=>addRandomCell);
parcelHelpers.export(exports, "handleButtonChange", ()=>handleButtonChange);
parcelHelpers.export(exports, "updateBoard", ()=>updateBoard);
var _helpers = require("./helpers");
var _main = require("./main");
const GRID_SIZE = 4;
const removeModifierClass = (domNode)=>{
    const classModifier = domNode.classList.item(1);
    if (classModifier) domNode.classList.remove(classModifier);
};
const fillCell = (cell, value)=>{
    removeModifierClass(cell);
    cell.textContent = value;
    cell.classList.add(`field-cell--${value}`);
};
const clearCells = ()=>{
    [
        ...(0, _main.cells)
    ].forEach((cell)=>{
        cell.textContent = null;
        removeModifierClass(cell);
    });
};
const createEmptyCell = ()=>{
    const cell = document.createElement("td");
    cell.classList.add("field-cell");
    return cell;
};
const addRandomCell = ()=>{
    const randomCell = (0, _main.rows)[(0, _helpers.getRandomIndex)(GRID_SIZE)].children[(0, _helpers.getRandomIndex)(GRID_SIZE)];
    const value = Math.random() < 0.1 ? 4 : 2;
    if (randomCell.textContent) addRandomCell();
    else fillCell(randomCell, value);
};
const handleButtonChange = (targetedButton, newButtonLabel)=>{
    removeModifierClass(targetedButton);
    targetedButton.classList.add(newButtonLabel.toLowerCase());
    targetedButton.textContent = newButtonLabel;
};
const updateBoard = (newCells)=>{
    [
        ...(0, _main.rows)
    ].forEach((row, i)=>{
        row.innerHTML = "";
        row.append(...newCells[i]);
    });
    addRandomCell();
};

},{"./helpers":"luDvE","./main":"3cYfC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"luDvE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRandomIndex", ()=>getRandomIndex);
parcelHelpers.export(exports, "getSelectedAxis", ()=>getSelectedAxis);
parcelHelpers.export(exports, "getColumns", ()=>getColumns);
parcelHelpers.export(exports, "getRows", ()=>getRows);
parcelHelpers.export(exports, "getTotalPoints", ()=>getTotalPoints);
parcelHelpers.export(exports, "isCellsEqual", ()=>isCellsEqual);
parcelHelpers.export(exports, "hasEmptyCell", ()=>hasEmptyCell);
parcelHelpers.export(exports, "isGameOver", ()=>isGameOver);
parcelHelpers.export(exports, "isWin", ()=>isWin);
const getRandomIndex = (gridSize)=>Math.floor(Math.random() * gridSize);
const getSelectedAxis = (array, y)=>array.reduce((acc, curr, i)=>{
        acc[Math.floor(y ? i % acc.length : i / acc.length)].push(curr);
        return acc;
    }, [
        [],
        [],
        [],
        []
    ]);
const getColumns = (cells)=>{
    return getSelectedAxis([
        ...cells
    ], true);
};
const getRows = (cells)=>{
    return getSelectedAxis([
        ...cells
    ]);
};
const getTotalPoints = (cells)=>[
        ...cells
    ].reduce((acc, curr)=>+curr.textContent > 2 ? acc + +curr.textContent : acc + 0, 0);
const isCellsEqual = (currentCells, newCells)=>[
        ...currentCells
    ].some((cell, i)=>!cell.isEqualNode(newCells.flat()[i]));
const hasEmptyCell = (cells)=>[
        ...cells
    ].some((cell)=>cell.textContent === "");
const isMergePossible = (cells)=>{
    const rowsAndColumns = [
        ...getRows(cells),
        ...getColumns(cells)
    ];
    for (const subArr of rowsAndColumns)for(let i = 0; i < subArr.length; i++){
        if (subArr[i].isEqualNode(subArr[i + 1])) return true;
    }
};
const isGameOver = (cells)=>{
    if (!hasEmptyCell(cells)) return !isMergePossible(cells);
    return false;
};
const isWin = (cells)=>[
        ...cells
    ].some((cell)=>+cell.textContent === 2048);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gBEuo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "moveUp", ()=>moveUp);
parcelHelpers.export(exports, "moveDown", ()=>moveDown);
parcelHelpers.export(exports, "moveLeft", ()=>moveLeft);
parcelHelpers.export(exports, "moveRight", ()=>moveRight);
var _helpers = require("./helpers");
var _domFunctions = require("./domFunctions");
var _main = require("./main");
const mergeCells = (cellsArray)=>{
    const mergedCells = [];
    for(let i = 0; i < cellsArray.length;){
        const currCell = cellsArray[i];
        const nextCell = cellsArray[i + 1];
        if (nextCell && currCell.isEqualNode(nextCell)) {
            (0, _domFunctions.fillCell)(currCell, +currCell.textContent * 2);
            i++;
        }
        i++;
        mergedCells.push(currCell);
    }
    return mergedCells;
};
const getNewCells = (cellsGroup, reversed)=>cellsGroup.map((group)=>{
        const cleanedCellsGroup = group.filter((cell)=>cell.textContent && cell);
        const mergedCellsGroup = mergeCells(cleanedCellsGroup);
        const emptyCellsGroup = Array.from({
            length: (0, _domFunctions.GRID_SIZE) - mergedCellsGroup.length
        }, ()=>(0, _domFunctions.createEmptyCell)());
        if (reversed) return emptyCellsGroup.concat(mergedCellsGroup);
        return mergedCellsGroup.concat(emptyCellsGroup);
    });
const slideCellsHorizontal = (cellsGroup, reversed)=>{
    const newRowCells = getNewCells(cellsGroup, reversed);
    if ((0, _helpers.isCellsEqual)((0, _main.cells), newRowCells)) (0, _domFunctions.updateBoard)(newRowCells);
};
const slideCellsVertical = (cellsGroup, reversed)=>{
    const newColumnCells = getNewCells(cellsGroup, reversed);
    const newColumnCellsToRow = (0, _helpers.getSelectedAxis)(newColumnCells.flat(), true);
    if ((0, _helpers.isCellsEqual)((0, _main.cells), newColumnCellsToRow)) (0, _domFunctions.updateBoard)(newColumnCellsToRow);
};
const moveUp = ()=>{
    slideCellsVertical((0, _helpers.getColumns)((0, _main.cells)));
};
const moveDown = ()=>{
    slideCellsVertical((0, _helpers.getColumns)((0, _main.cells)), true);
};
const moveLeft = ()=>{
    slideCellsHorizontal((0, _helpers.getRows)((0, _main.cells)));
};
const moveRight = ()=>{
    slideCellsHorizontal((0, _helpers.getRows)((0, _main.cells)), true);
};

},{"./helpers":"luDvE","./domFunctions":"h4Ixj","./main":"3cYfC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["eWdrD","3cYfC"], "3cYfC", "parcelRequire7546")

//# sourceMappingURL=index.b8fca702.js.map
