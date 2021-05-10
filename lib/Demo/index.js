'use strict';



function __$styleInject(css) {
    if (!css) return;

    if (typeof window == 'undefined') return;
    var style = document.createElement('style');
    style.setAttribute('media', 'screen');

    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

__$styleInject(".demo {\n  color: red;\n  font-size: 20px;\n}\n");

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
