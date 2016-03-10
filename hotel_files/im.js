Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(),    //day
        "h+": this.getHours(),   //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
        "S": this.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
        RegExp.$1.length == 1 ? o[k] :
        ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}

var HasNewOrder = false, NewOrderTimer;

var favoriteCookieName = ServerDomain + '_PortalContext_NewFavoriteUnitIdList';
var existingFavoriteCookieName = ServerDomain + '_PortalContext_ExistingFavoriteUnitIdList';
var cookieDomain = ServerDomain == 'localhost' ? "" : ("." + ServerDomain);
//增加一个代表外站地址的全局变量，非主站站点需设置为自己的站点即可，主站不需要设置
//另一种做法
if (typeof favoriteUrl == "undefined") {
    var favoriteUrl = portalUrl;
}
//var favoriteUrl = portalUrl;
if (portalUrl.indexOf('|') > 0) {
    var arr = portalUrl.split('|');
    portalUrl = arr[0];
    favoriteUrl = arr[1];
}


var emptyfavorite = "<div class='no-info'><div class='empty-favorite'><p>快来途家收藏你的第一间房屋<br/>为旅行收藏不一样的住宿体验</p><p><a href='" + portalUrl
    + "/photowall/' class='link-btn'  target='_blank'>这会就去看看途家的特色房屋&gt;&gt;</a></p></div></div>";
var favoritShow = 4;
function loadFavorite() {
    if ($("#favoritePanel").html().length == 0) {
        $("#favoritePanel").html('<div class="no-info">正在加载...</div>');
    }
    $.ajax({
        dataType: "jsonp",
        url: favoriteUrl + "/favorite/Index",
        data: {},
        success: function (res) {
            if (res.length == 0) {
                $("#favoritePanel").html(emptyfavorite);
            } else {
                var h = $("div.m-head h2");
                h.text("我的收藏" + "（" + res.length + "）");
                h.attr("num", res.length);
                $("#favoritePanel").html('<div class="favorite-list"><ul></ul></div>');
                var $ul = $("#favoritePanel").find("ul");

                for (var i = 0; i < res.length; i++) {
                    var uniturl = res[i].UnitDetailUrl;
                    var html = '<li><a href="' + uniturl + '" class="house-pic"  target="_blank" rel="nofollow"><img src="' + res[i].PictureUrl + '" alt="' + res[i].UnitName + '" width="70" height="43" /></a><a href="javascript:;" class="del-btn" unitId="' + res[i].UnitID + '" unitType="' + res[i].EnumFavoriteUnitType + '">删除</a><div class="favorite-house-info"><a href="' + uniturl + '" target="_blank" class="house-name" rel="nofollow" title="' + res[i].UnitName + '">' + (res[i].UnitName.length <= 16 ? res[i].UnitName : res[i].UnitName.substr(0, 16) + '...') + '</a>';
                    if (res[i].IsActive) {
                        if (res[i].IsWorldWide) {
                            if (res[i].WorldWidePrice && res[i].WorldWidePrice != "") {
                                html += '<p><span class="price-cont"> <dfn class="f-vt">¥</dfn><b class="price-value">' + parseInt(res[i].WorldWidePrice) + '</b>起</span>';
                            }
                            else {
                                html += '<p><span class="price-cont"> 暂无价格 </span>'; // bug 26426
                            }
                        }
                        else {
                            if (res[i].Price > 0) {
                                html += '<p><span class="price-cont"> <dfn class="f-vt">¥</dfn><b class="price-value">' + parseInt(res[i].DisplayPrice) + '</b>起</span>';
                            } else {
                                html += '<p><span class="price-cont"> 暂无价格 </span>';
                            }

                        }
                        var sum = false;
                        if (res[i].RoomCountSummary && res[i].RoomCountSummary != "") {
                            html += '<span class="lab-text">' + res[i].RoomCountSummary + '</span>';
                            sum = true;
                        }
                        if (res[i].BedCount > 0) {
                            html += (sum ? "|" : "") + '<span class="lab-text">' + res[i].BedCount + '张床</span>';
                        }
                        html += '</p><p class="house-judgement"><a href="' + uniturl + (res[i].IsWorldWide ? "#comments" : "#tabto=usercomments") + '" rel="nofollow"  target="_blank">';
                        if (res[i].CommentUnitOverallScore > 0)
                            html += '<span class="count-value">' + res[i].CommentUnitOverallScore + '</span>/5分 ';
                        if (res[i].CommentUnitTotalCount > 0)
                            html += '<span class="comments-count">' + res[i].CommentUnitTotalCount + '条点评</span>';
                        html += '</a>' + (res[i].IsCashBack ? '<i class="icon-cashback"></i>' : '') + (res[i].IsReduce ? '<i class="icon-reduce"></i>' : '') + '</p></div></li>';
                    }
                    else {
                        html += '<p><span class="price-cont"> 已下线</p></li>';
                    }

                    $(html).appendTo($ul);
                }

            }

            $(".del-btn").click(function () {
                var $this = $(this);
                $this.parent().remove();
                $(".addFavorite[unitId=" + $this.attr("unitId") + "]").removeClass("active");

                var h = $("div.m-head h2");
                var favoriteNum = parseInt(h.attr("num")) - 1;
                if (favoriteNum == 0) {
                    h.text("我的收藏");
                    $("#favoritePanel").html(emptyfavorite);
                    deleteFavorite($this.attr("unitId"), $this.attr("unitType"));

                }
                else {
                    h.text("我的收藏" + "（" + favoriteNum + "）");
                    h.attr("num", favoriteNum);
                    deleteFavorite($this.attr("unitId"), $this.attr("unitType"));
                }
                // 详情页

                if ($("#favorite").attr("unitid") == $this.attr("unitid")) {
                    $("#favorite").html('<i class="icon-chevron"></i>收藏');
                    $("#favorite").attr("title", "收藏房屋");
                }

            });
        }
    });
}

function openKefu() {
    if (typeof (qimoClientId) != "undefined") {
        qimoChatClick();
    } else {
        window.open('http://content.tujia.com/kefu.htm', '_blank', 'height=473,width=703,fullscreen=3,top=200,left=200,status=no,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no,fullscreen=no');
    }

    return false;
}

function addFavorite(unitId, moveElementId, page) {

    var $addButton = $(".addFavorite[unitId=" + unitId + "]");


    var unitType = window.location.href.toLowerCase().indexOf('experience') == -1 ? 0 : 1;

    if (TujiaIM.isLogin) {
        $.ajax({
            dataType: "jsonp",
            url: favoriteUrl + "/favorite/Add",
            data: { 'unitId': unitId, 'enumFavoriteUnitType': unitType },
            success: function (res) {
                //清空已有收藏Cookie，以便重新加载
                $.cookie(existingFavoriteCookieName, null, { expires: -1, domain: cookieDomain });
                if ($("#favoritePanel").is(":visible")) {
                    loadFavorite();
                }
            }
        });
    } else {
        var existing = $.cookie(favoriteCookieName);
        var favUnits = existing;
        var currentFav = unitId + "|" + unitType;
        if (existing) {
            if (existing.indexOf("|") == -1) {
                favUnits = $.map(existing.split(","), function (item, index) {
                    return item + "|" + "0";
                }).join(",");
            }
            if (favUnits.indexOf(unitId + "|") == 0 || favUnits.indexOf("," + unitId + "|") > 0)
                return false;
            favUnits = favUnits + "," + currentFav;

            $.cookie(favoriteCookieName, favUnits, { expires: 1, domain: cookieDomain });
        } else {
            $.cookie(favoriteCookieName, currentFav, { expires: 1, domain: cookieDomain });
        }
        if ($("#favoritePanel").is(":visible")) {
            loadFavorite();
        }
    }

    var $favoritetab = $("#favoritetab");

    var favoritetabOffset = $favoritetab.offset();

    // 详情页大图改变,斩时去掉动画效果

    if (moveElementId) {
        var $moveElement = $("#" + moveElementId);
        var cloneUnitPicture = $moveElement.clone();
        var pictureOffset = $moveElement.offset();

        cloneUnitPicture.css({ "position": "absolute", "top": pictureOffset.top, "left": pictureOffset.left });
        $("body").append(cloneUnitPicture);
        cloneUnitPicture.animate({
            left: favoritetabOffset.left,
            top: favoritetabOffset.top,
            height: $favoritetab.height(),
            width: $favoritetab.width()
        }, "slow", function () { cloneUnitPicture.remove() });
    }


    $addButton.addClass("active");
}

function deleteFavorite(unitId, unitType, callback) {
    if (TujiaIM.isLogin) {
        $.ajax({
            dataType: "jsonp",
            url: favoriteUrl + "/favorite/Delete",
            data: { 'unitId': unitId, "enumFavoriteUnitType": unitType },
            success: function (res) {
                //清空已有收藏Cookie，以便重新加载
                $.cookie(existingFavoriteCookieName, null, { expires: -1, domain: cookieDomain });
                if (callback) callback();
            }
        });
    } else {
        var favoriteCookieName = ServerDomain + '_PortalContext_NewFavoriteUnitIdList'
        var existing = $.cookie(favoriteCookieName) + ",";
        $.cookie(favoriteCookieName, existing.replace(unitId + "|" + unitType + ",", ""), { expires: 1, domain: cookieDomain });
        if (callback) callback();
    }
}

function markExistingFavorite() {
    var existing = $.cookie(existingFavoriteCookieName) + "," + $.cookie(favoriteCookieName);
    var unitType = window.location.href.toLowerCase().indexOf('experience') == -1 ? 0 : 1;

    $(".addFavorite").each(function () {
        if (existing.indexOf($(this).attr("unitid") + "|" + unitType) > -1) {
            $(this).addClass("active");
            // 详情页
            $("#favorite").html('<i class="icon-chevron"></i>已收藏');
            $("#favorite").attr("title", "取消收藏");
        }
    });
}

$(document).ready(function () {

    $(document).delegate(".addFavorite", "click", function () {
        var self = $(this);
        var page = self.data("page");
        var unitId = self.attr("unitid");

        var unitType = window.location.href.toLowerCase().indexOf('experience') == -1 ? 0 : 1;

        if (page && page == "unitdetail") {

            if (self.is(".active")) {
                var deleted = false;
                $("#favoritePanel a.del-btn").each(function () {
                    var delBtn = $(this);
                    if (delBtn.attr("unitid") == unitId) {
                        delBtn.trigger("click");
                        deleted = true;
                    }
                });
                if (deleted) {
                    $("#favorite").html('<i class="icon-chevron"></i>收藏').removeClass("active");
                    $("#favorite").attr("title", "收藏房屋");
                }
                else {
                    deleteFavorite(unitId, unitType, function () {
                        $("#favorite").html('<i class="icon-chevron"></i>收藏').removeClass("active");
                        $("#favorite").attr("title", "收藏房屋");
                    });
                }



                return false;
            }
            else {
                $("#favorite").html('<i class="icon-chevron"></i>已收藏');
                $("#favorite").attr("title", "取消收藏");
                addFavorite($(this).attr("unitid"), $(this).attr("moveElementId"), $(this).data("page"));
                return false;
            }
        }
        else {
            addFavorite($(this).attr("unitid"), $(this).attr("moveElementId"), $(this).data("page"));
            return false;
        }
    });

    //$(".addFavorite").each(function () {
    //    $(this).click(function () {
    //        addFavorite($(this).attr("unitid"), $(this).attr("moveElementId"));
    //        return false;
    //    });
    //});

    var existing = $.cookie(existingFavoriteCookieName);
    if (!TujiaIM.isLogin) {
        $.cookie(existingFavoriteCookieName, null, { expires: -1, domain: cookieDomain });
        markExistingFavorite();
    }
    else if (!existing && TujiaIM.isLogin) { //登陆了，但是还没有收藏房屋的Cookie，则进行一次查询
        $.ajax({
            dataType: "jsonp",
            url: favoriteUrl + "/favorite/Index",
            data: {},
            success: function (res) {
                var unitIdList = "";
                for (var i = 0; i < res.length; i++) {
                    unitIdList += res[i].UnitID + "|" + res[i].EnumFavoriteUnitType + ",";
                }
                $.cookie(existingFavoriteCookieName, unitIdList, { expires: 1, domain: cookieDomain });
                markExistingFavorite();
            }
        });
    } else {
        markExistingFavorite();
    }
});

function alert4newMessage() {

    if ($.browser.msie) {
        $("body").append('<embed height="100" width="100" name="message_new_player" id="message_new_player" autostart="true" hidden="true" src="' + MESSAGE_RADIO + '" type="application/x-shockwave-flash"/>');

        setTimeout(function () { $("#message_new_player").remove() }, 2000);
    } else {
        if ($('#message_new_player').length == 0) {
            $('body').append('<audio id="message_new_player" style="display:none" autoplay><source src="' + MESSAGE_RADIO + '" type="audio/wav"></audio>');
        } else {
            document.getElementById('message_new_player').play();
        }
    }

}

function alert4newOrder() {
    if (TujiaIM.StorageManager.hasUnReadNewOrderNotice()) {
        if ($.browser.msie) {
            $("#order_new_player").remove();
            $("body").append('<embed height="0" width="0" name="order_new_player" id="order_new_player" autostart="true" hidden="true" src="' + ORDERNOTICE_RADIO + '" type="application/x-shockwave-flash"/>');
        } else {
            if ($('#order_new_player').length == 0) {
                $('body').append('<audio id="order_new_player" style="display:none" autoplay><source src="' + ORDERNOTICE_RADIO + '" type="audio/wav"></audio>');
            } else {
                document.getElementById('order_new_player').play();
            }
        }
        // setTimeout(alert4newOrder, 5000);
    }
}


if (!window.TujiaIM) {
    var currentUserid = $.cookie(ServerDomain + "_PortalContext_UserId");
    var ckonline = currentUserid != "" && currentUserid > 0,
    //var ckonline = (typeof current_userid != 'undefined'),
    uid = ckonline ? currentUserid : ($.cookie(ServerDomain + '_PortalContext_GuestId') - 0);
    //document.domain = ServerDomain;
    window.TujiaIM = {
        userId: uid,
        isLogin: ckonline ? true : false,
        userName: ckonline ? "" : ("游客" + uid),
        clientId: TUJIA_CLIENTID,
        REFRESH_STATUS_TIME_INTERVAL: 300000,
        REFRESH_NEW_MESSAGE_TIME_INTERVAL: 100,
        latestMessageId: 0
    };
}
if (!window.TujiaIM.UI) {
    window.TujiaIM.UI = {
        /**
        * 界面配置
        */
        conf: {
            className: "m-im-wrap"
        },

        _MainTabPanel: null,

        _MessageTabpanel: null,

        _NoticeTabpanel: null,

        UpdateListenerIsRunning: false,

        UpdateMessageTimer: null,

        /**
        * 初始化
        */
        init: function (conf) {

            var storage = TujiaIM.StorageManager, ui = this, fetcher = TujiaIM.MessageFetcher;

            if (conf) {
                this.conf = conf;
            }

            this._paint();
            this._bindEvent();

            if (!TujiaIM.isLogin) {
                return;
            }

            //this.addContactors([{ userId: 123, name: '赶海的螃蟹' }, { userId: 124, name: '赶海的王八' }, { userId: 125, name: '赶海的乌龟' }, ]);
            // 添加联系人事件
            storage.subscribe('ADD_CONTACTOR_EVENT', function (objEvent) {
                ui.addContactors(objEvent);
            });

            storage.subscribe('UPDATE_STATUS_EVENT', function (objEvent) {
                ui.updateUserOnlineStatus(objEvent);
            });

            storage.subscribe('MARK_MESSAGE_ASREAD_EVENT', function (objEvent) {
                ui.refreshMessageCount(objEvent.unReadMessageCount, objEvent.contactor);
            });

            storage.subscribe('UNITID_CHANGE_EVENT', function (objEvent) {
                var c = objEvent.contact;
                ui.refreshUnitInfo(c);
            });

            // 获取消息详情事件
            //if(TujiaIM.isLogin) {
            fetcher.getContactors(TujiaIM.userId, 1);
            //}

            storage.refreshStatus();
            window.setInterval(function () {
                storage.refreshStatus();
            }, TujiaIM.REFRESH_STATUS_TIME_INTERVAL);

            /*
            window.setInterval(function () {
            var tab = $('#messagetab'), opacity = tab.css('opacity') - 0;
            if (storage.hasNewMessage()) {
            //opacity > 0.7 ? tab.css('opacity', 0.7) : tab.css('opacity', 1.0)
            $('span',tab).addClass("infoIcon");
            } else {
            $('span', tab).removeClass("infoIcon");
            }

            }, TujiaIM.REFRESH_NEW_MESSAGE_TIME_INTERVAL);
            */

        },

        _paint: function () {
            var c = $('<div class="m-im-wrap"/>');
            // 添加title
            //  $('<div class="' + this.conf.className + '_header"><h5>站内消息</h5><a href="javascript:;" class="minBtn" title="最小化"><span class="dn">最小化</span></a></div>').appendTo(c);
            // 添加body
            $('<div class="im-body" style="display:none;"><div class="m-head"><h2>我的收藏</h2><i class="btn min-btn" title="最小化"></i></div><div class="im-group"><div class="content-group" id="favoritePanel"></div><div class="content-group" id="messagePanel"></div><div class="content-group" id="noticePanel"></div></div>').appendTo(c);

            // 添加footer
            $('<div class="im-sidebar"/>').html('<ul id="mainpanel"><li><a id="favoritetab" containerId="#favoritePanel" href="javascript:;" onclick="' + "_gaq.push(['_trackEvent', 'pcList', '快捷按钮组合','收藏']);" + '"><i class="i-collection"></i>收藏</a></li><li><a id="messagetab" containerId="#messagePanel" href="javascript:;" onclick="' + "_gaq.push(['_trackEvent', 'pcList', '快捷按钮组合','消息']);" + '"><i class="i-news"></i>消息</a></li><li><a id="noticetab" containerId="#noticePanel" href="javascript:;" onclick="' + "_gaq.push(['_trackEvent', 'pcList', '快捷按钮组合','通知']);" + '"><i class="i-notice"></i>通知</a></li></ul><div class="go-top"><a href="javascript:void(0)" onclick="' + "_gaq.push(['_trackEvent', 'pcList', '快捷按钮组合','顶部']);" + '"><i class="i-top"></i>顶部</a></div>').appendTo(c);
            c.appendTo($("body"));

            if ($("#J-service-btn").length == 0) {
                var serviceTemplate = '<li class="J-service-btn" id="J-service-btn"><a href="javascript:;"' + 'onclick="' + "openKefu();_gaq.push(['_trackEvent', 'pcList', '快捷按钮组合','客服']);" + '" rel="nofollow"class="service-chat-btn"><i class="i-service"></i>客服</a></li>';
                $(serviceTemplate).insertBefore(($("#mainpanel").children(":nth-child(1)")));
            }
        },

        _rePosition: function () {
            var wnd = $(window),
            doc = $(document),
            pTop = doc.scrollTop(),
            pLeft = doc.scrollLeft(),
            el = $('.' + this.conf.className);
            pTop += (wnd.height() - el.height() - 10);
            pLeft += (wnd.width() - el.width() - 10);
            el.css({ top: pTop, left: pLeft });
        },
        /**
        * 绑定事件
        */
        _bindEvent: function () {
            var el = $(".m-im-wrap"), resizefunc;

            if ($.browser.msie && $.browser.version < 7) {
                resizefunc = function () {
                    TujiaIM.UI._rePosition();
                };
                $(window).resize(resizefunc);
                $(window).scroll(resizefunc);
            }


            $("#mainpanel a").bind('click', function () {
                var p = $('#mainpanel'), e = $(this), cid = e.attr('containerId'), c;

                if (!cid) {
                    return false;
                }
                if (!$(this).hasClass('current')) {
                    if ($(this).attr('id') == 'messagetab') {
                        $('.m-head h2').html('站内消息');
                    }
                    else if ($(this).attr('id') == 'favoritetab') {
                        $('.m-head h2').html('我的收藏');
                    }
                    else {
                        $('.m-head h2').html('通知');
                    }
                }


                if (!$(this).hasClass('current')) {
                    c = $('a.current', p).removeClass('current');
                    if (c.length > 0) {
                        $(c.attr('containerId')).hide();
                    }
                    e.addClass('current');
                    $("div.im-body").show();
                    $(e.attr('containerId')).show();

                    if (cid == '#messagePanel') {
                        // 如果没有联系人    
                        if (TujiaIM.StorageManager.contactors.length == 0) {
                            if (TujiaIM.isLogin) {
                                $(cid).html('<div class="chat-content-head"><a href="' + portalUrl + '/UserInfo/Messages">全部站内消息</a></div><div class="no-info">没有消息，<br/>查看历史聊天记录，请<a target="_blank" href="' + portalUrl + '/UserInfo/Messages">点击这里</a></div>');
                            } else {
                                $(cid).html('<div class="chat-content-head"><a href="' + portalUrl + '/UserInfo/Messages">全部站内消息</a></div><div class="no-info">没有消息，<br/><a href="' + portalUrl + '/Account/Login/" target="_blank" >登录</a>可以保存历史聊天记录</div>');
                            }
                        }
                    }
                    else if (cid == '#favoritePanel') {
                        loadFavorite();
                    }
                        // 如果没有通知 
                    else if (TujiaIM.StorageManager.notices.length == 0 && cid == "#noticePanel") {
                        if (TujiaIM.isLogin) {
                            $(cid).html('<div class="chat-content-head"><a href="' + portalUrl + '/UserInfo/Notices">全部通知</a></div><div class="no-info">没有通知</div>');
                        } else {
                            $(cid).html('<div class="chat-login"><dl><dt>您尚未登录或没有消息/通知</dt><dd><a class="login-btn" href="' + portalUrl + '/Account/Login" target="_blank">登录</a></dd><dd><a class="register-btn" href="' + portalUrl + '/Account/Register" target="_blank">注册</a></dd></dl></div>');
                        }
                    }
                    //  $('.' + className).removeClass().addClass(className);
                }
                if ($.browser.msie && $.browser.version < 7) {
                    TujiaIM.UI._rePosition();
                }
            });

            $(".go-top").click(function () {
                $("html,body").animate({ scrollTop: 0 }, "fast");
            });

            $('.min-btn').bind('click', function () {
                var $curTab = $("#mainpanel").find("a.current");
                $curTab.remove('current');
                $($curTab.attr("containerid")).hide();
                // $('.' + className).removeClass().addClass(className + ' ' + className + '_mini');
                $("#mainpanel").find("a.current").removeClass();

                //$(".im-group>div").hide();
                $(this).closest(".im-body").hide();
                if ($.browser.msie && $.browser.version < 7) {
                    TujiaIM.UI._rePosition();
                }
            });

            el.delegate('#messagePanel li a', 'click', function (event) {
                var uid = $(this).attr('talkuserid') - 0;
                TujiaIM.UI.showTalkDialog(uid);
                $(this).addClass('readed');
                if (TujiaIM.StorageManager.getContactor(uid).unReadCount > 0) {
                    // 直接标记客户端为已读
                    TujiaIM.StorageManager.markAsReaded(uid);
                    // 发送标记为已读请求
                    TujiaIM.MessageFetcher.markMessageAsRead(uid);
                }
            });

            el.delegate('#noticePanel li a', 'click', function (event) {
                var notice = $(this), noticeId = notice.attr('noticeId') - 0;
                TujiaIM.UI.showNoticeDialog(noticeId);
                if (!notice.hasClass("readPage")) {
                    TujiaIM.MessageFetcher.markNoticeAsRead(TujiaIM.userId, noticeId);
                }
            });

            $('body').delegate('.dialog-wrap input[type=submit]', 'click', function (event) {
                var textarea = $(this).parent().prev().children('textarea'), msg = textarea.val(), hasMsg = msg.match(/\S+/),
                to = $(event.target).parents('div[id^="dialog_message_"]'),
                toId = to.attr('id').replace('dialog_message_', ''),
                c = TujiaIM.StorageManager.getContactor(toId - 0);
                //toName = c.userName;
                textarea.val('');

                $('.dialog-wrap input[type=submit]').addClass('btn-dis').attr('disabled', true);
                // 发送消息
                if (hasMsg) {
                    TujiaIM.MessageFetcher.writeMessage(TujiaIM.userId, TujiaIM.userName, c, msg);
                }
            });

            $('body').delegate('.dialog-wrap textarea', 'keydown', function (event) {

                event.stopPropagation();

                var textarea = $(this), msg = textarea.val(), hasMsg = msg.match(/\S+/),
                to = textarea.parents('div[id^="dialog_message_"]'),
                toId = to.attr('id').replace('dialog_message_', ''),
                c = TujiaIM.StorageManager.getContactor(toId - 0);

                if (!event.shiftKey && event.which == 13 && hasMsg) {
                    event.preventDefault()
                    textarea.val('');
                    // 发送消息
                    $('.dialog-wrap input[type=submit]').addClass('btn-dis').attr('disabled', true);
                    //TujiaIM.MessageFetcher.writeMessage(TujiaIM.userId, TujiaIM.userName, toId, c.userName, c.unitId, msg);
                    TujiaIM.MessageFetcher.writeMessage(TujiaIM.userId, TujiaIM.userName, c, msg);
                } else {
                    $('.dialog-wrap input[type=submit]').removeClass('btn-dis').attr('disabled', false);
                }
            });

            $('body').delegate('.dialog-wrap textarea', 'focus', function (event) {
                var textarea = $(event.target);
                if (textarea.val() == "请输入聊天内容...") {
                    textarea.val('');
                }
            });

            $('body').delegate('.dialog-wrap textarea', 'blur', function (event) {
                var textarea = $(event.target);
                if (!textarea.val()) {
                    $('.messagedialog input[type=submit]').addClass('btn-dis').attr('disabled', true);
                    textarea.val('请输入聊天内容...');
                }
            });

            $('body').delegate('.dialog-close-btn', 'click', function () {
                var p = $(this).parents('.dialog-wrap');
                if (p.hasClass('noticedialog ')) {
                    p.remove();
                } else {
                    p.hide();
                }
            });

            $('body').delegate('.dialog-wrap', 'mousedown', function (event) {
                var el = $(this);
                //el = el.hasClass('messagedialog') ? el : el.parents('.messagedialog');

                if ($('.messagedialog_current').length > 0) {
                    $('.messagedialog_current').removeClass('messagedialog_current');
                }

                el.addClass('messagedialog_current');

            });

            $('body').delegate('.CloseOnline', 'click', function () {
                $(".Online").hide();
            });
        },

        _paintMessagePanel: function () {
            var msgpanel = $('#messagePanel'), el;
            msgpanel.html('<div class="chat-content-head"><a href="' + portalUrl + '/UserInfo/Messages" class="clear-btn" target="_blank">全部站内消息</a></div>');
            el = $('<div id="messageTabpanel" class="m-list news-list"><ul></ul></div>')
            el.appendTo(msgpanel);
        },

        _paintNoticePanel: function () {
            var noticepanel = $('#noticePanel'), el;
            noticepanel.html('<div class="chat-content-head"><a href="' + portalUrl + '/UserInfo/Notices" target="_blank">全部站内通知</a></div>');
            el = $('<div id="noticeTabpanel" class="m-list notice-list"><ul></ul></div>')
            el.appendTo(noticepanel);
        },

        refreshMessageCount: function (count, c) {
            $('#messagetab').html(count > 0 ? '<i class="i-msg-new"></i>消息(<strong>' + count + '</strong>)' : '<i class="i-news"></i>消息');
            // 刷新某个用户的未读信息
            if (c) {
                var a = $('a[talkuserid=' + c.userId + ']');
                a.html(c.userName + (c.unReadCount > 0 ? '<strong>(' + c.unReadCount + ')</strong>' : ''));

                if (c.unReadCount > 0) {
                    a.removeClass('readed');
                } else {
                    a.addClass('readed');
                }
            }
        },

        refreshNoticeCount: function (count, noticeId, flag) {
            if (flag) {
                var a = $('a[noticeId=' + noticeId + ']');
                a.addClass('readPage');
            }
            $('#noticetab').html(count > 0 ? '<i class="i-notice-new"></i>通知(<strong>' + count + '</strong>)' : '<i class="i-notice"></i>通知');
        },

        /**
        * 显示登录界面
        */
        /*
        _showLogin: function () {
            var el = $('<div class="chat_login"><p>您尚未登录或没有消息/通知</p><a class="alinkBtn" href="">登录</a><a class="alinkBtn" href="">注册</a></div>'), body = $('.' + this.conf.className + '_body');
            body.html('');
            el.appendTo(body);
        },
        */

        /**
        * 装载Notice
        */
        appendNotices: function (notices) {
            var i = 0, arr = [], notice;
            notices.reverse();
            for (; i < notices.length; i++) {
                notice = notices[i];
                this.addNotice(notice);
            }
        },

        addNotice: function (notice) {
            //this._NoticeTabpanel.addTab(notice.message, notice.title, 0, this._makeNoticePanel(notice));
            var msgpanel = $('#noticePanel'), mp = $('#noticeTabpanel');
            $('.no-info', msgpanel).remove();

            if (mp.length == 0) {
                this._paintNoticePanel();
            }
            var noticeTitle = notice.title.length <= 18 ? notice.title : notice.title.substr(0, 18) + "...";

            $('<li><a href="javascript:;" noticeId="' + notice.messageId + '" title="' + notice.title + '">' + noticeTitle + '</a></li>').prependTo($('#noticeTabpanel ul'));
        },

        addContactors: function (contactors) {
            var i = contactors.length - 1, c;
            for (; i >= 0; i--) {
                c = contactors[i];
                this.addContactor(c);
            }

            if (!this.UpdateListenerIsRunning && contactors.length > 0) {
                this.UpdateListenerIsRunning = true;
                //TujiaIM.MessageFetcher.updateMessage();
                setTimeout(function () { TujiaIM.MessageFetcher.updateMessage(); }, 30);
                // 写cookie
                $.cookie('TujiaIM_MessageUpdate', 1);
            } else if (!this.UpdateListenerIsRunning && !TujiaIM.UpdateMessageTimer) {
                // 启动定时器
                TujiaIM.UpdateMessageTimer = window.setInterval(function () {
                    if ($.cookie('TujiaIM_MessageUpdate') - 0 == 1) {
                        if (!TujiaIM.UI.UpdateListenerIsRunning) {
                            TujiaIM.UI.UpdateListenerIsRunning = true;
                            TujiaIM.MessageFetcher.updateMessage();
                        }
                        // 清除定时器
                        window.clearInterval(TujiaIM.UpdateMessageTimer)
                        TujiaIM.UpdateMessageTimer = null;
                    }
                }, 30);
            }
        },

        addContactor: function (c) {
            var msgpanel = $('#messagePanel'), mp = $('#messageTabpanel');
            $('.no-info', msgpanel).remove();

            if (mp.length == 0) {
                this._paintMessagePanel();
            }

            var $contractList = $('#messageTabpanel ul');
            var firstChild = $contractList.children().first();
            var $contract = $('a[talkuserid=' + c.userId + ']');

            if ($contract.length == 0) {

                var contractTemplate = $('<li><a href="javascript:;" title="离线" talkuserId="' + c.userId + '" class="' + (c.unReadCount <= 0 ? 'readed ' : '') + 'leave">' + c.userName + (c.unReadCount > 0 ? '<strong>(' + c.unReadCount + ')</strong>' : '') + '</a></li>');

                if (firstChild.length == 0) {
                    contractTemplate.appendTo($contractList);
                }
                else {
                    contractTemplate.insertBefore(firstChild);
                }

            }
        },

        topContract: function (c) {
            var $contractList = $('#messageTabpanel ul');
            if ($contractList.length == 0) {
                return;
            }

            var $contractChildren = $contractList.children();

            if ($contractChildren.length == 1) {
                return;
            }

            var $contract = $('a[talkuserid=' + c.userId + ']');

            if ($contract.length == 0) {
                return;
            }

            var firstChild = $contractChildren.first();

            if (firstChild.children("a").attr("talkuserid") == c.userId.toString()) {
                return;
            }

            $contract.parent().insertBefore(firstChild);
        },

        updateUserOnlineStatus: function (objEvent) {
            $('#messageTabpanel ul li a').each(function () {
                var a = $(this), id = a.attr('talkuserid') - 0,
                user = TujiaIM.StorageManager.getContactor(id), d = $('#dialog_message_' + id);
                if (user) {
                    if (user.isOnline) {
                        a.removeClass('leave').addClass('Online').attr('title', '在线');
                    } else {
                        a.removeClass('Online').addClass('leave').attr('title', '离线');
                    }
                }
            })

        },

        /**
        * 显示通知窗口
        */

        showNoticeDialog: function (noticeId) {
            var notice = TujiaIM.StorageManager.getNotice(noticeId), dlg = $('#dialog_notice_' + notice.messageId), w = $(window), d = $('body');
            if ($('.messagedialog_current').length > 0) {
                $('.messagedialog_current').removeClass('messagedialog_current');
            }
            if (dlg.length == 0) {
                var html = '<div id="dialog_notice_' + notice.messageId + '" class="dialog-wrap messagedialog_current">'
                    + '<div class="m-head"><h2>' + notice.title + '</h2><a href="javascript:void(0)" class="btn dialog-close-btn">&nbsp;</a></div>'
                    + '<div class="notice-box"><h2>' + notice.title + '<span>' + notice.createTime + '</span></h2>'
                    + '<div class="notice-info">' + notice.message + '</div></div>'
                    + '</div>';

                dlg = $(html);
                dlg.appendTo($('body'));
                dlg.css({ "position": "absolute", 'top': (w.height() - dlg.height()) / 2 + d.scrollTop(), left: (w.width() - dlg.width()) / 2 }).show();
                dlg.draggable({
                    cursor: "move",
                    cancel: '.dialog-close-btn',
                    handle: '.m-head',
                    containment: 'document'
                });

            } else {
                dlg.show().css({ 'top': (w.height() - dlg.height()) / 2 + d.scrollTop(), left: (w.width() - dlg.width()) / 2 }).addClass('messagedialog_current');
            }

            if (noticeId == 0) {
                $.cookie("supresssysnotice", "1", { expires: new Date(2014, 7, 1) });
            }
        },

        /**
        * 显示聊天窗口
        *
        */

        showTalkDialog: function (userId) {

            var c = TujiaIM.StorageManager.getContactor(userId), dlg = $('#dialog_message_' + userId), w = $(window), d = $(document);

            if (c) {
                if ($('.messagedialog_current').length > 0) {
                    $('.messagedialog_current').removeClass('messagedialog_current');
                }
                if (dlg.length > 0) {
                    dlg.show().addClass('messagedialog_current').css({ 'top': (w.height() - dlg.height()) / 2 + d.scrollTop(), left: (w.width() - dlg.width()) / 2 });
                } else {
                    this._createMessageDialog(c);
                }

                if (!c.isOnline) {
                    //$(".Online").show();
                }
            }
        },

        _createMessageDialog: function (contactor) {
            var title = (contactor.isOnline ? '与' : '给') + contactor.userName + (contactor.isOnline ? '的聊天' : '留言，我们将短信提示对方尽快回复');

            var html = '<div id="dialog_message_' + contactor.userId + '" class="dialog-wrap messagedialog_current">'
                + '<div class="m-head"><h2 title="' + title + '">' + title + '</h2><span class="btn dialog-close-btn">&nbsp;</span></div>'
                + '<div class="unit-order-info" ' + (contactor.unitId == 0 ? 'style="display:none;"' : '') + '></div><div class="im-chat-logs' + (contactor.unitId == 0 ? ' chatLogsLong' : '') + '"><div class="im-notice" style="display:none"><i class="icon-box"></i><a href="javascript:void(0)" title="关闭" class="CloseOnline close-btn"></a><p>商户现在不在线，可能无法立即回复。您还可以拨打商户客服热线进行沟通。<br/>感谢您的持续关注！</p></div></div><div class="im-send-msg"><div class="textarea-wrap"><textarea name="" id="" maxlength="200">请输入聊天内容...</textarea></div><div class="submit-wrap"><input value="发送" class="im-sendmsg-btn btn-dis" type="submit"disabled disabled="disabled"></div></div>'
                + '</div>', w = $(window), d = $(document);

            var dlg = $(html);
            dlg.appendTo($('body'));
            this.appendMessagesToDialog(contactor, contactor.messages);
            TujiaIM.MessageFetcher.getUnitInfo(contactor.unitId, function (res) {
                $('.unit-order-info', dlg).html(res);
            });

            dlg.draggable({
                cursor: "move",
                cancel: '.dialog-close-btn',
                handle: '.m-head',
                containment: 'document'
            });
            dlg.css({ 'top': (w.height() - dlg.height()) / 2 + d.scrollTop(), left: (w.width() - dlg.width()) / 2, "position": "absolute" });

        },

        appendMessagesToDialog: function (contact, messages) {

            var c = $('#dialog_message_' + contact.userId), l = $('.im-chat-logs', c), i = 0, msg; //, fname, tname;
            // 刷新消息总数
            if (contact && c.length > 0 && c.css('display') != 'none') {
                $('a[href=#tabcontainer_' + contact.userId + ']').html(contact.userName + (contact.unReadCount > 0 ? '<strong>(' + contact.unReadCount + ')</strong>' : ''))
            }
            if (c.length > 0) {
                for (; i < messages.length; i++) {
                    msg = messages[i];
                    if (!msg.type) {
                        if (msg.fromId == contact.userId) {
                            var $content = $('<div class="im-chat-content"><div class="im-chat-hd"><span class="hotel-name">' + msg.fromName + '</span><span class="im-chat-time">' + msg.createTime + '</span></div><div class="im-chat-txt">' + '</div></div>');
                            var $contentDiv = $content.find("div.im-chat-txt");
                            if (msg.messageType == 0) {
                                $contentDiv.text(msg.message.replace(/\r\n|\r|\n/g, '<br/>'));
                            } else {
                                $contentDiv.html($(msg.message));
                            }
                            $content.appendTo(l);
                        } else {
                            var $content = $('<div class="im-chat-content myself"><div class="im-chat-hd"><span class="hotel-name">我</span><span class="im-chat-time">' + msg.createTime + '</span></div><div class="im-chat-txt">' + '</div></div>')
                            var $contentDiv = $content.find("div.im-chat-txt")
                            if (!msg.messageType || msg.messageType == 0) {
                                $contentDiv.text(msg.message.replace(/\r\n|\r|\n/g, '<br/>'));
                            } else {
                                $contentDiv.html($(msg.message));
                            }
                            $content.appendTo(l);
                        }
                    } else {
                        $('<div class="im-chat-content myself"><div class="im-chat-hd"><span class="hotel-name">途家小二</span><span class="im-chat-time">' + msg.createTime + '</span></div><div class="im-chat-txt im-chat-txt-error">' + msg.message.replace(/\r\n|\r|\n/g, '<br/>') + '</div></div>').appendTo(l);
                    }
                }

                l.scrollTop(l[0].scrollHeight);
            }
        },

        refreshUnitInfo: function (c) {
            var dlg = $('#dialog_message_' + c.userId);
            if (dlg.length > 0) {
                TujiaIM.MessageFetcher.getUnitInfo(c.unitId, function (res) {
                    if (res) {
                        $('.chatLogs', dlg).removeClass('chatLogsLong');
                        $('.unitorderInfo', dlg).html(res);
                    }
                });
            }
        }
    };
}

/**
 *
 *  联系人数据结构
 *  {
        userId: 111,
        userName: 'abc;,
        isOnline : true,
        Messages: [],
        unReadCount: 12,
        unitId : 123
 *  }
 *
 *  消息
    {
        fromId: 111,
        fromName: '王二小',
        toId: 112,
        channelId: 1,
        message: 'hello',
        createTime: '12:22:30 2013-01-23',
    }
 *
 *
    状态
    {
        userId : 123,
        isOnline: true
    }
 *
 */

(function () {
    if (!window.TujiaIM.StorageManager) {

        window.TujiaIM.StorageManager = {

            //userId: 123,
            totalUnreadMessageCount: 0,
            totalUnreadNoticeCount: 0,
            notices: [],
            contactors: [],
            //talkingusers: [],

            init: function () {
                mixPubSub(this);
            },

            hasNewMessage: function () {
                return this.totalUnreadMessageCount > 0 ? true : false;
            },

            /**
            * 添加通知
            */
            addNotices: function (notices) {
                this.notices = notices;
                TujiaIM.UI.appendNotices(notices);
            },

            /**
            * 添加联系人
            */
            addContactor: function (contactor) {
                var c = this.getContactor(contactor.userId);
                if (!c) {
                    this.contactors.push(contactor);
                    // 发布联系人获取成功
                    //this.publish('ADD_CONTACTOR_EVENT', [contactor]);
                    TujiaIM.UI.addContactors([contactor]);
                }
                else {
                    //c.unReadCount += contactor.unReadCount;
                    if (contactor.unitId) {
                        c.unitId = contactor.unitId;
                    }
                    c.hotelId = contactor.hotelId;
                }
            },

            addContactors: function (contactors) {
                var c, i, r;
                for (i = 0; i < contactors.length; i++) {
                    r = contactors[i];
                    c = this.getContactor(r.userId);
                    if (!c) {
                        this.contactors.push(r);
                    } else {
                        c.unReadCount += r.unReadCount;
                    }
                }
                // 发布联系人获取成功
                this.publish('ADD_CONTACTOR_EVENT', contactors);
            },

            getContactor: function (id) {
                var i = 0, c = null;
                for (; i < this.contactors.length; i++) {
                    c = this.contactors[i];
                    if (id == c.userId) {
                        return c;
                    }
                }
                return null;
            },

            getNotice: function (id) {
                var i = 0, c = null;
                for (; i < this.notices.length; i++) {
                    c = this.notices[i];
                    if (id == c.messageId) {
                        return c;
                    }
                }
                return null;
            },


            // 添加消息详情
            addMessageDetail: function (messages) {

                var id = 0;
                // 如果是其他人发来的消息
                if (message.fromId != userId) {
                    id = fromId;
                    this.getContactor(message.fromId - 0).unReadCount += 1;
                } else {
                    id = toId;
                }
                this.getContactor(id).Messages.push(message);

                // 发布获得新消息事件
                this.publish('FETCH_MESSAGE_SUCCESS_EVENT', status);
            },

            markAsReaded: function (userId) {
                var c = this.getContactor(userId - 0);
                TujiaIM.StorageManager.totalUnreadMessageCount -= c.unReadCount;
                c.unReadCount = 0;
                TujiaIM.UI.refreshMessageCount(TujiaIM.StorageManager.totalUnreadMessageCount, c);
                //this.contactors[userId].unReadCount = 0;
                // 发布消息userId的所有消息为已读
                this.publish('MARK_MESSAGE_ASREAD_EVENT', { 'totalUnreadMessageCount': TujiaIM.StorageManager.totalUnreadMessageCount, 'contactor': c });
            },

            hasUnReadNewOrderNotice: function () {

                var i = 0, c = null;
                for (; i < this.notices.length; i++) {
                    c = this.notices[i];
                    if (!c.readed && c.NoticeType == 1) {
                        return true;
                    }
                }
                return false;
            },

            markNoticeAsRead: function (noticeId) {
                this.totalUnreadNoticeCount -= 1;
                this.getNotice(noticeId).readed = true;
                TujiaIM.UI.refreshNoticeCount(TujiaIM.StorageManager.totalUnreadNoticeCount, noticeId, true);
            },

            // 刷新在线状态
            updateStatus: function (statuses) {
                var c, s, d;
                for (var i = 0; i < statuses.length; i++) {
                    s = statuses[i];
                    c = this.getContactor(s.userId)
                    if (c) {
                        c.isOnline = s.isOnline;

                        d = $('#dialog_message_' + c.userId);
                        if (d.length > 0) {
                            var ht = $('.dialogTitle h5', d);
                            ht.html((c.isOnline ? '与' : '给') + c.userName + (c.isOnline ? '的聊天' : '留言'));
                            //if (!c.isOnline) {
                            //    ht.css('color', 'gray');
                            //} else {
                            //    ht.css('color', '');
                            //}
                        }
                    }


                    // 刷新页面上交谈按钮的状态
                    if ($('a[ownerId=' + s.userId + ']').length > 0) {
                        var _this = $('a[ownerId=' + s.userId + ']');
                        if (s.isOnline) {
                            _this.removeClass('leave-msg-btn').addClass('online-chat-btn').attr('title', '在线').text("在线聊天");
                            _this.filter("[data=0]").text("在线聊天");
                            _this.filter("[data=1]").html('<i class="i-service"/>聊天');
                            _this.filter("[data=2]").html('与房东在线聊天');
                            _this.filter("[data=3]").html('联系客人');
                        } else {
                            _this.removeClass('online-chat-btn').addClass('leave-msg-btn').attr('title', '离线');
                            _this.filter("[data=0]").text("短信留言");
                            _this.filter("[data=1]").html('<i class="i-service"/>留言');
                            _this.filter("[data=2]").html('给房东留言');
                            _this.filter("[data=3]").html('联系客人');
                        }
                    }
                }
                // 发布状态更新
                this.publish('UPDATE_STATUS_EVENT', { 'status': status });
            },

            refreshStatus: function () {
                var cs = this.contactors, i = 0, arr = [], c, oid;
                for (; i < cs.length; i++) {
                    arr.push(cs[i].userId);
                }

                $('a[ownerId]').each(function () {
                    oid = $(this).attr('ownerId');
                    if (!TujiaIM.StorageManager.getContactor(oid)) {
                        arr.push(oid);
                    }
                });

                TujiaIM.MessageFetcher.getStatus(arr.join(','));
            }
        }
    }

    TujiaIM.StorageManager.init();
})();

/**
 * conf 配置url
 * NoticesUrl   获取通知的URL
 * MessagesUrl 获取消息的URL
 * ReadMessageUrl 读取消息内容的URL
 * WriteMessageUrl  写消息的URL
 * GetStatusUrl 获取联系人在线状态信息
 */

if (!window.TujiaIM.MessageFetcher) {
    window.TujiaIM.MessageFetcher = {

        conf: {
            GetStatusUrl: portalUrl + '/message/GetStatus' + '?callback=?',
            UpdateMessage: portalUrl + '/MessageHandler.ashx' + '?callback=?',
            ContractorsUrl: portalUrl + '/message/GetContactors' + '?callback=?',
            ReadMessageUrl: portalUrl + '/message/GetMessageDetail' + '?callback=?',
            WriteMessageUrl: portalUrl + '/message/SendMessage' + '?callback=?',
            MarkAsReadedUrl: portalUrl + '/message/MarkMessageAsRead' + '?callback=?',
            MarkNoticeAsReadedUrl: portalUrl + '/message/MarkNoticeAsRead' + '?callback=?',
            UnitInfo: portalUrl + '/message/GetUnit'
        },

        init: function (conf) {
            this.conf = conf;
        },

        /**
        * 长连接监听消息
        *
        */

        updateMessage: function () {
            if (!TujiaIM.isLogin) {
                return;
            }

            $.ajax({
                dataType: "jsonp",
                url: this.conf.UpdateMessage,
                data: { 'userId': TujiaIM.userId, 'clientId': TujiaIM.clientId, 'messageId': TujiaIM.latestMessageId },
                success: function (res) {

                    if (res.IsSuccess) {

                        //获取到新消息, 更新消息列表
                        var c, tabId = '', msg = res.Object, dlg;
                        if (res.Object.messageType == 0 || res.Object.messageType == 7) {
                            //if (msg.messageId == 0) {
                            //    return;
                            //}

                            if (msg.fromId != TujiaIM.userId) {

                                if (!TujiaIM.userName) {
                                    TujiaIM.userName = msg.toName;
                                }

                                c = TujiaIM.StorageManager.getContactor(msg.fromId);
                                if (!c) {
                                    c = {
                                        userId: msg.fromId,
                                        userName: msg.fromName,
                                        isOnline: true,
                                        messages: [msg],
                                        unReadCount: 1,
                                        unitId: msg.unitId
                                    };

                                    //TujiaIM.StorageManager.getContactor(msg.fromId) = c;
                                    TujiaIM.StorageManager.addContactor(c);
                                    TujiaIM.StorageManager.totalUnreadMessageCount += 1;
                                    TujiaIM.UI.refreshMessageCount(TujiaIM.StorageManager.totalUnreadMessageCount, c);
                                } else {
                                    //c = TujiaIM.StorageManager.getContactor(msg.fromId);
                                    // 刷新房屋ID
                                    if (msg.unitId != 0 && c.unitId != msg.unitId) {
                                        c.unitId = msg.unitId;
                                        TujiaIM.StorageManager.publish('UNITID_CHANGE_EVENT', { 'contact': c });
                                    }
                                    dlg = $('#dialog_message_' + msg.fromId);
                                    if (dlg.length > 0 && dlg.css('display') != 'none') {
                                        // 如果收到消息的用户是当前交谈用户
                                        TujiaIM.MessageFetcher.markMessageAsRead(msg.fromId);
                                    } else {
                                        c.unReadCount += 1;
                                        TujiaIM.StorageManager.totalUnreadMessageCount += 1;
                                        TujiaIM.UI.refreshMessageCount(TujiaIM.StorageManager.totalUnreadMessageCount, c);
                                    }
                                    c.messages.push(msg);
                                    TujiaIM.UI.topContract(c);
                                }
                                tabId = msg.fromId;

                                alert4newMessage();
                            } else {
                                c = TujiaIM.StorageManager.getContactor(msg.toId);
                                if (!TujiaIM.userName) {
                                    TujiaIm.userName = msg.fromName;
                                }
                                if (!c) {
                                    c = {
                                        userId: res.Object.toId,
                                        userName: msg.toName,
                                        isOnline: false,
                                        messages: [msg],
                                        unReadCount: 0,
                                        unitId: msg.unitId
                                    };

                                    //TujiaIM.StorageManager.getContactor(msg.toId) =c;
                                    TujiaIM.StorageManager.addContactor(c);
                                    //TujiaIM.UI.addContactor(c);
                                } else {
                                    // 刷新房屋ID
                                    if (msg.unitId != 0 && c.unitId != msg.unitId) {
                                        c.unitId = msg.unitId;
                                        TujiaIM.StorageManager.publish('UNITID_CHANGE_EVENT', { 'contact': c });
                                    }
                                    c.messages.push(msg);
                                }
                                tabId = res.Object.toId;
                            }

                            //TujiaIM.UI.appendMessages(TujiaIM.StorageManager.getContactor(tabId), [msg]);
                            TujiaIM.UI.appendMessagesToDialog(TujiaIM.StorageManager.getContactor(tabId), [msg]);

                            // 设置最新一条消息的Id
                            TujiaIM.latestMessageId = msg.messageId;

                        } else if (msg.messageType == 1) { // 系统通知
                            TujiaIM.StorageManager.totalUnreadNoticeCount += 1;
                            TujiaIM.StorageManager.notices.push(msg);
                            TujiaIM.UI.addNotice(msg);
                            TujiaIM.UI.refreshNoticeCount(TujiaIM.StorageManager.totalUnreadNoticeCount, msg.messageId);

                            // 提示新订单
                            if (TujiaIM.StorageManager.hasUnReadNewOrderNotice()) {
                                //HasNewOrder = true;
                                alert4newOrder();
                            }

                        } else if (msg.messageType == 3) { // 消息已读

                            c = TujiaIM.StorageManager.getContactor(msg.fromId);
                            if (c) {

                                TujiaIM.StorageManager.totalUnreadMessageCount -= c.unReadCount;
                                c.unReadCount = 0;
                                TujiaIM.UI.refreshMessageCount(TujiaIM.StorageManager.totalUnreadMessageCount, c);
                            }
                        } else if (msg.messageType == 4) { // 系统消息为已读

                            TujiaIM.StorageManager.markNoticeAsRead(msg.messageId);

                            // 如果没有新订单通知
                            if (!TujiaIM.StorageManager.hasUnReadNewOrderNotice()) {
                                //HasNewOrder = false;
                                clearTimeout(NewOrderTimer);
                            }

                        } else if (msg.messageType == 2) { // 超时

                        }

                        TujiaIM.MessageFetcher.updateMessage();
                    }
                    else {
                        // logout后不會再建立長鏈接
                        //alert('read message is false: ' + res.Message);
                    }

                }
            });
        },

        /**
        * 获取联系人
        */
        getContactors: function (userId, channelId) {

            $.ajax({
                dataType: "jsonp",
                url: this.conf.ContractorsUrl,
                data: { 'userId': userId },
                success: function (res) {
                    if (res.IsSuccess) {
                        // 刷新消息总数
                        TujiaIM.StorageManager.totalUnreadMessageCount = res.UnReadMessageCount;
                        TujiaIM.UI.refreshMessageCount(res.UnReadMessageCount);
                        //获取消息成功
                        if (res.Object.contactors.length > 0) {
                            var msg = res.Object.contactors[0].messages[0];
                            if (msg.fromId == TujiaIM.userId) {
                                TujiaIM.userName = msg.fromName;
                            } else {
                                TujiaIM.userName = msg.toName;
                            }
                        }

                        if (res.latestMessageId) {
                            TujiaIM.latestMessageId = res.latestMessageId;
                        }

                        TujiaIM.StorageManager.addContactors(res.Object.contactors);

                        TujiaIM.StorageManager.totalUnreadNoticeCount = res.Object.notices.length;
                        TujiaIM.StorageManager.addNotices(res.Object.notices);
                        TujiaIM.UI.refreshNoticeCount(TujiaIM.StorageManager.totalUnreadNoticeCount);

                        if (TujiaIM.StorageManager.hasUnReadNewOrderNotice()) {
                            //HasNewOrder = true;
                            alert4newOrder();
                        }

                    } else {
                        //alert('getContactors is false: ' + res.Message);
                    }
                }
            });

        },

        /**
        * 获取用户在线状态
        */
        getStatus: function (userIds) {
            if (!TujiaIM.isLogin) {
                return;
            }

            if (userIds) {
                $.ajax({
                    dataType: "jsonp",
                    url: this.conf.GetStatusUrl,
                    data: { 'userIds': userIds },
                    success: function (res) {
                        if (res.IsSuccess) {
                            TujiaIM.StorageManager.updateStatus(res.Object);
                        } else {
                            //alert('get status is false: ' + res.Message);
                        }
                    }
                });
            }
        },

        /**
        * 读信息
        */
        readMessage: function (toUserId) {

            $.ajax({
                dataType: "jsonp",
                url: this.conf.ReadMessageUrl,
                data: { 'userId': TujiaIM.userId, 'toUserId': toUserId },
                success: function (res) {
                    if (res.IsSuccess) {
                        TujiaIM.StorageManager.addMessageDetail(res.Object);
                    } else {
                        //alert('read message is false: ' + res.Message);
                    }
                }
            });


        },

        /**
        * 写信息
        */
        writeMessage: function (fromId, fromName, c, msg) {
            //var toId = c.userId, toName = c.userName, unitId = c.unitId, hotelId = c.hotelId;
            if (msg && msg != "请输入聊天内容...") {

                TujiaIM.UI.appendMessagesToDialog(c, [{ fromId: TujiaIM.userId, toId: c.userId, message: msg, createTime: (new Date()).format("hh:mm:ss") + " 今天" }]);

                if (!TujiaIM.UI.UpdateListenerIsRunning) {
                    TujiaIM.UI.UpdateListenerIsRunning = true;
                    if (TujiaIM.UpdateMessageTimer) {
                        window.clearInterval(TujiaIM.UpdateMessageTimer)
                        TujiaIM.UpdateMessageTimer = null;
                    }
                    $.cookie('TujiaIM_MessageUpdate', 1);
                    this.updateMessage();
                }

                $.ajax({
                    dataType: "jsonp",
                    url: this.conf.WriteMessageUrl,
                    data: { 'fromId': fromId, 'fromName': fromName, 'toId': c.userId, 'toName': c.userName, 'unitId': c.unitId, 'hotelId': (c.hotelId ? c.hotelId : 0), 'msg': msg, 'clientId': TujiaIM.clientId },
                    success: function (res) {
                        if (res.IsSuccess) {
                            // 回显发送成功的消息
                            //TujiaIM.UI.appendMessages(res.Object.toId, [res.Object]);
                            //TujiaIM.UI.appendMessagesToDialog(TujiaIM.StorageManager.getContactor(res.Object.toId), [res.Object]);
                            TujiaIM.latestMessageId = res.Object.messageId;

                            if (res.mercantOffline == "1") {
                                $(".Online").show();
                            }
                        } else {
                            if (res.ErrorCode == -100) {
                                window.clearInterval(TujiaIM.UpdateMessageTimer)
                                TujiaIM.UpdateMessageTimer = null;
                                showLoginDialog();
                            }

                            TujiaIM.UI.appendMessagesToDialog(c, [{ fromId: TujiaIM.userId, toId: c.userId, message: res.Message, createTime: (new Date()).format("hh:mm:ss") + " 今天", type: 'error' }]);
                        }
                    }
                });
            }
        },

        markMessageAsRead: function (userId) {

            $.ajax({
                dataType: "jsonp",
                url: this.conf.MarkAsReadedUrl,
                data: { 'fromId': userId, 'toId': TujiaIM.userId, 'clientId': TujiaIM.clientId },
                success: function (res) {
                    if (res.IsSuccess) {
                        //TujiaIM.StorageManager.markAsReaded(userId);
                    } else {
                        //alert('markedasred is false: ' + res.Message);
                    }
                }
            });

        },

        markNoticeAsRead: function (userId, noticeId) {

            var notice = TujiaIM.StorageManager.getNotice(noticeId);
            if (!notice.readed) {
                notice.readed = true;
                TujiaIM.UI.refreshNoticeCount(--TujiaIM.StorageManager.totalUnreadNoticeCount, noticeId, true);

                $.ajax({
                    dataType: "jsonp",
                    url: this.conf.MarkNoticeAsReadedUrl,
                    data: { 'userId': userId, 'noticeId': noticeId, 'clientId': TujiaIM.clientId },
                    success: function (res) {
                        if (res.IsSuccess) {
                            //TujiaIM.UI.refreshNoticeCount(--TujiaIM.StorageManager.totalUnreadNoticeCount, noticeId, true);
                        } else {
                            //alert('markedasred is false: ' + res.Message);
                        }
                    }
                });
            }
        },

        getUnitInfo: function (id, callback) {

            $.ajax({
                dataType: "jsonp",
                url: this.conf.UnitInfo,
                data: { 'id': id },
                success: function (unit) {
                    var s = '<a href="' + unit.unitUrl + '" target="_blank" class="house-pic"><img src="' + unit.imgUrl + '" height="43" width="70"></a>'
                    + '<div class="house-box"><a href="' + unit.unitUrl + '" target="_blank" class="house-title">' + unit.name + '</a> <span >房屋编号：<b>' + unit.id + '</b></span ><br/><div class="house-info"><span>' + unit.houseType + '</span> |<span> ' + unit.roomCountSummary + '</span> |<span> ' + unit.grossArea + '平米</span> |<span> 床数' + unit.bedCount + '</span> | <span>推荐入住' + unit.recommendedGuests + '人</span> </div></div>'
                    callback(s);
                }
            });

        }
    }
}

if (TujiaIM.userId) {
    $(document).ready(function () {
        TujiaIM.UI.init();

        var $hotel = $("a[hotelid]");

        if ($hotel.length) {
            var ownerId = $hotel.attr("ownerId");

            if (!ownerId || ownerId == "0") {
                $.ajax({
                    "dataType": "jsonp",
                    "url": portalUrl + '/message/GetDefaultChatUserID' + '?callback=?',
                    "data": { 'hotelID': $hotel.attr("hotelid") },
                    "success": function (data) {
                        $hotel.attr("ownerId", data.chatID);
                        TujiaIM.StorageManager.updateStatus([{ "userId": data.chatID, "isOnline": data.isOnline }]);
                        bindIMDialogClick($hotel);
                    }
                });
            } else {
                bindIMDialogClick($hotel);
            }
        }
    });
}

function bindIMDialogClick($dialogEntry) {
    $dialogEntry.bind('click', function () {
        if (!TujiaIM.isLogin) {
            showLoginDialog();
            return;
        }

        var ownerId = $(this).attr('ownerId') - 0, name = $(this).attr('ownerName'), unitId = $(this).attr('unitId'), hotelId = $(this).attr('hotelId');

        if (ownerId != TujiaIM.userId) {
            TujiaIM.StorageManager.addContactor({
                userId: ownerId,
                userName: name,
                isOnline: !$(this).hasClass("leave-msg-btn"),
                messages: [],
                unReadCount: 0,
                unitId: unitId,
                hotelId: hotelId
            });
            TujiaIM.UI.showTalkDialog(ownerId);
        }
    });
}

function showLoginDialog(showDirectOrderLink, orderUrl) {
    var $loginBtn = $("#loginBtn");
    if ($loginBtn.length) {
        $loginBtn.click();
        $("#smobile").focus();
        if (showDirectOrderLink) {
            $("div.link-group").show().children("a").each(function (index, ele) {
                $(ele).attr("href", orderUrl);
            });
        } else {
            $("div.link-group").hide();
        }

    } else {
        alert("您还没有登录，请登录后操作");
    }
}


function mixPubSub(obj) {

    /* merge object2 into object1 */
    return $.extend(obj, {

        _callbackObject: {},

        // 绑定事件
        subscribe: function (eventType, func) {

            if (!this._callbackObject[eventType]) {
                this._callbackObject[eventType] = [];
            }
            // 绑定回调函数
            this._callbackObject[eventType].push(func);
        },

        // 解除绑定
        unsubscribe: function (eventType, func) {
            var i = 0, callbackList = this._callbackObject[eventType];
            if (callbackList) {
                if (func) {
                    for (i = 0; i < callbackList.length; i++) {
                        if (callbackList[i] == func) {
                            callbackList.splice(i, 1);
                            i -= 1;
                        }
                    }
                } else {
                    this._callbackObject[eventType] = [];
                }
            }
        },

        // 发布事件
        publish: function (eventType, eventObject) {
            var callbackList = this._callbackObject[eventType], i;
            if (callbackList) {
                for (i = 0; i < callbackList.length; i++) {
                    callbackList[i](eventObject);
                }
            }
        }
    });
}


