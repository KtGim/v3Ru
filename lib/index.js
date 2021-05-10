function __$styleInject(css) {
    if (!css) return;

    if (typeof window == 'undefined') return;
    var style = document.createElement('style');
    style.setAttribute('media', 'screen');

    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

import { defineComponent, createVNode, createTextVNode, ref, pushScopeId, popScopeId, openBlock, createBlock, Fragment, toDisplayString, withScopeId } from 'vue';

__$styleInject(".demo {\n  color: red;\n  font-size: 20px;\n}\n");

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

var script = defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            required: true
        }
    },
    setup: function () {
        var count = ref(0);
        return { count: count };
    }
});

const _withId = /*#__PURE__*/withScopeId("data-v-538af9d5");

pushScopeId("data-v-538af9d5");
const _hoisted_1 = { class: "a" };
popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (openBlock(), createBlock(Fragment, null, [
    createVNode("h1", _hoisted_1, toDisplayString(_ctx.msg), 1 /* TEXT */),
    createVNode("button", {
      onClick: _cache[1] || (_cache[1] = $event => (_ctx.count++))
    }, "count is: " + toDisplayString(_ctx.count), 1 /* TEXT */)
  ], 64 /* STABLE_FRAGMENT */))
});

__$styleInject("a[data-v-538af9d5] {\n  color: #42b983;\n}\nlabel[data-v-538af9d5] {\n  margin: 0 0.5em;\n  font-weight: bold;\n}\ncode[data-v-538af9d5] {\n  background-color: #eee;\n  padding: 2px 4px;\n  border-radius: 4px;\n  color: #304455;\n}\n");

script.render = render;
script.__scopeId = "data-v-538af9d5";
script.__file = "components/HW/HelloWorld.vue";

script.install = function (Vue) {
  Vue.component(script.name, script);
};

export { Demo, script as HW };
