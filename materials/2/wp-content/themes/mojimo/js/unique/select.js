!function(_){_.fn.twentytwenty=function(y){y=_.extend({default_offset_pct:.5,orientation:"horizontal",before_label:"Before",after_label:"After",no_overlay:!1,move_slider_on_hover:!1,move_with_handle_only:!0,click_to_move:!1},y);return this.each(function(){var t=y.default_offset_pct,r=_(this),s=y.orientation,e="vertical"===s?"down":"left",n="vertical"===s?"up":"right";if(r.wrap("<div class='twentytwenty-wrapper twentytwenty-"+s+"'></div>"),!y.no_overlay){r.append("<div class='twentytwenty-overlay'></div>");var i=r.find(".twentytwenty-overlay");i.append("<div class='twentytwenty-before-label' data-content='"+y.before_label+"'></div>"),i.append("<div class='twentytwenty-after-label' data-content='"+y.after_label+"'></div>")}var c=r.find("img:first"),d=r.find("img:last");r.append("<div class='twentytwenty-handle'></div>");var u=r.find(".twentytwenty-handle");u.append("<span class='twentytwenty-"+e+"-arrow'></span>"),u.append("<span class='twentytwenty-"+n+"-arrow'></span>"),r.addClass("twentytwenty-container"),c.addClass("twentytwenty-before"),d.addClass("twentytwenty-after");function o(e){var t,n,i,o,a=(t=e,n=c.width(),i=c.height(),{w:n+"px",h:i+"px",cw:t*n+"px",ch:t*i+"px"});u.css("vertical"===s?"top":"left","vertical"===s?a.ch:a.cw),o=a,"vertical"===s?(c.css("clip","rect(0,"+o.w+","+o.ch+",0)"),d.css("clip","rect("+o.ch+","+o.w+","+o.h+",0)")):(c.css("clip","rect(0,"+o.cw+","+o.h+",0)"),d.css("clip","rect(0,"+o.w+","+o.h+","+o.cw+")")),r.css("height",o.h)}function a(e,t){var n,i,o;return n="vertical"===s?(t-h)/p:(e-m)/g,i=0,o=1,Math.max(i,Math.min(o,n))}_(window).on("resize.twentytwenty",function(e){o(t)});function l(e){(e.distX>e.distY&&e.distX<-e.distY||e.distX<e.distY&&e.distX>-e.distY)&&"vertical"!==s?e.preventDefault():(e.distX<e.distY&&e.distX<-e.distY||e.distX>e.distY&&e.distX>-e.distY)&&"vertical"===s&&e.preventDefault(),r.addClass("active"),m=r.offset().left,h=r.offset().top,g=c.width(),p=c.height()}function f(e){r.hasClass("active")&&(t=a(e.pageX,e.pageY),o(t))}function v(){r.removeClass("active")}var m=0,h=0,g=0,p=0,w=y.move_with_handle_only?u:r;w.on("movestart",l),w.on("move",f),w.on("moveend",v),y.move_slider_on_hover&&(r.on("mouseenter",l),r.on("mousemove",f),r.on("mouseleave",v)),u.on("touchmove",function(e){e.preventDefault()}),r.find("img").on("mousedown",function(e){e.preventDefault()}),y.click_to_move&&r.on("click",function(e){m=r.offset().left,h=r.offset().top,g=c.width(),p=c.height(),t=a(e.pageX,e.pageY),o(t)}),_(window).trigger("resize.twentytwenty")})}}(jQuery),function(e){"function"==typeof define&&define.amd?define([],e):"undefined"!=typeof module&&null!==module&&module.exports?module.exports=e:e()}(function(){var o=Object.assign||window.jQuery&&jQuery.extend,h=8,a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){return window.setTimeout(function(){e()},25)};function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e);var i={textarea:!0,input:!0,select:!0,button:!0},r={move:"mousemove",cancel:"mouseup dragstart",end:"mouseup"},s={move:"touchmove",cancel:"touchend",end:"touchend"},c=/\s+/,d={bubbles:!0,cancelable:!0},t="function"==typeof Symbol?Symbol("events"):{};function u(e){return e[t]||(e[t]={})}function l(e,t,n,i){t=t.split(c);var o,a=u(e),r=t.length;function s(e){n(e,i)}for(;r--;)(a[o=t[r]]||(a[o]=[])).push([n,s]),e.addEventListener(o,s)}function f(e,t,n){t=t.split(c);var i,o,a,r=u(e),s=t.length;if(r)for(;s--;)if(o=r[i=t[s]])for(a=o.length;a--;)o[a][0]===n&&(e.removeEventListener(i,o[a][1]),o.splice(a,1))}function g(e,t,n){var i=new CustomEvent(t,d);n&&o(i,n),e.dispatchEvent(i)}function v(e){var n=e,i=!1,o=!1;function t(e){i?(n(),a(t),i=!(o=!0)):o=!1}this.kick=function(e){i=!0,o||t()},this.end=function(e){var t=n;e&&(o?(n=i?function(){t(),e()}:e,i=!0):e())}}function p(){}function m(e){e.preventDefault()}function w(e,t){var n,i;if(e.identifiedTouch)return e.identifiedTouch(t);for(n=-1,i=e.length;++n<i;)if(e[n].identifier===t)return e[n]}function y(e,t){var n=w(e.changedTouches,t.identifier);if(n&&(n.pageX!==t.pageX||n.pageY!==t.pageY))return n}function n(e,t){Y(e,t,e,b)}function _(e,t){b()}function b(){f(document,r.move,n),f(document,r.cancel,_)}function X(e){f(document,s.move,e.touchmove),f(document,s.cancel,e.touchend)}function Y(e,t,n,i){var o,a,r,s,c,d,u,l,f,v=n.pageX-t.pageX,m=n.pageY-t.pageY;v*v+m*m<h*h||(a=t,r=n,s=v,c=m,d=i,u=(o=e).targetTouches,l=o.timeStamp-a.timeStamp,f={altKey:o.altKey,ctrlKey:o.ctrlKey,shiftKey:o.shiftKey,startX:a.pageX,startY:a.pageY,distX:s,distY:c,deltaX:s,deltaY:c,pageX:r.pageX,pageY:r.pageY,velocityX:s/l,velocityY:c/l,identifier:a.identifier,targetTouches:u,finger:u?u.length:1,enableMove:function(){this.moveEnabled=!0,this.enableMove=p,o.preventDefault()}},g(a.target,"movestart",f),d(a))}function $(e,t){var n=t.timer;t.touch=e,t.timeStamp=e.timeStamp,n.kick()}function C(e,t){var n=t.target,i=t.event,o=t.timer;f(document,r.move,$),f(document,r.end,C),j(n,i,o,function(){setTimeout(function(){f(n,"click",m)},0)})}function x(e,t){var n,i=t.target,o=t.event,a=t.timer;w(e.changedTouches,o.identifier)&&(n=t,f(document,s.move,n.activeTouchmove),f(document,s.end,n.activeTouchend),j(i,o,a))}function j(e,t,n,i){n.end(function(){return g(e,"moveend",t),i&&i()})}if(l(document,"mousedown",function(e){var t;1!==(t=e).which||t.ctrlKey||t.altKey||i[e.target.tagName.toLowerCase()]||(l(document,r.move,n,e),l(document,r.cancel,_,e))}),l(document,"touchstart",function(e){if(!i[e.target.tagName.toLowerCase()]){var t=e.changedTouches[0],n={target:t.target,pageX:t.pageX,pageY:t.pageY,identifier:t.identifier,touchmove:function(e,t){!function(e,t){var n=y(e,t);if(!n)return;Y(e,t,n,X)}(e,t)},touchend:function(e,t){!function(e,t){if(!w(e.changedTouches,t.identifier))return;X(t)}(e,t)}};l(document,s.move,n.touchmove,n),l(document,s.cancel,n.touchend,n)}}),l(document,"movestart",function(e){if(!e.defaultPrevented&&e.moveEnabled){var t={startX:e.startX,startY:e.startY,pageX:e.pageX,pageY:e.pageY,distX:e.distX,distY:e.distY,deltaX:e.deltaX,deltaY:e.deltaY,velocityX:e.velocityX,velocityY:e.velocityY,identifier:e.identifier,targetTouches:e.targetTouches,finger:e.finger},n={target:e.target,event:t,timer:new v(function(e){(function(e,t,n){var i=n-e.timeStamp;e.distX=t.pageX-e.startX,e.distY=t.pageY-e.startY,e.deltaX=t.pageX-e.pageX,e.deltaY=t.pageY-e.pageY,e.velocityX=.3*e.velocityX+.7*e.deltaX/i,e.velocityY=.3*e.velocityY+.7*e.deltaY/i,e.pageX=t.pageX,e.pageY=t.pageY})(t,n.touch,n.timeStamp),g(n.target,"move",t)}),touch:void 0,timeStamp:e.timeStamp};void 0===e.identifier?(l(e.target,"click",m),l(document,r.move,$,n),l(document,r.end,C,n)):(n.activeTouchmove=function(e,t){var n,i,o,a,r;n=e,o=(i=t).event,a=i.timer,(r=y(n,o))&&(n.preventDefault(),o.targetTouches=n.targetTouches,i.touch=r,i.timeStamp=n.timeStamp,a.kick())},n.activeTouchend=function(e,t){x(e,t)},l(document,s.move,n.activeTouchmove,n),l(document,s.end,n.activeTouchend,n))}}),window.jQuery){var T="startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(" ");jQuery.event.special.movestart={setup:function(){return l(this,"movestart",E),!1},teardown:function(){return f(this,"movestart",E),!1},add:S},jQuery.event.special.move={setup:function(){return l(this,"movestart",k),!1},teardown:function(){return f(this,"movestart",k),!1},add:S},jQuery.event.special.moveend={setup:function(){return l(this,"movestart",A),!1},teardown:function(){return f(this,"movestart",A),!1},add:S}}function E(e){e.enableMove()}function k(e){e.enableMove()}function A(e){e.enableMove()}function S(e){var i=e.handler;e.handler=function(e){for(var t,n=T.length;n--;)e[t=T[n]]=e.originalEvent[t];i.apply(this,arguments)}}}),$(function(){var e,t,n,i,o,a,r,s=$(window),c=($("html"),$("body"),$("main"),$("#l-header")),d=($("#l-footer"),$(".bottom-group"),$(".pack-nav"),$(".campaign-bnr")),u=($("#l-loading"),$("#l-pagetop")),l=(c.height(),s.scrollTop(),"is-active"),f=($(".js-change-txt__trigger"),$(".js-change-txt2__trigger"),$(".js-change-txt__target"),$(".js-change-txt2__target"),$(".js-change-font__trigger")),v=$(".js-change-font2__trigger");$(".js-change-font__target"),$(".js-change-font2__target"),$(".js-modal"),$(".js-modal__content"),$(".js-modal__overlay"),$(".js-image");e=$(".watcher"),t=$(".hero"),n=$(".lineup-banner"),i=scrollMonitor.create(e,{top:0}),o=scrollMonitor.create(n),u.attr("data-pagetop-status","hidden"),i.enterViewport(function(){c.addClass("is-enable"),d.addClass("is-show"),u.attr("data-pagetop-status","show"),t.addClass("is-hidden")}),i.exitViewport(function(){i.isAboveViewport?(c.addClass("is-enable"),d.addClass("is-show"),u.attr("data-pagetop-status","show"),t.addClass("is-hidden")):(c.removeClass("is-enable"),t.removeClass("is-hidden"),d.removeClass("is-show"),u.attr("data-pagetop-status","hidden"))}),o.enterViewport(function(){d.removeClass("is-show")}),o.exitViewport(function(){o.isAboveViewport?d.removeClass("is-show"):d.addClass("is-show")}),a=$(".js-change-txt__trigger option:selected").data("preset"),r=$(".js-change-txt2__trigger option:selected").data("preset"),$(".js-change-font__trigger").val(a),$(".js-change-font2__trigger").val(r),$(".js-switch-mode").each(function(){$(this);var n=$(".js-switch-mode__trigger li"),i=$(".js-switch-mode__target");n.on("click",function(){var e=$(this),t=i.attr("data-tester-mode");n.removeClass(l),e.addClass(l),"1"==t?(i.attr("data-tester-mode","2"),v.trigger("change")):(i.attr("data-tester-mode","1"),f.trigger("change"))})})}),function(){heroAutoHeight=function(){var e=$("#hero"),t=$(window).height();$(e).height(t)};var e,n,t,i=document.getElementById("video"),o=navigator.userAgent;0<o.indexOf("Android")&&-1==o.indexOf("Mobile")||0<o.indexOf("iPad")||0<o.indexOf("Kindle")||0<o.indexOf("Silk")?(i.autoplay=!0,t=!0):0<o.indexOf("Android")&&0<o.indexOf("Mobile")||0<o.indexOf("iPhone")||0<o.indexOf("Blackberry")||0<o.indexOf("iPhone")?$(".movie__bg__player__inner").html(""):"MacIntel"==navigator.platform&&-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&navigator.standalone,n=!1,i.addEventListener("play",function(){$(".movie__bg__controls").removeClass("is__play")}),i.addEventListener("pause",function(){$(".movie__bg__controls").addClass("is__play")}),document.getElementById("movieCtrl").addEventListener("click",function(){!0===t?(i.pause(),setTimeout(function(){t=!1},300)):(i.play(),setTimeout(function(){t=!0},300))}),window.addEventListener("load",function(){heroAutoHeight(),setTimeout(function(){$("#hero").addClass("is__loaded"),$("#beforeafter").twentytwenty({before_label:"",after_label:"",no_overlay:!1}),n=!0},400)}),window.addEventListener("scroll",function(){var e=$(window).scrollTop(),t=$(window).height();1==n&&$(".section-style").each(function(){$(this).offset().top-t+200<e&&$(this).addClass("is__scrolled")})}),window.addEventListener("resize",function(){e!=window.innerWidth&&(e=window.innerWidth,setTimeout(function(){heroAutoHeight()},400))})}();