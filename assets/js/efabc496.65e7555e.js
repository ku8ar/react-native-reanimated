(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{228:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(8),i=(a(0),a(240)),o={id:"useSharedValue",title:"useSharedValue",sidebar_label:"useSharedValue"},c={unversionedId:"api/useSharedValue",id:"version-2.0.0/api/useSharedValue",isDocsHomePage:!1,title:"useSharedValue",description:"Use this hook to create a reference to a JavaScript value that can be shared with worklets.",source:"@site/versioned_docs/version-2.0.0/api/useSharedValue.md",slug:"/api/useSharedValue",permalink:"/react-native-reanimated/docs/api/useSharedValue",version:"2.0.0",sidebar_label:"useSharedValue",sidebar:"version-2.0.0/docs",previous:{title:"Troubleshooting common problems",permalink:"/react-native-reanimated/docs/troubleshooting"},next:{title:"useAnimatedStyle",permalink:"/react-native-reanimated/docs/api/useAnimatedStyle"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],l={toc:u};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Use this hook to create a reference to a JavaScript value that can be shared with worklets."),Object(i.b)("p",null,"Shared Values serve a similar purpose to React Native's ",Object(i.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/animatedvalue"},Object(i.b)("inlineCode",{parentName:"a"},"Animated.Value"),"s"),".\nThey can carry data, provide a way to react to changes, and also drive animations.\nIf you aren't familiar with the concept of Shared Values in Reanimated v2, please check ",Object(i.b)("a",{parentName:"p",href:"../shared-values"},"Shared Values guide")," first."),Object(i.b)("p",null,"When shared value reference is created using this hook, it can be accessed and modified by worklets.\nShared Values can also be modified from the React Native thread directly, in which case the update is going to be asynchronous."),Object(i.b)("p",null,"Shared Values are just javascript objects, so you can pass them to children components or define your own hooks that create them."),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"initialvalue-numberstringboolobjectarrayfunction"},Object(i.b)("inlineCode",{parentName:"h4"},"initialValue")," ","[number|string|bool|Object|Array|Function]"),Object(i.b)("p",null,"The first argument takes the initial value, which could be any of the primitive JavaScript types, and assigns it as the initial value of the created Shared Value.\nThe value then can be read from the Shared Value reference using ",Object(i.b)("inlineCode",{parentName:"p"},".value")," attribute."),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("p",null,"The hook returns a reference to shared value initialized with the provided data.\nThe reference is an object with ",Object(i.b)("inlineCode",{parentName:"p"},".value")," property, that can be accessed and modified from worklets, but also updated directly from the main JS thread."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"In the below example we render a button, which triggers random updates of a shared value directly from the React Native JS thread."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"{5}","{5}":!0},"import { Button } from 'react-native';\nimport { useSharedValue } from 'react-native-reanimated';\n\nfunction App() {\n  const width = useSharedValue(50);\n\n  return (\n    <View>\n      <SomeComponent width={width} />\n      <Button onPress={() => (width.value = Math.random() * 300)} />\n    </View>\n  );\n}\n")))}s.isMDXComponent=!0},240:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(a),h=r,b=d["".concat(o,".").concat(h)]||d[h]||p[h]||i;return a?n.a.createElement(b,c(c({ref:t},l),{},{components:a})):n.a.createElement(b,c({ref:t},l))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);