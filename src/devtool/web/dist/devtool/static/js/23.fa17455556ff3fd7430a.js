webpackJsonp([23],{"9Xly":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("4YfN"),s=n.n(i),v=n("jwle"),a=n.n(v),l=n("KatZ"),r=n("ZXMi"),o={name:"ServerInfo",components:s()({VChip:a.a},l),data:function(){return{extList:[],swooleInfo:[]}},created:function(){this.fetchList()},mounted:function(){},computed:{},methods:{fetchList:function(){var t=this;Object(r.q)().then(function(e){var n=e.data;t.swooleInfo=n}),Object(r.k)().then(function(e){var n=e.data;t.extList=n})}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-subheader",[n("h1",[t._v(t._s(this.$route.name))])]),t._v(" "),n("v-card",[n("v-card-title",{staticClass:"title grey lighten-3"},[t._v("\n      Php Extensions "),n("small",[t._v(" (total: "),n("code",[t._v(t._s(t.extList.length))]),t._v(")")])]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"pa-2"},t._l(t.extList,function(e){return n("v-chip",{key:e,attrs:{label:"",outline:""}},[t._v(t._s(e))])}))],1),t._v(" "),n("v-subheader",[n("h2",[t._v("Swoole Information")])]),t._v(" "),n("v-layout",[n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-card",[n("v-card-title",{staticClass:"title grey lighten-3"},[t._v("Enable")]),t._v(" "),n("v-divider"),t._v(" "),n("v-list",{attrs:{dense:""}},t._l(t.swooleInfo.enable,function(e,i){return n("v-list-tile",{key:i},[n("v-list-tile-content",[t._v(t._s(e.name))]),t._v(" "),n("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(e.value))])],1)}))],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-card",[n("v-card-title",{staticClass:"title grey lighten-3"},[t._v("Directive")]),t._v(" "),n("v-divider"),t._v(" "),n("v-list",{attrs:{dense:""}},t._l(t.swooleInfo.directive,function(e,i){return n("v-list-tile",{key:i},[n("v-list-tile-content",[t._v(t._s(e.name))]),t._v(" "),n("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(e.value))])],1)}))],1)],1)],1)],1)},staticRenderFns:[]};var _=n("Z0/y")(o,c,!1,function(t){n("VTBY")},"data-v-04ffe0fc",null);e.default=_.exports},VTBY:function(t,e){}});
//# sourceMappingURL=23.fa17455556ff3fd7430a.js.map