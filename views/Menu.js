"use strict";
//https://skalman.github.io/UglifyJS-online/
ComApp.Store.Menu = function (params) {
    jQuery.extend(jQuery.easing, { easeInOutExpo: function (e, f, a, h, g) { if (f == 0) { return a } if (f == g) { return a + h } if ((f /= g / 2) < 1) { return h / 2 * Math.pow(2, 10 * (f - 1)) + a } return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a } });
    jQuery.fn.shake = function (interval, distance, times) {
        interval = typeof interval == "undefined" ? 100 : interval;
        distance = typeof distance == "undefined" ? 10 : distance;
        times = typeof times == "undefined" ? 3 : times;
        var jTarget = $(this);
        jTarget.css('position', 'relative');
        for (var iter = 0; iter < (times + 1) ; iter++) {
            jTarget.animate({ top: ((iter % 2 == 0 ? distance * Math.random() : distance * Math.random() * -1)), left: ((iter % 2 == 0 ? distance * Math.random() : distance * Math.random() * -1)) }, interval);
        }
        return jTarget.animate({ top: 0, left: 0 }, interval);
    }

    function adptStorage() {
        var storeGioHang = retriveCart(false); storeGioHang[__$ncc] = cartData; storeGioHang['deliInfo'] = deliveryInfo;
        localDB.exe('add', 'giohang', btoa(JSON.stringify(storeGioHang).norm_to_ascii()), 0);
        //
        var __cart = {}; $.each(cartData, function (k, v) {
            __cart[k] = v['sl'];
        });
        apiHistory($attach,{ 'cart': __cart ,'deli': $.extend(true,{},deliveryInfo) });
    }
    function giohang(data,sl) {
        if (!cartData.hasOwnProperty(data.id)) {
            var newObj = $.extend({}, data); newObj.sl = sl;
            cartData[data.id] = newObj
        } else {
            delete cartData[data.id];
        };
        adptStorage();
    }
    function giohangItems(cart, sl, hitCart) {
        if (!sl) {
            sl = 0
            $.each(cartData, function (key, val) {
                sl += 1;
            });
        };
        if (sl != 0) cart.shake(100, 10, 3);
        var badge = cart.find('#cartcount');
        if (badge.length == 0 && sl > 0) {
            cart.append($('<div id="cartcount" class="badge pulsate">' + sl + '</div>'));
        } else {
            var no = badge.text(), newSL = sl + parseInt(no);
            if (newSL > 0) {
                badge.text(newSL);
            } else {
                badge.remove();
            }
        }
        if (hitCart) {
            var cls = (sl > 0) ? 'addClass' : 'removeClass';
            hitCart[cls]('oncart');
            hitCart.prev()[cls]('oncart');
        }
    }
    function add2Cart(hitCart) {
        var cart = $('#giodunghang'), sl = 0;
        if (!$(hitCart).hasClass('oncart')) {
            var imgtodrag = $(hitCart).parent().parent().find('img').eq(0), doAdd = function () {
                giohangItems(cart, sl, $(hitCart));
            };
            if (imgtodrag) {
                var imgclone = imgtodrag.clone()
                    .offset({
                        top: imgtodrag.offset().top,
                        left: imgtodrag.offset().left
                    })
                    .css({
                        'opacity': '0.5',
                        'position': 'absolute',
                        'height': imgtodrag.height() + 'px',
                        'width': imgtodrag.width() + 'px',
                        'z-index': '100'
                    })
                    .appendTo($('body'))
                    .animate({
                        'top': cart.offset().top + 10,
                        'left': cart.offset().left + 10,
                        'width': 75,
                        'height': 75
                    }, 1000, 'easeInOutExpo', function () {
                        doAdd();
                    });
                imgclone.animate({
                    'width': 0,
                    'height': 0
                }, function () {
                    $(this).detach()
                });
            } else {
                doAdd();
            }
            sl = 1;
        } else {
            sl = -1;
            giohangItems(cart, sl, $(hitCart));
        }
        giohang($(hitCart).parent().closest('li').data().info, sl);
    }

    function MenuList() {
        var clickEvent = (function () {
            if ('click' in document.documentElement === true) {
                return 'click';
            } else if ('ontouchend' in document.documentElement === true) {
                return 'touchend';
            } else if ('ontouchstart' in document.documentElement === true) {
                return 'ontouchstart';
            };
            //if ('ontouchstart' in document.documentElement === true)
            //    return 'touchstart';
            //else
            //    return 'click';
        })(),
        _rotateItem = function (trigger, item) {
            var nextQ = function (_idx) {
                var queImg = $(item).data('queImg'), $imgs = $(item).find('img'), _imgs = queImg[0], _imgIdx = queImg[1];
                if (_imgs.length >0) {
                    if (_imgIdx < _imgs.length - 1) {
                        _imgIdx += 1;
                    } else {
                        _imgIdx = 0;
                    }
                    $imgs.eq(_idx).attr('src', _imgs[_imgIdx]);
                    queImg[1] = _imgIdx;
                }
            }
            if (item.getAttribute('data-open') === 'open') {
                item.setAttribute('data-open', '');
                trigger.className = trigger.className.replace(/\b cbp-pgrotate-active\b/, '');
                item.className = item.className.replace(/\b cbp-pgitem-showback\b/, '');
                setTimeout(function () { nextQ(1) }, 10);
            }
            else {
                item.setAttribute('data-open', 'open');
                trigger.className += ' cbp-pgrotate-active';
                item.className += ' cbp-pgitem-showback';
                setTimeout(function () { nextQ(0) }, 10);
            }
        },
        _showItemOptions = function (trigger) {
            if (trigger.getAttribute('data-open') === 'open') {
                trigger.setAttribute('data-open', '');
                trigger.parentNode.className = trigger.parentNode.className.replace(/\b cbp-pgoption-active\b/, '');
            }
            else {
                trigger.setAttribute('data-open', 'open');
                trigger.parentNode.className += ' cbp-pgoption-active';
            }
        }

        var  addcartAct = function () {
            if (!$.isEmptyObject(cartData)) {
                scrLocked();
                setTimeout(function () {
                    fuckGIOHANG();
                }, 1200);
            }
        }
        , clickCartAction = function (evt) {
            clickLocked();
            //
            var fuckCart = $(evt.target);
            fuckCart.attr('tabindex', 1).focus();
            add2Cart(evt.target || evt.srcElement);
            setTimeout(function () { fuckCart.removeAttr('tabindex').blur(); }, 1000);
        };

        this._init = function (el) {
            var self = this;
            el.on(clickEvent, 'span.cbp-pgrotate', function (e) {
                _rotateItem(this, this.nextElementSibling);
            }).on(clickEvent, 'ul.cbp-pgoptions', function (evt) {
                switch (evt.target.className.split(' ')[0]) {
                    case 'cbp-pgoptcart': {
                        if (clickPrevent == '1') return;
                        clickCartAction(evt);
                        break;
                    }
                    case 'cbp-pgoptcolor': {
                        _$hieu.get_noty();
                        break;
                    }
                    case 'cbp-pgoptfav': {
                        alert('here');
                        break;
                    }
                    default: {
                        //_$hieu.trigger("Menu", null, [1, 2, 3]);
                        break;
                    }
                };
            }).on(clickEvent, '.goimon .ordernow', function (evt) {
                evt.stopPropagation();
                if (clickPrevent == '1') return;
                clickLocked();
                setTimeout(function () {
                    add2Cart(evt.currentTarget.parentNode.nextElementSibling);
                    addcartAct();
                }, 10);
                return false;
            }).on(clickEvent, '.goimon .orderok', function (evt) {
                evt.stopPropagation();
                if (clickPrevent == '1') return;
                clickLocked();
                setTimeout(function () {
                    fuckGIOHANG();
                }, 10);
                return false;
            })
        }
        return {
            _init: this._init
        }
    };

    function displayBlankMenu($el, total) {
        _$q.next();
        var cnt = $el.children().length;
        if (cnt == 12) {
            var $fooding = $("<div class='fooding'><div class='fooding1'></div><div class='fooding2'>COM DANG NAU ...</div></div>");
            $el.closest('#dxScrollView_food').append($fooding);
        } else {
            $fooding = $el.closest('#dxScrollView_food').find('.fooding');
            $fooding.remove();
        };
        var releaseState = (cnt - 12) == total;
        instanceScroll.release(releaseState);
        if (!releaseState) triggerScrollReachBottom();
    }
    function add2MenuList($el, _rst) {
        if (!_blankli) _blankli = $el.find('li.chew-cell--ghost').eq(0);
        if (!sampleLI) {
            sampleLI = _blankli.prev(), sampleLI.detach();
        };
        //
        if (_rst.hasOwnProperty('time_deli')) {
            __$shared._tgGiaoHang = _rst['time_deli'];
        }
        //
        var _NEW = function (monAn) {
            if (monAn) {
                for (var i = 0; i < monAn.length; i++) {
                    var eachFood = function () {
                        _$q.next();
                        var newLi = sampleLI.clone();
                        addOrUpt(this, newLi);
                        newLi.hide().insertBefore(_blankli).fadeIn('slow', function () {
                        });
                    };
                    _$q.add(eachFood.bind(monAn[i]));
                }
            }
        },
        _RST = function (monAn) {
            $el.find('>li:not(.chew-cell--ghost)').filter(function () {
                var _eLI = $(this), _id = _eLI.data('id'), isMatch = -1;
                $.grep(monAn, function (m, i) {
                    if (m.id == _id) {
                        isMatch = m.status;
                        if (m.status == 1) {//modify
                            addOrUpt(m, _eLI);
                            m.itemModify = '1';
                        }
                    }
                });
                if (isMatch != 1) {//delete
                    _$q.add(function () {
                        this.fadeOut('fast', function () {
                            $(this).remove();
                            _$q.next();
                        });
                    }.bind(_eLI));
                }
            });
            return $.grep(monAn, function (m, i) {
                return !m.itemModify;
            });
        },
        _UPT = function (monAn) {
            $el.find('>li:not(.chew-cell--ghost)').filter(function () {
                var _eLI = $(this), _id = _eLI.data('id');
                $.grep(monAn, function (m, i) {
                    if (m.id == _id) {
                        if (m.status == 1) {//modify
                            addOrUpt(m, _eLI);
                        } else {//remove
                            _$q.add(function () {
                                this.fadeOut('fast', function () {
                                    $(this).remove();
                                    _$q.next();
                                });
                            }.bind(_eLI));
                        }
                        m.itemModify = '1';
                    }
                });
            });
            //
            return $.grep(monAn, function (m, i) {
                return m.itemModify == undefined;
            });
        };
        //
        if (_rst.act == 0) {// new blank
            _NEW(_rst.n);
        } else if (_rst.act == 1) { // new reset
            var _rst = _RST(_rst.n);
            _NEW(_rst);
        } else if (_rst.act == 2) { // upt & new page
            var _ins = _UPT(_rst.u);
            if (_rst.n) {
                $.extend(true, _ins, _rst.n);
            }
            _NEW(_ins);
        };
        if (_rst.hasOwnProperty('athis'))   _$q.add(displayBlankMenu.bind(this, $el, _rst.athis[3]));
    }

    function addOrUpt(info, $li) {
        $li.data('id', info['id']); $li.data('info', info);
        $li.find('.cbp-pginfo h3').text(info['ten']);
        var giaban = _Tien(info['giaban'], 0);
        $li.find('.cbp-pginfo .cbp-pgprice').text(giaban);
        //
        var _baseURL = function (_raws) {
            _raws[_raws.length - 1] = ''; return _raws.join('/');
        },  imgs = info.imgs.split(','), img = '', backI = -1;
        for (var z = 0; z < imgs.length; z++) {
            if (! (imgs[z].indexOf("http://") == 0 || imgs[z].indexOf("https://") == 0)) {
                imgs[z] = _baseURL(imgs[z - 1].split('/')) + imgs[z];
            };
            if (z < 2) {
                backI += 1;
                img += '<img draggable="false" src="' + imgs[z] + '"/>';
            }
        };
        $li.find('.cbp-pgrotate').css('display',(imgs.length>1)?'':'none');
        $li.find('.cbp-pgitem-flip').html(img).parent().data('queImg', [imgs, backI]);
        //cart exists
        if (cartData.hasOwnProperty(info['id'])) {
            var hitCart= $li.find('.cbp-pgoptcart');
            hitCart.addClass('oncart'); hitCart.prev().addClass('oncart');
        };
    }

    function listenChannel($el, _rst) {
        apiHistory($attach, { 'his': _rst.athis, 'more': 'u' });
        add2MenuList($el, _rst);
        //
        //if (!act) {

        //} else if (act == 'new') {
        //    add2MenuList($el, _rst); // ly do man hinh con trong
        //    //if (instanceScroll._$element.find(".dx-scrollview-content").height() <= instanceScroll._$element.find(".dx-scrollable-container").height()) {
        //    //    add2MenuList($el, _rst); // ly do man hinh con trong
        //    //} else  {
        //    //    reserveData = _rst;//store de do, chung nao user scroll thi add vao.
        //    //}
        //}
    }

    function triggerScrollReachBottom() {
        setTimeout(function () {
            var viewH = instanceScroll._$element.find(".dx-scrollable-container").height(),
                _$body = instanceScroll._$element.find(".dx-scrollview-content").height();
            if (_$body <= viewH) {
                instanceScroll.release(true);
                apiHistory($attach, { 'more': 'b' });
            } else {
                var _$pocketT = instanceScroll._$bottomPocket.offset().top;
                if (_$pocketT <= viewH) {
                    instanceScroll.scrollTo(_$body - _$pocketT - 20);
                };
                apiHistory($attach, { 'more': 'u' });
            };
        });
    }

    function xulyScrollReachBottom(e) {
        clearTimeout(timerReachBottom);
        timerReachBottom = setTimeout(function () {
            _$hieu.stop_noty_timer();
            apiHistory($attach, { 'more': 'b' });
            instanceScroll.release(true);
            _$hieu.get_noty();
        }, 200);
    }

    function retriveCart(init, suplier) {
        var cartString = localDB.exe('get', 'giohang', null, 0) || '';
        if (cartString.length > 0) {
            var allCart = JSON.parse(atob(cartString).norm_to_unicode());
            if (init) deliveryInfo = allCart['deliInfo'] || {};
            //
            if (!suplier) {
                return allCart;
            } else {
                if (suplier && allCart.hasOwnProperty(suplier)) {
                    return allCart[suplier];
                }
            }
        }
        return {};
    }

    var evtname, $attach = '$attach_634444690322031250072038', shop, instanceScroll = null, sampleLI, _blankli, deliveryInfo = {}, cartData = retriveCart(true,__$ncc), viewloaded = false, timerReachBottom
    , __$shared = {
            showCart: false
            , _cartData: function () {
                return cartData;
            }
            , _deliInfo: function () {
                return deliveryInfo;
            }
            , _tgGiaoHang:null
            , _rmvOutCart: function (id,cb) {
                var isMatch = false,cart = $('#giodunghang');
                $('#dxScrollView_food .oncart').each(function (i, s) {
                    if ($(s).parent().closest('li').data().id == id) {
                        giohangItems(cart, -1, $(s));
                        isMatch = true;
                    }
                });
                if (!isMatch) {
                    giohangItems(cart, -1, null);
                }
                giohang({ id: id });
                if (cb) cb();
            }
            , _cbCart: function (id, data) {
                $.each(data, function (k, v) {
                    var fuckID = id.toString(), fuckKey = k.toString();
                    if (id != 'delivery') {
                        cartData[fuckID][fuckKey] = v;
                    } else {
                        deliveryInfo[fuckKey] = v;
                    }
                });
                adptStorage();
            }
            , cartcolQty: function () {
                var pQTY = $('.giohang .cartx'), colQTY = pQTY.find('.col-qty');
                if (colQTY.length > 0) {
                    colQTY.removeClass('ex2 ex1 ex3');
                    var fDIV = pQTY.find('.scrollbody .col-qty').eq(0).find('div'), f0 = fDIV[0].parentNode.getBoundingClientRect(), f1 = fDIV[0].getBoundingClientRect(), f2 = fDIV[1].getBoundingClientRect(), __offset = parseInt(f2.left - f1.left), pad = parseInt(f1.left - f0.left), cls = '',
                        __w = pQTY.find('.table').width(), __wMin = __w * 12 / 100, __wMax = __w * 17 / 100;
                    if (__offset == 0) {
                        if (f0.width < 78) {//android 85, iphone5 75
                            cls += ' ex1';
                            if (f0.width < 60) cls += ' ex2';
                        }
                    } else if (parseInt(f1.top - f2.top) != 0) {
                        if (f0.width < 125) {
                            cls += ' ex1';
                            if (f0.width < __wMax && f0.width < 95) {
                                cls += ' ex2';
                            };
                        } else {
                            cls += ' ex1';//iphone 6 plus
                        }
                    }
                    if (cls.length > 0) pQTY.find('.col-qty').addClass(cls);
                }
            }
    }
    , fuckGIOHANG = function () {
        if ($.isEmptyObject(cartData)) return;
        scrLocked();
        //
        _$q.clear();
        //
        var that = ComApp.app.maCurrentView, initTMP = function () {
            var dynamicjs = $cartTMP.find('.dynamicjs');
            if (dynamicjs.length > 0) {
                var teps = dynamicjs.attr('teps').split(';');
                dynamicjs.remove();
                for (var i = 0; i < teps.length; i++) {
                    teps[i] = dyncpath + teps[i] + JsCssPrefix;
                }
                new jsLoader().require(teps, function () {// Callback
                    buildPopup();
                });
            } else {
                buildPopup();
            };
        }, buildPopup = function () {
            function waitTimeDeli() {
                var deferred = $.Deferred(), kqOK = function () {
                    if (__$shared._tgGiaoHang && __$shared._tgGiaoHang.length > 0) {
                        deferred.resolve('1', __$shared._tgGiaoHang);
                    } else {
                        deferred.resolve('0', gbM("S0_013"));
                    }
                };
                if (__$shared._tgGiaoHang) {
                    kqOK();
                } else {
                    _$q.add(function () {
                        _$a.api('POST', '634445158944375000020258', { 'act': 'deliverytime' }, function (rst) {
                            _$q.next(false);
                            __$shared._tgGiaoHang = rst.time;
                            kqOK();
                        }, function (err) {
                            _$q.next(false);
                            deferred.resolve('0', gbM("S0_013"));
                        });
                    });
                };
                return deferred.promise();
            }
            that.__$cartPopup(__$shared, $cartTMP.clone(), waitTimeDeli());
        };
        setTimeout(function () {
            if (!$cartTMP) {
                $.get(gitpath + "template/tmpcart.html", function (data) {
                    $cartTMP = $(data); initTMP();
                });
            } else if (!that.__$cartPopup) {
                initTMP();
            } else {
                buildPopup();
            };
        }, 10);
    }
    , viewModel = {
        viewRendered: function (e) {
            evtname = e.viewInfo.viewName;
            var $el = $(e.viewInfo.renderResult.$markup[1]).find('.cbp-pggrid');
            _$hieu.bind([$attach + '_1', evtname], function (_$cb, monAn) {
                listenChannel($el, monAn);
            });
            shop = new MenuList()._init($el.parent());
        }
        , viewShown: function (e) {
            if (!viewloaded) {
                viewloaded = true;
                giohangItems($('#giodunghang'));
                //
                var __cart = {};$.each(cartData, function (k, v) {__cart[k] = v.sl});
                apiHistory($attach, { 'cart': __cart, 'deli': $.extend(true, {}, deliveryInfo) });
            };
        }
        , _orientationChanged: function (ori) {
            setTimeout(function () {
                triggerScrollReachBottom();
                if (__$shared.showCart) __$shared.cartcolQty();
            }, 500);
        }
        , onInitScroll: function (e) {
            instanceScroll = e.component;
        }
        , onReachBottomMenu: function (e) {
            xulyScrollReachBottom(e);
        }
        , testapi: function (e) {
            //debugger;
            var uptLan = gbM("S1_CACHEVER");
            _gbM({ 'vi': { 'S1_CACHEVER': '1' } });
            uptLan = gbM("S1_CACHEVER");
            ;
            _$q.add(function () {
                var args = ['634374721143258750061757'];
                _$a.api('POST', '634444690322031250072038', args, function (result) {

                    _$q.next(false);
                    //
                }, function (err) {
                    DevExpress.ui.notify("Error: '" + err, 'error', 5000);
                    _$q.next(false); scrReleased();
                });
            });
        }
        , and2Cart: function (s, evt) {
            //add2Cart(event.target || event.srcElement);
        }
        , cartHandler: function (e) {
            if (clickPrevent == '1') return;
            clickLocked();
            fuckGIOHANG();
        }
    };

    return viewModel;
};

function _$dondatHang(callBY,cartxx, scrollView, dathangcase, __$shared,$cb) {
    if (!(this instanceof _$dondatHang)) { return new _$dondatHang(callBY, cartxx, scrollView, dathangcase, __$shared, $cb); }
    var scrollDataXXX;

    cartxx.find('.placeorder_button').on('click', function (e) {
        if (clickPrevent == '1') return;
        clickLocked();
        //
        var isValid = true;
        if (this.id == 'fastplaceorder') {
            cartxx.find('#fastcartform input.sodienthoai').each(function (i, el) {
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
        var popup = null, postRst = function (data, args) {
            if (args['act'] == 'showcaptcha') {
                var popupOptions = {
                    width: 300,
                    height: 270,
                    contentTemplate: function () {
                        var tmp = dathangcase[3].clone(), clickDatHang = function () {
                            if (clickPrevent == '1') return;
                            clickLocked();
                            var okcaptchar = true;
                            tmp.find('input').each(function (i, el) {
                                if ($.trim($(el).val()) == '') {
                                    var _$p = $(el).parent(), __$p = _$p.parent();
                                    _$p.addClass('txt-invalid'); __$p.addClass('errdulieu');
                                    _$p.parent().find('.dx-overlay-content').text(gbM('S1_031'));
                                    okcaptchar = false;
                                    $(el).focus();
                                }
                            });
                            if (okcaptchar) {
                                popup._$$$customP = '0';
                                popup.hide();
                                //
                                var hanghoa = {},spCart=__$shared.cartData(), fastcartform = scrollView.find('#fastcartform').serializeArray(),
                                frmP = { 'act': 'dathangnhanh', 'captcha': $(this).data()['captcha'], 'icaptcha': tmp.find('input').val(), 'uid': '-1', 'tien': __$shared.tongcong(), 'notes': callBY };
                                $.extend(frmP, __$shared._deliInfo());
                                $.each(fastcartform, function (i, v) {
                                    frmP[v.name] = v.value;
                                });
                                //
                                $.each(spCart, function (key, $d) {
                                    hanghoa[key] = [$d['sl'], $d['giaban'], $d['v']];
                                });
                                frmP['hh'] = hanghoa;
                                kicksvr(frmP);
                            }
                        }
                        ComApp.app._localizeMarkup(tmp);
                        //
                        tmp.find('.a_demo_one').on('click', clickDatHang).data('captcha', data.captcha.CaptchaText);
                        tmp.find('img').attr('src', 'data:image/png;base64,' + data.captcha.CaptchaImage);

                        var clearValid = function ($input) {
                            var _$p = $input.parent(), __$p = _$p.parent();
                            if (_$p.hasClass('txt-invalid')) {
                                if ($.trim($input.val()) != '') {
                                    _$p.removeClass('txt-invalid'); __$p.removeClass('errdulieu');
                                }
                            }
                        };
                        tmp.find('input').keypress(function (e) {
                            var keycode = e.keyCode || e.which;
                            if (keycode == '13') {
                                tmp.find('.a_demo_one').trigger("click");
                            } else {
                                clearValid($(this));
                            }
                        }).blur(function () {
                            clearValid($(this));
                            $(this).parent().parent().removeClass("dx-state-focused");
                        }).focus(function () {
                            $(this).parent().parent().addClass("dx-state-focused");
                        }).val('');

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
                                    kicksvr({ 'act': 'newcaptcha' });
                                }
                            }
                        }
                    , {
                        location: "center",
                        toolbar: "top",
                        text: gbM('S1_028')
                    }]
                    , onShown: function (e) {
                        popup._$popupContent.find('input').focus();
                    }
                    , onHidden: function (e) {
                        if (!popup._$$$customP || popup._$$$customP == '1') {
                            $popupContainer.remove();
                        }
                    },
                    dragEnabled: false
                };
                var $popupContainer = $("<div class='captcha_popup'/>").appendTo('.dx-viewport');
                popup = $popupContainer.dxPopup(popupOptions).dxPopup("instance");
                popup.show();
            } else if (args['act'] == 'newcaptcha') {
                popup._$popupContent.find('.a_demo_one').data('captcha', data.captcha.CaptchaText);
                popup._$popupContent.find('img').attr('src', 'data:image/png;base64,' + data.captcha.CaptchaImage);
                popup._$popupContent.find('input').focus().val('');
            } else if (args['act'] == 'dathangnhanh') {
                switch (data.kq) {
                    case 'errcaptcha': {
                        popup.show();
                        popup._$popupContent.find('.a_demo_one').data('captcha', data.captcha.CaptchaText);
                        popup._$popupContent.find('img').attr('src', 'data:image/png;base64,' + data.captcha.CaptchaImage);
                        popup._$popupContent.find('input').each(function (i, el) {
                            var _$p = $(el).parent(), __$p = _$p.parent();
                            _$p.addClass('txt-invalid'); __$p.addClass('errdulieu');
                            __$p.parent().find('.dx-overlay-content').text(gbM('S1_032'));
                            $(el).focus().select();
                        });
                        break;
                    }
                    case 'OK': {
                        //break;
                        popup._$$$customP = '1';
                        popup.hide();
                        if ($cb) $cb({ 'act': 'clearAll', 'data': data });
                        break;
                    }
                }
            } else {
                if ($cb) $cb({ 'act': 'hidePU' });
            }
            scrReleased();
        }, kicksvr = function (args) {
            scrLocked();
            _$q.add(function () {
                _$a.api('POST', '634445158944375000020258', args, function (result) {
                    _$q.next(false);
                    postRst(result, args);
                }, function (err) {
                    _$q.next(false);
                    var msg = '<h1 style="color:red;background-color:yellow;display:inline-block;font-weight: 1000;">500</h1>' +
                    '<h2>Oops! ' + err + '</h2>';
                    chochut(-1, function () {
                        kicksvr(args);
                    }, { 'img': 'emoji.png', 'msg': '<div style="text-align:center">' + msg + '</div' });
                });
            });
        };
        kicksvr({ 'act': 'showcaptcha', 'thoigian': __$shared._deliInfo()['time'] });
    });

    if (dathangcase.hasOwnProperty('0')) {//new visistor
        var loginEvts = function () {
            cartxx.find('.resetpass').on('click', function () {
                if (clickPrevent == '1') return;
                clickLocked();
                var datlaipass, chotdonhang = cartxx.find('.login.chotdonhang'), doResetPass = function () {
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
                    datlaipass.find('.captcha_resetpass').html(cartxx.find('.dx-scrollview-scrollbottom-indicator').clone());
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
                        if (clickPrevent == '1') return;
                        clickLocked();
                        var chotdonhang = cartxx.find('.login.chotdonhang');
                        var datlaipass = cartxx.find('.login.datlaipass');
                        datlaipass.fadeOut(500, function () {
                            chotdonhang.fadeIn('slow');
                            datlaipass.find('.captcha_resetpass').empty();
                        });
                    });

                } else {
                    datlaipass = cartxx.find('.login.datlaipass');
                };
                new jsLoader().require([dyncpath + 'dx__Menu1.js'], function () {// Callback
                    doResetPass();
                });
            });
            cartxx.find('#dologin_close').on('click', function () {
                if (clickPrevent == '1') return;
                clickLocked();
                var placeorder = cartxx.find('.screen-placeorder');
                var dangnhap = cartxx.find('.screen-dangnhap');
                dangnhap.fadeOut(500, function () {
                    placeorder.fadeIn('slow');
                    $('.table').css({ 'display': '' });
                    scrollView.data().dxScrollView.scrollTo(scrollDataXXX);//restore scrollPosition
                });
            });
        }
        //
        cartxx.find('#dangnhap_button').on('click', function () {

            if (clickPrevent == '1') return;
            clickLocked();

            scrollDataXXX = scrollView.data().dxScrollView.scrollOffset();//backup scrollPosition
            var placeorder = cartxx.find('.screen-placeorder');
            var dangnhap = cartxx.find('.screen-dangnhap');
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
        cartxx.find('#fastcartform input').keypress(function (e) {
            var keycode = e.keyCode || e.which;
            if (keycode == '13') {
                cartxx.find('.placeorder_button').trigger("click");
            } else {
                if (this.type == 'tel') {
                    if (keycode != 32 && keycode != 8 && keycode != 0 && (keycode < 48 || keycode > 57)) {
                        return false;
                    }
                }
            }
        }).blur(function () {
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
    }
}