﻿"use strict";function _$dondatHang(t,e,n,a,i,o){if(!(this instanceof _$dondatHang))return new _$dondatHang(t,e,n,a,i,o);var c;if(e.find(".placeorder_button").on("click",function(c){if("1"!=clickPrevent){clickLocked();var r=!0;if("fastplaceorder"==this.id&&e.find("#fastcartform input.sodienthoai").each(function(t,e){if(""==$.trim($(e).val())){var n=$(e).parent(),a=n.parent();n.addClass("txt-invalid"),a.addClass("errdulieu"),r=!1,$(e).focus()}}),r){var s=null,d=function(e){scrLocked(),_$q.add(function(){_$a.api("POST","634445158944375000020258",e,function(c){_$q.next(!1),function(e,c){if("showcaptcha"==c.act){var r={width:300,height:270,contentTemplate:function(){var o=a[3].clone();ComApp.app._localizeMarkup(o),o.find(".a_demo_one").on("click",function(){if("1"!=clickPrevent){clickLocked();var e=!0;if(o.find("input").each(function(t,n){if(""==$.trim($(n).val())){var a=$(n).parent(),i=a.parent();a.addClass("txt-invalid"),i.addClass("errdulieu"),a.parent().find(".dx-overlay-content").text(gbM("S1_031")),e=!1,$(n).focus()}}),e){s._$$$customP="0",s.hide();var a={},c=i.cartData(),r=n.find("#fastcartform").serializeArray(),l={act:"dathangnhanh",captcha:$(this).data().captcha,icaptcha:o.find("input").val(),uid:"-1",tien:i.tongcong(),notes:t};$.extend(l,i._deliInfo()),$.each(r,function(t,e){l[e.name]=e.value}),$.each(c,function(t,e){a[t]=[e.sl,e.giaban,e.v]}),l.hh=a,d(l)}}}).data("captcha",e.captcha.CaptchaText),o.find("img").attr("src","data:image/png;base64,"+e.captcha.CaptchaImage);var c=function(t){var e=t.parent(),n=e.parent();e.hasClass("txt-invalid")&&""!=$.trim(t.val())&&(e.removeClass("txt-invalid"),n.removeClass("errdulieu"))};return o.find("input").keypress(function(t){"13"==(t.keyCode||t.which)?o.find(".a_demo_one").trigger("click"):c($(this))}).blur(function(){c($(this)),$(this).parent().parent().removeClass("dx-state-focused")}).focus(function(){$(this).parent().parent().addClass("dx-state-focused")}).val(""),o},showTitle:!0,toolbarItems:[{location:"before",toolbar:"top",widget:"dxButton",options:{icon:"refresh",elementAttr:{class:"flatbutton"},onClick:function(t){d({act:"newcaptcha"})}}},{location:"center",toolbar:"top",text:gbM("S1_028")}],onShown:function(t){s._$popupContent.find("input").focus()},onHidden:function(t){s._$$$customP&&"1"!=s._$$$customP||l.remove()},dragEnabled:!1},l=$("<div class='captcha_popup'/>").appendTo(".dx-viewport");(s=l.dxPopup(r).dxPopup("instance")).show()}else if("newcaptcha"==c.act)s._$popupContent.find(".a_demo_one").data("captcha",e.captcha.CaptchaText),s._$popupContent.find("img").attr("src","data:image/png;base64,"+e.captcha.CaptchaImage),s._$popupContent.find("input").focus().val("");else if("dathangnhanh"==c.act)switch(e.kq){case"errcaptcha":s.show(),s._$popupContent.find(".a_demo_one").data("captcha",e.captcha.CaptchaText),s._$popupContent.find("img").attr("src","data:image/png;base64,"+e.captcha.CaptchaImage),s._$popupContent.find("input").each(function(t,e){var n=$(e).parent(),a=n.parent();n.addClass("txt-invalid"),a.addClass("errdulieu"),a.parent().find(".dx-overlay-content").text(gbM("S1_032")),$(e).focus().select()});break;case"OK":s._$$$customP="1",s.hide(),o&&o({act:"clearAll",data:e})}else o&&o({act:"hidePU"});scrReleased()}(c,e)},function(t){_$q.next(!1),chochut(-1,function(){d(e)},{img:"emoji.png",msg:'<div style="text-align:center">'+('<h1 style="color:red;background-color:yellow;display:inline-block;font-weight: 1000;">500</h1><h2>Oops! '+t+"</h2>")+"</div"})})})};d({act:"showcaptcha",thoigian:i._deliInfo().time})}}}),a.hasOwnProperty("0")){var r=function(){e.find(".resetpass").on("click",function(){if("1"!=clickPrevent){clickLocked();var t,n=e.find(".login.chotdonhang");a.hasOwnProperty("2")?(t=a[2].clone(),ComApp.app._localizeMarkup(t),$(n[0]).parent().append(t),delete a[2],t.find("#resetpass_close").on("click",function(){if("1"!=clickPrevent){clickLocked();var t=e.find(".login.chotdonhang"),n=e.find(".login.datlaipass");n.fadeOut(500,function(){t.fadeIn("slow"),n.find(".captcha_resetpass").empty()})}})):t=e.find(".login.datlaipass"),(new jsLoader).require([dyncpath+"dx__Menu1.js"],function(){var a,i,o;a=t.find("#note"),i=function(t,e,n){var a=new Date(t),i=function(){a.getDate()!=t.getDate()&&a.setDate(0)};switch(e.toLowerCase()){case"year":a.setFullYear(a.getFullYear()+n),i();break;case"quarter":a.setMonth(a.getMonth()+3*n),i();break;case"month":a.setMonth(a.getMonth()+n),i();break;case"week":a.setDate(a.getDate()+7*n);break;case"day":a.setDate(a.getDate()+n);break;case"hour":a.setTime(a.getTime()+36e5*n);break;case"minute":a.setTime(a.getTime()+6e4*n);break;case"second":a.setTime(a.getTime()+1e3*n);break;default:a=void 0}return a}(new Date,"minute",2),o=!0,t.find(".captcha_resetpass").html(e.find(".dx-scrollview-scrollbottom-indicator").clone()),new Date>i&&(i=(new Date).getTime()+864e6,o=!1),t.find("#countdown").countdown({timestamp:i,callback:function(t,e,n,i){var c="";c+=t+" day"+(1==t?"":"s")+", ",c+=e+" hour"+(1==e?"":"s")+", ",c+=n+" minute"+(1==n?"":"s")+" and ",c+=i+" second"+(1==i?"":"s")+" <br />",c+=o?"left until the new year!":"left to 10 days from now!",a.html(c)}}),n.fadeOut(300,function(){$(".table").css({display:"none"}),t.fadeIn("slow",function(){})})})}}),e.find("#dologin_close").on("click",function(){if("1"!=clickPrevent){clickLocked();var t=e.find(".screen-placeorder");e.find(".screen-dangnhap").fadeOut(500,function(){t.fadeIn("slow"),$(".table").css({display:""}),n.data().dxScrollView.scrollTo(c)})}})};e.find("#dangnhap_button").on("click",function(){if("1"!=clickPrevent){clickLocked(),c=n.data().dxScrollView.scrollOffset();var t=e.find(".screen-placeorder"),a=e.find(".screen-dangnhap");t.fadeOut(500,function(){}),setTimeout(function(){a.fadeIn("slow"),$(".table").css({display:"none"}),a.data("loginEvts")||r(),a.data("loginEvts","1")},500)}}),e.find("#fastcartform input").keypress(function(t){var n=t.keyCode||t.which;if("13"==n)e.find(".placeorder_button").trigger("click");else if("tel"==this.type&&32!=n&&8!=n&&0!=n&&(n<48||n>57))return!1}).blur(function(){var t=$(this);if(t.hasClass("sodienthoai")){var e=t.parent(),n=e.parent();e.hasClass("txt-invalid")&&""!=$.trim(t.val())&&(e.removeClass("txt-invalid"),n.removeClass("errdulieu"))}$(this).parent().parent().removeClass("dx-state-focused")}).focus(function(){$(this).parent().parent().addClass("dx-state-focused")})}}ComApp.Store.Menu=function(t){function e(){var t=d(!1);t[__$ncc]=v,t.deliInfo=m,localDB.exe("add","giohang",btoa(JSON.stringify(t).norm_to_ascii()),0);var e={};$.each(v,function(t,n){e[t]=n.sl}),apiHistory(h,{cart:e,deli:$.extend(!0,{},m)})}function n(t,n){if(v.hasOwnProperty(t.id))delete v[t.id];else{var a=$.extend({},t);a.sl=n,v[t.id]=a}e()}function a(t,e,n){e||(e=0,$.each(v,function(t,n){e+=1})),0!=e&&t.shake(100,10,3);var a=t.find("#cartcount");if(0==a.length&&e>0)t.append($('<div id="cartcount" class="badge pulsate">'+e+"</div>"));else{var i=a.text(),o=e+parseInt(i);o>0?a.text(o):a.remove()}if(n){var c=e>0?"addClass":"removeClass";n[c]("oncart"),n.prev()[c]("oncart")}}function i(t){var e=$("#giodunghang"),i=0;if($(t).hasClass("oncart"))a(e,i=-1,$(t));else{var o=$(t).parent().parent().find("img").eq(0),c=function(){a(e,i,$(t))};if(o)o.clone().offset({top:o.offset().top,left:o.offset().left}).css({opacity:"0.5",position:"absolute",height:o.height()+"px",width:o.width()+"px","z-index":"100"}).appendTo($("body")).animate({top:e.offset().top+10,left:e.offset().left+10,width:75,height:75},1e3,"easeInOutExpo",function(){c()}).animate({width:0,height:0},function(){$(this).detach()});else c();i=1}n($(t).parent().closest("li").data().info,i)}function o(){var t="click"in document.documentElement==1?"click":"ontouchend"in document.documentElement==1?"touchend":"ontouchstart"in document.documentElement==1?"ontouchstart":void 0;return this._init=function(e){e.on(t,"span.cbp-pgrotate",function(t){var e,n,a;e=this,n=this.nextElementSibling,a=function(t){var e=$(n).data("queImg"),a=$(n).find("img"),i=e[0],o=e[1];i.length>0&&(o<i.length-1?o+=1:o=0,a.eq(t).attr("src",i[o]),e[1]=o)},"open"===n.getAttribute("data-open")?(n.setAttribute("data-open",""),e.className=e.className.replace(/\b cbp-pgrotate-active\b/,""),n.className=n.className.replace(/\b cbp-pgitem-showback\b/,""),setTimeout(function(){a(1)},10)):(n.setAttribute("data-open","open"),e.className+=" cbp-pgrotate-active",n.className+=" cbp-pgitem-showback",setTimeout(function(){a(0)},10))}).on(t,"ul.cbp-pgoptions",function(t){switch(t.target.className.split(" ")[0]){case"cbp-pgoptcart":if("1"==clickPrevent)return;!function(t){clickLocked();var e=$(t.target);e.attr("tabindex",1).focus(),i(t.target||t.srcElement),setTimeout(function(){e.removeAttr("tabindex").blur()},1e3)}(t);break;case"cbp-pgoptcolor":_$hieu.get_noty();break;case"cbp-pgoptfav":alert("here")}}).on(t,".goimon .ordernow",function(t){if(t.stopPropagation(),"1"!=clickPrevent)return clickLocked(),setTimeout(function(){i(t.currentTarget.parentNode.nextElementSibling),$.isEmptyObject(v)||(scrLocked(),setTimeout(function(){w()},1200))},10),!1}).on(t,".goimon .orderok",function(t){if(t.stopPropagation(),"1"!=clickPrevent)return clickLocked(),setTimeout(function(){w()},10),!1})},{_init:this._init}}function c(t,e){u||(u=t.find("li.chew-cell--ghost").eq(0)),f||(f=u.prev()).detach(),e.hasOwnProperty("time_deli")&&(b._tgGiaoHang=e.time_deli);var n,a=function(t){if(t)for(var e=0;e<t.length;e++){_$q.add(function(){_$q.next();var t=f.clone();r(this,t),t.hide().insertBefore(u).fadeIn("slow",function(){})}.bind(t[e]))}};if(0==e.act)a(e.n);else if(1==e.act){a(e=(n=e.n,t.find(">li:not(.chew-cell--ghost)").filter(function(){var t=$(this),e=t.data("id"),a=-1;$.grep(n,function(n,i){n.id==e&&(a=n.status,1==n.status&&(r(n,t),n.itemModify="1"))}),1!=a&&_$q.add(function(){this.fadeOut("fast",function(){$(this).remove(),_$q.next()})}.bind(t))}),$.grep(n,function(t,e){return!t.itemModify})))}else if(2==e.act){var i=function(e){return t.find(">li:not(.chew-cell--ghost)").filter(function(){var t=$(this),n=t.data("id");$.grep(e,function(e,a){e.id==n&&(1==e.status?r(e,t):_$q.add(function(){this.fadeOut("fast",function(){$(this).remove(),_$q.next()})}.bind(t)),e.itemModify="1")})}),$.grep(e,function(t,e){return null==t.itemModify})}(e.u);e.n&&$.extend(!0,i,e.n),a(i)}e.hasOwnProperty("athis")&&_$q.add(function(t,e){_$q.next();var n=t.children().length;if(12==n){var a=$("<div class='fooding'><div class='fooding1'></div><div class='fooding2'>COM DANG NAU ...</div></div>");t.closest("#dxScrollView_food").append(a)}else(a=t.closest("#dxScrollView_food").find(".fooding")).remove();var i=n-12==e;g.release(i),i||s()}.bind(this,t,e.athis[3]))}function r(t,e){e.data("id",t.id),e.data("info",t),e.find(".cbp-pginfo h3").text(t.ten);var n=_Tien(t.giaban,0);e.find(".cbp-pginfo .cbp-pgprice").text(n);for(var a,i=t.imgs.split(","),o="",c=-1,r=0;r<i.length;r++)0!=i[r].indexOf("http://")&&0!=i[r].indexOf("https://")&&(i[r]=((a=i[r-1].split("/"))[a.length-1]="",a.join("/")+i[r])),r<2&&(c+=1,o+='<img draggable="false" src="'+i[r]+'"/>');if(e.find(".cbp-pgrotate").css("display",i.length>1?"":"none"),e.find(".cbp-pgitem-flip").html(o).parent().data("queImg",[i,c]),v.hasOwnProperty(t.id)){var s=e.find(".cbp-pgoptcart");s.addClass("oncart"),s.prev().addClass("oncart")}}function s(){setTimeout(function(){var t=g._$element.find(".dx-scrollable-container").height(),e=g._$element.find(".dx-scrollview-content").height();if(e<=t)g.release(!0),apiHistory(h,{more:"b"});else{var n=g._$bottomPocket.offset().top;n<=t&&g.scrollTo(e-n-20),apiHistory(h,{more:"u"})}})}function d(t,e){var n=localDB.exe("get","giohang",null,0)||"";if(n.length>0){var a=JSON.parse(atob(n).norm_to_unicode());if(t&&(m=a.deliInfo||{}),!e)return a;if(e&&a.hasOwnProperty(e))return a[e]}return{}}jQuery.extend(jQuery.easing,{easeInOutExpo:function(t,e,n,a,i){return 0==e?n:e==i?n+a:(e/=i/2)<1?a/2*Math.pow(2,10*(e-1))+n:a/2*(2-Math.pow(2,-10*--e))+n}}),jQuery.fn.shake=function(t,e,n){t=void 0===t?100:t,e=void 0===e?10:e,n=void 0===n?3:n;var a=$(this);a.css("position","relative");for(var i=0;i<n+1;i++)a.animate({top:i%2==0?e*Math.random():e*Math.random()*-1,left:i%2==0?e*Math.random():e*Math.random()*-1},t);return a.animate({top:0,left:0},t)};var l,f,u,p,h="$attach_634444690322031250072038",g=null,m={},v=d(!0,__$ncc),_=!1,b={showCart:!1,_cartData:function(){return v},_deliInfo:function(){return m},_tgGiaoHang:null,_rmvOutCart:function(t,e){var i=!1,o=$("#giodunghang");$("#dxScrollView_food .oncart").each(function(e,n){$(n).parent().closest("li").data().id==t&&(a(o,-1,$(n)),i=!0)}),i||a(o,-1,null),n({id:t}),e&&e()},_cbCart:function(t,n){$.each(n,function(e,n){var a=t.toString(),i=e.toString();"delivery"!=t?v[a][i]=n:m[i]=n}),e()},cartcolQty:function(){var t=$(".giohang .cartx"),e=t.find(".col-qty");if(e.length>0){e.removeClass("ex2 ex1 ex3");var n=t.find(".scrollbody .col-qty").eq(0).find("div"),a=n[0].parentNode.getBoundingClientRect(),i=n[0].getBoundingClientRect(),o=n[1].getBoundingClientRect(),c=parseInt(o.left-i.left),r=(parseInt(i.left-a.left),""),s=t.find(".table").width(),d=17*s/100;0==c?a.width<78&&(r+=" ex1",a.width<60&&(r+=" ex2")):0!=parseInt(i.top-o.top)&&(a.width<125?(r+=" ex1",a.width<d&&a.width<95&&(r+=" ex2")):r+=" ex1"),r.length>0&&t.find(".col-qty").addClass(r)}}},w=function(){if(!$.isEmptyObject(v)){scrLocked(),_$q.clear();var t=ComApp.app.maCurrentView,e=function(){var t=$cartTMP.find(".dynamicjs");if(t.length>0){var e=t.attr("teps").split(";");t.remove();for(var a=0;a<e.length;a++)e[a]=dyncpath+e[a]+JsCssPrefix;(new jsLoader).require(e,function(){n()})}else n()},n=function(){var e,n;t.__$cartPopup(b,$cartTMP.clone(),(e=$.Deferred(),n=function(){b._tgGiaoHang&&b._tgGiaoHang.length>0?e.resolve("1",b._tgGiaoHang):e.resolve("0",gbM("S0_013"))},b._tgGiaoHang?n():_$q.add(function(){_$a.api("POST","634445158944375000020258",{act:"deliverytime"},function(t){_$q.next(!1),b._tgGiaoHang=t.time,n()},function(t){_$q.next(!1),e.resolve("0",gbM("S0_013"))})}),e.promise()))};setTimeout(function(){$cartTMP?t.__$cartPopup?n():e():$.get(gitpath+"template/tmpcart.html"+JsCssPrefix,function(t){$cartTMP=$(t),e()})},10)}};return{viewRendered:function(t){l=t.viewInfo.viewName;var e=$(t.viewInfo.renderResult.$markup[1]).find(".cbp-pggrid");_$hieu.bind([h+"_1",l],function(t,n){!function(t,e){apiHistory(h,{his:e.athis,more:"u"}),c(t,e)}(e,n)}),(new o)._init(e.parent())},viewShown:function(t){if(!_){_=!0,a($("#giodunghang"));var e={};$.each(v,function(t,n){e[t]=n.sl}),apiHistory(h,{cart:e,deli:$.extend(!0,{},m)})}},_orientationChanged:function(t){setTimeout(function(){s(),b.showCart&&b.cartcolQty()},500)},onInitScroll:function(t){g=t.component},onReachBottomMenu:function(t){clearTimeout(p),p=setTimeout(function(){_$hieu.stop_noty_timer(),apiHistory(h,{more:"b"}),g.release(!0),_$hieu.get_noty()},200)},testapi:function(t){gbM("S1_CACHEVER");_gbM({vi:{S1_CACHEVER:"1"}}),gbM("S1_CACHEVER"),_$q.add(function(){_$a.api("POST","634444690322031250072038",["634374721143258750061757"],function(t){_$q.next(!1)},function(t){DevExpress.ui.notify("Error: '"+t,"error",5e3),_$q.next(!1),scrReleased()})})},and2Cart:function(t,e){},cartHandler:function(t){"1"!=clickPrevent&&(clickLocked(),w())}}};