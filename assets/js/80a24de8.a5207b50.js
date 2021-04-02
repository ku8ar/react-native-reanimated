(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(240)),o={id:"decay",title:"Decay",sidebar_label:"Decay"},c={unversionedId:"animations/decay",id:"version-1.x.x/animations/decay",isDocsHomePage:!1,title:"Decay",description:"`js",source:"@site/versioned_docs/version-1.x.x/animations/decay.md",slug:"/animations/decay",permalink:"/react-native-reanimated/docs/1.x.x/animations/decay",version:"1.x.x",sidebar_label:"Decay",sidebar:"version-1.x.x/docs",previous:{title:"Timing",permalink:"/react-native-reanimated/docs/1.x.x/animations/timing"},next:{title:"Spring",permalink:"/react-native-reanimated/docs/1.x.x/animations/spring"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"decay(clock, { finished, velocity, position, time }, { deceleration });\n")),Object(i.b)("p",null,"Updates ",Object(i.b)("inlineCode",{parentName:"p"},"position")," and ",Object(i.b)("inlineCode",{parentName:"p"},"velocity")," nodes by running a single step of animation each time this node evaluates. State variable ",Object(i.b)("inlineCode",{parentName:"p"},"finished")," is set to ",Object(i.b)("inlineCode",{parentName:"p"},"1")," when the animation gets to the final point (that is the velocity drops under the level of significance). The ",Object(i.b)("inlineCode",{parentName:"p"},"time")," state node is populated automatically by this node and refers to the last clock time this node got evaluated. It is expected to be reset each time we want to restart the animation. Decay animation can be configured using ",Object(i.b)("inlineCode",{parentName:"p"},"deceleration")," config param and it controls how fast the animation decelerates. The value should be between ",Object(i.b)("inlineCode",{parentName:"p"},"0")," and ",Object(i.b)("inlineCode",{parentName:"p"},"1")," but only values that are close to ",Object(i.b)("inlineCode",{parentName:"p"},"1")," will yield meaningful results."))}p.isMDXComponent=!0},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?r.a.createElement(b,c(c({ref:t},s),{},{components:n})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);