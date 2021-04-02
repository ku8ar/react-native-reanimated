(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{207:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),s=(n(0),n(240)),o={id:"events",title:"Events",sidebar_label:"Events"},i={unversionedId:"events",id:"events",isDocsHomePage:!1,title:"Events",description:"In the real world nothing changes instantly\u2013there is always something between the states. When we touch a book we don't expect it to open instantly on a certain page. To make mobile apps feel more natural to the user, we use animations to smoothen out user interactions with the app user interface.",source:"@site/docs/events.md",slug:"/events",permalink:"/react-native-reanimated/docs/next/events",version:"current",sidebar_label:"Events",sidebar:"docs",previous:{title:"Animations",permalink:"/react-native-reanimated/docs/next/animations"},next:{title:"Reanimated 2.x architecture",permalink:"/react-native-reanimated/docs/next/architecture"}},l=[{value:"Handling gesture events",id:"handling-gesture-events",children:[]},{value:"Handling continuous gestures",id:"handling-continuous-gestures",children:[]},{value:"Using context",id:"using-context",children:[]},{value:"Reanimated and react-native-gesture-handler",id:"reanimated-and-react-native-gesture-handler",children:[]}],c={toc:l};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"In the real world nothing changes instantly\u2013there is always something between the states. When we touch a book we don't expect it to open instantly on a certain page. To make mobile apps feel more natural to the user, we use animations to smoothen out user interactions with the app user interface."),Object(s.b)("p",null,"To show how event handling is done in Reanimated 2 we are going to lead you step by step towards achieving the following result:"),Object(s.b)("p",null,Object(s.b)("img",{src:n(257).default})),Object(s.b)("h2",{id:"handling-gesture-events"},"Handling gesture events"),Object(s.b)("p",null,"Reanimated 2 integrates tightly with the ",Object(s.b)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/"},"react-native-gesture-handler")," package for the ability to define performant gesture-based interactions. We explain the library's APIs whenever we use bits of it in our examples, however, if you'd like to learn more about the gesture-handler outside of the context of reanimated, please visit the documentation website ",Object(s.b)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/"},"here"),"."),Object(s.b)("p",null,"Going back to the interaction example, we start by focusing on tap events only."),Object(s.b)("p",null,Object(s.b)("img",{src:n(258).default})),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"const EventsExample = () => {\n  const pressed = useSharedValue(false);\n  return (\n    <TapGestureHandler onGestureEvent={eventHandler}>\n      <Animated.View style={[styles.ball]} />\n    </TapGestureHandler>\n  );\n};\n")),Object(s.b)("p",null,"Here, we define a component with a shared value that tells us whether the view that we render is being pressed. We use the ",Object(s.b)("em",{parentName:"p"},"TapGestureHandler")," component from ",Object(s.b)("em",{parentName:"p"},"react-native-gesture-handler")," library to wrap the main View in order to tell the framework which of the rendered elements are interactive."),Object(s.b)("p",null,"Next, we add an event handler to it \u2014 it will react to notifications about tap events from ",Object(s.b)("em",{parentName:"p"},"TapGestureHandler"),". For defining event handlers, Reanimated provides a hook that is specifically designed to work with the gesture-handler package, it is called ",Object(s.b)("em",{parentName:"p"},"useAnimatedGestureHandler"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"const eventHandler = useAnimatedGestureHandler({\n  onStart: (event, ctx) => {\n    pressed.value = true;\n  },\n  onEnd: (event, ctx) => {\n    pressed.value = false;\n  },\n});\n")),Object(s.b)("p",null,"This hook allows us for defining a number of worklets (e.g., onStart or onEnd), each of these will be used to process a different state in the gesture recognition process. In this example, we will use ",Object(s.b)("em",{parentName:"p"},"onStart")," worklet which is called when the gesture is started (we press the screen down), and ",Object(s.b)("em",{parentName:"p"},"onEnd")," that fires up when the gesture is ended (i.e., the finger is lifted from the screen). We use these two worklets to update shared value ",Object(s.b)("em",{parentName:"p"},"pressed")," accordingly (don't pay the attention to the arguments that are provided to the worklets, we will explain that later on)."),Object(s.b)("p",null,"To connect the defined event handler with the gesture handler component, we now pass it to ",Object(s.b)("em",{parentName:"p"},"TapGestureHandler")," as an ",Object(s.b)("em",{parentName:"p"},"onGestureEvent")," property:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"<TapGestureHandler onGestureEvent={eventHandler}>\n")),Object(s.b)("p",null,"Now all we have to do is to use the ",Object(s.b)("em",{parentName:"p"},"useAnimatedStyle")," hook in order to map the pressed shared value state to the view's styles. When pressed is true the dot's color will turn from ",Object(s.b)("em",{parentName:"p"},"blue")," to ",Object(s.b)("em",{parentName:"p"},"yellow")," and it will get bigger. On false both of those parameters will get back to their previous values."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"const uas = useAnimatedStyle(() => {\n  return {\n    backgroundColor: pressed.value ? '#FEEF86' : '#001972',\n    transform: [{ scale: pressed.value ? 1.2 : 1 }],\n  };\n});\n")),Object(s.b)("p",null,"Also don't forget to pass ",Object(s.b)("em",{parentName:"p"},"animated style")," to the ",Object(s.b)("em",{parentName:"p"},"animated view"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"<Animated.View style={[styles.ball, uas]} />\n")),Object(s.b)("p",null,"After incorporating the changes described above here is what you will see on the screen:"),Object(s.b)("p",null,Object(s.b)("img",{src:n(270).default})),Object(s.b)("p",null,"Reanimated 2 makes it very easy to animate between state changes. You can try adding ",Object(s.b)("em",{parentName:"p"},"withSpring")," or ",Object(s.b)("em",{parentName:"p"},"withTiming")," in ",Object(s.b)("em",{parentName:"p"},"useAnimatedStyle")," to make this interaction feel much more natural:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"{\n  scale: withSpring(pressed.value ? 1.2 : 1);\n}\n")),Object(s.b)("p",null,Object(s.b)("img",{src:n(258).default})),Object(s.b)("h2",{id:"handling-continuous-gestures"},"Handling continuous gestures"),Object(s.b)("p",null,Object(s.b)("img",{src:n(257).default})),Object(s.b)("p",null,"In the previous example when we learned how to handle tap gestures, we only responded to events that indicated the start and the end of the gesture. This comes from the fact that tap is a discrete gesture, that is it triggers at a specific point in time when we know the gesture is recognized. If we are interested in handling a movement of a finger on the screen, we need to receive a continuous stream of touch events. For this purpose, ",Object(s.b)("em",{parentName:"p"},"PanGestureHandler")," from ",Object(s.b)("em",{parentName:"p"},"react-native-gesture-handler")," package can be used. ",Object(s.b)("em",{parentName:"p"},"PanGestureHandler")," not only reports down and up events (that we subscribed to with ",Object(s.b)("em",{parentName:"p"},"onStart")," and ",Object(s.b)("em",{parentName:"p"},"onEnd")," worklets), but also allows us to track the finger as you pan it around the screen. When the panning gesture is recognized it feeds a stream of touch events to ",Object(s.b)("em",{parentName:"p"},"onActive")," callback for the whole duration of the user interaction."),Object(s.b)("p",null,Object(s.b)("img",{src:n(271).default})),Object(s.b)("p",null,"In order to keep track over the view movement, we define a pair of new shared values in which we are going to store the view coordinates:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"const startingPosition = 100;\nconst x = useSharedValue(startingPosition);\nconst y = useSharedValue(startingPosition);\n")),Object(s.b)("p",null,"Now, to keep the values defined above in sync with the gesture, we modify ",Object(s.b)("em",{parentName:"p"},"useAnimatedGestureHandler")," behavior."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"const eventHandler = useAnimatedGestureHandler({\n  onStart: (event, ctx) => {\n    pressed.value = true;\n  },\n  onActive: (event, ctx) => {\n    x.value = startingPosition + event.translationX;\n    y.value = startingPosition + event.translationY;\n  },\n  onEnd: (event, ctx) => {\n    pressed.value = false;\n    x.value = withSpring(startingPosition);\n    y.value = withSpring(startingPosition);\n  },\n});\n")),Object(s.b)("p",null,"In the ",Object(s.b)("em",{parentName:"p"},"onActive")," method, we update coordinates using the event payload which is provided as the first argument. We use ",Object(s.b)("em",{parentName:"p"},"translationX")," and ",Object(s.b)("em",{parentName:"p"},"translationY")," that indicates the position of the finger relative to the place on the screen where the panning started. In ",Object(s.b)("em",{parentName:"p"},"onEnd")," call, when the user releases the finger, we animate the coordinates to the starting position."),Object(s.b)("p",null,"Don't forget to pass modified event handler to ",Object(s.b)("em",{parentName:"p"},"PanGestureHandler"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"<PanGestureHandler onGestureEvent={eventHandler}>\n  <Animated.View style={[styles.ball, uas]} />\n</PanGestureHandler>\n")),Object(s.b)("p",null,"The only thing left to do is to update ",Object(s.b)("em",{parentName:"p"},"useAnimatedStyle")," body such that x and y shared values are mapped to the view's transforms to position our view on the screen:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"const uas = useAnimatedStyle(() => {\n  return {\n    backgroundColor: pressed.value ? '#FEEF86' : '#001972',\n    transform: [{ translateX: x.value }, { translateY: y.value }],\n  };\n});\n")),Object(s.b)("h2",{id:"using-context"},"Using context"),Object(s.b)("p",null,Object(s.b)("img",{src:n(272).default})),Object(s.b)("p",null,"Let's now try to modify the above example to make the view stay in the place where we lift the finger up, then allow for it to be panned around from that place. This simple modification makes things a bit more trickier and the reason is that when the new gesture is started, the translation values it provides in the event payload are relative to the starting position of the gesture. As a result, we cannot just directly map the gesture translation to the view offset on the screen. One way to solve this is by making a temporary state where we can keep the starting offset of the view. For this purpose we can use the context argument that is provided to each of the gesture handler worklets. Context is just a Javascript object that is shared between all the callbacks. In other words, all methods defined as gesture handler callbacks receive the same instance of context object\u2013you are free to store any data in it within the callback or read from the context directly."),Object(s.b)("p",null,"Here is how we can save the starting position in ",Object(s.b)("em",{parentName:"p"},"onStart")," callback using context:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"onStart: (event, ctx) => {\n  pressed.value = true;\n  ctx.startX = x.value;\n  ctx.startY = y.value;\n},\n")),Object(s.b)("p",null,"Then we can use it in ",Object(s.b)("em",{parentName:"p"},"onActive")," to compute the current position"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"onActive: (event, ctx) => {\n  x.value = ctx.startX + event.translationX;\n  y.value = ctx.startY + event.translationY;\n},\n")),Object(s.b)("p",null,"As you can see context may be really handy sparing us declaring additional variables in our code thus making it more clear."),Object(s.b)("h2",{id:"reanimated-and-react-native-gesture-handler"},"Reanimated and react-native-gesture-handler"),Object(s.b)("p",null,"You have already met ",Object(s.b)("em",{parentName:"p"},"TapGestureHandler")," and ",Object(s.b)("em",{parentName:"p"},"PanGestureHandler")," but there are many more. For instance, you can listen for pinch gestures with ",Object(s.b)("em",{parentName:"p"},"PinchGestureHandler"),". It allows you to track the distance between two fingers and uses that information to scale or zoom your content. The full list of available gesture handlers can be found here."),Object(s.b)("div",{class:"resp-container"},Object(s.b)("iframe",{class:"resp-iframe",gesture:"media",allow:"encrypted-media",allowfullscreen:!0,src:"https://www.youtube.com/embed/IdVnnIkNzGA"})),Object(s.b)("div",{class:"spacer"}))}u.isMDXComponent=!0},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||s;return n?r.a.createElement(h,i(i({ref:t},c),{},{components:n})):r.a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},257:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/final-f203d12bb467795e7825d7dd2a911aad.gif"},258:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/touch-final-98be210f3eb367835ab3584d1c5ecd40.gif"},270:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/touch-raw-8c7ae3b9da36266b1bf06864bc047f2d.gif"},271:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/continous-gestures-702c491ffa319451a1792ed352aff0e5.png"},272:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/context-gesture-846808d8b9cc1beecef0291519f45979.gif"}}]);