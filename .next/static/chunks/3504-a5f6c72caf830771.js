"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3504],{1826:function(t,e,n){n.d(e,{i:function(){return s}});var r=n(23426),i=n(43720),o=n(80150),u=n(32003);function l(t){let e=[],n=[];return Array.from(t.querySelectorAll('input,select,textarea,a[href],button,[tabindex],audio[controls],video[controls],[contenteditable]:not([contenteditable="false"])')).forEach((t,r)=>{let i=function(t){let e=parseInt(t.getAttribute("tabindex")||"",10);return Number.isNaN(e)?"true"===t.contentEditable||("AUDIO"===t.nodeName||"VIDEO"===t.nodeName||"DETAILS"===t.nodeName)&&null===t.getAttribute("tabindex")?0:t.tabIndex:e}(t);-1===i||t.disabled||"INPUT"===t.tagName&&"hidden"===t.type||function(t){if("INPUT"!==t.tagName||"radio"!==t.type||!t.name)return!1;let e=e=>t.ownerDocument.querySelector(`input[type="radio"]${e}`),n=e(`[name="${t.name}"]:checked`);return n||(n=e(`[name="${t.name}"]`)),n!==t}(t)||(0===i?e.push(t):n.push({documentOrder:r,tabIndex:i,node:t}))}),n.sort((t,e)=>t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex).map(t=>t.node).concat(e)}function a(){return!0}function s(t){let{children:e,disableAutoFocus:n=!1,disableEnforceFocus:s=!1,disableRestoreFocus:c=!1,getTabbable:d=l,isEnabled:f=a,open:p}=t,h=r.useRef(!1),m=r.useRef(null),E=r.useRef(null),v=r.useRef(null),x=r.useRef(null),y=r.useRef(!1),g=r.useRef(null),b=(0,i.Z)(e.ref,g),Z=r.useRef(null);r.useEffect(()=>{p&&g.current&&(y.current=!n)},[n,p]),r.useEffect(()=>{if(!p||!g.current)return;let t=(0,o.Z)(g.current);return!g.current.contains(t.activeElement)&&(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex","-1"),y.current&&g.current.focus()),()=>{c||(v.current&&v.current.focus&&(h.current=!0,v.current.focus()),v.current=null)}},[p]),r.useEffect(()=>{if(!p||!g.current)return;let t=(0,o.Z)(g.current),e=e=>{Z.current=e,!s&&f()&&"Tab"===e.key&&t.activeElement===g.current&&e.shiftKey&&(h.current=!0,E.current&&E.current.focus())},n=()=>{let e=g.current;if(null===e)return;if(!t.hasFocus()||!f()||h.current){h.current=!1;return}if(e.contains(t.activeElement)||s&&t.activeElement!==m.current&&t.activeElement!==E.current)return;if(t.activeElement!==x.current)x.current=null;else if(null!==x.current)return;if(!y.current)return;let n=[];if((t.activeElement===m.current||t.activeElement===E.current)&&(n=d(g.current)),n.length>0){var r,i;let t=!!((null==(r=Z.current)?void 0:r.shiftKey)&&(null==(i=Z.current)?void 0:i.key)==="Tab"),e=n[0],o=n[n.length-1];"string"!=typeof e&&"string"!=typeof o&&(t?o.focus():e.focus())}else e.focus()};t.addEventListener("focusin",n),t.addEventListener("keydown",e,!0);let r=setInterval(()=>{t.activeElement&&"BODY"===t.activeElement.tagName&&n()},50);return()=>{clearInterval(r),t.removeEventListener("focusin",n),t.removeEventListener("keydown",e,!0)}},[n,s,c,f,p,d]);let R=t=>{null===v.current&&(v.current=t.relatedTarget),y.current=!0};return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsx)("div",{tabIndex:p?0:-1,onFocus:R,ref:m,"data-testid":"sentinelStart"}),r.cloneElement(e,{ref:b,onFocus:t=>{null===v.current&&(v.current=t.relatedTarget),y.current=!0,x.current=t.target;let n=e.props.onFocus;n&&n(t)}}),(0,u.jsx)("div",{tabIndex:p?0:-1,onFocus:R,ref:E,"data-testid":"sentinelEnd"})]})}},39291:function(t,e,n){n.d(e,{h:function(){return s}});var r=n(23426),i=n(13087),o=n(43720),u=n(51293),l=n(98094),a=n(32003);let s=r.forwardRef(function(t,e){let{children:n,container:s,disablePortal:c=!1}=t,[d,f]=r.useState(null),p=(0,o.Z)(r.isValidElement(n)?n.ref:null,e);return((0,u.Z)(()=>{!c&&f(("function"==typeof s?s():s)||document.body)},[s,c]),(0,u.Z)(()=>{if(d&&!c)return(0,l.Z)(e,d),()=>{(0,l.Z)(e,null)}},[e,d,c]),c)?r.isValidElement(n)?r.cloneElement(n,{ref:p}):(0,a.jsx)(r.Fragment,{children:n}):(0,a.jsx)(r.Fragment,{children:d?i.createPortal(n,d):d})})},54457:function(t,e,n){n.d(e,{G:function(){return u},g:function(){return c}});var r=n(80150),i=n(59137),o=n(30686);function u(t,e){e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden")}function l(t){return parseInt((0,i.Z)(t).getComputedStyle(t).paddingRight,10)||0}function a(t,e,n,r,i){let o=[e,n,...r];[].forEach.call(t.children,t=>{let e=-1===o.indexOf(t),n=!function(t){let e=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(t.tagName),n="INPUT"===t.tagName&&"hidden"===t.getAttribute("type");return e||n}(t);e&&n&&u(t,i)})}function s(t,e){let n=-1;return t.some((t,r)=>!!e(t)&&(n=r,!0)),n}class c{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,e){let n=this.modals.indexOf(t);if(-1!==n)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&u(t.modalRef,!1);let r=function(t){let e=[];return[].forEach.call(t.children,t=>{"true"===t.getAttribute("aria-hidden")&&e.push(t)}),e}(e);a(e,t.mount,t.modalRef,r,!0);let i=s(this.containers,t=>t.container===e);return -1!==i?this.containers[i].modals.push(t):this.containers.push({modals:[t],container:e,restore:null,hiddenSiblings:r}),n}mount(t,e){let n=s(this.containers,e=>-1!==e.modals.indexOf(t)),u=this.containers[n];u.restore||(u.restore=function(t,e){let n=[],u=t.container;if(!e.disableScrollLock){let t;if(function(t){let e=(0,r.Z)(t);return e.body===t?(0,i.Z)(t).innerWidth>e.documentElement.clientWidth:t.scrollHeight>t.clientHeight}(u)){let t=(0,o.Z)((0,r.Z)(u));n.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${l(u)+t}px`;let e=(0,r.Z)(u).querySelectorAll(".mui-fixed");[].forEach.call(e,e=>{n.push({value:e.style.paddingRight,property:"padding-right",el:e}),e.style.paddingRight=`${l(e)+t}px`})}if(u.parentNode instanceof DocumentFragment)t=(0,r.Z)(u).body;else{let e=u.parentElement,n=(0,i.Z)(u);t=(null==e?void 0:e.nodeName)==="HTML"&&"scroll"===n.getComputedStyle(e).overflowY?e:u}n.push({value:t.style.overflow,property:"overflow",el:t},{value:t.style.overflowX,property:"overflow-x",el:t},{value:t.style.overflowY,property:"overflow-y",el:t}),t.style.overflow="hidden"}return()=>{n.forEach(({value:t,el:e,property:n})=>{t?e.style.setProperty(n,t):e.style.removeProperty(n)})}}(u,e))}remove(t,e=!0){let n=this.modals.indexOf(t);if(-1===n)return n;let r=s(this.containers,e=>-1!==e.modals.indexOf(t)),i=this.containers[r];if(i.modals.splice(i.modals.indexOf(t),1),this.modals.splice(n,1),0===i.modals.length)i.restore&&i.restore(),t.modalRef&&u(t.modalRef,e),a(i.container,t.mount,t.modalRef,i.hiddenSiblings,!1),this.containers.splice(r,1);else{let t=i.modals[i.modals.length-1];t.modalRef&&u(t.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}},49526:function(t,e,n){n.d(e,{d:function(){return f}});var r=n(94319),i=n(23426),o=n(43720),u=n(80150),l=n(10011),a=n(41442),s=n(49095),c=n(54457);let d=new c.g;function f(t){let{container:e,disableEscapeKeyDown:n=!1,disableScrollLock:f=!1,manager:p=d,closeAfterTransition:h=!1,onTransitionEnter:m,onTransitionExited:E,children:v,onClose:x,open:y,rootRef:g}=t,b=i.useRef({}),Z=i.useRef(null),R=i.useRef(null),S=(0,o.Z)(R,g),[N,T]=i.useState(!y),k=!!v&&v.props.hasOwnProperty("in"),O=!0;("false"===t["aria-hidden"]||!1===t["aria-hidden"])&&(O=!1);let C=()=>(0,u.Z)(Z.current),I=()=>(b.current.modalRef=R.current,b.current.mount=Z.current,b.current),w=()=>{p.mount(I(),{disableScrollLock:f}),R.current&&(R.current.scrollTop=0)},P=(0,l.Z)(()=>{let t=("function"==typeof e?e():e)||C().body;p.add(I(),t),R.current&&w()}),A=i.useCallback(()=>p.isTopModal(I()),[p]),D=(0,l.Z)(t=>{Z.current=t,t&&(y&&A()?w():R.current&&(0,c.G)(R.current,O))}),L=i.useCallback(()=>{p.remove(I(),O)},[O,p]);i.useEffect(()=>()=>{L()},[L]),i.useEffect(()=>{y?P():k&&h||L()},[y,L,k,h,P]);let M=t=>e=>{var r;null==(r=t.onKeyDown)||r.call(t,e),"Escape"===e.key&&229!==e.which&&A()&&!n&&(e.stopPropagation(),x&&x(e,"escapeKeyDown"))},U=t=>e=>{var n;null==(n=t.onClick)||n.call(t,e),e.target===e.currentTarget&&x&&x(e,"backdropClick")};return{getRootProps:(e={})=>{let n=(0,s._)(t);delete n.onTransitionEnter,delete n.onTransitionExited;let i=(0,r.Z)({},n,e);return(0,r.Z)({role:"presentation"},i,{onKeyDown:M(i),ref:S})},getBackdropProps:(t={})=>(0,r.Z)({"aria-hidden":!0},t,{onClick:U(t),open:y}),getTransitionProps:()=>({onEnter:(0,a.Z)(()=>{T(!1),m&&m()},null==v?void 0:v.props.onEnter),onExited:(0,a.Z)(()=>{T(!0),E&&E(),h&&L()},null==v?void 0:v.props.onExited)}),rootRef:S,portalRef:D,isTopModal:A,exited:N,hasTransition:k}}},28209:function(t,e,n){n.d(e,{$:function(){return o}});var r=n(94319),i=n(56592);function o(t,e,n){return void 0===t||(0,i.X)(t)?e:(0,r.Z)({},e,{ownerState:(0,r.Z)({},e.ownerState,n)})}},49095:function(t,e,n){n.d(e,{_:function(){return r}});function r(t,e=[]){if(void 0===t)return{};let n={};return Object.keys(t).filter(n=>n.match(/^on[A-Z]/)&&"function"==typeof t[n]&&!e.includes(n)).forEach(e=>{n[e]=t[e]}),n}},56592:function(t,e,n){n.d(e,{X:function(){return r}});function r(t){return"string"==typeof t}},89844:function(t,e,n){n.d(e,{L:function(){return l}});var r=n(94319),i=n(33501),o=n(49095);function u(t){if(void 0===t)return{};let e={};return Object.keys(t).filter(e=>!(e.match(/^on[A-Z]/)&&"function"==typeof t[e])).forEach(n=>{e[n]=t[n]}),e}function l(t){let{getSlotProps:e,additionalProps:n,externalSlotProps:l,externalForwardedProps:a,className:s}=t;if(!e){let t=(0,i.Z)(null==n?void 0:n.className,s,null==a?void 0:a.className,null==l?void 0:l.className),e=(0,r.Z)({},null==n?void 0:n.style,null==a?void 0:a.style,null==l?void 0:l.style),o=(0,r.Z)({},n,a,l);return t.length>0&&(o.className=t),Object.keys(e).length>0&&(o.style=e),{props:o,internalRef:void 0}}let c=(0,o._)((0,r.Z)({},a,l)),d=u(l),f=u(a),p=e(c),h=(0,i.Z)(null==p?void 0:p.className,null==n?void 0:n.className,s,null==a?void 0:a.className,null==l?void 0:l.className),m=(0,r.Z)({},null==p?void 0:p.style,null==n?void 0:n.style,null==a?void 0:a.style,null==l?void 0:l.style),E=(0,r.Z)({},p,n,f,d);return h.length>0&&(E.className=h),Object.keys(m).length>0&&(E.style=m),{props:E,internalRef:p.ref}}},3711:function(t,e,n){n.d(e,{x:function(){return r}});function r(t,e,n){return"function"==typeof t?t(e,n):t}},92571:function(t,e,n){n.d(e,{y:function(){return c}});var r=n(94319),i=n(89665),o=n(43720),u=n(28209),l=n(89844),a=n(3711);let s=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function c(t){var e;let{elementType:n,externalSlotProps:c,ownerState:d,skipResolvingSlotProps:f=!1}=t,p=(0,i.Z)(t,s),h=f?{}:(0,a.x)(c,d),{props:m,internalRef:E}=(0,l.L)((0,r.Z)({},p,{externalSlotProps:h})),v=(0,o.Z)(E,null==h?void 0:h.ref,null==(e=t.additionalProps)?void 0:e.ref),x=(0,u.$)(n,(0,r.Z)({},m,{ref:v}),d);return x}},41442:function(t,e,n){n.d(e,{Z:function(){return r}});function r(...t){return t.reduce((t,e)=>null==e?t:function(...n){t.apply(this,n),e.apply(this,n)},()=>{})}},2965:function(t,e,n){n.d(e,{Z:function(){return r}});function r(t,e=166){let n;function r(...i){clearTimeout(n),n=setTimeout(()=>{t.apply(this,i)},e)}return r.clear=()=>{clearTimeout(n)},r}},30686:function(t,e,n){n.d(e,{Z:function(){return r}});function r(t){let e=t.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}},48704:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(23426);function i(t,e){var n,i;return r.isValidElement(t)&&-1!==e.indexOf(null!=(n=t.type.muiName)?n:null==(i=t.type)||null==(i=i._payload)||null==(i=i.value)?void 0:i.muiName)}},80150:function(t,e,n){n.d(e,{Z:function(){return r}});function r(t){return t&&t.ownerDocument||document}},59137:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(80150);function i(t){let e=(0,r.Z)(t);return e.defaultView||window}},9060:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(23426);function i({controlled:t,default:e,name:n,state:i="value"}){let{current:o}=r.useRef(void 0!==t),[u,l]=r.useState(e),a=o?t:u,s=r.useCallback(t=>{o||l(t)},[]);return[a,s]}},70960:function(t,e,n){n.d(e,{Z:function(){return l}});var r,i=n(23426);let o=0,u=(r||(r=n.t(i,2)))["useId".toString()];function l(t){if(void 0!==u){let e=u();return null!=t?t:e}return function(t){let[e,n]=i.useState(t),r=t||e;return i.useEffect(()=>{null==e&&n(`mui-${o+=1}`)},[e]),r}(t)}},15101:function(t,e,n){n.d(e,{Ix:function(){return h},cn:function(){return p},d0:function(){return f}});var r=n(89665),i=n(67914),o=n(23426),u=n(13087),l=n(84224),a=n(2756),s=n(14118),c="unmounted",d="exited",f="entering",p="entered",h="exiting",m=function(t){function e(e,n){r=t.call(this,e,n)||this;var r,i,o=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?o?(i=d,r.appearStatus=f):i=p:i=e.unmountOnExit||e.mountOnEnter?c:d,r.state={status:i},r.nextCallback=null,r}(0,i.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===c?{status:d}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==p&&(e=f):(n===f||n===p)&&(e=h)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!=typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e){if(this.cancelNextCallback(),e===f){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this);n&&(0,s.Q)(n)}this.performEnter(t)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===d&&this.setState({status:c})},n.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,i=this.props.nodeRef?[r]:[u.findDOMNode(this),r],o=i[0],a=i[1],s=this.getTimeouts(),c=r?s.appear:s.enter;if(!t&&!n||l.Z.disabled){this.safeSetState({status:p},function(){e.props.onEntered(o)});return}this.props.onEnter(o,a),this.safeSetState({status:f},function(){e.props.onEntering(o,a),e.onTransitionEnd(c,function(){e.safeSetState({status:p},function(){e.props.onEntered(o,a)})})})},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:u.findDOMNode(this);if(!e||l.Z.disabled){this.safeSetState({status:d},function(){t.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:h},function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,function(){t.safeSetState({status:d},function(){t.props.onExited(r)})})})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=i[0],l=i[1];this.props.addEndListener(o,l)}null!=t&&setTimeout(this.nextCallback,t)},n.render=function(){var t=this.state.status;if(t===c)return null;var e=this.props,n=e.children,i=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,r.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(a.Z.Provider,{value:null},"function"==typeof n?n(t,i):o.cloneElement(o.Children.only(n),i))},e}(o.Component);function E(){}m.contextType=a.Z,m.propTypes={},m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:E,onEntering:E,onEntered:E,onExit:E,onExiting:E,onExited:E},m.UNMOUNTED=c,m.EXITED=d,m.ENTERING=f,m.ENTERED=p,m.EXITING=h,e.ZP=m},84224:function(t,e){e.Z={disabled:!1}},14118:function(t,e,n){n.d(e,{Q:function(){return r}});var r=function(t){return t.scrollTop}}}]);