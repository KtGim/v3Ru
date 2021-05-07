import { defineComponent, createVNode, createTextVNode } from 'vue';

const Demo = defineComponent({
  name: 'Demo',

  setup() {
    return () => createVNode("div", {
      "class": "demo"
    }, [createTextVNode("Demo")]);
  }

});

Demo.install = function (Vue) {
  Vue.component(Demo.name, Demo);
};

export default Demo;
//# sourceMappingURL=index.js.map
