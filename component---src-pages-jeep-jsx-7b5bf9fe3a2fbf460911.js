(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"8YN/":function(e,t,n){e.exports=n.p+"static/jeep_1-e734d4890fe8b6f8d2b3d34234aa1728.jpg"},N8rc:function(e,t,n){"use strict";n.r(t),n.d(t,"scrollToRef",(function(){return R}));var i=n("q1tI"),r=n.n(i),a=n("L6Je"),o=n("k1TG"),s=n("8o2o"),c=n("uRdJ"),l=n("9Hrx"),d=n("17x9"),u=n.n(d),p=n("TSYQ"),h=n.n(p),v=n("oCue"),m=n("1jjB"),E=n("33Jr"),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={startAnimation:!1},n.onEnter=n.onEnter.bind(Object(c.a)(n)),n.onEntering=n.onEntering.bind(Object(c.a)(n)),n.onExit=n.onExit.bind(Object(c.a)(n)),n.onExiting=n.onExiting.bind(Object(c.a)(n)),n.onExited=n.onExited.bind(Object(c.a)(n)),n}Object(l.a)(t,e);var n=t.prototype;return n.onEnter=function(e,t){this.setState({startAnimation:!1}),this.props.onEnter(e,t)},n.onEntering=function(e,t){var n=e.offsetHeight;return this.setState({startAnimation:!0}),this.props.onEntering(e,t),n},n.onExit=function(e){this.setState({startAnimation:!1}),this.props.onExit(e)},n.onExiting=function(e){this.setState({startAnimation:!0}),e.dispatchEvent(new CustomEvent("slide.bs.carousel")),this.props.onExiting(e)},n.onExited=function(e){e.dispatchEvent(new CustomEvent("slid.bs.carousel")),this.props.onExited(e)},n.render=function(){var e=this,t=this.props,n=t.in,i=t.children,a=t.cssModule,c=t.slide,l=t.tag,d=t.className,u=Object(s.a)(t,["in","children","cssModule","slide","tag","className"]);return r.a.createElement(m.Transition,Object(o.a)({},u,{enter:c,exit:c,in:n,onEnter:this.onEnter,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var n=e.context.direction,o=t===E.b.ENTERED||t===E.b.EXITING,s=(t===E.b.ENTERING||t===E.b.EXITING)&&e.state.startAnimation&&("right"===n?"carousel-item-left":"carousel-item-right"),c=t===E.b.ENTERING&&("right"===n?"carousel-item-next":"carousel-item-prev"),u=Object(E.e)(h()(d,"carousel-item",o&&"active",s,c),a);return r.a.createElement(l,{className:u},i)}))},t}(r.a.Component);f.defaultProps=Object(v.a)({},m.Transition.defaultProps,{tag:"div",timeout:E.c.Carousel,slide:!0}),f.contextTypes={direction:u.a.string};var x=f,b=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleKeyPress=n.handleKeyPress.bind(Object(c.a)(n)),n.renderItems=n.renderItems.bind(Object(c.a)(n)),n.hoverStart=n.hoverStart.bind(Object(c.a)(n)),n.hoverEnd=n.hoverEnd.bind(Object(c.a)(n)),n.state={direction:"right",indicatorClicked:!1},n}Object(l.a)(t,e);var n=t.prototype;return n.getChildContext=function(){return{direction:this.state.direction}},n.componentDidMount=function(){"carousel"===this.props.ride&&this.setInterval(),document.addEventListener("keyup",this.handleKeyPress)},n.UNSAFE_componentWillReceiveProps=function(e){this.setInterval(e),this.props.activeIndex+1===e.activeIndex?this.setState({direction:"right"}):this.props.activeIndex-1===e.activeIndex?this.setState({direction:"left"}):this.props.activeIndex>e.activeIndex?this.setState({direction:this.state.indicatorClicked?"left":"right"}):this.props.activeIndex!==e.activeIndex&&this.setState({direction:this.state.indicatorClicked?"right":"left"}),this.setState({indicatorClicked:!1})},n.componentWillUnmount=function(){this.clearInterval(),document.removeEventListener("keyup",this.handleKeyPress)},n.setInterval=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){void 0===e&&(e=this.props),this.clearInterval(),e.interval&&(this.cycleInterval=setInterval((function(){e.next()}),parseInt(e.interval,10)))})),n.clearInterval=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){clearInterval(this.cycleInterval)})),n.hoverStart=function(){var e;("hover"===this.props.pause&&this.clearInterval(),this.props.mouseEnter)&&(e=this.props).mouseEnter.apply(e,arguments)},n.hoverEnd=function(){var e;("hover"===this.props.pause&&this.setInterval(),this.props.mouseLeave)&&(e=this.props).mouseLeave.apply(e,arguments)},n.handleKeyPress=function(e){this.props.keyboard&&(37===e.keyCode?this.props.previous():39===e.keyCode&&this.props.next())},n.renderItems=function(e,t){var n=this,i=this.props.slide;return r.a.createElement("div",{className:t},e.map((function(e,t){var a=t===n.props.activeIndex;return r.a.cloneElement(e,{in:a,slide:i})})))},n.render=function(){var e=this,t=this.props,n=t.cssModule,i=t.slide,a=t.className,o=Object(E.e)(h()(a,"carousel",i&&"slide"),n),s=Object(E.e)(h()("carousel-inner"),n),c=this.props.children.filter((function(e){return null!=e&&"boolean"!=typeof e}));if(c.every((function(e){return e.type===x})))return r.a.createElement("div",{className:o,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd},this.renderItems(c,s));if(c[0]instanceof Array){var l=c[0],d=c[1],u=c[2];return r.a.createElement("div",{className:o,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd},this.renderItems(l,s),d,u)}var p=c[0],v=r.a.cloneElement(p,{onClickHandler:function(t){"function"==typeof p.props.onClickHandler&&e.setState({indicatorClicked:!0},(function(){return p.props.onClickHandler(t)}))}}),m=c[1],f=c[2],b=c[3];return r.a.createElement("div",{className:o,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd},v,this.renderItems(m,s),f,b)},t}(r.a.Component);b.defaultProps={interval:5e3,pause:"hover",keyboard:!0,slide:!0},b.childContextTypes={direction:u.a.string};var I=b,g=function(e){var t=e.direction,n=e.onClickHandler,i=e.cssModule,a=e.directionText,o=e.className,s=Object(E.e)(h()(o,"carousel-control-"+t),i),c=Object(E.e)(h()("carousel-control-"+t+"-icon"),i),l=Object(E.e)(h()("sr-only"),i);return r.a.createElement("a",{className:s,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:function(e){e.preventDefault(),n()}},r.a.createElement("span",{className:c,"aria-hidden":"true"}),r.a.createElement("span",{className:l},a||t))},j=function(e){var t=e.items,n=e.activeIndex,i=e.cssModule,a=e.onClickHandler,o=e.className,s=Object(E.e)(h()(o,"carousel-indicators"),i),c=t.map((function(e,t){var o=Object(E.e)(h()({active:n===t}),i);return r.a.createElement("li",{key:""+(e.key||Object.values(e).join("")),onClick:function(e){e.preventDefault(),a(t)},className:o})}));return r.a.createElement("ol",{className:s},c)},y=function(e){var t=e.captionHeader,n=e.captionText,i=e.cssModule,a=e.className,o=Object(E.e)(h()(a,"carousel-caption","d-none","d-md-block"),i);return r.a.createElement("div",{className:o},r.a.createElement("h3",null,t),r.a.createElement("p",null,n))},N=function(e){function t(t){var n;return(n=e.call(this,t)||this).animating=!1,n.state={activeIndex:t.defaultActiveIndex||0},n.next=n.next.bind(Object(c.a)(n)),n.previous=n.previous.bind(Object(c.a)(n)),n.goToIndex=n.goToIndex.bind(Object(c.a)(n)),n.onExiting=n.onExiting.bind(Object(c.a)(n)),n.onExited=n.onExited.bind(Object(c.a)(n)),n}Object(l.a)(t,e);var n=t.prototype;return n.onExiting=function(){this.animating=!0},n.onExited=function(){this.animating=!1},n.next=function(){if(!this.animating){var e=this.state.activeIndex===this.props.items.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}},n.previous=function(){if(!this.animating){var e=0===this.state.activeIndex?this.props.items.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}},n.goToIndex=function(e){this.animating||this.setState({activeIndex:e})},n.render=function(){var e=this,t=this.props,n=(t.defaultActiveIndex,t.autoPlay),i=t.indicators,a=t.controls,c=t.items,l=t.goToIndex,d=Object(s.a)(t,["defaultActiveIndex","autoPlay","indicators","controls","items","goToIndex"]),u=this.state.activeIndex,p=c.map((function(t){var n=t.key||t.src;return r.a.createElement(x,{onExiting:e.onExiting,onExited:e.onExited,key:n},r.a.createElement("img",{className:"d-block w-100",src:t.src,alt:t.altText}),r.a.createElement(y,{captionText:t.caption,captionHeader:t.header||t.caption}))}));return r.a.createElement(I,Object(o.a)({activeIndex:u,next:this.next,previous:this.previous,ride:n?"carousel":void 0},d),i&&r.a.createElement(j,{items:c,activeIndex:d.activeIndex||u,onClickHandler:l||this.goToIndex}),p,a&&r.a.createElement(g,{direction:"prev",directionText:"Previous",onClickHandler:d.previous||this.previous}),a&&r.a.createElement(g,{direction:"next",directionText:"Next",onClickHandler:d.next||this.next}))},t}(i.Component);N.defaultProps={controls:!0,indicators:!0,autoPlay:!0};var k=N,O=n("8YN/"),C=n.n(O),T=n("Qt52"),S=n.n(T),P=n("bqGh"),M=n.n(P),H=n("qR95"),w=n.n(H),A=(n("Vl0y"),[{src:C.a,key:"1"},{src:S.a,key:"2"},{src:M.a,key:"3"},{src:w.a,key:"4"}]),R=function(e){window.scrollTo(0,e.current?e.current.offsetTop:100)};t.default=function(){var e=i.useRef(null);return i.createElement(a.a,{hasNoBorder:!0},i.createElement("div",{className:"flexContainer"},i.createElement(k,{items:A,className:"slider"}),i.createElement("div",{className:"verticalContainer"},i.createElement("button",{onClick:function(){return R(e)},className:"button--scroll"},"Jump to content"))),i.createElement("article",{className:"blog-post-content--border"},i.createElement("h1",{ref:e},"Blueberry Beast")))}},Qt52:function(e,t,n){e.exports=n.p+"static/jeep_2-ae0c3796d13d3d53940d19eb1384c116.jpg"},bqGh:function(e,t,n){e.exports=n.p+"static/jeep_3-a0cd845b5ff61aa4e4a13a6264552cc4.jpg"},qR95:function(e,t,n){e.exports=n.p+"static/jeep_4-72e69164da3fe999844c8d8fe8c616d2.jpg"}}]);
//# sourceMappingURL=component---src-pages-jeep-jsx-7b5bf9fe3a2fbf460911.js.map