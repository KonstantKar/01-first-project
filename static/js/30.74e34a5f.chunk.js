(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[30],{1030:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return P}});var n=a(9439),r=a(2791),i=a(9434),s=a(5851),o="UsersComp_item__IZH1t",l=a(6906),c=a(1087),u=a(184),p=function(e){var t=(0,i.I0)(),a=(0,i.v9)((function(e){return e.users.hideButton}));return(0,u.jsxs)("div",{className:o,children:[(0,u.jsx)(c.OL,{to:"/profile/"+e.id,children:(0,u.jsx)("img",{src:null!=e.fotoURL?e.fotoURL:l,alt:"error"})}),(0,u.jsx)("div",{children:!a&&(e.followed?(0,u.jsx)("button",{onClick:function(){t((0,s.NK)(e.id))},children:"Unfollow"}):(0,u.jsx)("button",{onClick:function(){t((0,s.iR)(e.id))},children:"Follow"}))}),(0,u.jsx)("span",{children:(0,u.jsxs)("span",{children:[(0,u.jsx)("div",{children:e.fullName}),(0,u.jsx)("div",{children:e.status})]})}),(0,u.jsxs)("span",{children:[(0,u.jsx)("div",{children:"\u0421\u0442\u0440\u0430\u043d\u0430: - "}),(0,u.jsx)("div",{children:"\u0413\u043e\u0440\u043e\u0434: -"})]})]})},d=function(){var e=(0,i.v9)((function(e){return e.users.users})),t=e.map((function(t){return(0,u.jsx)(p,{id:t.id,status:t.status,followed:t.followed,fullName:t.name,location:t.location,fotoURL:t.photos.small,follow:e.follow,unFollow:e.unfollow,hideButton:e.hideButton,users:e})}));return(0,u.jsx)("div",{children:(0,u.jsx)("div",{children:t})})},g=a(6048),f=a.n(g),v="UsersContainer_pagination__Qf1oA",b="UsersContainer_active__lgJa5",h="UsersContainer_previous__bO1ek",m="UsersContainer_next__CaXsw",C="UsersContainer_break__3ind6",y=a(8718),x=a(2097),k=a(8060),P=function(){var e=(0,i.I0)(),t=(0,r.useState)(1),a=(0,n.Z)(t,2),o=a[0],l=a[1],c=(0,r.useState)(0),p=(0,n.Z)(c,2),g=p[0],P=p[1],L=(0,r.useState)(4),N=(0,n.Z)(L,2),j=N[0],w=(N[1],(0,r.useState)(!1)),O=(0,n.Z)(w,2),R=O[0],E=(O[1],(0,i.v9)((function(e){return e.auth.isAuth})));(0,r.useEffect)((function(){var t;t=o,x.h3.getAxiosUsers(t,j).then((function(a){e((0,s.HM)(a.items)),P(Math.ceil(a.totalCount/j)),l(t)}))}),[o]);return(0,u.jsx)(k.Z,{isAuth:E,fallback:"/Login",children:(0,u.jsx)("div",{children:R?(0,u.jsx)(y.Z,{}):(0,u.jsxs)(r.Fragment,{children:[(0,u.jsx)(d,{}),(0,u.jsx)(f(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:g,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(t){var a=t.selected+1;e((0,s.jz)(a)),l(a)},containerClassName:v,activeClassName:b,previousClassName:h,nextClassName:m,breakClassName:C})]})})})}},8060:function(e,t,a){"use strict";a(2791);var n=a(7689),r=a(184);t.Z=function(e){var t=e.isAuth,a=e.fallback,i=e.children;return t?i:(0,r.jsx)(n.Fg,{to:a})}},6048:function(e,t,a){var n;e.exports=(n=a(2791),function(){var e={703:function(e,t,a){"use strict";var n=a(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,i,s){if(s!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}},697:function(e,t,a){e.exports=a(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:function(e){"use strict";e.exports=n}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";a.r(r),a.d(r,{default:function(){return k}});var e=a(98),t=a.n(e),n=a(697),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}var o=function(e){var a=e.pageClassName,n=e.pageLinkClassName,r=e.page,i=e.selected,o=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,g=e.pageLabelBuilder,f=e.rel,v=e.ariaLabel||"Page "+r+(d?" "+d:""),b=null;return i&&(b="page",v=e.ariaLabel||"Page "+r+" is your current page",a=void 0!==a?a+" "+o:o,void 0!==n?void 0!==l&&(n=n+" "+l):n=l),t().createElement("li",{className:a},t().createElement("a",s({rel:f,role:p?void 0:"button",className:n,href:p,tabIndex:i?"-1":"0","aria-label":v,"aria-current":b,onKeyPress:u},c(u)),g(r)))};o.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};var l=o;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}var u=function(e){var a=e.breakLabel,n=e.breakAriaLabel,r=e.breakClassName,i=e.breakLinkClassName,s=e.breakHandler,o=e.getEventListener,l=r||"break";return t().createElement("li",{className:l},t().createElement("a",c({className:i,role:"button",tabIndex:"0","aria-label":n,onKeyPress:s},o(s)),a))};u.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabel:i().string,breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};var p=u;function d(e){return null!=e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f.apply(this,arguments)}function v(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function h(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(o,e);var a,n,r,i,s=(r=o,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(i){var a=C(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return h(this,e)});function o(e){var a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),y(m(a=s.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;a.handleClick(e,null,t>0?t-1:void 0,{isPrevious:!0})})),y(m(a),"handleNextPage",(function(e){var t=a.state.selected,n=a.props.pageCount;a.handleClick(e,null,t<n-1?t+1:void 0,{isNext:!0})})),y(m(a),"handlePageSelected",(function(e,t){if(a.state.selected===e)return a.callActiveCallback(e),void a.handleClick(t,null,void 0,{isActive:!0});a.handleClick(t,null,e)})),y(m(a),"handlePageChange",(function(e){a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),y(m(a),"getEventListener",(function(e){return y({},a.props.eventListener,e)})),y(m(a),"handleClick",(function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.isPrevious,s=void 0!==i&&i,o=r.isNext,l=void 0!==o&&o,c=r.isBreak,u=void 0!==c&&c,p=r.isActive,d=void 0!==p&&p;e.preventDefault?e.preventDefault():e.returnValue=!1;var g=a.state.selected,f=a.props.onClick,v=n;if(f){var b=f({index:t,selected:g,nextSelectedPage:n,event:e,isPrevious:s,isNext:l,isBreak:u,isActive:d});if(!1===b)return;Number.isInteger(b)&&(v=b)}void 0!==v&&a.handlePageChange(v)})),y(m(a),"handleBreakClick",(function(e,t){var n=a.state.selected;a.handleClick(t,e,n<e?a.getForwardJump():a.getBackwardJump(),{isBreak:!0})})),y(m(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),y(m(a),"callActiveCallback",(function(e){void 0!==a.props.onPageActive&&"function"==typeof a.props.onPageActive&&a.props.onPageActive({selected:e})})),y(m(a),"getElementPageRel",(function(e){var t=a.state.selected,n=a.props,r=n.nextPageRel,i=n.prevPageRel,s=n.selectedPageRel;return t-1===e?i:t===e?s:t+1===e?r:void 0})),y(m(a),"pagination",(function(){var e=[],n=a.props,r=n.pageRangeDisplayed,i=n.pageCount,s=n.marginPagesDisplayed,o=n.breakLabel,l=n.breakClassName,c=n.breakLinkClassName,u=n.breakAriaLabels,d=a.state.selected;if(i<=r)for(var g=0;g<i;g++)e.push(a.getPageElement(g));else{var f=r/2,v=r-f;d>i-r/2?f=r-(v=i-d):d<r/2&&(v=r-(f=d));var b,h,m=function(e){return a.getPageElement(e)},C=[];for(b=0;b<i;b++){var y=b+1;if(y<=s)C.push({type:"page",index:b,display:m(b)});else if(y>i-s)C.push({type:"page",index:b,display:m(b)});else if(b>=d-f&&b<=d+(0===d&&r>1?v-1:v))C.push({type:"page",index:b,display:m(b)});else if(o&&C.length>0&&C[C.length-1].display!==h&&(r>0||s>0)){var x=b<d?u.backward:u.forward;h=t().createElement(p,{key:b,breakAriaLabel:x,breakLabel:o,breakClassName:l,breakLinkClassName:c,breakHandler:a.handleBreakClick.bind(null,b),getEventListener:a.getEventListener}),C.push({type:"break",index:b,display:h})}}C.forEach((function(t,a){var n=t;"break"===t.type&&C[a-1]&&"page"===C[a-1].type&&C[a+1]&&"page"===C[a+1].type&&C[a+1].index-C[a-1].index<=2&&(n={type:"page",index:t.index,display:m(t.index)}),e.push(n.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:n},a}return a=o,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext,r=e.pageCount,i=e.forcePage;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(r)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(r,"). Did you forget a Math.ceil()?")),void 0!==t&&t>r-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(t," > ").concat(r-1,").")),void 0!==i&&i>r-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(r-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount,r=t.hrefAllControls;if(a)return r||e>=0&&e<n?a(e+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var a=this.state.selected,n=this.props,r=n.pageClassName,i=n.pageLinkClassName,s=n.activeClassName,o=n.activeLinkClassName,c=n.extraAriaContext,u=n.pageLabelBuilder;return t().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,rel:this.getElementPageRel(e),pageClassName:r,pageLinkClassName:i,activeClassName:s,activeLinkClassName:o,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:u,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var a=this.props,n=a.disabledClassName,r=a.disabledLinkClassName,i=a.pageCount,s=a.className,o=a.containerClassName,l=a.previousLabel,c=a.previousClassName,u=a.previousLinkClassName,p=a.previousAriaLabel,g=a.prevRel,v=a.nextLabel,b=a.nextClassName,h=a.nextLinkClassName,m=a.nextAriaLabel,C=a.nextRel,y=this.state.selected,x=0===y,k=y===i-1,P="".concat(d(c)).concat(x?" ".concat(d(n)):""),L="".concat(d(b)).concat(k?" ".concat(d(n)):""),N="".concat(d(u)).concat(x?" ".concat(d(r)):""),j="".concat(d(h)).concat(k?" ".concat(d(r)):""),w=x?"true":"false",O=k?"true":"false";return t().createElement("ul",{className:s||o,role:"navigation","aria-label":"Pagination"},t().createElement("li",{className:P},t().createElement("a",f({className:N,href:this.getElementHref(y-1),tabIndex:x?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":w,"aria-label":p,rel:g},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),t().createElement("li",{className:L},t().createElement("a",f({className:j,href:this.getElementHref(y+1),tabIndex:k?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":O,"aria-label":m,rel:C},this.getEventListener(this.handleNextPage)),v)))}}])&&v(a.prototype,n),Object.defineProperty(a,"prototype",{writable:!1}),o}(e.Component);y(x,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabels:i().shape({forward:i().string,backward:i().string}),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),y(x,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});var k=x}(),r}())},6906:function(e,t,a){"use strict";e.exports=a.p+"static/media/ava.03fd62fa989577be4ff5.png"}}]);
//# sourceMappingURL=30.74e34a5f.chunk.js.map