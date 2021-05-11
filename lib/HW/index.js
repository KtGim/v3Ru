(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.HW = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

  function __$styleInject(css) {
      if (!css) return;

      if (typeof window == 'undefined') return;
      var style = document.createElement('style');
      style.setAttribute('media', 'screen');

      style.innerHTML = css;
      document.head.appendChild(style);
      return css;
  }

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

  __$styleInject("a[data-v-538af9d5] {\n  color: #42b983;\n}\nlabel[data-v-538af9d5] {\n  margin: 0 0.5em;\n  font-weight: bold;\n}\ncode[data-v-538af9d5] {\n  background-color: #eee;\n  padding: 2px 4px;\n  border-radius: 4px;\n  color: #304455;\n}\n");

  script.render = render;
  script.__scopeId = "data-v-538af9d5";
  script.__file = "components/HW/HelloWorld.vue";

  script.install = function (Vue) {
    Vue.component(script.name, script);
  };

  exports.default = script;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
