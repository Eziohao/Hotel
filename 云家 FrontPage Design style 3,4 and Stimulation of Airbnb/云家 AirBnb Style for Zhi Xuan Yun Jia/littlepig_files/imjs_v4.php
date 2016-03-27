var webimIO = {
    get: function(url) {
        var response = $.ajax({
            type: "GET",
            dataType: "JSON",
            url: url, 
            async: false
        });
        return response.responseText;
    },
    post: function(url,data) {
        var response = $.ajax({
            type: "POST",
            url: url,
            dataType: "JSON",
            data: data,
            async: false
        });
        return response.responseText
    },
    httpget: function (url, data, complete) {
        var req = $.ajax({
            type: 'GET',
            url: url ,
            data : data,
            timeout : 60000,
            dataType: 'jsonp',
            async: true
        });
        if(complete) req.complete(complete);
    },
    getLodgeUnitData: function(roomid) {
        var url = XZWebUrlWriter.getWebIm_LodgeUnitData(roomid); 
        var data = this.get(url);
        return JSON.parse(data);
    },
    getChatRecordUrl: function (landlordid, tenantid, objid) {
        if (!landlordid || !tenantid || !objid) return null;

        var url = XZWebUrlWriter.getWebIm_TalkHisUrl(landlordid, tenantid, objid, currentUser);
        var data = this.get(url);
        return data;
    },
    getIMBaseBtnDom: function() {
        var url = XZWebUrlWriter.getWebIm_DrawBaseBtnUrl(window.location.href);
        var data = this.get(url);
        return data;
    },
    getFavoriteList: function(userid) {
        var url = XZWebUrlWriter.getWebIm_FavoriteList(userid);
        var data = this.get(url);
        return data;
    },
    getNoticeList: function(userid) {
        var url = XZWebUrlWriter.getWebIm_RequestNotificationUrl(userid);
        var data = this.get(url);
        if(!data) {
            var data = XZStorageHandle.getNotification();
        } else {
            data = JSON.parse(data);
        }
        return data;
    },
    getDealActionUrl: function (dealaction, objid, objtype, receiverid, displaystrategy) {
        if (!dealaction) return null;
        var url = XZWebUrlWriter.getInfoEventDealActionUrl(dealaction, objid, objtype, receiverid, displaystrategy);
        var dealAction = this.get(url);
        return dealAction;
    },
    getUserSysNoticeCnt: function (userrole) {
        var url = XZWebUrlWriter.getWebIm_RequestUserSysNoticeCnt(currentUser, userrole);
        var data = this.get(url)
        return data;
    },
    getUserSysNotice: function (userrole) {
        var url = XZWebUrlWriter.getWebIm_RequestUserSysNotice(currentUser, userrole);
        var data = this.get(url);
        return data;
    },
    getUserState: function (userid,imuserrole) {
        var url = XZWebUrlWriter.getWebIm_RequestUserStateUrl(userid,imuserrole);
        var data = this.get(url);
        return JSON.parse(data);
    },
    getUserData: function(id) {
        var url = XZWebUrlWriter.getWebIm_UserData(id); 
        var data = this.get(url);
        return data;
    },
    getFastReply: function () {
        var url = XZWebUrlWriter.getWebIm_RequestFastReplyUrl(currentUser);
        var data = this.get(url);
        return data;
    },
    getRecommendLuList: function (userid) {
        if (!userid) return null;
        var url = XZWebUrlWriter.getWebIm_RequestRecommendLuUrl(userid);
        var data = this.get(url);
        return JSON.parse(data);
    },
    getSynTalkMsg: function(userid,synMinTime,synMaxTime) {
        var url = XZWebUrlWriter.getWebIm_RequestSynTalkMsgUrl(userid,synMinTime,synMaxTime);
        var data = this.get(url);
        return JSON.parse(data); 
    },
    addFeedBack: function (problem,contact) {
        var url = XZWebUrlWriter.getAjax_AddFeedbackUrl(problem,contact,'');
        var data = this.get(url);
        return JSON.parse(data);
    },
    talkMsgSetRead: function(tenantId,luId,isTenant) {
        var url = XZWebUrlWriter.getWebIm_RequestTalkMsgSetRead(tenantId,luId,isTenant);
        var data = this.get(url);
        return data;
    },
    noticeReachedFeedback: function (timerid, operate, receiverid) {
        if (!timerid) return null;
        var url = XZWebUrlWriter.getWeb_InfoEventReachUrl(timerid, operate, receiverid);
        var data = this.get(url);
    },
    getShowLetterUrl: function(loginUserIsLandlord) {
        var url = loginUserIsLandlord ? XZWebUrlWriter.getWeb_FangDong_FangDong_ShowLetter() : XZWebUrlWriter.getWeb_FangKe_FangKe_ShowLetter();
        return url;
    },
    getSpecialIndexUrl: function(userRole,userId) {
        if(userRole == 'landlord') {
            var url = XZWebUrlWriter.getWeb_FangDong_Special_Index(userId);
        } else {
            var url = XZWebUrlWriter.getWeb_FangKe_Special_Index(userId);
        }
        return url;
    },
    getIMServerUrl: function() {
        var url = XZWebUrlWriter.getWebIm_ServerUrl(); 
        var data = this.get(url);
        return data;
    },
    getAllFriendAndLuData: function(allfriendid,allluid) {
        var url = XZWebUrlWriter.getWebIm_AllFriendAndLuData(allfriendid,allluid);
        var data = this.get(url);
        return JSON.parse(data);
    }
};
var common = {
    checkIfIE6Browser: function () {
        /*{{{*/
        if ($.browser.msie && $.browser.version === "6.0") {
            isIE6 = true;
        } else {
            isIE6 = false;
        }
        /*}}}*/
    },
    checkIfIE11Browser: function () {
        /*{{{*/
        if ($.browser.msie && $.browser.version === "11.0") {
            var isIE11 = true;
        } else {
            var isIE11 = false;
        }
        return isIE11;
        /*}}}*/
    },
    isIe: function(){
        return ("ActiveXObject" in window);
    },
    setCookie: function (name, value, expires) {
        /*{{{*/
        var LargeExpDate = new Date();
        if (expires != null) {
            LargeExpDate.setTime(LargeExpDate.getTime() + (expires * 1000 * 3600 * 24));
        }
        document.cookie = name + "=" + escape(value) + ";domain=" + topLevelDomain + ((expires == null) ? "" : ("; expires=" + LargeExpDate.toGMTString())) + "; path=" + "/";
        /*}}}*/
    },
    getCookie: function (name) {
        /*get cookie{{{*/
        var offset = '',
            end = '';
        var search = name + "=";
        if (document.cookie.length > 0) {
            offset = document.cookie.indexOf(search);
            if (offset != -1) {
                offset += search.length;
                end = document.cookie.indexOf(";", offset);
                if (end == -1) end = document.cookie.length;
                return unescape(document.cookie.substring(offset, end));
            } else return "";
        }
        /*}}}*/
    },
    /*
    analyseURLRequestSource: function () {
        var includeImURL = $('#webimSource').attr('src');
        if (includeImURL.indexOf('?') > 0) {
            var URLParamKeyValues = this.explode('?', includeImURL);
            var splitedURLParamsKeyValues = this.explode('&', URLParamKeyValues[1]);
            for (var i = 0; i < splitedURLParamsKeyValues.length; i++) {
                var result = this.explode('=', splitedURLParamsKeyValues[i]);
                if (xiaozhuIM.hasOwnProperty(result[0])) {
                    xiaozhuIM[result[0]] = result[1];
                }
            }
        }
        var URLObjLength = xiaozhuIM.dm.split('.').length;
        xiaozhuIM.topdomain = xiaozhuIM.dm.split('.')[URLObjLength - 2] + '.' + xiaozhuIM.dm.split('.')[URLObjLength - 1];
    },
    */
    explode: function (delimiter, string, limit) {
        /*{{{*/
        var emptyArray = {
            0: ''
        };

        if (arguments.length < 2 || typeof arguments[0] === 'undefined' || typeof arguments[1] === 'undefined') {
            return null;
        }

        if (delimiter == '' || delimiter == false || delimiter == null) {
            return false;
        }

        if (typeof delimiter === 'function' || typeof delimiter === 'object' || typeof string === 'function' || typeof string === 'object') {
            return emptyArray;
        }

        if (delimiter == true) {
            delimiter = '1';
        }

        if (!limit) {
            return string.toString().split(delimiter.toString());
        } else {
            var splitted = string.toString().split(delimiter.toString());
            var partA = splitted.splice(0, limit - 1);
            var partB = splitted.join(delimiter.toString());
            partA.push(partB);
            return partA;
        }
        /*}}}*/
    },
    getOs: function () {   
        var explorer = window.navigator.userAgent ;
        if (explorer.indexOf("MSIE") >= 0) {
            return "Safari";
        } else if (explorer.indexOf("Firefox") >= 0) {
            return "Firefox";
        } else if(explorer.indexOf("Chrome") >= 0){
            return "Chrome";
        } else if(explorer.indexOf("Opera") >= 0){
            return "Opera";
        } else if(explorer.indexOf("Safari") >= 0){
            return "Safari";
        } else {
            return 'Safari';
        }
    }, 
    isEmpty: function (value) {
        /*{{{*/
        if (!value) return true;
        if (value.length === 0) return true;
        if ('undefined' == typeof value) return true;
        return false;
        /*}}}*/
    },
    insertAtCursor: function (myField, myValue) {
        /*{{{*/
        //IE support
        if (document.selection) {
            myField.focus();
            sel = document.selection.createRange();
            sel.text = myValue;
            sel.select();
        }
        //MOZILLA/NETSCAPE support
        else if (myField.selectionStart || myField.selectionStart == '0') {
            var startPos = myField.selectionStart;
            var endPos = myField.selectionEnd;
            // save scrollTop before insert
            var restoreTop = myField.scrollTop;
            myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
            if (restoreTop > 0) {
                // restore previous scrollTop
                myField.scrollTop = restoreTop;
            }
            myField.focus();
            myField.selectionStart = startPos + myValue.length;
            myField.selectionEnd = startPos + myValue.length;
        } else {
            myField.value += myValue;
            myField.focus();
        }
        /*}}}*/
    },
    getCurrentTime: function() {
        /*获取当前时间戳{{{*/
        return Math.floor(new Date().getTime() / 1000); 
        /*}}}*/
    },
    html2Json4IM: function(content) {
        $('#im_html_decode_div').html(content); 
        return JSON.parse($('#im_html_decode_div').html());
    },
    mapContentToIcon: function (content) {
        var reg = new RegExp(/\[([^[]*?)\]/gi);
        var str = content.match(reg);
        var icon = content;
        if (str) {
            for (var i in str) {
                var matchVal = String(str[i]); //have [],by replace
                var matchIconVal = matchVal.replace(reg, "$1"); //no [],by getIcon()
                var myIcon = this.getIcon(matchIconVal);
                if (myIcon) {
                    icon = icon.replace(matchVal, myIcon);
                }
            }
        }
        return icon;
    },
    getIcon: function (val) {
        var keys = this.iconKey;
        for (var i in keys) {
            if (val == keys[i]) return '<img src="http://www.xiaozhu.com/images/webim/icon/' + this.iconList[i] + '.gif" title="' + val + '">';
        }
        return null;
    },
    iconKey: ['给力', '威武', '熊猫', '兔子', '呵呵', '嘻嘻', '哈哈', '可爱', '可怜', '挖鼻屎', '吃惊', '害羞', '挤眼', '闭嘴', '鄙视', '爱你', '泪', '偷笑', '亲亲', '生病', '太开心', '懒得理你', '右哼哼', '左哼哼', '嘘', '衰', '委屈', '吐', '打哈欠', '抱抱', '怒', '疑问', '馋嘴', '拜拜', '思考', '汗', '困', '睡觉', '钱', '失望', '酷', '花心', '哼', '鼓掌', '晕', '悲伤', '抓狂', '黑线', '怒骂', '心', '伤心', '猪头', 'ok', '耶', 'good'],
    iconList: ['geili_thumb', 'vw_thumb', 'panda_thumb', 'rabbit_thumb', 'smilea_thumb', 'tootha_thumb', 'laugh', 'tza_thumb', 'kl_thumb', 'kbsa_thumb', 'cj_thumb', 'shamea_thumb', 'zy_thumb', 'bz_thumb', 'bs2_thumb', 'lovea_thumb', 'sada_thumb', 'heia_thumb', 'qq_thumb', 'sb_thumb', 'mb_thumb', 'ldln_thumb', 'yhh_thumb', 'zhh_thumb', 'x_thumb', 'cry', 'wq_thumb', 't_thumb', 'k_thumb', 'bba_thumb', 'angrya_thumb', 'yw_thumb', 'cza_thumb', '88_thumb', 'sk_thumb', 'sweata_thumb', 'sleepya_thumb', 'sleepa_thumb', 'money_thumb', 'sw_thumb', 'cool_thumb', 'hsa_thumb', 'hatea_thumb', 'gza_thumb', 'dizzya_thumb', 'bs_thumb', 'crazya_thumb', 'h_thumb', 'nm_thumb', 'hearta_thumb', 'unheart', 'pig', 'ok_thumb', 'ye_thumb', 'good_thumb']
};
(function() {
    xiaozhuIMBootstrap.webIMInit();

    $('#webim-chat-user').on('click',function() {
        $('#im_chat_btn').click();
    });

})();
function fangdongtalktorent(friendid, luid, content) {
    XZStorageHandle.removeClosedFriendFromList(friendid,luid); 
    $('#im_chat_btn').click();
    XZStorageHandle.updateFriendList(friendid,luid);
    setTimeout(function() {
        friendList.praviteClass.renderBasePage();
        var target = 'curLodgeUnit';
        var method = 'changeCurLodgeUnit';
        var params = {roomid:luid};
        var command = new Command(target,method,params);
        container.send(command);

        //var state = $(this).attr('state');
        var state = "online";
        var target = 'chat';
        var method = 'changeUser';
        var params = {
            userid:friendid,
        roomid:luid,
        state:state
        };
        var command = new Command(target,method,params);
        container.send(command);
    },500);
}


