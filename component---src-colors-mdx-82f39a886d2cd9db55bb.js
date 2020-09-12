(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4JzZ":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return b})),t.d(n,"default",(function(){return i}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var r=t("/FXl"),o=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/colors.mdx"}});var l={_frontmatter:b},c=o.a;function i(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(r.b)(c,a({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"colors"},"Colors"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-tsx"}),'// Interpolate in RGB color space (default)\ninterpolateColor(node, {\n  inputRange: [0, 100],\n  outputRange: ["blue", "red"]\n});\n\n// Interpolate in HSV color space\ninterpolateColor(\n  node,\n  {\n    inputRange: [0, 1],\n    outputRange: ["blue", "red"]\n  },\n  "hsv"\n);\n')),Object(r.b)("p",null,"--"),Object(r.b)("h2",{id:"hsv2color"},Object(r.b)("inlineCode",{parentName:"h2"},"hsv2color()")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-tsx"}),"export declare const hsv2color: (\n  h: Animated.Adaptable<number>,\n  s: Animated.Adaptable<number>,\n  v: Animated.Adaptable<number>\n) => Animated.Node<number>;\n")),Object(r.b)("p",null,"Convert an HSV color into a color node."),Object(r.b)("p",null,"--"),Object(r.b)("h2",{id:"hsv2rgb"},Object(r.b)("inlineCode",{parentName:"h2"},"hsv2rgb()")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-tsx"}),"export declare const hsv2rgb: (\n  h: Animated.Adaptable<number>,\n  s: Animated.Adaptable<number>,\n  v: Animated.Adaptable<number>\n) => { r: Animated.Node<number>, g: Animated.Node<number>, b: Animated.Node<number>};\n")),Object(r.b)("p",null,"Convert an HSV color into an rgb object."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"interpolatecolor"},Object(r.b)("inlineCode",{parentName:"h2"},"interpolateColor()")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-tsx"}),'const interpolateColor: (value: Animated.Adaptable<number>, config: ColorInterpolationConfig, colorSpace?: "hsv" | "rgb") => Animated.Node<number>;\n')),Object(r.b)("hr",null),Object(r.b)("h2",{id:"binterpolatecolor"},Object(r.b)("inlineCode",{parentName:"h2"},"bInterpolateColor()")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-tsx"}),'const bInterpolateColor: (value: Animated.Adaptable<number>, color1: string | number, color2: string | number, colorSpace?: "hsv" | "rgb") => Animated.Node<number>;\n')),Object(r.b)("hr",null),Object(r.b)("h2",{id:"colorforbackground"},Object(r.b)("inlineCode",{parentName:"h2"},"colorForBackground()")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-tsx"}),"const colorForBackground = (\n    r: Animated.Adaptable<number>,\n    g: Animated.Adaptable<number>,\n    b: Animated.Adaptable<number>\n) Animated.Node<number>;\n")),Object(r.b)("p",null,"Returns ",Object(r.b)("inlineCode",{parentName:"p"},"color(0, 0, 0)")," (black) or ",Object(r.b)("inlineCode",{parentName:"p"},"color(255, 255, 255)")," (white) depending on the value of the background color."))}void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/colors.mdx"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-colors-mdx-82f39a886d2cd9db55bb.js.map