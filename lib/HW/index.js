import { defineComponent, ref, pushScopeId, popScopeId, openBlock, createBlock, Fragment, createVNode, toDisplayString, withScopeId } from 'vue';

var script = defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            required: true
        }
    },
    setup: () => {
        const count = ref(0);
        return { count };
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

script.render = render;
script.__scopeId = "data-v-538af9d5";
script.__file = "components/HW/HelloWorld.vue";

script.install = function (Vue) {
  Vue.component(script.name, script);
};

export default script;
//# sourceMappingURL=index.js.map
