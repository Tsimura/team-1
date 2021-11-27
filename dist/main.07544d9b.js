// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\Montserrat-Light.eot":[["Montserrat-Light.5fbce1b5.eot","fonts/Montserrat-Light.eot"],"fonts/Montserrat-Light.eot"],"./..\\fonts\\Montserrat-Light.woff":[["Montserrat-Light.69068b68.woff","fonts/Montserrat-Light.woff"],"fonts/Montserrat-Light.woff"],"./..\\fonts\\Montserrat-Light.ttf":[["Montserrat-Light.fbb571cf.ttf","fonts/Montserrat-Light.ttf"],"fonts/Montserrat-Light.ttf"],"./..\\fonts\\Montserrat-Light.svg":[["Montserrat-Light.17116f7f.svg","fonts/Montserrat-Light.svg"],"fonts/Montserrat-Light.svg"],"./..\\fonts\\Montserrat-Bold.eot":[["Montserrat-Bold.70d570c7.eot","fonts/Montserrat-Bold.eot"],"fonts/Montserrat-Bold.eot"],"./..\\fonts\\Montserrat-Bold.woff":[["Montserrat-Bold.73e94c2c.woff","fonts/Montserrat-Bold.woff"],"fonts/Montserrat-Bold.woff"],"./..\\fonts\\Montserrat-Bold.ttf":[["Montserrat-Bold.f3410305.ttf","fonts/Montserrat-Bold.ttf"],"fonts/Montserrat-Bold.ttf"],"./..\\fonts\\Montserrat-Bold.svg":[["Montserrat-Bold.0fff2121.svg","fonts/Montserrat-Bold.svg"],"fonts/Montserrat-Bold.svg"],"./..\\fonts\\Montserrat-Medium.eot":[["Montserrat-Medium.696236a0.eot","fonts/Montserrat-Medium.eot"],"fonts/Montserrat-Medium.eot"],"./..\\fonts\\Montserrat-Medium.woff":[["Montserrat-Medium.dc2be608.woff","fonts/Montserrat-Medium.woff"],"fonts/Montserrat-Medium.woff"],"./..\\fonts\\Montserrat-Medium.ttf":[["Montserrat-Medium.d1110365.ttf","fonts/Montserrat-Medium.ttf"],"fonts/Montserrat-Medium.ttf"],"./..\\fonts\\Montserrat-Medium.svg":[["Montserrat-Medium.0aec92ab.svg","fonts/Montserrat-Medium.svg"],"fonts/Montserrat-Medium.svg"],"./..\\fonts\\Montserrat-Regular.eot":[["Montserrat-Regular.21b801b8.eot","fonts/Montserrat-Regular.eot"],"fonts/Montserrat-Regular.eot"],"./..\\fonts\\Montserrat-Regular.woff":[["Montserrat-Regular.1b35f2ae.woff","fonts/Montserrat-Regular.woff"],"fonts/Montserrat-Regular.woff"],"./..\\fonts\\Montserrat-Regular.ttf":[["Montserrat-Regular.44e710c1.ttf","fonts/Montserrat-Regular.ttf"],"fonts/Montserrat-Regular.ttf"],"./..\\fonts\\Montserrat-Regular.svg":[["Montserrat-Regular.6f6bdac5.svg","fonts/Montserrat-Regular.svg"],"fonts/Montserrat-Regular.svg"],"./..\\fonts\\CaviarDreams.eot":[["CaviarDreams.4558e7e0.eot","fonts/CaviarDreams.eot"],"fonts/CaviarDreams.eot"],"./..\\fonts\\CaviarDreams.woff":[["CaviarDreams.8fa85100.woff","fonts/CaviarDreams.woff"],"fonts/CaviarDreams.woff"],"./..\\fonts\\CaviarDreams.ttf":[["CaviarDreams.064434d8.ttf","fonts/CaviarDreams.ttf"],"fonts/CaviarDreams.ttf"],"./..\\fonts\\CaviarDreams.svg":[["CaviarDreams.892ff6fb.svg","fonts/CaviarDreams.svg"],"fonts/CaviarDreams.svg"],"./..\\images\\background\\background-photo-mobile.jpg":[["background-photo-mobile.9063cedd.jpg","images/background/background-photo-mobile.jpg"],"images/background/background-photo-mobile.jpg"],"./..\\images\\background\\background-photo-mobile@2x.jpg":[["background-photo-mobile@2x.76369665.jpg","images/background/background-photo-mobile@2x.jpg"],"images/background/background-photo-mobile@2x.jpg"],"./..\\images\\background\\background-photo-tablet.jpg":[["background-photo-tablet.ee19431c.jpg","images/background/background-photo-tablet.jpg"],"images/background/background-photo-tablet.jpg"],"./..\\images\\background\\background-photo-tablet@2x.jpg":[["background-photo-tablet@2x.44679be6.jpg","images/background/background-photo-tablet@2x.jpg"],"images/background/background-photo-tablet@2x.jpg"],"./..\\images\\background\\background-photo-desctop.jpg":[["background-photo-desctop.fae4a59e.jpg","images/background/background-photo-desctop.jpg"],"images/background/background-photo-desctop.jpg"],"./..\\images\\background\\background-photo-desctop@2x.jpg":[["background-photo-desctop@2x.f4d948f0.jpg","images/background/background-photo-desctop@2x.jpg"],"images/background/background-photo-desctop@2x.jpg"],"./..\\images\\background\\new-bg-tablet.jpg":[["new-bg-tablet.158699fa.jpg","images/background/new-bg-tablet.jpg"],"images/background/new-bg-tablet.jpg"],"./..\\images\\background\\new-bg-tablet@2x.jpg":[["new-bg-tablet@2x.66b182a5.jpg","images/background/new-bg-tablet@2x.jpg"],"images/background/new-bg-tablet@2x.jpg"],"./..\\images\\background\\new-bg-desctop.jpg":[["new-bg-desctop.a0c0a3dd.jpg","images/background/new-bg-desctop.jpg"],"images/background/new-bg-desctop.jpg"],"./..\\images\\background\\new-bg-desctop@2x.jpg":[["new-bg-desctop@2x.91dff230.jpg","images/background/new-bg-desctop@2x.jpg"],"images/background/new-bg-desctop@2x.jpg"],"./..\\images\\mobile\\3d-modelling\\mobile-modelling.jpg":[["mobile-modelling.82f7b916.jpg","images/mobile/3d-modelling/mobile-modelling.jpg"],"images/mobile/3d-modelling/mobile-modelling.jpg"],"./..\\images\\mobile\\3d-modelling\\mobile-modelling@2x.jpg":[["mobile-modelling@2x.450bb964.jpg","images/mobile/3d-modelling/mobile-modelling@2x.jpg"],"images/mobile/3d-modelling/mobile-modelling@2x.jpg"],"./..\\images\\tablet\\3d-modelling\\tablet-modelling.jpg":[["tablet-modelling.b20bcffd.jpg","images/tablet/3d-modelling/tablet-modelling.jpg"],"images/tablet/3d-modelling/tablet-modelling.jpg"],"./..\\images\\tablet\\3d-modelling\\tablet-modelling@2x.jpg":[["tablet-modelling@2x.cc9e7313.jpg","images/tablet/3d-modelling/tablet-modelling@2x.jpg"],"images/tablet/3d-modelling/tablet-modelling@2x.jpg"],"./..\\images\\desktop\\3d-modelling\\desktop-modelling.jpg":[["desktop-modelling.c177a603.jpg","images/desktop/3d-modelling/desktop-modelling.jpg"],"images/desktop/3d-modelling/desktop-modelling.jpg"],"./..\\images\\desktop\\3d-modelling\\desktop-modelling@2x.jpg":[["desktop-modelling@2x.b85d9adf.jpg","images/desktop/3d-modelling/desktop-modelling@2x.jpg"],"images/desktop/3d-modelling/desktop-modelling@2x.jpg"],"./..\\images\\mobile\\3d-modelling\\mashine.jpg":[["mashine.542bff21.jpg","images/mobile/3d-modelling/mashine.jpg"],"images/mobile/3d-modelling/mashine.jpg"],"./..\\images\\mobile\\3d-modelling\\mashine@2x.jpg":[["mashine@2x.91caf2d3.jpg","images/mobile/3d-modelling/mashine@2x.jpg"],"images/mobile/3d-modelling/mashine@2x.jpg"],"./..\\images\\tablet\\3d-modelling\\mashine.jpg":[["mashine.6984e71b.jpg","images/tablet/3d-modelling/mashine.jpg"],"images/tablet/3d-modelling/mashine.jpg"],"./..\\images\\tablet\\3d-modelling\\mashine@2x.jpg":[["mashine@2x.15ac31be.jpg","images/tablet/3d-modelling/mashine@2x.jpg"],"images/tablet/3d-modelling/mashine@2x.jpg"],"./..\\images\\desktop\\3d-modelling\\mashine.jpg":[["mashine.ee7ff89e.jpg","images/desktop/3d-modelling/mashine.jpg"],"images/desktop/3d-modelling/mashine.jpg"],"./..\\images\\desktop\\3d-modelling\\mashine@2x.jpg":[["mashine@2x.0989d875.jpg","images/desktop/3d-modelling/mashine@2x.jpg"],"images/desktop/3d-modelling/mashine@2x.jpg"],"./..\\images\\tablet\\3d-scanning\\scan-bcg-tablet@1x.png":[["scan-bcg-tablet@1x.e5c30d99.png","images/tablet/3d-scanning/scan-bcg-tablet@1x.png"],"images/tablet/3d-scanning/scan-bcg-tablet@1x.png"],"./..\\images\\tablet\\3d-scanning\\scan-bcg-tablet@2x.png":[["scan-bcg-tablet@2x.b7825f27.png","images/tablet/3d-scanning/scan-bcg-tablet@2x.png"],"images/tablet/3d-scanning/scan-bcg-tablet@2x.png"],"./..\\images\\desktop\\3d-scanning\\scan-bcg-desktop@1x.png":[["scan-bcg-desktop@1x.a0ed56d4.png","images/desktop/3d-scanning/scan-bcg-desktop@1x.png"],"images/desktop/3d-scanning/scan-bcg-desktop@1x.png"],"./..\\images\\desktop\\3d-scanning\\scan-bcg-desktop@2x.png":[["scan-bcg-desktop@2x.514ee210.png","images/desktop/3d-scanning/scan-bcg-desktop@2x.png"],"images/desktop/3d-scanning/scan-bcg-desktop@2x.png"],"./..\\images\\mobile\\3d-scanning\\scan-bcg-mobile@1x.png":[["scan-bcg-mobile@1x.065a777f.png","images/mobile/3d-scanning/scan-bcg-mobile@1x.png"],"images/mobile/3d-scanning/scan-bcg-mobile@1x.png"],"./..\\images\\mobile\\3d-scanning\\scan-bcg-mobile@2x.png":[["scan-bcg-mobile@2x.11171610.png","images/mobile/3d-scanning/scan-bcg-mobile@2x.png"],"images/mobile/3d-scanning/scan-bcg-mobile@2x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\mobile\\3d-scanning\\scan1-mobile@1x.png":[["scan1-mobile@1x.cf01ac23.png","images/mobile/3d-scanning/scan1-mobile@1x.png"],"images/mobile/3d-scanning/scan1-mobile@1x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\mobile\\3d-scanning\\scan2-mobile@1x.png":[["scan2-mobile@1x.0385b3dc.png","images/mobile/3d-scanning/scan2-mobile@1x.png"],"images/mobile/3d-scanning/scan2-mobile@1x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\mobile\\3d-scanning\\scan3-mobile@1x.png":[["scan3-mobile@1x.7a5e82f7.png","images/mobile/3d-scanning/scan3-mobile@1x.png"],"images/mobile/3d-scanning/scan3-mobile@1x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\mobile\\3d-scanning\\scan4-mobile@1x.png":[["scan4-mobile@1x.d73d741e.png","images/mobile/3d-scanning/scan4-mobile@1x.png"],"images/mobile/3d-scanning/scan4-mobile@1x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\tablet\\3d-scanning\\scan1-tablet@2x.png":[["scan1-tablet@2x.0e07c661.png","images/tablet/3d-scanning/scan1-tablet@2x.png"],"images/tablet/3d-scanning/scan1-tablet@2x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\tablet\\3d-scanning\\scan2-tablet@2x.png":[["scan2-tablet@2x.cad26ca8.png","images/tablet/3d-scanning/scan2-tablet@2x.png"],"images/tablet/3d-scanning/scan2-tablet@2x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\tablet\\3d-scanning\\scan3-tablet@2x.png":[["scan3-tablet@2x.a18c89fe.png","images/tablet/3d-scanning/scan3-tablet@2x.png"],"images/tablet/3d-scanning/scan3-tablet@2x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\tablet\\3d-scanning\\scan4-tablet@2x.png":[["scan4-tablet@2x.49e657c4.png","images/tablet/3d-scanning/scan4-tablet@2x.png"],"images/tablet/3d-scanning/scan4-tablet@2x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\tablet\\3d-scanning\\scan1-tablet@1x.png":[["scan1-tablet@1x.2a62f4af.png","images/tablet/3d-scanning/scan1-tablet@1x.png"],"images/tablet/3d-scanning/scan1-tablet@1x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\tablet\\3d-scanning\\scan2-tablet@1x.png":[["scan2-tablet@1x.5ca8ef52.png","images/tablet/3d-scanning/scan2-tablet@1x.png"],"images/tablet/3d-scanning/scan2-tablet@1x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\tablet\\3d-scanning\\scan3-tablet@1x.png":[["scan3-tablet@1x.2113a83f.png","images/tablet/3d-scanning/scan3-tablet@1x.png"],"images/tablet/3d-scanning/scan3-tablet@1x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\tablet\\3d-scanning\\scan4-tablet@1x.png":[["scan4-tablet@1x.2fc97ee7.png","images/tablet/3d-scanning/scan4-tablet@1x.png"],"images/tablet/3d-scanning/scan4-tablet@1x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\desktop\\3d-scanning\\scan1-desktop@1x.png":[["scan1-desktop@1x.ec067898.png","images/desktop/3d-scanning/scan1-desktop@1x.png"],"images/desktop/3d-scanning/scan1-desktop@1x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\desktop\\3d-scanning\\scan2-desktop@1x.png":[["scan2-desktop@1x.625caf08.png","images/desktop/3d-scanning/scan2-desktop@1x.png"],"images/desktop/3d-scanning/scan2-desktop@1x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\desktop\\3d-scanning\\scan3-desktop@1x.png":[["scan3-desktop@1x.662e31f3.png","images/desktop/3d-scanning/scan3-desktop@1x.png"],"images/desktop/3d-scanning/scan3-desktop@1x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\desktop\\3d-scanning\\scan4-desktop@1x.png":[["scan4-desktop@1x.e8af5480.png","images/desktop/3d-scanning/scan4-desktop@1x.png"],"images/desktop/3d-scanning/scan4-desktop@1x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\desktop\\3d-scanning\\scan1-desktop@2x.png":[["scan1-desktop@2x.a869e518.png","images/desktop/3d-scanning/scan1-desktop@2x.png"],"images/desktop/3d-scanning/scan1-desktop@2x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\desktop\\3d-scanning\\scan2-desktop@2x.png":[["scan2-desktop@2x.465d2af3.png","images/desktop/3d-scanning/scan2-desktop@2x.png"],"images/desktop/3d-scanning/scan2-desktop@2x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\desktop\\3d-scanning\\scan3-desktop@2x.png":[["scan3-desktop@2x.2a82aa42.png","images/desktop/3d-scanning/scan3-desktop@2x.png"],"images/desktop/3d-scanning/scan3-desktop@2x.png"],"C:\\Users\\MaG\\Documents\\GitHub\\team-1\\src\\images\\desktop\\3d-scanning\\scan4-desktop@2x.png":[["scan4-desktop@2x.7ce990bd.png","images/desktop/3d-scanning/scan4-desktop@2x.png"],"images/desktop/3d-scanning/scan4-desktop@2x.png"],"./..\\images\\emoji1.png":[["emoji1.c4e18df7.png","images/emoji1.png"],"images/emoji1.png"],"./..\\images\\emoj@2x.png":[["emoj@2x.7e0994d3.png","images/emoj@2x.png"],"images/emoj@2x.png"],"./..\\images\\background\\modal-bg-mobile.jpg":[["modal-bg-mobile.725cc87d.jpg","images/background/modal-bg-mobile.jpg"],"images/background/modal-bg-mobile.jpg"],"./..\\images\\background\\modal-bg-mobile@2x.jpg":[["modal-bg-mobile@2x.2e25d6a1.jpg","images/background/modal-bg-mobile@2x.jpg"],"images/background/modal-bg-mobile@2x.jpg"],"./..\\images\\background\\modal-bg-tablet.jpg":[["modal-bg-tablet.cdf59e32.jpg","images/background/modal-bg-tablet.jpg"],"images/background/modal-bg-tablet.jpg"],"./..\\images\\background\\modal-bg-tablet@2x.jpg":[["modal-bg-tablet@2x.8cd7d7e3.jpg","images/background/modal-bg-tablet@2x.jpg"],"images/background/modal-bg-tablet@2x.jpg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63385" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([]);
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/main.07544d9b.js.map