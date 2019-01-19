"use strict";

(function () {
    ComApp.app.maCurrentView.__$cartPopup = function (__$shared, cartxx) {
        var that = this, popupElement = $("<div class='shared_popup placeorder'></div>").appendTo('.dx-viewport'), dathangcase = {}
        , renderPopupCart = function (contentElement) {
            var dathang = cartxx.find('.dathangcase'), deliverytime = cartxx.find('.deliverytime'), timeLabel = deliverytime.children().first();
            dathangcase['3'] = $(dathang[3]).clone(); $(dathang[3]).remove();
            dathangcase['2'] = $(dathang[2]).clone(); $(dathang[2]).remove();
            dathangcase['0'] = $(dathang[0]).clone(); $(dathang[0]).remove();
            //
            var scrollOpts = {}, cartData = __$shared._cartData(),deliData = __$shared._deliInfo(), __bCart = cartxx.find('.scrollbody'),
                UptCart = function (el,sl) {
                    __$shared._cbCart(el.parent().data().id, {
                        sl:sl 
                    });
                }
                , QTY = function (el, sl) {
                    if (el) {
                        var $d = cartData[el.data().id];
                        if (sl) {
                            $d['sl'] = sl;
                        } else {
                            el.find('.col-qty input').val($d['sl']);
                        }
                        el.find('.col-total p').html(_Tien($d['sl'] * $d['giaban'], 0)).removeAttr('style').autoSizr();
                    }
                    //
                    var $tong = cartxx.find('.tf .row .subtotal');
                    $tong[0].innerHTML = _Tien(0, 0);
                    $tong[1].innerHTML = _Tien(0, 0);
                    var tongcong = 0;
                    $.each(cartData, function (key, $d) {
                        tongcong += $d['sl'] * $d['giaban'];
                    });
                    $tong[2].innerHTML = _Tien(tongcong, 0);
                }
                ,SPview = function (el) {
                    var $d = cartData[el.data().id];
                    el.find('.col-pro >*').each(function (i,s) {
                        switch (s.tagName.toLowerCase()) {
                            case 'span': {
                                s.innerHTML = 'G: ' + _Tien($d['giaban'], 0) + '<br/>Vat: ' + _Tien($d['v'], 0);
                                break;
                            }
                            case 'img': {
                                var imgs = $d.imgs.split(',');
                                if (imgs.length > 0 && imgs[0] != '')  s.src = imgs[0];
                                break;
                            }
                            case 'p': {
                                s.innerHTML = $d['ten'];
                                break;
                            }
                        }
                    });
                    el.find('.col-price').html('<p>' + _Tien($d['giaban'], 0) + '</p>');
                    el.find('.col-vat p').html(_Tien($d['v'], 0));
                    el.find('.col-qty input').change(function () {
                        var $sl = $(this), __slVal = $sl.val(); if (__slVal == '') { __slVal = 1; $sl.val(1); };
                        UptCart($sl.parent(), $sl.val());
                        QTY($sl.parent().parent(), __slVal);
                    });
                    //
                    QTY(el);
                    //
                },bgClass='row row-bg2',cnt=1, __sampleP = __bCart.children().first(); __sampleP.detach();
            $.each(cartData, function (key, val) {
                var spitem = __sampleP.clone();
                if (cnt % 2 == 0) spitem.addClass(bgClass);
                spitem.data('id', key);
                spitem.find('.a_qty').click(function (e) {
                    var cartItem = $(this).parent();
                    var $spin = cartItem.find('input'), val = parseInt($spin.val()), cong = $(this).hasClass('qty-plus');
                    if (val > 1 || cong) {
                        UptCart(cartItem,val + ((cong) ? 1 : -1));
                        QTY(cartItem.parent());
                    }
                });
                spitem.find('.removeitem').click(function (e) {
                    var that=this,result = DevExpress.ui.dialog.confirm('<div style="text-align:center;max-width:300px">' + gbM("S1_027") + '</div>', "Confirm changes");
                    result.done(function (rst) {
                        if (rst) {
                            var waitCount = 2, recount = function () {
                                waitCount--;
                                if (waitCount == 0) {
                                    if ($.isEmptyObject(cartData)) {
                                        popupInstance.hide();
                                    } else {
                                        QTY();
                                    }
                                }
                            }
                            setTimeout(function () {
                                __$shared._rmvOutCart($(that).parent().data().id, recount);
                            });
                            setTimeout(function () {
                                $(that).parent().fadeOut('slow', function (s) {
                                    $(this).remove();
                                    recount();
                                });
                            }, 10);
                        }
                    });
                });
                SPview(spitem);__bCart.append(spitem);cnt++;
            });
            //
            contentElement.append(scrollView);
            ComApp.app._localizeMarkup(cartxx)
            scrollView.append(cartxx);
            //
            if (mobileClient == '1') {
                scrollOpts = {
                    onScroll: function (e) {
                        clearTimeout(scrollTimer);
                        scrollTimer = setTimeout(function () {
                            scrollData = e.scrollOffset;
                        }, 500);
                    }
                }
            }
            scrollView.dxScrollView(scrollOpts).dxScrollView('instance');
            timeLabel.detach(); deliverytime.html(scrollView.find('.dx-scrollview-scrollbottom-indicator').clone());
            setTimeout(function () {
                _$a.api('POST', '634445158944375000020258', { 'act': 'deliverytime' }, function (rst) {
                    var _$t = rst.time, defTime;
                    if (_$t.length > 0) {
                        deliverytime.empty(); defTime = _$t[0];
                        for (var i = 0; i < _$t.length; i += 2) {
                            var _$timeLabel = timeLabel.clone(); _$timeLabel.attr('id', 'deliver_' + _$t[i]); _$timeLabel.find("input").val(_$t[i]); _$timeLabel.append(_$t[i + 1]);
                            deliverytime.append(_$timeLabel);
                            if (deliData.hasOwnProperty('time') && deliData['time'] == _$t[i]) {
                                defTime = _$t[i]
                            }
                        };
                        deliverytime.find('input[value="' + defTime + '"]').prop('checked', true);//.trigger('change');
                        deliverytime.find('input').change(function () {
                            __$shared._cbCart('delivery', { 'time': this.value });
                        });
                        //
                        $(dathang[1]).fadeIn('slow').find('#fastcartform input').change(function () {
                            var _$ip = $(this); var storeObj = {}; storeObj[_$ip.attr('f')] = _$ip.val();
                            __$shared._cbCart('delivery', storeObj);
                        }).each(function (i, txt) {
                            var _$ip = $(txt);
                            if (deliData.hasOwnProperty(_$ip.attr('f'))) {
                                _$ip.val(deliData[_$ip.attr('f')]);
                            }
                        });
                    }
                });
            }, 100);
        }
        , scrollView = $("<div/>"), scrollTimer, scrollData, scrollDataXXX, virtualPad = function (s) {
            clearTimeout(scrollTimer);
            scrollView.data().dxScrollView.scrollTo(scrollData);
        }
        , popupEvts = function () {
            //
            scrollView.find('#cart_clear').click(function (s, e) {
                //popupInstance.hide();
                //ComApp.app.navigate("Order", { root: true });
                var  result = DevExpress.ui.dialog.confirm('<div style="text-align:center;max-width:300px">' + gbM("S1_027") + '</div>', "Confirm changes");
                result.done(function (rst) {
                    if (rst) {
                        scrLocked();
                        setTimeout(function () {
                            var allList = scrollView.find('.removeitem'), waitCount = allList.length, recount = function () {
                                waitCount--;
                                if (waitCount == 0) {
                                    popupInstance.hide();
                                    scrReleased();
                                }
                            }
                            allList.each(function (i, el) {
                                var that = el;
                                setTimeout(function () {
                                    __$shared._rmvOutCart($(that).parent().data().id, recount);
                                });
                                setTimeout(function () {
                                    $(that).parent().fadeOut('slow', function (s) {
                                        $(this).remove();
                                        recount()
                                    });
                                });
                            });
                        }, 10);
                    }
                });
            });
            //
            scrollView.find('.placeorder_button').on('click', function (e) {
                var isValid = true;
                if (this.id == 'fastplaceorder') {
                    scrollView.find('#fastcartform input.sodienthoai').each(function (i, el) {
                        if ($.trim($(el).val()) == '') {
                            var _$p = $(el).parent(), __$p = _$p.parent();
                            _$p.addClass('txt-invalid'); __$p.addClass('errdulieu');
                            isValid = false;
                            $(el).focus();
                        }
                    });
                }
                if (!isValid) return;
                //
                var postRst = function (data, args) {
                    _$q.next(false);
                    if (args['act'] == '0') {
                        var popup = null, popupOptions = {
                            width: 300,
                            height: 270,
                            contentTemplate: function () {
                                var tmp = dathangcase[3];
                                ComApp.app._localizeMarkup(tmp);
                                //
                                tmp.find('.a_demo_one').on('click', function () {
                                    popup.hide();
                                    kicksvr({ 'act': '1' });
                                });
                                tmp.find('img').attr('src', 'data:image/png;base64,' + data.captcha.CaptchaImage);
                                return tmp;
                            },
                            showTitle: true,
                            toolbarItems: [
                                {
                                    location: "before",
                                    toolbar: "top",
                                    widget: "dxButton",
                                    options: {
                                        icon: "refresh",
                                        elementAttr: { 'class': 'flatbutton' },
                                        onClick: function (e) {
                                            alert('here');
                                        }
                                    }
                                }
                            , {
                                location: "center",
                                toolbar: "top",
                                text: 'BUOC XAC NHAN'
                            }]
                            , onHidden: function () {
                                $popupContainer.remove();
                            },
                            dragEnabled: false
                        };
                        var $popupContainer = $("<div class='captcha_popup'/>").appendTo(popupElement);
                        popup = $popupContainer.dxPopup(popupOptions).dxPopup("instance");
                        popup.show();
                    } else {
                        popupInstance.hide();
                    }
                    scrReleased();
                }, kicksvr = function (args) {
                    scrLocked();
                    _$a.api('POST', '634445158944375000020258', args, function (result) {
                        postRst(result, args);
                    }, function (err) {
                        postRst(result, args);
                    });
                };
                kicksvr({ 'act': '0' });
            });
            //
            if (dathangcase.hasOwnProperty('0')) {//new visistor
                var loginEvts = function () {
                    scrollView.find('.resetpass').on('click', function () {
                        var datlaipass,chotdonhang = scrollView.find('.login.chotdonhang'), doResetPass = function () {
                            var dateAdd = function (date, interval, units) {
                                var ret = new Date(date); //don't change original date
                                var checkRollover = function () { if (ret.getDate() != date.getDate()) ret.setDate(0); };
                                switch (interval.toLowerCase()) {
                                    case 'year': ret.setFullYear(ret.getFullYear() + units); checkRollover(); break;
                                    case 'quarter': ret.setMonth(ret.getMonth() + 3 * units); checkRollover(); break;
                                    case 'month': ret.setMonth(ret.getMonth() + units); checkRollover(); break;
                                    case 'week': ret.setDate(ret.getDate() + 7 * units); break;
                                    case 'day': ret.setDate(ret.getDate() + units); break;
                                    case 'hour': ret.setTime(ret.getTime() + units * 3600000); break;
                                    case 'minute': ret.setTime(ret.getTime() + units * 60000); break;
                                    case 'second': ret.setTime(ret.getTime() + units * 1000); break;
                                    default: ret = undefined; break;
                                }
                                return ret;
                            }, note = datlaipass.find('#note'), ts = dateAdd(new Date(), 'minute', 2), newYear = true;// new Date(2019, 0, 1),
                            datlaipass.find('.captcha_resetpass').html(scrollView.find('.dx-scrollview-scrollbottom-indicator').clone());
                            if ((new Date()) > ts) {
                                // The new year is here! Count towards something else.
                                // Notice the *1000 at the end - time must be in milliseconds
                                ts = (new Date()).getTime() + 10 * 24 * 60 * 60 * 1000;
                                newYear = false;
                            }
                            datlaipass.find('#countdown').countdown({
                                timestamp: ts,
                                callback: function (days, hours, minutes, seconds) {

                                    var message = "";

                                    message += days + " day" + (days == 1 ? '' : 's') + ", ";
                                    message += hours + " hour" + (hours == 1 ? '' : 's') + ", ";
                                    message += minutes + " minute" + (minutes == 1 ? '' : 's') + " and ";
                                    message += seconds + " second" + (seconds == 1 ? '' : 's') + " <br />";

                                    if (newYear) {
                                        message += "left until the new year!";
                                    }
                                    else {
                                        message += "left to 10 days from now!";
                                    }

                                    note.html(message);
                                }
                            });
                            chotdonhang.fadeOut(300, function () {
                                $('.table').css({ 'display': 'none' });
                                datlaipass.fadeIn('slow', function () {
                                });
                            });
                        };
                        if (dathangcase.hasOwnProperty('2')) {
                            datlaipass = dathangcase['2'].clone(); ComApp.app._localizeMarkup(datlaipass); $(chotdonhang[0]).parent().append(datlaipass); delete dathangcase['2'];
                            datlaipass.find('#resetpass_close').on('click', function () {
                                var chotdonhang = scrollView.find('.login.chotdonhang');
                                var datlaipass = scrollView.find('.login.datlaipass');
                                datlaipass.fadeOut(500, function () {
                                    chotdonhang.fadeIn('slow');
                                    datlaipass.find('.captcha_resetpass').empty();
                                });
                            });

                        } else {
                            datlaipass = scrollView.find('.login.datlaipass');
                        };
                        new jsLoader().require([dyncpath + 'dx__Menu1.js'], function () {// Callback
                            doResetPass();
                        });
                    });
                    scrollView.find('#dologin_close').on('click', function () {
                        var placeorder = scrollView.find('.screen-placeorder');
                        var dangnhap = scrollView.find('.screen-dangnhap');
                        dangnhap.fadeOut(500, function () {
                            placeorder.fadeIn('slow');
                            $('.table').css({ 'display': '' });
                            scrollView.data().dxScrollView.scrollTo(scrollDataXXX);//restore scrollPosition
                        });
                    });
                }
                //
                scrollView.find('#dangnhap_button').on('click', function () {
                    scrollDataXXX = scrollView.data().dxScrollView.scrollOffset();//backup scrollPosition
                    var placeorder = scrollView.find('.screen-placeorder');
                    var dangnhap = scrollView.find('.screen-dangnhap');
                    placeorder.fadeOut(500, function () {
                        //has 2 placeorder
                    });
                    setTimeout(function () {
                        dangnhap.fadeIn('slow');
                        $('.table').css({ 'display': 'none' });
                        if (!dangnhap.data('loginEvts')) loginEvts();
                        dangnhap.data('loginEvts', '1');
                    }, 500);
                });
                scrollView.find('#fastcartform input').blur(function () {
                    var $input = $(this);
                    if ($input.hasClass('sodienthoai')) {
                        var _$p = $input.parent(), __$p = _$p.parent();
                        if (_$p.hasClass('txt-invalid')) {
                            if ($.trim($input.val()) != '') {
                                _$p.removeClass('txt-invalid'); __$p.removeClass('errdulieu');
                            }
                        }
                    }
                    $(this).parent().parent().removeClass("dx-state-focused");
                }).focus(function () {
                    $(this).parent().parent().addClass("dx-state-focused")
                });
                scrollView.find('#fastcartform input[type=tel]').keypress(function (e) {
                    //if the letter is not digit then display error and don't type anything
                    if (e.which != 32 && e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                        //display error message
                        //$("#errmsg").html("Digits Only").show().fadeOut("slow");
                        return false;
                    }
                });
            }
        }
        , popupInstance = popupElement.dxPopup({
            fullScreen: true
            , dragEnabled: false
            , showTitle: true
            , deferRendering: false
            , contentTemplate: function (contentElement) {
                renderPopupCart(contentElement);
            }
            , onHidden: function () {
                _virtualKeyboard('off', null, virtualPad);
                popupElement.remove();
                __$shared.showCart = false;
            }
            , onShown: function (e) {
                __$shared.showCart = true;
                setTimeout(function () {
                    __$shared.cartcolQty();
                    e.element.find('.dx-toolbar-center').html(gbM("S1_002"));
                    _virtualKeyboard('on', null, virtualPad);
                    popupEvts();
                    scrReleased();
                });
            }
        }).dxPopup('instance');
        setTimeout(function () {
            popupInstance.show();
        },100);
    }
}());