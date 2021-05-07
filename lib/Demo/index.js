'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var Demo = vue.defineComponent({
  name: 'Demo',
  setup: function () {
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
