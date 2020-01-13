(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{qpWB:function(e,a,n){"use strict";n.r(a);var t=n("ERkP"),r=n.n(t),c=n("Nhdc");a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.e,{title:"Coordinates"}),r.a.createElement("h1",null,"Coordinates"),r.a.createElement("p",null,"In order to easily build certain types of animations, it can be extremely useful to switch from one coordinate system to another."),r.a.createElement("p",null,"For instance, to convert a ",r.a.createElement("code",null,"x")," and ",r.a.createElement("code",null,"x")," coordinate from the React Native canvas to a polar coordinate system centered at"," ",r.a.createElement("code",null,"100, 100"),":"),r.a.createElement(c.b,{code:"\nconst x = 0;\nconst y = 100;\nconst center = { x: 100, y: 100 };\nconst {theta, radius} = cartesian2Polart(\n  canvas2Cartesian({ x, y }, center)\n);\n// theta is π, radius: 100\n      "}),r.a.createElement(c.b,{code:"\ncanvas2Cartesian({ x, y }, center)\n      "}),r.a.createElement(c.b,{code:"\ncanvasToPolar({ theta, radius }, center)\n      "}),r.a.createElement(c.b,{code:"\ncartesian2Canvas({ x, y }, center)\n      "}),r.a.createElement(c.b,{code:"\ncartesianToPolar({ x, y })\n      "}),r.a.createElement(c.b,{code:"\npolarToCartesian({ theta, radius })\n      "}),r.a.createElement(c.b,{code:"\npolarToCanvas({ theta, radius })\n      "}))}}}]);
//# sourceMappingURL=22-84bf5171dd671be44f3d.js.map