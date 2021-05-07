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

var script = vue.defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            required: true
        }
    },
    setup: function () {
        var count = vue.ref(0);
        return { count: count };
    }
});

const _withId = /*#__PURE__*/vue.withScopeId("data-v-538af9d5");

vue.pushScopeId("data-v-538af9d5");
const _hoisted_1 = { class: "a" };
vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (vue.openBlock(), vue.createBlock(vue.Fragment, null, [
    vue.createVNode("h1", _hoisted_1, vue.toDisplayString(_ctx.msg), 1 /* TEXT */),
    vue.createVNode("button", {
      onClick: _cache[1] || (_cache[1] = $event => (_ctx.count++))
    }, "count is: " + vue.toDisplayString(_ctx.count), 1 /* TEXT */)
  ], 64 /* STABLE_FRAGMENT */))
});

script.render = render;
script.__scopeId = "data-v-538af9d5";
script.__file = "components/HW/HelloWorld.vue";

script.install = function (Vue) {
  Vue.component(script.name, script);
};

var Coms = {
  Demo: Demo,
  HW: script
};

exports.Demo = Demo;
exports.HW = script;
exports.default = Coms;
