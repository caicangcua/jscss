﻿"use strict";ComApp.Store.Order=function(e){var n=function(e,n,a){var c,d,l,s,h,v,m,b=!1,k=$("<div class='shared_popup placeorder'></div>").appendTo(".dx-viewport"),y=function(i,a){var o,r=n.clone(),c={},l=$.extend(!0,{},e.cartDulieu),f=r.find(".dathangcase"),u=r.find(".deliverytime"),p=u.children().first();c[3]=$(f[3]).clone(),$(f[3]).remove(),c[2]=$(f[2]).clone(),$(f[2]).remove(),c[0]=$(f[0]).clone(),$(f[0]).remove();var h={uid:w()},v=r.find(".scrollbody"),m=function(e,n){l[e.parent().data().id].sl=n},_=function(e,n){if(e){var t=l[e.data().id];n?t.sl=parseInt(n):e.find(".col-qty input").val(t.sl),e.find(".col-total p").html(_Tien(t.sl*t.giaban,0))}var i=r.find(".tf .row .subtotal");i[0].innerHTML=_Tien(0,0),i[1].innerHTML=_Tien(0,0),o=0,$.each(l,function(e,n){o+=n.sl*n.giaban}),i[2].innerHTML=_Tien(0,0),i[3].innerHTML=_Tien(o,0)},y=function(e,n){n=l[e.data().id];e.find(".col-pro >*").each(function(e,t){switch(t.tagName.toLowerCase()){case"span":t.innerHTML="G: "+_Tien(n.giaban,0);break;case"img":var i=n.imgs.split(",");i.length>0&&""!=i[0]&&(t.src=i[0]);break;case"p":t.innerHTML=n.ten}}),e.find(".col-price").html("<p>"+_Tien(n.giaban,0)+"</p>"),e.find(".col-vat p").html(_Tien(n.v,0)),e.find(".col-qty input").change(function(){var e=$(this),n=$.trim(e.val());""!=n&&"0"!=n&&function(e){if(isNaN(e))return!1;var n=parseFloat(e);return(0|n)===n&&n>0}(n)?(n=parseInt(n),e.val(n)):(n=1,e.val(1)),m(e.parent(),n),_(e.parent().parent(),n)}).on("keyup",function(e){e.keyCode||e.which;var n=$(this),t=n.val().length,i=n.attr("maxlength");t>i&&n.val(n.val().substring(0,i))}),_(e)},S=1,P=v.children().first();P.detach(),$.each(l,function(e,n){var t=P.clone();S%2==0&&t.addClass("row row-bg2"),t.data("id",e),I(t),y(t),v.append(t),S++});var M=function(e){var n=e.parent(),t=n.find("input"),i=parseInt(t.val()),a=e.hasClass("qty-plus");(i>1||a)&&(m(n,i+(a?1:-1)),_(n.parent()),b=!0)},L=function(e){DevExpress.ui.dialog.confirm('<div style="text-align:center;max-width:300px">'+gbM("S1_027")+"</div>","Confirm changes").done(function(n){if(n){delete l[e.parent().data().id];setTimeout(function(){e.parent().fadeOut("slow",function(e){$(this).remove(),$.isEmptyObject(l)?T(function(){d=null}):(_(),v.find(".layout-inline.row").each(function(e){e>0&&e%2==1?$(this).addClass("row-bg2"):$(this).removeClass("row-bg2")})),b=!0})},10)}})};function I(e){e.find(".a_qty").click(function(e){if("1"!=clickPrevent){clickLocked(100);var n=$(this);n.attr("tabindex",1).focus(),setTimeout(function(){M(n)},100),setTimeout(function(){n.removeAttr("tabindex").blur()},1e3)}}),e.find(".removeitem").click(function(e){if("1"!=clickPrevent){clickLocked();var n=$(this);n.attr("tabindex",1).focus(),setTimeout(function(){L(n)},300),setTimeout(function(){n.removeAttr("tabindex").blur()},1e3)}})}ComApp.app._localizeMarkup(r),i.append(r);var q=s,E=q[0];u.empty();for(var A=0;A<q.length;A+=2){var R=p.clone();R.attr("id","deliver_"+q[A]),R.find("input").val(q[A]),R.append(q[A+1]),u.append(R),a.hasOwnProperty("time")&&a.timeID==q[A]&&(E=q[A])}u.find("input").change(function(){$.extend(!0,h,{time:this.value}),b=!0}),u.find('input[value="'+E+'"]').prop("checked",!0).trigger("change"),$(f[1]).fadeIn("slow").find("#fastcartform input").change(function(){b=!0}).each(function(e,n){var t=$(n);a.hasOwnProperty(t.attr("name"))&&(t.val(a[t.attr("name")]),h[t.attr("name")]=a[t.attr("name")])}),k.find(".dx-toolbar-center").html(gbM("S1_002").toUpperCase());var H=r.find("#cart_clear");H.removeClass("closebtn").empty(),$('<span><i class="fa fa-plus"></i>'+gbM("S2_010")+"</span>").appendTo(H),H.on("click",function(n,t){if("1"!=clickPrevent)if(clickLocked(),t){var i=function(e){var n=0,t=1;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&(n++,!isNaN(i))){var a=parseInt(i);a>t&&(t=a)}return[n,t]}(l)[1];$.each(t.newSP,function(e,n){var t=!1;if($.map(l,function(e,i){if(e.id==n.id)return t=!0,void v.find(".layout-inline.row").each(function(n,t){if($(t).data().id==i){var a=$(t).find("input");a.val(e.sl+1),a.trigger("change")}})}),t)_();else{i++;var a=P.clone(),o=$.extend(!0,{},n),r=v.find(".layout-inline.row");r.length>0&&!r.last().hasClass("row row-bg2")&&a.addClass("row row-bg2"),o.sl=1,l[i]=o,a.data("id",i),I(a),y(a,n),v.append(a)}}),e.cartcolQty(),b=!0}else{scrLocked();var a,o=$.Deferred(),r=$.Deferred();$.when(o,r).then(function(e,n){n.option({dataSource:e}),scrReleased()});var c=[];_$q.add(function(){_$a.api("POST","634445158944375000020258",{act:"Cart_addSP",ncc:__$ncc,menu:c},function(e){_$q.next(!1),o.resolve(e.data[0])},function(e){_$q.next(!1)})}),o.promise();var d,s=$("<div class='addSP'></div>").appendTo(".dx-viewport"),f=s.dxPopup({fullScreen:!0,dragEnabled:!1,showTitle:!0,deferRendering:!1,contentTemplate:function(e){var n=$("<div></div>");e.append(n),d=n.dxList({elementAttr:{class:"addSP"},height:"100%",showSelectionControls:!0,selectionMode:"multiple",searchEnabled:!0,searchExpr:"ten",onSelectionChanged:function(e){a.option({disabled:0==d.option("selectedItemKeys").length})},itemTemplate:function(e){var n=$("<div>").addClass("product");return $("<img>").attr("src",e.imgs.split("|")[0]).appendTo(n),$("<div><span>"+e.ten+"</span></div>").appendTo(n),$("<div>").addClass("price").html(_Tien(e.giaban,0)).appendTo(n),n}}).dxList("instance"),r.resolve(d)},onHidden:function(){s.remove()},onShown:function(e){},toolbarItems:[{location:"before",toolbar:"top",widget:"dxButton",options:{onInitialized:function(e){a=e.component},disabled:!0,elementAttr:{class:"addSP_btn get-to-work bmd-main-btn"},icon:"plus",type:"success",onClick:function(e){var n=d.option("selectedItemKeys");n.length>0&&(setTimeout(function(){"1"!=clickPrevent&&H.trigger("click",{act:"addSP",newSP:n})},10),f.hide())}}},{location:"center",toolbar:"top",text:gbM("S2_0101").toUpperCase()}]}).dxPopup("instance");setTimeout(function(){f.show()},100),r.promise()}}),_$dondatHang(a.id,r,C,c,{_deliInfo:function(){return h},cartData:function(){var e={};return $.each(l,function(n,t){e[t.id]=t}),e},tongcong:function(){return o}},function(e){"clearAll"==e.act?(setTimeout(function(){t()},10),O(!1),g=!0,x(null,null),D.hide()):"hidePU"==e.act&&D.hide()}),b=!1},T=function(e){c.option({visible:!1});var n=(d=k.find(".noidung_cart")).parent();d.fadeOut("fast",function(){d.detach(),n.prepend(l),l.fadeIn("slow",e)})},S=function(t){var s=n.clone(),b={},T=e.cartDulieu,x=s.find(".giohang");x.addClass("giohangviewdetail"),x.detach(),(S=s.find(".dathang")).css("margin-bottom","20px"),o.clone().prependTo(S),x.insertAfter(S);var S=s.find(".dathangcase"),P=s.find(".deliverytime"),I=P.children().first();b[3]=$(S[3]).clone(),$(S[3]).remove(),b[2]=$(S[2]).clone(),$(S[2]).remove(),b[0]=$(S[0]).clone(),$(S[0]).remove();var q=$(S[1]).find(".screen-placeorder >div").first();q.remove(),(q=$(S[1]).find(".screen-placeorder #fastplaceorder")).parent().css({"padding-top":"0px",height:"1px"}),q.remove(),(q=$(S[1]).find("#contactinfo")).empty(),q.append("<span>@S2_008</span>");var E={},A=(e._deliInfo(),s.find(".scrollbody")),R=function(e,n){if(e){var t=T[e.data().id];n?t.sl=parseInt(n):e.find(".col-qty input").val(t.sl),e.find(".col-total p").html(_Tien(t.sl*t.giaban,0))}var i=s.find(".tf .row .subtotal");i[0].innerHTML=_Tien(0,0),i[1].innerHTML=_Tien(0,0);var a=0;$.each(T,function(e,n){a+=n.sl*n.giaban}),i[2].innerHTML=_Tien(0,0),i[3].innerHTML=_Tien(a,0)},H=function(n){var t=T[n.data().id];n.find(".col-pro >*").each(function(e,n){switch(n.tagName.toLowerCase()){case"span":n.innerHTML="G: "+_Tien(t.giaban,0);break;case"img":var i=t.imgs.split(",");i.length>0&&""!=i[0]&&(n.src=i[0]);break;case"p":n.innerHTML=t.ten}});_TienUSD(t.giaban,0);n.find(".col-price").html("<p>"+_Tien(t.giaban,0)+"</p>"),n.find(".col-vat p").html(_Tien(t.v,0)),n.find(".col-qty input").change(function(){var n,t,i=$(this),a=i.val();""==a&&(a=1,i.val(1)),n=i.parent(),t=i.val(),e._cbCart(n.parent().data().id,{sl:t}),R(i.parent().parent(),a)}),R(n)},N=1,U=A.children().first();U.detach(),t.append(C),ComApp.app._localizeMarkup(s),C.append(s),"1"==mobileClient&&(E={onScroll:function(e){clearTimeout(v),v=setTimeout(function(){m=e.scrollOffset},500)}}),C.dxScrollView(E).dxScrollView("instance");var B=i.find("#"+a),G=B.data("dulieu");$.each(T,function(e,n){var t=U.clone();N%2==0&&t.addClass("row row-bg2"),t.data("id",e),t.find(".a_qty").remove(),t.find(".removeitem").remove(),H(t),A.append(t),N++}),s.find(".giohang .cartx").append('<h2 style="text-align:center;display:block" class="fa fa-calendar">'+Globalize.formatDate(G.ngay,{date:"medium"})+"</h2>").append(r);var V=s.find("#cart_clear");V.removeClass("closebtn").addClass("delbtn").empty(),$('<i class="fa fa-bars"></i>').appendTo(V),V.on("click",function(n){"1"!=clickPrevent&&(clickLocked(),funActionSheet({onItemClick:function(n){if("copyNew"==n.itemData.id){O(!1);var t=(l=k.find(".noidung_cart")).parent(),o=1,r=function(){0==--o&&e.cartcolQty()};l.fadeOut("fast",function(){l.detach(),c.option({visible:!0}),d?(t.prepend(d),d.fadeIn("slow",function(){r()})):r()}),d||(o=2,y(t,G),r())}else if("cancelOrder"==n.itemData.id){O(!1);confirmDlg(gbM("S2_0091"),[4,32],function(e){if(7==e){scrLocked();var n=function(){_$q.next(!1),scrReleased(),D.hide(),M()},t={act:"dathangnhanh_huydonhang",uid:w(),id:a.split("idx_")[1],tungay:u(),denngay:p(),ncc:__$ncc};f.hasOwnProperty("athis")&&!g&&(t.his=$.extend(!0,[],f.athis)),_$q.add(function(){_$a.api("POST","634445158944375000020258",t,function(e){n(),"RESET"!=e.kq&&"NOTFOUND_RESET"!=e.kq||i.empty(),_(e.donhang),"NOTFOUND_RESET"!=e.kq&&(B.removeClass().addClass("ordersrow cancel"),B.find(".orderscol-price .fa").removeClass().addClass("fa fa-trash-o")),e.hasOwnProperty("delO")&&(G.statux=e.delO.statux)},function(e){n(),DevExpress.ui.notify("Error: '"+e,"error",5e3)})})}else M()})}},dataSource:[{text:gbM("S2_009"),id:"cancelOrder",icon:"fa fa-times-circle",type:"danger",visible:"0"==G.statux.toString()},{text:"Copy ...",id:"copyNew",icon:"fa fa-plus",type:"success"},{text:gbM("Cancel"),id:"closeMenu",icon:"chevrondown"}],visible:!0,mode:"edit"}))}),I.detach();var K=G.timeID;P.empty();var z=I.clone();z.addClass("fixedFocus"),z.attr("id","deliver_"+K),z.find("input").val(K),z.append(G.time),P.append(z),P.find('input[value="'+K+'"]').prop("checked",!0),$(S[1]).fadeIn("slow").find("#fastcartform input").each(function(e,n){var t=$(n);G.hasOwnProperty(t.attr("name"))&&t.val(G[t.attr("name")])}),s.find("input").prop("readonly",!0);var Q=r.find(".tempfuck"),Y=Q.find(".event").first();Y.detach();var j=function(){switch(parseInt(G.statux)){case 0:Z("done"),W("active");break;case 1:Z("done"),W("done"),ee("active"),J(gbM("S2_0074"));break;case 2:Z("done"),W("done"),ee("done"),te("active"),J(gbM("S2_0074"));break;case 3:Z("done"),W("done"),ee("done"),te("done"),J(gbM("S2_0074")),ne(gbM("S2_0073"));break;case 4:Z("done"),W("done"),ee("done"),te("cancel"),J(gbM("S2_0074")),ne(gbM("S2_0076"));break;case 10:F(gbM("S2_012")),Z("cancel");break;case 11:Z("done"),J(gbM("S2_0121")),W("cancel")}Q.empty(),$.each(h,function(e,n){var t=Y.clone();t.attr("data-date",e),t.find("h1").html(n[0]),t.find("h2").html(""==n[1]?"-":n[1]),Q.append(t)})},F=ko.observable(gbM("S2_007")),Z=ko.observable(""),J=ko.observable(gbM("S2_0071")),W=ko.observable(""),X=ko.observable(gbM("S2_0075")),ee=ko.observable(""),ne=ko.observable(gbM("S2_0072")),te=ko.observable(""),ie=k.find(".orderprocess"),ae=ie.find(".title").first();ie.find("[data_fuck]").each(function(){var e=$(this);e.attr("data-bind",e.attr("data_fuck")),e.removeAttr("data_fuck")}),ko.applyBindings(new function(){this.dat_hang=F,this.cssdat_hang=Z,this.cho_duyet=J,this.csscho_duyet=W,this.dong_goi=X,this.cssdong_goi=ee,this.giao_hang=ne,this.cssgiao_hang=te},ie[0]),j(),ie.css("height",ie.outerHeight()+ae.outerHeight()),k.on("PROGRESS_CHANGED",function(e,n){scrLocked(),G=n.data,L(1,function(){F(gbM("S2_007")),Z(""),J(gbM("S2_0071")),W(""),X(gbM("S2_0075")),ee(""),ne(gbM("S2_0072")),te(""),j();var e=pigActionSheet.data().dxActionSheet;e&&e.option({visible:!1}),scrReleased()})})},C=$("<div/>"),P=function(e){clearTimeout(v),C.data().dxScrollView.scrollTo(m)},D=k.dxPopup({fullScreen:!0,dragEnabled:!1,showTitle:!0,deferRendering:!0,contentTemplate:function(e){S(e)},onHidden:function(){scrReleased(),_virtualKeyboard("off",null,P),k.remove(),M(),e.showCart="0"},onHiding:function(){scrLocked()},onShown:function(n){setTimeout(function(){e.cartcolQty(),_virtualKeyboard("on",null,P)}),e.showCart=a,scrReleased()},toolbarItems:[{location:"before",toolbar:"top",widget:"dxButton",options:{onInitialized:function(e){c=e.component},visible:!1,elementAttr:{class:"dx-closebutton"},icon:"back",onClick:function(e){"1"!=clickPrevent&&(clickLocked(),b?confirmDlg(gbM("S2_011"),[4,32],function(e){T(function(){7==e&&(d=null),M()})}):T(function(){M()}))}}},{location:"center",toolbar:"top",text:gbM("S2_006").toUpperCase()}]}).dxPopup("instance");function L(n,t){O(!1),_$q.clear(),_$q.add(function(){var i={act:"dathangnhanh_tracking_detail",uid:w(),id:a.split("idx_")[1],tungay:u(),denngay:p(),ncc:__$ncc},o=function(){_$q.next(!1),M()};f.hasOwnProperty("athis")&&!g&&(i.his=$.extend(!0,[],f.athis)),_$a.api("POST","634445158944375000020258",i,function(i){o(),"OK"==i.kq&&(e.cartDulieu=i.sps),s=i.delitime,h=i.log,0==n?D.show():t&&t()},function(e){o(),scrReleased(),DevExpress.ui.notify("Error: '"+e,"error",5e3)})})}L(0)};function t(){var e=(new Date).getTime()%3,n=Thanksfucking(0==e?"6":1==e?"16":"14");n.appendTo(".dx-viewport"),setTimeout(function(){n.fadeOut(1600,function(){n.remove()})},700),n.trigger("thankyou")}var i,a,o,r,c="$attach_634445158944375000020258",d=null,l={},s=!1,f={},u=ko.observable(new Date),p=ko.observable(new Date),h={showCart:"0",_deliInfo:function(){return l},cartDulieu:[],cartcolQty:function(){var e=$(".giohang .cartx"),n=e.find(".col-qty");if(n.length>0){n.removeClass("ex2 ex1");var t=e.find(".scrollbody .col-qty").eq(0).find("div");if(t.length>0){var i=t[0].parentNode.getBoundingClientRect(),a=t[0].getBoundingClientRect(),o=t[1].getBoundingClientRect(),r=parseInt(o.left-a.left),c=(parseInt(a.left-i.left),""),d=e.find(".table").width(),l=17*d/100;0==r?i.width<78&&(c+=" ex1",i.width<60&&(c+=" ex2")):0!=parseInt(a.top-o.top)&&(i.width<125?(c+=" ex1",i.width<l&&i.width<95&&(c+=" ex2")):c+=" ex1"),c.length>0&&e.find(".col-qty").addClass(c)}}}},v=ko.observable(!0),g=!0,m=!1,b=ko.observable(""),_=function(e){var n=y(e.athis)[0];if(g||!n){for(;DevExpress.hideTopOverlay(););i.empty(),b("")}if(e.hasOwnProperty("act")&&255==e.act)DevExpress.ui.notify(e.msg,"error",1e3);else{for(var t=function(e){var n="fa-hourglass-o",t="";switch(parseInt(e)){case 1:n="fa-gift",t="packing";break;case 2:n="fa-motorcycle",t="shipping";break;case 3:n="fa-check-circle",t="delivered";break;case 4:n="fa-motorcycle",t="delifail";break;case 10:n="fa-trash-o",t="cancel";break;case 11:n="fa-times-circle",t="refused"}return[t,n]},o=e.n,r=0;r<o.length;r++){var c=a.clone();c.find(".orderscol-name>div").html(o[r].sps),c.find(".orderscol-tg>span").html(Globalize.formatDate(o[r].ngay,{date:"medium"})),c.find(".orderstime>span").html(o[r].time),c.find(".orderscol-price>div").html(_Tien(o[r].tien,0));var d=t(o[r].statux);c.addClass(d[0]),c.find(".orderscol-price .fa").addClass(d[1]),c.attr("id","idx_"+o[r].id),c.data("dulieu",o[r]),i.append(c)}if(e.hasOwnProperty("u")){o=e.u;for(r=0;r<o.length;r++){var l=i.find(".ordersrow#idx_"+o[r].id);if(l.length>0){d=t(o[r].statux);l.removeClass().addClass("ordersrow "+d[0]),l.find(".orderscol-price .fa").removeClass().addClass("fa "+d[1]),l.data("dulieu",o[r])}"0"!=h.showCart&&h.showCart=="idx_"+o[r].id&&$(".dx-viewport > .shared_popup.placeorder").trigger("PROGRESS_CHANGED",{data:o[r]})}}v(0==i.find(".ordersrow").length)}},w=function(){var e=function(e,n){var t=localDB.exe("get","giohang",null,0)||"";if(t.length>0){var i=JSON.parse(atob(t).norm_to_unicode());if(e&&(l=i.deliInfo||{}),!n)return i;if(n&&i.hasOwnProperty(n))return i[n]}return{}}(!0),n="-1";return e.hasOwnProperty("deliInfo")&&(n=e.deliInfo.uid),null!=n&&n||(n="-1"),n},k=function(){return{act:"dathangnhanh_tracking",uid:w(),tungay:u(),denngay:p(),ncc:__$ncc}},y=function(e){var n=null,t=!1;return f.hasOwnProperty("athis")&&(n=$.extend(!0,[],f.athis)),e&&(t=null!=n&&n[4]==e[4],f.athis=$.extend(!0,[],e)),[t,n]},T=function(e){_$q.next(!1),g=!1,M(),e&&e()},x=function(e,n){var t=$.extend(!0,{},k());f.hasOwnProperty("athis")&&!g&&(t.his=$.extend(!0,[],f.athis)),_$q.add(function(){_$a.api("POST","634445158944375000020258",t,function(t){_(t),T(n),e&&d.scrollToElement(e)},function(e){T(n),DevExpress.ui.notify("Error: '"+e,"error",5e3)})})},S=function(e){try{var n={init:e,frmArgs:$.extend(!0,{},k())},t={};t[c.toString()]=n,f.hasOwnProperty("athis")&&!g&&(n.his=$.extend(!0,[],f.athis)),_$hieu.CommChannel("SYN_LAZY",t,function(e){})}catch(e){}M()},C=void 0,P=0,M=function(){clearTimeout(P),P=setTimeout(function(){C&&(m=!1,C.start_hwnd_timer())},2e3)},O=function(e){m=!0,C&&(C.stop_hwnd_timer(),S("RMV"),e&&(delete communicateEVT.orderchannel1,C=void 0)),clearTimeout(P)},D=function(e){"1"!=clickPrevent&&(clickLocked(),e.component.release(),setTimeout(function(){e.component.option({onPullDown:null}),setTimeout(function(){d.option({onPullDown:D})},4e3)},1e3),i.trigger("LAZY_PUT_PARAM"),_$hieu.get_noty())};return{emptyWH:v,TuNgay:u,DenNgay:p,TimKiem:function(e){"1"!=clickPrevent&&(clickLocked(),O(!1),x(e.element,null))},cssfind_changed:b,findDateChanged:function(e){null==e.value&&e.component.option("value",e.previousValue),"0"==this?u()>p()&&p(u()):p()<u()&&u(p()),b("changed"),g=!0},viewShowing:function(e){s||(i=e.viewInfo.renderResult.$viewItems.find(".dondathang-list"),(a=i.find(".ordersrow").first()).detach(),(o=i.children().first()).detach(),(r=i.children().first()).detach(),i.empty(),x(null,null),i.on(c+"_result",function(e,n){!function(e){try{m||(console.log("heartBeatResult: "+e.kq),"RESET"==e.kq?(O(!1),_$q.add(function(){g=!0,_(e),T(!1)})):"OK"==e.kq&&_(e))}catch(e){console.log(e)}}(n.data)}).on("LAZY_PUT_PARAM",function(e){S("0"),console.log("SyncEvent('0')")}).on("click",".ordersrow",function(e){if("1"!=clickPrevent){clickLocked(),scrLocked();var t=$(this).attr("id");setTimeout(function(){$cartTMP?n(h,$cartTMP.clone(),t):$.get(gitpath+"template/tmpcart.html"+JsCssPrefix,function(e){$cartTMP=$(e);var i=$cartTMP.find(".dynamicjs");if(i.length>0){var a=i.attr("teps").split(";");i.remove();for(var o=0;o<a.length;o++)a[o]=dyncpath+a[o]+JsCssPrefix;(new jsLoader).require(a,function(){})}n(h,$cartTMP.clone(),t)})},10)}}),setTimeout(function(){memorybag.hasOwnProperty("navigate_Order")&&(delete memorybag.navigate_Order,t())},10)),s=!0},viewShown:function(e){C||(C=manualTimer({dura:15,limit:0},function(){i.trigger("LAZY_PUT_PARAM")})).bind(c.toString(),function(e){i.trigger(c+"_result",{data:e})})},viewDisposed:function(){clearTimeout(P),S("RMV"),delete communicateEVT[c.toString()]},_orientationChanged:function(e){"0"!=h.showCart&&h.cartcolQty()},scrollInit:function(e){d=e.component,setTimeout(function(){d.option({onPullDown:D})},2e3)},testfucking:function(e){fucking($(".fuckingtest"))}}};