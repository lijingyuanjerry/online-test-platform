(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"3wW7":function(e,t,n){e.exports={"ant-list":"ant-list","ant-list-pagination":"ant-list-pagination","ant-list-more":"ant-list-more","ant-list-spin":"ant-list-spin","ant-list-empty-text":"ant-list-empty-text","ant-list-items":"ant-list-items","ant-list-item":"ant-list-item","ant-list-item-content":"ant-list-item-content","ant-list-item-meta":"ant-list-item-meta","ant-list-item-meta-avatar":"ant-list-item-meta-avatar","ant-list-item-meta-content":"ant-list-item-meta-content","ant-list-item-meta-title":"ant-list-item-meta-title","ant-list-item-meta-description":"ant-list-item-meta-description","ant-list-item-action":"ant-list-item-action","ant-list-item-action-split":"ant-list-item-action-split","ant-list-header":"ant-list-header","ant-list-footer":"ant-list-footer","ant-list-empty":"ant-list-empty","ant-list-split":"ant-list-split","ant-list-loading":"ant-list-loading","ant-list-spin-nested-loading":"ant-list-spin-nested-loading","ant-list-something-after-last-item":"ant-list-something-after-last-item","ant-spin-container":"ant-spin-container","ant-list-lg":"ant-list-lg","ant-list-sm":"ant-list-sm","ant-list-vertical":"ant-list-vertical","ant-list-item-main":"ant-list-item-main","ant-list-item-extra":"ant-list-item-extra","ant-list-grid":"ant-list-grid","ant-col":"ant-col","ant-list-item-no-flex":"ant-list-item-no-flex","ant-list-bordered":"ant-list-bordered"}},"4Ofr":function(e,t,n){e.exports={themeColor:"antd-pro-components-setting-drawer-theme-color-themeColor",title:"antd-pro-components-setting-drawer-theme-color-title",colorBlock:"antd-pro-components-setting-drawer-theme-color-colorBlock"}},BFsb:function(e,t,n){e.exports={content:"antd-pro-components-setting-drawer-index-content",blockChecbox:"antd-pro-components-setting-drawer-index-blockChecbox",item:"antd-pro-components-setting-drawer-index-item",selectIcon:"antd-pro-components-setting-drawer-index-selectIcon",color_block:"antd-pro-components-setting-drawer-index-color_block",title:"antd-pro-components-setting-drawer-index-title",handle:"antd-pro-components-setting-drawer-index-handle",productionHint:"antd-pro-components-setting-drawer-index-productionHint"}},Ctgt:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("17x9"),i=n.n(o),c=n("VCL8");function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=u(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function u(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}function m(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?b(e):t}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=n("TSYQ"),O=function(e){function t(e){var n;p(this,t),n=m(this,h(t).call(this,e)),v(b(b(n)),"handleClick",function(e){var t=n.state.checked,a=n.props.onClick,r=!t;n.setChecked(r,e),a&&a(r,e)}),v(b(b(n)),"handleKeyDown",function(e){37===e.keyCode?n.setChecked(!1,e):39===e.keyCode&&n.setChecked(!0,e)}),v(b(b(n)),"handleMouseUp",function(e){var t=n.props.onMouseUp;n.node&&n.node.blur(),t&&t(e)}),v(b(b(n)),"saveNode",function(e){n.node=e});var a=!1;return a="checked"in e?!!e.checked:!!e.defaultChecked,n.state={checked:a},n}return y(t,e),d(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"setChecked",value:function(e,t){var n=this.props,a=n.disabled,r=n.onChange;a||("checked"in this.props||this.setState({checked:e}),r&&r(e,t))}},{key:"focus",value:function(){this.node.focus()}},{key:"blur",value:function(){this.node.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.className,a=t.prefixCls,o=t.disabled,i=t.loadingIcon,c=t.checkedChildren,u=t.unCheckedChildren,p=s(t,["className","prefixCls","disabled","loadingIcon","checkedChildren","unCheckedChildren"]),f=this.state.checked,d=w((e={},v(e,n,!!n),v(e,a,!0),v(e,"".concat(a,"-checked"),f),v(e,"".concat(a,"-disabled"),o),e));return r.a.createElement("button",l({},p,{type:"button",role:"switch","aria-checked":f,disabled:o,className:d,ref:this.saveNode,onKeyDown:this.handleKeyDown,onClick:this.handleClick,onMouseUp:this.handleMouseUp}),i,r.a.createElement("span",{className:"".concat(a,"-inner")},f?c:u))}}],[{key:"getDerivedStateFromProps",value:function(e){var t={},n=e.checked;return"checked"in e&&(t.checked=!!n),t}}]),t}(a["Component"]);O.propTypes={className:i.a.string,prefixCls:i.a.string,disabled:i.a.bool,checkedChildren:i.a.any,unCheckedChildren:i.a.any,onChange:i.a.func,onMouseUp:i.a.func,onClick:i.a.func,tabIndex:i.a.number,checked:i.a.bool,defaultChecked:i.a.bool,autoFocus:i.a.bool,loadingIcon:i.a.node},O.defaultProps={prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1},Object(c["polyfill"])(O),t["default"]=O},P5Jw:function(e,t,n){"use strict";var a=n("rHrb"),r=a.CopyToClipboard;r.CopyToClipboard=r,e.exports=r},PceP:function(e,t,n){"use strict";n.r(t);n("bbsP");var a=n("/wGt"),r=(n("cIOH"),n("YkAm"),n("q1tI")),o=n.n(r),i=n("i8i4"),c=n("MFj2"),l=n("TSYQ"),s=n.n(l),u=n("CtXQ"),p=n("wEI+");function f(e){return Object.keys(e).reduce(function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||"data-__"===n.substr(0,7)||(t[n]=e[n]),t},{})}var d=n("6CfX");function m(e){return m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},h.apply(this,arguments)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t,n){return t&&b(e.prototype,t),n&&b(e,n),e}function w(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?k(e):t}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function j(){}var x=function(e){function t(e){var n;return g(this,t),n=w(this,O(t).call(this,e)),n.handleClose=function(e){e.preventDefault();var t=i["findDOMNode"](k(n));t.style.height="".concat(t.offsetHeight,"px"),t.style.height="".concat(t.offsetHeight,"px"),n.setState({closing:!1}),(n.props.onClose||j)(e)},n.animationEnd=function(){n.setState({closed:!0,closing:!0}),(n.props.afterClose||j)()},n.renderAlert=function(e){var t,a,o=e.getPrefixCls,i=n.props,l=i.description,p=i.prefixCls,d=i.message,m=i.closeText,g=i.banner,b=i.className,v=void 0===b?"":b,w=i.style,O=i.icon,k=n.props,C=k.closable,E=k.type,j=k.showIcon,x=k.iconType,S=o("alert",p);j=!(!g||void 0!==j)||j,E=g&&void 0===E?"warning":E||"info";var P="filled";if(!x){switch(E){case"success":x="check-circle";break;case"info":x="info-circle";break;case"error":x="close-circle";break;case"warning":x="exclamation-circle";break;default:x="default"}l&&(P="outlined")}m&&(C=!0);var N=s()(S,"".concat(S,"-").concat(E),(t={},y(t,"".concat(S,"-close"),!n.state.closing),y(t,"".concat(S,"-with-description"),!!l),y(t,"".concat(S,"-no-icon"),!j),y(t,"".concat(S,"-banner"),!!g),y(t,"".concat(S,"-closable"),C),t),v),_=C?r["createElement"]("span",{role:"button",onClick:n.handleClose,className:"".concat(S,"-close-icon"),tabIndex:0},m?r["createElement"]("span",{className:"".concat(S,"-close-text")},m):r["createElement"](u["a"],{type:"close"})):null,M=f(n.props),I=O&&(r["isValidElement"](O)?r["cloneElement"](O,{className:s()((a={},y(a,O.props.className,O.props.className),y(a,"".concat(S,"-icon"),!0),a))}):r["createElement"]("span",{className:"".concat(S,"-icon")},O))||r["createElement"](u["a"],{className:"".concat(S,"-icon"),type:x,theme:P});return n.state.closed?null:r["createElement"](c["a"],{component:"",showProp:"data-show",transitionName:"".concat(S,"-slide-up"),onEnd:n.animationEnd},r["createElement"]("div",h({"data-show":n.state.closing,className:N,style:w},M),j?I:null,r["createElement"]("span",{className:"".concat(S,"-message")},d),r["createElement"]("span",{className:"".concat(S,"-description")},l),_))},Object(d["a"])(!("iconType"in e),"Alert","`iconType` is deprecated. Please use `icon` instead."),n.state={closing:!0,closed:!1},n}return C(t,e),v(t,[{key:"render",value:function(){return r["createElement"](p["a"],null,this.renderAlert)}}]),t}(r["Component"]),S=(n("+L6B"),n("2/Rp")),P=(n("miYZ"),n("tsqr")),N=(n("/zsF"),n("PArb")),_=(n("Pwec"),n("5Dmo"),n("3S7+")),M=(n("3wW7"),n("R9oj"),n("T2oS"),n("DjyN"),n("1GLa"),n("17x9")),I=n("BGR+"),T=n("W9HT"),z=n("NUBc"),A=n("qrJ5"),L=n("/kpp");function H(e){if(!r["isValidElement"](e))return e;for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return r["cloneElement"].apply(r,[e].concat(n))}function F(e){return F="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function U(e,t,n){return t&&B(e.prototype,t),n&&B(e,n),e}function W(e,t){return!t||"object"!==F(t)&&"function"!==typeof t?q(e):t}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){return Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Y(e)}function J(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}function K(e,t){return K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},K(e,t)}function Q(){return Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Q.apply(this,arguments)}var X=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},Z=function(e){return r["createElement"](p["a"],null,function(t){var n=t.getPrefixCls,a=e.prefixCls,o=e.className,i=e.avatar,c=e.title,l=e.description,u=X(e,["prefixCls","className","avatar","title","description"]),p=n("list",a),f=s()("".concat(p,"-item-meta"),o),d=r["createElement"]("div",{className:"".concat(p,"-item-meta-content")},c&&r["createElement"]("h4",{className:"".concat(p,"-item-meta-title")},c),l&&r["createElement"]("div",{className:"".concat(p,"-item-meta-description")},l));return r["createElement"]("div",Q({},u,{className:f}),i&&r["createElement"]("div",{className:"".concat(p,"-item-meta-avatar")},i),(c||l)&&d)})};function G(e,t){return e[t]&&Math.floor(24/e[t])}var V=function(e){function t(){var e;return R(this,t),e=W(this,Y(t).apply(this,arguments)),e.renderItem=function(t){var n=t.getPrefixCls,a=e.context,o=a.grid,i=a.itemLayout,c=e.props,l=c.prefixCls,u=c.children,p=c.actions,f=c.extra,d=c.className,m=X(c,["prefixCls","children","actions","extra","className"]),h=n("list",l),y=p&&p.length>0&&r["createElement"]("ul",{className:"".concat(h,"-item-action"),key:"actions"},p.map(function(e,t){return r["createElement"]("li",{key:"".concat(h,"-item-action-").concat(t)},e,t!==p.length-1&&r["createElement"]("em",{className:"".concat(h,"-item-action-split")}))})),g=o?"div":"li",b=r["createElement"](g,Q({},m,{className:s()("".concat(h,"-item"),d,D({},"".concat(h,"-item-no-flex"),!e.isFlexMode()))}),"vertical"===i&&f?[r["createElement"]("div",{className:"".concat(h,"-item-main"),key:"content"},u,y),r["createElement"]("div",{className:"".concat(h,"-item-extra"),key:"extra"},f)]:[u,y,H(f,{key:"extra"})]);return o?r["createElement"](L["a"],{span:G(o,"column"),xs:G(o,"xs"),sm:G(o,"sm"),md:G(o,"md"),lg:G(o,"lg"),xl:G(o,"xl"),xxl:G(o,"xxl")},b):b},e}return J(t,e),U(t,[{key:"isItemContainsTextNode",value:function(){var e,t=this.props.children;return r["Children"].forEach(t,function(t){"string"===typeof t&&(e=!0)}),e}},{key:"isFlexMode",value:function(){var e=this.props.extra,t=this.context.itemLayout;return"vertical"===t?!!e:!this.isItemContainsTextNode()}},{key:"render",value:function(){return r["createElement"](p["a"],null,this.renderItem)}}]),t}(r["Component"]);function $(e){return $="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function ee(e){return ae(e)||ne(e)||te()}function te(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function ne(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function ae(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function re(){return re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},re.apply(this,arguments)}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ie(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ce(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function le(e,t,n){return t&&ce(e.prototype,t),n&&ce(e,n),e}function se(e,t){return!t||"object"!==$(t)&&"function"!==typeof t?ue(e):t}function ue(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pe(e){return pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},pe(e)}function fe(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}function de(e,t){return de=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},de(e,t)}V.Meta=Z,V.contextTypes={grid:M["any"],itemLayout:M["string"]};var me=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},he=function(e){function t(e){var n;ie(this,t),n=se(this,pe(t).call(this,e)),n.defaultPaginationProps={current:1,total:0},n.keys={},n.onPaginationChange=n.triggerPaginationEvent("onChange"),n.onPaginationShowSizeChange=n.triggerPaginationEvent("onShowSizeChange"),n.renderItem=function(e,t){var a,r=n.props,o=r.renderItem,i=r.rowKey;return o?(a="function"===typeof i?i(e):"string"===typeof i?e[i]:e.key,a||(a="list-item-".concat(t)),n.keys[t]=a,o(e,t)):null},n.renderEmpty=function(e,t){var a=n.props.locale;return r["createElement"]("div",{className:"".concat(e,"-empty-text")},a&&a.emptyText||t("List"))},n.renderList=function(e){var t,a=e.getPrefixCls,o=e.renderEmpty,i=n.state,c=i.paginationCurrent,l=i.paginationSize,u=n.props,p=u.prefixCls,f=u.bordered,d=u.split,m=u.className,h=u.children,y=u.itemLayout,g=u.loadMore,b=u.pagination,v=u.grid,w=u.dataSource,O=void 0===w?[]:w,k=u.size,C=u.header,E=u.footer,j=u.loading,x=me(u,["prefixCls","bordered","split","className","children","itemLayout","loadMore","pagination","grid","dataSource","size","header","footer","loading"]),S=a("list",p),P=j;"boolean"===typeof P&&(P={spinning:P});var N=P&&P.spinning,_="";switch(k){case"large":_="lg";break;case"small":_="sm";break;default:break}var M=s()(S,m,(t={},oe(t,"".concat(S,"-vertical"),"vertical"===y),oe(t,"".concat(S,"-").concat(_),_),oe(t,"".concat(S,"-split"),d),oe(t,"".concat(S,"-bordered"),f),oe(t,"".concat(S,"-loading"),N),oe(t,"".concat(S,"-grid"),v),oe(t,"".concat(S,"-something-after-last-item"),n.isSomethingAfterLastItem()),t)),L=re(re(re({},n.defaultPaginationProps),{total:O.length,current:c,pageSize:l}),b||{}),H=Math.ceil(L.total/L.pageSize);L.current>H&&(L.current=H);var F,D=b?r["createElement"]("div",{className:"".concat(S,"-pagination")},r["createElement"](z["a"],re({},L,{onChange:n.onPaginationChange,onShowSizeChange:n.onPaginationShowSizeChange}))):null,R=ee(O);if(b&&O.length>(L.current-1)*L.pageSize&&(R=ee(O).splice((L.current-1)*L.pageSize,L.pageSize)),F=N&&r["createElement"]("div",{style:{minHeight:53}}),R.length>0){var B=R.map(function(e,t){return n.renderItem(e,t)}),U=[];r["Children"].forEach(B,function(e,t){U.push(r["cloneElement"](e,{key:n.keys[t]}))}),F=v?r["createElement"](A["a"],{gutter:v.gutter},U):r["createElement"]("ul",{className:"".concat(S,"-items")},U)}else h||N||(F=n.renderEmpty(S,o));var W=L.position||"bottom";return r["createElement"]("div",re({className:M},Object(I["a"])(x,["rowKey","renderItem","locale"])),("top"===W||"both"===W)&&D,C&&r["createElement"]("div",{className:"".concat(S,"-header")},C),r["createElement"](T["a"],P,F,h),E&&r["createElement"]("div",{className:"".concat(S,"-footer")},E),g||("bottom"===W||"both"===W)&&D)};var a=e.pagination,o=a&&"object"===$(a)?a:{};return n.state={paginationCurrent:o.defaultCurrent||1,paginationSize:o.defaultPageSize||10},n}return fe(t,e),le(t,[{key:"getChildContext",value:function(){return{grid:this.props.grid,itemLayout:this.props.itemLayout}}},{key:"triggerPaginationEvent",value:function(e){var t=this;return function(n,a){var r=t.props.pagination;t.setState({paginationCurrent:n,paginationSize:a}),r&&r[e]&&r[e](n,a)}}},{key:"isSomethingAfterLastItem",value:function(){var e=this.props,t=e.loadMore,n=e.pagination,a=e.footer;return!!(t||n||a)}},{key:"render",value:function(){return r["createElement"](p["a"],null,this.renderList)}}]),t}(r["Component"]);he.Item=V,he.childContextTypes={grid:M["any"],itemLayout:M["string"]},he.defaultProps={dataSource:[],bordered:!1,split:!0,loading:!1,pagination:!1};n("czTT");var ye=n("XIdC"),ge=n.n(ye),be=n("g0mS");function ve(e){return ve="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ve(e)}function we(){return we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},we.apply(this,arguments)}function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ke(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ce(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Ee(e,t,n){return t&&Ce(e.prototype,t),n&&Ce(e,n),e}function je(e,t){return!t||"object"!==ve(t)&&"function"!==typeof t?xe(e):t}function xe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Se(e){return Se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Se(e)}function Pe(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ne(e,t)}function Ne(e,t){return Ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Ne(e,t)}var _e=function(e){function t(e){var n;return ke(this,t),n=je(this,Se(t).call(this,e)),n.saveSwitch=function(e){n.rcSwitch=e},n.renderSwitch=function(e){var t,a=e.getPrefixCls,o=n.props,i=o.prefixCls,c=o.size,l=o.loading,p=o.className,f=void 0===p?"":p,d=o.disabled,m=a("switch",i),h=s()(f,(t={},Oe(t,"".concat(m,"-small"),"small"===c),Oe(t,"".concat(m,"-loading"),l),t)),y=l?r["createElement"](u["a"],{type:"loading",className:"".concat(m,"-loading-icon")}):null;return r["createElement"](be["a"],{insertExtraNode:!0},r["createElement"](ge.a,we({},Object(I["a"])(n.props,["loading"]),{prefixCls:m,className:h,disabled:d||l,ref:n.saveSwitch,loadingIcon:y})))},Object(d["a"])("checked"in e||!("value"in e),"Switch","`value` is not validate prop, do you mean `checked`?"),n}return Pe(t,e),Ee(t,[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){return r["createElement"](p["a"],null,this.renderSwitch)}}]),t}(r["Component"]);_e.__ANT_SWITCH=!0,_e.propTypes={prefixCls:M["string"],size:M["oneOf"](["small","default","large"]),className:M["string"]};var Me,Ie,Te,ze=n("2Taf"),Ae=n.n(ze),Le=n("vZ4D"),He=n.n(Le),Fe=n("l4Ni"),De=n.n(Fe),Re=n("ujKo"),Be=n.n(Re),Ue=n("MhPg"),We=n.n(Ue),qe=n("p0pE"),Ye=n.n(qe),Je=(n("OaEy"),n("2fM7")),Ke=n("Y2fQ"),Qe=n("P5Jw"),Xe=n("MuoO"),Ze=n("BFsb"),Ge=n.n(Ze),Ve=n("jehZ"),$e=n.n(Ve),et=n("Y/ft"),tt=n.n(et),nt=n("4Ofr"),at=n.n(nt),rt=function(e){var t=e.color,n=e.check,a=tt()(e,["color","check"]);return o.a.createElement("div",$e()({},a,{style:{backgroundColor:t}}),n?o.a.createElement(u["a"],{type:"check"}):"")},ot=function(e){var t=e.colors,n=e.title,a=e.value,r=e.onChange,i=t;return t||(i=[{key:"dust",color:"#F5222D"},{key:"volcano",color:"#FA541C"},{key:"sunset",color:"#FAAD14"},{key:"cyan",color:"#13C2C2"},{key:"green",color:"#52C41A"},{key:"daybreak",color:"#1890FF"},{key:"geekblue",color:"#2F54EB"},{key:"purple",color:"#722ED1"}]),o.a.createElement("div",{className:at.a.themeColor},o.a.createElement("h3",{className:at.a.title},n),o.a.createElement("div",{className:at.a.content},i.map(function(e){var t=e.key,n=e.color;return o.a.createElement(_["a"],{key:n,title:Object(Ke["formatMessage"])({id:"app.setting.themecolor.".concat(t)})},o.a.createElement(rt,{className:at.a.colorBlock,color:n,check:a===n,onClick:function(){return r&&r(n)}}))})))},it=ot,ct=function(e){var t=e.value,n=e.onChange,a=e.list;return o.a.createElement("div",{className:Ge.a.blockChecbox,key:t},a.map(function(e){return o.a.createElement(_["a"],{title:e.title,key:e.key},o.a.createElement("div",{className:Ge.a.item,onClick:function(){return n(e.key)}},o.a.createElement("img",{src:e.url,alt:e.key}),o.a.createElement("div",{className:Ge.a.selectIcon,style:{display:t===e.key?"block":"none"}},o.a.createElement(u["a"],{type:"check"}))))}))},lt=ct,st=Je["a"].Option,ut=function(e){var t=e.children,n=e.title,a=e.style;return o.a.createElement("div",{style:Ye()({},a,{marginBottom:24})},o.a.createElement("h3",{className:Ge.a.title},n),t)},pt=(Me=Object(Xe["connect"])(function(e){var t=e.setting;return{setting:t}}),Me((Te=function(e){function t(){var e,n;Ae()(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=De()(this,(e=Be()(t)).call.apply(e,[this].concat(r))),n.state={collapse:!1},n.getLayoutSetting=function(){var e=n.props.setting,t=e.contentWidth,a=e.fixedHeader,r=e.layout,i=e.autoHideHeader,c=e.fixSiderbar;return[{title:Object(Ke["formatMessage"])({id:"app.setting.content-width"}),action:o.a.createElement(Je["a"],{value:t,size:"small",onSelect:function(e){return n.changeSetting("contentWidth",e)},style:{width:80}},"sidemenu"===r?null:o.a.createElement(st,{value:"Fixed"},Object(Ke["formatMessage"])({id:"app.setting.content-width.fixed"})),o.a.createElement(st,{value:"Fluid"},Object(Ke["formatMessage"])({id:"app.setting.content-width.fluid"})))},{title:Object(Ke["formatMessage"])({id:"app.setting.fixedheader"}),action:o.a.createElement(_e,{size:"small",checked:!!a,onChange:function(e){return n.changeSetting("fixedHeader",e)}})},{title:Object(Ke["formatMessage"])({id:"app.setting.hideheader"}),disabled:!a,disabledReason:Object(Ke["formatMessage"])({id:"app.setting.hideheader.hint"}),action:o.a.createElement(_e,{size:"small",checked:!!i,onChange:function(e){return n.changeSetting("autoHideHeader",e)}})},{title:Object(Ke["formatMessage"])({id:"app.setting.fixedsidebar"}),disabled:"topmenu"===r,disabledReason:Object(Ke["formatMessage"])({id:"app.setting.fixedsidebar.hint"}),action:o.a.createElement(_e,{size:"small",checked:!!c,onChange:function(e){return n.changeSetting("fixSiderbar",e)}})}]},n.changeSetting=function(e,t){var a=n.props.setting,r=Ye()({},a);r[e]=t,"layout"===e?r.contentWidth="topmenu"===t?"Fixed":"Fluid":"fixedHeader"!==e||t||(r.autoHideHeader=!1),n.setState(r,function(){var e=n.props.dispatch;e({type:"setting/changeSetting",payload:n.state})})},n.togglerContent=function(){var e=n.state.collapse;n.setState({collapse:!e})},n.renderLayoutSettingItem=function(e){var t=o.a.cloneElement(e.action,{disabled:e.disabled});return o.a.createElement(_["a"],{title:e.disabled?e.disabledReason:"",placement:"left"},o.a.createElement(he.Item,{actions:[t]},o.a.createElement("span",{style:{opacity:e.disabled?"0.5":""}},e.title)))},n}return We()(t,e),He()(t,[{key:"render",value:function(){var e=this,t=this.props.setting,n=t.navTheme,r=t.primaryColor,i=t.layout,c=t.colorWeak,l=this.state.collapse;return o.a.createElement(a["a"],{visible:l,width:300,onClose:this.togglerContent,placement:"right",handler:o.a.createElement("div",{className:Ge.a.handle,onClick:this.togglerContent},o.a.createElement(u["a"],{type:l?"close":"setting",style:{color:"#fff",fontSize:20}})),style:{zIndex:999}},o.a.createElement("div",{className:Ge.a.content},o.a.createElement(ut,{title:Object(Ke["formatMessage"])({id:"app.setting.pagestyle"})},o.a.createElement(lt,{list:[{key:"dark",url:"https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg",title:Object(Ke["formatMessage"])({id:"app.setting.pagestyle.dark"})},{key:"light",url:"https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg",title:Object(Ke["formatMessage"])({id:"app.setting.pagestyle.light"})}],value:n,onChange:function(t){return e.changeSetting("navTheme",t)}})),o.a.createElement(it,{title:Object(Ke["formatMessage"])({id:"app.setting.themecolor"}),value:r,onChange:function(t){return e.changeSetting("primaryColor",t)}}),o.a.createElement(N["a"],null),o.a.createElement(ut,{title:Object(Ke["formatMessage"])({id:"app.setting.navigationmode"})},o.a.createElement(lt,{list:[{key:"sidemenu",url:"https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg",title:Object(Ke["formatMessage"])({id:"app.setting.sidemenu"})},{key:"topmenu",url:"https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg",title:Object(Ke["formatMessage"])({id:"app.setting.topmenu"})}],value:i,onChange:function(t){return e.changeSetting("layout",t)}})),o.a.createElement(he,{split:!1,dataSource:this.getLayoutSetting(),renderItem:this.renderLayoutSettingItem}),o.a.createElement(N["a"],null),o.a.createElement(ut,{title:Object(Ke["formatMessage"])({id:"app.setting.othersettings"})},o.a.createElement(he,{split:!1,renderItem:this.renderLayoutSettingItem,dataSource:[{title:Object(Ke["formatMessage"])({id:"app.setting.weakmode"}),action:o.a.createElement(_e,{size:"small",checked:!!c,onChange:function(t){return e.changeSetting("colorWeak",t)}})}]})),o.a.createElement(N["a"],null),o.a.createElement(Qe["CopyToClipboard"],{text:JSON.stringify(Object(I["a"])(t,["colorWeak"]),null,2),onCopy:function(){return P["a"].success(Object(Ke["formatMessage"])({id:"app.setting.copyinfo"}))}},o.a.createElement(S["a"],{block:!0,icon:"copy"},Object(Ke["formatMessage"])({id:"app.setting.copy"}))),o.a.createElement(x,{type:"warning",className:Ge.a.productionHint,message:o.a.createElement("div",null,Object(Ke["formatMessage"])({id:"app.setting.production.hint"})," ",o.a.createElement("a",{href:"https://u.ant.design/pro-v2-default-settings",target:"_blank",rel:"noopener noreferrer"},"src/defaultSettings.js"))})))}}]),t}(r["Component"]),Ie=Te))||Ie);t["default"]=pt},XIdC:function(e,t,n){e.exports=n("Ctgt")},YkAm:function(e,t,n){e.exports={"ant-alert":"ant-alert","ant-alert-no-icon":"ant-alert-no-icon","ant-alert-closable":"ant-alert-closable","ant-alert-icon":"ant-alert-icon","ant-alert-description":"ant-alert-description","ant-alert-success":"ant-alert-success","ant-alert-info":"ant-alert-info","ant-alert-warning":"ant-alert-warning","ant-alert-error":"ant-alert-error","ant-alert-close-icon":"ant-alert-close-icon","anticon-close":"anticon-close","ant-alert-close-text":"ant-alert-close-text","ant-alert-with-description":"ant-alert-with-description","ant-alert-message":"ant-alert-message","ant-alert-close":"ant-alert-close","ant-alert-slide-up-leave":"ant-alert-slide-up-leave",antAlertSlideUpOut:"antAlertSlideUpOut","ant-alert-banner":"ant-alert-banner",antAlertSlideUpIn:"antAlertSlideUpIn"}},czTT:function(e,t,n){e.exports={"ant-switch":"ant-switch","ant-switch-inner":"ant-switch-inner","ant-switch-loading-icon":"ant-switch-loading-icon","ant-switch-disabled":"ant-switch-disabled","ant-switch-loading":"ant-switch-loading","ant-switch-checked":"ant-switch-checked","ant-switch-small":"ant-switch-small",AntSwitchSmallLoadingCircle:"AntSwitchSmallLoadingCircle"}},rHrb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n("q1tI"),i=s(o),c=n("+QRC"),l=s(c);function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m=t.CopyToClipboard=function(e){function t(){var e,n,a,r;p(this,t);for(var o=arguments.length,c=Array(o),s=0;s<o;s++)c[s]=arguments[s];return a=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n=a,a.onClick=function(e){var t=a.props,n=t.text,r=t.onCopy,o=t.children,c=t.options,s=i.default.Children.only(o),u=(0,l.default)(n,c);r&&r(n,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)},r=n,f(a,r)}return d(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=u(e,["text","onCopy","options","children"]),r=i.default.Children.only(t);return i.default.cloneElement(r,a({},n,{onClick:this.onClick}))}}]),t}(i.default.PureComponent);m.defaultProps={onCopy:void 0,options:void 0}}}]);