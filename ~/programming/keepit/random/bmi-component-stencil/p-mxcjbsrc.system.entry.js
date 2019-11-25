var __awaiter=this&&this.__awaiter||function(t,e,n,i){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function s(t){try{c(i.next(t))}catch(e){r(e)}}function a(t){try{c(i["throw"](t))}catch(e){r(e)}}function c(t){t.done?n(t.value):o(t.value).then(s,a)}c((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,o,r,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return c([t,e])}}function c(s){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,o&&(r=s[0]&2?o["return"]:s[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,s[1])).done)return r;if(o=0,r)s=[s[0]&2,r.value];switch(s[0]){case 0:case 1:r=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;o=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){n.label=s[1];break}if(s[0]===6&&n.label<r[1]){n.label=r[1];r=s;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(s);break}if(r[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(a){s=[6,a];o=0}finally{i=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-6701def4.system.js"],(function(t){"use strict";var e,n,i;return{setters:[function(t){e=t.r;n=t.c;i=t.h}],execute:function(){var o=t("keepit_banner_container",function(){function t(t){e(this,t);this.redirect=n(this,"redirect",7);this.toggleBunner=n(this,"toggleBunner",7)}t.prototype.makeOpen=function(){this.showFullBanner=!this.showFullBanner;this.toggleBunner.emit({value:this.showFullBanner})};t.prototype.handleUi2=function(){this.redirect.emit()};t.prototype.render=function(){var t=i("div",{class:"in-one-line"},i("div",{class:"close-btn",onClick:this.makeOpen.bind(this)}),i("div",{class:"new-experience-line",onClick:this.handleUi2.bind(this)},this.text1+" "+this.text2+" "+this.text3));if(this.showFullBanner){t=i("div",{class:"keepit-banner-container"},i("div",{class:"close-btn",onClick:this.makeOpen.bind(this)}),i("div",{class:"info-container"},i("div",{class:"benefits-info"},i("div",{class:"benefits-info_icon"}),i("div",{class:"benefits-info_icon"}),i("div",{class:"benefits-info_icon"}),i("div",{class:"benefits-info_icon"})),i("div",{class:"new-experience-btn",onClick:this.handleUi2.bind(this)},i("div",{class:"secondary-text"},this.text1),i("div",{class:"secondary-text"},this.text2),i("div",{class:"main-text"},this.text3))),i("div",{class:"secondary-info-container"},i("div",{class:"go-back-text"},this.text4)))}return t};Object.defineProperty(t,"assetsDirs",{get:function(){return["../icons"]},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"*{font-family:Arial,Helvetica,sans-serif;-webkit-box-sizing:border-box;box-sizing:border-box}.keepit-banner-container{background:#fff;position:fixed;right:50px;bottom:0;padding:30px 30px 0 30px;border:1px solid #a9c9d2;-webkit-box-shadow:-2px 1px 28px -3px rgba(0,0,0,.35);-moz-box-shadow:-2px 1px 28px -3px rgba(0,0,0,.35);box-shadow:-2px 1px 28px -3px rgba(0,0,0,.35);z-index:300}.close-btn{position:absolute;right:0;top:0;height:30px;width:30px;cursor:pointer}.keepit-banner-container .close-btn{background-image:url(keepit-web-components/collection/icons/minimize_banner_icon_32x32.png)}.in-one-line .close-btn{background-image:url(keepit-web-components/collection/icons/open_banner_icon_32x32.png)}.info-container{display:-ms-grid;display:grid;grid-template-columns:115px auto;grid-column-gap:15px}.benefits-info{display:grid;display:-ms-grid;grid-template-columns:50px 50px;grid-template-rows:50px 50px;grid-gap:15px}.benefits-info_icon:first-child{background-image:url(keepit-web-components/collection/icons/01_fast_icon_32x32.svg)}.benefits-info_icon:nth-child(2){background-image:url(keepit-web-components/collection/icons/02_new_options_icon_32x32.svg)}.benefits-info_icon:nth-child(3){background-image:url(keepit-web-components/collection/icons/03_step_by_step_icon_32x32.svg)}.benefits-info_icon:nth-child(4){background-image:url(keepit-web-components/collection/icons/04_previewing_icon_32x32.svg)}.new-experience-btn{background:#81bc00;border:1px solid #4cae4c;cursor:pointer;padding:10px 40px 10px 40px;text-align:center;color:#fff}.secondary-text{font-size:23px;line-height:27px}.main-text{font-size:31px;line-height:38px}.secondary-info-container{width:100%;padding-top:30px}.go-back-text{text-align:center;line-height:35px;width:100%;border-top:1px solid #a6cbdc;font-size:12px;color:#009dba;font-weight:400;word-spacing:2px;white-space:nowrap}.in-one-line{font-size:20px;width:495px;color:#81bc00;background-color:#fff;border:1px solid #a9c9d2;-webkit-box-shadow:-2px 1px 28px -3px rgba(0,0,0,.35);-moz-box-shadow:-2px 1px 28px -3px rgba(0,0,0,.35);box-shadow:-2px 1px 28px -3px rgba(0,0,0,.35);line-height:30px;position:fixed;right:50px;bottom:0;z-index:300;padding-left:30px;cursor:pointer}"},enumerable:true,configurable:true});return t}());var r=t("keepit_side_drawer",function(){function t(t){e(this,t);this.showContact=false}t.prototype.onCloseDrawer=function(){this.open=false};t.prototype.onContentChange=function(t){this.showContact=t==="contact"};t.prototype.makeOpen=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.open=true;return[2]}))}))};t.prototype.render=function(){var t=i("slot",null);if(this.showContact){t=i("div",{id:"contact-information"},i("h2",null,"Contact Information"),i("p",null,"Your cant reach us via phone or email."),i("ul",null,i("li",null,"Phone: 1234567890"),i("li",null,"Email:",i("a",{href:"mailto:something@something.com"},"something@something.com"))))}var e=i("aside",null,i("header",null,i("button",{onClick:this.onCloseDrawer.bind(this)},"X"),i("h1",null,this.titleName)),i("section",{id:"tabs"},i("button",{class:this.showContact?"":"active",onClick:this.onContentChange.bind(this,"nav")},"Navigation"),i("button",{class:this.showContact?"active":"",onClick:this.onContentChange.bind(this,"contact")},"Contact")),i("main",null,t));return e};Object.defineProperty(t,"style",{get:function(){return"aside{position:fixed;top:0;left:-100%;width:30rem;max-width:80%;height:100vh;background:#f3f3f3;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.26);box-shadow:0 2px 8px rgba(0,0,0,.26);-webkit-transition:left .5s ease-out;transition:left .5s ease-out}:host([open]) aside{left:0}header{padding:1rem;background:#000;position:relative}header h1{font-size:1.5rem;color:#fff;margin:0}header button{position:absolute;top:0;right:0;padding:1.5rem;color:#fff;background:transparent;border:none;cursor:pointer}header button:focus{outline:none}#tabs{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}#tabs button{width:50%;background:#fff;color:#000;text-align:center;border:1px solid #000;font:inherit;padding:1rem;cursor:pointer}#tabs button.active,#tabs button:hover{background:#ccc}#tabs button:focus{outline:none}#contact-information{padding:0 1.5rem}"},enumerable:true,configurable:true});return t}())}}}));