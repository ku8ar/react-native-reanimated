(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{222:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),o=(t(0),t(240)),c={},i={unversionedId:"nodes/and",id:"version-1.x.x/nodes/and",isDocsHomePage:!1,title:"and",description:"and",source:"@site/versioned_docs/version-1.x.x/nodes/and.md",slug:"/nodes/and",permalink:"/react-native-reanimated/docs/1.x.x/nodes/and",version:"1.x.x",sidebar:"version-1.x.x/docs",previous:{title:"tan",permalink:"/react-native-reanimated/docs/1.x.x/nodes/tan"},next:{title:"eq",permalink:"/react-native-reanimated/docs/1.x.x/nodes/eq"}},u=[{value:"<code>and</code>",id:"and",children:[]}],s={toc:u};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"and"},Object(o.b)("inlineCode",{parentName:"h2"},"and")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"and(nodeOrValue1, ...)\n")),Object(o.b)("p",null,"Acts as a logical ",Object(o.b)("inlineCode",{parentName:"p"},"AND"),' operator. Takes one or more nodes as an input and evaluates them in sequence until some node evaluates to a "falsy" value. Then returns that value and stops evaluating further nodes. If all nodes evaluate to a "truthy" it returns the last node\'s value.'))}l.isMDXComponent=!0},240:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(t),f=r,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?a.a.createElement(m,i(i({ref:n},s),{},{components:t})):a.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);