﻿"use strict";ComApp.Store.Order=function(e){var n=function(e,n,a){var r,c,d,l,p,h,m,g=!1,w=$("<div class='shared_popup placeorder'></div>").appendTo(".dx-viewport"),T=function(t,a){var i,o=n.clone(),r={},d=$.extend(!0,{},e.cartDulieu),s=o.find(".dathangcase"),f=o.find(".deliverytime"),u=f.children().first();r[3]=$(s[3]).clone(),$(s[3]).remove(),r[2]=$(s[2]).clone(),$(s[2]).remove(),r[0]=$(s[0]).clone(),$(s[0]).remove();var p={uid:b()},h=o.find(".scrollbody"),m=function(e,n){d[e.parent().data().id].sl=n},_=function(e,n){if(e){var t=d[e.data().id];n?t.sl=parseInt(n):e.find(".col-qty input").val(t.sl),e.find(".col-total p").html(_Tien(t.sl*t.giaban,0))}var a=o.find(".tf .row .subtotal");a[0].innerHTML=_Tien(0,0),a[1].innerHTML=_Tien(0,0),i=0,$.each(d,function(e,n){i+=n.sl*n.giaban}),a[2].innerHTML=_Tien(0,0),a[3].innerHTML=_Tien(i,0)},T=function(e,n){n=d[e.data().id];e.find(".col-pro >*").each(function(e,t){switch(t.tagName.toLowerCase()){case"span":t.innerHTML="G: "+_Tien(n.giaban,0)+"<br/>Vat: "+_Tien(n.v,0);break;case"img":var a=n.imgs.split(",");a.length>0&&""!=a[0]&&(t.src=a[0]);break;case"p":t.innerHTML=n.ten}}),e.find(".col-price").html("<p>"+_Tien(n.giaban,0)+"</p>"),e.find(".col-vat p").html(_Tien(n.v,0)),e.find(".col-qty input").change(function(){var e=$(this),n=e.val();""==n&&(n=1,e.val(1)),m(e.parent(),e.val()),_(e.parent().parent(),n)}),_(e)},x=1,C=h.children().first();C.detach(),$.each(d,function(e,n){var t=C.clone();x%2==0&&t.addClass("row row-bg2"),t.data("id",e),L(t),T(t),h.append(t),x++});var P=function(e){var n=e.parent(),t=n.find("input"),a=parseInt(t.val()),i=e.hasClass("qty-plus");(a>1||i)&&(m(n,a+(i?1:-1)),_(n.parent()),g=!0)},D=function(e){DevExpress.ui.dialog.confirm('<div style="text-align:center;max-width:300px">'+gbM("S1_027")+"</div>","Confirm changes").done(function(n){if(n){delete d[e.parent().data().id];setTimeout(function(){e.parent().fadeOut("slow",function(e){$(this).remove(),$.isEmptyObject(d)?y(function(){c=null}):(_(),h.find(".layout-inline.row").each(function(e){e>0&&e%2==1?$(this).addClass("row-bg2"):$(this).removeClass("row-bg2")})),g=!0})},10)}})};function L(e){e.find(".a_qty").click(function(e){if("1"!=clickPrevent){clickLocked(100);var n=$(this);n.attr("tabindex",1).focus(),setTimeout(function(){P(n)},100),setTimeout(function(){n.removeAttr("tabindex").blur()},1e3)}}),e.find(".removeitem").click(function(e){if("1"!=clickPrevent){clickLocked();var n=$(this);n.attr("tabindex",1).focus(),setTimeout(function(){D(n)},300),setTimeout(function(){n.removeAttr("tabindex").blur()},1e3)}})}ComApp.app._localizeMarkup(o),t.append(o);var I=l,E=I[0];f.empty();for(var q=0;q<I.length;q+=2){var A=u.clone();A.attr("id","deliver_"+I[q]),A.find("input").val(I[q]),A.append(I[q+1]),f.append(A),a.hasOwnProperty("time")&&a.timeID==I[q]&&(E=I[q])}f.find("input").change(function(){$.extend(!0,p,{time:this.value}),g=!0}),f.find('input[value="'+E+'"]').prop("checked",!0).trigger("change"),$(s[1]).fadeIn("slow").find("#fastcartform input").change(function(){g=!0}).each(function(e,n){var t=$(n);a.hasOwnProperty(t.attr("name"))&&(t.val(a[t.attr("name")]),p[t.attr("name")]=a[t.attr("name")])}),w.find(".dx-toolbar-center").html(gbM("S1_002").toUpperCase());var R=o.find("#cart_clear");R.removeClass("closebtn").empty(),$('<span><i class="fa fa-plus"></i>'+gbM("S2_010")+"</span>").appendTo(R),R.on("click",function(e,n){if("1"!=clickPrevent)if(clickLocked(),n){var t=function(e){var n=0,t=1;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&(n++,!isNaN(a))){var i=parseInt(a);i>t&&(t=i)}return[n,t]}(d)[1];$.each(n.newSP,function(e,n){var a=!1;if($.map(d,function(e,t){if(e.id==n.id)return a=!0,void h.find(".layout-inline.row").each(function(n,a){if($(a).data().id==t){var i=$(a).find("input");i.val(e.sl+1),i.trigger("change")}})}),a)_();else{t++;var i=C.clone(),o=$.extend(!0,{},n),r=h.find(".layout-inline.row");r.length>0&&!r.last().hasClass("row row-bg2")&&i.addClass("row row-bg2"),o.sl=1,d[t]=o,i.data("id",t),L(i),T(i,n),h.append(i)}}),g=!0}else{scrLocked();var a,i=$.Deferred(),o=$.Deferred();$.when(i,o).then(function(e,n){n.option({dataSource:e}),scrReleased()});var r=[];_$q.add(function(){_$a.api("POST","634445158944375000020258",{act:"Cart_addSP",ncc:__$ncc,menu:r},function(e){_$q.next(!1),i.resolve(e.data[0])},function(e){_$q.next(!1)})}),i.promise();var c,l=$("<div class='addSP'></div>").appendTo(".dx-viewport"),s=l.dxPopup({fullScreen:!0,dragEnabled:!1,showTitle:!0,deferRendering:!1,contentTemplate:function(e){var n=$("<div></div>");e.append(n),c=n.dxList({elementAttr:{class:"addSP"},height:"100%",showSelectionControls:!0,selectionMode:"multiple",searchEnabled:!0,searchExpr:"ten",onSelectionChanged:function(e){a.option({disabled:0==c.option("selectedItemKeys").length})},itemTemplate:function(e){var n=$("<div>").addClass("product");return $("<img>").attr("src",e.imgs.split("|")[0]).appendTo(n),$("<div><span>"+e.ten+"</span></div>").appendTo(n),$("<div>").addClass("price").html(_Tien(e.giaban,0)).appendTo(n),n}}).dxList("instance"),o.resolve(c)},onHidden:function(){l.remove()},onShown:function(e){},toolbarItems:[{location:"before",toolbar:"top",widget:"dxButton",options:{onInitialized:function(e){a=e.component},disabled:!0,elementAttr:{class:"addSP_btn get-to-work bmd-main-btn"},icon:"plus",type:"success",onClick:function(e){var n=c.option("selectedItemKeys");n.length>0&&(setTimeout(function(){"1"!=clickPrevent&&R.trigger("click",{act:"addSP",newSP:n})},10),s.hide())}}},{location:"center",toolbar:"top",text:gbM("S2_0101").toUpperCase()}]}).dxPopup("instance");setTimeout(function(){s.show()},100),o.promise()}}),_$dondatHang(a.id,o,S,r,{_deliInfo:function(){return p},cartData:function(){var e={};return $.each(d,function(n,t){e[t.id]=t}),e},tongcong:function(){return i}},function(e){"clearAll"==e.act?(M(!1),v=!0,k(null,null),O.hide()):e.act}),g=!1},y=function(e){r.option({visible:!1});var n=(c=w.find(".noidung_cart")).parent();c.fadeOut("fast",function(){c.detach(),n.prepend(d),d.fadeIn("slow",e)})},x=function(l){var g=n.clone(),y={},k=e.cartDulieu,x=g.find(".giohang");x.addClass("giohangviewdetail"),x.detach(),(C=g.find(".dathang")).css("margin-bottom","20px"),i.clone().prependTo(C),x.insertAfter(C);var C=g.find(".dathangcase"),L=g.find(".deliverytime"),I=L.children().first();y[3]=$(C[3]).clone(),$(C[3]).remove(),y[2]=$(C[2]).clone(),$(C[2]).remove(),y[0]=$(C[0]).clone(),$(C[0]).remove();var E=$(C[1]).find(".screen-placeorder >div").first();E.remove(),(E=$(C[1]).find(".screen-placeorder #fastplaceorder")).parent().css({"padding-top":"0px",height:"1px"}),E.remove(),(E=$(C[1]).find("#contactinfo")).empty(),E.append("<span>@S2_008</span>");var q={},A=(e._deliInfo(),g.find(".scrollbody")),R=function(e,n){if(e){var t=k[e.data().id];n?t.sl=parseInt(n):e.find(".col-qty input").val(t.sl),e.find(".col-total p").html(_Tien(t.sl*t.giaban,0))}var a=g.find(".tf .row .subtotal");a[0].innerHTML=_Tien(0,0),a[1].innerHTML=_Tien(0,0);var i=0;$.each(k,function(e,n){i+=n.sl*n.giaban}),a[2].innerHTML=_Tien(0,0),a[3].innerHTML=_Tien(i,0)},H=function(n){var t=k[n.data().id];n.find(".col-pro >*").each(function(e,n){switch(n.tagName.toLowerCase()){case"span":n.innerHTML="G: "+_Tien(t.giaban,0)+"<br/>Vat: "+_Tien(t.v,0);break;case"img":var a=t.imgs.split(",");a.length>0&&""!=a[0]&&(n.src=a[0]);break;case"p":n.innerHTML=t.ten}});_TienUSD(t.giaban,0);n.find(".col-price").html("<p>"+_Tien(t.giaban,0)+"</p>"),n.find(".col-vat p").html(_Tien(t.v,0)),n.find(".col-qty input").change(function(){var n,t,a=$(this),i=a.val();""==i&&(i=1,a.val(1)),n=a.parent(),t=a.val(),e._cbCart(n.parent().data().id,{sl:t}),R(a.parent().parent(),i)}),R(n)},N=1,V=A.children().first();V.detach(),l.append(S),ComApp.app._localizeMarkup(g),S.append(g),"1"==mobileClient&&(q={onScroll:function(e){clearTimeout(h),h=setTimeout(function(){m=e.scrollOffset},500)}}),S.dxScrollView(q).dxScrollView("instance");var U=t.find("#"+a),B=U.data("dulieu");$.each(k,function(e,n){var t=V.clone();N%2==0&&t.addClass("row row-bg2"),t.data("id",e),t.find(".a_qty").remove(),t.find(".removeitem").remove(),H(t),A.append(t),N++}),g.find(".giohang .cartx").append('<h2 style="text-align:center;display:block" class="fa fa-calendar">'+Globalize.formatDate(B.ngay,{date:"medium"})+"</h2>").append(o);var G=g.find("#cart_clear");G.removeClass("closebtn").addClass("delbtn").empty(),$('<i class="fa fa-bars"></i>').appendTo(G),G.on("click",function(n){"1"!=clickPrevent&&(clickLocked(),funActionSheet({onItemClick:function(n){if("copyNew"==n.itemData.id){M(!1);var i=(d=w.find(".noidung_cart")).parent();d.fadeOut("fast",function(){d.detach(),r.option({visible:!0}),c&&(i.prepend(c),c.fadeIn("slow"))}),c||(T(i,B),e.cartcolQty())}else if("cancelOrder"==n.itemData.id){M(!1);confirmDlg(gbM("S2_0091"),[4,32],function(e){if(7==e){scrLocked();var n=function(){_$q.next(!1),scrReleased(),O.hide(),P()},i={act:"dathangnhanh_huydonhang",uid:b(),id:a.split("idx_")[1],tungay:f(),denngay:u(),ncc:__$ncc};s.hasOwnProperty("athis")&&!v&&(i.his=$.extend(!0,[],s.athis)),_$q.add(function(){_$a.api("POST","634445158944375000020258",i,function(e){n(),"RESET"!=e.kq&&"NOTFOUND_RESET"!=e.kq||t.empty(),_(e.donhang),"NOTFOUND_RESET"!=e.kq&&(U.removeClass().addClass("ordersrow cancel"),U.find(".orderscol-price .fa").removeClass().addClass("fa fa-trash-o")),e.hasOwnProperty("delO")&&(B.statux=e.delO.statux)},function(e){n(),DevExpress.ui.notify("Error: '"+e,"error",5e3)})})}else P()})}},dataSource:[{text:gbM("S2_009"),id:"cancelOrder",icon:"fa fa-times-circle",type:"danger",visible:"0"==B.statux.toString()},{text:"Copy ...",id:"copyNew",icon:"fa fa-plus",type:"success"},{text:gbM("Cancel"),id:"closeMenu",icon:"chevrondown"}],visible:!0,mode:"edit"}))}),I.detach();var K=B.timeID;L.empty();var z=I.clone();z.addClass("fixedFocus"),z.attr("id","deliver_"+K),z.find("input").val(K),z.append(B.time),L.append(z),L.find('input[value="'+K+'"]').prop("checked",!0),$(C[1]).fadeIn("slow").find("#fastcartform input").each(function(e,n){var t=$(n);B.hasOwnProperty(t.attr("name"))&&t.val(B[t.attr("name")])}),g.find("input").prop("readonly",!0);var Y=o.find(".tempfuck"),Q=Y.find(".event").first();Q.detach();var Z=function(){switch(parseInt(B.statux)){case 0:j("done"),W("active");break;case 1:j("done"),W("done"),ee("active"),J(gbM("S2_0074"));break;case 2:j("done"),W("done"),ee("done"),te("active"),J(gbM("S2_0074"));break;case 10:F(gbM("S2_012")),j("cancel");break;case 11:j("done"),J(gbM("S2_0121")),W("cancel")}Y.empty(),$.each(p,function(e,n){var t=Q.clone();t.attr("data-date",e),t.find("h1").html(n[0]),t.find("h2").html(""==n[1]?"-":n[1]),Y.append(t)})},F=ko.observable(gbM("S2_007")),j=ko.observable(""),J=ko.observable(gbM("S2_0071")),W=ko.observable(""),X=ko.observable(gbM("S2_0072")),ee=ko.observable(""),ne=ko.observable(gbM("S2_0073")),te=ko.observable(""),ae=w.find(".orderprocess"),ie=ae.find(".title").first();ae.find("[data_fuck]").each(function(){var e=$(this);e.attr("data-bind",e.attr("data_fuck")),e.removeAttr("data_fuck")}),ko.applyBindings(new function(){this.dat_hang=F,this.cssdat_hang=j,this.cho_duyet=J,this.csscho_duyet=W,this.giao_hang=X,this.cssgiao_hang=ee,this.hoan_tat=ne,this.csshoan_tat=te},ae[0]),Z(),ae.css("height",ae.outerHeight()+ie.outerHeight()),w.on("PROGRESS_CHANGED",function(e,n){scrLocked(),B=n.data,D(1,function(){Z();var e=pigActionSheet.data().dxActionSheet;e&&e.option({visible:!1}),scrReleased()})})},S=$("<div/>"),C=function(e){clearTimeout(h),S.data().dxScrollView.scrollTo(m)},O=w.dxPopup({fullScreen:!0,dragEnabled:!1,showTitle:!0,deferRendering:!0,contentTemplate:function(e){x(e)},onHidden:function(){scrReleased(),_virtualKeyboard("off",null,C),w.remove(),P(),e.showCart="0"},onHiding:function(){scrLocked()},onShown:function(n){setTimeout(function(){e.cartcolQty(),_virtualKeyboard("on",null,C)}),e.showCart=a,scrReleased()},toolbarItems:[{location:"before",toolbar:"top",widget:"dxButton",options:{onInitialized:function(e){r=e.component},visible:!1,elementAttr:{class:"dx-closebutton"},icon:"back",onClick:function(e){"1"!=clickPrevent&&(clickLocked(),g?confirmDlg(gbM("S2_011"),[4,32],function(e){y(function(){7==e&&(c=null),P()})}):y(function(){P()}))}}},{location:"center",toolbar:"top",text:gbM("S2_006").toUpperCase()}]}).dxPopup("instance");function D(n,t){M(!1),_$q.add(function(){var i={act:"dathangnhanh_tracking_detail",uid:b(),id:a.split("idx_")[1],tungay:f(),denngay:u(),ncc:__$ncc},o=function(){_$q.next(!1),P()};s.hasOwnProperty("athis")&&!v&&(i.his=$.extend(!0,[],s.athis)),_$a.api("POST","634445158944375000020258",i,function(a){o(),"OK"==a.kq&&(e.cartDulieu=a.sps),l=a.delitime,p=a.log,0==n?O.show():t&&t()},function(e){o(),scrReleased(),DevExpress.ui.notify("Error: '"+e,"error",5e3)})})}D(0)};var t,a,i,o,r="$attach_634445158944375000020258",c=null,d={},l=!1,s={},f=ko.observable(new Date),u=ko.observable(new Date),p={showCart:"0",_deliInfo:function(){return d},cartDulieu:[],cartcolQty:function(){var e=$(".giohang .cartx"),n=e.find(".col-qty");if(n.length>0){n.removeClass("ex2 ex1");var t=e.find(".scrollbody .col-qty").eq(0).find("div");if(t.length>0){var a=t[0].parentNode.getBoundingClientRect(),i=t[0].getBoundingClientRect(),o=t[1].getBoundingClientRect(),r=parseInt(o.left-i.left),c=(parseInt(i.left-a.left),""),d=e.find(".table").width(),l=17*d/100;0==r?a.width<60&&(c+=" ex1",a.width<50&&(c+=" ex2")):0!=parseInt(i.top-o.top)&&a.width<125&&(c+=" ex1",a.width<l&&a.width<95&&(c+=" ex2")),c.length>0&&e.find(".col-qty").addClass(c)}}}},h=ko.observable(!0),v=!0,m=!1,g=ko.observable(""),_=function(e){var n=T(e.athis)[0];if(v||!n){for(;DevExpress.hideTopOverlay(););t.empty(),g("")}if(e.hasOwnProperty("act")&&255==e.act)DevExpress.ui.notify(e.msg,"error",1e3);else{for(var i=function(e){var n="fa-hourglass-o",t="";switch(parseInt(e)){case 1:n="fa-thumbs-o-up",t="approved";break;case 2:n="fa-motorcycle",t="shipping";break;case 10:n="fa-trash-o",t="cancel";break;case 11:n="fa-times-circle",t="refused"}return[t,n]},o=e.n,r=0;r<o.length;r++){var c=a.clone();c.find(".orderscol-name>div").html(o[r].sps),c.find(".orderscol-tg>span").html(Globalize.formatDate(o[r].ngay,{date:"medium"})),c.find(".orderstime>span").html(o[r].time),c.find(".orderscol-price>div").html(_Tien(o[r].tien,0));var d=i(o[r].statux);c.addClass(d[0]),c.find(".orderscol-price .fa").addClass(d[1]),c.attr("id","idx_"+o[r].id),c.data("dulieu",o[r]),t.append(c)}if(e.hasOwnProperty("u")){o=e.u;for(r=0;r<o.length;r++){var l=t.find(".ordersrow#idx_"+o[r].id);if(l.length>0){d=i(o[r].statux);l.removeClass().addClass("ordersrow "+d[0]),l.find(".orderscol-price .fa").removeClass().addClass("fa "+d[1]),l.data("dulieu",o[r])}"0"!=p.showCart&&p.showCart=="idx_"+o[r].id&&$(".dx-viewport > .shared_popup.placeorder").trigger("PROGRESS_CHANGED",{data:o[r]})}}h(0==t.find(".ordersrow").length)}},b=function(){var e=function(e,n){var t=localDB.exe("get","giohang",null,0)||"";if(t.length>0){var a=JSON.parse(atob(t).norm_to_unicode());if(e&&(d=a.deliInfo||{}),!n)return a;if(n&&a.hasOwnProperty(n))return a[n]}return{}}(!0),n="-1";return e.hasOwnProperty("deliInfo")&&(n=e.deliInfo.uid),null!=n&&n||(n="-1"),n},w=function(){return{act:"dathangnhanh_tracking",uid:b(),tungay:f(),denngay:u(),ncc:__$ncc}},T=function(e){var n=null,t=!1;return s.hasOwnProperty("athis")&&(n=$.extend(!0,[],s.athis)),e&&(t=null!=n&&n[4]==e[4],s.athis=$.extend(!0,[],e)),[t,n]},y=function(e){_$q.next(!1),v=!1,P(),e&&e()},k=function(e,n){var t=$.extend(!0,{},w());s.hasOwnProperty("athis")&&!v&&(t.his=$.extend(!0,[],s.athis)),_$q.add(function(){_$a.api("POST","634445158944375000020258",t,function(t){_(t),y(n),e&&c.scrollToElement(e)},function(e){y(n),DevExpress.ui.notify("Error: '"+e,"error",5e3)})})},x=function(e){try{var n={init:e,frmArgs:$.extend(!0,{},w())},t={};t[r.toString()]=n,s.hasOwnProperty("athis")&&!v&&(n.his=$.extend(!0,[],s.athis)),_$hieu.CommChannel("SYN_LAZY",t,function(e){})}catch(e){}P()},S=void 0,C=0,P=function(){clearTimeout(C),C=setTimeout(function(){S&&(m=!1,S.start_hwnd_timer())},2e3)},M=function(e){m=!0,S&&(S.stop_hwnd_timer(),x("RMV"),e&&(delete communicateEVT.orderchannel1,S=void 0)),clearTimeout(C)},O=function(e){"1"!=clickPrevent&&(clickLocked(),e.component.release(),setTimeout(function(){e.component.option({onPullDown:null}),setTimeout(function(){c.option({onPullDown:O})},4e3)},1e3),t.trigger("LAZY_PUT_PARAM"),_$hieu.get_noty())};return{emptyWH:h,TuNgay:f,DenNgay:u,TimKiem:function(e){"1"!=clickPrevent&&(clickLocked(),M(!1),k(e.element,null))},cssfind_changed:g,findDateChanged:function(e){"1"!=clickPrevent&&(clickLocked(),null==e.value&&e.component.option("value",e.previousValue),"0"==this?f()>u()&&u(f()):u()<f()&&f(u()),g("changed"),v=!0)},showitemdetail:function(e,t){scrLocked();var a=$(t.target).closest(".ordersrow").attr("id");setTimeout(function(){$cartTMP?n(p,$cartTMP.clone(),a):$.get(gitpath+"template/tmpcart.html",function(e){$cartTMP=$(e),n(p,$cartTMP.clone(),a)})},10)},viewShowing:function(e){l||(t=e.viewInfo.renderResult.$viewItems.find(".dondathang-list"),(a=t.find(".ordersrow").first()).detach(),(i=t.children().first()).detach(),(o=t.children().first()).detach(),t.empty(),k(null,null),t.on(r+"_result",function(e,n){!function(e){try{m||(console.log("heartBeatResult: "+e.kq),"RESET"==e.kq?(M(!1),_$q.add(function(){v=!0,_(e),y(!1)})):"OK"==e.kq&&_(e))}catch(e){console.log(e)}}(n.data)}).on("LAZY_PUT_PARAM",function(e){x("0"),console.log("SyncEvent('0')")})),l=!0},viewShown:function(e){S||(S=manualTimer({dura:15,limit:0},function(){t.trigger("LAZY_PUT_PARAM")})).bind(r.toString(),function(e){t.trigger(r+"_result",{data:e})})},viewDisposed:function(){clearTimeout(C),x("RMV"),delete communicateEVT[r.toString()]},_orientationChanged:function(e){"0"!=p.showCart&&p.cartcolQty()},scrollInit:function(e){c=e.component,setTimeout(function(){c.option({onPullDown:O})},2e3)}}};