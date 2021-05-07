import { defineComponent, createVNode, createTextVNode } from 'vue';

var Demo = defineComponent({
  name: 'Demo',
  setup: function () {
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
