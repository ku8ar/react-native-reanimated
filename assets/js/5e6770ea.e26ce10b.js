(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(8),i=(n(0),n(240)),r={slug:"/",title:"About React Native Reanimated",sidebar_label:"About"},s={unversionedId:"about",id:"version-2.0.0/about",isDocsHomePage:!1,title:"About React Native Reanimated",description:"This is a documentation website of Reanimated 2 stable release.",source:"@site/versioned_docs/version-2.0.0/about.md",slug:"/",permalink:"/react-native-reanimated/docs/",version:"2.0.0",sidebar_label:"About",sidebar:"version-2.0.0/docs",next:{title:"Installation",permalink:"/react-native-reanimated/docs/installation"}},c=[{value:"Motivation",id:"motivation",children:[]},{value:"Library overview",id:"library-overview",children:[]},{value:"Known problems and limitations",id:"known-problems-and-limitations",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This is a documentation website of Reanimated 2 stable release."),Object(i.b)("p",{parentName:"div"},"If you are looking for Reanimated 1 docs ",Object(i.b)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/1.x.x/"},"please follow this link"),"."))),Object(i.b)("p",null,"Reanimated is a React Native library that allows for creating smooth animations and interactions that runs on the UI thread."),Object(i.b)("h3",{id:"motivation"},"Motivation"),Object(i.b)("p",null,"In React Native apps, the application code is executed outside of the application main thread.\nThis is one of the key elements of React Native architecture and helps with preventing frame drops in cases where JavaScript has some heavy work to do.\nUnfortunately this design does not play well when it comes to event driven interactions.\nWhen interacting with a touch screen, the user expects effects on screen to be immediate.\nIf updates are happening in a separate thread it is often a case that changes done in the JavaScript thread cannot be reflected in the same frame.\nIn React Native by default all updates are delayed by at least one frame as the communication between UI and JavaScript thread is asynchronous and UI thread never waits for the JavaScript thread to finish processing events.\nOn top of the lag with JavaScript playing many roles like running react diffing and updates, executing app's business logic, processing network requests, etc., it is often the case that events can't be immediately processed thus causing even more significant delays.\nReanimated aims to provide ways of offloading animation and event handling logic off of the JavaScript thread and onto the UI thread.\nThis is achieved by defining Reanimated worklets \u2013 a tiny chunks of JavaScript code that can be moved to a separate JavaScript VM and executed synchronously on the UI thread.\nThis makes it possible to respond to touch events immediately and update the UI within the same frame when the event happens without worrying about the load that is put on the main JavaScript thread."),Object(i.b)("h3",{id:"library-overview"},"Library overview"),Object(i.b)("p",null,"Version 1 of Reanimated has been designed to match React Native's Animated API while providing a more complete set of primitives for defining interactions.\nIn version 2 we decided to change the approach in order to address some limitation of version 1 that comes from the declarative API design.\nBelow we present an overview of things that are new in Reanimated 2 and different from Reanimated 1.\nThis is a tl;dr of the remaining parts of the documentation.\nWe recommend that you check the full articles to learn the details about each of the listed aspects:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'interactions and animations are no longer written using unintuitive declarative API, instead they can be written in pure JS, in a form of so-called "worklets".\nWorklets are pieces of JS code that we extract from the main react-native code and run in a separate JS context on the main thread.\nBecause of that, worklets have some limitations as to what part of the JS context they can access (we don\'t want to load the entire JS bundle into the context which runs on the UI thread).'),Object(i.b)("li",{parentName:"ol"},'It is still possible to define and pass around "Animated Values", however thanks to the new API, we expect that you\'ll create much fewer of those for a single animation.\nAlso, now, they are actually called "Shared Values" and can carry not only primitive types but also arrays, objects and functions.'),Object(i.b)("li",{parentName:"ol"},"Shared Values are no longer directly connected to view props.\nInstead, we expose a ",Object(i.b)("inlineCode",{parentName:"li"},"useAnimatedStyle")," hook that returns a style object which can be passed as a View's style param.\nThe ",Object(i.b)("inlineCode",{parentName:"li"},"useAnimatedStyle")," hook takes a worklet that, when executed, should return styles that will be applied to the connected View.\nThe style worklet will update whenever shared values used by that worklet change (we detect dependencies on shared values automatically)."),Object(i.b)("li",{parentName:"ol"},"Animations can be started in two ways: by triggering animated change on a shared value, or by returning animated value from ",Object(i.b)("inlineCode",{parentName:"li"},"useAnimatedStyle")," hook."),Object(i.b)("li",{parentName:"ol"},"With reanimated, we can hook worklets to serve as event handlers.\nMost common case for an event worklet is to modify some shared values.\nAs a result, changes made to those values will be reflected in the animated style worklet being triggered, which in turn will result in some view properties being updated.\nFor convenience, Reanimated provides event hook that is tailored to work together with Gesture Handler library and allow you to define a separate worklet for handling different handler states (e.g., onStart, onActive, etc.)")),Object(i.b)("h3",{id:"known-problems-and-limitations"},"Known problems and limitations"),Object(i.b)("p",null,"Reanimated 2 is in an early version.\nAs we wanted to share it with the community as soon as we could, the library still has some rough edges and limitations that we plan to address soon.\nUnfortunately some of the limitations come from maturity of React Native's TurboModule architecture that Reanimated 2 relies on.\nAs a consequence we won't be able to support older versions of React Native and some issues that we yet plan to resolve may require full support of TurboModules which is not yet available to the public."),Object(i.b)("p",null,"Below we highlight some of the problems that we are aware of (in most of the cases we actively work on improving these):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We currently only support Hermes JS VM on Android."),Object(i.b)("li",{parentName:"ul"},"As the library uses JSI for synchronous native methods access, remote debugging is no longer possible.\nYou can use Flipper for debugging your JS code, however connecting debugger to JS context which runs on the UI thread is not currently supported."),Object(i.b)("li",{parentName:"ul"},"Objects passed to worklets from React Native don't have the correct prototype set in JavaScript.\nAs a result, such objects aren't enumerable, that is you can't use \"for in\" constructs, spread operator (three dots), or functions like Object.assign with them."),Object(i.b)("li",{parentName:"ul"},"With Reanimated you can't animate virtual components of layout. For example, you can\u2019t animate nested ",Object(i.b)("inlineCode",{parentName:"li"},"<Text>")," components because React Native changes",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"<Text>\n   string1\n   <Text>string2</Text>\n</Text>\n")),"to",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"<RCTTextView>\n   string1\n   <RCTVirtualText>string2</RCTVirtualText>\n</RCTTextView>\n")),"and the ",Object(i.b)("inlineCode",{parentName:"li"},"RCTVirtualText")," is a virtual component.")))}d.isMDXComponent=!0},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=d(n),p=a,m=h["".concat(r,".").concat(p)]||h[p]||u[p]||i;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);