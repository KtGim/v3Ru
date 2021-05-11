function __$styleInject(css) {
    if (!css) return;

    if (typeof window == 'undefined') return;
    var style = document.createElement('style');
    style.setAttribute('media', 'screen');

    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

import { defineComponent, createVNode, createTextVNode } from 'vue';

__$styleInject(".demo {\n  color: red;\n  font-size: 20px;\n}\n.demo a {\n  color: blue;\n}\n");

var Demo = defineComponent({
  name: 'Demo',
  setup: function setup() {
    return function () {
      return createVNode("div", {
        "class": "demo"
      }, [createTextVNode("Demo")]);
    };
  }
});

Demo.install = function (Vue) {
  Vue.component(Demo.name, Demo);
};

export default Demo;
