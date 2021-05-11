(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Demo = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

  var Demo = vue.defineComponent({
    name: 'Demo',
    setup: function setup() {
      return function () {
        return vue.createVNode("div", {
          "class": "demo"
        }, [vue.createTextVNode("Demo")]);
      };
    }
  });

  Demo.install = function (Vue) {
    Vue.component(Demo.name, Demo);
  };

  exports.default = Demo;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
