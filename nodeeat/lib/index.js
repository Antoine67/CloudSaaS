'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vuePropertyDecorator = require('vue-property-decorator');
var vue = require('vue');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

let MenuCardItem = class MenuCardItem extends vuePropertyDecorator.Vue {
    constructor() {
        super(...arguments);
        this.loading = false;
    }
    reserve() {
        this.loading = true;
        setTimeout(() => (this.loading = false), 2000);
    }
};
__decorate([
    vuePropertyDecorator.Prop()
], MenuCardItem.prototype, "menu", void 0);
MenuCardItem = __decorate([
    vuePropertyDecorator.Component
], MenuCardItem);
var script$1 = MenuCardItem;

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_list_item_title = vue.resolveComponent("v-list-item-title");
  const _component_v_list_item_content = vue.resolveComponent("v-list-item-content");
  const _component_v_list_item = vue.resolveComponent("v-list-item");
  const _component_v_list_item_group = vue.resolveComponent("v-list-item-group");
  const _component_v_list = vue.resolveComponent("v-list");
  const _component_v_card = vue.resolveComponent("v-card");

  return (vue.openBlock(), vue.createBlock(_component_v_card, {
    class: "mx-auto",
    "max-width": "500"
  }, {
    default: vue.withCtx(() => [
      vue.createVNode("p", null, vue.toDisplayString(_ctx.menu.title), 1 /* TEXT */),
      vue.createVNode(_component_v_list, null, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_v_list_item_group, {
            modelValue: _ctx.menu,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.menu = $event))
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.menu.products, (product) => {
                return (vue.openBlock(), vue.createBlock(_component_v_list_item, {
                  key: product.id
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_v_list_item_content, null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_v_list_item_title, {
                          textContent: vue.toDisplayString(product.title)
                        }, null, 8 /* PROPS */, ["textContent"])
                      ]),
                      _: 2 /* DYNAMIC */
                    }, 1024 /* DYNAMIC_SLOTS */)
                  ]),
                  _: 2 /* DYNAMIC */
                }, 1024 /* DYNAMIC_SLOTS */))
              }), 128 /* KEYED_FRAGMENT */))
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["modelValue"])
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}

script$1.render = render$1;
script$1.__file = "src/components/MenuCardItem.vue";

let RestaurantCardItem = class RestaurantCardItem extends vuePropertyDecorator.Vue {
    constructor() {
        super(...arguments);
        this.loading = false;
    }
    reserve() {
        this.loading = true;
        setTimeout(() => (this.loading = false), 2000);
    }
};
__decorate([
    vuePropertyDecorator.Prop()
], RestaurantCardItem.prototype, "restaurant", void 0);
RestaurantCardItem = __decorate([
    vuePropertyDecorator.Component
], RestaurantCardItem);
var script = RestaurantCardItem;

const _hoisted_1 = { slot: "progress" };
const _hoisted_2 = { class: "grey--text ms-4" };
const _hoisted_3 = { class: "my-4 text-subtitle-1" };
const _hoisted_4 = /*#__PURE__*/vue.createTextVNode(" Commander ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_progress_linear = vue.resolveComponent("v-progress-linear");
  const _component_v_img = vue.resolveComponent("v-img");
  const _component_v_card_title = vue.resolveComponent("v-card-title");
  const _component_v_rating = vue.resolveComponent("v-rating");
  const _component_v_row = vue.resolveComponent("v-row");
  const _component_v_card_text = vue.resolveComponent("v-card-text");
  const _component_v_divider = vue.resolveComponent("v-divider");
  const _component_v_btn = vue.resolveComponent("v-btn");
  const _component_v_card_actions = vue.resolveComponent("v-card-actions");
  const _component_v_card = vue.resolveComponent("v-card");

  return (vue.openBlock(), vue.createBlock(_component_v_card, {
    to: { name: 'RestaurantDetails', params: { id: _ctx.restaurant.id }},
    loading: _ctx.loading,
    class: "mx-auto my-12",
    "max-width": "374"
  }, {
    default: vue.withCtx(() => [
      vue.createVNode("template", _hoisted_1, [
        vue.createVNode(_component_v_progress_linear, {
          color: "deep-purple",
          height: "10",
          indeterminate: ""
        })
      ]),
      vue.createVNode(_component_v_img, {
        height: "250",
        src: _ctx.restaurant.picture
      }, null, 8 /* PROPS */, ["src"]),
      vue.createVNode(_component_v_card_title, null, {
        default: vue.withCtx(() => [
          vue.createTextVNode(vue.toDisplayString(_ctx.restaurant.title), 1 /* TEXT */)
        ]),
        _: 1 /* STABLE */
      }),
      vue.createVNode(_component_v_card_text, null, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_v_row, {
            align: "center",
            class: "mx-0"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_v_rating, {
                value: _ctx.restaurant.rating,
                color: "amber",
                dense: "",
                "half-increments": "",
                readonly: "",
                size: "14"
              }, null, 8 /* PROPS */, ["value"]),
              vue.createVNode("div", _hoisted_2, vue.toDisplayString(_ctx.restaurant.rating), 1 /* TEXT */)
            ]),
            _: 1 /* STABLE */
          }),
          vue.createVNode("div", _hoisted_3, " € • " + vue.toDisplayString(_ctx.restaurant.title), 1 /* TEXT */),
          vue.createVNode("div", null, vue.toDisplayString(_ctx.restaurant.description), 1 /* TEXT */)
        ]),
        _: 1 /* STABLE */
      }),
      vue.createVNode(_component_v_divider, { class: "mx-4" }),
      vue.createVNode(_component_v_card_actions, null, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_v_btn, {
            color: "deep-purple lighten-2",
            text: ""
          }, {
            default: vue.withCtx(() => [
              _hoisted_4
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["to", "loading"]))
}

script.render = render;
script.__file = "src/components/RestaurantCardItem.vue";

exports.MenuCardItem = script$1;
exports.RestaurantCardItem = script;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi9zcmMvY29tcG9uZW50cy9NZW51Q2FyZEl0ZW0udnVlIiwiLi4vc3JjL2NvbXBvbmVudHMvTWVudUNhcmRJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTJhNmZmMiZsYW5nLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvUmVzdGF1cmFudENhcmRJdGVtLnZ1ZSIsIi4uL3NyYy9jb21wb25lbnRzL1Jlc3RhdXJhbnRDYXJkSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjRkZjkyNjAmbGFuZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jcmVhdGVCaW5kaW5nKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCI8dGVtcGxhdGU+XHJcblxyXG4gIDx2LWNhcmRcclxuICAgIGNsYXNzPVwibXgtYXV0b1wiXHJcbiAgICBtYXgtd2lkdGg9XCI1MDBcIlxyXG4gID5cclxuICA8cD57e21lbnUudGl0bGV9fTwvcD5cclxuICAgIDx2LWxpc3Q+XHJcbiAgICAgIDx2LWxpc3QtaXRlbS1ncm91cCB2LW1vZGVsPVwibWVudVwiPlxyXG4gICAgICAgIDx2LWxpc3QtaXRlbVxyXG4gICAgICAgICAgdi1mb3I9XCJwcm9kdWN0IGluIG1lbnUucHJvZHVjdHNcIlxyXG4gICAgICAgICAgOmtleT1cInByb2R1Y3QuaWRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDx2LWxpc3QtaXRlbS1jb250ZW50PlxyXG4gICAgICAgICAgICA8di1saXN0LWl0ZW0tdGl0bGUgdi10ZXh0PVwicHJvZHVjdC50aXRsZVwiPjwvdi1saXN0LWl0ZW0tdGl0bGU+XHJcbiAgICAgICAgICA8L3YtbGlzdC1pdGVtLWNvbnRlbnQ+XHJcbiAgICAgICAgPC92LWxpc3QtaXRlbT5cclxuICAgICAgPC92LWxpc3QtaXRlbS1ncm91cD5cclxuICAgIDwvdi1saXN0PlxyXG4gIDwvdi1jYXJkPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3AsIFZ1ZSB9IGZyb20gJ3Z1ZS1wcm9wZXJ0eS1kZWNvcmF0b3InO1xyXG5cclxuQENvbXBvbmVudFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51Q2FyZEl0ZW0gZXh0ZW5kcyBWdWUge1xyXG4gIEBQcm9wKCkgcHJpdmF0ZSBtZW51ITogYW55O1xyXG5cclxuICBsb2FkaW5nID0gZmFsc2VcclxuICBcclxuXHJcbiAgcmVzZXJ2ZSAoKSB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMubG9hZGluZyA9IGZhbHNlKSwgMjAwMClcclxuICAgIH1cclxufVxyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG5cclxuICA8di1jYXJkXHJcbiAgICBjbGFzcz1cIm14LWF1dG9cIlxyXG4gICAgbWF4LXdpZHRoPVwiNTAwXCJcclxuICA+XHJcbiAgPHA+e3ttZW51LnRpdGxlfX08L3A+XHJcbiAgICA8di1saXN0PlxyXG4gICAgICA8di1saXN0LWl0ZW0tZ3JvdXAgdi1tb2RlbD1cIm1lbnVcIj5cclxuICAgICAgICA8di1saXN0LWl0ZW1cclxuICAgICAgICAgIHYtZm9yPVwicHJvZHVjdCBpbiBtZW51LnByb2R1Y3RzXCJcclxuICAgICAgICAgIDprZXk9XCJwcm9kdWN0LmlkXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudD5cclxuICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlIHYtdGV4dD1cInByb2R1Y3QudGl0bGVcIj48L3YtbGlzdC1pdGVtLXRpdGxlPlxyXG4gICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxyXG4gICAgICAgIDwvdi1saXN0LWl0ZW0+XHJcbiAgICAgIDwvdi1saXN0LWl0ZW0tZ3JvdXA+XHJcbiAgICA8L3YtbGlzdD5cclxuICA8L3YtY2FyZD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcblxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9wLCBWdWUgfSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcclxuXHJcbkBDb21wb25lbnRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUNhcmRJdGVtIGV4dGVuZHMgVnVlIHtcclxuICBAUHJvcCgpIHByaXZhdGUgbWVudSE6IGFueTtcclxuXHJcbiAgbG9hZGluZyA9IGZhbHNlXHJcbiAgXHJcblxyXG4gIHJlc2VydmUgKCkge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLmxvYWRpbmcgPSBmYWxzZSksIDIwMDApXHJcbiAgICB9XHJcbn1cclxuXHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuXHJcbiAgPHYtY2FyZFxyXG4gICAgOnRvPVwieyBuYW1lOiAnUmVzdGF1cmFudERldGFpbHMnLCBwYXJhbXM6IHsgaWQ6IHJlc3RhdXJhbnQuaWQgfX1cIlxyXG4gICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcclxuICAgIGNsYXNzPVwibXgtYXV0byBteS0xMlwiXHJcbiAgICBtYXgtd2lkdGg9XCIzNzRcIlxyXG4gID5cclxuICAgIDx0ZW1wbGF0ZSBzbG90PVwicHJvZ3Jlc3NcIj5cclxuICAgICAgPHYtcHJvZ3Jlc3MtbGluZWFyXHJcbiAgICAgICAgY29sb3I9XCJkZWVwLXB1cnBsZVwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTBcIlxyXG4gICAgICAgIGluZGV0ZXJtaW5hdGVcclxuICAgICAgPjwvdi1wcm9ncmVzcy1saW5lYXI+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgIDx2LWltZ1xyXG4gICAgICBoZWlnaHQ9XCIyNTBcIlxyXG4gICAgICA6c3JjPXJlc3RhdXJhbnQucGljdHVyZVxyXG4gICAgPjwvdi1pbWc+XHJcblxyXG4gICAgPHYtY2FyZC10aXRsZT57e3Jlc3RhdXJhbnQudGl0bGV9fTwvdi1jYXJkLXRpdGxlPlxyXG5cclxuICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgPHYtcm93XHJcbiAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgIGNsYXNzPVwibXgtMFwiXHJcbiAgICAgID5cclxuICAgICAgICA8di1yYXRpbmdcclxuICAgICAgICAgIDp2YWx1ZT1yZXN0YXVyYW50LnJhdGluZ1xyXG4gICAgICAgICAgY29sb3I9XCJhbWJlclwiXHJcbiAgICAgICAgICBkZW5zZVxyXG4gICAgICAgICAgaGFsZi1pbmNyZW1lbnRzXHJcbiAgICAgICAgICByZWFkb25seVxyXG4gICAgICAgICAgc2l6ZT1cIjE0XCJcclxuICAgICAgICA+PC92LXJhdGluZz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdyZXktLXRleHQgbXMtNFwiPlxyXG4gICAgICAgICAge3tyZXN0YXVyYW50LnJhdGluZ319IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3Ytcm93PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cIm15LTQgdGV4dC1zdWJ0aXRsZS0xXCI+XHJcbiAgICAgICAg4oKsIOKAoiB7e3Jlc3RhdXJhbnQudGl0bGV9fVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXY+e3tyZXN0YXVyYW50LmRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICAgIDwvdi1jYXJkLXRleHQ+XHJcblxyXG4gICAgPHYtZGl2aWRlciBjbGFzcz1cIm14LTRcIj48L3YtZGl2aWRlcj5cclxuXHJcblxyXG4gICAgPHYtY2FyZC1hY3Rpb25zPlxyXG4gICAgICA8di1idG5cclxuICAgICAgICBjb2xvcj1cImRlZXAtcHVycGxlIGxpZ2h0ZW4tMlwiXHJcbiAgICAgICAgdGV4dFxyXG4gICAgICA+XHJcbiAgICAgICAgQ29tbWFuZGVyXHJcbiAgICAgIDwvdi1idG4+XHJcbiAgICA8L3YtY2FyZC1hY3Rpb25zPlxyXG4gIDwvdi1jYXJkPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9wLCBWdWUgfSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcclxuXHJcbkBDb21wb25lbnRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdGF1cmFudENhcmRJdGVtIGV4dGVuZHMgVnVlIHtcclxuICBAUHJvcCgpIHByaXZhdGUgcmVzdGF1cmFudCE6IGFueTtcclxuXHJcbiAgbG9hZGluZyA9IGZhbHNlXHJcbiAgXHJcblxyXG4gIHJlc2VydmUgKCkge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLmxvYWRpbmcgPSBmYWxzZSksIDIwMDApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcblxyXG4gIDx2LWNhcmRcclxuICAgIDp0bz1cInsgbmFtZTogJ1Jlc3RhdXJhbnREZXRhaWxzJywgcGFyYW1zOiB7IGlkOiByZXN0YXVyYW50LmlkIH19XCJcclxuICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXHJcbiAgICBjbGFzcz1cIm14LWF1dG8gbXktMTJcIlxyXG4gICAgbWF4LXdpZHRoPVwiMzc0XCJcclxuICA+XHJcbiAgICA8dGVtcGxhdGUgc2xvdD1cInByb2dyZXNzXCI+XHJcbiAgICAgIDx2LXByb2dyZXNzLWxpbmVhclxyXG4gICAgICAgIGNvbG9yPVwiZGVlcC1wdXJwbGVcIlxyXG4gICAgICAgIGhlaWdodD1cIjEwXCJcclxuICAgICAgICBpbmRldGVybWluYXRlXHJcbiAgICAgID48L3YtcHJvZ3Jlc3MtbGluZWFyPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICA8di1pbWdcclxuICAgICAgaGVpZ2h0PVwiMjUwXCJcclxuICAgICAgOnNyYz1yZXN0YXVyYW50LnBpY3R1cmVcclxuICAgID48L3YtaW1nPlxyXG5cclxuICAgIDx2LWNhcmQtdGl0bGU+e3tyZXN0YXVyYW50LnRpdGxlfX08L3YtY2FyZC10aXRsZT5cclxuXHJcbiAgICA8di1jYXJkLXRleHQ+XHJcbiAgICAgIDx2LXJvd1xyXG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICBjbGFzcz1cIm14LTBcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHYtcmF0aW5nXHJcbiAgICAgICAgICA6dmFsdWU9cmVzdGF1cmFudC5yYXRpbmdcclxuICAgICAgICAgIGNvbG9yPVwiYW1iZXJcIlxyXG4gICAgICAgICAgZGVuc2VcclxuICAgICAgICAgIGhhbGYtaW5jcmVtZW50c1xyXG4gICAgICAgICAgcmVhZG9ubHlcclxuICAgICAgICAgIHNpemU9XCIxNFwiXHJcbiAgICAgICAgPjwvdi1yYXRpbmc+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmV5LS10ZXh0IG1zLTRcIj5cclxuICAgICAgICAgIHt7cmVzdGF1cmFudC5yYXRpbmd9fSBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC92LXJvdz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJteS00IHRleHQtc3VidGl0bGUtMVwiPlxyXG4gICAgICAgIOKCrCDigKIge3tyZXN0YXVyYW50LnRpdGxlfX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2Pnt7cmVzdGF1cmFudC5kZXNjcmlwdGlvbn19PC9kaXY+XHJcbiAgICA8L3YtY2FyZC10ZXh0PlxyXG5cclxuICAgIDx2LWRpdmlkZXIgY2xhc3M9XCJteC00XCI+PC92LWRpdmlkZXI+XHJcblxyXG5cclxuICAgIDx2LWNhcmQtYWN0aW9ucz5cclxuICAgICAgPHYtYnRuXHJcbiAgICAgICAgY29sb3I9XCJkZWVwLXB1cnBsZSBsaWdodGVuLTJcIlxyXG4gICAgICAgIHRleHRcclxuICAgICAgPlxyXG4gICAgICAgIENvbW1hbmRlclxyXG4gICAgICA8L3YtYnRuPlxyXG4gICAgPC92LWNhcmQtYWN0aW9ucz5cclxuICA8L3YtY2FyZD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgUHJvcCwgVnVlIH0gZnJvbSAndnVlLXByb3BlcnR5LWRlY29yYXRvcic7XHJcblxyXG5AQ29tcG9uZW50XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3RhdXJhbnRDYXJkSXRlbSBleHRlbmRzIFZ1ZSB7XHJcbiAgQFByb3AoKSBwcml2YXRlIHJlc3RhdXJhbnQhOiBhbnk7XHJcblxyXG4gIGxvYWRpbmcgPSBmYWxzZVxyXG4gIFxyXG5cclxuICByZXNlcnZlICgpIHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5sb2FkaW5nID0gZmFsc2UpLCAyMDAwKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuPC9zY3JpcHQ+Il0sIm5hbWVzIjpbIlZ1ZSIsIlByb3AiLCJDb21wb25lbnQiLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXNDQTtBQUNPLFNBQVMsVUFBVSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtBQUMxRCxJQUFJLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNqSSxJQUFJLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU8sT0FBTyxDQUFDLFFBQVEsS0FBSyxVQUFV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
