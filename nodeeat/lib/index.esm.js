import { Vue, Prop, Component } from 'vue-property-decorator';
import { resolveComponent, openBlock, createBlock, withCtx, createVNode, toDisplayString, Fragment, renderList, createTextVNode } from 'vue';

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

let MenuCardItem = class MenuCardItem extends Vue {
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
    Prop()
], MenuCardItem.prototype, "menu", void 0);
MenuCardItem = __decorate([
    Component
], MenuCardItem);
var script$1 = MenuCardItem;

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_list_item_title = resolveComponent("v-list-item-title");
  const _component_v_list_item_content = resolveComponent("v-list-item-content");
  const _component_v_list_item = resolveComponent("v-list-item");
  const _component_v_list_item_group = resolveComponent("v-list-item-group");
  const _component_v_list = resolveComponent("v-list");
  const _component_v_card = resolveComponent("v-card");

  return (openBlock(), createBlock(_component_v_card, {
    class: "mx-auto",
    "max-width": "500"
  }, {
    default: withCtx(() => [
      createVNode("p", null, toDisplayString(_ctx.menu.title), 1 /* TEXT */),
      createVNode(_component_v_list, null, {
        default: withCtx(() => [
          createVNode(_component_v_list_item_group, {
            modelValue: _ctx.menu,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.menu = $event))
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.menu.products, (product) => {
                return (openBlock(), createBlock(_component_v_list_item, {
                  key: product.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_content, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item_title, {
                          textContent: toDisplayString(product.title)
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

let RestaurantCardItem = class RestaurantCardItem extends Vue {
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
    Prop()
], RestaurantCardItem.prototype, "restaurant", void 0);
RestaurantCardItem = __decorate([
    Component
], RestaurantCardItem);
var script = RestaurantCardItem;

const _hoisted_1 = { slot: "progress" };
const _hoisted_2 = { class: "grey--text ms-4" };
const _hoisted_3 = { class: "my-4 text-subtitle-1" };
const _hoisted_4 = /*#__PURE__*/createTextVNode(" Commander ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_progress_linear = resolveComponent("v-progress-linear");
  const _component_v_img = resolveComponent("v-img");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_rating = resolveComponent("v-rating");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_divider = resolveComponent("v-divider");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_v_card = resolveComponent("v-card");

  return (openBlock(), createBlock(_component_v_card, {
    to: { name: 'RestaurantDetails', params: { id: _ctx.restaurant.id }},
    loading: _ctx.loading,
    class: "mx-auto my-12",
    "max-width": "374"
  }, {
    default: withCtx(() => [
      createVNode("template", _hoisted_1, [
        createVNode(_component_v_progress_linear, {
          color: "deep-purple",
          height: "10",
          indeterminate: ""
        })
      ]),
      createVNode(_component_v_img, {
        height: "250",
        src: _ctx.restaurant.picture
      }, null, 8 /* PROPS */, ["src"]),
      createVNode(_component_v_card_title, null, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.restaurant.title), 1 /* TEXT */)
        ]),
        _: 1 /* STABLE */
      }),
      createVNode(_component_v_card_text, null, {
        default: withCtx(() => [
          createVNode(_component_v_row, {
            align: "center",
            class: "mx-0"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_rating, {
                value: _ctx.restaurant.rating,
                color: "amber",
                dense: "",
                "half-increments": "",
                readonly: "",
                size: "14"
              }, null, 8 /* PROPS */, ["value"]),
              createVNode("div", _hoisted_2, toDisplayString(_ctx.restaurant.rating), 1 /* TEXT */)
            ]),
            _: 1 /* STABLE */
          }),
          createVNode("div", _hoisted_3, " € • " + toDisplayString(_ctx.restaurant.title), 1 /* TEXT */),
          createVNode("div", null, toDisplayString(_ctx.restaurant.description), 1 /* TEXT */)
        ]),
        _: 1 /* STABLE */
      }),
      createVNode(_component_v_divider, { class: "mx-4" }),
      createVNode(_component_v_card_actions, null, {
        default: withCtx(() => [
          createVNode(_component_v_btn, {
            color: "deep-purple lighten-2",
            text: ""
          }, {
            default: withCtx(() => [
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

export { script$1 as MenuCardItem, script as RestaurantCardItem };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXNtLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvTWVudUNhcmRJdGVtLnZ1ZSIsIi4uL3NyYy9jb21wb25lbnRzL01lbnVDYXJkSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTEyYTZmZjImbGFuZy5qcyIsIi4uL3NyYy9jb21wb25lbnRzL1Jlc3RhdXJhbnRDYXJkSXRlbS52dWUiLCIuLi9zcmMvY29tcG9uZW50cy9SZXN0YXVyYW50Q2FyZEl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY0ZGY5MjYwJmxhbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY3JlYXRlQmluZGluZyhvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiPHRlbXBsYXRlPlxyXG5cclxuICA8di1jYXJkXHJcbiAgICBjbGFzcz1cIm14LWF1dG9cIlxyXG4gICAgbWF4LXdpZHRoPVwiNTAwXCJcclxuICA+XHJcbiAgPHA+e3ttZW51LnRpdGxlfX08L3A+XHJcbiAgICA8di1saXN0PlxyXG4gICAgICA8di1saXN0LWl0ZW0tZ3JvdXAgdi1tb2RlbD1cIm1lbnVcIj5cclxuICAgICAgICA8di1saXN0LWl0ZW1cclxuICAgICAgICAgIHYtZm9yPVwicHJvZHVjdCBpbiBtZW51LnByb2R1Y3RzXCJcclxuICAgICAgICAgIDprZXk9XCJwcm9kdWN0LmlkXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8di1saXN0LWl0ZW0tY29udGVudD5cclxuICAgICAgICAgICAgPHYtbGlzdC1pdGVtLXRpdGxlIHYtdGV4dD1cInByb2R1Y3QudGl0bGVcIj48L3YtbGlzdC1pdGVtLXRpdGxlPlxyXG4gICAgICAgICAgPC92LWxpc3QtaXRlbS1jb250ZW50PlxyXG4gICAgICAgIDwvdi1saXN0LWl0ZW0+XHJcbiAgICAgIDwvdi1saXN0LWl0ZW0tZ3JvdXA+XHJcbiAgICA8L3YtbGlzdD5cclxuICA8L3YtY2FyZD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcblxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9wLCBWdWUgfSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcclxuXHJcbkBDb21wb25lbnRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUNhcmRJdGVtIGV4dGVuZHMgVnVlIHtcclxuICBAUHJvcCgpIHByaXZhdGUgbWVudSE6IGFueTtcclxuXHJcbiAgbG9hZGluZyA9IGZhbHNlXHJcbiAgXHJcblxyXG4gIHJlc2VydmUgKCkge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLmxvYWRpbmcgPSBmYWxzZSksIDIwMDApXHJcbiAgICB9XHJcbn1cclxuXHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuXHJcbiAgPHYtY2FyZFxyXG4gICAgY2xhc3M9XCJteC1hdXRvXCJcclxuICAgIG1heC13aWR0aD1cIjUwMFwiXHJcbiAgPlxyXG4gIDxwPnt7bWVudS50aXRsZX19PC9wPlxyXG4gICAgPHYtbGlzdD5cclxuICAgICAgPHYtbGlzdC1pdGVtLWdyb3VwIHYtbW9kZWw9XCJtZW51XCI+XHJcbiAgICAgICAgPHYtbGlzdC1pdGVtXHJcbiAgICAgICAgICB2LWZvcj1cInByb2R1Y3QgaW4gbWVudS5wcm9kdWN0c1wiXHJcbiAgICAgICAgICA6a2V5PVwicHJvZHVjdC5pZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHYtbGlzdC1pdGVtLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDx2LWxpc3QtaXRlbS10aXRsZSB2LXRleHQ9XCJwcm9kdWN0LnRpdGxlXCI+PC92LWxpc3QtaXRlbS10aXRsZT5cclxuICAgICAgICAgIDwvdi1saXN0LWl0ZW0tY29udGVudD5cclxuICAgICAgICA8L3YtbGlzdC1pdGVtPlxyXG4gICAgICA8L3YtbGlzdC1pdGVtLWdyb3VwPlxyXG4gICAgPC92LWxpc3Q+XHJcbiAgPC92LWNhcmQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG5cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgUHJvcCwgVnVlIH0gZnJvbSAndnVlLXByb3BlcnR5LWRlY29yYXRvcic7XHJcblxyXG5AQ29tcG9uZW50XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVDYXJkSXRlbSBleHRlbmRzIFZ1ZSB7XHJcbiAgQFByb3AoKSBwcml2YXRlIG1lbnUhOiBhbnk7XHJcblxyXG4gIGxvYWRpbmcgPSBmYWxzZVxyXG4gIFxyXG5cclxuICByZXNlcnZlICgpIHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5sb2FkaW5nID0gZmFsc2UpLCAyMDAwKVxyXG4gICAgfVxyXG59XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcblxyXG4gIDx2LWNhcmRcclxuICAgIDp0bz1cInsgbmFtZTogJ1Jlc3RhdXJhbnREZXRhaWxzJywgcGFyYW1zOiB7IGlkOiByZXN0YXVyYW50LmlkIH19XCJcclxuICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXHJcbiAgICBjbGFzcz1cIm14LWF1dG8gbXktMTJcIlxyXG4gICAgbWF4LXdpZHRoPVwiMzc0XCJcclxuICA+XHJcbiAgICA8dGVtcGxhdGUgc2xvdD1cInByb2dyZXNzXCI+XHJcbiAgICAgIDx2LXByb2dyZXNzLWxpbmVhclxyXG4gICAgICAgIGNvbG9yPVwiZGVlcC1wdXJwbGVcIlxyXG4gICAgICAgIGhlaWdodD1cIjEwXCJcclxuICAgICAgICBpbmRldGVybWluYXRlXHJcbiAgICAgID48L3YtcHJvZ3Jlc3MtbGluZWFyPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICA8di1pbWdcclxuICAgICAgaGVpZ2h0PVwiMjUwXCJcclxuICAgICAgOnNyYz1yZXN0YXVyYW50LnBpY3R1cmVcclxuICAgID48L3YtaW1nPlxyXG5cclxuICAgIDx2LWNhcmQtdGl0bGU+e3tyZXN0YXVyYW50LnRpdGxlfX08L3YtY2FyZC10aXRsZT5cclxuXHJcbiAgICA8di1jYXJkLXRleHQ+XHJcbiAgICAgIDx2LXJvd1xyXG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICBjbGFzcz1cIm14LTBcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHYtcmF0aW5nXHJcbiAgICAgICAgICA6dmFsdWU9cmVzdGF1cmFudC5yYXRpbmdcclxuICAgICAgICAgIGNvbG9yPVwiYW1iZXJcIlxyXG4gICAgICAgICAgZGVuc2VcclxuICAgICAgICAgIGhhbGYtaW5jcmVtZW50c1xyXG4gICAgICAgICAgcmVhZG9ubHlcclxuICAgICAgICAgIHNpemU9XCIxNFwiXHJcbiAgICAgICAgPjwvdi1yYXRpbmc+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmV5LS10ZXh0IG1zLTRcIj5cclxuICAgICAgICAgIHt7cmVzdGF1cmFudC5yYXRpbmd9fSBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC92LXJvdz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJteS00IHRleHQtc3VidGl0bGUtMVwiPlxyXG4gICAgICAgIOKCrCDigKIge3tyZXN0YXVyYW50LnRpdGxlfX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2Pnt7cmVzdGF1cmFudC5kZXNjcmlwdGlvbn19PC9kaXY+XHJcbiAgICA8L3YtY2FyZC10ZXh0PlxyXG5cclxuICAgIDx2LWRpdmlkZXIgY2xhc3M9XCJteC00XCI+PC92LWRpdmlkZXI+XHJcblxyXG5cclxuICAgIDx2LWNhcmQtYWN0aW9ucz5cclxuICAgICAgPHYtYnRuXHJcbiAgICAgICAgY29sb3I9XCJkZWVwLXB1cnBsZSBsaWdodGVuLTJcIlxyXG4gICAgICAgIHRleHRcclxuICAgICAgPlxyXG4gICAgICAgIENvbW1hbmRlclxyXG4gICAgICA8L3YtYnRuPlxyXG4gICAgPC92LWNhcmQtYWN0aW9ucz5cclxuICA8L3YtY2FyZD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgUHJvcCwgVnVlIH0gZnJvbSAndnVlLXByb3BlcnR5LWRlY29yYXRvcic7XHJcblxyXG5AQ29tcG9uZW50XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3RhdXJhbnRDYXJkSXRlbSBleHRlbmRzIFZ1ZSB7XHJcbiAgQFByb3AoKSBwcml2YXRlIHJlc3RhdXJhbnQhOiBhbnk7XHJcblxyXG4gIGxvYWRpbmcgPSBmYWxzZVxyXG4gIFxyXG5cclxuICByZXNlcnZlICgpIHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5sb2FkaW5nID0gZmFsc2UpLCAyMDAwKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG5cclxuICA8di1jYXJkXHJcbiAgICA6dG89XCJ7IG5hbWU6ICdSZXN0YXVyYW50RGV0YWlscycsIHBhcmFtczogeyBpZDogcmVzdGF1cmFudC5pZCB9fVwiXHJcbiAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxyXG4gICAgY2xhc3M9XCJteC1hdXRvIG15LTEyXCJcclxuICAgIG1heC13aWR0aD1cIjM3NFwiXHJcbiAgPlxyXG4gICAgPHRlbXBsYXRlIHNsb3Q9XCJwcm9ncmVzc1wiPlxyXG4gICAgICA8di1wcm9ncmVzcy1saW5lYXJcclxuICAgICAgICBjb2xvcj1cImRlZXAtcHVycGxlXCJcclxuICAgICAgICBoZWlnaHQ9XCIxMFwiXHJcbiAgICAgICAgaW5kZXRlcm1pbmF0ZVxyXG4gICAgICA+PC92LXByb2dyZXNzLWxpbmVhcj5cclxuICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gICAgPHYtaW1nXHJcbiAgICAgIGhlaWdodD1cIjI1MFwiXHJcbiAgICAgIDpzcmM9cmVzdGF1cmFudC5waWN0dXJlXHJcbiAgICA+PC92LWltZz5cclxuXHJcbiAgICA8di1jYXJkLXRpdGxlPnt7cmVzdGF1cmFudC50aXRsZX19PC92LWNhcmQtdGl0bGU+XHJcblxyXG4gICAgPHYtY2FyZC10ZXh0PlxyXG4gICAgICA8di1yb3dcclxuICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgY2xhc3M9XCJteC0wXCJcclxuICAgICAgPlxyXG4gICAgICAgIDx2LXJhdGluZ1xyXG4gICAgICAgICAgOnZhbHVlPXJlc3RhdXJhbnQucmF0aW5nXHJcbiAgICAgICAgICBjb2xvcj1cImFtYmVyXCJcclxuICAgICAgICAgIGRlbnNlXHJcbiAgICAgICAgICBoYWxmLWluY3JlbWVudHNcclxuICAgICAgICAgIHJlYWRvbmx5XHJcbiAgICAgICAgICBzaXplPVwiMTRcIlxyXG4gICAgICAgID48L3YtcmF0aW5nPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JleS0tdGV4dCBtcy00XCI+XHJcbiAgICAgICAgICB7e3Jlc3RhdXJhbnQucmF0aW5nfX0gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvdi1yb3c+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwibXktNCB0ZXh0LXN1YnRpdGxlLTFcIj5cclxuICAgICAgICDigqwg4oCiIHt7cmVzdGF1cmFudC50aXRsZX19XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdj57e3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259fTwvZGl2PlxyXG4gICAgPC92LWNhcmQtdGV4dD5cclxuXHJcbiAgICA8di1kaXZpZGVyIGNsYXNzPVwibXgtNFwiPjwvdi1kaXZpZGVyPlxyXG5cclxuXHJcbiAgICA8di1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDx2LWJ0blxyXG4gICAgICAgIGNvbG9yPVwiZGVlcC1wdXJwbGUgbGlnaHRlbi0yXCJcclxuICAgICAgICB0ZXh0XHJcbiAgICAgID5cclxuICAgICAgICBDb21tYW5kZXJcclxuICAgICAgPC92LWJ0bj5cclxuICAgIDwvdi1jYXJkLWFjdGlvbnM+XHJcbiAgPC92LWNhcmQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3AsIFZ1ZSB9IGZyb20gJ3Z1ZS1wcm9wZXJ0eS1kZWNvcmF0b3InO1xyXG5cclxuQENvbXBvbmVudFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN0YXVyYW50Q2FyZEl0ZW0gZXh0ZW5kcyBWdWUge1xyXG4gIEBQcm9wKCkgcHJpdmF0ZSByZXN0YXVyYW50ITogYW55O1xyXG5cclxuICBsb2FkaW5nID0gZmFsc2VcclxuICBcclxuXHJcbiAgcmVzZXJ2ZSAoKSB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMubG9hZGluZyA9IGZhbHNlKSwgMjAwMClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbjwvc2NyaXB0PiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBc0NBO0FBQ08sU0FBUyxVQUFVLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQzFELElBQUksSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2pJLElBQUksSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFD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
