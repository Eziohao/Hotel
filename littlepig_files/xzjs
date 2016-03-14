 
 var topLevelDomain = "xiaozhu.com";
var domain = "www.xiaozhu.com";
var webimIframUrl = "http://xiaozhu.com/webim.html";
var uploadImageUrl = "http://image2.xiaozhustatic2.com/imgin4uploadify.php";
var jciUrl = "http://jci.xiaozhustatic2.com";
var webimYUI = "{{{webimYUI}}}";
var webimV2 = "{{{webimV2}}}";
var client_id_youku = '16edde5f79e61324'; 

document.domain = topLevelDomain;

var hostArray = window.location.hostname.split('.');
if (hostArray.length == 5 && hostArray[2] == 'partner') {
    topLevelDomain = hostArray[1] + '.' + hostArray[2] + '.xiaozhu.com';
} else if (hostArray.length == 4 && hostArray[1] == 'partner') {
    topLevelDomain = hostArray[0] + '.' + hostArray[1] + '.xiaozhu.com';
}

if (typeof(window.jQuery) != "undefined")
{
    if ($("#head_newmsg2"))
    {
        $("#head_newmsg2").hover(
            function () {
                $("#head_newmsg2 a.icon_arrowB").addClass("nav_current");
                $("#head_newmsg2 a.icon_arrowB").removeClass("icon_arrowB");
                $("#head_newmsg2 div.nav_pop ").show();
            },
            function () {
                $("#head_newmsg2 a.nav_current").addClass("icon_arrowB");
                $("#head_newmsg2 a.nav_current").removeClass("nav_current");
                $("#head_newmsg2 div.nav_pop ").hide();
            }
        );
    }
}

function tipBackyardSuccess(classname)
{
    if (typeof(classname) == 'undefined' || classname == '')
        classname = 'tips_right';

    $('.'+classname).show();

    var displayText = 3;
    var showtime=setInterval(function(){
    if(displayText>0)
    {
        displayText--;
        $('.'+classname).show();
    }
    else {
        $('.'+classname).hide();
        clearInterval(showtime);
    }
    },1000);
}

function tipBackyardError(errmsg,classname)
{
    if (typeof(classname) == 'undefined' || classname == '')
        classname = 'tips_error';

    $('.'+classname).html(errmsg);
    $('.'+classname).show();

    var displayText = 3;
    var showtime=setInterval(function(){
    if(displayText>0)
    {
        displayText--;
        $('.'+classname).show();
    }
    else {
        $('.'+classname).hide();
        clearInterval(showtime);
    }
    },1000);
}

function tipBackyardReset(classnameSucc, classnameErr)
{
    if (typeof(classnameSucc) == 'undefined' || classnameSucc == '')
        classnameSucc = 'tips_right';
    $('.'+classnameSucc).hide();

    if (typeof(classnameErr) == 'undefined' || classnameErr == '')
        classnameErr = 'tips_error';
    $('.'+classnameErr).hide();

}
function loadNyroModal()
{
}
 
 var XZWebUrlWriter = {
    getWebPhp : function () {
        return 'xzweb.php';
    },
    getAjaxPhp : function () {
        return 'ajax.php';
    },
    getRequest : function(url,type) {
        var nexturl = $('input[name=next]').val();
        //if (nexturl).next = nexturl;
        var returnData;
        type = (type == undefined) ? 'json' : type;
       
        $.ajax({
            type     : "GET",
            url      : url,
            dataType : type,
            async    : false,
            data     : {'_':Math.random()},
            success  : function(datas){returnData = datas;},
            error : function (XMLHttpRequest, textStatus, errorThrown){
                alert('网络错误,请刷新页面重试:'+textStatus);
            }
        });
        return returnData;
    },
    postRequest : function(url,requestParam) {
        if (!requestParam) var requestParam = {};
        var nexturl = $('input[name=next]').val();
        if (nexturl) requestParam.next = nexturl;
        var returnData;
        $.ajax({
            type     : "POST",
            url      : url,
            data     : requestParam,
            dataType : 'json',
            async    : false,
            success  : function(datas){returnData = datas;},
            error : function (XMLHttpRequest, textStatus, errorThrown){
                alert('网络错误,请刷新页面重试:'+textStatus);
            }
        });
        return returnData;
    },
    getWebIm_ServerUrl: function() {
        return 'http://'+domain+'/webim.php?op=getServerUrl';
    },
    getWebIm_DrawIframeUrl : function (userid) {
        return 'http://'+domain+'/webim.php?op=drawIframe&userid=' + userid;
    },
    getWebIm_DrawBaseBtnUrl: function(next) {
        return 'http://'+domain+'/webim.php?op=drawImBaseBtn&next=' + next;
    },
    getWebIm_DrawZhunaIframeUrl : function () {
        return 'http://'+domain+'/webim.php?op=drawZhunaIframe';
    },
    getWebIm_IframeUrl : function (userId) {
        return webimIframUrl;
    },
    getWebIm_LodgeUnitData: function (roomid) {
        return 'http://'+domain+'/webim.php?op=getLodgeUnitData&roomid=' + roomid;
    },
    getWebIm_FavoriteList: function (userid) {
        return 'http://'+domain+'/webim.php?op=getFavoriteList&userid=' + userid;
    },
    getWebIm_RequestNotificationUrl : function (userid) {
        return 'http://'+domain+'/webim.php?op=getNotification&terminal=all_web&userid=' + userid;
    },
    getWebIm_RequestUserSysNoticeCnt : function (userid, userrole) {
        return 'http://'+domain+'/webim.php?op=getUserSysNoticeCnt&userid=' + userid + '&userrole=' + userrole;
    },
    getWebIm_RequestUserSysNotice : function (userid, userrole) {
        return 'http://'+domain+'/webim.php?op=getUserSysNotice&userid=' + userid + '&userrole=' + userrole;
    },
    getWebIm_UserData : function(userid) {
        return 'http://'+domain+'/webim.php?op=getUserData&userid=' + userid;
    },
    getWebIm_talkHis : function(isTenant,offset,length) {
        return 'http://'+doamin+'/webim.php?op=loadTalkHis&isTenant=' + isTenant + '&offset=' + offset + '&length=' + length + '&userId=' + currentUser; 
    },
    getWebIm_talkMagHis: function(tenantId,luId,length,lastMessageId) {
        return 'http://'+domain+'/webim.php?op=loadTalkMsgHis&tenantId= ' + tenantId + '&luId=' + luId +'&length=' + length + '&lastMessageId= ' + lastMessageId;
    },
    getWebIm_TalkHisUrl : function (landlordid, tenantid, objid, userid) {
        return 'http://'+domain+'/webim.php?op=getTalkHisUrl&landlordid=' + landlordid + '&tenantid=' + tenantid + '&objid=' + objid + '&userid=' + userid + '&_t=' + new Date().getTime();
    },
    getWebIm_RequestFastReplyUrl : function (userid) {
        return 'http://'+domain+'/webim.php?op=getFastReply&userid=' + userid + '&_t=' + new Date().getTime();
    },
    getWebIm_FangDongSpecialLodgeUnitUrl : function (userid) {
        return "http://" + topLevelDomain + "/fangdong/" + userid +"/fangzi.html";
    },
    getWebIm_RequestRecommendLuUrl : function (userid) {
        return 'http://'+domain+'/webim.php?op=getRecommendLuList&userid=' + userid;
    },
    getWebIm_RequestUserStateUrl : function (userid,imuserrole) {
        return 'http://'+domain+'/webim.php?op=getUserState&userid=' + userid + '&imuserrole=' + imuserrole;
    },
    getWebIm_RequestSynTalkMsgUrl: function (userid,synMinTime,synMaxTime) {
        return 'http://'+domain+'/webim.php?op=SynTalkMsg&userId=' + userid + '&synMinTime=' + synMinTime + '&synMaxTime=' + synMaxTime;
    },
    getWebIm_RequestTalkMsgSetRead: function(tenantId,luId,isTenant) {
        return 'http://'+domain+'/webim.php?op=talkMsgSetRead&tenantId=' + tenantId + '&luId=' + luId + '&isTenant=' + isTenant + '&_t=' + new Date().getTime();
    },
    getWebIm_AlipayTrustZMInfoPair : function (applyUserId,ownerUserId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetZminfo_Pair&applyUserId=' + applyUserId + '&ownerUserId='+ownerUserId+'&_t=' + new Date().getTime();
    },
    getWebIm_AlipayTrustLayer : function (landlordid) {
        return 'http://'+domain+'/webim.php?op=getAlipayTrustLayer&landlordid=' + landlordid + '&_t=' + new Date().getTime();
    },
    getWebIm_CheckKeywordUrl : function (dataArr, type) {
        return 'http://greatwall.xiaozhu.com/greatwall.php?content=' + JSON.stringify(dataArr) + '&type=' + type + '&_t=' + new Date().getTime();
    },
    getWebIm_AllFriendAndLuData : function (allfriendid,allluid) {
        return 'http://'+domain+'/webim.php?op=getAllFriendAndLuData&userlist=' + allfriendid + '&lulist=' + allluid + '&_t=' + new Date().getTime();
    },
    getWeb_NoticeReachedFeedbackUrl : function (timerid,operate) {
        return 'http://'+domain+'/xzweb.php?op=NotificationReachedFeedback&timerid=' + timerid + '&operate=' + operate;
    },

    getWeb_InfoEventReachUrl : function (timerid,operate,receiverId) {
        return 'http://'+domain+'/xzweb.php?op=InfoEventReach&timerid=' + timerid + '&operate=' + operate + '&receiverid='+receiverId;
    },

    getInfoEventDealActionUrl : function (dealaction,objid,objtype,receiverid,displaystrategy) {
        return 'http://'+domain+'/xzweb.php?op=GetInfoEventDealActionUrl&dealaction=' + dealaction + '&objid=' + objid + '&objtype=' + objtype + '&receiverid=' + receiverid + '&displaystrategy='+displaystrategy;
    },

    getWeb_FangDong_FangDong_ShowLetter: function() {
        return 'http://'+domain+'/xzweb.php?op=FangDong_ShowLetter';
    },
    getWeb_FangKe_FangKe_ShowLetter: function() {
        return 'http://'+domain+'/xzweb.php?op=FangKe_ShowLetter';
    },
    getWeb_FangKe_Special_Index: function(tenantid) {
        return 'http://'+domain+'/xzweb.php?op=Front_FangKe_Special_Index&tenantid=' + tenantid;
    },
    getWeb_FangDong_Special_Index: function(landlordid) {
        return 'http://'+domain+'/xzweb.php?op=Front_FangDong_Special_Index&landlordid=' + landlordid;
    },
    getWeb_FangDong_ResetFastReplyUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=FangDong_ChatSet';
    },
    getWeb_FangDong_NoticeUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=FangDong_ShowSysNotice';
    },
    getWeb_FangKe_NoticeUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=FangKe_ShowSysNotice';
    },

    getWeb_FangKe_DoPostCommentUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=FangKe_DoPostComment';
    },
    getWeb_FangDong_DoPostCommentUrl : function (objId,bookorderId,content,commentScore,fkTag) {
        return 'http://'+domain+'/xzweb.php?op=FangDong_DoPostComment&objId=' + objId + '&bookorderId=' + bookorderId + '&content=' + content + commentScore + '&fkTag=' + fkTag;
    },
    getWeb_FangKe_IndexUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=FangKe_Index';
    },
    getWeb_FangDong_IndexUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=FangDong_Index';
    },
    getWeb_FangKe_AddCommentUrl : function (bookorderId) {
        return 'http://'+domain+'/xzweb.php?op=FangKe_Comment_Self&bookorderid=' + bookorderId + '&random=' + new Date().getTime();
    },
    getWeb_FangKe_DeleteTenantUrl : function (tenantId) {
        return 'http://'+domain+'/xzweb.php?op=FangKe_DeleteUserTenant&tenantId=' + tenantId;
    },
    getWeb_FangKe_UserTenantDetailUrl : function (tenantId) {
        return 'http://'+domain+'/xzweb.php?op=FangKe_UserTenantDetail&tenantId=' + tenantId;
    },
    getWeb_FangKe_EditUserTenantUrl : function (tenantId,realName,tenantSex,ageGroup,cardType,cardNo,yearOfBirth,monthOfBirth,dayOfBirth,mobile,phonecode) {
        return 'http://'+domain+'/xzweb.php?op=FangKe_UpdateUserTenant&tenantId=' + tenantId + '&realName=' + realName + '&tenantSex=' + tenantSex + '&ageGroup=' + ageGroup + '&cardType=' + cardType + '&cardNo=' + cardNo + '&yearOfBirth=' + yearOfBirth + '&monthOfBirth=' + monthOfBirth + '&dayOfBirth=' + dayOfBirth + '&mobile=' + mobile + '&phonecode=' + phonecode + '&random=' + new Date().getTime();
    },
    getWeb_FangKe_EditHaiwaiUserTenantUrl : function (tenantId,realName,tenantSex,ageGroup,cardType,cardNo,yearOfBirth,monthOfBirth,dayOfBirth,email) {
        return 'http://'+domain+'/xzweb.php?op=FangKe_UpdateUserTenant&tenantId=' + tenantId + '&realName=' + realName + '&tenantSex=' + tenantSex + '&ageGroup=' + ageGroup + '&cardType=' + cardType + '&cardNo=' + cardNo + '&yearOfBirth=' + yearOfBirth + '&monthOfBirth=' + monthOfBirth + '&dayOfBirth=' + dayOfBirth + '&email=' + email + '&random=' + new Date().getTime();
    },
    getWeb_GetCityUrl : function (provinceId) {
        return 'http://'+domain+'/xzweb.php?op=Pub_SelCityJson&provinceid=' + provinceId ;
    },
    getFangDong_CutUserHeadImageFrameUrl : function (headImageUrl) {
        return 'http://'+domain+'/xzweb.php?op=FangDong_CutUserHeadImageFrame&headImageUrl='+headImageUrl;
    },
    /*07-03*/
    getFangDong_SetNoticeSetUrl : function (smsLodgeunitSucc,smsBookorderTimeout,smsPayTimeout,smsNewComment,emailLodgeunitSucc,emailBookorderTimeout,emailPayTimeout,emailNewComment) {
        return 'http://'+domain+'/xzweb.php?op=FangDong_NoticeSetSub&sms_lodgeunitsucc='+smsLodgeunitSucc+'&sms_bookordertimeout='+smsBookorderTimeout+'&sms_paytimeout='+smsPayTimeout+'&sms_newcomment='+smsNewComment+'&email_lodgeunitsucc='+emailLodgeunitSucc+'&email_bookordertimeout='+emailBookorderTimeout+'&email_paytimeout='+emailPayTimeout+'&email_newcomment='+emailNewComment+'&random'+new Date().getTime();
    },
    getFangDong_OrderByStateUrl : function (orderState,pageNo,sortType) {
        sortType = ('undefined' !== typeof sortType) ? sortType : "";
        return 'http://'+domain+'/xzweb.php?op=FangDong_OrderByState&orderState='+orderState+'&sortType='+sortType+'&p='+pageNo+'&random='+new Date().getTime();
    },
    getFangDong_SetBankPaymentUrl : function (id, ownerId) {
        return 'http://'+domain+'/xzweb.php?op=FangDong_SetBankPayment&id='+id+'&ownerid='+ownerId;
    },
    getFangDong_SetAlipayPaymentUrl : function (id, ownerId) {
        return 'http://'+domain+'/xzweb.php?op=FangDong_SetAlipayPayment&id='+id+'&ownerid='+ownerId;
    },
    getFangDong_GetTenpayInfoUrl : function (id, ownerId) {
        return 'http://'+domain+'/xzweb.php?op=FangDong_GetTenpayInfo&id='+id+'&ownerid='+ownerId;
    },
    getFront_Login_KernelUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=Front_Login_Kernel';
    },
    getFront_Register_KernelUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=Front_Register_Kernel';
    },
    getFront_DetailPageMapUrl : function (luid) {
        return 'http://'+domain+'/xzweb.php?op=Front_DetailPageMap&id='+luid;
    },
    getFront_Login_SubmitUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=Front_Login_Submit';
    },
    getFront_BookOrderPayFail : function (orderId) {
        return 'http://'+domain+'/xzweb.php?op=Front_BookOrderPayFail&bookorderid='+orderId;
    },

    getAjax_RegisterWithPhoneAndPass : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_RegisterWithPhoneAndPass';
    },
    getAjax_SendCommentShareUrl : function (commentid, source) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SendCommentShare&commentid='+commentid+'&source='+source+'&random='+new Date().getTime();
    },
    getAjax_CommentShareUrl : function (commentid) {
        return 'http://'+domain+'/ajax.php?op=Ajax_CommentShare&commentid='+commentid+'&random='+new Date().getTime();
    },
    getAjax_CommentFangKeShareUrl : function (commentid) {
        return 'http://'+domain+'/ajax.php?op=Ajax_CommentFangKeShare&commentid='+commentid+'&random='+new Date().getTime();
    },
    getAjax_FangKe_BookOrder_RefundShowUrl : function (bookOrderId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKe_BookOrder_RefundShow&bookOrderId='+bookOrderId;
    },
    getAjax_SaveDefaultUserHeadImageUrl : function (imgId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SaveDefaultUserHeadImage&id='+imgId;
    },
    getAjax_SaveUserHeadImageUrl : function (imgurl, gcx, gcy, gcw, gch) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SaveUserHeadImage&imgurl='+encodeURIComponent(imgurl)+'&x='+gcx+'&y='+gcy+'&w='+gcw+'&h='+gch;
    },
    /*07-03*/
    getAjax_PostReplyUrl : function (replycontent,rcid,commentType) {
        return 'http://'+domain+'/ajax.php?op=Ajax_PostReply&content='+replycontent+'&rcid='+rcid+'&commentType='+commentType;
    },
    getAjax_PostReplyShareUrl : function (replyid) {
        return 'http://'+domain+'/ajax.php?op=Ajax_PostReplyShare&replyId='+replyid+'&random='+new Date().getTime();
    },
    getAjax_DelReplyUrl : function (replyid) {
        return 'http://'+domain+'/ajax.php?op=Ajax_DelReply&data='+replyid;
    },
    getAjax_DelCommentUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_DelComment';
    },
    getAjax_BookOrderCancelReasonUrl : function (bookorderId, rejectType, rejectText) {
        return 'http://'+domain+'/ajax.php?op=Ajax_BookOrderCancelReason&bookorderid='+bookorderId+'&cancelType='+rejectType+'&cancelReason='+encodeURIComponent(rejectText);
    },
    getAjax_FangKe_CheckInCodeVerifyUrl : function (bookorderId,code) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKe_CheckInCodeVerify&orderid='+bookorderId+'&code='+code;
    },
    getAjax_DelUserPaymentUrl : function (id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_DelUserPayment&id='+id;
    },
    getAjax_BankCityJsonUrl : function (provinceId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_BankCityJson&provinceid='+provinceId;
    },
    getAjax_BankJsonUrl : function (bankName,bankProviceId,bankCityId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_BankJson&banktypeid='+bankName+'&bankprovinceid='+bankProviceId+'&bankcityid='+bankCityId;
    },
    getAjax_CheckTenpayInfoParam : function (tenpayno,tenpayusername) {
        return 'http://'+domain+'/ajax.php?op=Ajax_CheckTenpayInfo&tenpayno='+tenpayno+'&tenpayusername='+tenpayusername;
    },
    getAjax_GetDefaultLandMarkUrl : function (cityDomain) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetDefaultLandMark&domain='+cityDomain;
    },
    /*08-19*/
    getAjax_CheckLodgeUnitUrl : function (cityDomain) {
        return 'http://'+domain+'/ajax.php?op=Ajax_CheckLodgeunit&luid='+cityDomain;
    },
    getAjax_CheckSearchConditionUrl : function (searchCity,cityDomain,startDate,endDate) {
        return 'http://'+domain+'/ajax.php?op=Ajax_CheckSearchCondition&searchCity='+searchCity+"&cityDomain="+cityDomain+"&startDate="+startDate+"&endDate="+endDate;
    },
    getAjax_BuildFilterSearchUrl : function (partner,startDate,endDate,citydomain,putkey,keywordType,keywordValue,checkedHouseType,checkedfacilities,checkedrentType,guestnum,price) {
        return 'http://'+domain+'/ajax.php?op=Ajax_BuildFilterSearch&partner='+partner+'&startDate='+startDate+'&endDate='+endDate+'&citydomain='+citydomain+'&putkey='+putkey+'&keywordType='+keywordType+'&keywordValue='+keywordValue+'&housetyperoomcnt='+checkedHouseType+'&facilities='+checkedfacilities+'&leasetype='+checkedrentType+'&guestnum='+guestnum+'&price='+price; 
    },
    getAjax_GetDatas4Map : function (partner,startDate,endDate,city,putkey,district,landmark,checkedHouseType,checkedfacilities,checkedrentType,guestnum,lowprice,highprice,pageNo,sort) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetDatas4Map&partner='+partner+'&startDate='+startDate+'&endDate='+endDate+'&city='+city+'&putkey='+putkey+'&district='+district+'&landmark='+landmark+'&housetyperoomcnt='+checkedHouseType+'&facilities='+checkedfacilities+'&leasetype='+checkedrentType+'&guestnum='+guestnum+'&lowprice='+lowprice+'&highprice='+highprice+'&pageno='+pageNo+'&sort='+sort; 
    },
    getAjax_GetMapDatasLodgeUnit : function (partner,startDate,endDate,city,putkey,district,landmark,checkedHouseType,checkedfacilities,checkedrentType,guestnum,lowprice,highprice,pageNo,sort,radius,lat,lng) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetDatas4MapLodgeUnit&partner='+partner+'&startDate='+startDate+'&endDate='+endDate+'&city='+city+'&putkey='+putkey+'&district='+district+'&landmark='+landmark+'&housetyperoomcnt='+checkedHouseType+'&facilities='+checkedfacilities+'&leasetype='+checkedrentType+'&guestnum='+guestnum+'&lowprice='+lowprice+'&highprice='+highprice+'&pageno='+pageNo+'&sort='+sort+'&radius='+radius+'&lat='+lat+'&lng='+lng; 
    },
    getAjax_getDatasMapLodgeunit4Page : function (partner,startDate,endDate,city,putkey,district,landmark,checkedHouseType,checkedfacilities,checkedrentType,guestnum,lowprice,highprice,pageNo,sort,radius,lat,lng) {
        return 'http://'+domain+'/ajax.php?op=Ajax_getDatasMapLodgeunit4Page&partner='+partner+'&startDate='+startDate+'&endDate='+endDate+'&city='+city+'&putkey='+putkey+'&district='+district+'&landmark='+landmark+'&housetyperoomcnt='+checkedHouseType+'&facilities='+checkedfacilities+'&leasetype='+checkedrentType+'&guestnum='+guestnum+'&lowprice='+lowprice+'&highprice='+highprice+'&pageno='+pageNo+'&sort='+sort+'&radius='+radius+'&lat='+lat+'&lng='+lng; 
    },
    getAjax_doFullTextSearch4Map : function (offset,url) {
        return 'http://'+domain+'/ajax.php?op=Ajax_doFullTextSearch4Map&offset='+offset+'&url='+encodeURIComponent(url);
    },
    getAjax_GetBookLodgeUnitDetailUrl : function (lodgeId,sameRoomNum,startDate,endDate) {
        return "http://"+domain+"/ajax.php?op=Ajax_GetBookLodgeUnitDetail&lodgeId="+lodgeId+"&sameRoomNum="+sameRoomNum+"&startdate="+startDate+"&enddate="+endDate+"&rand="+new Date().getTime();
    },
    getAjax_GetOrderPriceDetailUrl : function (bookOrderId) {
        return "http://"+domain+"/ajax.php?op=Ajax_GetOrderPriceDetail&bookOrderId="+bookOrderId+"&rand="+new Date().getTime();
    },
    getAjax_GetLazyInfoUrl : function (memkey,memtimeout,turl) {
        return "http://"+domain+"/ajax.php?op=Ajax_LoadInfo&memkey="+memkey+"&memtimeout="+memtimeout+"&turl="+turl;
    },
    getAjax_AddFeedbackUrl : function (problem,contact,imageParam) {
        return "http://"+domain+"/ajax.php?op=Ajax_Add_Feedback&problem="+problem+"&contact="+contact+"&imageParam="+imageParam;
    },
    getAjax_GetFeedbackUrl : function () {
        return "http://"+domain+"/ajax.php?op=Ajax_Get_Feedback";
    },




    getAjax_GetVerifyCode : function () {
        return "http://"+domain+"/ajax.php?op=AJAX_GetVerifyCode&nocache="+new Date().getTime();
    },
    getAjax_CheckMobileExist : function (mobile) {
        return 'http://'+domain+'/ajax.php?op=AJAX_CheckMobileExist&mobile=' + mobile;
    },
    getAjax_CheckRegistExist : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_CheckRegistExist';
    },
    getAjax_CheckUsernameExist : function (username) {
        return 'http://'+domain+'/ajax.php?op=AJAX_CheckUsernameExist&username=' + encodeURIComponent(username);
    },
    getAjax_CheckOldUsernameExist : function (username) {
        return 'http://'+domain+'/ajax.php?op=AJAX_CheckOldUsernameExist&username=' + username;
    },
    getAjax_CheckEmailExist : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_CheckEmailExist';
    },
    getAjax_CheckVerifyCode : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_CheckVerifyCode';
    },
    getAjax_SendActivateCode : function (mobile, verifyCode) {
        return 'http://'+domain+'/limajax/AJAX_SendActivateCode?mobile='+ mobile +'&verifycode='+ verifyCode + '&rand='+new Date().getTime();
    },
    getAjax_SendAmendPassCode : function (mobile, verifyCode) {
        return 'http://'+domain+'/limajax/AJAX_SendAmendPassCode?mobile='+ mobile +'&verifycode='+ verifyCode + '&rand='+new Date().getTime();
    },
    getAjax_CheckActiveCode : function (mobile,activateCode) {
        return 'http://'+domain+'/ajax.php?op=AJAX_CheckActivateCode&mobile='+mobile+'&activatecode='+activateCode +'&rand='+new Date().getTime();
    },
    getAjax_CheckInviteCode : function (inviteCode) {
        return 'http://'+domain+'/ajax.php?op=AJAX_CheckInviteCode&invitecode='+inviteCode;
    },
    getAjax_SendConfirmCode : function (mobile, verifyCode) {
        return 'http://'+domain+'/ajax.php?op=AJAX_SendConfirmCode&mobile='+ mobile +'&verifycode='+ verifyCode + '&rand='+new Date().getTime();
    },
    getAjax_SendQuickLoginCode : function(mobile, verifyCode){
        return 'http://'+domain+'/ajax.php?op=AJAX_SendQuickLoginCode&mobile='+ mobile +'&verifycode='+ verifyCode + '&rand='+new Date().getTime();
    },
    getAjax_CheckConfirmCode : function (mobile,confirmCode) {
        return 'http://'+domain+'/ajax.php?op=AJAX_CheckConfirmCode&mobile='+mobile+'&confirmcode='+confirmCode +'&rand='+new Date().getTime();
    },
    getAjax_VerifyCodeFirstShow : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_VerifyCodeFirstShow&rand='+new Date().getTime();
    },
    getAjax_Login : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_Login';
    },
    getAjax_LoginMobile : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_LoginMobile';
    },
    getAjax_RegisterByMobile : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_RegisterByMobile';
    },
    getAjax_RegisterByEmail : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_RegisterByEmail';
    },
    getAjax_FindPasswordByEmail : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_ResetPasswordByEmail';
    },
    getAjax_ResetPasswordFromEmail : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_ResetPasswordFromEmail';
    },
    getAjax_SendRegValidateEmailUrl : function(email,next){
        return 'http://'+domain+'/ajax.php?op=AJAX_SendRegValidateEmail&email='+encodeURIComponent(email)+'&next='+encodeURIComponent(next)+'&random='+new Date().getTime();
    },
    getAjax_FindPasswordByMobile : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_ResetPasswordByMobile';
    },
    getAjax_AmendPasswordByMobile : function (){
        return 'http://'+domain+'/ajax.php?op=AJAX_AmendPasswordByMobile';
    },
    getAjax_AmendPasswordByEmail : function (){
        return 'http://'+domain+'/ajax.php?op=AJAX_AmendPasswordByEmail';
    },
    getAjax_BindOpenAccount : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_BindOpenAccount';
    },
    getAjax_OpenAccountRegister : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_OpenAccountRegister';
    },
    getAjax_ReSendActiveEmail : function (uid, uidtoken) {
        return 'http://'+domain+'/ajax.php?op=Ajax_ReSendActiveEmail&uid=' + uid + '&uidtoken=' + uidtoken;
    },
    getAjax_ChangeActiveEmail : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_ChangeActiveEmail';
    },














    getAjax_CheckNickNameUrlNoParam: function () {
        return "http://"+domain+"/ajax.php?op=Ajax_CheckNickName";
    },

    getAjax_GetPicCheckCodeShowUrl : function () {
        return "http://"+domain+"/ajax.php?op=AJAX_PicCheckCodeShow&nocache="+new Date().getTime();
    },
    getAjax_GetSendMessageAppDownloadUrl: function (mobile,checkcode) {
        return "http://"+domain+"/ajax.php?op=Ajax_Send_Message_App_Download_Url&mobile="+mobile+"&checkcode="+checkcode+"&rand="+new Date().getTime();
    },
    getAjax_SendSms4AppDownloadUrl: function (mobile,checkcode,apptype) {
        return "http://"+domain+"/ajax.php?op=Ajax_SendSms4AppDownload&mobile="+mobile+"&checkcode="+checkcode+"&apptype="+apptype+"&rand="+new Date().getTime();
    },
    getAjax_CheckUserPasswordUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_CheckUserPassword';
    },
    getAjax_CheckPhone : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_CheckPhone';
    },
    getAjax_CheckEmailUrl: function (email) {
        return "http://"+domain+"/ajax.php?op=Ajax_CheckEmail&email="+email+"&random="+new Date().getTime();
    },
    getAjax_CheckEmailUrlNoParam: function () {
        return "http://"+domain+"/ajax.php?op=Ajax_CheckEmail";
    },
    getAjax_SendActiveEmailUrl: function (email) {
        return "http://"+domain+"/ajax.php?op=Ajax_Send_Active_Email&email="+email;
    },
    getAjax_ReadSysNoticeUrl: function (messageId) {
        return "http://"+domain+"/ajax.php?op=Ajax_ReadSysNotice&msgId="+messageId;
    },
    getAjax_DelSysNoticeUrl : function (messageId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_DelSysNotice&msgId='+messageId;
    },
    getAjax_SetChatReplyUrl : function (replys) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetChatReply&data='+encodeURIComponent(replys)+'&_t='+new Date().getTime();
    },
    getAjax_ResetChatReplyUrl : function (replys) {
        return 'http://'+domain+'/ajax.php?op=Ajax_ResetChatReply&data='+encodeURIComponent(replys)+'&_t='+new Date().getTime();
    },
    getAjax_SmsCheckCodeSendUrl : function (phonenum,imagecode,aisle) {
        return 'http://'+domain+'/ajax.php?op=AJAX_SmsCheckCodeSend&phone='+phonenum+'&checkcode='+imagecode+'&aisle='+aisle;
    },
    getAjax_SetUserPhoneCodeUrl : function (phonenum,phonecode,type) {
        if('undefined' !== typeof type)
        {
            return 'http://'+domain+'/ajax.php?op=Ajax_SetUserPhoneCode&phone='+phonenum+'&phonecode='+phonecode+'&type='+type;
        }else
        {
            return 'http://'+domain+'/ajax.php?op=Ajax_SetUserPhoneCode&phone='+phonenum+'&phonecode='+phonecode;
        }
    },
    getAjax_SmsCheckCodeVerifyUrl : function (phonenum,phonecode) {
        return 'http://'+domain+'/ajax.php?op=AJAX_SmsCheckCodeVerify&phone='+phonenum+'&phonecode='+phonecode;
    },
    getAjax_Front_SendPhoneCode : function (phonenum,imagecode,aisle) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SendPhoneCode&phone='+phonenum+'&checkcode='+imagecode+'&aisle='+aisle+'&rand='+new Date().getTime();
    },
    getAjax_Front_SendPhoneCodeByPhone : function (phonenum,imagecode,aisle) {
        return 'http://'+domain+'/ajax.php?op=AJAX_SendPhoneCodeByPhone&phone='+phonenum+'&checkcode='+imagecode+'&aisle='+aisle+'&rand='+new Date().getTime();
    },
    getAjax_PhoneIsNotExist_PhoneIsLoginUserUrl : function (phonenum) {
        return 'http://'+domain+'/ajax.php?op=AJAX_PhoneIsNotExist_PhoneIsLoginUser&phone='+phonenum;
    },
    getAjax_UnbindSnsOpenIdUrl : function (shareType) {
        return 'http://'+domain+'/ajax.php?op=AJAX_UnbindSnsOpenId&shareType='+shareType;
    },
    getAjax_FangKeOrderList_OrderByTimeUrl : function (ordertype, createtype, p) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKeOrderList_OrderByTime&orderType='+ordertype+'&bookOrderCreateType='+createtype+'&p='+p+'&random='+new Date().getTime();
    },
    getAjax_FangKe_BookOrder_RefundDetailUrl : function (bookOrderId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKe_BookOrder_RefundDetail&bookOrderId='+bookOrderId;
    },
    getAjax_FangKe_InsurancePlanUrl : function (bookOrderTenantId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKe_InsurancePlan&bookOrderTenantId='+bookOrderTenantId;
    },
    getAjax_FangKe_RejectCashPledgeUrl : function (bookOrderId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKe_RejectCashPledge&bookOrderId='+bookOrderId;
    },
    getAjax_FangKe_ConfirmCashPledgeUrl : function (bookOrderId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKe_ConfirmCashPledge&bookOrderId='+bookOrderId;
    },
    getAjax_FangKe_ServiceCashPledgeUrl : function (bookOrderId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKe_ServiceCashPledge&bookOrderId='+bookOrderId;
    },

    getAjax_GetMoreTalkUrl : function (talkid,rows,requestTime) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetMoreTalk&talkid='+talkid+'&rows='+rows+'&_t='+requestTime;
    },
    getAjax_GetSettleAccountDetailUrl : function (orderId,pageNo) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetSettleAccountDetail&orderId='+orderId+'&p='+pageNo;
    },
    getAjax_FangDong_LuPromotionConditionUrl : function (luid) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangDong_LuPromotionCondition&luid='+luid+'&random='+new Date().getTime();
    },
    getAjax_FangDong_CancelPromotionUrl : function (luid) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangDong_CancelPromotion&luid='+luid+'&random='+new Date().getTime();
    },
    getAjax_FangDong_SelfPromotionUrl : function (luid,avgprice,selfpromotiondiscount,enddate) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangDong_SelfPromotion&luid='+luid+'&avgPrice='+avgprice+'&discount='+selfpromotiondiscount+'&endDay='+enddate+'&random='+new Date().getTime();
    },
    getAjax_ConvertRedPackageUrl : function (userid,convertvalue) {
        return 'http://'+domain+'/ajax.php?op=Ajax_ConvertRedPackage&userid='+userid+'&convertvalue='+convertvalue+'&_t='+new Date().getTime();
    },
    getAjax_FangDong_TenantAuthentication2GuoZhengTongUrl : function (tenantid,realname,cardno) {
        return "http://"+domain+"/ajax.php?op=Ajax_FangDong_TenantAuthentication2GuoZhengTong&tenantid="+tenantid+"&realname="+realname+"&cardno="+cardno;
    },
    getAjax_ShowNewLetterUrl : function (content) {
        return 'http://'+domain+'/ajax.php?op=Ajax_ShowNewLetter&content='+encodeURIComponent(content);
    },
    getAjax_DelTalkUrl : function (talkid) {
        return 'http://'+domain+'/ajax.php?op=Ajax_DelTalk&delid='+talkid;
    },
    getAjax_SetTenpayInfoUrl : function (tenpayno,tenpayusername,balanceForm) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetTenpayInfo&tenpayno='+tenpayno+'&tenpayusername='+tenpayusername+'&balanceform='+balanceForm;
    },
    getAjax_CheckAlipayInfoUrl : function (alipayno,alipayusername) {
        return 'http://'+domain+'/ajax.php?op=Ajax_CheckAlipayInfo&alipayno='+alipayno+'&alipayusername='+alipayusername;
    },
    getAjax_SaveAlipayInfoUrl : function (alipayno,alipayusername) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SaveAlipayInfo&alipayno='+alipayno+'&alipayusername='+alipayusername;
    },
    getAjax_SetAlipayInfoUrl : function (alipayno,alipayusername,balanceForm,id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetAlipayInfo&alipayno='+alipayno+'&alipayusername='+alipayusername+'&balanceform='+balanceForm+'&id='+id;
    },
    getAjax_SetDefaultUserPaymentUrl : function (id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetDefaultUserPayment&id='+id;
    },
    getAjax_SetNationalSecurityInfo : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetNationalSecurityInfo';
    },
    getAjax_FangDong_DelMyRoomsUrl : function (roomId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangDong_MyRooms_Del&lodgeunitid='+roomId;
    },
    getAjax_FangDong_MyRoomsSwithStateUrl : function (roomId,switchstr) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangDong_MyRooms_SwithState&lodgeunitid='+roomId+'&switchval='+switchstr+'&random='+new Date().getTime();
    },
    getAjax_FangDong_MyPartRoomsUrl : function (lodgeId,pageNo) {
        return 'http://'+domain+'/ajax.php?op=AJAX_FangDong_MyPartRooms&parentId='+lodgeId+'&p='+pageNo;
    },
    getAjax_SetLodgeUnitCalendarUrl : function (lodgeUnitId, startDate, endDate, subPrice, bookable, roomnum) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetLodgeUnitCalendar&lodgeunitid='+lodgeUnitId+'&startdate='+startDate+'&enddate='+endDate+'&price='+subPrice+'&bookable='+bookable+'&housenum='+roomnum+'&random='+new Date().getTime();
    },
    getAjax_GetLodgeUnitPromotionUrl : function (lodgeUnitId, startdate, enddate) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetLodgeUnitPromotion&lodgeunitid='+lodgeUnitId+'&startdate='+startdate+'&enddate='+enddate;
    },
    getAjax_GetLodgeUnitCalendarUrl : function (lodgeUnitId, startdate, enddate, vstartdate) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetLodgeUnitCalendar&lodgeunitid='+lodgeUnitId+'&startdate='+startdate+'&enddate='+enddate+'&editable=true&_vstartdate='+vstartdate+'&_t='+new Date().getTime();
    },
    getAjax_GetLodgeUnitCalendar : function (lodgeUnitId, startdate, enddate,calendarCode) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetLodgeUnitCalendar&lodgeunitid='+lodgeUnitId+'&startdate='+startdate+'&enddate='+enddate+'&calendarCode='+calendarCode+'&_t='+new Date().getTime();
    },
    getAjax_CheckCalendarVerifyCodeUrl : function(luId,verifyCode){
        return 'http://'+domain+'/ajax.php?op=Ajax_CheckCalendarVerifyCode&luid='+luId+'&calendarCode='+verifyCode;
    },
    getAjax_SetLodgeUnitDayPriceUrl : function (lodgeUnitId, price) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetLodgeUnitDayPrice&lodgeunitid='+lodgeUnitId+'&price='+price+"&_t="+new Date().getTime();
    },
    getAjax_SetLodgeUnitWeekPriceUrl : function (lodgeUnitId, monValue,tueValue,wedValue,thuValue,friValue,satValue,sunValue,startDate,endDate) {
        return "http://"+domain+"/ajax.php?op=Ajax_SetLodgeUnitWeekPrice&lodgeunitid="+lodgeUnitId+"&mon="+monValue+"&tue="+tueValue+"&wed="+wedValue+"&thu="+thuValue+"&fri="+friValue+"&sat="+satValue+"&sun="+sunValue+"&startdate="+startDate+"&enddate="+endDate+"&_t="+new Date().getTime();
    },
    getAjax_FangDong_WeekMonthPromotionUrl : function (lodgeUnitId, discountPerWeek,discountPerMonth) {
        return "http://"+domain+"/ajax.php?op=Ajax_FangDong_WeekMonthPromotion&lodgeunitid="+lodgeUnitId+"&discountperweek="+discountPerWeek+"&discountpermonth="+discountPerMonth+"&_t="+new Date().getTime();
    },
    getAjax_SetLodgeUnitDateIntervalPriceUrl : function (lodgeUnitId, price) {
        return "http://"+domain+"/ajax.php?op=Ajax_SetLodgeUnitDateIntervalPrice&lodgeunitid="+lodgeUnitId+"&price="+price+"&_t="+new Date().getTime();
    },
    getAjax_GetLodgeUnitPromotionUrl: function (lodgeUnitId, startdate, enddate) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetLodgeUnitPromotion&lodgeunitid='+lodgeUnitId+'&startdate='+startdate + '&enddate='+enddate;
    },
    getAjax_FangDong_EditOrderPriceUrl: function () {
        return "http://"+domain+"/ajax.php?op=Ajax_FangDong_EditOrderPrice";
    },
    getAjax_Pub_GetStepPreviewUrl: function (step,houseId,roomId) {
        return "http://"+domain+"/ajax.php?op=Ajax_Pub_GetStep"+step+"_Preview&houseId="+houseId+"&roomId="+roomId+"&_t="+new Date().getTime();
    },
    getAjax_Pub_GetStepEditUrl: function (step,houseId,roomId) {
        return "http://"+domain+"/ajax.php?op=Ajax_Pub_GetStep"+step+"&houseId="+houseId+"&roomId="+roomId+"&_t="+new Date().getTime();
    },
    getAjax_FangKe_BookOrder_RefundSubmitUrl : function (bookOrderId, cancelBookOrderType, cancelBookOrderReason) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKe_BookOrder_RefundSubmit&bookOrderId='+bookOrderId+'&cancelBookOrderType='+cancelBookOrderType+'&cancelBookOrderReason=' + encodeURIComponent(cancelBookOrderReason);
    },
    getAjax_Pub_GetCityJson : function (province_id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_getCityJson&provinceid='+province_id+'&_t=' + new Date().getTime();
    },
    getAjax_Pub_GetDistrictJson : function (city_id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_getDistrictJson&cityid='+city_id+'&_t=' + new Date().getTime();
    },
    getAjax_Pub_GetStreetJson : function (district_id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_getLocaltion&districtid='+district_id+'&_t=' + new Date().getTime();
    },
    getAjax_Pub_CheckAlipayInfo : function (alipayno,alipayusername) {
        return 'http://'+domain+'/ajax.php?op=Ajax_CheckAlipayInfo&alipayno='+alipayno+'&alipayusername='+encodeURIComponent(alipayusername);
    },
    getAjax_Pub_SaveAlipayInfo : function (alipayno,alipayusername) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SaveAlipayInfo&alipayno='+alipayno+'&alipayusername='+encodeURIComponent(alipayusername);
    }, 
    getAjax_Pub_SetAlipayInfo : function (alipayno,alipayusername,balanceForm) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetAlipayInfo';
        //return 'http://'+domain+'/ajax.php?op=Ajax_SetAlipayInfo&alipayno='+alipayno+'&alipayusername='+alipayusername+'&alipaybalanceform='+balanceForm;
    },
    getAjax_Pub_PreBankPayMent_Submit : function (bankname,bankprovice,bankcity,bankaccountid,bankbranchname,pubpri,bankbranchtex,bankaccountname) {
        return 'http://'+domain+'/ajax.php?op=Ajax_PUB_PreBanckPayMent_Submit&bankname='+bankname+'&bankprovice='+bankprovice+'&bankcity='+bankcity+'&bankaccountid='+bankaccountid+'&bankbranchname='+bankbranchname+'&pubpri='+pubpri+'&bankbranchtext='+bankbranchtex+'&bankaccountname='+bankaccountname;
    },
    getAjax_Pub_Set_SelfPromotion : function (luid) {
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_Set_SelfPromotion&luid='+luid;
    },
    getAjax_Pub_CutImage : function (url,width,height) {
        return 'http://'+domain+'/ajax.php?op=Ajax_CutImage&key='+url+'&_w='+width+'&_h='+height;
    },
    getAjax_Pub_UploadCutAfterIamge : function (key,value) {
        return 'http://'+domain+'/ajax.php?op=Ajax_uploadCutAfterImage&key='+key+'&value='+value;
    },
    getAjax_Pub_PreGetUserHeadImg : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_PUB_PreGetUserHeadImg';
    },
    getPub_Step1_SubmitSave : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_HouseDetail_Submit';
    },
    getPub_Step1_RoomBase_SubmitSave : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_RoomBase_Submit';
    },
    getPub_Step2_SubmitSave : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_RoomDetail_Submit';
    },
    getPub_Step3_SubmitSave : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_RoomFacilities_Submit';
    },
    getPub_Step4_SubmitSave : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_RoomPicture_Submit';
    },
    getPub_Step5_SubmitSave : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_RoomPrice_SubmitSave';
    },
    getAjax_RoomProcessPass : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_RoomProcessPass&roomId='+roomId;
    },
    getPub_HouseDetail : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_GetStep1map&roomId='+roomId;
    },
    getPub_PreviewHouseDetail : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_GetStep1map_Preview&roomId='+roomId;
    },
    getPub_PreviewHouseRoomDetail : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_PreviewHouseRoomDetail&roomId='+roomId;
    },
    getPub_Preview_HouseRoomDetail : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_Preview_HouseRoomDetail&roomId='+roomId;
    },
    getPub_PreviewDetail : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_PreviewDetail&roomId='+roomId;
    },
    getPub_Preview_RoomDetail : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_Preview_RoomDetail&roomId='+roomId;
    },
    getPub_PreviewFacilities : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_PreviewFacilities&roomId='+roomId;
    },
    getPub_Preview_RoomFacilities : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_Preview_RoomFacilities&roomId='+roomId;
    },
    getPub_PreviewPicture : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_PreviewPicture&roomId='+roomId;
    },
    getPub_Preview_RoomPicture : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_Preview_RoomPicture&roomId='+roomId;
    },
    getPub_PreviewPrice : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_PreviewPrice&roomId='+roomId+'&room_type=2';
    },
    getPub_Preview_Price : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_Preview_RoomPrice&roomId='+roomId;
    },
    getPub_PreviewPriceQequest : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_PreviewPriceQequest&roomId='+roomId+'&room_type=3';
    },
    getPub_Preview_PriceQequest : function(roomId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_Preview_RoomPriceQequest&roomId='+roomId;
    },
    getPub_Preview_Success : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_Preview_Success';
    },
    getPub_LodgeUnitSite : function(houseId){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_GetLodgeUnitSite&houseId='+houseId+'&rand='+Math.random();
    },
    getPub_LodgeUnitSite_Save : function(houseId,provinceId,cityId,districtId,inputAddress,latlng,doorNumber){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_GetLodgeUnitSite_Save&houseId='+houseId+'&provinceId='+provinceId+'&cityId='+cityId+'&districtId='+districtId+'&inputAddress='+inputAddress+'&latlng='+latlng+'&doorNumber='+doorNumber+'&rand='+Math.random();
    },
    getPub_EditAddress : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_Pub_EditAddress';
    },
    getFront_Map_GetMapData : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetMapData';
    },
    getFront_Map_GetSubway4Map : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetSubway4Map';
    },
    getFront_Map_CheckSearchCondition : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_CheckSearchCondition';
    },
    getAjax_Map_GetLandMarkSuggestion : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_getLandMarkSuggestion';
    },
    getAjax_FangDong_SetAutoCheck : function (isAutoCheck) {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetAutoCheck&isAutoCheck=' + isAutoCheck;
    },
    getAjax_Front_GetCancelRule : function (luid,roomNum,startDate,endDate) {
        return 'http://'+domain+'/ajax.php?op=AJAX_GetCancelRule&luid='+luid+'&roomNum='+roomNum+'&startdate='+startDate+'&enddate='+endDate+'&rand='+new Date().getTime();
    },
    getAjax_Front_GetBookAbleRoomNum : function (lodgeId,startDate,endDate) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetBookAbleRoomNum&lodgeunitid='+lodgeId+'&startdate='+startDate+'&enddate='+endDate;
    },
    getAjax_Front_GetRoomBookAble : function (lodgeId,sameRoomNum,startDate,endDate,bookOrderId,version) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetRoomBookAble&lodgeId='+lodgeId+'&sameRoomNum='+sameRoomNum+'&startdate='+startDate+'&enddate='+endDate+'&bookorderid='+bookOrderId+'&version='+version+'&rand='+new Date().getTime();
    },
    getAjax_Front_GetTotalPrice4BookOrder : function (lodgeId,sameRoomNum,startDate,endDate) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetTotalPrice4BookOrder&lodgeId='+lodgeId+'&sameRoomNum='+sameRoomNum+'&startdate='+startDate+'&enddate='+endDate+'&rand='+Math.floor(Math.random()*10000);
    },
    getAjax_Front_PicCheckCodeVerify : function (checkcode,phone) {
        return 'http://'+domain+'/ajax.php?op=AJAX_PicCheckCodeVerify&checkcode='+checkcode+'&phone='+phone;
    },
    getAjax_Front_UpdateLoginUser : function (name,sex) {
        return 'http://'+domain+'/ajax.php?op=AJAX_UpdateLoginUser&realName='+encodeURIComponent(name)+'&sex='+sex+'&random='+new Date().getTime();
    },
    getAjax_Front_PhoneIsLoginUser : function (mobile,name,sex) {
        return 'http://'+domain+'/ajax.php?op=AJAX_PhoneIsLoginUser&mobile='+mobile+'&realName='+encodeURIComponent(name)+'&sex='+sex+'&random='+new Date().getTime();
    },
    getAjax_Front_CollegeStudentShare : function (status,image,state,objId,objType,friendName,phone,phonecode,email) {
        return 'http://'+domain+'/ajax.php?op=SendCollegeStudentShare&status='+status+'&image='+image+'&state='+state+'&objId='+objId+'&objType='+objType+'&friendName='+friendName+"&phone="+phone+"&phonecode="+phonecode+"&email="+email;
    },
    getAjax_Front_PhoneIsNotExist_PhoneIsLoginUser : function (value) {
        return 'http://'+domain+'/ajax.php?op=AJAX_PhoneIsNotExist_PhoneIsLoginUser&phone='+value+'&rand='+new Date().getTime();
    },
    getAjax_Front_GaoXiao_RoomComment : function (luid) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetComment4GaoXiao&luid='+luid;
    },
    getWeb_FangDong_CommentUrl : function (filter) {
        return 'http://'+domain+'/xzweb.php?op=FangDong_Comment&filter='+filter;
    },
    getAjax_Front_UserTenantList : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangKe_UserTenant&rand='+new Date().getTime();
    },
    getWeb_FangKe_CommentUrl : function () {
        return 'http://'+domain+'/xzweb.php?op=FangKe_Comment';
    },
    getAjax_FD_DelDiaryUrl : function (id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FD_DelDiary&id='+id;
    },
    getAJAX_FD_RealNameVerifyImgSubUrl : function (data,flag) {
        return 'http://'+domain+'/ajax.php?op=AJAX_FD_RealNameVerifyImgSub&data=' + data +"&flag=" + flag;
    },
    getFangDong_CutSpecialHeadImageFrameUrl : function (imageUrl,markdw,markdh) {
        return 'http://'+domain+'/xzweb.php?op=FangDong_CutSpecialHeadImageFrame&imageUrl=' + imageUrl + '&markdw=' + markdw + '&markdh=' + markdh;
    },
    getAjax_FD_SaveSpecialHeadImage : function (cutx,cuty,cutw,cuth,oriw,orih,oriurl,cutbkgw,cutbkgh,imgIntro) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FD_SaveSpecialHeadImage&cutx=' + cutx +"&cuty=" + cuty + "&cutw=" + cutw + "&cuth=" + cuth + "&oriw=" + oriw + "&orih=" + orih + "&oriurl=" + oriurl + "&cutbkgw=" + cutbkgw + "&cutbkgh=" + cutbkgh + "&imgIntro=" + encodeURIComponent(imgIntro);
    },
    getAjax_FD_DiaryCountUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_FD_DiaryCount';
    },
    getAjax_FD_Special_OfflineUrl : function (id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FD_Special_Offline&id=' + id;
    },
    getAjax_FD_Special_OnlineUrl : function (id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FD_Special_Online&id=' + id;
    },
    getAjax_FD_RealNameVerifySubUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_FD_RealNameVerifySub';
    },
    getAjax_FD_Diary_ToTopUrl : function (id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FD_Diary_ToTop&id=' + id;
    },
    getAjax_FD_Diary_ToTop_CountUrl : function (id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FD_Diary_ToTop_Count';
    },
    getFDDiaryUploadImgUrl : function () {
        return 'http://'+domain+'/imgin4ImageText.php';
    },
    getAjax_GetTenantTagsUrl: function (tenantId) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetTenantTags&tenantid=' + tenantId;
    },
    getAjax_UpdateSelfIntroUrl: function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_UpdateSelfIntro';
    },
    getAjax_UpdateCheckInInfoDisplayTypeUrl: function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_UpdateCheckInInfoDisplayType';
    },
    getAjax_GetTenantSpecialHeadImgsUrl: function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetTenantSpecialHeadImgUrl';
    },
    getAjax_SetTenantSpecialHeadImgUrl: function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetTenantSpecialHeadImgUrl';
    },
    getAjax_SearchLodgeUnit : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_SearchLodgeUnit';
    },
    getWeb_NeedPub: function (cityDomain, startDate, endDate) {
        return 'http://'+domain+'/xzweb.php?op=Front_Need_Pub&startDate='+startDate+'&endDate='+endDate+'&searchcity='+cityDomain;
    },
    getWeb_NeedPubSubmit : function () {
        return 'http://'+domain+'/xzweb.php?op=Front_Need_Pub_Submit';
    },
    getAjax_SetTenantNeedResponseStatus : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetTenantNeedResponseStatus';
    },
    getAjax_SetTenantNeedTimeOutStatus : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetTenantNeedTimeOutStatus';
    },
    getAjax_NeedLodgeunit : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_getNeedLodgeunit';
    },
    getAjax_NeedLandlord : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_getNeedLandlord';
    },
    getAjax_ValidNeedCount : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_ValidNeedCount';
    },
    getFront_Login : function (next) {
        return 'http://'+topLevelDomain+'/login?next='+next;
    },
    getAjax_MakeAgeInfo : function (year,month,day) {
        return 'http://'+domain+'/ajax.php?op=Ajax_MakeAgeInfo&year='+year+'&month='+month+'&day='+day;
    },
    getAjax_CookieNoSubmitUsernameAndEmail : function (username,email) {
        return 'http://'+domain+'/ajax.php?op=Ajax_CookieNoSubmitUsernameAndEmail&username='+username+'&email='+email;
    },
    getAjax_IncreaseGuideVisits : function (guideType) {
        return 'http://'+domain+'/ajax.php?op=Ajax_IncreaseGuideVisits&type='+guideType+'&random='+ new Date().getTime();
    },
    getAjax_FK_OperatorTenantNeedOrderUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_FK_OperatorTenantNeedOrder';
    },
    getAjax_FD_OperatorTenantNeedOrderUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_FD_OperatorTenantNeedOrder';
    },
    getAjax_GetTenantNeedOrderPriceDetailUrl : function (id) {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetTenantNeedOrderPriceDetail&tenantNeedOrderId=' + id + "&rand="+new Date().getTime();
    },
    getAJAX_TenantNeedOrderPaySynLockCheckUrl : function () {
        return 'http://'+domain+'/ajax.php?op=AJAX_TenantNeedOrderPaySynLockCheck';
    },
    getAjax_FD_EditTenantNeedOrderPriceUrl: function () {
        return "http://"+domain+"/ajax.php?op=Ajax_FD_EditTenantNeedOrderPrice";
    },
    getAjax_InviteFriendByEmailUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_InviteFriendByEmail';
    },
    getAjax_GetReferrerLandlordsUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetReferrerLandlords';
    },
    getAjax_doSettleUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_doSettle';
    },
    getAjax_SetBankPaymentSubUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_SetBankPaymentSub';
    },
    getAjax_setAlipaymentSubUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_setAlipaymentSub';
    },
    getAjax_TenantDoSettleUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_TenantDoSettle';
    },
    getAjax_LandlordDirectsellSettleRecordDataUrl : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_GetLandlordDirectsellSettleRecordData';
    },
    getAjax_ShareAfter : function (objId,objType,shareContentType,channel) {
        return 'http://'+domain+'/ajax.php?op=Ajax_ShareAfter&objid='+objId+'&objtype='+objType+'&sharecontenttype='+shareContentType+'&channel='+channel;
    },
    getAjax_Exam : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_do_FangDong_Examination';
    },
    getAjax_Add_Cui : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangDong_Special_Add_Urge';
    },
    getAjax_FangkeInBlackList : function (mobile,cardNo) {
        return 'http://'+domain+'/ajax.php?op=Ajax_FangkeInBlackList&mobile='+mobile+'&cardNo='+cardNo;
    },
    getAjax_BookOrder_EditUserInfo : function (password,nickname) {
        return 'http://'+domain+'/ajax.php?op=Ajax_BookOrder_EditUserInfo&password='+password+'&nickname='+nickname;
    },
    getAjax_jsErrorLogger : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_JsErrorLogger';
    },
    getAjax_BookOrder_CheckState : function (lodgeId,sameRoomNum,startDate,endDate,bookOrderId,version) {
        return "http://"+domain+"/ajax.php?op=Ajax_BookOrder_CheckState&luid="+lodgeId+"&roomnum="+sameRoomNum+"&startdate="+startDate+"&enddate="+endDate+'&bookOrderId='+bookOrderId+'&version='+version+"&rand="+new Date().getTime();
    },
    getAjax_1yuanAutumnStatus : function () {
        return "http://"+domain+"/ajax.php?op=autumnDeep1yuanInStatus&time="+new Date().getTime();
    },
    getAjax_Add_Zan : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_Add_Zan';
    },
    getAjax_sendCoupon4AprilFoolDay : function () {
        return 'http://'+domain+'/ajax.php?op=Ajax_sendCoupon4AprilFoolDay';
    },
    getAjax_BookPayIntegralCoupon : function (bookorderid){
       return 'http://'+domain+'/ajax.php?op=Ajax_BookPayIntegralCoupon&bookorderid='+bookorderid;  
    },
    getAjax_CouponInfo: function (couponid){
       return 'http://'+domain+'/ajax.php?op=Ajax_GetCouponInfo&couponid='+couponid;    
    },
    getAjax_BookPayAbleCoupon: function (bookorderid){
       return 'http://'+domain+'/ajax.php?op=Ajax_BookPayAbleCoupon&bookorderid='+bookorderid;    
    },
    getWeb_FangKe_CheckCommentUrl: function (bookorderid){
       return 'http://'+domain+'/ajax.php?op=Ajax_CommitCheck&bookorderid='+bookorderid;    
    },
    getAddBillSubUrl : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_FK_AddBillSub';
    },
    getUserBillHistoryUrl : function(pageNum){
        return 'http://'+domain+'/ajax.php?op=Ajax_FK_BillHis&p='+pageNum+'&rand='+Math.random();
    },
    getCancelBillUrl : function(id){
        return 'http://'+domain+'/ajax.php?op=Ajax_FK_BillCancel&id='+id;
    },
    getAddBillUrl : function(){
        return 'http://'+domain+'/ajax.php?op=Ajax_FK_AddBill&rand='+Math.random();
    },
    getAjax_drawLottery4NoonBreakUrl : function (district,address){
        return 'http://'+domain+'/ajax.php?op=Ajax_DrawLottery4NoonBreak&district='+district+'&address='+address+'&rand='+Math.random();
    },
    getAjax_getNoonBreakAwardUrl : function (name,mobile,sleepTime){
        if(name && mobile && sleepTime){
            return 'http://'+domain+'/ajax.php?op=Ajax_getNoonBreakAward&name='+encodeURI(name)+'&mobile='+mobile+'&sleepTime='+sleepTime+'&rand='+Math.random();
        } else {
            return 'http://'+domain+'/ajax.php?op=Ajax_getNoonBreakAward&rand='+Math.random();
        }
    },
    getAjax_getAvaliableCarBedUrl : function (){
        return 'http://'+domain+'/ajax.php?op=Ajax_getAvaliableCarBed&rand='+Math.random();
    },
    getAjax_LuckerList4NoonBreakUrl : function (){
        return 'http://'+domain+'/ajax.php?op=Ajax_LuckerList4NoonBreak&rand='+Math.random();
    },
    getAjaxAddFavorite: function (loginUserid,lodgeUnitId){
       return 'http://'+domain+'/ajax.php?op=Ajax_AddFavorite&loginUserid='+loginUserid+'&lodgeUnitId='+lodgeUnitId+'&rand='+new Date().getTime();    
    },
    getAjaxCancelFavorite: function (lodgeUnitId){
       return 'http://'+domain+'/ajax.php?op=Ajax_CancelFavorite&lodgeUnitId='+lodgeUnitId+'&rand='+new Date().getTime();    
    },
    getAjaxGetZhiMaNoCashPledgeList: function (cityId){
       return 'http://'+domain+'/ajax.php?op=Ajax_getZhiMaNoCashPledgeList&cityId='+cityId+'&rand='+new Date().getTime();    
    },
    getAjaxApplyCashPledgeByLandlordUrl : function(bookOrderId,pledge2Landlord,reason){
       return 'http://'+domain+'/ajax.php?op=Ajax_FD_ApplyCashPledge&bookOrderId='+bookOrderId+'&pledge2Landlord='+pledge2Landlord+'&reason='+encodeURIComponent(reason)+'&rand='+new Date().getTime();
    },
    getAjaxCancelCashPledgeByLandlordUrl : function(bookOrderId){
       return 'http://'+domain+'/ajax.php?op=Ajax_FD_CancelCashPledge&bookOrderId='+bookOrderId+'&rand='+new Date().getTime();
    },
    getAjaxApplyServiceByLandlordUrl : function(bookOrderId){
       return 'http://'+domain+'/ajax.php?op=Ajax_FD_ApplyService4CashPledge&bookOrderId='+bookOrderId+'&rand='+new Date().getTime();
    },
    getReturnCashPledgeUrl : function(bookOrderId){
       return 'http://'+domain+'/ajax.php?op=Ajax_FD_ReturnCashPledge&bookOrderId='+bookOrderId+'&rand='+new Date().getTime();
    },
    getAJAX_GetLodgeUnitCalendar : function (luid,startDate,endDate,editable,calendarCode){
        return 'http://'+domain+'/ajax.php?op=AJAX_GetLodgeUnitCalendar&lodgeunitid='+luid+'&startdate='+startDate+'&enddate='+endDate+'&editable='+editable+'&calendarCode='+calendarCode+'&rand='+Math.random();
    },
    getAJAX_ActivitySanyaXiamen : function (){
        return 'http://'+domain+'/yunying.php?op=YunYing_luckyDraw&rand='+Math.random();
    },
    getAJAX_ActivitySanyaXiamenShare : function (){
        return 'http://'+domain+'/yunying.php?op=YunYing_shareLuckyDraw&rand='+Math.random();
    },
    getAJAX_applyCleanService : function (){
        return 'http://'+domain+'/ajax.php?op=Ajax_applyCleanService';
    },
    getAJAX_getMsCoupon : function (){
        return 'http://'+domain+'/ajax.php?op=Ajax_getMsCoupon';
    }

    
};
 
 var xzRegularExpression={a:1,isNum:/^\d{1,}$/,isMobile:/^\d{11}$/,isUsername:/^[\w|\u4E00-\u9FA5]*$/,simpleMobile:/^\d{11}$/,mobile:/^1((3[0-9])|(4[57])|(5[0-35-9])|(7[36780])|(8[0-9]))\d{8}$/,password:/^[0-9a-zA-Z*!@.\-? : ;|$#%^&()_+=\[\]\\\/{}<>",~`']{0,}$/,numbers:/[1-9][0-9]{4}/,simpleEmail:/^.*?@.+$/,email:/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9_\-]+(\.[a-zA-Z0-9_\-]+)+[a-zA-Z]+$/,passport:/^[\d\w]{4,20}$/}; 
 var webimIframUrl = 'http://' + topLevelDomain + '/webim.html';
var currentUser = '';
var userMD5 = null;
var jscssVer = '/e20160119';
var xzimLoadPath = 'http://' + domain + jscssVer;
var xzimCssPath = xzimLoadPath + '/css/';
var loadIMJS = ['common'];
var loadURLSrc = jciUrl + jscssVer + '/imjs_v4.php';
var DEBUG = false;
var xiaozhuWebimCSS = 'webimV4.css';
var webimReJoinTimeInterval = 30000;
var lockNoticeNoArr = ['MS100','MS200','MS400','MS500','MS600','MS700','MS800'];
var lockNoticeOpearteWord = '工程师正在拼命开发此工程… 请下载“小猪短租APP”进行设置查看';
document.domain = topLevelDomain;
 
 var _gaq = _gaq || [];

_gaq.push(['_setAccount', 'UA-33763849-1']);
_gaq.push(['_setDomainName', '.xiaozhu.com']);
_gaq.push(['_addIgnoredRef', 'xiaozhu.com']);
_gaq.push(['_addOrganic', 'sogou', 'query']);
_gaq.push(['_addOrganic', 'youdao', 'q']);
_gaq.push(['_addOrganic', 'soso', 'w']);
_gaq.push(['_addOrganic', 'baidu', 'wd']);
_gaq.push(['_addOrganic', 'baidu', 'word']);
_gaq.push(['_addOrganic', 'baidu', 'q1']);
_gaq.push(['_addOrganic', 'ucweb', 'keyword']);
_gaq.push(['_addOrganic', 'ucweb', 'word']);
_gaq.push(['_addOrganic', '114so', 'kw']);
_gaq.push(['_addOrganic', 'bing', 'q']);
_gaq.push(['_trackPageview']);

$(window).load(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

    //var sem = document.createElement('script');
    //sem.src = '//s.va.cn/va.js?id=2674';
    //var s = document.getElementsByTagName('script')[0];
    //s.parentNode.insertBefore(sem, s);


    var _adwq = _adwq || [];
    _adwq.push(['_setAccount', 'wf9jr']);
    _adwq.push(['_setDomainName', '.xiaozhu.com']);
    _adwq.push(['_trackPageview']);
    var adw = document.createElement('script'); adw.type = 'text/javascript'; adw.async = true;
    adw.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://s') + '.emarbox.com/js/adw.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(adw, s);
    if($('#reqactionname').length > 0 && $('#reqactionname').val() == 'Front_Register_SuccessPage'){
        var userid = $("#userid").val();
        _adwq.push(['_setAction', '819ca8', userid, '' ]);
    }
});
 
 /**
 * jQuery Validation Plugin 1.9.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(c){c.extend(c.fn,{validate:function(a){if(this.length){var b=c.data(this[0],"validator");if(b)return b;this.attr("novalidate","novalidate");b=new c.validator(a,this[0]);c.data(this[0],"validator",b);if(b.settings.onsubmit){a=this.find("input, button");a.filter(".cancel").click(function(){b.cancelSubmit=true});b.settings.submitHandler&&a.filter(":submit").click(function(){b.submitButton=this});this.submit(function(d){function e(){if(b.settings.submitHandler){if(b.submitButton)var f=c("<input type='hidden'/>").attr("name",
b.submitButton.name).val(b.submitButton.value).appendTo(b.currentForm);b.settings.submitHandler.call(b,b.currentForm);b.submitButton&&f.remove();return false}return true}b.settings.debug&&d.preventDefault();if(b.cancelSubmit){b.cancelSubmit=false;return e()}if(b.form()){if(b.pendingRequest){b.formSubmitted=true;return false}return e()}else{b.focusInvalid();return false}})}return b}else a&&a.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing")},valid:function(){if(c(this[0]).is("form"))return this.validate().form();
else{var a=true,b=c(this[0].form).validate();this.each(function(){a&=b.element(this)});return a}},removeAttrs:function(a){var b={},d=this;c.each(a.split(/\s/),function(e,f){b[f]=d.attr(f);d.removeAttr(f)});return b},rules:function(a,b){var d=this[0];if(a){var e=c.data(d.form,"validator").settings,f=e.rules,g=c.validator.staticRules(d);switch(a){case "add":c.extend(g,c.validator.normalizeRule(b));f[d.name]=g;if(b.messages)e.messages[d.name]=c.extend(e.messages[d.name],b.messages);break;case "remove":if(!b){delete f[d.name];
return g}var h={};c.each(b.split(/\s/),function(j,i){h[i]=g[i];delete g[i]});return h}}d=c.validator.normalizeRules(c.extend({},c.validator.metadataRules(d),c.validator.classRules(d),c.validator.attributeRules(d),c.validator.staticRules(d)),d);if(d.required){e=d.required;delete d.required;d=c.extend({required:e},d)}return d}});c.extend(c.expr[":"],{blank:function(a){return!c.trim(""+a.value)},filled:function(a){return!!c.trim(""+a.value)},unchecked:function(a){return!a.checked}});c.validator=function(a,
b){this.settings=c.extend(true,{},c.validator.defaults,a);this.currentForm=b;this.init()};c.validator.format=function(a,b){if(arguments.length==1)return function(){var d=c.makeArray(arguments);d.unshift(a);return c.validator.format.apply(this,d)};if(arguments.length>2&&b.constructor!=Array)b=c.makeArray(arguments).slice(1);if(b.constructor!=Array)b=[b];c.each(b,function(d,e){a=a.replace(RegExp("\\{"+d+"\\}","g"),e)});return a};c.extend(c.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error_validate",
validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:c([]),errorLabelContainer:c([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(a){this.lastActive=a;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass);this.addWrapper(this.errorsFor(a)).hide()}},onfocusout:function(a){if(!this.checkable(a)&&(a.name in this.submitted||!this.optional(a)))this.element(a)},
onkeyup:function(a){if(a.name in this.submitted||a==this.lastElement)this.element(a)},onclick:function(a){if(a.name in this.submitted)this.element(a);else a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).addClass(b).removeClass(d):c(a).addClass(b).removeClass(d)},unhighlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).removeClass(b).addClass(d):c(a).removeClass(b).addClass(d)}},setDefaults:function(a){c.extend(c.validator.defaults,
a)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:c.validator.format("Please enter no more than {0} characters."),
minlength:c.validator.format("Please enter at least {0} characters."),rangelength:c.validator.format("Please enter a value between {0} and {1} characters long."),range:c.validator.format("Please enter a value between {0} and {1}."),max:c.validator.format("Please enter a value less than or equal to {0}."),min:c.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){function a(e){var f=c.data(this[0].form,"validator"),g="on"+e.type.replace(/^validate/,
"");f.settings[g]&&f.settings[g].call(f,this[0],e)}this.labelContainer=c(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||c(this.currentForm);this.containers=c(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var b=this.groups={};c.each(this.settings.groups,function(e,f){c.each(f.split(/\s/),function(g,h){b[h]=e})});var d=
this.settings.rules;c.each(d,function(e,f){d[e]=c.validator.normalizeRule(f)});c(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",a).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",
a);this.settings.invalidHandler&&c(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){this.checkForm();c.extend(this.submitted,this.errorMap);this.invalid=c.extend({},this.errorMap);this.valid()||c(this.currentForm).triggerHandler("invalid-form",[this]);this.showErrors();return this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(a){this.lastElement=
a=this.validationTargetFor(this.clean(a));this.prepareElement(a);this.currentElements=c(a);var b=this.check(a);if(b)delete this.invalid[a.name];else this.invalid[a.name]=true;if(!this.numberOfInvalids())this.toHide=this.toHide.add(this.containers);this.showErrors();return b},showErrors:function(a){if(a){c.extend(this.errorMap,a);this.errorList=[];for(var b in a)this.errorList.push({message:a[b],element:this.findByName(b)[0]});this.successList=c.grep(this.successList,function(d){return!(d.name in a)})}this.settings.showErrors?
this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){c.fn.resetForm&&c(this.currentForm).resetForm();this.submitted={};this.lastElement=null;this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b=0,d;for(d in a)b++;return b},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return this.size()==
0},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{c(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(a){}},findLastActive:function(){var a=this.lastActive;return a&&c.grep(this.errorList,function(b){return b.element.name==a.name}).length==1&&a},elements:function(){var a=this,b={};return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&
a.settings.debug&&window.console&&console.error("%o has no name assigned",this);if(this.name in b||!a.objectLength(c(this).rules()))return false;return b[this.name]=true})},clean:function(a){return c(a)[0]},errors:function(){return c(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext)},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=c([]);this.toHide=c([]);this.currentElements=c([])},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers)},
prepareElement:function(a){this.reset();this.toHide=this.errorsFor(a)},check:function(a){a=this.validationTargetFor(this.clean(a));var b=c(a).rules(),d=false,e;for(e in b){var f={method:e,parameters:b[e]};try{var g=c.validator.methods[e].call(this,a.value.replace(/\r/g,""),a,f.parameters);if(g=="dependency-mismatch")d=true;else{d=false;if(g=="pending"){this.toHide=this.toHide.not(this.errorsFor(a));return}if(!g){this.formatAndAdd(a,f);return false}}}catch(h){this.settings.debug&&window.console&&console.log("exception occured when checking element "+
a.id+", check the '"+f.method+"' method",h);throw h;}}if(!d){this.objectLength(b)&&this.successList.push(a);return true}},customMetaMessage:function(a,b){if(c.metadata){var d=this.settings.meta?c(a).metadata()[this.settings.meta]:c(a).metadata();return d&&d.messages&&d.messages[b]}},customMessage:function(a,b){var d=this.settings.messages[a];return d&&(d.constructor==String?d:d[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(arguments[a]!==undefined)return arguments[a]},defaultMessage:function(a,
b){return this.findDefined(this.customMessage(a.name,b),this.customMetaMessage(a,b),!this.settings.ignoreTitle&&a.title||undefined,c.validator.messages[b],"<strong>Warning: No message defined for "+a.name+"</strong>")},formatAndAdd:function(a,b){var d=this.defaultMessage(a,b.method),e=/\$?\{(\d+)\}/g;if(typeof d=="function")d=d.call(this,b.parameters,a);else if(e.test(d))d=jQuery.format(d.replace(e,"{$1}"),b.parameters);this.errorList.push({message:d,element:a});this.errorMap[a.name]=d;this.submitted[a.name]=
d},addWrapper:function(a){if(this.settings.wrapper)a=a.add(a.parent(this.settings.wrapper));return a},defaultShowErrors:function(){for(var a=0;this.errorList[a];a++){var b=this.errorList[a];this.settings.highlight&&this.settings.highlight.call(this,b.element,this.settings.errorClass,this.settings.validClass);this.showLabel(b.element,b.message)}if(this.errorList.length)this.toShow=this.toShow.add(this.containers);if(this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);
if(this.settings.unhighlight){a=0;for(b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass)}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return c(this.errorList).map(function(){return this.element})},showLabel:function(a,b){var d=this.errorsFor(a);if(d.length){d.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
d.attr("generated")&&d.html(b)}else{d=c("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(a),generated:true}).addClass(this.settings.errorClass).html(b||"");if(this.settings.wrapper)d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,c(a)):d.insertAfter(a))}if(!b&&this.settings.success){d.text("");typeof this.settings.success=="string"?d.addClass(this.settings.success):this.settings.success(d)}this.toShow=
this.toShow.add(d)},errorsFor:function(a){var b=this.idOrName(a);return this.errors().filter(function(){return c(this).attr("for")==b})},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(a){if(this.checkable(a))a=this.findByName(a.name).not(this.settings.ignore)[0];return a},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(a){var b=this.currentForm;return c(document.getElementsByName(a)).map(function(d,
e){return e.form==b&&e.name==a&&e||null})},getLength:function(a,b){switch(b.nodeName.toLowerCase()){case "select":return c("option:selected",b).length;case "input":if(this.checkable(b))return this.findByName(b.name).filter(":checked").length}return a.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):true},dependTypes:{"boolean":function(a){return a},string:function(a,b){return!!c(a,b.form).length},"function":function(a,b){return a(b)}},optional:function(a){return!c.validator.methods.required.call(this,
c.trim(a.value),a)&&"dependency-mismatch"},startRequest:function(a){if(!this.pending[a.name]){this.pendingRequest++;this.pending[a.name]=true}},stopRequest:function(a,b){this.pendingRequest--;if(this.pendingRequest<0)this.pendingRequest=0;delete this.pending[a.name];if(b&&this.pendingRequest==0&&this.formSubmitted&&this.form()){c(this.currentForm).submit();this.formSubmitted=false}else if(!b&&this.pendingRequest==0&&this.formSubmitted){c(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=
false}},previousValue:function(a){return c.data(a,"previousValue")||c.data(a,"previousValue",{old:null,valid:true,message:this.defaultMessage(a,"remote")})}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(a,b){a.constructor==String?this.classRuleSettings[a]=b:c.extend(this.classRuleSettings,
a)},classRules:function(a){var b={};(a=c(a).attr("class"))&&c.each(a.split(" "),function(){this in c.validator.classRuleSettings&&c.extend(b,c.validator.classRuleSettings[this])});return b},attributeRules:function(a){var b={};a=c(a);for(var d in c.validator.methods){var e;if(e=d==="required"&&typeof c.fn.prop==="function"?a.prop(d):a.attr(d))b[d]=e;else if(a[0].getAttribute("type")===d)b[d]=true}b.maxlength&&/-1|2147483647|524288/.test(b.maxlength)&&delete b.maxlength;return b},metadataRules:function(a){if(!c.metadata)return{};
var b=c.data(a.form,"validator").settings.meta;return b?c(a).metadata()[b]:c(a).metadata()},staticRules:function(a){var b={},d=c.data(a.form,"validator");if(d.settings.rules)b=c.validator.normalizeRule(d.settings.rules[a.name])||{};return b},normalizeRules:function(a,b){c.each(a,function(d,e){if(e===false)delete a[d];else if(e.param||e.depends){var f=true;switch(typeof e.depends){case "string":f=!!c(e.depends,b.form).length;break;case "function":f=e.depends.call(b,b)}if(f)a[d]=e.param!==undefined?
e.param:true;else delete a[d]}});c.each(a,function(d,e){a[d]=c.isFunction(e)?e(b):e});c.each(["minlength","maxlength","min","max"],function(){if(a[this])a[this]=Number(a[this])});c.each(["rangelength","range"],function(){if(a[this])a[this]=[Number(a[this][0]),Number(a[this][1])]});if(c.validator.autoCreateRanges){if(a.min&&a.max){a.range=[a.min,a.max];delete a.min;delete a.max}if(a.minlength&&a.maxlength){a.rangelength=[a.minlength,a.maxlength];delete a.minlength;delete a.maxlength}}a.messages&&delete a.messages;
return a},normalizeRule:function(a){if(typeof a=="string"){var b={};c.each(a.split(/\s/),function(){b[this]=true});a=b}return a},addMethod:function(a,b,d){c.validator.methods[a]=b;c.validator.messages[a]=d!=undefined?d:c.validator.messages[a];b.length<3&&c.validator.addClassRules(a,c.validator.normalizeRule(a))},methods:{required:function(a,b,d){if(!this.depend(d,b))return"dependency-mismatch";switch(b.nodeName.toLowerCase()){case "select":return(a=c(b).val())&&a.length>0;case "input":if(this.checkable(b))return this.getLength(a,
b)>0;default:return c.trim(a).length>0}},remote:function(a,b,d){if(this.optional(b))return"dependency-mismatch";var e=this.previousValue(b);this.settings.messages[b.name]||(this.settings.messages[b.name]={});e.originalMessage=this.settings.messages[b.name].remote;this.settings.messages[b.name].remote=e.message;d=typeof d=="string"&&{url:d}||d;if(this.pending[b.name])return"pending";if(e.old===a)return e.valid;e.old=a;var f=this;this.startRequest(b);var g={};g[b.name]=a;c.ajax(c.extend(true,{url:d,
mode:"abort",port:"validate"+b.name,dataType:"json",data:g,success:function(h){f.settings.messages[b.name].remote=e.originalMessage;var j=h===true;if(j){var i=f.formSubmitted;f.prepareElement(b);f.formSubmitted=i;f.successList.push(b);f.showErrors()}else{i={};h=h||f.defaultMessage(b,"remote");i[b.name]=e.message=c.isFunction(h)?h(a):h;f.showErrors(i)}e.valid=j;f.stopRequest(b,j)}},d));return"pending"},minlength:function(a,b,d){return this.optional(b)||this.getLength(c.trim(a),b)>=d},maxlength:function(a,
b,d){return this.optional(b)||this.getLength(c.trim(a),b)<=d},rangelength:function(a,b,d){a=this.getLength(c.trim(a),b);return this.optional(b)||a>=d[0]&&a<=d[1]},min:function(a,b,d){return this.optional(b)||a>=d},max:function(a,b,d){return this.optional(b)||a<=d},range:function(a,b,d){return this.optional(b)||a>=d[0]&&a<=d[1]},email:function(a,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)},
url:function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},
date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a))},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 -]+/.test(a))return false;var d=0,e=0,f=false;a=a.replace(/\D/g,"");for(var g=a.length-1;g>=
0;g--){e=a.charAt(g);e=parseInt(e,10);if(f)if((e*=2)>9)e-=9;d+=e;f=!f}return d%10==0},accept:function(a,b,d){d=typeof d=="string"?d.replace(/,/g,"|"):"png|jpe?g|gif";return this.optional(b)||a.match(RegExp(".("+d+")$","i"))},equalTo:function(a,b,d){d=c(d).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){c(b).valid()});return a==d.val()}}});c.format=c.validator.format})(jQuery);
(function(c){var a={};if(c.ajaxPrefilter)c.ajaxPrefilter(function(d,e,f){e=d.port;if(d.mode=="abort"){a[e]&&a[e].abort();a[e]=f}});else{var b=c.ajax;c.ajax=function(d){var e=("port"in d?d:c.ajaxSettings).port;if(("mode"in d?d:c.ajaxSettings).mode=="abort"){a[e]&&a[e].abort();return a[e]=b.apply(this,arguments)}return b.apply(this,arguments)}}})(jQuery);
(function(c){!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(e){e=c.event.fix(e);e.type=b;return c.event.handle.call(this,e)}c.event.special[b]={setup:function(){this.addEventListener(a,d,true)},teardown:function(){this.removeEventListener(a,d,true)},handler:function(e){arguments[0]=c.event.fix(e);arguments[0].type=b;return c.event.handle.apply(this,arguments)}}});c.extend(c.fn,{validateDelegate:function(a,
b,d){return this.bind(b,function(e){var f=c(e.target);if(f.is(a))return d.apply(f,arguments)})}})})(jQuery);
 
 /*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
(function(b,f){var a=0,e=/^ui-id-\d+$/;b.ui=b.ui||{};if(b.ui.version){return}b.extend(b.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});b.fn.extend({_focus:b.fn.focus,focus:function(g,h){return typeof g==="number"?this.each(function(){var i=this;setTimeout(function(){b(i).focus();if(h){h.call(i)}},g)}):this._focus.apply(this,arguments)},scrollParent:function(){var g;if((b.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){g=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(b.css(this,"position"))&&(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))}).eq(0)}else{g=this.parents().filter(function(){return(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))}).eq(0)}return(/fixed/).test(this.css("position"))||!g.length?b(document):g},zIndex:function(j){if(j!==f){return this.css("zIndex",j)}if(this.length){var h=b(this[0]),g,i;while(h.length&&h[0]!==document){g=h.css("position");if(g==="absolute"||g==="relative"||g==="fixed"){i=parseInt(h.css("zIndex"),10);if(!isNaN(i)&&i!==0){return i}}h=h.parent()}}return 0},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++a)}})},removeUniqueId:function(){return this.each(function(){if(e.test(this.id)){b(this).removeAttr("id")}})}});function d(i,g){var k,j,h,l=i.nodeName.toLowerCase();if("area"===l){k=i.parentNode;j=k.name;if(!i.href||!j||k.nodeName.toLowerCase()!=="map"){return false}h=b("img[usemap=#"+j+"]")[0];return !!h&&c(h)}return(/input|select|textarea|button|object/.test(l)?!i.disabled:"a"===l?i.href||g:g)&&c(i)}function c(g){return b.expr.filters.visible(g)&&!b(g).parents().andSelf().filter(function(){return b.css(this,"visibility")==="hidden"}).length}b.extend(b.expr[":"],{data:b.expr.createPseudo?b.expr.createPseudo(function(g){return function(h){return !!b.data(h,g)}}):function(j,h,g){return !!b.data(j,g[3])},focusable:function(g){return d(g,!isNaN(b.attr(g,"tabindex")))},tabbable:function(i){var g=b.attr(i,"tabindex"),h=isNaN(g);return(h||g>=0)&&d(i,!h)}});b(function(){var g=document.body,h=g.appendChild(h=document.createElement("div"));h.offsetHeight;b.extend(h.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});b.support.minHeight=h.offsetHeight===100;b.support.selectstart="onselectstart" in h;g.removeChild(h).style.display="none"});if(!b("<a>").outerWidth(1).jquery){b.each(["Width","Height"],function(j,g){var h=g==="Width"?["Left","Right"]:["Top","Bottom"],k=g.toLowerCase(),m={innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,outerWidth:b.fn.outerWidth,outerHeight:b.fn.outerHeight};function l(o,n,i,p){b.each(h,function(){n-=parseFloat(b.css(o,"padding"+this))||0;if(i){n-=parseFloat(b.css(o,"border"+this+"Width"))||0}if(p){n-=parseFloat(b.css(o,"margin"+this))||0}});return n}b.fn["inner"+g]=function(i){if(i===f){return m["inner"+g].call(this)}return this.each(function(){b(this).css(k,l(this,i)+"px")})};b.fn["outer"+g]=function(i,n){if(typeof i!=="number"){return m["outer"+g].call(this,i)}return this.each(function(){b(this).css(k,l(this,i,true,n)+"px")})}})}if(b("<a>").data("a-b","a").removeData("a-b").data("a-b")){b.fn.removeData=(function(g){return function(h){if(arguments.length){return g.call(this,b.camelCase(h))}else{return g.call(this)}}})(b.fn.removeData)}(function(){var g=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];b.ui.ie=g.length?true:false;b.ui.ie6=parseFloat(g[1],10)===6})();b.fn.extend({disableSelection:function(){return this.bind((b.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(g){g.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});b.extend(b.ui,{plugin:{add:function(h,j,l){var g,k=b.ui[h].prototype;for(g in l){k.plugins[g]=k.plugins[g]||[];k.plugins[g].push([j,l[g]])}},call:function(g,j,h){var k,l=g.plugins[j];if(!l||!g.element[0].parentNode||g.element[0].parentNode.nodeType===11){return}for(k=0;k<l.length;k++){if(g.options[l[k][0]]){l[k][1].apply(g.element,h)}}}},contains:b.contains,hasScroll:function(j,h){if(b(j).css("overflow")==="hidden"){return false}var g=(h&&h==="left")?"scrollLeft":"scrollTop",i=false;if(j[g]>0){return true}j[g]=1;i=(j[g]>0);j[g]=0;return i},isOverAxis:function(h,g,i){return(h>g)&&(h<(g+i))},isOver:function(l,h,k,j,g,i){return b.ui.isOverAxis(l,k,g)&&b.ui.isOverAxis(h,j,i)}})})(jQuery);(function(b,e){var a=0,d=Array.prototype.slice,c=b.cleanData;b.cleanData=function(f){for(var g=0,h;(h=f[g])!=null;g++){try{b(h).triggerHandler("remove")}catch(j){}}c(f)};b.widget=function(g,j,f){var m,l,i,k,h=g.split(".")[0];g=g.split(".")[1];m=h+"-"+g;if(!f){f=j;j=b.Widget}b.expr[":"][m.toLowerCase()]=function(n){return !!b.data(n,m)};b[h]=b[h]||{};l=b[h][g];i=b[h][g]=function(n,o){if(!this._createWidget){return new i(n,o)}if(arguments.length){this._createWidget(n,o)}};b.extend(i,l,{version:f.version,_proto:b.extend({},f),_childConstructors:[]});k=new j();k.options=b.widget.extend({},k.options);b.each(f,function(o,n){if(b.isFunction(n)){f[o]=(function(){var p=function(){return j.prototype[o].apply(this,arguments)},q=function(r){return j.prototype[o].apply(this,r)};return function(){var t=this._super,r=this._superApply,s;this._super=p;this._superApply=q;s=n.apply(this,arguments);this._super=t;this._superApply=r;return s}})()}});i.prototype=b.widget.extend(k,{widgetEventPrefix:l?k.widgetEventPrefix:g},f,{constructor:i,namespace:h,widgetName:g,widgetBaseClass:m,widgetFullName:m});if(l){b.each(l._childConstructors,function(o,p){var n=p.prototype;b.widget(n.namespace+"."+n.widgetName,i,p._proto)});delete l._childConstructors}else{j._childConstructors.push(i)}b.widget.bridge(g,i)};b.widget.extend=function(k){var g=d.call(arguments,1),j=0,f=g.length,h,i;for(;j<f;j++){for(h in g[j]){i=g[j][h];if(g[j].hasOwnProperty(h)&&i!==e){if(b.isPlainObject(i)){k[h]=b.isPlainObject(k[h])?b.widget.extend({},k[h],i):b.widget.extend({},i)}else{k[h]=i}}}}return k};b.widget.bridge=function(g,f){var h=f.prototype.widgetFullName||g;b.fn[g]=function(k){var i=typeof k==="string",j=d.call(arguments,1),l=this;k=!i&&j.length?b.widget.extend.apply(null,[k].concat(j)):k;if(i){this.each(function(){var n,m=b.data(this,h);if(!m){return b.error("cannot call methods on "+g+" prior to initialization; attempted to call method '"+k+"'")}if(!b.isFunction(m[k])||k.charAt(0)==="_"){return b.error("no such method '"+k+"' for "+g+" widget instance")}n=m[k].apply(m,j);if(n!==m&&n!==e){l=n&&n.jquery?l.pushStack(n.get()):n;return false}})}else{this.each(function(){var m=b.data(this,h);if(m){m.option(k||{})._init()}else{b.data(this,h,new f(k,this))}})}return l}};b.Widget=function(){};b.Widget._childConstructors=[];b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(f,g){g=b(g||this.defaultElement||this)[0];this.element=b(g);this.uuid=a++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=b.widget.extend({},this.options,this._getCreateOptions(),f);this.bindings=b();this.hoverable=b();this.focusable=b();if(g!==this){b.data(g,this.widgetName,this);b.data(g,this.widgetFullName,this);this._on(true,this.element,{remove:function(h){if(h.target===g){this.destroy()}}});this.document=b(g.style?g.ownerDocument:g.document||g);this.window=b(this.document[0].defaultView||this.document[0].parentWindow)}this._create();this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:b.noop,_getCreateEventData:b.noop,_create:b.noop,_init:b.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:b.noop,widget:function(){return this.element},option:function(j,k){var f=j,l,h,g;if(arguments.length===0){return b.widget.extend({},this.options)}if(typeof j==="string"){f={};l=j.split(".");j=l.shift();if(l.length){h=f[j]=b.widget.extend({},this.options[j]);for(g=0;g<l.length-1;g++){h[l[g]]=h[l[g]]||{};h=h[l[g]]}j=l.pop();if(k===e){return h[j]===e?null:h[j]}h[j]=k}else{if(k===e){return this.options[j]===e?null:this.options[j]}f[j]=k}}this._setOptions(f);return this},_setOptions:function(f){var g;for(g in f){this._setOption(g,f[g])}return this},_setOption:function(f,g){this.options[f]=g;if(f==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!g).attr("aria-disabled",g);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_on:function(i,h,g){var j,f=this;if(typeof i!=="boolean"){g=h;h=i;i=false}if(!g){g=h;h=this.element;j=this.widget()}else{h=j=b(h);this.bindings=this.bindings.add(h)}b.each(g,function(p,o){function m(){if(!i&&(f.options.disabled===true||b(this).hasClass("ui-state-disabled"))){return}return(typeof o==="string"?f[o]:o).apply(f,arguments)}if(typeof o!=="string"){m.guid=o.guid=o.guid||m.guid||b.guid++}var n=p.match(/^(\w+)\s*(.*)$/),l=n[1]+f.eventNamespace,k=n[2];if(k){j.delegate(k,l,m)}else{h.bind(l,m)}})},_off:function(g,f){f=(f||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;g.unbind(f).undelegate(f)},_delay:function(i,h){function g(){return(typeof i==="string"?f[i]:i).apply(f,arguments)}var f=this;return setTimeout(g,h||0)},_hoverable:function(f){this.hoverable=this.hoverable.add(f);this._on(f,{mouseenter:function(g){b(g.currentTarget).addClass("ui-state-hover")},mouseleave:function(g){b(g.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(f){this.focusable=this.focusable.add(f);this._on(f,{focusin:function(g){b(g.currentTarget).addClass("ui-state-focus")},focusout:function(g){b(g.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(f,g,h){var k,j,i=this.options[f];h=h||{};g=b.Event(g);g.type=(f===this.widgetEventPrefix?f:this.widgetEventPrefix+f).toLowerCase();g.target=this.element[0];j=g.originalEvent;if(j){for(k in j){if(!(k in g)){g[k]=j[k]}}}this.element.trigger(g,h);return !(b.isFunction(i)&&i.apply(this.element[0],[g].concat(h))===false||g.isDefaultPrevented())}};b.each({show:"fadeIn",hide:"fadeOut"},function(g,f){b.Widget.prototype["_"+g]=function(j,i,l){if(typeof i==="string"){i={effect:i}}var k,h=!i?g:i===true||typeof i==="number"?f:i.effect||f;i=i||{};if(typeof i==="number"){i={duration:i}}k=!b.isEmptyObject(i);i.complete=l;if(i.delay){j.delay(i.delay)}if(k&&b.effects&&(b.effects.effect[h]||b.uiBackCompat!==false&&b.effects[h])){j[g](i)}else{if(h!==g&&j[h]){j[h](i.duration,i.easing,l)}else{j.queue(function(m){b(this)[g]();if(l){l.call(j[0])}m()})}}}});if(b.uiBackCompat!==false){b.Widget.prototype._getCreateOptions=function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]}}})(jQuery);(function(b,c){var a=false;b(document).mouseup(function(d){a=false});b.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var d=this;this.element.bind("mousedown."+this.widgetName,function(e){return d._mouseDown(e)}).bind("click."+this.widgetName,function(e){if(true===b.data(e.target,d.widgetName+".preventClickEvent")){b.removeData(e.target,d.widgetName+".preventClickEvent");e.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);if(this._mouseMoveDelegate){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)}},_mouseDown:function(f){if(a){return}(this._mouseStarted&&this._mouseUp(f));this._mouseDownEvent=f;var e=this,g=(f.which===1),d=(typeof this.options.cancel==="string"&&f.target.nodeName?b(f.target).closest(this.options.cancel).length:false);if(!g||d||!this._mouseCapture(f)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(f)&&this._mouseDelayMet(f)){this._mouseStarted=(this._mouseStart(f)!==false);if(!this._mouseStarted){f.preventDefault();return true}}if(true===b.data(f.target,this.widgetName+".preventClickEvent")){b.removeData(f.target,this.widgetName+".preventClickEvent")}this._mouseMoveDelegate=function(h){return e._mouseMove(h)};this._mouseUpDelegate=function(h){return e._mouseUp(h)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);f.preventDefault();a=true;return true},_mouseMove:function(d){if(b.ui.ie&&!(document.documentMode>=9)&&!d.button){return this._mouseUp(d)}if(this._mouseStarted){this._mouseDrag(d);return d.preventDefault()}if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,d)!==false);(this._mouseStarted?this._mouseDrag(d):this._mouseUp(d))}return !this._mouseStarted},_mouseUp:function(d){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(d.target===this._mouseDownEvent.target){b.data(d.target,this.widgetName+".preventClickEvent",true)}this._mouseStop(d)}return false},_mouseDistanceMet:function(d){return(Math.max(Math.abs(this._mouseDownEvent.pageX-d.pageX),Math.abs(this._mouseDownEvent.pageY-d.pageY))>=this.options.distance)},_mouseDelayMet:function(d){return this.mouseDelayMet},_mouseStart:function(d){},_mouseDrag:function(d){},_mouseStop:function(d){},_mouseCapture:function(d){return true}})})(jQuery);(function(a,b){a.widget("ui.draggable",a.ui.mouse,{version:"1.9.2",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}(this.options.addClasses&&this.element.addClass("ui-draggable"));(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy()},_mouseCapture:function(c){var d=this.options;if(this.helper||d.disabled||a(c.target).is(".ui-resizable-handle")){return false}this.handle=this._getHandle(c);if(!this.handle){return false}a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")});return true},_mouseStart:function(c){var d=this.options;this.helper=this._createHelper(c);this.helper.addClass("ui-draggable-dragging");this._cacheHelperProportions();if(a.ui.ddmanager){a.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};a.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(c);this.originalPageX=c.pageX;this.originalPageY=c.pageY;(d.cursorAt&&this._adjustOffsetFromHelper(d.cursorAt));if(d.containment){this._setContainment()}if(this._trigger("start",c)===false){this._clear();return false}this._cacheHelperProportions();if(a.ui.ddmanager&&!d.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,c)}this._mouseDrag(c,true);if(a.ui.ddmanager){a.ui.ddmanager.dragStart(this,c)}return true},_mouseDrag:function(c,e){this.position=this._generatePosition(c);this.positionAbs=this._convertPositionTo("absolute");if(!e){var d=this._uiHash();if(this._trigger("drag",c,d)===false){this._mouseUp({});return false}this.position=d.position}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}if(a.ui.ddmanager){a.ui.ddmanager.drag(this,c)}return false},_mouseStop:function(e){var g=false;if(a.ui.ddmanager&&!this.options.dropBehaviour){g=a.ui.ddmanager.drop(this,e)}if(this.dropped){g=this.dropped;this.dropped=false}var c=this.element[0],f=false;while(c&&(c=c.parentNode)){if(c==document){f=true}}if(!f&&this.options.helper==="original"){return false}if((this.options.revert=="invalid"&&!g)||(this.options.revert=="valid"&&g)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,g))){var d=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(d._trigger("stop",e)!==false){d._clear()}})}else{if(this._trigger("stop",e)!==false){this._clear()}}return false},_mouseUp:function(c){a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});if(a.ui.ddmanager){a.ui.ddmanager.dragStop(this,c)}return a.ui.mouse.prototype._mouseUp.call(this,c)},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})}else{this._clear()}return this},_getHandle:function(c){var d=!this.options.handle||!a(this.options.handle,this.element).length?true:false;a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==c.target){d=true}});return d},_createHelper:function(d){var e=this.options;var c=a.isFunction(e.helper)?a(e.helper.apply(this.element[0],[d])):(e.helper=="clone"?this.element.clone().removeAttr("id"):this.element);if(!c.parents("body").length){c.appendTo((e.appendTo=="parent"?this.element[0].parentNode:e.appendTo))}if(c[0]!=this.element[0]&&!(/(fixed|absolute)/).test(c.css("position"))){c.css("position","absolute")}return c},_adjustOffsetFromHelper:function(c){if(typeof c=="string"){c=c.split(" ")}if(a.isArray(c)){c={left:+c[0],top:+c[1]||0}}if("left" in c){this.offset.click.left=c.left+this.margins.left}if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left}if("top" in c){this.offset.click.top=c.top+this.margins.top}if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var c=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();c.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.ui.ie)){c={top:0,left:0}}return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.element.position();return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var g=this.options;if(g.containment=="parent"){g.containment=this.helper[0].parentNode}if(g.containment=="document"||g.containment=="window"){this.containment=[g.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,g.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(g.containment=="document"?0:a(window).scrollLeft())+a(g.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(g.containment=="document"?0:a(window).scrollTop())+(a(g.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(g.containment)&&g.containment.constructor!=Array){var h=a(g.containment);var e=h[0];if(!e){return}var f=h.offset();var d=(a(e).css("overflow")!="hidden");this.containment=[(parseInt(a(e).css("borderLeftWidth"),10)||0)+(parseInt(a(e).css("paddingLeft"),10)||0),(parseInt(a(e).css("borderTopWidth"),10)||0)+(parseInt(a(e).css("paddingTop"),10)||0),(d?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(a(e).css("borderLeftWidth"),10)||0)-(parseInt(a(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(d?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(a(e).css("borderTopWidth"),10)||0)-(parseInt(a(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=h}else{if(g.containment.constructor==Array){this.containment=g.containment}}},_convertPositionTo:function(g,i){if(!i){i=this.position}var e=g=="absolute"?1:-1;var f=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=(/(html|body)/i).test(c[0].tagName);return{top:(i.top+this.offset.relative.top*e+this.offset.parent.top*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(h?0:c.scrollTop()))*e)),left:(i.left+this.offset.relative.left*e+this.offset.parent.left*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:c.scrollLeft())*e))}},_generatePosition:function(d){var e=this.options,l=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(l[0].tagName);var h=d.pageX;var g=d.pageY;if(this.originalPosition){var c;if(this.containment){if(this.relative_container){var k=this.relative_container.offset();c=[this.containment[0]+k.left,this.containment[1]+k.top,this.containment[2]+k.left,this.containment[3]+k.top]}else{c=this.containment}if(d.pageX-this.offset.click.left<c[0]){h=c[0]+this.offset.click.left}if(d.pageY-this.offset.click.top<c[1]){g=c[1]+this.offset.click.top}if(d.pageX-this.offset.click.left>c[2]){h=c[2]+this.offset.click.left}if(d.pageY-this.offset.click.top>c[3]){g=c[3]+this.offset.click.top}}if(e.grid){var j=e.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1]:this.originalPageY;g=c?(!(j-this.offset.click.top<c[1]||j-this.offset.click.top>c[3])?j:(!(j-this.offset.click.top<c[1])?j-e.grid[1]:j+e.grid[1])):j;var f=e.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/e.grid[0])*e.grid[0]:this.originalPageX;h=c?(!(f-this.offset.click.left<c[0]||f-this.offset.click.left>c[2])?f:(!(f-this.offset.click.left<c[0])?f-e.grid[0]:f+e.grid[0])):f}}return{top:(g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:l.scrollTop())))),left:(h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:l.scrollLeft())))}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_trigger:function(c,d,e){e=e||this._uiHash();a.ui.plugin.call(this,c,[d,e]);if(c=="drag"){this.positionAbs=this._convertPositionTo("absolute")}return a.Widget.prototype._trigger.call(this,c,d,e)},plugins:{},_uiHash:function(c){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});a.ui.plugin.add("draggable","connectToSortable",{start:function(d,f){var e=a(this).data("draggable"),g=e.options,c=a.extend({},f,{item:e.element});e.sortables=[];a(g.connectToSortable).each(function(){var h=a.data(this,"sortable");if(h&&!h.options.disabled){e.sortables.push({instance:h,shouldRevert:h.options.revert});h.refreshPositions();h._trigger("activate",d,c)}})},stop:function(d,f){var e=a(this).data("draggable"),c=a.extend({},f,{item:e.element});a.each(e.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;e.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(d);this.instance.options.helper=this.instance.options._helper;if(e.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",d,c)}})},drag:function(d,g){var f=a(this).data("draggable"),c=this;var e=function(j){var p=this.offset.click.top,n=this.offset.click.left;var h=this.positionAbs.top,l=this.positionAbs.left;var k=j.height,m=j.width;var q=j.top,i=j.left;return a.ui.isOver(h+p,l+n,q,i,k,m)};a.each(f.sortables,function(j){var h=false;var k=this;this.instance.positionAbs=f.positionAbs;this.instance.helperProportions=f.helperProportions;this.instance.offset.click=f.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){h=true;a.each(f.sortables,function(){this.instance.positionAbs=f.positionAbs;this.instance.helperProportions=f.helperProportions;this.instance.offset.click=f.offset.click;if(this!=k&&this.instance._intersectsWith(this.instance.containerCache)&&a.ui.contains(k.instance.element[0],this.instance.element[0])){h=false}return h})}if(h){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=a(c).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return g.helper[0]};d.target=this.instance.currentItem[0];this.instance._mouseCapture(d,true);this.instance._mouseStart(d,true,true);this.instance.offset.click.top=f.offset.click.top;this.instance.offset.click.left=f.offset.click.left;this.instance.offset.parent.left-=f.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=f.offset.parent.top-this.instance.offset.parent.top;f._trigger("toSortable",d);f.dropped=this.instance.element;f.currentItem=f.element;this.instance.fromOutside=f}if(this.instance.currentItem){this.instance._mouseDrag(d)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",d,this.instance._uiHash(this.instance));this.instance._mouseStop(d,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}f._trigger("fromSortable",d);f.dropped=false}}})}});a.ui.plugin.add("draggable","cursor",{start:function(d,e){var c=a("body"),f=a(this).data("draggable").options;if(c.css("cursor")){f._cursor=c.css("cursor")}c.css("cursor",f.cursor)},stop:function(c,d){var e=a(this).data("draggable").options;if(e._cursor){a("body").css("cursor",e._cursor)}}});a.ui.plugin.add("draggable","opacity",{start:function(d,e){var c=a(e.helper),f=a(this).data("draggable").options;if(c.css("opacity")){f._opacity=c.css("opacity")}c.css("opacity",f.opacity)},stop:function(c,d){var e=a(this).data("draggable").options;if(e._opacity){a(d.helper).css("opacity",e._opacity)}}});a.ui.plugin.add("draggable","scroll",{start:function(d,e){var c=a(this).data("draggable");if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML"){c.overflowOffset=c.scrollParent.offset()}},drag:function(e,f){var d=a(this).data("draggable"),g=d.options,c=false;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!g.axis||g.axis!="x"){if((d.overflowOffset.top+d.scrollParent[0].offsetHeight)-e.pageY<g.scrollSensitivity){d.scrollParent[0].scrollTop=c=d.scrollParent[0].scrollTop+g.scrollSpeed}else{if(e.pageY-d.overflowOffset.top<g.scrollSensitivity){d.scrollParent[0].scrollTop=c=d.scrollParent[0].scrollTop-g.scrollSpeed}}}if(!g.axis||g.axis!="y"){if((d.overflowOffset.left+d.scrollParent[0].offsetWidth)-e.pageX<g.scrollSensitivity){d.scrollParent[0].scrollLeft=c=d.scrollParent[0].scrollLeft+g.scrollSpeed}else{if(e.pageX-d.overflowOffset.left<g.scrollSensitivity){d.scrollParent[0].scrollLeft=c=d.scrollParent[0].scrollLeft-g.scrollSpeed}}}}else{if(!g.axis||g.axis!="x"){if(e.pageY-a(document).scrollTop()<g.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()-g.scrollSpeed)}else{if(a(window).height()-(e.pageY-a(document).scrollTop())<g.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()+g.scrollSpeed)}}}if(!g.axis||g.axis!="y"){if(e.pageX-a(document).scrollLeft()<g.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()-g.scrollSpeed)}else{if(a(window).width()-(e.pageX-a(document).scrollLeft())<g.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()+g.scrollSpeed)}}}}if(c!==false&&a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(d,e)}}});a.ui.plugin.add("draggable","snap",{start:function(d,e){var c=a(this).data("draggable"),f=c.options;c.snapElements=[];a(f.snap.constructor!=String?(f.snap.items||":data(draggable)"):f.snap).each(function(){var h=a(this);var g=h.offset();if(this!=c.element[0]){c.snapElements.push({item:this,width:h.outerWidth(),height:h.outerHeight(),top:g.top,left:g.left})}})},drag:function(u,p){var g=a(this).data("draggable"),q=g.options;var z=q.snapTolerance;var y=p.offset.left,w=y+g.helperProportions.width,f=p.offset.top,e=f+g.helperProportions.height;for(var v=g.snapElements.length-1;v>=0;v--){var s=g.snapElements[v].left,n=s+g.snapElements[v].width,m=g.snapElements[v].top,B=m+g.snapElements[v].height;if(!((s-z<y&&y<n+z&&m-z<f&&f<B+z)||(s-z<y&&y<n+z&&m-z<e&&e<B+z)||(s-z<w&&w<n+z&&m-z<f&&f<B+z)||(s-z<w&&w<n+z&&m-z<e&&e<B+z))){if(g.snapElements[v].snapping){(g.options.snap.release&&g.options.snap.release.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=false;continue}if(q.snapMode!="inner"){var c=Math.abs(m-e)<=z;var A=Math.abs(B-f)<=z;var j=Math.abs(s-w)<=z;var k=Math.abs(n-y)<=z;if(c){p.position.top=g._convertPositionTo("relative",{top:m-g.helperProportions.height,left:0}).top-g.margins.top}if(A){p.position.top=g._convertPositionTo("relative",{top:B,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s-g.helperProportions.width}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n}).left-g.margins.left}}var h=(c||A||j||k);if(q.snapMode!="outer"){var c=Math.abs(m-f)<=z;var A=Math.abs(B-e)<=z;var j=Math.abs(s-y)<=z;var k=Math.abs(n-w)<=z;if(c){p.position.top=g._convertPositionTo("relative",{top:m,left:0}).top-g.margins.top}if(A){p.position.top=g._convertPositionTo("relative",{top:B-g.helperProportions.height,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n-g.helperProportions.width}).left-g.margins.left}}if(!g.snapElements[v].snapping&&(c||A||j||k||h)){(g.options.snap.snap&&g.options.snap.snap.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=(c||A||j||k||h)}}});a.ui.plugin.add("draggable","stack",{start:function(d,e){var g=a(this).data("draggable").options;var f=a.makeArray(a(g.stack)).sort(function(i,h){return(parseInt(a(i).css("zIndex"),10)||0)-(parseInt(a(h).css("zIndex"),10)||0)});if(!f.length){return}var c=parseInt(f[0].style.zIndex)||0;a(f).each(function(h){this.style.zIndex=c+h});this[0].style.zIndex=c+f.length}});a.ui.plugin.add("draggable","zIndex",{start:function(d,e){var c=a(e.helper),f=a(this).data("draggable").options;if(c.css("zIndex")){f._zIndex=c.css("zIndex")}c.css("zIndex",f.zIndex)},stop:function(c,d){var e=a(this).data("draggable").options;if(e._zIndex){a(d.helper).css("zIndex",e._zIndex)}}})})(jQuery);(function(a,b){a.widget("ui.droppable",{version:"1.9.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var d=this.options,c=d.accept;this.isover=0;this.isout=1;this.accept=a.isFunction(c)?c:function(e){return e.is(c)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};a.ui.ddmanager.droppables[d.scope]=a.ui.ddmanager.droppables[d.scope]||[];a.ui.ddmanager.droppables[d.scope].push(this);(d.addClasses&&this.element.addClass("ui-droppable"))},_destroy:function(){var c=a.ui.ddmanager.droppables[this.options.scope];for(var d=0;d<c.length;d++){if(c[d]==this){c.splice(d,1)}}this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(c,d){if(c=="accept"){this.accept=a.isFunction(d)?d:function(e){return e.is(d)}}a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(d){var c=a.ui.ddmanager.current;if(this.options.activeClass){this.element.addClass(this.options.activeClass)}(c&&this._trigger("activate",d,this.ui(c)))},_deactivate:function(d){var c=a.ui.ddmanager.current;if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}(c&&this._trigger("deactivate",d,this.ui(c)))},_over:function(d){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0]){return}if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)}this._trigger("over",d,this.ui(c))}},_out:function(d){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0]){return}if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("out",d,this.ui(c))}},_drop:function(d,e){var c=e||a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0]){return false}var f=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=a.data(this,"droppable");if(g.options.greedy&&!g.options.disabled&&g.options.scope==c.options.scope&&g.accept.call(g.element[0],(c.currentItem||c.element))&&a.ui.intersect(c,a.extend(g,{offset:g.element.offset()}),g.options.tolerance)){f=true;return false}});if(f){return false}if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("drop",d,this.ui(c));return this.element}return false},ui:function(d){return{draggable:(d.currentItem||d.element),helper:d.helper,position:d.position,offset:d.positionAbs}}});a.ui.intersect=function(q,j,o){if(!j.offset){return false}var e=(q.positionAbs||q.position.absolute).left,d=e+q.helperProportions.width,n=(q.positionAbs||q.position.absolute).top,m=n+q.helperProportions.height;var g=j.offset.left,c=g+j.proportions.width,p=j.offset.top,k=p+j.proportions.height;switch(o){case"fit":return(g<=e&&d<=c&&p<=n&&m<=k);break;case"intersect":return(g<e+(q.helperProportions.width/2)&&d-(q.helperProportions.width/2)<c&&p<n+(q.helperProportions.height/2)&&m-(q.helperProportions.height/2)<k);break;case"pointer":var h=((q.positionAbs||q.position.absolute).left+(q.clickOffset||q.offset.click).left),i=((q.positionAbs||q.position.absolute).top+(q.clickOffset||q.offset.click).top),f=a.ui.isOver(i,h,p,g,j.proportions.height,j.proportions.width);return f;break;case"touch":return((n>=p&&n<=k)||(m>=p&&m<=k)||(n<p&&m>k))&&((e>=g&&e<=c)||(d>=g&&d<=c)||(e<g&&d>c));break;default:return false;break}};a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(f,h){var c=a.ui.ddmanager.droppables[f.options.scope]||[];var g=h?h.type:null;var k=(f.currentItem||f.element).find(":data(droppable)").andSelf();droppablesLoop:for(var e=0;e<c.length;e++){if(c[e].options.disabled||(f&&!c[e].accept.call(c[e].element[0],(f.currentItem||f.element)))){continue}for(var d=0;d<k.length;d++){if(k[d]==c[e].element[0]){c[e].proportions.height=0;continue droppablesLoop}}c[e].visible=c[e].element.css("display")!="none";if(!c[e].visible){continue}if(g=="mousedown"){c[e]._activate.call(c[e],h)}c[e].offset=c[e].element.offset();c[e].proportions={width:c[e].element[0].offsetWidth,height:c[e].element[0].offsetHeight}}},drop:function(c,d){var e=false;a.each(a.ui.ddmanager.droppables[c.options.scope]||[],function(){if(!this.options){return}if(!this.options.disabled&&this.visible&&a.ui.intersect(c,this,this.options.tolerance)){e=this._drop.call(this,d)||e}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(c.currentItem||c.element))){this.isout=1;this.isover=0;this._deactivate.call(this,d)}});return e},dragStart:function(c,d){c.element.parentsUntil("body").bind("scroll.droppable",function(){if(!c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,d)}})},drag:function(c,d){if(c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,d)}a.each(a.ui.ddmanager.droppables[c.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return}var g=a.ui.intersect(c,this,this.options.tolerance);var i=!g&&this.isover==1?"isout":(g&&this.isover==0?"isover":null);if(!i){return}var h;if(this.options.greedy){var f=this.options.scope;var e=this.element.parents(":data(droppable)").filter(function(){return a.data(this,"droppable").options.scope===f});if(e.length){h=a.data(e[0],"droppable");h.greedyChild=(i=="isover"?1:0)}}if(h&&i=="isover"){h.isover=0;h.isout=1;h._out.call(h,d)}this[i]=1;this[i=="isout"?"isover":"isout"]=0;this[i=="isover"?"_over":"_out"].call(this,d);if(h&&i=="isout"){h.isout=0;h.isover=1;h._over.call(h,d)}})},dragStop:function(c,d){c.element.parentsUntil("body").unbind("scroll.droppable");if(!c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,d)}}}})(jQuery);(function(c,d){c.widget("ui.resizable",c.ui.mouse,{version:"1.9.2",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000},_create:function(){var h=this,k=this.options;this.element.addClass("ui-resizable");c.extend(this,{_aspectRatio:!!(k.aspectRatio),aspectRatio:k.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:k.helper||k.ghost||k.animate?k.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=k.handles||(!c(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all"){this.handles="n,e,s,w,se,sw,ne,nw"}var l=this.handles.split(",");this.handles={};for(var f=0;f<l.length;f++){var j=c.trim(l[f]),e="ui-resizable-"+j;var g=c('<div class="ui-resizable-handle '+e+'"></div>');g.css({zIndex:k.zIndex});if("se"==j){g.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}this.handles[j]=".ui-resizable-"+j;this.element.append(g)}}this._renderAxis=function(q){q=q||this.element;for(var n in this.handles){if(this.handles[n].constructor==String){this.handles[n]=c(this.handles[n],this.element).show()}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var o=c(this.handles[n],this.element),p=0;p=/sw|ne|nw|se|n|s/.test(n)?o.outerHeight():o.outerWidth();var m=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");q.css(m,p);this._proportionallyResize()}if(!c(this.handles[n]).length){continue}}};this._renderAxis(this.element);this._handles=c(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){if(!h.resizing){if(this.className){var i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}h.axis=i&&i[1]?i[1]:"se"}});if(k.autoHide){this._handles.hide();c(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(k.disabled){return}c(this).removeClass("ui-resizable-autohide");h._handles.show()}).mouseleave(function(){if(k.disabled){return}if(!h.resizing){c(this).addClass("ui-resizable-autohide");h._handles.hide()}})}this._mouseInit()},_destroy:function(){this._mouseDestroy();var e=function(g){c(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){e(this.element);var f=this.element;this.originalElement.css({position:f.css("position"),width:f.outerWidth(),height:f.outerHeight(),top:f.css("top"),left:f.css("left")}).insertAfter(f);f.remove()}this.originalElement.css("resize",this.originalResizeStyle);e(this.originalElement);return this},_mouseCapture:function(f){var g=false;for(var e in this.handles){if(c(this.handles[e])[0]==f.target){g=true}}return !this.options.disabled&&g},_mouseStart:function(g){var j=this.options,f=this.element.position(),e=this.element;this.resizing=true;this.documentScroll={top:c(document).scrollTop(),left:c(document).scrollLeft()};if(e.is(".ui-draggable")||(/absolute/).test(e.css("position"))){e.css({position:"absolute",top:f.top,left:f.left})}this._renderProxy();var k=b(this.helper.css("left")),h=b(this.helper.css("top"));if(j.containment){k+=c(j.containment).scrollLeft()||0;h+=c(j.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:k,top:h};this.size=this._helper?{width:e.outerWidth(),height:e.outerHeight()}:{width:e.width(),height:e.height()};this.originalSize=this._helper?{width:e.outerWidth(),height:e.outerHeight()}:{width:e.width(),height:e.height()};this.originalPosition={left:k,top:h};this.sizeDiff={width:e.outerWidth()-e.width(),height:e.outerHeight()-e.height()};this.originalMousePosition={left:g.pageX,top:g.pageY};this.aspectRatio=(typeof j.aspectRatio=="number")?j.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);var i=c(".ui-resizable-"+this.axis).css("cursor");c("body").css("cursor",i=="auto"?this.axis+"-resize":i);e.addClass("ui-resizable-resizing");this._propagate("start",g);return true},_mouseDrag:function(e){var g=this.helper,f=this.options,l={},k=this,i=this.originalMousePosition,m=this.axis;var p=(e.pageX-i.left)||0,n=(e.pageY-i.top)||0;var h=this._change[m];if(!h){return false}var j=h.apply(this,[e,p,n]);this._updateVirtualBoundaries(e.shiftKey);if(this._aspectRatio||e.shiftKey){j=this._updateRatio(j,e)}j=this._respectSize(j,e);this._propagate("resize",e);g.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}this._updateCache(j);this._trigger("resize",e,this.ui());return false},_mouseStop:function(h){this.resizing=false;var i=this.options,l=this;if(this._helper){var g=this._proportionallyResizeElements,e=g.length&&(/textarea/i).test(g[0].nodeName),f=e&&c.ui.hasScroll(g[0],"left")?0:l.sizeDiff.height,k=e?0:l.sizeDiff.width;var n={width:(l.helper.width()-k),height:(l.helper.height()-f)},j=(parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left))||null,m=(parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top))||null;if(!i.animate){this.element.css(c.extend(n,{top:m,left:j}))}l.helper.height(l.size.height);l.helper.width(l.size.width);if(this._helper&&!i.animate){this._proportionallyResize()}}c("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",h);if(this._helper){this.helper.remove()}return false},_updateVirtualBoundaries:function(g){var j=this.options,i,h,f,k,e;e={minWidth:a(j.minWidth)?j.minWidth:0,maxWidth:a(j.maxWidth)?j.maxWidth:Infinity,minHeight:a(j.minHeight)?j.minHeight:0,maxHeight:a(j.maxHeight)?j.maxHeight:Infinity};if(this._aspectRatio||g){i=e.minHeight*this.aspectRatio;f=e.minWidth/this.aspectRatio;h=e.maxHeight*this.aspectRatio;k=e.maxWidth/this.aspectRatio;if(i>e.minWidth){e.minWidth=i}if(f>e.minHeight){e.minHeight=f}if(h<e.maxWidth){e.maxWidth=h}if(k<e.maxHeight){e.maxHeight=k}}this._vBoundaries=e},_updateCache:function(e){var f=this.options;this.offset=this.helper.offset();if(a(e.left)){this.position.left=e.left}if(a(e.top)){this.position.top=e.top}if(a(e.height)){this.size.height=e.height}if(a(e.width)){this.size.width=e.width}},_updateRatio:function(h,g){var i=this.options,j=this.position,f=this.size,e=this.axis;if(a(h.height)){h.width=(h.height*this.aspectRatio)}else{if(a(h.width)){h.height=(h.width/this.aspectRatio)}}if(e=="sw"){h.left=j.left+(f.width-h.width);h.top=null}if(e=="nw"){h.top=j.top+(f.height-h.height);h.left=j.left+(f.width-h.width)}return h},_respectSize:function(l,g){var j=this.helper,i=this._vBoundaries,r=this._aspectRatio||g.shiftKey,q=this.axis,t=a(l.width)&&i.maxWidth&&(i.maxWidth<l.width),m=a(l.height)&&i.maxHeight&&(i.maxHeight<l.height),h=a(l.width)&&i.minWidth&&(i.minWidth>l.width),s=a(l.height)&&i.minHeight&&(i.minHeight>l.height);if(h){l.width=i.minWidth}if(s){l.height=i.minHeight}if(t){l.width=i.maxWidth}if(m){l.height=i.maxHeight}var f=this.originalPosition.left+this.originalSize.width,p=this.position.top+this.size.height;var k=/sw|nw|w/.test(q),e=/nw|ne|n/.test(q);if(h&&k){l.left=f-i.minWidth}if(t&&k){l.left=f-i.maxWidth}if(s&&e){l.top=p-i.minHeight}if(m&&e){l.top=p-i.maxHeight}var n=!l.width&&!l.height;if(n&&!l.left&&l.top){l.top=null}else{if(n&&!l.top&&l.left){l.left=null}}return l},_proportionallyResize:function(){var k=this.options;if(!this._proportionallyResizeElements.length){return}var g=this.helper||this.element;for(var f=0;f<this._proportionallyResizeElements.length;f++){var h=this._proportionallyResizeElements[f];if(!this.borderDif){var e=[h.css("borderTopWidth"),h.css("borderRightWidth"),h.css("borderBottomWidth"),h.css("borderLeftWidth")],j=[h.css("paddingTop"),h.css("paddingRight"),h.css("paddingBottom"),h.css("paddingLeft")];this.borderDif=c.map(e,function(l,n){var m=parseInt(l,10)||0,o=parseInt(j[n],10)||0;return m+o})}h.css({height:(g.height()-this.borderDif[0]-this.borderDif[2])||0,width:(g.width()-this.borderDif[1]-this.borderDif[3])||0})}},_renderProxy:function(){var e=this.element,h=this.options;this.elementOffset=e.offset();if(this._helper){this.helper=this.helper||c('<div style="overflow:hidden;"></div>');var f=(c.ui.ie6?1:0),g=(c.ui.ie6?2:-1);this.helper.addClass(this._helper).css({width:this.element.outerWidth()+g,height:this.element.outerHeight()+g,position:"absolute",left:this.elementOffset.left-f+"px",top:this.elementOffset.top-f+"px",zIndex:++h.zIndex});this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(g,f,e){return{width:this.originalSize.width+f}},w:function(h,f,e){var j=this.options,g=this.originalSize,i=this.originalPosition;return{left:i.left+f,width:g.width-f}},n:function(h,f,e){var j=this.options,g=this.originalSize,i=this.originalPosition;return{top:i.top+e,height:g.height-e}},s:function(g,f,e){return{height:this.originalSize.height+e}},se:function(g,f,e){return c.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[g,f,e]))},sw:function(g,f,e){return c.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[g,f,e]))},ne:function(g,f,e){return c.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[g,f,e]))},nw:function(g,f,e){return c.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[g,f,e]))}},_propagate:function(f,e){c.ui.plugin.call(this,f,[e,this.ui()]);(f!="resize"&&this._trigger(f,e,this.ui()))},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});c.ui.plugin.add("resizable","alsoResize",{start:function(f,g){var e=c(this).data("resizable"),i=e.options;var h=function(j){c(j).each(function(){var k=c(this);k.data("resizable-alsoresize",{width:parseInt(k.width(),10),height:parseInt(k.height(),10),left:parseInt(k.css("left"),10),top:parseInt(k.css("top"),10)})})};if(typeof(i.alsoResize)=="object"&&!i.alsoResize.parentNode){if(i.alsoResize.length){i.alsoResize=i.alsoResize[0];h(i.alsoResize)}else{c.each(i.alsoResize,function(j){h(j)})}}else{h(i.alsoResize)}},resize:function(g,i){var f=c(this).data("resizable"),j=f.options,h=f.originalSize,l=f.originalPosition;var k={height:(f.size.height-h.height)||0,width:(f.size.width-h.width)||0,top:(f.position.top-l.top)||0,left:(f.position.left-l.left)||0},e=function(m,n){c(m).each(function(){var q=c(this),r=c(this).data("resizable-alsoresize"),p={},o=n&&n.length?n:q.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];c.each(o,function(s,u){var t=(r[u]||0)+(k[u]||0);if(t&&t>=0){p[u]=t||null}});q.css(p)})};if(typeof(j.alsoResize)=="object"&&!j.alsoResize.nodeType){c.each(j.alsoResize,function(m,n){e(m,n)})}else{e(j.alsoResize)}},stop:function(e,f){c(this).removeData("resizable-alsoresize")}});c.ui.plugin.add("resizable","animate",{stop:function(i,p){var m=c(this).data("resizable"),j=m.options;var h=m._proportionallyResizeElements,e=h.length&&(/textarea/i).test(h[0].nodeName),f=e&&c.ui.hasScroll(h[0],"left")?0:m.sizeDiff.height,l=e?0:m.sizeDiff.width;var g={width:(m.size.width-l),height:(m.size.height-f)},k=(parseInt(m.element.css("left"),10)+(m.position.left-m.originalPosition.left))||null,n=(parseInt(m.element.css("top"),10)+(m.position.top-m.originalPosition.top))||null;m.element.animate(c.extend(g,n&&k?{top:n,left:k}:{}),{duration:j.animateDuration,easing:j.animateEasing,step:function(){var o={width:parseInt(m.element.css("width"),10),height:parseInt(m.element.css("height"),10),top:parseInt(m.element.css("top"),10),left:parseInt(m.element.css("left"),10)};if(h&&h.length){c(h[0]).css({width:o.width,height:o.height})}m._updateCache(o);m._propagate("resize",i)}})}});c.ui.plugin.add("resizable","containment",{start:function(f,s){var q=c(this).data("resizable"),j=q.options,l=q.element;var g=j.containment,k=(g instanceof c)?g.get(0):(/parent/.test(g))?l.parent().get(0):g;if(!k){return}q.containerElement=c(k);if(/document/.test(g)||g==document){q.containerOffset={left:0,top:0};q.containerPosition={left:0,top:0};q.parentData={element:c(document),left:0,top:0,width:c(document).width(),height:c(document).height()||document.body.parentNode.scrollHeight}}else{var n=c(k),i=[];c(["Top","Right","Left","Bottom"]).each(function(p,o){i[p]=b(n.css("padding"+o))});q.containerOffset=n.offset();q.containerPosition=n.position();q.containerSize={height:(n.innerHeight()-i[3]),width:(n.innerWidth()-i[1])};var r=q.containerOffset,e=q.containerSize.height,m=q.containerSize.width,h=(c.ui.hasScroll(k,"left")?k.scrollWidth:m),t=(c.ui.hasScroll(k)?k.scrollHeight:e);q.parentData={element:k,left:r.left,top:r.top,width:h,height:t}}},resize:function(g,r){var m=c(this).data("resizable"),i=m.options,f=m.containerSize,q=m.containerOffset,n=m.size,p=m.position,s=m._aspectRatio||g.shiftKey,e={top:0,left:0},h=m.containerElement;if(h[0]!=document&&(/static/).test(h.css("position"))){e=q}if(p.left<(m._helper?q.left:0)){m.size.width=m.size.width+(m._helper?(m.position.left-q.left):(m.position.left-e.left));if(s){m.size.height=m.size.width/m.aspectRatio}m.position.left=i.helper?q.left:0}if(p.top<(m._helper?q.top:0)){m.size.height=m.size.height+(m._helper?(m.position.top-q.top):m.position.top);if(s){m.size.width=m.size.height*m.aspectRatio}m.position.top=m._helper?q.top:0}m.offset.left=m.parentData.left+m.position.left;m.offset.top=m.parentData.top+m.position.top;var l=Math.abs((m._helper?m.offset.left-e.left:(m.offset.left-e.left))+m.sizeDiff.width),t=Math.abs((m._helper?m.offset.top-e.top:(m.offset.top-q.top))+m.sizeDiff.height);var k=m.containerElement.get(0)==m.element.parent().get(0),j=/relative|absolute/.test(m.containerElement.css("position"));if(k&&j){l-=m.parentData.left}if(l+m.size.width>=m.parentData.width){m.size.width=m.parentData.width-l;if(s){m.size.height=m.size.width/m.aspectRatio}}if(t+m.size.height>=m.parentData.height){m.size.height=m.parentData.height-t;if(s){m.size.width=m.size.height*m.aspectRatio}}},stop:function(f,p){var l=c(this).data("resizable"),g=l.options,m=l.position,n=l.containerOffset,e=l.containerPosition,i=l.containerElement;var j=c(l.helper),r=j.offset(),q=j.outerWidth()-l.sizeDiff.width,k=j.outerHeight()-l.sizeDiff.height;if(l._helper&&!g.animate&&(/relative/).test(i.css("position"))){c(this).css({left:r.left-e.left-n.left,width:q,height:k})}if(l._helper&&!g.animate&&(/static/).test(i.css("position"))){c(this).css({left:r.left-e.left-n.left,width:q,height:k})}}});c.ui.plugin.add("resizable","ghost",{start:function(g,h){var f=c(this).data("resizable"),i=f.options,e=f.size;f.ghost=f.originalElement.clone();f.ghost.css({opacity:0.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof i.ghost=="string"?i.ghost:"");f.ghost.appendTo(f.helper)},resize:function(f,g){var e=c(this).data("resizable"),h=e.options;if(e.ghost){e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})}},stop:function(f,g){var e=c(this).data("resizable"),h=e.options;if(e.ghost&&e.helper){e.helper.get(0).removeChild(e.ghost.get(0))}}});c.ui.plugin.add("resizable","grid",{resize:function(e,n){var k=c(this).data("resizable"),h=k.options,l=k.size,i=k.originalSize,j=k.originalPosition,p=k.axis,m=h._aspectRatio||e.shiftKey;h.grid=typeof h.grid=="number"?[h.grid,h.grid]:h.grid;var g=Math.round((l.width-i.width)/(h.grid[0]||1))*(h.grid[0]||1),f=Math.round((l.height-i.height)/(h.grid[1]||1))*(h.grid[1]||1);if(/^(se|s|e)$/.test(p)){k.size.width=i.width+g;k.size.height=i.height+f}else{if(/^(ne)$/.test(p)){k.size.width=i.width+g;k.size.height=i.height+f;k.position.top=j.top-f}else{if(/^(sw)$/.test(p)){k.size.width=i.width+g;k.size.height=i.height+f;k.position.left=j.left-g}else{k.size.width=i.width+g;k.size.height=i.height+f;k.position.top=j.top-f;k.position.left=j.left-g}}}}});var b=function(e){return parseInt(e,10)||0};var a=function(e){return !isNaN(parseInt(e,10))}})(jQuery);(function(a,b){a.widget("ui.selectable",a.ui.mouse,{version:"1.9.2",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var c=this;this.element.addClass("ui-selectable");this.dragged=false;var d;this.refresh=function(){d=a(c.options.filter,c.element[0]);d.addClass("ui-selectee");d.each(function(){var e=a(this);var f=e.offset();a.data(this,"selectable-item",{element:this,$element:e,left:f.left,top:f.top,right:f.left+e.outerWidth(),bottom:f.top+e.outerHeight(),startselected:false,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})})};this.refresh();this.selectees=d.addClass("ui-selectee");this._mouseInit();this.helper=a("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled");this._mouseDestroy()},_mouseStart:function(e){var d=this;this.opos=[e.pageX,e.pageY];if(this.options.disabled){return}var c=this.options;this.selectees=a(c.filter,this.element[0]);this._trigger("start",e);a(c.appendTo).append(this.helper);this.helper.css({left:e.clientX,top:e.clientY,width:0,height:0});if(c.autoRefresh){this.refresh()}this.selectees.filter(".ui-selected").each(function(){var f=a.data(this,"selectable-item");f.startselected=true;if(!e.metaKey&&!e.ctrlKey){f.$element.removeClass("ui-selected");f.selected=false;f.$element.addClass("ui-unselecting");f.unselecting=true;d._trigger("unselecting",e,{unselecting:f.element})}});a(e.target).parents().andSelf().each(function(){var g=a.data(this,"selectable-item");if(g){var f=(!e.metaKey&&!e.ctrlKey)||!g.$element.hasClass("ui-selected");g.$element.removeClass(f?"ui-unselecting":"ui-selected").addClass(f?"ui-selecting":"ui-unselecting");g.unselecting=!f;g.selecting=f;g.selected=f;if(f){d._trigger("selecting",e,{selecting:g.element})}else{d._trigger("unselecting",e,{unselecting:g.element})}return false}})},_mouseDrag:function(j){var i=this;this.dragged=true;if(this.options.disabled){return}var e=this.options;var d=this.opos[0],h=this.opos[1],c=j.pageX,g=j.pageY;if(d>c){var f=c;c=d;d=f}if(h>g){var f=g;g=h;h=f}this.helper.css({left:d,top:h,width:c-d,height:g-h});this.selectees.each(function(){var k=a.data(this,"selectable-item");if(!k||k.element==i.element[0]){return}var l=false;if(e.tolerance=="touch"){l=(!(k.left>c||k.right<d||k.top>g||k.bottom<h))}else{if(e.tolerance=="fit"){l=(k.left>d&&k.right<c&&k.top>h&&k.bottom<g)}}if(l){if(k.selected){k.$element.removeClass("ui-selected");k.selected=false}if(k.unselecting){k.$element.removeClass("ui-unselecting");k.unselecting=false}if(!k.selecting){k.$element.addClass("ui-selecting");k.selecting=true;i._trigger("selecting",j,{selecting:k.element})}}else{if(k.selecting){if((j.metaKey||j.ctrlKey)&&k.startselected){k.$element.removeClass("ui-selecting");k.selecting=false;k.$element.addClass("ui-selected");k.selected=true}else{k.$element.removeClass("ui-selecting");k.selecting=false;if(k.startselected){k.$element.addClass("ui-unselecting");k.unselecting=true}i._trigger("unselecting",j,{unselecting:k.element})}}if(k.selected){if(!j.metaKey&&!j.ctrlKey&&!k.startselected){k.$element.removeClass("ui-selected");k.selected=false;k.$element.addClass("ui-unselecting");k.unselecting=true;i._trigger("unselecting",j,{unselecting:k.element})}}}});return false},_mouseStop:function(e){var d=this;this.dragged=false;var c=this.options;a(".ui-unselecting",this.element[0]).each(function(){var f=a.data(this,"selectable-item");f.$element.removeClass("ui-unselecting");f.unselecting=false;f.startselected=false;d._trigger("unselected",e,{unselected:f.element})});a(".ui-selecting",this.element[0]).each(function(){var f=a.data(this,"selectable-item");f.$element.removeClass("ui-selecting").addClass("ui-selected");f.selecting=false;f.selected=true;f.startselected=true;d._trigger("selected",e,{selected:f.element})});this._trigger("stop",e);this.helper.remove();return false}})})(jQuery);(function(a,b){a.widget("ui.sortable",a.ui.mouse,{version:"1.9.2",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000},_create:function(){var c=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?c.axis==="x"||(/left|right/).test(this.items[0].item.css("float"))||(/inline|table-cell/).test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit();this.ready=true},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");this._mouseDestroy();for(var c=this.items.length-1;c>=0;c--){this.items[c].item.removeData(this.widgetName+"-item")}return this},_setOption:function(c,d){if(c==="disabled"){this.options[c]=d;this.widget().toggleClass("ui-sortable-disabled",!!d)}else{a.Widget.prototype._setOption.apply(this,arguments)}},_mouseCapture:function(f,g){var e=this;if(this.reverting){return false}if(this.options.disabled||this.options.type=="static"){return false}this._refreshItems(f);var d=null,c=a(f.target).parents().each(function(){if(a.data(this,e.widgetName+"-item")==e){d=a(this);return false}});if(a.data(f.target,e.widgetName+"-item")==e){d=a(f.target)}if(!d){return false}if(this.options.handle&&!g){var h=false;a(this.options.handle,d).find("*").andSelf().each(function(){if(this==f.target){h=true}});if(!h){return false}}this.currentItem=d;this._removeCurrentsFromItems();return true},_mouseStart:function(e,f,c){var g=this.options;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(e);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};a.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");this.originalPosition=this._generatePosition(e);this.originalPageX=e.pageX;this.originalPageY=e.pageY;(g.cursorAt&&this._adjustOffsetFromHelper(g.cursorAt));this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder();if(g.containment){this._setContainment()}if(g.cursor){if(a("body").css("cursor")){this._storedCursor=a("body").css("cursor")}a("body").css("cursor",g.cursor)}if(g.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}this.helper.css("opacity",g.opacity)}if(g.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}this.helper.css("zIndex",g.zIndex)}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){this.overflowOffset=this.scrollParent.offset()}this._trigger("start",e,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!c){for(var d=this.containers.length-1;d>=0;d--){this.containers[d]._trigger("activate",e,this._uiHash(this))}}if(a.ui.ddmanager){a.ui.ddmanager.current=this}if(a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,e)}this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(e);return true},_mouseDrag:function(g){this.position=this._generatePosition(g);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}if(this.options.scroll){var h=this.options,c=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-g.pageY<h.scrollSensitivity){this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+h.scrollSpeed}else{if(g.pageY-this.overflowOffset.top<h.scrollSensitivity){this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-h.scrollSpeed}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-g.pageX<h.scrollSensitivity){this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+h.scrollSpeed}else{if(g.pageX-this.overflowOffset.left<h.scrollSensitivity){this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-h.scrollSpeed}}}else{if(g.pageY-a(document).scrollTop()<h.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()-h.scrollSpeed)}else{if(a(window).height()-(g.pageY-a(document).scrollTop())<h.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()+h.scrollSpeed)}}if(g.pageX-a(document).scrollLeft()<h.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()-h.scrollSpeed)}else{if(a(window).width()-(g.pageX-a(document).scrollLeft())<h.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()+h.scrollSpeed)}}}if(c!==false&&a.ui.ddmanager&&!h.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,g)}}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}for(var e=this.items.length-1;e>=0;e--){var f=this.items[e],d=f.item[0],j=this._intersectsWithPointer(f);if(!j){continue}if(f.instance!==this.currentContainer){continue}if(d!=this.currentItem[0]&&this.placeholder[j==1?"next":"prev"]()[0]!=d&&!a.contains(this.placeholder[0],d)&&(this.options.type=="semi-dynamic"?!a.contains(this.element[0],d):true)){this.direction=j==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(f)){this._rearrange(g,f)}else{break}this._trigger("change",g,this._uiHash());break}}this._contactContainers(g);if(a.ui.ddmanager){a.ui.ddmanager.drag(this,g)}this._trigger("sort",g,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(d,e){if(!d){return}if(a.ui.ddmanager&&!this.options.dropBehaviour){a.ui.ddmanager.drop(this,d)}if(this.options.revert){var c=this;var f=this.placeholder.offset();this.reverting=true;a(this.helper).animate({left:f.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:f.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){c._clear(d)})}else{this._clear(d,e)}return false},cancel:function(){if(this.dragging){this._mouseUp({target:null});if(this.options.helper=="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var c=this.containers.length-1;c>=0;c--){this.containers[c]._trigger("deactivate",null,this._uiHash(this));if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",null,this._uiHash(this));this.containers[c].containerCache.over=0}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}a.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){a(this.domPosition.prev).after(this.currentItem)}else{a(this.domPosition.parent).prepend(this.currentItem)}}return this},serialize:function(e){var c=this._getItemsAsjQuery(e&&e.connected);var d=[];e=e||{};a(c).each(function(){var f=(a(e.item||this).attr(e.attribute||"id")||"").match(e.expression||(/(.+)[-=_](.+)/));if(f){d.push((e.key||f[1]+"[]")+"="+(e.key&&e.expression?f[1]:f[2]))}});if(!d.length&&e.key){d.push(e.key+"=")}return d.join("&")},toArray:function(e){var c=this._getItemsAsjQuery(e&&e.connected);var d=[];e=e||{};c.each(function(){d.push(a(e.item||this).attr(e.attribute||"id")||"")});return d},_intersectsWith:function(m){var e=this.positionAbs.left,d=e+this.helperProportions.width,k=this.positionAbs.top,j=k+this.helperProportions.height;var f=m.left,c=f+m.width,n=m.top,i=n+m.height;var o=this.offset.click.top,h=this.offset.click.left;var g=(k+o)>n&&(k+o)<i&&(e+h)>f&&(e+h)<c;if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>m[this.floating?"width":"height"])){return g}else{return(f<e+(this.helperProportions.width/2)&&d-(this.helperProportions.width/2)<c&&n<k+(this.helperProportions.height/2)&&j-(this.helperProportions.height/2)<i)}},_intersectsWithPointer:function(e){var f=(this.options.axis==="x")||a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),d=(this.options.axis==="y")||a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),h=f&&d,c=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();if(!h){return false}return this.floating?(((g&&g=="right")||c=="down")?2:1):(c&&(c=="down"?2:1))},_intersectsWithSides:function(f){var d=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,f.top+(f.height/2),f.height),e=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,f.left+(f.width/2),f.width),c=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();if(this.floating&&g){return((g=="right"&&e)||(g=="left"&&!e))}else{return c&&((c=="down"&&d)||(c=="up"&&!d))}},_getDragVerticalDirection:function(){var c=this.positionAbs.top-this.lastPositionAbs.top;return c!=0&&(c>0?"down":"up")},_getDragHorizontalDirection:function(){var c=this.positionAbs.left-this.lastPositionAbs.left;return c!=0&&(c>0?"right":"left")},refresh:function(c){this._refreshItems(c);this.refreshPositions();return this},_connectWith:function(){var c=this.options;return c.connectWith.constructor==String?[c.connectWith]:c.connectWith},_getItemsAsjQuery:function(h){var c=[];var e=[];var g=this._connectWith();if(g&&h){for(var f=g.length-1;f>=0;f--){var l=a(g[f]);for(var d=l.length-1;d>=0;d--){var k=a.data(l[d],this.widgetName);if(k&&k!=this&&!k.options.disabled){e.push([a.isFunction(k.options.items)?k.options.items.call(k.element):a(k.options.items,k.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),k])}}}}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var f=e.length-1;f>=0;f--){e[f][0].each(function(){c.push(this)})}return a(c)},_removeCurrentsFromItems:function(){var c=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=a.grep(this.items,function(e){for(var d=0;d<c.length;d++){if(c[d]==e.item[0]){return false}}return true})},_refreshItems:function(c){this.items=[];this.containers=[this];var k=this.items;var g=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],c,{item:this.currentItem}):a(this.options.items,this.element),this]];var m=this._connectWith();if(m&&this.ready){for(var f=m.length-1;f>=0;f--){var n=a(m[f]);for(var e=n.length-1;e>=0;e--){var h=a.data(n[e],this.widgetName);if(h&&h!=this&&!h.options.disabled){g.push([a.isFunction(h.options.items)?h.options.items.call(h.element[0],c,{item:this.currentItem}):a(h.options.items,h.element),h]);this.containers.push(h)}}}}for(var f=g.length-1;f>=0;f--){var l=g[f][1];var d=g[f][0];for(var e=0,o=d.length;e<o;e++){var p=a(d[e]);p.data(this.widgetName+"-item",l);k.push({item:p,instance:l,width:0,height:0,left:0,top:0})}}},refreshPositions:function(c){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}for(var e=this.items.length-1;e>=0;e--){var f=this.items[e];if(f.instance!=this.currentContainer&&this.currentContainer&&f.item[0]!=this.currentItem[0]){continue}var d=this.options.toleranceElement?a(this.options.toleranceElement,f.item):f.item;if(!c){f.width=d.outerWidth();f.height=d.outerHeight()}var g=d.offset();f.left=g.left;f.top=g.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(var e=this.containers.length-1;e>=0;e--){var g=this.containers[e].element.offset();this.containers[e].containerCache.left=g.left;this.containers[e].containerCache.top=g.top;this.containers[e].containerCache.width=this.containers[e].element.outerWidth();this.containers[e].containerCache.height=this.containers[e].element.outerHeight()}}return this},_createPlaceholder:function(d){d=d||this;var e=d.options;if(!e.placeholder||e.placeholder.constructor==String){var c=e.placeholder;e.placeholder={element:function(){var f=a(document.createElement(d.currentItem[0].nodeName)).addClass(c||d.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!c){f.style.visibility="hidden"}return f},update:function(f,g){if(c&&!e.forcePlaceholderSize){return}if(!g.height()){g.height(d.currentItem.innerHeight()-parseInt(d.currentItem.css("paddingTop")||0,10)-parseInt(d.currentItem.css("paddingBottom")||0,10))}if(!g.width()){g.width(d.currentItem.innerWidth()-parseInt(d.currentItem.css("paddingLeft")||0,10)-parseInt(d.currentItem.css("paddingRight")||0,10))}}}}d.placeholder=a(e.placeholder.element.call(d.element,d.currentItem));d.currentItem.after(d.placeholder);e.placeholder.update(d,d.placeholder)},_contactContainers:function(c){var e=null,n=null;for(var h=this.containers.length-1;h>=0;h--){if(a.contains(this.currentItem[0],this.containers[h].element[0])){continue}if(this._intersectsWith(this.containers[h].containerCache)){if(e&&a.contains(this.containers[h].element[0],e.element[0])){continue}e=this.containers[h];n=h}else{if(this.containers[h].containerCache.over){this.containers[h]._trigger("out",c,this._uiHash(this));this.containers[h].containerCache.over=0}}}if(!e){return}if(this.containers.length===1){this.containers[n]._trigger("over",c,this._uiHash(this));this.containers[n].containerCache.over=1}else{var m=10000;var k=null;var l=this.containers[n].floating?"left":"top";var o=this.containers[n].floating?"width":"height";var d=this.positionAbs[l]+this.offset.click[l];for(var f=this.items.length-1;f>=0;f--){if(!a.contains(this.containers[n].element[0],this.items[f].item[0])){continue}if(this.items[f].item[0]==this.currentItem[0]){continue}var p=this.items[f].item.offset()[l];var g=false;if(Math.abs(p-d)>Math.abs(p+this.items[f][o]-d)){g=true;p+=this.items[f][o]}if(Math.abs(p-d)<m){m=Math.abs(p-d);k=this.items[f];this.direction=g?"up":"down"}}if(!k&&!this.options.dropOnEmpty){return}this.currentContainer=this.containers[n];k?this._rearrange(c,k,null,true):this._rearrange(c,null,this.containers[n].element,true);this._trigger("change",c,this._uiHash());this.containers[n]._trigger("change",c,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[n]._trigger("over",c,this._uiHash(this));this.containers[n].containerCache.over=1}},_createHelper:function(d){var e=this.options;var c=a.isFunction(e.helper)?a(e.helper.apply(this.element[0],[d,this.currentItem])):(e.helper=="clone"?this.currentItem.clone():this.currentItem);if(!c.parents("body").length){a(e.appendTo!="parent"?e.appendTo:this.currentItem[0].parentNode)[0].appendChild(c[0])}if(c[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(c[0].style.width==""||e.forceHelperSize){c.width(this.currentItem.width())}if(c[0].style.height==""||e.forceHelperSize){c.height(this.currentItem.height())}return c},_adjustOffsetFromHelper:function(c){if(typeof c=="string"){c=c.split(" ")}if(a.isArray(c)){c={left:+c[0],top:+c[1]||0}}if("left" in c){this.offset.click.left=c.left+this.margins.left}if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left}if("top" in c){this.offset.click.top=c.top+this.margins.top}if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var c=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();c.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.ui.ie)){c={top:0,left:0}}return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.currentItem.position();return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var f=this.options;if(f.containment=="parent"){f.containment=this.helper[0].parentNode}if(f.containment=="document"||f.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(f.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(f.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(f.containment)){var d=a(f.containment)[0];var e=a(f.containment).offset();var c=(a(d).css("overflow")!="hidden");this.containment=[e.left+(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0)-this.margins.left,e.top+(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0)-this.margins.top,e.left+(c?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,e.top+(c?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(g,i){if(!i){i=this.position}var e=g=="absolute"?1:-1;var f=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=(/(html|body)/i).test(c[0].tagName);return{top:(i.top+this.offset.relative.top*e+this.offset.parent.top*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(h?0:c.scrollTop()))*e)),left:(i.left+this.offset.relative.left*e+this.offset.parent.left*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:c.scrollLeft())*e))}},_generatePosition:function(f){var i=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,j=(/(html|body)/i).test(c[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var e=f.pageX;var d=f.pageY;if(this.originalPosition){if(this.containment){if(f.pageX-this.offset.click.left<this.containment[0]){e=this.containment[0]+this.offset.click.left}if(f.pageY-this.offset.click.top<this.containment[1]){d=this.containment[1]+this.offset.click.top}if(f.pageX-this.offset.click.left>this.containment[2]){e=this.containment[2]+this.offset.click.left}if(f.pageY-this.offset.click.top>this.containment[3]){d=this.containment[3]+this.offset.click.top}}if(i.grid){var h=this.originalPageY+Math.round((d-this.originalPageY)/i.grid[1])*i.grid[1];d=this.containment?(!(h-this.offset.click.top<this.containment[1]||h-this.offset.click.top>this.containment[3])?h:(!(h-this.offset.click.top<this.containment[1])?h-i.grid[1]:h+i.grid[1])):h;var g=this.originalPageX+Math.round((e-this.originalPageX)/i.grid[0])*i.grid[0];e=this.containment?(!(g-this.offset.click.left<this.containment[0]||g-this.offset.click.left>this.containment[2])?g:(!(g-this.offset.click.left<this.containment[0])?g-i.grid[0]:g+i.grid[0])):g}}return{top:(d-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(j?0:c.scrollTop())))),left:(e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():j?0:c.scrollLeft())))}},_rearrange:function(g,f,d,e){d?d[0].appendChild(this.placeholder[0]):f.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?f.item[0]:f.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var c=this.counter;this._delay(function(){if(c==this.counter){this.refreshPositions(!e)}})},_clear:function(d,e){this.reverting=false;var f=[];if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)}this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var c in this._storedCSS){if(this._storedCSS[c]=="auto"||this._storedCSS[c]=="static"){this._storedCSS[c]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.fromOutside&&!e){f.push(function(g){this._trigger("receive",g,this._uiHash(this.fromOutside))})}if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!e){f.push(function(g){this._trigger("update",g,this._uiHash())})}if(this!==this.currentContainer){if(!e){f.push(function(g){this._trigger("remove",g,this._uiHash())});f.push((function(g){return function(h){g._trigger("receive",h,this._uiHash(this))}}).call(this,this.currentContainer));f.push((function(g){return function(h){g._trigger("update",h,this._uiHash(this))}}).call(this,this.currentContainer))}}for(var c=this.containers.length-1;c>=0;c--){if(!e){f.push((function(g){return function(h){g._trigger("deactivate",h,this._uiHash(this))}}).call(this,this.containers[c]))}if(this.containers[c].containerCache.over){f.push((function(g){return function(h){g._trigger("out",h,this._uiHash(this))}}).call(this,this.containers[c]));this.containers[c].containerCache.over=0}}if(this._storedCursor){a("body").css("cursor",this._storedCursor)}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)}this.dragging=false;if(this.cancelHelperRemoval){if(!e){this._trigger("beforeStop",d,this._uiHash());for(var c=0;c<f.length;c++){f[c].call(this,d)}this._trigger("stop",d,this._uiHash())}this.fromOutside=false;return false}if(!e){this._trigger("beforeStop",d,this._uiHash())}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!=this.currentItem[0]){this.helper.remove()}this.helper=null;if(!e){for(var c=0;c<f.length;c++){f[c].call(this,d)}this._trigger("stop",d,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){if(a.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()}},_uiHash:function(c){var d=c||this;return{helper:d.helper,placeholder:d.placeholder||a([]),position:d.position,originalPosition:d.originalPosition,offset:d.positionAbs,item:d.currentItem,sender:c?c.element:null}}})})(jQuery);(jQuery.effects||(function(b,d){var a=b.uiBackCompat!==false,c="ui-effects-";b.effects={effect:{}};
/*!
 * jQuery Color Animations v2.0.0
 * http://jquery.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Mon Aug 13 13:41:02 2012 -0500
 */
(function(s,h){var o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),l=/^([\-+])=\s*(\d+\.?\d*)/,k=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1]*2.55,t[2]*2.55,t[3]*2.55,t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],i=s.Color=function(u,v,t,w){return new s.Color.fn.parse(u,v,t,w)},n={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},r={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},q=i.support={},f=s("<p>")[0],e,p=s.each;f.style.cssText="background-color:rgba(1,1,1,.5)";q.rgba=f.style.backgroundColor.indexOf("rgba")>-1;p(n,function(t,u){u.cache="_"+t;u.props.alpha={idx:3,type:"percent",def:1}});function m(u,w,v){var t=r[w.type]||{};if(u==null){return(v||!w.def)?null:w.def}u=t.floor?~~u:parseFloat(u);if(isNaN(u)){return w.def}if(t.mod){return(u+t.mod)%t.mod}return 0>u?0:t.max<u?t.max:u}function j(t){var v=i(),u=v._rgba=[];t=t.toLowerCase();p(k,function(B,C){var z,A=C.re.exec(t),y=A&&C.parse(A),w=C.space||"rgba";if(y){z=v[w](y);v[n[w].cache]=z[n[w].cache];u=v._rgba=z._rgba;return false}});if(u.length){if(u.join()==="0,0,0,0"){s.extend(u,e.transparent)}return v}return e[t]}i.fn=s.extend(i.prototype,{parse:function(A,y,t,z){if(A===h){this._rgba=[null,null,null,null];return this}if(A.jquery||A.nodeType){A=s(A).css(y);y=h}var w=this,v=s.type(A),u=this._rgba=[];if(y!==h){A=[A,y,t,z];v="array"}if(v==="string"){return this.parse(j(A)||e._default)}if(v==="array"){p(n.rgba.props,function(B,C){u[C.idx]=m(A[C.idx],C)});return this}if(v==="object"){if(A instanceof i){p(n,function(B,C){if(A[C.cache]){w[C.cache]=A[C.cache].slice()}})}else{p(n,function(C,D){var B=D.cache;p(D.props,function(E,F){if(!w[B]&&D.to){if(E==="alpha"||A[E]==null){return}w[B]=D.to(w._rgba)}w[B][F.idx]=m(A[E],F,true)});if(w[B]&&b.inArray(null,w[B].slice(0,3))<0){w[B][3]=1;if(D.from){w._rgba=D.from(w[B])}}})}return this}},is:function(v){var t=i(v),w=true,u=this;p(n,function(y,A){var B,z=t[A.cache];if(z){B=u[A.cache]||A.to&&A.to(u._rgba)||[];p(A.props,function(C,D){if(z[D.idx]!=null){w=(z[D.idx]===B[D.idx]);return w}})}return w});return w},_space:function(){var t=[],u=this;p(n,function(v,w){if(u[w.cache]){t.push(v)}});return t.pop()},transition:function(u,B){var v=i(u),w=v._space(),y=n[w],z=this.alpha()===0?i("transparent"):this,A=z[y.cache]||y.to(z._rgba),t=A.slice();v=v[y.cache];p(y.props,function(F,H){var E=H.idx,D=A[E],C=v[E],G=r[H.type]||{};if(C===null){return}if(D===null){t[E]=C}else{if(G.mod){if(C-D>G.mod/2){D+=G.mod}else{if(D-C>G.mod/2){D-=G.mod}}}t[E]=m((C-D)*B+D,H)}});return this[w](t)},blend:function(w){if(this._rgba[3]===1){return this}var v=this._rgba.slice(),u=v.pop(),t=i(w)._rgba;return i(s.map(v,function(y,z){return(1-u)*t[z]+u*y}))},toRgbaString:function(){var u="rgba(",t=s.map(this._rgba,function(w,y){return w==null?(y>2?1:0):w});if(t[3]===1){t.pop();u="rgb("}return u+t.join()+")"},toHslaString:function(){var u="hsla(",t=s.map(this.hsla(),function(w,y){if(w==null){w=y>2?1:0}if(y&&y<3){w=Math.round(w*100)+"%"}return w});if(t[3]===1){t.pop();u="hsl("}return u+t.join()+")"},toHexString:function(t){var u=this._rgba.slice(),v=u.pop();if(t){u.push(~~(v*255))}return"#"+s.map(u,function(w){w=(w||0).toString(16);return w.length===1?"0"+w:w}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}});i.fn.parse.prototype=i.fn;function g(v,u,t){t=(t+1)%1;if(t*6<1){return v+(u-v)*t*6}if(t*2<1){return u}if(t*3<2){return v+(u-v)*((2/3)-t)*6}return v}n.hsla.to=function(v){if(v[0]==null||v[1]==null||v[2]==null){return[null,null,null,v[3]]}var t=v[0]/255,z=v[1]/255,A=v[2]/255,C=v[3],B=Math.max(t,z,A),w=Math.min(t,z,A),D=B-w,E=B+w,u=E*0.5,y,F;if(w===B){y=0}else{if(t===B){y=(60*(z-A)/D)+360}else{if(z===B){y=(60*(A-t)/D)+120}else{y=(60*(t-z)/D)+240}}}if(u===0||u===1){F=u}else{if(u<=0.5){F=D/E}else{F=D/(2-E)}}return[Math.round(y)%360,F,u,C==null?1:C]};n.hsla.from=function(y){if(y[0]==null||y[1]==null||y[2]==null){return[null,null,null,y[3]]}var w=y[0]/360,v=y[1],u=y[2],t=y[3],z=u<=0.5?u*(1+v):u+v-u*v,A=2*u-z;return[Math.round(g(A,z,w+(1/3))*255),Math.round(g(A,z,w)*255),Math.round(g(A,z,w-(1/3))*255),t]};p(n,function(u,w){var v=w.props,t=w.cache,z=w.to,y=w.from;i.fn[u]=function(E){if(z&&!this[t]){this[t]=z(this._rgba)}if(E===h){return this[t].slice()}var B,D=s.type(E),A=(D==="array"||D==="object")?E:arguments,C=this[t].slice();p(v,function(F,H){var G=A[D==="object"?F:H.idx];if(G==null){G=C[H.idx]}C[H.idx]=m(G,H)});if(y){B=i(y(C));B[t]=C;return B}else{return i(C)}};p(v,function(A,B){if(i.fn[A]){return}i.fn[A]=function(F){var H=s.type(F),E=(A==="alpha"?(this._hsla?"hsla":"rgba"):u),D=this[E](),G=D[B.idx],C;if(H==="undefined"){return G}if(H==="function"){F=F.call(this,G);H=s.type(F)}if(F==null&&B.empty){return this}if(H==="string"){C=l.exec(F);if(C){F=G+parseFloat(C[2])*(C[1]==="+"?1:-1)}}D[B.idx]=F;return this[E](D)}})});p(o,function(t,u){s.cssHooks[u]={set:function(A,B){var w,z,v="";if(s.type(B)!=="string"||(w=j(B))){B=i(w||B);if(!q.rgba&&B._rgba[3]!==1){z=u==="backgroundColor"?A.parentNode:A;while((v===""||v==="transparent")&&z&&z.style){try{v=s.css(z,"backgroundColor");z=z.parentNode}catch(C){}}B=B.blend(v&&v!=="transparent"?v:"_default")}B=B.toRgbaString()}try{A.style[u]=B}catch(y){}}};s.fx.step[u]=function(v){if(!v.colorInit){v.start=i(v.elem,u);v.end=i(v.end);v.colorInit=true}s.cssHooks[u].set(v.elem,v.start.transition(v.end,v.pos))}});s.cssHooks.borderColor={expand:function(u){var t={};p(["Top","Right","Bottom","Left"],function(w,v){t["border"+v+"Color"]=u});return t}};e=s.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);(function(){var f=["add","remove","toggle"],g={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};b.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(i,j){b.fx.step[j]=function(k){if(k.end!=="none"&&!k.setAttr||k.pos===1&&!k.setAttr){jQuery.style(k.elem,j,k.end);k.setAttr=true}}});function h(){var k=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,l={},j,i;if(k&&k.length&&k[0]&&k[k[0]]){i=k.length;while(i--){j=k[i];if(typeof k[j]==="string"){l[b.camelCase(j)]=k[j]}}}else{for(j in k){if(typeof k[j]==="string"){l[j]=k[j]}}}return l}function e(i,k){var m={},j,l;for(j in k){l=k[j];if(i[j]!==l){if(!g[j]){if(b.fx.step[j]||!isNaN(parseFloat(l))){m[j]=l}}}}return m}b.effects.animateClass=function(i,j,m,l){var k=b.speed(j,m,l);return this.queue(function(){var p=b(this),n=p.attr("class")||"",o,q=k.children?p.find("*").andSelf():p;q=q.map(function(){var r=b(this);return{el:r,start:h.call(this)}});o=function(){b.each(f,function(r,s){if(i[s]){p[s+"Class"](i[s])}})};o();q=q.map(function(){this.end=h.call(this.el[0]);this.diff=e(this.start,this.end);return this});p.attr("class",n);q=q.map(function(){var t=this,r=b.Deferred(),s=jQuery.extend({},k,{queue:false,complete:function(){r.resolve(t)}});this.el.animate(this.diff,s);return r.promise()});b.when.apply(b,q.get()).done(function(){o();b.each(arguments,function(){var r=this.el;b.each(this.diff,function(s){r.css(s,"")})});k.complete.call(p[0])})})};b.fn.extend({_addClass:b.fn.addClass,addClass:function(j,i,l,k){return i?b.effects.animateClass.call(this,{add:j},i,l,k):this._addClass(j)},_removeClass:b.fn.removeClass,removeClass:function(j,i,l,k){return i?b.effects.animateClass.call(this,{remove:j},i,l,k):this._removeClass(j)},_toggleClass:b.fn.toggleClass,toggleClass:function(k,j,i,m,l){if(typeof j==="boolean"||j===d){if(!i){return this._toggleClass(k,j)}else{return b.effects.animateClass.call(this,(j?{add:k}:{remove:k}),i,m,l)}}else{return b.effects.animateClass.call(this,{toggle:k},j,i,m)}},switchClass:function(i,k,j,m,l){return b.effects.animateClass.call(this,{add:k,remove:i},j,m,l)}})})();(function(){b.extend(b.effects,{version:"1.9.2",save:function(h,j){for(var g=0;g<j.length;g++){if(j[g]!==null){h.data(c+j[g],h[0].style[j[g]])}}},restore:function(h,k){var j,g;for(g=0;g<k.length;g++){if(k[g]!==null){j=h.data(c+k[g]);if(j===d){j=""}h.css(k[g],j)}}},setMode:function(g,h){if(h==="toggle"){h=g.is(":hidden")?"show":"hide"}return h},getBaseline:function(h,i){var j,g;switch(h[0]){case"top":j=0;break;case"middle":j=0.5;break;case"bottom":j=1;break;default:j=h[0]/i.height}switch(h[1]){case"left":g=0;break;case"center":g=0.5;break;case"right":g=1;break;default:g=h[1]/i.width}return{x:g,y:j}},createWrapper:function(h){if(h.parent().is(".ui-effects-wrapper")){return h.parent()}var i={width:h.outerWidth(true),height:h.outerHeight(true),"float":h.css("float")},l=b("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),g={width:h.width(),height:h.height()},k=document.activeElement;try{k.id}catch(j){k=document.body}h.wrap(l);if(h[0]===k||b.contains(h[0],k)){b(k).focus()}l=h.parent();if(h.css("position")==="static"){l.css({position:"relative"});h.css({position:"relative"})}else{b.extend(i,{position:h.css("position"),zIndex:h.css("z-index")});b.each(["top","left","bottom","right"],function(m,n){i[n]=h.css(n);if(isNaN(parseInt(i[n],10))){i[n]="auto"}});h.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}h.css(g);return l.css(i).show()},removeWrapper:function(g){var h=document.activeElement;if(g.parent().is(".ui-effects-wrapper")){g.parent().replaceWith(g);if(g[0]===h||b.contains(g[0],h)){b(h).focus()}}return g},setTransition:function(h,j,g,i){i=i||{};b.each(j,function(l,k){var m=h.cssUnit(k);if(m[0]>0){i[k]=m[0]*g+m[1]}});return i}});function e(h,g,i,j){if(b.isPlainObject(h)){g=h;h=h.effect}h={effect:h};if(g==null){g={}}if(b.isFunction(g)){j=g;i=null;g={}}if(typeof g==="number"||b.fx.speeds[g]){j=i;i=g;g={}}if(b.isFunction(i)){j=i;i=null}if(g){b.extend(h,g)}i=i||g.duration;h.duration=b.fx.off?0:typeof i==="number"?i:i in b.fx.speeds?b.fx.speeds[i]:b.fx.speeds._default;h.complete=j||g.complete;return h}function f(g){if(!g||typeof g==="number"||b.fx.speeds[g]){return true}if(typeof g==="string"&&!b.effects.effect[g]){if(a&&b.effects[g]){return false}return true}return false}b.fn.extend({effect:function(){var i=e.apply(this,arguments),l=i.mode,g=i.queue,h=b.effects.effect[i.effect],j=!h&&a&&b.effects[i.effect];if(b.fx.off||!(h||j)){if(l){return this[l](i.duration,i.complete)}else{return this.each(function(){if(i.complete){i.complete.call(this)}})}}function k(o){var p=b(this),n=i.complete,q=i.mode;function m(){if(b.isFunction(n)){n.call(p[0])}if(b.isFunction(o)){o()}}if(p.is(":hidden")?q==="hide":q==="show"){m()}else{h.call(p[0],i,m)}}if(h){return g===false?this.each(k):this.queue(g||"fx",k)}else{return j.call(this,{options:i,duration:i.duration,callback:i.complete,mode:i.mode})}},_show:b.fn.show,show:function(h){if(f(h)){return this._show.apply(this,arguments)}else{var g=e.apply(this,arguments);g.mode="show";return this.effect.call(this,g)}},_hide:b.fn.hide,hide:function(h){if(f(h)){return this._hide.apply(this,arguments)}else{var g=e.apply(this,arguments);g.mode="hide";return this.effect.call(this,g)}},__toggle:b.fn.toggle,toggle:function(h){if(f(h)||typeof h==="boolean"||b.isFunction(h)){return this.__toggle.apply(this,arguments)}else{var g=e.apply(this,arguments);g.mode="toggle";return this.effect.call(this,g)}},cssUnit:function(g){var h=this.css(g),i=[];b.each(["em","px","%","pt"],function(j,k){if(h.indexOf(k)>0){i=[parseFloat(h),k]}});return i}})})();(function(){var e={};b.each(["Quad","Cubic","Quart","Quint","Expo"],function(g,f){e[f]=function(h){return Math.pow(h,g+2)}});b.extend(e,{Sine:function(f){return 1-Math.cos(f*Math.PI/2)},Circ:function(f){return 1-Math.sqrt(1-f*f)},Elastic:function(f){return f===0||f===1?f:-Math.pow(2,8*(f-1))*Math.sin(((f-1)*80-7.5)*Math.PI/15)},Back:function(f){return f*f*(3*f-2)},Bounce:function(h){var f,g=4;while(h<((f=Math.pow(2,--g))-1)/11){}return 1/Math.pow(4,3-g)-7.5625*Math.pow((f*3-2)/22-h,2)}});b.each(e,function(g,f){b.easing["easeIn"+g]=f;b.easing["easeOut"+g]=function(h){return 1-f(1-h)};b.easing["easeInOut"+g]=function(h){return h<0.5?f(h*2)/2:1-f(h*-2+2)/2}})})()})(jQuery));(function(d,e){var b=0,c={},a={};c.height=c.paddingTop=c.paddingBottom=c.borderTopWidth=c.borderBottomWidth="hide";a.height=a.paddingTop=a.paddingBottom=a.borderTopWidth=a.borderBottomWidth="show";d.widget("ui.accordion",{version:"1.9.2",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var g=this.accordionId="ui-accordion-"+(this.element.attr("id")||++b),f=this.options;this.prevShow=this.prevHide=d();this.element.addClass("ui-accordion ui-widget ui-helper-reset");this.headers=this.element.find(f.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");this._hoverable(this.headers);this._focusable(this.headers);this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide();if(!f.collapsible&&(f.active===false||f.active==null)){f.active=0}if(f.active<0){f.active+=this.headers.length}this.active=this._findActive(f.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top");this.active.next().addClass("ui-accordion-content-active").show();this._createIcons();this.refresh();this.element.attr("role","tablist");this.headers.attr("role","tab").each(function(l){var m=d(this),k=m.attr("id"),h=m.next(),j=h.attr("id");if(!k){k=g+"-header-"+l;m.attr("id",k)}if(!j){j=g+"-panel-"+l;h.attr("id",j)}m.attr("aria-controls",j);h.attr("aria-labelledby",k)}).next().attr("role","tabpanel");this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide();if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)}else{this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"})}this._on(this.headers,{keydown:"_keydown"});this._on(this.headers.next(),{keydown:"_panelKeyDown"});this._setupEvents(f.event)},_getCreateEventData:function(){return{header:this.active,content:!this.active.length?d():this.active.next()}},_createIcons:function(){var f=this.options.icons;if(f){d("<span>").addClass("ui-accordion-header-icon ui-icon "+f.header).prependTo(this.headers);this.active.children(".ui-accordion-header-icon").removeClass(f.header).addClass(f.activeHeader);this.headers.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var f;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")}});this._destroyIcons();f=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")}});if(this.options.heightStyle!=="content"){f.css("height","")}},_setOption:function(f,g){if(f==="active"){this._activate(g);return}if(f==="event"){if(this.options.event){this._off(this.headers,this.options.event)}this._setupEvents(g)}this._super(f,g);if(f==="collapsible"&&!g&&this.options.active===false){this._activate(0)}if(f==="icons"){this._destroyIcons();if(g){this._createIcons()}}if(f==="disabled"){this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!g)}},_keydown:function(i){if(i.altKey||i.ctrlKey){return}var j=d.ui.keyCode,h=this.headers.length,f=this.headers.index(i.target),g=false;switch(i.keyCode){case j.RIGHT:case j.DOWN:g=this.headers[(f+1)%h];break;case j.LEFT:case j.UP:g=this.headers[(f-1+h)%h];break;case j.SPACE:case j.ENTER:this._eventHandler(i);break;case j.HOME:g=this.headers[0];break;case j.END:g=this.headers[h-1];break}if(g){d(i.target).attr("tabIndex",-1);d(g).attr("tabIndex",0);g.focus();i.preventDefault()}},_panelKeyDown:function(f){if(f.keyCode===d.ui.keyCode.UP&&f.ctrlKey){d(f.currentTarget).prev().focus()}},refresh:function(){var h,i,f=this.options.heightStyle,g=this.element.parent();if(f==="fill"){if(!d.support.minHeight){i=g.css("overflow");g.css("overflow","hidden")}h=g.height();this.element.siblings(":visible").each(function(){var k=d(this),j=k.css("position");if(j==="absolute"||j==="fixed"){return}h-=k.outerHeight(true)});if(i){g.css("overflow",i)}this.headers.each(function(){h-=d(this).outerHeight(true)});this.headers.next().each(function(){d(this).height(Math.max(0,h-d(this).innerHeight()+d(this).height()))}).css("overflow","auto")}else{if(f==="auto"){h=0;this.headers.next().each(function(){h=Math.max(h,d(this).css("height","").height())}).height(h)}}},_activate:function(f){var g=this._findActive(f)[0];if(g===this.active[0]){return}g=g||this.active[0];this._eventHandler({target:g,currentTarget:g,preventDefault:d.noop})},_findActive:function(f){return typeof f==="number"?this.headers.eq(f):d()},_setupEvents:function(g){var f={};if(!g){return}d.each(g.split(" "),function(i,h){f[h]="_eventHandler"});this._on(this.headers,f)},_eventHandler:function(f){var n=this.options,i=this.active,j=d(f.currentTarget),l=j[0]===i[0],g=l&&n.collapsible,h=g?d():j.next(),k=i.next(),m={oldHeader:i,oldPanel:k,newHeader:g?d():j,newPanel:h};f.preventDefault();if((l&&!n.collapsible)||(this._trigger("beforeActivate",f,m)===false)){return}n.active=g?false:this.headers.index(j);this.active=l?d():j;this._toggle(m);i.removeClass("ui-accordion-header-active ui-state-active");if(n.icons){i.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header)}if(!l){j.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");if(n.icons){j.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader)}j.next().addClass("ui-accordion-content-active")}},_toggle:function(h){var f=h.newPanel,g=this.prevShow.length?this.prevShow:h.oldPanel;this.prevShow.add(this.prevHide).stop(true,true);this.prevShow=f;this.prevHide=g;if(this.options.animate){this._animate(f,g,h)}else{g.hide();f.show();this._toggleComplete(h)}g.attr({"aria-expanded":"false","aria-hidden":"true"});g.prev().attr("aria-selected","false");if(f.length&&g.length){g.prev().attr("tabIndex",-1)}else{if(f.length){this.headers.filter(function(){return d(this).attr("tabIndex")===0}).attr("tabIndex",-1)}}f.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(f,n,j){var m,l,i,k=this,o=0,p=f.length&&(!n.length||(f.index()<n.index())),h=this.options.animate||{},q=p&&h.down||h,g=function(){k._toggleComplete(j)};if(typeof q==="number"){i=q}if(typeof q==="string"){l=q}l=l||q.easing||h.easing;i=i||q.duration||h.duration;if(!n.length){return f.animate(a,i,l,g)}if(!f.length){return n.animate(c,i,l,g)}m=f.show().outerHeight();n.animate(c,{duration:i,easing:l,step:function(r,s){s.now=Math.round(r)}});f.hide().animate(a,{duration:i,easing:l,complete:g,step:function(r,s){s.now=Math.round(r);if(s.prop!=="height"){o+=s.now}else{if(k.options.heightStyle!=="content"){s.now=Math.round(m-n.outerHeight()-o);o=0}}}})},_toggleComplete:function(g){var f=g.oldPanel;f.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");if(f.length){f.parent()[0].className=f.parent()[0].className}this._trigger("activate",null,g)}});if(d.uiBackCompat!==false){(function(g,f){g.extend(f.options,{navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}});var h=f._create;f._create=function(){if(this.options.navigation){var j=this,l=this.element.find(this.options.header),i=l.next(),k=l.add(i).find("a").filter(this.options.navigationFilter)[0];if(k){l.add(i).each(function(m){if(g.contains(this,k)){j.options.active=Math.floor(m/2);return false}})}}h.call(this)}}(jQuery,jQuery.ui.accordion.prototype));(function(h,f){h.extend(f.options,{heightStyle:null,autoHeight:true,clearStyle:false,fillSpace:false});var i=f._create,g=f._setOption;h.extend(f,{_create:function(){this.options.heightStyle=this.options.heightStyle||this._mergeHeightStyle();i.call(this)},_setOption:function(j){if(j==="autoHeight"||j==="clearStyle"||j==="fillSpace"){this.options.heightStyle=this._mergeHeightStyle()}g.apply(this,arguments)},_mergeHeightStyle:function(){var j=this.options;if(j.fillSpace){return"fill"}if(j.clearStyle){return"content"}if(j.autoHeight){return"auto"}}})}(jQuery,jQuery.ui.accordion.prototype));(function(h,g){h.extend(g.options.icons,{activeHeader:null,headerSelected:"ui-icon-triangle-1-s"});var f=g._createIcons;g._createIcons=function(){if(this.options.icons){this.options.icons.activeHeader=this.options.icons.activeHeader||this.options.icons.headerSelected}f.call(this)}}(jQuery,jQuery.ui.accordion.prototype));(function(h,g){g.activate=g._activate;var f=g._findActive;g._findActive=function(i){if(i===-1){i=false}if(i&&typeof i!=="number"){i=this.headers.index(this.headers.filter(i));if(i===-1){i=false}}return f.call(this,i)}}(jQuery,jQuery.ui.accordion.prototype));jQuery.ui.accordion.prototype.resize=jQuery.ui.accordion.prototype.refresh;(function(h,g){h.extend(g.options,{change:null,changestart:null});var f=g._trigger;g._trigger=function(j,k,l){var i=f.apply(this,arguments);if(!i){return false}if(j==="beforeActivate"){i=f.call(this,"changestart",k,{oldHeader:l.oldHeader,oldContent:l.oldPanel,newHeader:l.newHeader,newContent:l.newPanel})}else{if(j==="activate"){i=f.call(this,"change",k,{oldHeader:l.oldHeader,oldContent:l.oldPanel,newHeader:l.newHeader,newContent:l.newPanel})}}return i}}(jQuery,jQuery.ui.accordion.prototype));(function(g,f){g.extend(f.options,{animate:null,animated:"slide"});var h=f._create;f._create=function(){var i=this.options;if(i.animate===null){if(!i.animated){i.animate=false}else{if(i.animated==="slide"){i.animate=300}else{if(i.animated==="bounceslide"){i.animate={duration:200,down:{easing:"easeOutBounce",duration:1000}}}else{i.animate=i.animated}}}}h.call(this)}}(jQuery,jQuery.ui.accordion.prototype))}})(jQuery);(function(a,b){var c=0;a.widget("ui.autocomplete",{version:"1.9.2",defaultElement:"<input>",options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var e,d,f;this.isMultiLine=this._isMultiLine();this.valueMethod=this.element[this.element.is("input,textarea")?"val":"text"];this.isNewMenu=true;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");this._on(this.element,{keydown:function(g){if(this.element.prop("readOnly")){e=true;f=true;d=true;return}e=false;f=false;d=false;var h=a.ui.keyCode;switch(g.keyCode){case h.PAGE_UP:e=true;this._move("previousPage",g);break;case h.PAGE_DOWN:e=true;this._move("nextPage",g);break;case h.UP:e=true;this._keyEvent("previous",g);break;case h.DOWN:e=true;this._keyEvent("next",g);break;case h.ENTER:case h.NUMPAD_ENTER:if(this.menu.active){e=true;g.preventDefault();this.menu.select(g)}break;case h.TAB:if(this.menu.active){this.menu.select(g)}break;case h.ESCAPE:if(this.menu.element.is(":visible")){this._value(this.term);this.close(g);g.preventDefault()}break;default:d=true;this._searchTimeout(g);break}},keypress:function(g){if(e){e=false;g.preventDefault();return}if(d){return}var h=a.ui.keyCode;switch(g.keyCode){case h.PAGE_UP:this._move("previousPage",g);break;case h.PAGE_DOWN:this._move("nextPage",g);break;case h.UP:this._keyEvent("previous",g);break;case h.DOWN:this._keyEvent("next",g);break}},input:function(g){if(f){f=false;g.preventDefault();return}this._searchTimeout(g)},focus:function(){this.selectedItem=null;this.previous=this._value()},blur:function(g){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching);this.close(g);this._change(g)}});this._initSource();this.menu=a("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo||"body")[0]).menu({input:a(),role:null}).zIndex(this.element.zIndex()+1).hide().data("menu");this._on(this.menu.element,{mousedown:function(g){g.preventDefault();this.cancelBlur=true;this._delay(function(){delete this.cancelBlur});var h=this.menu.element[0];if(!a(g.target).closest(".ui-menu-item").length){this._delay(function(){var i=this;this.document.one("mousedown",function(j){if(j.target!==i.element[0]&&j.target!==h&&!a.contains(h,j.target)){i.close()}})})}},menufocus:function(h,i){if(this.isNewMenu){this.isNewMenu=false;if(h.originalEvent&&/^mouse/.test(h.originalEvent.type)){this.menu.blur();this.document.one("mousemove",function(){a(h.target).trigger(h.originalEvent)});return}}var g=i.item.data("ui-autocomplete-item")||i.item.data("item.autocomplete");if(false!==this._trigger("focus",h,{item:g})){if(h.originalEvent&&/^key/.test(h.originalEvent.type)){this._value(g.value)}}else{this.liveRegion.text(g.value)}},menuselect:function(i,j){var h=j.item.data("ui-autocomplete-item")||j.item.data("item.autocomplete"),g=this.previous;if(this.element[0]!==this.document[0].activeElement){this.element.focus();this.previous=g;this._delay(function(){this.previous=g;this.selectedItem=h})}if(false!==this._trigger("select",i,{item:h})){this._value(h.value)}this.term=this._value();this.close(i);this.selectedItem=h}});this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element);if(a.fn.bgiframe){this.menu.element.bgiframe()}this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching);this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");this.menu.element.remove();this.liveRegion.remove()},_setOption:function(d,e){this._super(d,e);if(d==="source"){this._initSource()}if(d==="appendTo"){this.menu.element.appendTo(this.document.find(e||"body")[0])}if(d==="disabled"&&e&&this.xhr){this.xhr.abort()}},_isMultiLine:function(){if(this.element.is("textarea")){return true}if(this.element.is("input")){return false}return this.element.prop("isContentEditable")},_initSource:function(){var f,d,e=this;if(a.isArray(this.options.source)){f=this.options.source;this.source=function(h,g){g(a.ui.autocomplete.filter(f,h.term))}}else{if(typeof this.options.source==="string"){d=this.options.source;this.source=function(h,g){if(e.xhr){e.xhr.abort()}e.xhr=a.ajax({url:d,data:h,dataType:"json",success:function(i){g(i)},error:function(){g([])}})}}else{this.source=this.options.source}}},_searchTimeout:function(d){clearTimeout(this.searching);this.searching=this._delay(function(){if(this.term!==this._value()){this.selectedItem=null;this.search(null,d)}},this.options.delay)},search:function(e,d){e=e!=null?e:this._value();this.term=this._value();if(e.length<this.options.minLength){return this.close(d)}if(this._trigger("search",d)===false){return}return this._search(e)},_search:function(d){this.pending++;this.element.addClass("ui-autocomplete-loading");this.cancelSearch=false;this.source({term:d},this._response())},_response:function(){var e=this,d=++c;return function(f){if(d===c){e.__response(f)}e.pending--;if(!e.pending){e.element.removeClass("ui-autocomplete-loading")}}},__response:function(d){if(d){d=this._normalize(d)}this._trigger("response",null,{content:d});if(!this.options.disabled&&d&&d.length&&!this.cancelSearch){this._suggest(d);this._trigger("open")}else{this._close()}},close:function(d){this.cancelSearch=true;this._close(d)},_close:function(d){if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.blur();this.isNewMenu=true;this._trigger("close",d)}},_change:function(d){if(this.previous!==this._value()){this._trigger("change",d,{item:this.selectedItem})}},_normalize:function(d){if(d.length&&d[0].label&&d[0].value){return d}return a.map(d,function(e){if(typeof e==="string"){return{label:e,value:e}}return a.extend({label:e.label||e.value,value:e.value||e.label},e)})},_suggest:function(d){var e=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(e,d);this.menu.refresh();e.show();this._resizeMenu();e.position(a.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next()}},_resizeMenu:function(){var d=this.menu.element;d.outerWidth(Math.max(d.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,d){var f=this;a.each(d,function(g,h){f._renderItemData(e,h)})},_renderItemData:function(d,e){return this._renderItem(d,e).data("ui-autocomplete-item",e)},_renderItem:function(d,e){return a("<li>").append(a("<a>").text(e.label)).appendTo(d)},_move:function(e,d){if(!this.menu.element.is(":visible")){this.search(null,d);return}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term);this.menu.blur();return}this.menu[e](d)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,d){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(e,d);d.preventDefault()}}});a.extend(a.ui.autocomplete,{escapeRegex:function(d){return d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(f,d){var e=new RegExp(a.ui.autocomplete.escapeRegex(d),"i");return a.grep(f,function(g){return e.test(g.label||g.value||g)})}});a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(d){return d+(d>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var d;this._superApply(arguments);if(this.options.disabled||this.cancelSearch){return}if(e&&e.length){d=this.options.messages.results(e.length)}else{d=this.options.messages.noResults}this.liveRegion.text(d)}})}(jQuery));(function(f,b){var k,e,a,h,i="ui-button ui-widget ui-state-default ui-corner-all",c="ui-state-hover ui-state-active ",g="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",j=function(){var l=f(this).find(":ui-button");setTimeout(function(){l.button("refresh")},1)},d=function(m){var l=m.name,n=m.form,o=f([]);if(l){if(n){o=f(n).find("[name='"+l+"']")}else{o=f("[name='"+l+"']",m.ownerDocument).filter(function(){return !this.form})}}return o};f.widget("ui.button",{version:"1.9.2",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,j);if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")}else{this.element.prop("disabled",this.options.disabled)}this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var o=this,m=this.options,p=this.type==="checkbox"||this.type==="radio",n=!p?"ui-state-active":"",l="ui-state-focus";if(m.label===null){m.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html())}this._hoverable(this.buttonElement);this.buttonElement.addClass(i).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(m.disabled){return}if(this===k){f(this).addClass("ui-state-active")}}).bind("mouseleave"+this.eventNamespace,function(){if(m.disabled){return}f(this).removeClass(n)}).bind("click"+this.eventNamespace,function(q){if(m.disabled){q.preventDefault();q.stopImmediatePropagation()}});this.element.bind("focus"+this.eventNamespace,function(){o.buttonElement.addClass(l)}).bind("blur"+this.eventNamespace,function(){o.buttonElement.removeClass(l)});if(p){this.element.bind("change"+this.eventNamespace,function(){if(h){return}o.refresh()});this.buttonElement.bind("mousedown"+this.eventNamespace,function(q){if(m.disabled){return}h=false;e=q.pageX;a=q.pageY}).bind("mouseup"+this.eventNamespace,function(q){if(m.disabled){return}if(e!==q.pageX||a!==q.pageY){h=true}})}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(m.disabled||h){return false}f(this).toggleClass("ui-state-active");o.buttonElement.attr("aria-pressed",o.element[0].checked)})}else{if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(m.disabled||h){return false}f(this).addClass("ui-state-active");o.buttonElement.attr("aria-pressed","true");var q=o.element[0];d(q).not(q).map(function(){return f(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")})}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(m.disabled){return false}f(this).addClass("ui-state-active");k=this;o.document.one("mouseup",function(){k=null})}).bind("mouseup"+this.eventNamespace,function(){if(m.disabled){return false}f(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(q){if(m.disabled){return false}if(q.keyCode===f.ui.keyCode.SPACE||q.keyCode===f.ui.keyCode.ENTER){f(this).addClass("ui-state-active")}}).bind("keyup"+this.eventNamespace,function(){f(this).removeClass("ui-state-active")});if(this.buttonElement.is("a")){this.buttonElement.keyup(function(q){if(q.keyCode===f.ui.keyCode.SPACE){f(this).click()}})}}}this._setOption("disabled",m.disabled);this._resetButton()},_determineButtonType:function(){var l,n,m;if(this.element.is("[type=checkbox]")){this.type="checkbox"}else{if(this.element.is("[type=radio]")){this.type="radio"}else{if(this.element.is("input")){this.type="input"}else{this.type="button"}}}if(this.type==="checkbox"||this.type==="radio"){l=this.element.parents().last();n="label[for='"+this.element.attr("id")+"']";this.buttonElement=l.find(n);if(!this.buttonElement.length){l=l.length?l.siblings():this.element.siblings();this.buttonElement=l.filter(n);if(!this.buttonElement.length){this.buttonElement=l.find(n)}}this.element.addClass("ui-helper-hidden-accessible");m=this.element.is(":checked");if(m){this.buttonElement.addClass("ui-state-active")}this.buttonElement.prop("aria-pressed",m)}else{this.buttonElement=this.element}},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass(i+" "+c+" "+g).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());if(!this.hasTitle){this.buttonElement.removeAttr("title")}},_setOption:function(l,m){this._super(l,m);if(l==="disabled"){if(m){this.element.prop("disabled",true)}else{this.element.prop("disabled",false)}return}this._resetButton()},refresh:function(){var l=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");if(l!==this.options.disabled){this._setOption("disabled",l)}if(this.type==="radio"){d(this.element[0]).each(function(){if(f(this).is(":checked")){f(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")}else{f(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}})}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)}return}var p=this.buttonElement.removeClass(g),n=f("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(p.empty()).text(),m=this.options.icons,l=m.primary&&m.secondary,o=[];if(m.primary||m.secondary){if(this.options.text){o.push("ui-button-text-icon"+(l?"s":(m.primary?"-primary":"-secondary")))}if(m.primary){p.prepend("<span class='ui-button-icon-primary ui-icon "+m.primary+"'></span>")}if(m.secondary){p.append("<span class='ui-button-icon-secondary ui-icon "+m.secondary+"'></span>")}if(!this.options.text){o.push(l?"ui-button-icons-only":"ui-button-icon-only");if(!this.hasTitle){p.attr("title",f.trim(n))}}}else{o.push("ui-button-text-only")}p.addClass(o.join(" "))}});f.widget("ui.buttonset",{version:"1.9.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(l,m){if(l==="disabled"){this.buttons.button("option",l,m)}this._super(l,m)},refresh:function(){var l=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return f(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(l?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(l?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return f(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})}(jQuery));(function($,undefined){$.extend($.ui,{datepicker:{version:"1.9.2"}});var PROP_NAME="datepicker";var dpuuid=new Date().getTime();var instActive;function Datepicker(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false,holidayDaysSimple:null};$.extend(this._defaults,this.regional[""]);this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){if(this.debug){console.log.apply("",arguments)}},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase();var inline=(nodeName=="div"||nodeName=="span");if(!target.id){this.uuid+=1;target.id="dp"+this.uuid}var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{});if(nodeName=="input"){this._connectDatepicker(target,inst)}else{if(inline){this._inlineDatepicker(target,inst)}}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))}},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return}this._attachments(input,inst);input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});this._autoSize(inst);$.data(target,PROP_NAME,inst);if(inst.settings.disabled){this._disableDatepicker(target)}},_attachments:function(input,inst){var appendText=this._get(inst,"appendText");var isRTL=this._get(inst,"isRTL");if(inst.append){inst.append.remove()}if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+"</span>");input[isRTL?"before":"after"](inst.append)}input.unbind("focus",this._showDatepicker);if(inst.trigger){inst.trigger.remove()}var showOn=this._get(inst,"showOn");if(showOn=="focus"||showOn=="both"){input.focus(this._showDatepicker)}if(showOn=="button"||showOn=="both"){var buttonText=this._get(inst,"buttonText");var buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==""?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==input[0]){$.datepicker._hideDatepicker()}else{if($.datepicker._datepickerShowing&&$.datepicker._lastInput!=input[0]){$.datepicker._hideDatepicker();$.datepicker._showDatepicker(input[0])}else{$.datepicker._showDatepicker(input[0])}}return false})}},_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var date=new Date(2009,12-1,20);var dateFormat=this._get(inst,"dateFormat");if(dateFormat.match(/[DM]/)){var findMax=function(names){var max=0;var maxI=0;for(var i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i}}return maxI};date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))));date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?"dayNames":"dayNamesShort")))+20-date.getDay())}inst.input.attr("size",this._formatDate(inst,date).length)}},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return}divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});$.data(target,PROP_NAME,inst);this._setDate(inst,this._getDefaultDate(inst),true);this._updateDatepicker(inst);this._updateAlternate(inst);if(inst.settings.disabled){this._disableDatepicker(target)}inst.dpDiv.css("display","block")},_dialogDatepicker:function(input,date,onSelect,settings,pos){var inst=this._dialogInst;if(!inst){this.uuid+=1;var id="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+id+'" style="position: absolute; top: -100px; width: 0px;"/>');this._dialogInput.keydown(this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst)}extendRemove(inst.settings,settings||{});date=(date&&date.constructor==Date?this._formatDate(inst,date):date);this._dialogInput.val(date);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){var browserWidth=document.documentElement.clientWidth;var browserHeight=document.documentElement.clientHeight;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv)}$.data(this._dialogInput[0],PROP_NAME,inst);return this},_destroyDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();$.removeData(target,PROP_NAME);if(nodeName=="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else{if(nodeName=="div"||nodeName=="span"){$target.removeClass(this.markerClassName).empty()}}},_enableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)})},_disableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)});this._disabledInputs[this._disabledInputs.length]=target},_isDisabledDatepicker:function(target){if(!target){return false}for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]==target){return true}}return false},_getInst:function(target){try{return $.data(target,PROP_NAME)}catch(err){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(target,name,value){var inst=this._getInst(target);if(arguments.length==2&&typeof name=="string"){return(name=="defaults"?$.extend({},$.datepicker._defaults):(inst?(name=="all"?$.extend({},inst.settings):this._get(inst,name)):null))}var settings=name||{};if(typeof name=="string"){settings={};settings[name]=value}if(inst){if(this._curInst==inst){this._hideDatepicker()}var date=this._getDateDatepicker(target,true);var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");extendRemove(inst.settings,settings);if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){inst.settings.minDate=this._formatDate(inst,minDate)}if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){inst.settings.maxDate=this._formatDate(inst,maxDate)}this._attachments($(target),inst);this._autoSize(inst);this._setDate(inst,date);this._updateAlternate(inst);this._updateDatepicker(inst)}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst)}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst)}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst,noDefault)}return(inst?this._getDate(inst):null)},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);var handled=true;var isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=false;break;case 13:var sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv);if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])}var onSelect=$.datepicker._get(inst,"onSelect");if(onSelect){var dateStr=$.datepicker._formatDate(inst);onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{$.datepicker._hideDatepicker()}return false;break;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");break;case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target)}handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target)}handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")}break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D")}handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")}break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D")}handled=event.ctrlKey||event.metaKey;break;default:handled=false}}else{if(event.keyCode==36&&event.ctrlKey){$.datepicker._showDatepicker(this)}else{handled=false}}if(handled){event.preventDefault();event.stopPropagation()}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){var chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);return event.ctrlKey||event.metaKey||(chr<" "||!chars||chars.indexOf(chr)>-1)}},_doKeyUp:function(event){var inst=$.datepicker._getInst(event.target);if(inst.input.val()!=inst.lastVal){try{var date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));if(date){$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst)}}catch(err){$.datepicker.log(err)}}return true},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!="input"){input=$("input",input.parentNode)[0]}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input){return}var inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!=inst){$.datepicker._curInst.dpDiv.stop(true,true);if(inst&&$.datepicker._datepickerShowing){$.datepicker._hideDatepicker($.datepicker._curInst.input[0])}}extendRemove(inst.settings,beforeShowSettings);inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){input.value=""}if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight}var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")=="fixed";return !isFixed});var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.dpDiv.empty();inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){var showAnim=$.datepicker._get(inst,"showAnim");var duration=$.datepicker._get(inst,"duration");var postProcess=function(){var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");if(!!cover.length){var borders=$.datepicker._getBorders(inst.dpDiv);cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})}};inst.dpDiv.zIndex($(input).zIndex()+1);$.datepicker._datepickerShowing=true;if($.effects&&($.effects.effect[showAnim]||$.effects[showAnim])){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[showAnim||"show"]((showAnim?duration:null),postProcess)}if(!showAnim||!duration){postProcess()}if(inst.input.is(":visible")&&!inst.input.is(":disabled")){inst.input.focus()}$.datepicker._curInst=inst;var beforeShow=$.datepicker._get(inst,"beforeShow");var beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};if(beforeShowSettings===false){return}}},_updateDatepicker:function(inst){this.maxRows=4;var borders=$.datepicker._getBorders(inst.dpDiv);instActive=inst;inst.dpDiv.empty().append(this._generateHTML(inst));this._attachHandlers(inst);var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");if(!!cover.length){cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})}var numMonths=this._getNumberOfMonths(inst);var cols=numMonths[1];var width=17;inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width","415px")}inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst==$.datepicker._curInst&&$.datepicker._datepickerShowing&&inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&inst.input[0]!=document.activeElement){inst.input.focus()}if(inst.yearshtml){var origyearshtml=inst.yearshtml;setTimeout(function(){if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)}origyearshtml=inst.yearshtml=null},0)}},_getBorders:function(elem){var convert=function(value){return{thin:1,medium:2,thick:3}[value]||value};return[parseFloat(convert(elem.css("border-left-width"))),parseFloat(convert(elem.css("border-top-width")))]},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();var dpHeight=inst.dpDiv.outerHeight();var inputWidth=inst.input?inst.input.outerWidth():0;var inputHeight=inst.input?inst.input.outerHeight():0;var viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft());var viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);return offset},_findPos:function(obj){var inst=this._getInst(obj);var isRTL=this._get(inst,"isRTL");while(obj&&(obj.type=="hidden"||obj.nodeType!=1||$.expr.filters.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"]}var position=$(obj).offset();return[position.left,position.top]},_hideDatepicker:function(input){var inst=this._curInst;if(!inst||(input&&inst!=$.data(input,PROP_NAME))){return}if(this._datepickerShowing){var showAnim=this._get(inst,"showAnim");var duration=this._get(inst,"duration");var postProcess=function(){$.datepicker._tidyDialog(inst)};if($.effects&&($.effects.effect[showAnim]||$.effects[showAnim])){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[(showAnim=="slideDown"?"slideUp":(showAnim=="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess)}if(!showAnim){postProcess()}this._datepickerShowing=false;var onClose=this._get(inst,"onClose");if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])}this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(event){if(!$.datepicker._curInst){return}var $target=$(event.target),inst=$.datepicker._getInst($target[0]);if((($target[0].id!=$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length==0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)))||($target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=inst)){$.datepicker._hideDatepicker()}},_adjustDate:function(id,offset,period){var target=$(id);var inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return}this._adjustInstDate(inst,offset+(period=="M"?this._get(inst,"showCurrentAtPos"):0),period);this._updateDatepicker(inst);if(typeof(setSelectedDays)!="undefined"){setSelectedDays()}},_gotoToday:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear}else{var date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear()}this._notifyChange(inst);this._adjustDate(target)},_selectMonthYear:function(id,select,period){var target=$(id);var inst=this._getInst(target[0]);inst["selected"+(period=="M"?"Month":"Year")]=inst["draw"+(period=="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target)},_selectDay:function(id,month,year,td){var target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return}var inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).attr("data-day");inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))},_clearDate:function(id){var target=$(id);var inst=this._getInst(target[0]);this._selectDate(target,"")},_selectDate:function(id,dateStr){var target=$(id);var inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input){inst.input.val(dateStr)}this._updateAlternate(inst);var onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{if(inst.input){inst.input.trigger("change")}}if(inst.inline){this._updateDatepicker(inst)}else{this._hideDatepicker();this._lastInput=inst.input[0];if(typeof(inst.input[0])!="object"){inst.input.focus()}this._lastInput=null}},_updateAlternate:function(inst){var altField=this._get(inst,"altField");if(altField){var altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");var date=this._getDate(inst);var dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr)})}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),""]},iso8601Week:function(date){var checkDate=new Date(date.getTime());checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));var time=checkDate.getTime();checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments"}value=(typeof value=="object"?value.toString():value+"");if(value==""){return null}var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var year=-1;var month=-1;var day=-1;var doy=-1;var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var getNumber=function(match){var isDoubled=lookAhead(match);var size=(match=="@"?14:(match=="!"?20:(match=="y"&&isDoubled?4:(match=="o"?3:2))));var digits=new RegExp("^\\d{1,"+size+"}");var num=value.substring(iValue).match(digits);if(!num){throw"Missing number at position "+iValue}iValue+=num[0].length;return parseInt(num[0],10)};var getName=function(match,shortNames,longNames){var names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]]}).sort(function(a,b){return -(a[1].length-b[1].length)});var index=-1;$.each(names,function(i,pair){var name=pair[1];if(value.substr(iValue,name.length).toLowerCase()==name.toLowerCase()){index=pair[0];iValue+=name.length;return false}});if(index!=-1){return index+1}else{throw"Unknown name at position "+iValue}};var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat)){throw"Unexpected literal at position "+iValue}iValue++};var iValue=0;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{checkLiteral()}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":var date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"!":var date=new Date((getNumber("!")-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'")){checkLiteral()}else{literal=true}break;default:checkLiteral()}}}if(iValue<value.length){var extra=value.substr(iValue);if(!/^\s+/.test(extra)){throw"Extra/unparsed characters found in date: "+extra}}if(year==-1){year=new Date().getFullYear()}else{if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)}}if(doy>-1){month=1;day=doy;do{var dim=this._getDaysInMonth(year,month-1);if(day<=dim){break}month++;day-=dim}while(true)}var date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day){throw"Invalid date"}return date},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date){return""}var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num}}return num};var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])};var output="";var literal=false;if(date){for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{output+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=(lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);break;case"@":output+=date.getTime();break;case"!":output+=date.getTime()*10000+this._ticksTo1970;break;case"'":if(lookAhead("'")){output+="'"}else{literal=true}break;default:output+=format.charAt(iFormat)}}}}return output},_possibleChars:function(format){var chars="";var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{chars+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;case"'":if(lookAhead("'")){chars+="'"}else{literal=true}break;default:chars+=format.charAt(iFormat)}}}return chars},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]},_setDateFromField:function(inst,noDefault){if(inst.input.val()==inst.lastVal){return}var dateFormat=this._get(inst,"dateFormat");var dates=inst.lastVal=inst.input?inst.input.val():null;var date,defaultDate;date=defaultDate=this._getDefaultDate(inst);var settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate}catch(event){this.log(event);dates=(noDefault?"":dates)}inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst)},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()))},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date};var offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst))}catch(e){}var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date();var year=date.getFullYear();var month=date.getMonth();var day=date.getDate();var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;var matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break}matches=pattern.exec(offset)}return new Date(year,month,day)};var newDate=(date==null||date===""?defaultDate:(typeof date=="string"?offsetString(date):(typeof date=="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));newDate=(newDate&&newDate.toString()=="Invalid Date"?defaultDate:newDate);if(newDate){newDate.setHours(0);newDate.setMinutes(0);newDate.setSeconds(0);newDate.setMilliseconds(0)}return this._daylightSavingAdjust(newDate)},_daylightSavingAdjust:function(date){if(!date){return null}date.setHours(date.getHours()>12?date.getHours()+2:0);return date},_setDate:function(inst,date,noChange){var clear=!date;var origMonth=inst.selectedMonth;var origYear=inst.selectedYear;var newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));inst.selectedDay=inst.currentDay=newDate.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();if((origMonth!=inst.selectedMonth||origYear!=inst.selectedYear)&&!noChange){this._notifyChange(inst)}this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst))}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate},_attachHandlers:function(inst){var stepMonths=this._get(inst,"stepMonths");var id="#"+inst.id.replace(/\\\\/g,"\\");inst.dpDiv.find("[data-handler]").map(function(){var handler={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,-stepMonths,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,+stepMonths,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(id)},selectDay:function(){window["DP_jQuery_"+dpuuid].datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return false},selectMonth:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"M");return false},selectYear:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"Y");return false}};$(this).bind(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")])})},_generateHTML:function(inst){var today=new Date();today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));var isRTL=this._get(inst,"isRTL");var showButtonPanel=this._get(inst,"showButtonPanel");var hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext");var navigationAsDateFormat=this._get(inst,"navigationAsDateFormat");var numMonths=this._getNumberOfMonths(inst);var showCurrentAtPos=this._get(inst,"showCurrentAtPos");var stepMonths=this._get(inst,"stepMonths");var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");var drawMonth=inst.drawMonth-showCurrentAtPos;var drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--}if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--}}}inst.drawMonth=drawMonth;inst.drawYear=drawYear;var prevText=this._get(inst,"prevText");prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>"));var nextText=this._get(inst,"nextText");nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>"));var currentText=this._get(inst,"currentText");var gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(inst,"closeText")+"</button>":"");var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";var firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=(isNaN(firstDay)?0:firstDay);var showWeek=this._get(inst,"showWeek");var dayNames=this._get(inst,"dayNames");var dayNamesShort=this._get(inst,"dayNamesShort");var dayNamesMin=this._get(inst,"dayNamesMin");var monthNames=this._get(inst,"monthNames");var monthNamesShort=this._get(inst,"monthNamesShort");var beforeShowDay=this._get(inst,"beforeShowDay");var showOtherMonths=this._get(inst,"showOtherMonths");var selectOtherMonths=this._get(inst,"selectOtherMonths");var calculateWeek=this._get(inst,"calculateWeek")||this.iso8601Week;var defaultDate=this._getDefaultDate(inst);var holidayDaysSimple=this._get(inst,"holidayDaysSimple");var html="";var holidaySimpleName="";for(var row=0;row<numMonths[0];row++){var group="";this.maxRows=4;for(var col=0;col<numMonths[1];col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));var cornerClass=" ui-corner-all";var calender="";if(isMultiMonth){calender+='<div class="ui-datepicker-group';if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+=" ui-datepicker-group-last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+=" ui-datepicker-group-middle";cornerClass="";break}}calender+='">'}calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var thead=(showWeek?'<th class="ui-datepicker-week-col">'+this._get(inst,"weekHeader")+"</th>":"");for(var dow=0;dow<7;dow++){var day=(dow+firstDay)%7;thead+="<th"+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+dayNames[day]+'">'+dayNamesMin[day]+"</span></th>"}calender+=thead+"</tr></thead><tbody>";var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)}var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;var curRows=Math.ceil((leadDays+daysInMonth)/7);var numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);this.maxRows=numRows;var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(var dRow=0;dRow<numRows;dRow++){calender+="<tr>";var tbody=(!showWeek?"":'<td class="ui-datepicker-week-col">'+this._get(inst,"calculateWeek")(printDate)+"</td>");for(var dow=0;dow<7;dow++){if(printDate.getTime()==today.getTime()){holidaySimpleName="今日"}if(holidayDaysSimple){for(x=0;x<holidayDaysSimple.length;x++){if(printDate.getMonth()==(holidayDaysSimple[x][0]-1)&&printDate.getDate()==holidayDaysSimple[x][1]&&printDate.getFullYear()==holidayDaysSimple[x][2]){holidaySimpleName=holidayDaysSimple[x][3]}}}var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);var otherMonth=(printDate.getMonth()!=drawMonth);var unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+='<td class="'+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()==currentDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()==today.getTime()?" ui-datepicker-today":""))+'"'+((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':"")+(unselectable?"":' data-handler="selectDay" data-event="click" data-month="'+printDate.getMonth()+'" data-year="'+printDate.getFullYear()+'"')+">"+(otherMonth&&!showOtherMonths?"&#xa0;":(unselectable?'<span class="ui-state-default-sp" data-day="'+printDate.getDate()+'" holidaySimpleName="'+(holidaySimpleName?holidaySimpleName:"")+'">'+(holidaySimpleName?holidaySimpleName:printDate.getDate())+"</span>":'<a class="ui-state-default'+(otherMonth?" ui-priority-secondary":"")+'" href="#" data-day="'+printDate.getDate()+'" holidaySimpleName="'+(holidaySimpleName?holidaySimpleName:"")+'">'+(holidaySimpleName?holidaySimpleName:printDate.getDate())+"</a>"))+"</td>";printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate);holidaySimpleName=null}calender+=tbody+"</tr>"}drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++}calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':""):"");group+=calender}html+=group}html+=buttonPanel+($.ui.ie6&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");inst._keyEvent=false;return html},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var changeMonth=this._get(inst,"changeMonth");var changeYear=this._get(inst,"changeYear");var showMonthAfterYear=this._get(inst,"showMonthAfterYear");var html='<div class="ui-datepicker-title">';if(!inst.yearshtml){inst.yearshtml="";if(secondary||!changeYear){html+='<span class="ui-datepicker-year">'+drawYear+"</span>"}else{var years=this._get(inst,"yearRange").split(":");var thisYear=new Date().getFullYear();var determineYear=function(value){var year=(value.match(/c[+-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));return(isNaN(year)?thisYear:year)};var year=determineYear(years[0]);var endYear=Math.max(year,determineYear(years[1]||""));year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);inst.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;year<=endYear;year++){inst.yearshtml+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':"")+">"+year+"</option>"}inst.yearshtml+="</select>";html+=inst.yearshtml;inst.yearshtml=null}}var monthHtml="";if(secondary||!changeMonth){monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+"</span>"}else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);monthHtml+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':"")+">"+monthNamesShort[month]+"</option>"}}monthHtml+="</select>"}if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")}html+=this._get(inst,"yearSuffix");if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml}html+="</div>";return html},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=="Y"?offset:0);var month=inst.drawMonth+(period=="M"?offset:0);var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period=="D"?offset:0);var date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period=="M"||period=="Y"){this._notifyChange(inst)}},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");var newDate=(minDate&&date<minDate?minDate:date);newDate=(maxDate&&newDate>maxDate?maxDate:newDate);return newDate},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return(numMonths==null?[1,1]:(typeof numMonths=="number"?[1,numMonths]:numMonths))},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null)},_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate()},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))}return this._isInRange(inst,date)},_isInRange:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime()))},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear}var date=(day?(typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))}});function bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return dpDiv.delegate(selector,"mouseout",function(){$(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).removeClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).removeClass("ui-datepicker-next-hover")}}).delegate(selector,"mouseover",function(){if(!$.datepicker._isDisabledDatepicker(instActive.inline?dpDiv.parent()[0]:instActive.input[0])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");if(this.className.indexOf("ui-state-default")!=-1){$(this).addClass("ui-state-hover")}if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).addClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).addClass("ui-datepicker-next-hover")}}})}function extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null||props[name]==undefined){target[name]=props[name]}}return target}$.fn.datepicker=function(options){if(!this.length){return this}if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv);$.datepicker.initialized=true}var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=="string"&&(options=="isDisabled"||options=="getDate"||options=="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}return this.each(function(){typeof options=="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)})};$.datepicker=new Datepicker();$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.9.2";window["DP_jQuery_"+dpuuid]=$})(jQuery);(function(d,e){var b="ui-dialog ui-widget ui-widget-content ui-corner-all ",a={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},c={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};d.widget("ui.dialog",{version:"1.9.2",options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(g){var f=d(this).css(g).offset().top;if(f<0){d(this).css("top",g.top-f)}}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string"){this.originalTitle=""}this.oldPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.options.title=this.options.title||this.originalTitle;var k=this,j=this.options,m=j.title||"&#160;",h,l,f,i,g;h=(this.uiDialog=d("<div>")).addClass(b+j.dialogClass).css({display:"none",outline:0,zIndex:j.zIndex}).attr("tabIndex",-1).keydown(function(n){if(j.closeOnEscape&&!n.isDefaultPrevented()&&n.keyCode&&n.keyCode===d.ui.keyCode.ESCAPE){k.close(n);n.preventDefault()}}).mousedown(function(n){k.moveToTop(false,n)}).appendTo("body");this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(h);l=(this.uiDialogTitlebar=d("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown",function(){h.focus()}).prependTo(h);f=d("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role","button").click(function(n){n.preventDefault();k.close(n)}).appendTo(l);(this.uiDialogTitlebarCloseText=d("<span>")).addClass("ui-icon ui-icon-closethick").text(j.closeText).appendTo(f);i=d("<span>").uniqueId().addClass("ui-dialog-title").html(m).prependTo(l);g=(this.uiDialogButtonPane=d("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");(this.uiButtonSet=d("<div>")).addClass("ui-dialog-buttonset").appendTo(g);h.attr({role:"dialog","aria-labelledby":i.attr("id")});l.find("*").add(l).disableSelection();this._hoverable(f);this._focusable(f);if(j.draggable&&d.fn.draggable){this._makeDraggable()}if(j.resizable&&d.fn.resizable){this._makeResizable()}this._createButtons(j.buttons);this._isOpen=false;if(d.fn.bgiframe){h.bgiframe()}this._on(h,{keydown:function(p){if(!j.modal||p.keyCode!==d.ui.keyCode.TAB){return}var o=d(":tabbable",h),q=o.filter(":first"),n=o.filter(":last");if(p.target===n[0]&&!p.shiftKey){q.focus(1);return false}else{if(p.target===q[0]&&p.shiftKey){n.focus(1);return false}}}})},_init:function(){if(this.options.autoOpen){this.open()}},_destroy:function(){var g,f=this.oldPosition;if(this.overlay){this.overlay.destroy()}this.uiDialog.hide();this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");this.uiDialog.remove();if(this.originalTitle){this.element.attr("title",this.originalTitle)}g=f.parent.children().eq(f.index);if(g.length&&g[0]!==this.element[0]){g.before(this.element)}else{f.parent.append(this.element)}},widget:function(){return this.uiDialog},close:function(i){var h=this,g,f;if(!this._isOpen){return}if(false===this._trigger("beforeClose",i)){return}this._isOpen=false;if(this.overlay){this.overlay.destroy()}if(this.options.hide){this._hide(this.uiDialog,this.options.hide,function(){h._trigger("close",i)})}else{this.uiDialog.hide();this._trigger("close",i)}d.ui.dialog.overlay.resize();if(this.options.modal){g=0;d(".ui-dialog").each(function(){if(this!==h.uiDialog[0]){f=d(this).css("z-index");if(!isNaN(f)){g=Math.max(g,f)}}});d.ui.dialog.maxZ=g}return this},isOpen:function(){return this._isOpen},moveToTop:function(i,h){var g=this.options,f;if((g.modal&&!i)||(!g.stack&&!g.modal)){return this._trigger("focus",h)}if(g.zIndex>d.ui.dialog.maxZ){d.ui.dialog.maxZ=g.zIndex}if(this.overlay){d.ui.dialog.maxZ+=1;d.ui.dialog.overlay.maxZ=d.ui.dialog.maxZ;this.overlay.$el.css("z-index",d.ui.dialog.overlay.maxZ)}f={scrollTop:this.element.scrollTop(),scrollLeft:this.element.scrollLeft()};d.ui.dialog.maxZ+=1;this.uiDialog.css("z-index",d.ui.dialog.maxZ);this.element.attr(f);this._trigger("focus",h);return this},open:function(){if(this._isOpen){return}var h,g=this.options,f=this.uiDialog;this._size();this._position(g.position);f.show(g.show);this.overlay=g.modal?new d.ui.dialog.overlay(this):null;this.moveToTop(true);h=this.element.find(":tabbable");if(!h.length){h=this.uiDialogButtonPane.find(":tabbable");if(!h.length){h=f}}h.eq(0).focus();this._isOpen=true;this._trigger("open");return this},_createButtons:function(h){var g=this,f=false;this.uiDialogButtonPane.remove();this.uiButtonSet.empty();if(typeof h==="object"&&h!==null){d.each(h,function(){return !(f=true)})}if(f){d.each(h,function(i,k){var j,l;k=d.isFunction(k)?{click:k,text:i}:k;k=d.extend({type:"button"},k);l=k.click;k.click=function(){l.apply(g.element[0],arguments)};j=d("<button></button>",k).appendTo(g.uiButtonSet);if(d.fn.button){j.button()}});this.uiDialog.addClass("ui-dialog-buttons");this.uiDialogButtonPane.appendTo(this.uiDialog)}else{this.uiDialog.removeClass("ui-dialog-buttons")}},_makeDraggable:function(){var h=this,g=this.options;function f(i){return{position:i.position,offset:i.offset}}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(i,j){d(this).addClass("ui-dialog-dragging");h._trigger("dragStart",i,f(j))},drag:function(i,j){h._trigger("drag",i,f(j))},stop:function(i,j){g.position=[j.position.left-h.document.scrollLeft(),j.position.top-h.document.scrollTop()];d(this).removeClass("ui-dialog-dragging");h._trigger("dragStop",i,f(j));d.ui.dialog.overlay.resize()}})},_makeResizable:function(j){j=(j===e?this.options.resizable:j);var k=this,i=this.options,f=this.uiDialog.css("position"),h=typeof j==="string"?j:"n,e,s,w,se,sw,ne,nw";function g(l){return{originalPosition:l.originalPosition,originalSize:l.originalSize,position:l.position,size:l.size}}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:i.maxWidth,maxHeight:i.maxHeight,minWidth:i.minWidth,minHeight:this._minHeight(),handles:h,start:function(l,m){d(this).addClass("ui-dialog-resizing");k._trigger("resizeStart",l,g(m))},resize:function(l,m){k._trigger("resize",l,g(m))},stop:function(l,m){d(this).removeClass("ui-dialog-resizing");i.height=d(this).height();i.width=d(this).width();k._trigger("resizeStop",l,g(m));d.ui.dialog.overlay.resize()}}).css("position",f).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var f=this.options;if(f.height==="auto"){return f.minHeight}else{return Math.min(f.minHeight,f.height)}},_position:function(g){var h=[],i=[0,0],f;if(g){if(typeof g==="string"||(typeof g==="object"&&"0" in g)){h=g.split?g.split(" "):[g[0],g[1]];if(h.length===1){h[1]=h[0]}d.each(["left","top"],function(k,j){if(+h[k]===h[k]){i[k]=h[k];h[k]=j}});g={my:h[0]+(i[0]<0?i[0]:"+"+i[0])+" "+h[1]+(i[1]<0?i[1]:"+"+i[1]),at:h.join(" ")}}g=d.extend({},d.ui.dialog.prototype.options.position,g)}else{g=d.ui.dialog.prototype.options.position}f=this.uiDialog.is(":visible");if(!f){this.uiDialog.show()}this.uiDialog.position(g);if(!f){this.uiDialog.hide()}},_setOptions:function(h){var i=this,f={},g=false;d.each(h,function(j,k){i._setOption(j,k);if(j in a){g=true}if(j in c){f[j]=k}});if(g){this._size()}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option",f)}},_setOption:function(h,i){var g,j,f=this.uiDialog;switch(h){case"buttons":this._createButtons(i);break;case"closeText":this.uiDialogTitlebarCloseText.text(""+i);break;case"dialogClass":f.removeClass(this.options.dialogClass).addClass(b+i);break;case"disabled":if(i){f.addClass("ui-dialog-disabled")}else{f.removeClass("ui-dialog-disabled")}break;case"draggable":g=f.is(":data(draggable)");if(g&&!i){f.draggable("destroy")}if(!g&&i){this._makeDraggable()}break;case"position":this._position(i);break;case"resizable":j=f.is(":data(resizable)");if(j&&!i){f.resizable("destroy")}if(j&&typeof i==="string"){f.resizable("option","handles",i)}if(!j&&i!==false){this._makeResizable(i)}break;case"title":d(".ui-dialog-title",this.uiDialogTitlebar).html(""+(i||"&#160;"));break}this._super(h,i)},_size:function(){var g,j,i,h=this.options,f=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(h.minWidth>h.width){h.width=h.minWidth}g=this.uiDialog.css({height:"auto",width:h.width}).outerHeight();j=Math.max(0,h.minHeight-g);if(h.height==="auto"){if(d.support.minHeight){this.element.css({minHeight:j,height:"auto"})}else{this.uiDialog.show();i=this.element.css("height","auto").height();if(!f){this.uiDialog.hide()}this.element.height(Math.max(i,j))}}else{this.element.height(Math.max(h.height-g,0))}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())}}});d.extend(d.ui.dialog,{uuid:0,maxZ:0,getTitleId:function(f){var g=f.attr("id");if(!g){this.uuid+=1;g=this.uuid}return"ui-dialog-title-"+g},overlay:function(f){this.$el=d.ui.dialog.overlay.create(f)}});d.extend(d.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:d.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(f){return f+".dialog-overlay"}).join(" "),create:function(g){if(this.instances.length===0){setTimeout(function(){if(d.ui.dialog.overlay.instances.length){d(document).bind(d.ui.dialog.overlay.events,function(h){if(d(h.target).zIndex()<d.ui.dialog.overlay.maxZ){return false}})}},1);d(window).bind("resize.dialog-overlay",d.ui.dialog.overlay.resize)}var f=(this.oldInstances.pop()||d("<div>").addClass("ui-widget-overlay"));d(document).bind("keydown.dialog-overlay",function(h){var i=d.ui.dialog.overlay.instances;if(i.length!==0&&i[i.length-1]===f&&g.options.closeOnEscape&&!h.isDefaultPrevented()&&h.keyCode&&h.keyCode===d.ui.keyCode.ESCAPE){g.close(h);h.preventDefault()}});f.appendTo(document.body).css({width:this.width(),height:this.height()});if(d.fn.bgiframe){f.bgiframe()}this.instances.push(f);return f},destroy:function(f){var g=d.inArray(f,this.instances),h=0;if(g!==-1){this.oldInstances.push(this.instances.splice(g,1)[0])}if(this.instances.length===0){d([document,window]).unbind(".dialog-overlay")}f.height(0).width(0).remove();d.each(this.instances,function(){h=Math.max(h,this.css("z-index"))});this.maxZ=h},height:function(){var g,f;if(d.ui.ie){g=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);f=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);if(g<f){return d(window).height()+"px"}else{return g+"px"}}else{return d(document).height()+"px"}},width:function(){var f,g;if(d.ui.ie){f=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);g=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(f<g){return d(window).width()+"px"}else{return f+"px"}}else{return d(document).width()+"px"}},resize:function(){var f=d([]);d.each(d.ui.dialog.overlay.instances,function(){f=f.add(this)});f.css({width:0,height:0}).css({width:d.ui.dialog.overlay.width(),height:d.ui.dialog.overlay.height()})}});d.extend(d.ui.dialog.overlay.prototype,{destroy:function(){d.ui.dialog.overlay.destroy(this.$el)}})}(jQuery));(function(b,d){var a=/up|down|vertical/,c=/up|left|vertical|horizontal/;b.effects.effect.blind=function(g,m){var h=b(this),q=["position","top","bottom","left","right","height","width"],n=b.effects.setMode(h,g.mode||"hide"),r=g.direction||"up",j=a.test(r),i=j?"height":"width",p=j?"top":"left",t=c.test(r),l={},s=n==="show",f,e,k;if(h.parent().is(".ui-effects-wrapper")){b.effects.save(h.parent(),q)}else{b.effects.save(h,q)}h.show();f=b.effects.createWrapper(h).css({overflow:"hidden"});e=f[i]();k=parseFloat(f.css(p))||0;l[i]=s?e:0;if(!t){h.css(j?"bottom":"right",0).css(j?"top":"left","auto").css({position:"absolute"});l[p]=s?k:e+k}if(s){f.css(i,0);if(!t){f.css(p,k+e)}}f.animate(l,{duration:g.duration,easing:g.easing,queue:false,complete:function(){if(n==="hide"){h.hide()}b.effects.restore(h,q);b.effects.removeWrapper(h);m()}})}})(jQuery);(function(a,b){a.effects.effect.bounce=function(m,l){var c=a(this),d=["position","top","bottom","left","right","height","width"],k=a.effects.setMode(c,m.mode||"effect"),j=k==="hide",v=k==="show",w=m.direction||"up",e=m.distance,h=m.times||5,y=h*2+(v||j?1:0),u=m.duration/y,p=m.easing,f=(w==="up"||w==="down")?"top":"left",n=(w==="up"||w==="left"),t,g,s,q=c.queue(),r=q.length;if(v||j){d.push("opacity")}a.effects.save(c,d);c.show();a.effects.createWrapper(c);if(!e){e=c[f==="top"?"outerHeight":"outerWidth"]()/3}if(v){s={opacity:1};s[f]=0;c.css("opacity",0).css(f,n?-e*2:e*2).animate(s,u,p)}if(j){e=e/Math.pow(2,h-1)}s={};s[f]=0;for(t=0;t<h;t++){g={};g[f]=(n?"-=":"+=")+e;c.animate(g,u,p).animate(s,u,p);e=j?e*2:e/2}if(j){g={opacity:0};g[f]=(n?"-=":"+=")+e;c.animate(g,u,p)}c.queue(function(){if(j){c.hide()}a.effects.restore(c,d);a.effects.removeWrapper(c);l()});if(r>1){q.splice.apply(q,[1,0].concat(q.splice(r,y+1)))}c.dequeue()}})(jQuery);(function(a,b){a.effects.effect.clip=function(f,i){var g=a(this),m=["position","top","bottom","left","right","height","width"],l=a.effects.setMode(g,f.mode||"hide"),p=l==="show",n=f.direction||"vertical",k=n==="vertical",q=k?"height":"width",j=k?"top":"left",h={},d,e,c;a.effects.save(g,m);g.show();d=a.effects.createWrapper(g).css({overflow:"hidden"});e=(g[0].tagName==="IMG")?d:g;c=e[q]();if(p){e.css(q,0);e.css(j,c/2)}h[q]=p?c:0;h[j]=p?0:c/2;e.animate(h,{queue:false,duration:f.duration,easing:f.easing,complete:function(){if(!p){g.hide()}a.effects.restore(g,m);a.effects.removeWrapper(g);i()}})}})(jQuery);(function(a,b){a.effects.effect.drop=function(d,h){var e=a(this),j=["position","top","bottom","left","right","opacity","height","width"],i=a.effects.setMode(e,d.mode||"hide"),l=i==="show",k=d.direction||"left",f=(k==="up"||k==="down")?"top":"left",m=(k==="up"||k==="left")?"pos":"neg",g={opacity:l?1:0},c;a.effects.save(e,j);e.show();a.effects.createWrapper(e);c=d.distance||e[f==="top"?"outerHeight":"outerWidth"](true)/2;if(l){e.css("opacity",0).css(f,m==="pos"?-c:c)}g[f]=(l?(m==="pos"?"+=":"-="):(m==="pos"?"-=":"+="))+c;e.animate(g,{queue:false,duration:d.duration,easing:d.easing,complete:function(){if(i==="hide"){e.hide()}a.effects.restore(e,j);a.effects.removeWrapper(e);h()}})}})(jQuery);(function(a,b){a.effects.effect.explode=function(s,r){var k=s.pieces?Math.round(Math.sqrt(s.pieces)):3,d=k,c=a(this),m=a.effects.setMode(c,s.mode||"hide"),w=m==="show",g=c.show().css("visibility","hidden").offset(),t=Math.ceil(c.outerWidth()/d),q=Math.ceil(c.outerHeight()/k),h=[],v,u,e,p,n,l;function y(){h.push(this);if(h.length===k*d){f()}}for(v=0;v<k;v++){p=g.top+v*q;l=v-(k-1)/2;for(u=0;u<d;u++){e=g.left+u*t;n=u-(d-1)/2;c.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-u*t,top:-v*q}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:t,height:q,left:e+(w?n*t:0),top:p+(w?l*q:0),opacity:w?0:1}).animate({left:e+(w?0:n*t),top:p+(w?0:l*q),opacity:w?1:0},s.duration||500,s.easing,y)}}function f(){c.css({visibility:"visible"});a(h).remove();if(!w){c.hide()}r()}}})(jQuery);(function(a,b){a.effects.effect.fade=function(f,c){var d=a(this),e=a.effects.setMode(d,f.mode||"toggle");d.animate({opacity:e},{queue:false,duration:f.duration,easing:f.easing,complete:c})}})(jQuery);(function(a,b){a.effects.effect.fold=function(e,i){var f=a(this),n=["position","top","bottom","left","right","height","width"],k=a.effects.setMode(f,e.mode||"hide"),r=k==="show",l=k==="hide",t=e.size||15,m=/([0-9]+)%/.exec(t),s=!!e.horizFirst,j=r!==s,g=j?["width","height"]:["height","width"],h=e.duration/2,d,c,q={},p={};a.effects.save(f,n);f.show();d=a.effects.createWrapper(f).css({overflow:"hidden"});c=j?[d.width(),d.height()]:[d.height(),d.width()];if(m){t=parseInt(m[1],10)/100*c[l?0:1]}if(r){d.css(s?{height:0,width:t}:{height:t,width:0})}q[g[0]]=r?c[0]:t;p[g[1]]=r?c[1]:0;d.animate(q,h,e.easing).animate(p,h,e.easing,function(){if(l){f.hide()}a.effects.restore(f,n);a.effects.removeWrapper(f);i()})}})(jQuery);(function(a,b){a.effects.effect.highlight=function(h,c){var e=a(this),d=["backgroundImage","backgroundColor","opacity"],g=a.effects.setMode(e,h.mode||"show"),f={backgroundColor:e.css("backgroundColor")};if(g==="hide"){f.opacity=0}a.effects.save(e,d);e.show().css({backgroundImage:"none",backgroundColor:h.color||"#ffff99"}).animate(f,{queue:false,duration:h.duration,easing:h.easing,complete:function(){if(g==="hide"){e.hide()}a.effects.restore(e,d);c()}})}})(jQuery);(function(a,b){a.effects.effect.pulsate=function(c,g){var e=a(this),k=a.effects.setMode(e,c.mode||"show"),p=k==="show",l=k==="hide",q=(p||k==="hide"),m=((c.times||5)*2)+(q?1:0),f=c.duration/m,n=0,j=e.queue(),d=j.length,h;if(p||!e.is(":visible")){e.css("opacity",0).show();n=1}for(h=1;h<m;h++){e.animate({opacity:n},f,c.easing);n=1-n}e.animate({opacity:n},f,c.easing);e.queue(function(){if(l){e.hide()}g()});if(d>1){j.splice.apply(j,[1,0].concat(j.splice(d,m+1)))}e.dequeue()}})(jQuery);(function(a,b){a.effects.effect.puff=function(j,c){var h=a(this),i=a.effects.setMode(h,j.mode||"hide"),f=i==="hide",g=parseInt(j.percent,10)||150,e=g/100,d={height:h.height(),width:h.width(),outerHeight:h.outerHeight(),outerWidth:h.outerWidth()};a.extend(j,{effect:"scale",queue:false,fade:true,mode:i,complete:c,percent:f?g:100,from:f?d:{height:d.height*e,width:d.width*e,outerHeight:d.outerHeight*e,outerWidth:d.outerWidth*e}});h.effect(j)};a.effects.effect.scale=function(c,f){var d=a(this),l=a.extend(true,{},c),g=a.effects.setMode(d,c.mode||"effect"),h=parseInt(c.percent,10)||(parseInt(c.percent,10)===0?0:(g==="hide"?0:100)),j=c.direction||"both",k=c.origin,e={height:d.height(),width:d.width(),outerHeight:d.outerHeight(),outerWidth:d.outerWidth()},i={y:j!=="horizontal"?(h/100):1,x:j!=="vertical"?(h/100):1};l.effect="size";l.queue=false;l.complete=f;if(g!=="effect"){l.origin=k||["middle","center"];l.restore=true}l.from=c.from||(g==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:e);l.to={height:e.height*i.y,width:e.width*i.x,outerHeight:e.outerHeight*i.y,outerWidth:e.outerWidth*i.x};if(l.fade){if(g==="show"){l.from.opacity=0;l.to.opacity=1}if(g==="hide"){l.from.opacity=1;l.to.opacity=0}}d.effect(l)};a.effects.effect.size=function(l,k){var q,i,j,c=a(this),p=["position","top","bottom","left","right","width","height","overflow","opacity"],n=["position","top","bottom","left","right","overflow","opacity"],m=["width","height","overflow"],g=["fontSize"],s=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],h=a.effects.setMode(c,l.mode||"effect"),r=l.restore||h!=="effect",v=l.scale||"both",t=l.origin||["middle","center"],u=c.css("position"),e=r?p:n,f={height:0,width:0,outerHeight:0,outerWidth:0};if(h==="show"){c.show()}q={height:c.height(),width:c.width(),outerHeight:c.outerHeight(),outerWidth:c.outerWidth()};if(l.mode==="toggle"&&h==="show"){c.from=l.to||f;c.to=l.from||q}else{c.from=l.from||(h==="show"?f:q);c.to=l.to||(h==="hide"?f:q)}j={from:{y:c.from.height/q.height,x:c.from.width/q.width},to:{y:c.to.height/q.height,x:c.to.width/q.width}};if(v==="box"||v==="both"){if(j.from.y!==j.to.y){e=e.concat(s);c.from=a.effects.setTransition(c,s,j.from.y,c.from);c.to=a.effects.setTransition(c,s,j.to.y,c.to)}if(j.from.x!==j.to.x){e=e.concat(d);c.from=a.effects.setTransition(c,d,j.from.x,c.from);c.to=a.effects.setTransition(c,d,j.to.x,c.to)}}if(v==="content"||v==="both"){if(j.from.y!==j.to.y){e=e.concat(g).concat(m);c.from=a.effects.setTransition(c,g,j.from.y,c.from);c.to=a.effects.setTransition(c,g,j.to.y,c.to)}}a.effects.save(c,e);c.show();a.effects.createWrapper(c);c.css("overflow","hidden").css(c.from);if(t){i=a.effects.getBaseline(t,q);c.from.top=(q.outerHeight-c.outerHeight())*i.y;c.from.left=(q.outerWidth-c.outerWidth())*i.x;c.to.top=(q.outerHeight-c.to.outerHeight)*i.y;c.to.left=(q.outerWidth-c.to.outerWidth)*i.x}c.css(c.from);if(v==="content"||v==="both"){s=s.concat(["marginTop","marginBottom"]).concat(g);d=d.concat(["marginLeft","marginRight"]);m=p.concat(s).concat(d);c.find("*[width]").each(function(){var w=a(this),o={height:w.height(),width:w.width(),outerHeight:w.outerHeight(),outerWidth:w.outerWidth()};if(r){a.effects.save(w,m)}w.from={height:o.height*j.from.y,width:o.width*j.from.x,outerHeight:o.outerHeight*j.from.y,outerWidth:o.outerWidth*j.from.x};w.to={height:o.height*j.to.y,width:o.width*j.to.x,outerHeight:o.height*j.to.y,outerWidth:o.width*j.to.x};if(j.from.y!==j.to.y){w.from=a.effects.setTransition(w,s,j.from.y,w.from);w.to=a.effects.setTransition(w,s,j.to.y,w.to)}if(j.from.x!==j.to.x){w.from=a.effects.setTransition(w,d,j.from.x,w.from);w.to=a.effects.setTransition(w,d,j.to.x,w.to)}w.css(w.from);w.animate(w.to,l.duration,l.easing,function(){if(r){a.effects.restore(w,m)}})})}c.animate(c.to,{queue:false,duration:l.duration,easing:l.easing,complete:function(){if(c.to.opacity===0){c.css("opacity",c.from.opacity)}if(h==="hide"){c.hide()}a.effects.restore(c,e);if(!r){if(u==="static"){c.css({position:"relative",top:c.to.top,left:c.to.left})}else{a.each(["top","left"],function(o,w){c.css(w,function(z,B){var A=parseInt(B,10),y=o?c.to.left:c.to.top;if(B==="auto"){return y+"px"}return A+y+"px"})})}}a.effects.removeWrapper(c);k()}})}})(jQuery);(function(a,b){a.effects.effect.shake=function(l,k){var c=a(this),d=["position","top","bottom","left","right","height","width"],j=a.effects.setMode(c,l.mode||"effect"),u=l.direction||"left",e=l.distance||20,h=l.times||3,v=h*2+1,q=Math.round(l.duration/v),g=(u==="up"||u==="down")?"top":"left",f=(u==="up"||u==="left"),t={},s={},r={},p,m=c.queue(),n=m.length;a.effects.save(c,d);c.show();a.effects.createWrapper(c);t[g]=(f?"-=":"+=")+e;s[g]=(f?"+=":"-=")+e*2;r[g]=(f?"-=":"+=")+e*2;c.animate(t,q,l.easing);for(p=1;p<h;p++){c.animate(s,q,l.easing).animate(r,q,l.easing)}c.animate(s,q,l.easing).animate(t,q/2,l.easing).queue(function(){if(j==="hide"){c.hide()}a.effects.restore(c,d);a.effects.removeWrapper(c);k()});if(n>1){m.splice.apply(m,[1,0].concat(m.splice(n,v+1)))}c.dequeue()}})(jQuery);(function(a,b){a.effects.effect.slide=function(e,i){var f=a(this),k=["position","top","bottom","left","right","width","height"],j=a.effects.setMode(f,e.mode||"show"),m=j==="show",l=e.direction||"left",g=(l==="up"||l==="down")?"top":"left",d=(l==="up"||l==="left"),c,h={};a.effects.save(f,k);f.show();c=e.distance||f[g==="top"?"outerHeight":"outerWidth"](true);a.effects.createWrapper(f).css({overflow:"hidden"});if(m){f.css(g,d?(isNaN(c)?"-"+c:-c):c)}h[g]=(m?(d?"+=":"-="):(d?"-=":"+="))+c;f.animate(h,{queue:false,duration:e.duration,easing:e.easing,complete:function(){if(j==="hide"){f.hide()}a.effects.restore(f,k);a.effects.removeWrapper(f);i()}})}})(jQuery);(function(a,b){a.effects.effect.transfer=function(d,h){var f=a(this),k=a(d.to),n=k.css("position")==="fixed",j=a("body"),l=n?j.scrollTop():0,m=n?j.scrollLeft():0,c=k.offset(),g={top:c.top-l,left:c.left-m,height:k.innerHeight(),width:k.innerWidth()},i=f.offset(),e=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(d.className).css({top:i.top-l,left:i.left-m,height:f.innerHeight(),width:f.innerWidth(),position:n?"fixed":"absolute"}).animate(g,d.duration,d.easing,function(){e.remove();h()})}})(jQuery);(function(b,c){var a=false;b.widget("ui.menu",{version:"1.9.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,b.proxy(function(d){if(this.options.disabled){d.preventDefault()}},this));if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")}this._on({"mousedown .ui-menu-item > a":function(d){d.preventDefault()},"click .ui-state-disabled > a":function(d){d.preventDefault()},"click .ui-menu-item:has(a)":function(d){var e=b(d.target).closest(".ui-menu-item");if(!a&&e.not(".ui-state-disabled").length){a=true;this.select(d);if(e.has(".ui-menu").length){this.expand(d)}else{if(!this.element.is(":focus")){this.element.trigger("focus",[true]);if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)}}}}},"mouseenter .ui-menu-item":function(d){var e=b(d.currentTarget);e.siblings().children(".ui-state-active").removeClass("ui-state-active");this.focus(d,e)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(f,d){var e=this.active||this.element.children(".ui-menu-item").eq(0);if(!d){this.focus(f,e)}},blur:function(d){this._delay(function(){if(!b.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(d)}})},keydown:"_keydown"});this.refresh();this._on(this.document,{click:function(d){if(!b(d.target).closest(".ui-menu").length){this.collapseAll(d)}a=false}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var d=b(this);if(d.data("ui-menu-submenu-carat")){d.remove()}});this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(j){var e,i,k,h,g,d=true;function f(l){return l.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}switch(j.keyCode){case b.ui.keyCode.PAGE_UP:this.previousPage(j);break;case b.ui.keyCode.PAGE_DOWN:this.nextPage(j);break;case b.ui.keyCode.HOME:this._move("first","first",j);break;case b.ui.keyCode.END:this._move("last","last",j);break;case b.ui.keyCode.UP:this.previous(j);break;case b.ui.keyCode.DOWN:this.next(j);break;case b.ui.keyCode.LEFT:this.collapse(j);break;case b.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(j)}break;case b.ui.keyCode.ENTER:case b.ui.keyCode.SPACE:this._activate(j);break;case b.ui.keyCode.ESCAPE:this.collapse(j);break;default:d=false;i=this.previousFilter||"";k=String.fromCharCode(j.keyCode);h=false;clearTimeout(this.filterTimer);if(k===i){h=true}else{k=i+k}g=new RegExp("^"+f(k),"i");e=this.activeMenu.children(".ui-menu-item").filter(function(){return g.test(b(this).children("a").text())});e=h&&e.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):e;if(!e.length){k=String.fromCharCode(j.keyCode);g=new RegExp("^"+f(k),"i");e=this.activeMenu.children(".ui-menu-item").filter(function(){return g.test(b(this).children("a").text())})}if(e.length){this.focus(j,e);if(e.length>1){this.previousFilter=k;this.filterTimer=this._delay(function(){delete this.previousFilter},1000)}else{delete this.previousFilter}}else{delete this.previousFilter}}if(d){j.preventDefault()}},_activate:function(d){if(!this.active.is(".ui-state-disabled")){if(this.active.children("a[aria-haspopup='true']").length){this.expand(d)}else{this.select(d)}}},refresh:function(){var f,e=this.options.icons.submenu,d=this.element.find(this.options.menus);d.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var i=b(this),h=i.prev("a"),g=b("<span>").addClass("ui-menu-icon ui-icon "+e).data("ui-menu-submenu-carat",true);h.attr("aria-haspopup","true").prepend(g);i.attr("aria-labelledby",h.attr("id"))});f=d.add(this.element);f.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()});f.children(":not(.ui-menu-item)").each(function(){var g=b(this);if(!/[^\-—–\s]/.test(g.text())){g.addClass("ui-widget-content ui-menu-divider")}});f.children(".ui-state-disabled").attr("aria-disabled","true");if(this.active&&!b.contains(this.element[0],this.active[0])){this.blur()}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},focus:function(e,d){var g,f;this.blur(e,e&&e.type==="focus");this._scrollIntoView(d);this.active=d.first();f=this.active.children("a").addClass("ui-state-focus");if(this.options.role){this.element.attr("aria-activedescendant",f.attr("id"))}this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");if(e&&e.type==="keydown"){this._close()}else{this.timer=this._delay(function(){this._close()},this.delay)}g=d.children(".ui-menu");if(g.length&&(/^mouse/.test(e.type))){this._startOpening(g)}this.activeMenu=d.parent();this._trigger("focus",e,{item:d})},_scrollIntoView:function(g){var j,f,h,d,e,i;if(this._hasScroll()){j=parseFloat(b.css(this.activeMenu[0],"borderTopWidth"))||0;f=parseFloat(b.css(this.activeMenu[0],"paddingTop"))||0;h=g.offset().top-this.activeMenu.offset().top-j-f;d=this.activeMenu.scrollTop();e=this.activeMenu.height();i=g.height();if(h<0){this.activeMenu.scrollTop(d+h)}else{if(h+i>e){this.activeMenu.scrollTop(d+h-e+i)}}}},blur:function(e,d){if(!d){clearTimeout(this.timer)}if(!this.active){return}this.active.children("a").removeClass("ui-state-focus");this.active=null;this._trigger("blur",e,{item:this.active})},_startOpening:function(d){clearTimeout(this.timer);if(d.attr("aria-hidden")!=="true"){return}this.timer=this._delay(function(){this._close();this._open(d)},this.delay)},_open:function(e){var d=b.extend({of:this.active},this.options.position);clearTimeout(this.timer);this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true");e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(d)},collapseAll:function(e,d){clearTimeout(this.timer);this.timer=this._delay(function(){var f=d?this.element:b(e&&e.target).closest(this.element.find(".ui-menu"));if(!f.length){f=this.element}this._close(f);this.blur(e);this.activeMenu=f},this.delay)},_close:function(d){if(!d){d=this.active?this.active.parent():this.element}d.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(e){var d=this.active&&this.active.parent().closest(".ui-menu-item",this.element);if(d&&d.length){this._close();this.focus(e,d)}},expand:function(e){var d=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();if(d&&d.length){this._open(d.parent());this._delay(function(){this.focus(e,d)})}},next:function(d){this._move("next","first",d)},previous:function(d){this._move("prev","last",d)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(g,e,f){var d;if(this.active){if(g==="first"||g==="last"){d=this.active[g==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)}else{d=this.active[g+"All"](".ui-menu-item").eq(0)}}if(!d||!d.length||!this.active){d=this.activeMenu.children(".ui-menu-item")[e]()}this.focus(f,d)},nextPage:function(f){var e,g,d;if(!this.active){this.next(f);return}if(this.isLastItem()){return}if(this._hasScroll()){g=this.active.offset().top;d=this.element.height();this.active.nextAll(".ui-menu-item").each(function(){e=b(this);return e.offset().top-g-d<0});this.focus(f,e)}else{this.focus(f,this.activeMenu.children(".ui-menu-item")[!this.active?"first":"last"]())}},previousPage:function(f){var e,g,d;if(!this.active){this.next(f);return}if(this.isFirstItem()){return}if(this._hasScroll()){g=this.active.offset().top;d=this.element.height();this.active.prevAll(".ui-menu-item").each(function(){e=b(this);return e.offset().top-g+d>0});this.focus(f,e)}else{this.focus(f,this.activeMenu.children(".ui-menu-item").first())}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(d){this.active=this.active||b(d.target).closest(".ui-menu-item");var e={item:this.active};if(!this.active.has(".ui-menu").length){this.collapseAll(d,true)}this._trigger("select",d,e)}})}(jQuery));(function(e,c){e.ui=e.ui||{};var i,j=Math.max,n=Math.abs,l=Math.round,d=/left|center|right/,g=/top|center|bottom/,a=/[\+\-]\d+%?/,k=/^\w+/,b=/%$/,f=e.fn.position;function m(q,p,o){return[parseInt(q[0],10)*(b.test(q[0])?p/100:1),parseInt(q[1],10)*(b.test(q[1])?o/100:1)]}function h(o,p){return parseInt(e.css(o,p),10)||0}e.position={scrollbarWidth:function(){if(i!==c){return i}var p,o,r=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),q=r.children()[0];e("body").append(r);p=q.offsetWidth;r.css("overflow","scroll");o=q.offsetWidth;if(p===o){o=r[0].clientWidth}r.remove();return(i=p-o)},getScrollInfo:function(s){var r=s.isWindow?"":s.element.css("overflow-x"),q=s.isWindow?"":s.element.css("overflow-y"),p=r==="scroll"||(r==="auto"&&s.width<s.element[0].scrollWidth),o=q==="scroll"||(q==="auto"&&s.height<s.element[0].scrollHeight);return{width:p?e.position.scrollbarWidth():0,height:o?e.position.scrollbarWidth():0}},getWithinInfo:function(p){var q=e(p||window),o=e.isWindow(q[0]);return{element:q,isWindow:o,offset:q.offset()||{left:0,top:0},scrollLeft:q.scrollLeft(),scrollTop:q.scrollTop(),width:o?q.width():q.outerWidth(),height:o?q.height():q.outerHeight()}}};e.fn.position=function(z){if(!z||!z.of){return f.apply(this,arguments)}z=e.extend({},z);var A,v,s,y,r,u=e(z.of),q=e.position.getWithinInfo(z.within),o=e.position.getScrollInfo(q),t=u[0],w=(z.collision||"flip").split(" "),p={};if(t.nodeType===9){v=u.width();s=u.height();y={top:0,left:0}}else{if(e.isWindow(t)){v=u.width();s=u.height();y={top:u.scrollTop(),left:u.scrollLeft()}}else{if(t.preventDefault){z.at="left top";v=s=0;y={top:t.pageY,left:t.pageX}}else{v=u.outerWidth();s=u.outerHeight();y=u.offset()}}}r=e.extend({},y);e.each(["my","at"],function(){var D=(z[this]||"").split(" "),C,B;if(D.length===1){D=d.test(D[0])?D.concat(["center"]):g.test(D[0])?["center"].concat(D):["center","center"]}D[0]=d.test(D[0])?D[0]:"center";D[1]=g.test(D[1])?D[1]:"center";C=a.exec(D[0]);B=a.exec(D[1]);p[this]=[C?C[0]:0,B?B[0]:0];z[this]=[k.exec(D[0])[0],k.exec(D[1])[0]]});if(w.length===1){w[1]=w[0]}if(z.at[0]==="right"){r.left+=v}else{if(z.at[0]==="center"){r.left+=v/2}}if(z.at[1]==="bottom"){r.top+=s}else{if(z.at[1]==="center"){r.top+=s/2}}A=m(p.at,v,s);r.left+=A[0];r.top+=A[1];return this.each(function(){var C,L,E=e(this),G=E.outerWidth(),D=E.outerHeight(),F=h(this,"marginLeft"),B=h(this,"marginTop"),K=G+F+h(this,"marginRight")+o.width,J=D+B+h(this,"marginBottom")+o.height,H=e.extend({},r),I=m(p.my,E.outerWidth(),E.outerHeight());if(z.my[0]==="right"){H.left-=G}else{if(z.my[0]==="center"){H.left-=G/2}}if(z.my[1]==="bottom"){H.top-=D}else{if(z.my[1]==="center"){H.top-=D/2}}H.left+=I[0];H.top+=I[1];if(!e.support.offsetFractions){H.left=l(H.left);H.top=l(H.top)}C={marginLeft:F,marginTop:B};e.each(["left","top"],function(N,M){if(e.ui.position[w[N]]){e.ui.position[w[N]][M](H,{targetWidth:v,targetHeight:s,elemWidth:G,elemHeight:D,collisionPosition:C,collisionWidth:K,collisionHeight:J,offset:[A[0]+I[0],A[1]+I[1]],my:z.my,at:z.at,within:q,elem:E})}});if(e.fn.bgiframe){E.bgiframe()}if(z.using){L=function(P){var R=y.left-H.left,O=R+v-G,Q=y.top-H.top,N=Q+s-D,M={target:{element:u,left:y.left,top:y.top,width:v,height:s},element:{element:E,left:H.left,top:H.top,width:G,height:D},horizontal:O<0?"left":R>0?"right":"center",vertical:N<0?"top":Q>0?"bottom":"middle"};if(v<G&&n(R+O)<v){M.horizontal="center"}if(s<D&&n(Q+N)<s){M.vertical="middle"}if(j(n(R),n(O))>j(n(Q),n(N))){M.important="horizontal"}else{M.important="vertical"}z.using.call(this,P,M)}}E.offset(e.extend(H,{using:L}))})};e.ui.position={fit:{left:function(s,r){var q=r.within,u=q.isWindow?q.scrollLeft:q.offset.left,w=q.width,t=s.left-r.collisionPosition.marginLeft,v=u-t,p=t+r.collisionWidth-w-u,o;if(r.collisionWidth>w){if(v>0&&p<=0){o=s.left+v+r.collisionWidth-w-u;s.left+=v-o}else{if(p>0&&v<=0){s.left=u}else{if(v>p){s.left=u+w-r.collisionWidth}else{s.left=u}}}}else{if(v>0){s.left+=v}else{if(p>0){s.left-=p}else{s.left=j(s.left-t,s.left)}}}},top:function(r,q){var p=q.within,v=p.isWindow?p.scrollTop:p.offset.top,w=q.within.height,t=r.top-q.collisionPosition.marginTop,u=v-t,s=t+q.collisionHeight-w-v,o;if(q.collisionHeight>w){if(u>0&&s<=0){o=r.top+u+q.collisionHeight-w-v;r.top+=u-o}else{if(s>0&&u<=0){r.top=v}else{if(u>s){r.top=v+w-q.collisionHeight}else{r.top=v}}}}else{if(u>0){r.top+=u}else{if(s>0){r.top-=s}else{r.top=j(r.top-t,r.top)}}}}},flip:{left:function(u,t){var s=t.within,z=s.offset.left+s.scrollLeft,C=s.width,q=s.isWindow?s.scrollLeft:s.offset.left,v=u.left-t.collisionPosition.marginLeft,A=v-q,p=v+t.collisionWidth-C-q,y=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,B=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,r=-2*t.offset[0],o,w;if(A<0){o=u.left+y+B+r+t.collisionWidth-C-z;if(o<0||o<n(A)){u.left+=y+B+r}}else{if(p>0){w=u.left-t.collisionPosition.marginLeft+y+B+r-q;if(w>0||n(w)<p){u.left+=y+B+r}}}},top:function(t,s){var r=s.within,B=r.offset.top+r.scrollTop,C=r.height,o=r.isWindow?r.scrollTop:r.offset.top,v=t.top-s.collisionPosition.marginTop,y=v-o,u=v+s.collisionHeight-C-o,z=s.my[1]==="top",w=z?-s.elemHeight:s.my[1]==="bottom"?s.elemHeight:0,D=s.at[1]==="top"?s.targetHeight:s.at[1]==="bottom"?-s.targetHeight:0,q=-2*s.offset[1],A,p;if(y<0){p=t.top+w+D+q+s.collisionHeight-C-B;if((t.top+w+D+q)>y&&(p<0||p<n(y))){t.top+=w+D+q}}else{if(u>0){A=t.top-s.collisionPosition.marginTop+w+D+q-o;if((t.top+w+D+q)>u&&(A>0||n(A)<u)){t.top+=w+D+q}}}}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments);e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments);e.ui.position.fit.top.apply(this,arguments)}}};(function(){var s,u,p,r,q,o=document.getElementsByTagName("body")[0],t=document.createElement("div");s=document.createElement(o?"div":"body");p={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};if(o){e.extend(p,{position:"absolute",left:"-1000px",top:"-1000px"})}for(q in p){s.style[q]=p[q]}s.appendChild(t);u=o||document.documentElement;u.insertBefore(s,u.firstChild);t.style.cssText="position: absolute; left: 10.7432222px;";r=e(t).offset().left;e.support.offsetFractions=r>10&&r<11;s.innerHTML="";u.removeChild(s)})();if(e.uiBackCompat!==false){(function(p){var o=p.fn.position;p.fn.position=function(r){if(!r||!r.offset){return o.call(this,r)}var s=r.offset.split(" "),q=r.at.split(" ");if(s.length===1){s[1]=s[0]}if(/^\d/.test(s[0])){s[0]="+"+s[0]}if(/^\d/.test(s[1])){s[1]="+"+s[1]}if(q.length===1){if(/left|center|right/.test(q[0])){q[1]="center"}else{q[1]=q[0];q[0]="center"}}return o.call(this,p.extend(r,{at:q[0]+s[0]+" "+q[1]+s[1],offset:c}))}}(jQuery))}}(jQuery));(function(a,b){a.widget("ui.progressbar",{version:"1.9.2",options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove()},value:function(c){if(c===b){return this._value()}this._setOption("value",c);return this},_setOption:function(c,d){if(c==="value"){this.options.value=d;this._refreshValue();if(this._value()===this.options.max){this._trigger("complete")}}this._super(c,d)},_value:function(){var c=this.options.value;if(typeof c!=="number"){c=0}return Math.min(this.options.max,Math.max(this.min,c))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var d=this.value(),c=this._percentage();if(this.oldValue!==d){this.oldValue=d;this._trigger("change")}this.valueDiv.toggle(d>this.min).toggleClass("ui-corner-right",d===this.options.max).width(c.toFixed(0)+"%");this.element.attr("aria-valuenow",d)}})})(jQuery);(function(b,c){var a=5;b.widget("ui.slider",b.ui.mouse,{version:"1.9.2",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var f,d,j=this.options,h=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),g="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",e=[];this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"+(j.disabled?" ui-slider-disabled ui-disabled":""));this.range=b([]);if(j.range){if(j.range===true){if(!j.values){j.values=[this._valueMin(),this._valueMin()]}if(j.values.length&&j.values.length!==2){j.values=[j.values[0],j.values[0]]}}this.range=b("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+((j.range==="min"||j.range==="max")?" ui-slider-range-"+j.range:""))}d=(j.values&&j.values.length)||1;for(f=h.length;f<d;f++){e.push(g)}this.handles=h.add(b(e.join("")).appendTo(this.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(i){i.preventDefault()}).mouseenter(function(){if(!j.disabled){b(this).addClass("ui-state-hover")}}).mouseleave(function(){b(this).removeClass("ui-state-hover")}).focus(function(){if(!j.disabled){b(".ui-slider .ui-state-focus").removeClass("ui-state-focus");b(this).addClass("ui-state-focus")}else{b(this).blur()}}).blur(function(){b(this).removeClass("ui-state-focus")});this.handles.each(function(k){b(this).data("ui-slider-handle-index",k)});this._on(this.handles,{keydown:function(n){var o,l,k,m,i=b(n.target).data("ui-slider-handle-index");switch(n.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:n.preventDefault();if(!this._keySliding){this._keySliding=true;b(n.target).addClass("ui-state-active");o=this._start(n,i);if(o===false){return}}break}m=this.options.step;if(this.options.values&&this.options.values.length){l=k=this.values(i)}else{l=k=this.value()}switch(n.keyCode){case b.ui.keyCode.HOME:k=this._valueMin();break;case b.ui.keyCode.END:k=this._valueMax();break;case b.ui.keyCode.PAGE_UP:k=this._trimAlignValue(l+((this._valueMax()-this._valueMin())/a));break;case b.ui.keyCode.PAGE_DOWN:k=this._trimAlignValue(l-((this._valueMax()-this._valueMin())/a));break;case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(l===this._valueMax()){return}k=this._trimAlignValue(l+m);break;case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(l===this._valueMin()){return}k=this._trimAlignValue(l-m);break}this._slide(n,i,k)},keyup:function(k){var i=b(k.target).data("ui-slider-handle-index");if(this._keySliding){this._keySliding=false;this._stop(k,i);this._change(k,i);b(k.target).removeClass("ui-state-active")}}});this._refreshValue();this._animateOff=false},_destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all");this._mouseDestroy()},_mouseCapture:function(f){var j,m,e,h,l,n,i,d,k=this,g=this.options;if(g.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();j={x:f.pageX,y:f.pageY};m=this._normValueFromMouse(j);e=this._valueMax()-this._valueMin()+1;this.handles.each(function(o){var p=Math.abs(m-k.values(o));if(e>p){e=p;h=b(this);l=o}});if(g.range===true&&this.values(1)===g.min){l+=1;h=b(this.handles[l])}n=this._start(f,l);if(n===false){return false}this._mouseSliding=true;this._handleIndex=l;h.addClass("ui-state-active").focus();i=h.offset();d=!b(f.target).parents().andSelf().is(".ui-slider-handle");this._clickOffset=d?{left:0,top:0}:{left:f.pageX-i.left-(h.width()/2),top:f.pageY-i.top-(h.height()/2)-(parseInt(h.css("borderTopWidth"),10)||0)-(parseInt(h.css("borderBottomWidth"),10)||0)+(parseInt(h.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(f,l,m)}this._animateOff=true;return true},_mouseStart:function(){return true},_mouseDrag:function(f){var d={x:f.pageX,y:f.pageY},e=this._normValueFromMouse(d);this._slide(f,this._handleIndex,e);return false},_mouseStop:function(d){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(d,this._handleIndex);this._change(d,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"},_normValueFromMouse:function(e){var d,h,g,f,i;if(this.orientation==="horizontal"){d=this.elementSize.width;h=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{d=this.elementSize.height;h=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}g=(h/d);if(g>1){g=1}if(g<0){g=0}if(this.orientation==="vertical"){g=1-g}f=this._valueMax()-this._valueMin();i=this._valueMin()+g*f;return this._trimAlignValue(i)},_start:function(f,e){var d={handle:this.handles[e],value:this.value()};if(this.options.values&&this.options.values.length){d.value=this.values(e);d.values=this.values()}return this._trigger("start",f,d)},_slide:function(h,g,f){var d,e,i;if(this.options.values&&this.options.values.length){d=this.values(g?0:1);if((this.options.values.length===2&&this.options.range===true)&&((g===0&&f>d)||(g===1&&f<d))){f=d}if(f!==this.values(g)){e=this.values();e[g]=f;i=this._trigger("slide",h,{handle:this.handles[g],value:f,values:e});d=this.values(g?0:1);if(i!==false){this.values(g,f,true)}}}else{if(f!==this.value()){i=this._trigger("slide",h,{handle:this.handles[g],value:f});if(i!==false){this.value(f)}}}},_stop:function(f,e){var d={handle:this.handles[e],value:this.value()};if(this.options.values&&this.options.values.length){d.value=this.values(e);d.values=this.values()}this._trigger("stop",f,d)},_change:function(f,e){if(!this._keySliding&&!this._mouseSliding){var d={handle:this.handles[e],value:this.value()};if(this.options.values&&this.options.values.length){d.value=this.values(e);d.values=this.values()}this._trigger("change",f,d)}},value:function(d){if(arguments.length){this.options.value=this._trimAlignValue(d);this._refreshValue();this._change(null,0);return}return this._value()},values:function(e,h){var g,d,f;if(arguments.length>1){this.options.values[e]=this._trimAlignValue(h);this._refreshValue();this._change(null,e);return}if(arguments.length){if(b.isArray(arguments[0])){g=this.options.values;d=arguments[0];for(f=0;f<g.length;f+=1){g[f]=this._trimAlignValue(d[f]);this._change(null,f)}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(e)}else{return this.value()}}}else{return this._values()}},_setOption:function(e,f){var d,g=0;if(b.isArray(this.options.values)){g=this.options.values.length}b.Widget.prototype._setOption.apply(this,arguments);switch(e){case"disabled":if(f){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.prop("disabled",true);this.element.addClass("ui-disabled")}else{this.handles.prop("disabled",false);this.element.removeClass("ui-disabled")}break;case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(d=0;d<g;d+=1){this._change(null,d)}this._animateOff=false;break;case"min":case"max":this._animateOff=true;this._refreshValue();this._animateOff=false;break}},_value:function(){var d=this.options.value;d=this._trimAlignValue(d);return d},_values:function(d){var g,f,e;if(arguments.length){g=this.options.values[d];g=this._trimAlignValue(g);return g}else{f=this.options.values.slice();for(e=0;e<f.length;e+=1){f[e]=this._trimAlignValue(f[e])}return f}},_trimAlignValue:function(g){if(g<=this._valueMin()){return this._valueMin()}if(g>=this._valueMax()){return this._valueMax()}var d=(this.options.step>0)?this.options.step:1,f=(g-this._valueMin())%d,e=g-f;if(Math.abs(f)*2>=d){e+=(f>0)?d:(-d)}return parseFloat(e.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var i,h,l,j,m,g=this.options.range,f=this.options,k=this,e=(!this._animateOff)?f.animate:false,d={};if(this.options.values&&this.options.values.length){this.handles.each(function(n){h=(k.values(n)-k._valueMin())/(k._valueMax()-k._valueMin())*100;d[k.orientation==="horizontal"?"left":"bottom"]=h+"%";b(this).stop(1,1)[e?"animate":"css"](d,f.animate);if(k.options.range===true){if(k.orientation==="horizontal"){if(n===0){k.range.stop(1,1)[e?"animate":"css"]({left:h+"%"},f.animate)}if(n===1){k.range[e?"animate":"css"]({width:(h-i)+"%"},{queue:false,duration:f.animate})}}else{if(n===0){k.range.stop(1,1)[e?"animate":"css"]({bottom:(h)+"%"},f.animate)}if(n===1){k.range[e?"animate":"css"]({height:(h-i)+"%"},{queue:false,duration:f.animate})}}}i=h})}else{l=this.value();j=this._valueMin();m=this._valueMax();h=(m!==j)?(l-j)/(m-j)*100:0;d[this.orientation==="horizontal"?"left":"bottom"]=h+"%";this.handle.stop(1,1)[e?"animate":"css"](d,f.animate);if(g==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[e?"animate":"css"]({width:h+"%"},f.animate)}if(g==="max"&&this.orientation==="horizontal"){this.range[e?"animate":"css"]({width:(100-h)+"%"},{queue:false,duration:f.animate})}if(g==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[e?"animate":"css"]({height:h+"%"},f.animate)}if(g==="max"&&this.orientation==="vertical"){this.range[e?"animate":"css"]({height:(100-h)+"%"},{queue:false,duration:f.animate})}}}})}(jQuery));(function(b){function a(c){return function(){var d=this.element.val();c.apply(this,arguments);this._refresh();if(d!==this.element.val()){this._trigger("change")}}}b.widget("ui.spinner",{version:"1.9.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);this._setOption("min",this.options.min);this._setOption("step",this.options.step);this._value(this.element.val(),true);this._draw();this._on(this._events);this._refresh();this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var c={},d=this.element;b.each(["min","max","step"],function(e,f){var g=d.attr(f);if(g!==undefined&&g.length){c[f]=g}});return c},_events:{keydown:function(c){if(this._start(c)&&this._keydown(c)){c.preventDefault()}},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(c){if(this.cancelBlur){delete this.cancelBlur;return}this._refresh();if(this.previous!==this.element.val()){this._trigger("change",c)}},mousewheel:function(c,d){if(!d){return}if(!this.spinning&&!this._start(c)){return false}this._spin((d>0?1:-1)*this.options.step,c);clearTimeout(this.mousewheelTimer);this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(c)}},100);c.preventDefault()},"mousedown .ui-spinner-button":function(d){var c;c=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();function e(){var f=this.element[0]===this.document[0].activeElement;if(!f){this.element.focus();this.previous=c;this._delay(function(){this.previous=c})}}d.preventDefault();e.call(this);this.cancelBlur=true;this._delay(function(){delete this.cancelBlur;e.call(this)});if(this._start(d)===false){return}this._repeat(null,b(d.currentTarget).hasClass("ui-spinner-up")?1:-1,d)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(c){if(!b(c.currentTarget).hasClass("ui-state-active")){return}if(this._start(c)===false){return false}this._repeat(null,b(c.currentTarget).hasClass("ui-spinner-up")?1:-1,c)},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var c=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton");this.buttons=c.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");if(this.buttons.height()>Math.ceil(c.height()*0.5)&&c.height()>0){c.height(c.height())}if(this.options.disabled){this.disable()}},_keydown:function(d){var c=this.options,e=b.ui.keyCode;switch(d.keyCode){case e.UP:this._repeat(null,1,d);return true;case e.DOWN:this._repeat(null,-1,d);return true;case e.PAGE_UP:this._repeat(null,c.page,d);return true;case e.PAGE_DOWN:this._repeat(null,-c.page,d);return true}return false},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"},_start:function(c){if(!this.spinning&&this._trigger("start",c)===false){return false}if(!this.counter){this.counter=1}this.spinning=true;return true},_repeat:function(d,c,e){d=d||500;clearTimeout(this.timer);this.timer=this._delay(function(){this._repeat(40,c,e)},d);this._spin(c*this.options.step,e)},_spin:function(d,c){var e=this.value()||0;if(!this.counter){this.counter=1}e=this._adjustValue(e+d*this._increment(this.counter));if(!this.spinning||this._trigger("spin",c,{value:e})!==false){this._value(e);this.counter++}},_increment:function(c){var d=this.options.incremental;if(d){return b.isFunction(d)?d(c):Math.floor(c*c*c/50000-c*c/500+17*c/200+1)}return 1},_precision:function(){var c=this._precisionOf(this.options.step);if(this.options.min!==null){c=Math.max(c,this._precisionOf(this.options.min))}return c},_precisionOf:function(d){var e=d.toString(),c=e.indexOf(".");return c===-1?0:e.length-c-1},_adjustValue:function(e){var d,f,c=this.options;d=c.min!==null?c.min:0;f=e-d;f=Math.round(f/c.step)*c.step;e=d+f;e=parseFloat(e.toFixed(this._precision()));if(c.max!==null&&e>c.max){return c.max}if(c.min!==null&&e<c.min){return c.min}return e},_stop:function(c){if(!this.spinning){return}clearTimeout(this.timer);clearTimeout(this.mousewheelTimer);this.counter=0;this.spinning=false;this._trigger("stop",c)},_setOption:function(c,d){if(c==="culture"||c==="numberFormat"){var e=this._parse(this.element.val());this.options[c]=d;this.element.val(this._format(e));return}if(c==="max"||c==="min"||c==="step"){if(typeof d==="string"){d=this._parse(d)}}this._super(c,d);if(c==="disabled"){if(d){this.element.prop("disabled",true);this.buttons.button("disable")}else{this.element.prop("disabled",false);this.buttons.button("enable")}}},_setOptions:a(function(c){this._super(c);this._value(this.element.val())}),_parse:function(c){if(typeof c==="string"&&c!==""){c=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(c,10,this.options.culture):+c}return c===""||isNaN(c)?null:c},_format:function(c){if(c===""){return""}return window.Globalize&&this.options.numberFormat?Globalize.format(c,this.options.numberFormat,this.options.culture):c},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(e,c){var d;if(e!==""){d=this._parse(e);if(d!==null){if(!c){d=this._adjustValue(d)}e=this._format(d)}}this.element.val(e);this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.uiSpinner.replaceWith(this.element)},stepUp:a(function(c){this._stepUp(c)}),_stepUp:function(c){this._spin((c||1)*this.options.step)},stepDown:a(function(c){this._stepDown(c)}),_stepDown:function(c){this._spin((c||1)*-this.options.step)},pageUp:a(function(c){this._stepUp((c||1)*this.options.page)}),pageDown:a(function(c){this._stepDown((c||1)*this.options.page)}),value:function(c){if(!arguments.length){return this._parse(this.element.val())}a(this._value).call(this,c)},widget:function(){return this.uiSpinner}})}(jQuery));(function(c,e){var a=0,f=/#.*$/;function d(){return ++a}function b(g){return g.hash.length>1&&g.href.replace(f,"")===location.href.replace(f,"").replace(/\s/g,"%20")}c.widget("ui.tabs",{version:"1.9.2",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var h=this,g=this.options,i=g.active,j=location.hash.substring(1);this.running=false;this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",g.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(k){if(c(this).is(".ui-state-disabled")){k.preventDefault()}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if(c(this).closest("li").is(".ui-state-disabled")){this.blur()}});this._processTabs();if(i===null){if(j){this.tabs.each(function(k,l){if(c(l).attr("aria-controls")===j){i=k;return false}})}if(i===null){i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))}if(i===null||i===-1){i=this.tabs.length?0:false}}if(i!==false){i=this.tabs.index(this.tabs.eq(i));if(i===-1){i=g.collapsible?false:0}}g.active=i;if(!g.collapsible&&g.active===false&&this.anchors.length){g.active=0}if(c.isArray(g.disabled)){g.disabled=c.unique(g.disabled.concat(c.map(this.tabs.filter(".ui-state-disabled"),function(k){return h.tabs.index(k)}))).sort()}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(this.options.active)}else{this.active=c()}this._refresh();if(this.active.length){this.load(g.active)}},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?c():this._getPanelForTab(this.active)}},_tabKeydown:function(i){var h=c(this.document[0].activeElement).closest("li"),g=this.tabs.index(h),j=true;if(this._handlePageNav(i)){return}switch(i.keyCode){case c.ui.keyCode.RIGHT:case c.ui.keyCode.DOWN:g++;break;case c.ui.keyCode.UP:case c.ui.keyCode.LEFT:j=false;g--;break;case c.ui.keyCode.END:g=this.anchors.length-1;break;case c.ui.keyCode.HOME:g=0;break;case c.ui.keyCode.SPACE:i.preventDefault();clearTimeout(this.activating);this._activate(g);return;case c.ui.keyCode.ENTER:i.preventDefault();clearTimeout(this.activating);this._activate(g===this.options.active?false:g);return;default:return}i.preventDefault();clearTimeout(this.activating);g=this._focusNextTab(g,j);if(!i.ctrlKey){h.attr("aria-selected","false");this.tabs.eq(g).attr("aria-selected","true");this.activating=this._delay(function(){this.option("active",g)},this.delay)}},_panelKeydown:function(g){if(this._handlePageNav(g)){return}if(g.ctrlKey&&g.keyCode===c.ui.keyCode.UP){g.preventDefault();this.active.focus()}},_handlePageNav:function(g){if(g.altKey&&g.keyCode===c.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));return true}if(g.altKey&&g.keyCode===c.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));return true}},_findNextTab:function(h,i){var g=this.tabs.length-1;function j(){if(h>g){h=0}if(h<0){h=g}return h}while(c.inArray(j(),this.options.disabled)!==-1){h=i?h+1:h-1}return h},_focusNextTab:function(g,h){g=this._findNextTab(g,h);this.tabs.eq(g).focus();return g},_setOption:function(g,h){if(g==="active"){this._activate(h);return}if(g==="disabled"){this._setupDisabled(h);return}this._super(g,h);if(g==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",h);if(!h&&this.options.active===false){this._activate(0)}}if(g==="event"){this._setupEvents(h)}if(g==="heightStyle"){this._setupHeightStyle(h)}},_tabId:function(g){return g.attr("aria-controls")||"ui-tabs-"+d()},_sanitizeSelector:function(g){return g?g.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var h=this.options,g=this.tablist.children(":has(a[href])");h.disabled=c.map(g.filter(".ui-state-disabled"),function(i){return g.index(i)});this._processTabs();if(h.active===false||!this.anchors.length){h.active=false;this.active=c()}else{if(this.active.length&&!c.contains(this.tablist[0],this.active[0])){if(this.tabs.length===h.disabled.length){h.active=false;this.active=c()}else{this._activate(this._findNextTab(Math.max(0,h.active-1),false))}}else{h.active=this.tabs.index(this.active)}}this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled);this._setupEvents(this.options.event);this._setupHeightStyle(this.options.heightStyle);this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1});this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0});this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})}},_processTabs:function(){var g=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist");this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});this.anchors=this.tabs.map(function(){return c("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});this.panels=c();this.anchors.each(function(n,l){var h,j,m,k=c(l).uniqueId().attr("id"),o=c(l).closest("li"),p=o.attr("aria-controls");if(b(l)){h=l.hash;j=g.element.find(g._sanitizeSelector(h))}else{m=g._tabId(o);h="#"+m;j=g.element.find(h);if(!j.length){j=g._createPanel(m);j.insertAfter(g.panels[n-1]||g.tablist)}j.attr("aria-live","polite")}if(j.length){g.panels=g.panels.add(j)}if(p){o.data("ui-tabs-aria-controls",p)}o.attr({"aria-controls":h.substring(1),"aria-labelledby":k});j.attr("aria-labelledby",k)});this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(g){return c("<div>").attr("id",g).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)},_setupDisabled:function(j){if(c.isArray(j)){if(!j.length){j=false}else{if(j.length===this.anchors.length){j=true}}}for(var h=0,g;(g=this.tabs[h]);h++){if(j===true||c.inArray(h,j)!==-1){c(g).addClass("ui-state-disabled").attr("aria-disabled","true")}else{c(g).removeClass("ui-state-disabled").removeAttr("aria-disabled")}}this.options.disabled=j},_setupEvents:function(h){var g={click:function(i){i.preventDefault()}};if(h){c.each(h.split(" "),function(j,i){g[i]="_eventHandler"})}this._off(this.anchors.add(this.tabs).add(this.panels));this._on(this.anchors,g);this._on(this.tabs,{keydown:"_tabKeydown"});this._on(this.panels,{keydown:"_panelKeydown"});this._focusable(this.tabs);this._hoverable(this.tabs)},_setupHeightStyle:function(g){var i,j,h=this.element.parent();if(g==="fill"){if(!c.support.minHeight){j=h.css("overflow");h.css("overflow","hidden")}i=h.height();this.element.siblings(":visible").each(function(){var l=c(this),k=l.css("position");if(k==="absolute"||k==="fixed"){return}i-=l.outerHeight(true)});if(j){h.css("overflow",j)}this.element.children().not(this.panels).each(function(){i-=c(this).outerHeight(true)});this.panels.each(function(){c(this).height(Math.max(0,i-c(this).innerHeight()+c(this).height()))}).css("overflow","auto")}else{if(g==="auto"){i=0;this.panels.each(function(){i=Math.max(i,c(this).height("").height())}).height(i)}}},_eventHandler:function(g){var p=this.options,k=this.active,l=c(g.currentTarget),j=l.closest("li"),n=j[0]===k[0],h=n&&p.collapsible,i=h?c():this._getPanelForTab(j),m=!k.length?c():this._getPanelForTab(k),o={oldTab:k,oldPanel:m,newTab:h?c():j,newPanel:i};g.preventDefault();if(j.hasClass("ui-state-disabled")||j.hasClass("ui-tabs-loading")||this.running||(n&&!p.collapsible)||(this._trigger("beforeActivate",g,o)===false)){return}p.active=h?false:this.tabs.index(j);this.active=n?c():j;if(this.xhr){this.xhr.abort()}if(!m.length&&!i.length){c.error("jQuery UI Tabs: Mismatching fragment identifier.")}if(i.length){this.load(this.tabs.index(j),g)}this._toggle(g,o)},_toggle:function(m,l){var k=this,g=l.newPanel,j=l.oldPanel;this.running=true;function i(){k.running=false;k._trigger("activate",m,l)}function h(){l.newTab.closest("li").addClass("ui-tabs-active ui-state-active");if(g.length&&k.options.show){k._show(g,k.options.show,i)}else{g.show();i()}}if(j.length&&this.options.hide){this._hide(j,this.options.hide,function(){l.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");h()})}else{l.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");j.hide();h()}j.attr({"aria-expanded":"false","aria-hidden":"true"});l.oldTab.attr("aria-selected","false");if(g.length&&j.length){l.oldTab.attr("tabIndex",-1)}else{if(g.length){this.tabs.filter(function(){return c(this).attr("tabIndex")===0}).attr("tabIndex",-1)}}g.attr({"aria-expanded":"true","aria-hidden":"false"});l.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(h){var g,i=this._findActive(h);if(i[0]===this.active[0]){return}if(!i.length){i=this.active}g=i.find(".ui-tabs-anchor")[0];this._eventHandler({target:g,currentTarget:g,preventDefault:c.noop})},_findActive:function(g){return g===false?c():this.tabs.eq(g)},_getIndex:function(g){if(typeof g==="string"){g=this.anchors.index(this.anchors.filter("[href$='"+g+"']"))}return g},_destroy:function(){if(this.xhr){this.xhr.abort()}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId();this.tabs.add(this.panels).each(function(){if(c.data(this,"ui-tabs-destroy")){c(this).remove()}else{c(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}});this.tabs.each(function(){var g=c(this),h=g.data("ui-tabs-aria-controls");if(h){g.attr("aria-controls",h)}else{g.removeAttr("aria-controls")}});this.panels.show();if(this.options.heightStyle!=="content"){this.panels.css("height","")}},enable:function(g){var h=this.options.disabled;if(h===false){return}if(g===e){h=false}else{g=this._getIndex(g);if(c.isArray(h)){h=c.map(h,function(i){return i!==g?i:null})}else{h=c.map(this.tabs,function(i,j){return j!==g?j:null})}}this._setupDisabled(h)},disable:function(g){var h=this.options.disabled;if(h===true){return}if(g===e){h=true}else{g=this._getIndex(g);if(c.inArray(g,h)!==-1){return}if(c.isArray(h)){h=c.merge([g],h).sort()}else{h=[g]}}this._setupDisabled(h)},load:function(i,m){i=this._getIndex(i);var l=this,j=this.tabs.eq(i),h=j.find(".ui-tabs-anchor"),g=this._getPanelForTab(j),k={tab:j,panel:g};if(b(h[0])){return}this.xhr=c.ajax(this._ajaxSettings(h,m,k));if(this.xhr&&this.xhr.statusText!=="canceled"){j.addClass("ui-tabs-loading");g.attr("aria-busy","true");this.xhr.success(function(n){setTimeout(function(){g.html(n);l._trigger("load",m,k)},1)}).complete(function(o,n){setTimeout(function(){if(n==="abort"){l.panels.stop(false,true)}j.removeClass("ui-tabs-loading");g.removeAttr("aria-busy");if(o===l.xhr){delete l.xhr}},1)})}},_ajaxSettings:function(g,j,i){var h=this;return{url:g.attr("href"),beforeSend:function(l,k){return h._trigger("beforeLoad",j,c.extend({jqXHR:l,ajaxSettings:k},i))}}},_getPanelForTab:function(g){var h=c(g).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+h))}});if(c.uiBackCompat!==false){c.ui.tabs.prototype._ui=function(h,g){return{tab:h,panel:g,index:this.anchors.index(h)}};c.widget("ui.tabs",c.ui.tabs,{url:function(h,g){this.anchors.eq(h).attr("href",g)}});c.widget("ui.tabs",c.ui.tabs,{options:{ajaxOptions:null,cache:false},_create:function(){this._super();var g=this;this._on({tabsbeforeload:function(h,i){if(c.data(i.tab[0],"cache.tabs")){h.preventDefault();return}i.jqXHR.success(function(){if(g.options.cache){c.data(i.tab[0],"cache.tabs",true)}})}})},_ajaxSettings:function(h,i,j){var g=this.options.ajaxOptions;return c.extend({},g,{error:function(m,k){try{g.error(m,k,j.tab.closest("li").index(),j.tab[0])}catch(l){}}},this._superApply(arguments))},_setOption:function(g,h){if(g==="cache"&&h===false){this.anchors.removeData("cache.tabs")}this._super(g,h)},_destroy:function(){this.anchors.removeData("cache.tabs");this._super()},url:function(g){this.anchors.eq(g).removeData("cache.tabs");this._superApply(arguments)}});c.widget("ui.tabs",c.ui.tabs,{abort:function(){if(this.xhr){this.xhr.abort()}}});c.widget("ui.tabs",c.ui.tabs,{options:{spinner:"<em>Loading&#8230;</em>"},_create:function(){this._super();this._on({tabsbeforeload:function(i,j){if(i.target!==this.element[0]||!this.options.spinner){return}var h=j.tab.find("span"),g=h.html();h.html(this.options.spinner);j.jqXHR.complete(function(){h.html(g)})}})}});c.widget("ui.tabs",c.ui.tabs,{options:{enable:null,disable:null},enable:function(i){var h=this.options,g;if(i&&h.disabled===true||(c.isArray(h.disabled)&&c.inArray(i,h.disabled)!==-1)){g=true}this._superApply(arguments);if(g){this._trigger("enable",null,this._ui(this.anchors[i],this.panels[i]))}},disable:function(i){var h=this.options,g;if(i&&h.disabled===false||(c.isArray(h.disabled)&&c.inArray(i,h.disabled)===-1)){g=true}this._superApply(arguments);if(g){this._trigger("disable",null,this._ui(this.anchors[i],this.panels[i]))}}});c.widget("ui.tabs",c.ui.tabs,{options:{add:null,remove:null,tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},add:function(l,k,j){if(j===e){j=this.anchors.length}var m,h,i=this.options,g=c(i.tabTemplate.replace(/#\{href\}/g,l).replace(/#\{label\}/g,k)),n=!l.indexOf("#")?l.replace("#",""):this._tabId(g);g.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy",true);g.attr("aria-controls",n);m=j>=this.tabs.length;h=this.element.find("#"+n);if(!h.length){h=this._createPanel(n);if(m){if(j>0){h.insertAfter(this.panels.eq(-1))}else{h.appendTo(this.element)}}else{h.insertBefore(this.panels[j])}}h.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide();if(m){g.appendTo(this.tablist)}else{g.insertBefore(this.tabs[j])}i.disabled=c.map(i.disabled,function(o){return o>=j?++o:o});this.refresh();if(this.tabs.length===1&&i.active===false){this.option("active",0)}this._trigger("add",null,this._ui(this.anchors[j],this.panels[j]));return this},remove:function(i){i=this._getIndex(i);var h=this.options,j=this.tabs.eq(i).remove(),g=this._getPanelForTab(j).remove();if(j.hasClass("ui-tabs-active")&&this.anchors.length>2){this._activate(i+(i+1<this.anchors.length?1:-1))}h.disabled=c.map(c.grep(h.disabled,function(k){return k!==i}),function(k){return k>=i?--k:k});this.refresh();this._trigger("remove",null,this._ui(j.find("a")[0],g[0]));return this}});c.widget("ui.tabs",c.ui.tabs,{length:function(){return this.anchors.length}});c.widget("ui.tabs",c.ui.tabs,{options:{idPrefix:"ui-tabs-"},_tabId:function(h){var g=h.is("li")?h.find("a[href]"):h;g=g[0];return c(g).closest("li").attr("aria-controls")||g.title&&g.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF\-]/g,"")||this.options.idPrefix+d()}});c.widget("ui.tabs",c.ui.tabs,{options:{panelTemplate:"<div></div>"},_createPanel:function(g){return c(this.options.panelTemplate).attr("id",g).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)}});c.widget("ui.tabs",c.ui.tabs,{_create:function(){var g=this.options;if(g.active===null&&g.selected!==e){g.active=g.selected===-1?false:g.selected}this._super();g.selected=g.active;if(g.selected===false){g.selected=-1}},_setOption:function(h,i){if(h!=="selected"){return this._super(h,i)}var g=this.options;this._super("active",i===-1?false:i);g.selected=g.active;if(g.selected===false){g.selected=-1}},_eventHandler:function(){this._superApply(arguments);this.options.selected=this.options.active;if(this.options.selected===false){this.options.selected=-1}}});c.widget("ui.tabs",c.ui.tabs,{options:{show:null,select:null},_create:function(){this._super();if(this.options.active!==false){this._trigger("show",null,this._ui(this.active.find(".ui-tabs-anchor")[0],this._getPanelForTab(this.active)[0]))}},_trigger:function(j,k,l){var i,g,h=this._superApply(arguments);if(!h){return false}if(j==="beforeActivate"){i=l.newTab.length?l.newTab:l.oldTab;g=l.newPanel.length?l.newPanel:l.oldPanel;h=this._super("select",k,{tab:i.find(".ui-tabs-anchor")[0],panel:g[0],index:i.closest("li").index()})}else{if(j==="activate"&&l.newTab.length){h=this._super("show",k,{tab:l.newTab.find(".ui-tabs-anchor")[0],panel:l.newPanel[0],index:l.newTab.closest("li").index()})}}return h}});c.widget("ui.tabs",c.ui.tabs,{select:function(g){g=this._getIndex(g);if(g===-1){if(this.options.collapsible&&this.options.selected!==-1){g=this.options.selected}else{return}}this.anchors.eq(g).trigger(this.options.event+this.eventNamespace)}});(function(){var g=0;c.widget("ui.tabs",c.ui.tabs,{options:{cookie:null},_create:function(){var h=this.options,i;if(h.active==null&&h.cookie){i=parseInt(this._cookie(),10);if(i===-1){i=false}h.active=i}this._super()},_cookie:function(i){var h=[this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+(++g))];if(arguments.length){h.push(i===false?-1:i);h.push(this.options.cookie)}return c.cookie.apply(null,h)},_refresh:function(){this._super();if(this.options.cookie){this._cookie(this.options.active,this.options.cookie)}},_eventHandler:function(){this._superApply(arguments);if(this.options.cookie){this._cookie(this.options.active,this.options.cookie)}},_destroy:function(){this._super();if(this.options.cookie){this._cookie(null,this.options.cookie)}}})})();c.widget("ui.tabs",c.ui.tabs,{_trigger:function(h,i,j){var g=c.extend({},j);if(h==="load"){g.panel=g.panel[0];g.tab=g.tab.find(".ui-tabs-anchor")[0]}return this._super(h,i,g)}});c.widget("ui.tabs",c.ui.tabs,{options:{fx:null},_getFx:function(){var h,g,i=this.options.fx;if(i){if(c.isArray(i)){h=i[0];g=i[1]}else{h=g=i}}return i?{show:g,hide:h}:null},_toggle:function(n,m){var l=this,g=m.newPanel,j=m.oldPanel,k=this._getFx();if(!k){return this._super(n,m)}l.running=true;function i(){l.running=false;l._trigger("activate",n,m)}function h(){m.newTab.closest("li").addClass("ui-tabs-active ui-state-active");if(g.length&&k.show){g.animate(k.show,k.show.duration,function(){i()})}else{g.show();i()}}if(j.length&&k.hide){j.animate(k.hide,k.hide.duration,function(){m.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");h()})}else{m.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");j.hide();h()}}})}})(jQuery);(function(d){var b=0;function c(f,g){var e=(f.attr("aria-describedby")||"").split(/\s+/);e.push(g);f.data("ui-tooltip-id",g).attr("aria-describedby",d.trim(e.join(" ")))}function a(g){var h=g.data("ui-tooltip-id"),f=(g.attr("aria-describedby")||"").split(/\s+/),e=d.inArray(h,f);if(e!==-1){f.splice(e,1)}g.removeData("ui-tooltip-id");f=d.trim(f.join(" "));if(f){g.attr("aria-describedby",f)}else{g.removeAttr("aria-describedby")}}d.widget("ui.tooltip",{version:"1.9.2",options:{content:function(){return d(this).attr("title")},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"});this.tooltips={};this.parents={};if(this.options.disabled){this._disable()}},_setOption:function(e,g){var f=this;if(e==="disabled"){this[g?"_disable":"_enable"]();this.options[e]=g;return}this._super(e,g);if(e==="content"){d.each(this.tooltips,function(i,h){f._updateContent(h)})}},_disable:function(){var e=this;d.each(this.tooltips,function(h,f){var g=d.Event("blur");g.target=g.currentTarget=f[0];e.close(g,true)});this.element.find(this.options.items).andSelf().each(function(){var f=d(this);if(f.is("[title]")){f.data("ui-tooltip-title",f.attr("title")).attr("title","")}})},_enable:function(){this.element.find(this.options.items).andSelf().each(function(){var e=d(this);if(e.data("ui-tooltip-title")){e.attr("title",e.data("ui-tooltip-title"))}})},open:function(f){var e=this,g=d(f?f.target:this.element).closest(this.options.items);if(!g.length||g.data("ui-tooltip-id")){return}if(g.attr("title")){g.data("ui-tooltip-title",g.attr("title"))}g.data("ui-tooltip-open",true);if(f&&f.type==="mouseover"){g.parents().each(function(){var i=d(this),h;if(i.data("ui-tooltip-open")){h=d.Event("blur");h.target=h.currentTarget=this;e.close(h,true)}if(i.attr("title")){i.uniqueId();e.parents[this.id]={element:this,title:i.attr("title")};i.attr("title","")}})}this._updateContent(g,f)},_updateContent:function(j,i){var h,e=this.options.content,g=this,f=i?i.type:null;if(typeof e==="string"){return this._open(i,j,e)}h=e.call(j[0],function(k){if(!j.data("ui-tooltip-open")){return}g._delay(function(){if(i){i.type=f}this._open(i,j,k)})});if(h){this._open(i,j,h)}},_open:function(i,k,h){var j,g,f,l=d.extend({},this.options.position);if(!h){return}j=this._find(k);if(j.length){j.find(".ui-tooltip-content").html(h);return}if(k.is("[title]")){if(i&&i.type==="mouseover"){k.attr("title","")}else{k.removeAttr("title")}}j=this._tooltip(k);c(k,j.attr("id"));j.find(".ui-tooltip-content").html(h);function e(m){l.of=m;if(j.is(":hidden")){return}j.position(l)}if(this.options.track&&i&&/^mouse/.test(i.type)){this._on(this.document,{mousemove:e});e(i)}else{j.position(d.extend({of:k},this.options.position))}j.hide();this._show(j,this.options.show);if(this.options.show&&this.options.show.delay){f=setInterval(function(){if(j.is(":visible")){e(l.of);clearInterval(f)}},d.fx.interval)}this._trigger("open",i,{tooltip:j});g={keyup:function(m){if(m.keyCode===d.ui.keyCode.ESCAPE){var n=d.Event(m);n.currentTarget=k[0];this.close(n,true)}},remove:function(){this._removeTooltip(j)}};if(!i||i.type==="mouseover"){g.mouseleave="close"}if(!i||i.type==="focusin"){g.focusout="close"}this._on(true,k,g)},close:function(f){var e=this,h=d(f?f.currentTarget:this.element),g=this._find(h);if(this.closing){return}if(h.data("ui-tooltip-title")){h.attr("title",h.data("ui-tooltip-title"))}a(h);g.stop(true);this._hide(g,this.options.hide,function(){e._removeTooltip(d(this))});h.removeData("ui-tooltip-open");this._off(h,"mouseleave focusout keyup");if(h[0]!==this.element[0]){this._off(h,"remove")}this._off(this.document,"mousemove");if(f&&f.type==="mouseleave"){d.each(this.parents,function(j,i){d(i.element).attr("title",i.title);delete e.parents[j]})}this.closing=true;this._trigger("close",f,{tooltip:g});this.closing=false},_tooltip:function(e){var g="ui-tooltip-"+b++,f=d("<div>").attr({id:g,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));d("<div>").addClass("ui-tooltip-content").appendTo(f);f.appendTo(this.document[0].body);if(d.fn.bgiframe){f.bgiframe()}this.tooltips[g]=e;return f},_find:function(e){var f=e.data("ui-tooltip-id");return f?d("#"+f):d()},_removeTooltip:function(e){e.remove();delete this.tooltips[e.attr("id")]},_destroy:function(){var e=this;d.each(this.tooltips,function(h,f){var g=d.Event("blur");g.target=g.currentTarget=f[0];e.close(g,true);d("#"+h).remove();if(f.data("ui-tooltip-title")){f.attr("title",f.data("ui-tooltip-title"));f.removeData("ui-tooltip-title")}})}})}(jQuery)); 
 var _paq = _paq || []; 

$(window).load(function() {

    var piwiktrigger = $('#piwik_trigger').val();
    if(typeof(piwiktrigger) == 'undefined')
    {
        return false;
    }

    var u=(("https:" == document.location.protocol) ? "https://piwik.xiaozhu.com/" : "http://piwik.xiaozhu.com/"); 
    _paq.push(['setSiteId', 1]); 
    _paq.push(['setTrackerUrl', u+'piwik.php']); 
    _paq.push(['setDomains',[".xiaozhu.com", "xiaozhu.com"]]); 
    _paq.push(['setCookieDomain',".xiaozhu.com"]); 
    var userId = $('#piwik_userId').val();

    var searchtotal = $('#searchtotal').val();
    var searchkey = $('#searchkey').val();
    var searchcity = $('#searchcity').val();
    var abtestCollection = $('#abtest_collection').val();

    if(typeof(abtestCollection) != 'undefined')
    {
        var abtestCollectionObj=eval("("+abtestCollection+")");
        for(var i in abtestCollectionObj)
        {
            _paq.push(['setCustomVariable',abtestCollectionObj[i]['index'] , "abtest_"+i,abtestCollectionObj[i]['decide'], "visit"]); 
        }
    }

    var submitOrder = $('#piwik_submitOrder').val();
    var urlParams = $('#piwik_urlParams').val();
    var successOrder = $('#piwik_successOrder').val();
    var pageType = $('#pagetype').val();
    var jinshanId = $('#jinshanId').val();

    if(typeof(urlParams) != 'undefined' &&  urlParams.length > 1)
    {
        _paq.push(['setCustomVariable', 2, "urlparams", urlParams, "visit"]); 
    }

    if(typeof(successOrder) != 'undefined' && typeof(submitOrder) != 'undefined')
    {
        _paq.push(['setCustomVariable', 3,'order_' + submitOrder, 'order_success_' + successOrder, "visit"]); 
    }

    if(typeof(jinshanId) != 'undefined' && jinshanId !='_')
    {
        _paq.push(['setCustomVariable', 4,'jinshanId', jinshanId, "visit"]); 
    }

    /*
    if(typeof(searchtotal) != 'undefined' &&  typeof(searchkey) != 'undefined' && typeof(searchcity) != 'undefined' && searchkey.length > 1)
    {
        _paq.push(['trackSiteSearch',searchkey, searchcity, searchtotal]); 
    }
    */

    if(typeof(userId) != 'undefined')
    {
        _paq.push(['setCustomVariable',1, "userid", userId, "visit"]); 
    }
    if(typeof(pageType) != 'undefined')
    {
        _paq.push(['setDocumentTitle', pageType]);
    }
    var luidAndIndex = $('#luidAndIndex').val();
    if(typeof(luidAndIndex) != 'undefined')
    {   
        initDisplayLodgeUnitIndex(luidAndIndex);
    }   
    _paq.push(['trackPageView']); 
    _paq.push(['enableLinkTracking']); 
    //var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; g.type='text/javascript'; g.defer=true; g.async=true; g.src=u+'piwik.js'; 
    //s.parentNode.insertBefore(g,s); 
});
 
 /*
Uploadify v3.2.1
Copyright (c) 2012 Reactive Apps, Ronnie Garcia
Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>

SWFUpload: http://www.swfupload.org, http://swfupload.googlecode.com
mmSWFUpload 1.0: Flash upload dialog - http://profandesign.se/swfupload/,  http://www.vinterwebb.se/
SWFUpload is (c) 2006-2007 Lars Huring, Olov Nilzén and Mammon Media and is released under the MIT License:
http://www.opensource.org/licenses/mit-license.php
SWFUpload 2 is (c) 2007-2008 Jake Roberts and is released under the MIT License:
http://www.opensource.org/licenses/mit-license.php

SWFObject v2.2 <http://code.google.com/p/swfobject/> 
is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
;var swfobject=function(){var aq="undefined",aD="object",ab="Shockwave Flash",X="ShockwaveFlash.ShockwaveFlash",aE="application/x-shockwave-flash",ac="SWFObjectExprInst",ax="onreadystatechange",af=window,aL=document,aB=navigator,aa=false,Z=[aN],aG=[],ag=[],al=[],aJ,ad,ap,at,ak=false,aU=false,aH,an,aI=true,ah=function(){var a=typeof aL.getElementById!=aq&&typeof aL.getElementsByTagName!=aq&&typeof aL.createElement!=aq,e=aB.userAgent.toLowerCase(),c=aB.platform.toLowerCase(),h=c?/win/.test(c):/win/.test(e),j=c?/mac/.test(c):/mac/.test(e),g=/webkit/.test(e)?parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,d=!+"\v1",f=[0,0,0],k=null;if(typeof aB.plugins!=aq&&typeof aB.plugins[ab]==aD){k=aB.plugins[ab].description;if(k&&!(typeof aB.mimeTypes!=aq&&aB.mimeTypes[aE]&&!aB.mimeTypes[aE].enabledPlugin)){aa=true;d=false;k=k.replace(/^.*\s+(\S+\s+\S+$)/,"$1");f[0]=parseInt(k.replace(/^(.*)\..*$/,"$1"),10);f[1]=parseInt(k.replace(/^.*\.(.*)\s.*$/,"$1"),10);f[2]=/[a-zA-Z]/.test(k)?parseInt(k.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0;}}else{if(typeof af.ActiveXObject!=aq){try{var i=new ActiveXObject(X);if(i){k=i.GetVariable("$version");if(k){d=true;k=k.split(" ")[1].split(",");f=[parseInt(k[0],10),parseInt(k[1],10),parseInt(k[2],10)];}}}catch(b){}}}return{w3:a,pv:f,wk:g,ie:d,win:h,mac:j};}(),aK=function(){if(!ah.w3){return;}if((typeof aL.readyState!=aq&&aL.readyState=="complete")||(typeof aL.readyState==aq&&(aL.getElementsByTagName("body")[0]||aL.body))){aP();}if(!ak){if(typeof aL.addEventListener!=aq){aL.addEventListener("DOMContentLoaded",aP,false);}if(ah.ie&&ah.win){aL.attachEvent(ax,function(){if(aL.readyState=="complete"){aL.detachEvent(ax,arguments.callee);aP();}});if(af==top){(function(){if(ak){return;}try{aL.documentElement.doScroll("left");}catch(a){setTimeout(arguments.callee,0);return;}aP();})();}}if(ah.wk){(function(){if(ak){return;}if(!/loaded|complete/.test(aL.readyState)){setTimeout(arguments.callee,0);return;}aP();})();}aC(aP);}}();function aP(){if(ak){return;}try{var b=aL.getElementsByTagName("body")[0].appendChild(ar("span"));b.parentNode.removeChild(b);}catch(a){return;}ak=true;var d=Z.length;for(var c=0;c<d;c++){Z[c]();}}function aj(a){if(ak){a();}else{Z[Z.length]=a;}}function aC(a){if(typeof af.addEventListener!=aq){af.addEventListener("load",a,false);}else{if(typeof aL.addEventListener!=aq){aL.addEventListener("load",a,false);}else{if(typeof af.attachEvent!=aq){aM(af,"onload",a);}else{if(typeof af.onload=="function"){var b=af.onload;af.onload=function(){b();a();};}else{af.onload=a;}}}}}function aN(){if(aa){Y();}else{am();}}function Y(){var d=aL.getElementsByTagName("body")[0];var b=ar(aD);b.setAttribute("type",aE);var a=d.appendChild(b);if(a){var c=0;(function(){if(typeof a.GetVariable!=aq){var e=a.GetVariable("$version");if(e){e=e.split(" ")[1].split(",");ah.pv=[parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10)];}}else{if(c<10){c++;setTimeout(arguments.callee,10);return;}}d.removeChild(b);a=null;am();})();}else{am();}}function am(){var g=aG.length;if(g>0){for(var h=0;h<g;h++){var c=aG[h].id;var l=aG[h].callbackFn;var a={success:false,id:c};if(ah.pv[0]>0){var i=aS(c);if(i){if(ao(aG[h].swfVersion)&&!(ah.wk&&ah.wk<312)){ay(c,true);if(l){a.success=true;a.ref=av(c);l(a);}}else{if(aG[h].expressInstall&&au()){var e={};e.data=aG[h].expressInstall;e.width=i.getAttribute("width")||"0";e.height=i.getAttribute("height")||"0";if(i.getAttribute("class")){e.styleclass=i.getAttribute("class");}if(i.getAttribute("align")){e.align=i.getAttribute("align");}var f={};var d=i.getElementsByTagName("param");var k=d.length;for(var j=0;j<k;j++){if(d[j].getAttribute("name").toLowerCase()!="movie"){f[d[j].getAttribute("name")]=d[j].getAttribute("value");}}ae(e,f,c,l);}else{aF(i);if(l){l(a);}}}}}else{ay(c,true);if(l){var b=av(c);if(b&&typeof b.SetVariable!=aq){a.success=true;a.ref=b;}l(a);}}}}}function av(b){var d=null;var c=aS(b);if(c&&c.nodeName=="OBJECT"){if(typeof c.SetVariable!=aq){d=c;}else{var a=c.getElementsByTagName(aD)[0];if(a){d=a;}}}return d;}function au(){return !aU&&ao("6.0.65")&&(ah.win||ah.mac)&&!(ah.wk&&ah.wk<312);}function ae(f,d,h,e){aU=true;ap=e||null;at={success:false,id:h};var a=aS(h);if(a){if(a.nodeName=="OBJECT"){aJ=aO(a);ad=null;}else{aJ=a;ad=h;}f.id=ac;if(typeof f.width==aq||(!/%$/.test(f.width)&&parseInt(f.width,10)<310)){f.width="310";}if(typeof f.height==aq||(!/%$/.test(f.height)&&parseInt(f.height,10)<137)){f.height="137";}aL.title=aL.title.slice(0,47)+" - Flash Player Installation";var b=ah.ie&&ah.win?"ActiveX":"PlugIn",c="MMredirectURL="+af.location.toString().replace(/&/g,"%26")+"&MMplayerType="+b+"&MMdoctitle="+aL.title;if(typeof d.flashvars!=aq){d.flashvars+="&"+c;}else{d.flashvars=c;}if(ah.ie&&ah.win&&a.readyState!=4){var g=ar("div");h+="SWFObjectNew";g.setAttribute("id",h);a.parentNode.insertBefore(g,a);a.style.display="none";(function(){if(a.readyState==4){a.parentNode.removeChild(a);}else{setTimeout(arguments.callee,10);}})();}aA(f,d,h);}}function aF(a){if(ah.ie&&ah.win&&a.readyState!=4){var b=ar("div");a.parentNode.insertBefore(b,a);b.parentNode.replaceChild(aO(a),b);a.style.display="none";(function(){if(a.readyState==4){a.parentNode.removeChild(a);}else{setTimeout(arguments.callee,10);}})();}else{a.parentNode.replaceChild(aO(a),a);}}function aO(b){var d=ar("div");if(ah.win&&ah.ie){d.innerHTML=b.innerHTML;}else{var e=b.getElementsByTagName(aD)[0];if(e){var a=e.childNodes;if(a){var f=a.length;for(var c=0;c<f;c++){if(!(a[c].nodeType==1&&a[c].nodeName=="PARAM")&&!(a[c].nodeType==8)){d.appendChild(a[c].cloneNode(true));}}}}}return d;}function aA(e,g,c){var d,a=aS(c);if(ah.wk&&ah.wk<312){return d;}if(a){if(typeof e.id==aq){e.id=c;}if(ah.ie&&ah.win){var f="";for(var i in e){if(e[i]!=Object.prototype[i]){if(i.toLowerCase()=="data"){g.movie=e[i];}else{if(i.toLowerCase()=="styleclass"){f+=' class="'+e[i]+'"';}else{if(i.toLowerCase()!="classid"){f+=" "+i+'="'+e[i]+'"';}}}}}var h="";for(var j in g){if(g[j]!=Object.prototype[j]){h+='<param name="'+j+'" value="'+g[j]+'" />';}}a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+f+">"+h+"</object>";ag[ag.length]=e.id;d=aS(e.id);}else{var b=ar(aD);b.setAttribute("type",aE);for(var k in e){if(e[k]!=Object.prototype[k]){if(k.toLowerCase()=="styleclass"){b.setAttribute("class",e[k]);}else{if(k.toLowerCase()!="classid"){b.setAttribute(k,e[k]);}}}}for(var l in g){if(g[l]!=Object.prototype[l]&&l.toLowerCase()!="movie"){aQ(b,l,g[l]);}}a.parentNode.replaceChild(b,a);d=b;}}return d;}function aQ(b,d,c){var a=ar("param");a.setAttribute("name",d);a.setAttribute("value",c);b.appendChild(a);}function aw(a){var b=aS(a);if(b&&b.nodeName=="OBJECT"){if(ah.ie&&ah.win){b.style.display="none";(function(){if(b.readyState==4){aT(a);}else{setTimeout(arguments.callee,10);}})();}else{b.parentNode.removeChild(b);}}}function aT(a){var b=aS(a);if(b){for(var c in b){if(typeof b[c]=="function"){b[c]=null;}}b.parentNode.removeChild(b);}}function aS(a){var c=null;try{c=aL.getElementById(a);}catch(b){}return c;}function ar(a){return aL.createElement(a);}function aM(a,c,b){a.attachEvent(c,b);al[al.length]=[a,c,b];}function ao(a){var b=ah.pv,c=a.split(".");c[0]=parseInt(c[0],10);c[1]=parseInt(c[1],10)||0;c[2]=parseInt(c[2],10)||0;return(b[0]>c[0]||(b[0]==c[0]&&b[1]>c[1])||(b[0]==c[0]&&b[1]==c[1]&&b[2]>=c[2]))?true:false;}function az(b,f,a,c){if(ah.ie&&ah.mac){return;}var e=aL.getElementsByTagName("head")[0];if(!e){return;}var g=(a&&typeof a=="string")?a:"screen";if(c){aH=null;an=null;}if(!aH||an!=g){var d=ar("style");d.setAttribute("type","text/css");d.setAttribute("media",g);aH=e.appendChild(d);if(ah.ie&&ah.win&&typeof aL.styleSheets!=aq&&aL.styleSheets.length>0){aH=aL.styleSheets[aL.styleSheets.length-1];}an=g;}if(ah.ie&&ah.win){if(aH&&typeof aH.addRule==aD){aH.addRule(b,f);}}else{if(aH&&typeof aL.createTextNode!=aq){aH.appendChild(aL.createTextNode(b+" {"+f+"}"));}}}function ay(a,c){if(!aI){return;}var b=c?"visible":"hidden";if(ak&&aS(a)){aS(a).style.visibility=b;}else{az("#"+a,"visibility:"+b);}}function ai(b){var a=/[\\\"<>\.;]/;var c=a.exec(b)!=null;return c&&typeof encodeURIComponent!=aq?encodeURIComponent(b):b;}var aR=function(){if(ah.ie&&ah.win){window.attachEvent("onunload",function(){var a=al.length;for(var b=0;b<a;b++){al[b][0].detachEvent(al[b][1],al[b][2]);}var d=ag.length;for(var c=0;c<d;c++){aw(ag[c]);}for(var e in ah){ah[e]=null;}ah=null;for(var f in swfobject){swfobject[f]=null;}swfobject=null;});}}();return{registerObject:function(a,e,c,b){if(ah.w3&&a&&e){var d={};d.id=a;d.swfVersion=e;d.expressInstall=c;d.callbackFn=b;aG[aG.length]=d;ay(a,false);}else{if(b){b({success:false,id:a});}}},getObjectById:function(a){if(ah.w3){return av(a);}},embedSWF:function(k,e,h,f,c,a,b,i,g,j){var d={success:false,id:e};if(ah.w3&&!(ah.wk&&ah.wk<312)&&k&&e&&h&&f&&c){ay(e,false);aj(function(){h+="";f+="";var q={};if(g&&typeof g===aD){for(var o in g){q[o]=g[o];}}q.data=k;q.width=h;q.height=f;var n={};if(i&&typeof i===aD){for(var p in i){n[p]=i[p];}}if(b&&typeof b===aD){for(var l in b){if(typeof n.flashvars!=aq){n.flashvars+="&"+l+"="+b[l];}else{n.flashvars=l+"="+b[l];}}}if(ao(c)){var m=aA(q,n,e);if(q.id==e){ay(e,true);}d.success=true;d.ref=m;}else{if(a&&au()){q.data=a;ae(q,n,e,j);return;}else{ay(e,true);}}if(j){j(d);}});}else{if(j){j(d);}}},switchOffAutoHideShow:function(){aI=false;},ua:ah,getFlashPlayerVersion:function(){return{major:ah.pv[0],minor:ah.pv[1],release:ah.pv[2]};},hasFlashPlayerVersion:ao,createSWF:function(a,b,c){if(ah.w3){return aA(a,b,c);}else{return undefined;}},showExpressInstall:function(b,a,d,c){if(ah.w3&&au()){ae(b,a,d,c);}},removeSWF:function(a){if(ah.w3){aw(a);}},createCSS:function(b,a,c,d){if(ah.w3){az(b,a,c,d);}},addDomLoadEvent:aj,addLoadEvent:aC,getQueryParamValue:function(b){var a=aL.location.search||aL.location.hash;if(a){if(/\?/.test(a)){a=a.split("?")[1];}if(b==null){return ai(a);}var c=a.split("&");for(var d=0;d<c.length;d++){if(c[d].substring(0,c[d].indexOf("="))==b){return ai(c[d].substring((c[d].indexOf("=")+1)));}}}return"";},expressInstallCallback:function(){if(aU){var a=aS(ac);if(a&&aJ){a.parentNode.replaceChild(aJ,a);if(ad){ay(ad,true);if(ah.ie&&ah.win){aJ.style.display="block";}}if(ap){ap(at);}}aU=false;}}};}();var SWFUpload;if(SWFUpload==undefined){SWFUpload=function(b){this.initSWFUpload(b);};}SWFUpload.prototype.initSWFUpload=function(c){try{this.customSettings={};this.settings=c;this.eventQueue=[];this.movieName="SWFUpload_"+SWFUpload.movieCount++;this.movieElement=null;SWFUpload.instances[this.movieName]=this;this.initSettings();this.loadFlash();this.displayDebugInfo();}catch(d){delete SWFUpload.instances[this.movieName];throw d;}};SWFUpload.instances={};SWFUpload.movieCount=0;SWFUpload.version="2.2.0 2009-03-25";SWFUpload.QUEUE_ERROR={QUEUE_LIMIT_EXCEEDED:-100,FILE_EXCEEDS_SIZE_LIMIT:-110,ZERO_BYTE_FILE:-120,INVALID_FILETYPE:-130};SWFUpload.UPLOAD_ERROR={HTTP_ERROR:-200,MISSING_UPLOAD_URL:-210,IO_ERROR:-220,SECURITY_ERROR:-230,UPLOAD_LIMIT_EXCEEDED:-240,UPLOAD_FAILED:-250,SPECIFIED_FILE_ID_NOT_FOUND:-260,FILE_VALIDATION_FAILED:-270,FILE_CANCELLED:-280,UPLOAD_STOPPED:-290};SWFUpload.FILE_STATUS={QUEUED:-1,IN_PROGRESS:-2,ERROR:-3,COMPLETE:-4,CANCELLED:-5};SWFUpload.BUTTON_ACTION={SELECT_FILE:-100,SELECT_FILES:-110,START_UPLOAD:-120};SWFUpload.CURSOR={ARROW:-1,HAND:-2};SWFUpload.WINDOW_MODE={WINDOW:"window",TRANSPARENT:"transparent",OPAQUE:"opaque"};SWFUpload.completeURL=function(e){if(typeof(e)!=="string"||e.match(/^https?:\/\//i)||e.match(/^\//)){return e;}var f=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");var d=window.location.pathname.lastIndexOf("/");if(d<=0){path="/";}else{path=window.location.pathname.substr(0,d)+"/";}return path+e;};SWFUpload.prototype.initSettings=function(){this.ensureDefault=function(c,d){this.settings[c]=(this.settings[c]==undefined)?d:this.settings[c];};this.ensureDefault("upload_url","");this.ensureDefault("preserve_relative_urls",false);this.ensureDefault("file_post_name","Filedata");this.ensureDefault("post_params",{});this.ensureDefault("use_query_string",false);this.ensureDefault("requeue_on_error",false);this.ensureDefault("http_success",[]);this.ensureDefault("assume_success_timeout",0);this.ensureDefault("file_types","*.*");this.ensureDefault("file_types_description","All Files");this.ensureDefault("file_size_limit",0);this.ensureDefault("file_upload_limit",0);this.ensureDefault("file_queue_limit",0);this.ensureDefault("flash_url","swfupload.swf");this.ensureDefault("prevent_swf_caching",true);this.ensureDefault("button_image_url","");this.ensureDefault("button_width",1);this.ensureDefault("button_height",1);this.ensureDefault("button_text","");this.ensureDefault("button_text_style","color: #000000; font-size: 16pt;");this.ensureDefault("button_text_top_padding",0);this.ensureDefault("button_text_left_padding",0);this.ensureDefault("button_action",SWFUpload.BUTTON_ACTION.SELECT_FILES);this.ensureDefault("button_disabled",false);this.ensureDefault("button_placeholder_id","");this.ensureDefault("button_placeholder",null);this.ensureDefault("button_cursor",SWFUpload.CURSOR.ARROW);this.ensureDefault("button_window_mode",SWFUpload.WINDOW_MODE.WINDOW);this.ensureDefault("debug",false);this.settings.debug_enabled=this.settings.debug;this.settings.return_upload_start_handler=this.returnUploadStart;this.ensureDefault("swfupload_loaded_handler",null);this.ensureDefault("file_dialog_start_handler",null);this.ensureDefault("file_queued_handler",null);this.ensureDefault("file_queue_error_handler",null);this.ensureDefault("file_dialog_complete_handler",null);this.ensureDefault("upload_start_handler",null);this.ensureDefault("upload_progress_handler",null);this.ensureDefault("upload_error_handler",null);this.ensureDefault("upload_success_handler",null);this.ensureDefault("upload_complete_handler",null);this.ensureDefault("debug_handler",this.debugMessage);this.ensureDefault("custom_settings",{});this.customSettings=this.settings.custom_settings;if(!!this.settings.prevent_swf_caching){this.settings.flash_url=this.settings.flash_url+(this.settings.flash_url.indexOf("?")<0?"?":"&")+"preventswfcaching="+new Date().getTime();}if(!this.settings.preserve_relative_urls){this.settings.upload_url=SWFUpload.completeURL(this.settings.upload_url);this.settings.button_image_url=SWFUpload.completeURL(this.settings.button_image_url);}delete this.ensureDefault;};SWFUpload.prototype.loadFlash=function(){var d,c;if(document.getElementById(this.movieName)!==null){throw"ID "+this.movieName+" is already in use. The Flash Object could not be added";}d=document.getElementById(this.settings.button_placeholder_id)||this.settings.button_placeholder;if(d==undefined){throw"Could not find the placeholder element: "+this.settings.button_placeholder_id;}c=document.createElement("div");c.innerHTML=this.getFlashHTML();d.parentNode.replaceChild(c.firstChild,d);if(window[this.movieName]==undefined){window[this.movieName]=this.getMovieElement();}};SWFUpload.prototype.getFlashHTML=function(){return['<object id="',this.movieName,'" type="application/x-shockwave-flash" data="',this.settings.flash_url,'" width="',this.settings.button_width,'" height="',this.settings.button_height,'" class="swfupload">','<param name="wmode" value="',this.settings.button_window_mode,'" />','<param name="movie" value="',this.settings.flash_url,'" />','<param name="quality" value="high" />','<param name="menu" value="false" />','<param name="allowScriptAccess" value="always" />','<param name="flashvars" value="'+this.getFlashVars()+'" />',"</object>"].join("");};SWFUpload.prototype.getFlashVars=function(){var c=this.buildParamString();var d=this.settings.http_success.join(",");return["movieName=",encodeURIComponent(this.movieName),"&amp;uploadURL=",encodeURIComponent(this.settings.upload_url),"&amp;useQueryString=",encodeURIComponent(this.settings.use_query_string),"&amp;requeueOnError=",encodeURIComponent(this.settings.requeue_on_error),"&amp;httpSuccess=",encodeURIComponent(d),"&amp;assumeSuccessTimeout=",encodeURIComponent(this.settings.assume_success_timeout),"&amp;params=",encodeURIComponent(c),"&amp;filePostName=",encodeURIComponent(this.settings.file_post_name),"&amp;fileTypes=",encodeURIComponent(this.settings.file_types),"&amp;fileTypesDescription=",encodeURIComponent(this.settings.file_types_description),"&amp;fileSizeLimit=",encodeURIComponent(this.settings.file_size_limit),"&amp;fileUploadLimit=",encodeURIComponent(this.settings.file_upload_limit),"&amp;fileQueueLimit=",encodeURIComponent(this.settings.file_queue_limit),"&amp;debugEnabled=",encodeURIComponent(this.settings.debug_enabled),"&amp;buttonImageURL=",encodeURIComponent(this.settings.button_image_url),"&amp;buttonWidth=",encodeURIComponent(this.settings.button_width),"&amp;buttonHeight=",encodeURIComponent(this.settings.button_height),"&amp;buttonText=",encodeURIComponent(this.settings.button_text),"&amp;buttonTextTopPadding=",encodeURIComponent(this.settings.button_text_top_padding),"&amp;buttonTextLeftPadding=",encodeURIComponent(this.settings.button_text_left_padding),"&amp;buttonTextStyle=",encodeURIComponent(this.settings.button_text_style),"&amp;buttonAction=",encodeURIComponent(this.settings.button_action),"&amp;buttonDisabled=",encodeURIComponent(this.settings.button_disabled),"&amp;buttonCursor=",encodeURIComponent(this.settings.button_cursor)].join("");};SWFUpload.prototype.getMovieElement=function(){if(this.movieElement==undefined){this.movieElement=document.getElementById(this.movieName);}if(this.movieElement===null){throw"Could not find Flash element";}return this.movieElement;};SWFUpload.prototype.buildParamString=function(){var f=this.settings.post_params;var d=[];if(typeof(f)==="object"){for(var e in f){if(f.hasOwnProperty(e)){d.push(encodeURIComponent(e.toString())+"="+encodeURIComponent(f[e].toString()));}}}return d.join("&amp;");};SWFUpload.prototype.destroy=function(){try{this.cancelUpload(null,false);var g=null;g=this.getMovieElement();if(g&&typeof(g.CallFunction)==="unknown"){for(var j in g){try{if(typeof(g[j])==="function"){g[j]=null;}}catch(h){}}try{g.parentNode.removeChild(g);}catch(f){}}window[this.movieName]=null;SWFUpload.instances[this.movieName]=null;delete SWFUpload.instances[this.movieName];this.movieElement=null;this.settings=null;this.customSettings=null;this.eventQueue=null;this.movieName=null;return true;}catch(i){return false;}};SWFUpload.prototype.displayDebugInfo=function(){this.debug(["---SWFUpload Instance Info---\n","Version: ",SWFUpload.version,"\n","Movie Name: ",this.movieName,"\n","Settings:\n","\t","upload_url:               ",this.settings.upload_url,"\n","\t","flash_url:                ",this.settings.flash_url,"\n","\t","use_query_string:         ",this.settings.use_query_string.toString(),"\n","\t","requeue_on_error:         ",this.settings.requeue_on_error.toString(),"\n","\t","http_success:             ",this.settings.http_success.join(", "),"\n","\t","assume_success_timeout:   ",this.settings.assume_success_timeout,"\n","\t","file_post_name:           ",this.settings.file_post_name,"\n","\t","post_params:              ",this.settings.post_params.toString(),"\n","\t","file_types:               ",this.settings.file_types,"\n","\t","file_types_description:   ",this.settings.file_types_description,"\n","\t","file_size_limit:          ",this.settings.file_size_limit,"\n","\t","file_upload_limit:        ",this.settings.file_upload_limit,"\n","\t","file_queue_limit:         ",this.settings.file_queue_limit,"\n","\t","debug:                    ",this.settings.debug.toString(),"\n","\t","prevent_swf_caching:      ",this.settings.prevent_swf_caching.toString(),"\n","\t","button_placeholder_id:    ",this.settings.button_placeholder_id.toString(),"\n","\t","button_placeholder:       ",(this.settings.button_placeholder?"Set":"Not Set"),"\n","\t","button_image_url:         ",this.settings.button_image_url.toString(),"\n","\t","button_width:             ",this.settings.button_width.toString(),"\n","\t","button_height:            ",this.settings.button_height.toString(),"\n","\t","button_text:              ",this.settings.button_text.toString(),"\n","\t","button_text_style:        ",this.settings.button_text_style.toString(),"\n","\t","button_text_top_padding:  ",this.settings.button_text_top_padding.toString(),"\n","\t","button_text_left_padding: ",this.settings.button_text_left_padding.toString(),"\n","\t","button_action:            ",this.settings.button_action.toString(),"\n","\t","button_disabled:          ",this.settings.button_disabled.toString(),"\n","\t","custom_settings:          ",this.settings.custom_settings.toString(),"\n","Event Handlers:\n","\t","swfupload_loaded_handler assigned:  ",(typeof this.settings.swfupload_loaded_handler==="function").toString(),"\n","\t","file_dialog_start_handler assigned: ",(typeof this.settings.file_dialog_start_handler==="function").toString(),"\n","\t","file_queued_handler assigned:       ",(typeof this.settings.file_queued_handler==="function").toString(),"\n","\t","file_queue_error_handler assigned:  ",(typeof this.settings.file_queue_error_handler==="function").toString(),"\n","\t","upload_start_handler assigned:      ",(typeof this.settings.upload_start_handler==="function").toString(),"\n","\t","upload_progress_handler assigned:   ",(typeof this.settings.upload_progress_handler==="function").toString(),"\n","\t","upload_error_handler assigned:      ",(typeof this.settings.upload_error_handler==="function").toString(),"\n","\t","upload_success_handler assigned:    ",(typeof this.settings.upload_success_handler==="function").toString(),"\n","\t","upload_complete_handler assigned:   ",(typeof this.settings.upload_complete_handler==="function").toString(),"\n","\t","debug_handler assigned:             ",(typeof this.settings.debug_handler==="function").toString(),"\n"].join(""));};SWFUpload.prototype.addSetting=function(d,f,e){if(f==undefined){return(this.settings[d]=e);}else{return(this.settings[d]=f);}};SWFUpload.prototype.getSetting=function(b){if(this.settings[b]!=undefined){return this.settings[b];}return"";};SWFUpload.prototype.callFlash=function(functionName,argumentArray){argumentArray=argumentArray||[];var movieElement=this.getMovieElement();var returnValue,returnString;try{returnString=movieElement.CallFunction('<invoke name="'+functionName+'" returntype="javascript">'+__flash__argumentsToXML(argumentArray,0)+"</invoke>");returnValue=eval(returnString);}catch(ex){throw"Call to "+functionName+" failed";}if(returnValue!=undefined&&typeof returnValue.post==="object"){returnValue=this.unescapeFilePostParams(returnValue);}return returnValue;};SWFUpload.prototype.selectFile=function(){this.callFlash("SelectFile");};SWFUpload.prototype.selectFiles=function(){this.callFlash("SelectFiles");};SWFUpload.prototype.startUpload=function(b){this.callFlash("StartUpload",[b]);};SWFUpload.prototype.cancelUpload=function(d,c){if(c!==false){c=true;}this.callFlash("CancelUpload",[d,c]);};SWFUpload.prototype.stopUpload=function(){this.callFlash("StopUpload");};SWFUpload.prototype.getStats=function(){return this.callFlash("GetStats");};SWFUpload.prototype.setStats=function(b){this.callFlash("SetStats",[b]);};SWFUpload.prototype.getFile=function(b){if(typeof(b)==="number"){return this.callFlash("GetFileByIndex",[b]);}else{return this.callFlash("GetFile",[b]);}};SWFUpload.prototype.addFileParam=function(e,d,f){return this.callFlash("AddFileParam",[e,d,f]);};SWFUpload.prototype.removeFileParam=function(d,c){this.callFlash("RemoveFileParam",[d,c]);};SWFUpload.prototype.setUploadURL=function(b){this.settings.upload_url=b.toString();this.callFlash("SetUploadURL",[b]);};SWFUpload.prototype.setPostParams=function(b){this.settings.post_params=b;this.callFlash("SetPostParams",[b]);};SWFUpload.prototype.addPostParam=function(d,c){this.settings.post_params[d]=c;this.callFlash("SetPostParams",[this.settings.post_params]);};SWFUpload.prototype.removePostParam=function(b){delete this.settings.post_params[b];this.callFlash("SetPostParams",[this.settings.post_params]);};SWFUpload.prototype.setFileTypes=function(d,c){this.settings.file_types=d;this.settings.file_types_description=c;this.callFlash("SetFileTypes",[d,c]);};SWFUpload.prototype.setFileSizeLimit=function(b){this.settings.file_size_limit=b;this.callFlash("SetFileSizeLimit",[b]);};SWFUpload.prototype.setFileUploadLimit=function(b){this.settings.file_upload_limit=b;this.callFlash("SetFileUploadLimit",[b]);};SWFUpload.prototype.setFileQueueLimit=function(b){this.settings.file_queue_limit=b;this.callFlash("SetFileQueueLimit",[b]);};SWFUpload.prototype.setFilePostName=function(b){this.settings.file_post_name=b;this.callFlash("SetFilePostName",[b]);};SWFUpload.prototype.setUseQueryString=function(b){this.settings.use_query_string=b;this.callFlash("SetUseQueryString",[b]);};SWFUpload.prototype.setRequeueOnError=function(b){this.settings.requeue_on_error=b;this.callFlash("SetRequeueOnError",[b]);};SWFUpload.prototype.setHTTPSuccess=function(b){if(typeof b==="string"){b=b.replace(" ","").split(",");}this.settings.http_success=b;this.callFlash("SetHTTPSuccess",[b]);};SWFUpload.prototype.setAssumeSuccessTimeout=function(b){this.settings.assume_success_timeout=b;this.callFlash("SetAssumeSuccessTimeout",[b]);};SWFUpload.prototype.setDebugEnabled=function(b){this.settings.debug_enabled=b;this.callFlash("SetDebugEnabled",[b]);};SWFUpload.prototype.setButtonImageURL=function(b){if(b==undefined){b="";}this.settings.button_image_url=b;this.callFlash("SetButtonImageURL",[b]);};SWFUpload.prototype.setButtonDimensions=function(f,e){this.settings.button_width=f;this.settings.button_height=e;var d=this.getMovieElement();if(d!=undefined){d.style.width=f+"px";d.style.height=e+"px";}this.callFlash("SetButtonDimensions",[f,e]);};SWFUpload.prototype.setButtonText=function(b){this.settings.button_text=b;this.callFlash("SetButtonText",[b]);};SWFUpload.prototype.setButtonTextPadding=function(c,d){this.settings.button_text_top_padding=d;this.settings.button_text_left_padding=c;this.callFlash("SetButtonTextPadding",[c,d]);};SWFUpload.prototype.setButtonTextStyle=function(b){this.settings.button_text_style=b;this.callFlash("SetButtonTextStyle",[b]);};SWFUpload.prototype.setButtonDisabled=function(b){this.settings.button_disabled=b;this.callFlash("SetButtonDisabled",[b]);};SWFUpload.prototype.setButtonAction=function(b){this.settings.button_action=b;this.callFlash("SetButtonAction",[b]);};SWFUpload.prototype.setButtonCursor=function(b){this.settings.button_cursor=b;this.callFlash("SetButtonCursor",[b]);};SWFUpload.prototype.queueEvent=function(d,f){if(f==undefined){f=[];}else{if(!(f instanceof Array)){f=[f];}}var e=this;if(typeof this.settings[d]==="function"){this.eventQueue.push(function(){this.settings[d].apply(this,f);});setTimeout(function(){e.executeNextEvent();},0);}else{if(this.settings[d]!==null){throw"Event handler "+d+" is unknown or is not a function";}}};SWFUpload.prototype.executeNextEvent=function(){var b=this.eventQueue?this.eventQueue.shift():null;if(typeof(b)==="function"){b.apply(this);}};SWFUpload.prototype.unescapeFilePostParams=function(l){var j=/[$]([0-9a-f]{4})/i;var i={};var k;if(l!=undefined){for(var h in l.post){if(l.post.hasOwnProperty(h)){k=h;var g;while((g=j.exec(k))!==null){k=k.replace(g[0],String.fromCharCode(parseInt("0x"+g[1],16)));}i[k]=l.post[h];}}l.post=i;}return l;};SWFUpload.prototype.testExternalInterface=function(){try{return this.callFlash("TestExternalInterface");}catch(b){return false;}};SWFUpload.prototype.flashReady=function(){var b=this.getMovieElement();if(!b){this.debug("Flash called back ready but the flash movie can't be found.");return;}this.cleanUp(b);this.queueEvent("swfupload_loaded_handler");};SWFUpload.prototype.cleanUp=function(f){try{if(this.movieElement&&typeof(f.CallFunction)==="unknown"){this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");for(var h in f){try{if(typeof(f[h])==="function"){f[h]=null;}}catch(e){}}}}catch(g){}window.__flash__removeCallback=function(c,b){try{if(c){c[b]=null;}}catch(a){}};};SWFUpload.prototype.fileDialogStart=function(){this.queueEvent("file_dialog_start_handler");};SWFUpload.prototype.fileQueued=function(b){b=this.unescapeFilePostParams(b);this.queueEvent("file_queued_handler",b);};SWFUpload.prototype.fileQueueError=function(e,f,d){e=this.unescapeFilePostParams(e);this.queueEvent("file_queue_error_handler",[e,f,d]);};SWFUpload.prototype.fileDialogComplete=function(d,f,e){this.queueEvent("file_dialog_complete_handler",[d,f,e]);};SWFUpload.prototype.uploadStart=function(b){b=this.unescapeFilePostParams(b);this.queueEvent("return_upload_start_handler",b);};SWFUpload.prototype.returnUploadStart=function(d){var c;if(typeof this.settings.upload_start_handler==="function"){d=this.unescapeFilePostParams(d);c=this.settings.upload_start_handler.call(this,d);}else{if(this.settings.upload_start_handler!=undefined){throw"upload_start_handler must be a function";}}if(c===undefined){c=true;}c=!!c;this.callFlash("ReturnUploadStart",[c]);};SWFUpload.prototype.uploadProgress=function(e,f,d){e=this.unescapeFilePostParams(e);this.queueEvent("upload_progress_handler",[e,f,d]);};SWFUpload.prototype.uploadError=function(e,f,d){e=this.unescapeFilePostParams(e);this.queueEvent("upload_error_handler",[e,f,d]);};SWFUpload.prototype.uploadSuccess=function(d,e,f){d=this.unescapeFilePostParams(d);this.queueEvent("upload_success_handler",[d,e,f]);};SWFUpload.prototype.uploadComplete=function(b){b=this.unescapeFilePostParams(b);this.queueEvent("upload_complete_handler",b);};SWFUpload.prototype.debug=function(b){this.queueEvent("debug_handler",b);};SWFUpload.prototype.debugMessage=function(h){if(this.settings.debug){var f,g=[];if(typeof h==="object"&&typeof h.name==="string"&&typeof h.message==="string"){for(var e in h){if(h.hasOwnProperty(e)){g.push(e+": "+h[e]);}}f=g.join("\n")||"";g=f.split("\n");f="EXCEPTION: "+g.join("\nEXCEPTION: ");SWFUpload.Console.writeLine(f);}else{SWFUpload.Console.writeLine(h);}}};SWFUpload.Console={};SWFUpload.Console.writeLine=function(g){var e,f;try{e=document.getElementById("SWFUpload_Console");if(!e){f=document.createElement("form");document.getElementsByTagName("body")[0].appendChild(f);e=document.createElement("textarea");e.id="SWFUpload_Console";e.style.fontFamily="monospace";e.setAttribute("wrap","off");e.wrap="off";e.style.overflow="auto";e.style.width="700px";e.style.height="350px";e.style.margin="5px";f.appendChild(e);}e.value+=g+"\n";e.scrollTop=e.scrollHeight-e.clientHeight;}catch(h){alert("Exception: "+h.name+" Message: "+h.message);}};(function(c){var b={init:function(d,e){return this.each(function(){var n=c(this);var m=n.clone();var j=c.extend({id:n.attr("id"),swf:"uploadify.swf",uploader:"uploadify.php",auto:true,buttonClass:"",buttonCursor:"hand",buttonImage:null,buttonText:"SELECT FILES",checkExisting:false,debug:false,fileObjName:"Filedata",fileSizeLimit:0,fileTypeDesc:"All Files",fileTypeExts:"*.*",height:30,itemTemplate:false,method:"post",multi:true,formData:{},preventCaching:true,progressData:"percentage",queueID:false,queueSizeLimit:999,removeCompleted:true,removeTimeout:3,requeueErrors:false,successTimeout:30,uploadLimit:0,width:120,overrideEvents:[]},d);var g={assume_success_timeout:j.successTimeout,button_placeholder_id:j.id,button_width:j.width,button_height:j.height,button_text:null,button_text_style:null,button_text_top_padding:0,button_text_left_padding:0,button_action:(j.multi?SWFUpload.BUTTON_ACTION.SELECT_FILES:SWFUpload.BUTTON_ACTION.SELECT_FILE),button_disabled:false,button_cursor:(j.buttonCursor=="arrow"?SWFUpload.CURSOR.ARROW:SWFUpload.CURSOR.HAND),button_window_mode:SWFUpload.WINDOW_MODE.TRANSPARENT,debug:j.debug,requeue_on_error:j.requeueErrors,file_post_name:j.fileObjName,file_size_limit:j.fileSizeLimit,file_types:j.fileTypeExts,file_types_description:j.fileTypeDesc,file_queue_limit:j.queueSizeLimit,file_upload_limit:j.uploadLimit,flash_url:j.swf,prevent_swf_caching:j.preventCaching,post_params:j.formData,upload_url:j.uploader,use_query_string:(j.method=="get"),file_dialog_complete_handler:a.onDialogClose,file_dialog_start_handler:a.onDialogOpen,file_queued_handler:a.onSelect,file_queue_error_handler:a.onSelectError,swfupload_loaded_handler:j.onSWFReady,upload_complete_handler:a.onUploadComplete,upload_error_handler:a.onUploadError,upload_progress_handler:a.onUploadProgress,upload_start_handler:a.onUploadStart,upload_success_handler:a.onUploadSuccess};if(e){g=c.extend(g,e);}g=c.extend(g,j);var o=swfobject.getFlashPlayerVersion();var h=(o.major>=9);if(h){window["uploadify_"+j.id]=new SWFUpload(g);var i=window["uploadify_"+j.id];n.data("uploadify",i);var l=c("<div />",{id:j.id,"class":"uploadify",css:{height:j.height+"px",width:j.width+"px"}});c("#"+i.movieName).wrap(l);l=c("#"+j.id);l.data("uploadify",i);var f=c("<div />",{id:j.id+"-button","class":"uploadify-button "+j.buttonClass});if(j.buttonImage){f.css({"background-image":"url('"+j.buttonImage+"')","text-indent":"-9999px"});}f.html('<span class="uploadify-button-text">'+j.buttonText+"</span>").css({height:j.height+"px","line-height":j.height+"px",width:j.width+"px"});l.append(f);c("#"+i.movieName).css({position:"absolute","z-index":1});if(!j.queueID){var k=c("<div />",{id:j.id+"-queue","class":"uploadify-queue"});l.after(k);i.settings.queueID=j.id+"-queue";i.settings.defaultQueue=true;}i.queueData={files:{},filesSelected:0,filesQueued:0,filesReplaced:0,filesCancelled:0,filesErrored:0,uploadsSuccessful:0,uploadsErrored:0,averageSpeed:0,queueLength:0,queueSize:0,uploadSize:0,queueBytesUploaded:0,uploadQueue:[],errorMsg:"Some files were not added to the queue:"};i.original=m;i.wrapper=l;i.button=f;i.queue=k;if(j.onInit){j.onInit.call(n,i);}}else{if(j.onFallback){j.onFallback.call(n);}}});},cancel:function(d,f){var e=arguments;this.each(function(){var l=c(this),i=l.data("uploadify"),j=i.settings,h=-1;if(e[0]){if(e[0]=="*"){var g=i.queueData.queueLength;c("#"+j.queueID).find(".uploadify-queue-item").each(function(){h++;if(e[1]===true){i.cancelUpload(c(this).attr("id"),false);}else{i.cancelUpload(c(this).attr("id"));}c(this).find(".data").removeClass("data");c(this).find(".uploadify-progress-bar").remove();c(this).delay(1000+100*h).fadeOut(500,function(){c(this).remove();});});i.queueData.queueSize=0;i.queueData.queueLength=0;if(j.onClearQueue){j.onClearQueue.call(l,g);}}else{for(var m=0;m<e.length;m++){i.cancelUpload(e[m]);c("#"+e[m]).find(".data").removeClass("data");c("#"+e[m]).find(".uploadify-progress-bar").remove();c("#"+e[m]).delay(1000+100*m).fadeOut(500,function(){c(this).remove();});}}}else{var k=c("#"+j.queueID).find(".uploadify-queue-item").get(0);$item=c(k);i.cancelUpload($item.attr("id"));$item.find(".data").removeClass("data");$item.find(".uploadify-progress-bar").remove();$item.delay(1000).fadeOut(500,function(){c(this).remove();});}});},destroy:function(){this.each(function(){var f=c(this),d=f.data("uploadify"),e=d.settings;d.destroy();if(e.defaultQueue){c("#"+e.queueID).remove();}c("#"+e.id).replaceWith(d.original);if(e.onDestroy){e.onDestroy.call(this);}delete d;});},disable:function(d){this.each(function(){var g=c(this),e=g.data("uploadify"),f=e.settings;if(d){e.button.addClass("disabled");if(f.onDisable){f.onDisable.call(this);}}else{e.button.removeClass("disabled");if(f.onEnable){f.onEnable.call(this);}}e.setButtonDisabled(d);});},settings:function(e,g,h){var d=arguments;var f=g;this.each(function(){var k=c(this),i=k.data("uploadify"),j=i.settings;if(typeof(d[0])=="object"){for(var l in g){setData(l,g[l]);}}if(d.length===1){f=j[e];}else{switch(e){case"uploader":i.setUploadURL(g);break;case"formData":if(!h){g=c.extend(j.formData,g);}i.setPostParams(j.formData);break;case"method":if(g=="get"){i.setUseQueryString(true);}else{i.setUseQueryString(false);}break;case"fileObjName":i.setFilePostName(g);break;case"fileTypeExts":i.setFileTypes(g,j.fileTypeDesc);break;case"fileTypeDesc":i.setFileTypes(j.fileTypeExts,g);break;case"fileSizeLimit":i.setFileSizeLimit(g);break;case"uploadLimit":i.setFileUploadLimit(g);break;case"queueSizeLimit":i.setFileQueueLimit(g);break;case"buttonImage":i.button.css("background-image",settingValue);break;case"buttonCursor":if(g=="arrow"){i.setButtonCursor(SWFUpload.CURSOR.ARROW);}else{i.setButtonCursor(SWFUpload.CURSOR.HAND);}break;case"buttonText":c("#"+j.id+"-button").find(".uploadify-button-text").html(g);break;case"width":i.setButtonDimensions(g,j.height);break;case"height":i.setButtonDimensions(j.width,g);break;case"multi":if(g){i.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILES);}else{i.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILE);}break;}j[e]=g;}});if(d.length===1){return f;}},stop:function(){this.each(function(){var e=c(this),d=e.data("uploadify");d.queueData.averageSpeed=0;d.queueData.uploadSize=0;d.queueData.bytesUploaded=0;d.queueData.uploadQueue=[];d.stopUpload();});},upload:function(){var d=arguments;this.each(function(){var f=c(this),e=f.data("uploadify");e.queueData.averageSpeed=0;e.queueData.uploadSize=0;e.queueData.bytesUploaded=0;e.queueData.uploadQueue=[];if(d[0]){if(d[0]=="*"){e.queueData.uploadSize=e.queueData.queueSize;e.queueData.uploadQueue.push("*");e.startUpload();}else{for(var g=0;g<d.length;g++){e.queueData.uploadSize+=e.queueData.files[d[g]].size;e.queueData.uploadQueue.push(d[g]);}e.startUpload(e.queueData.uploadQueue.shift());}}else{e.startUpload();}});}};var a={onDialogOpen:function(){var d=this.settings;this.queueData.errorMsg="Some files were not added to the queue:";this.queueData.filesReplaced=0;this.queueData.filesCancelled=0;if(d.onDialogOpen){d.onDialogOpen.call(this);}},onDialogClose:function(d,f,g){var e=this.settings;this.queueData.filesErrored=d-f;this.queueData.filesSelected=d;this.queueData.filesQueued=f-this.queueData.filesCancelled;this.queueData.queueLength=g;if(c.inArray("onDialogClose",e.overrideEvents)<0){if(this.queueData.filesErrored>0){alert(this.queueData.errorMsg);}}if(e.onDialogClose){e.onDialogClose.call(this,this.queueData);}if(e.auto){c("#"+e.id).uploadify("upload","*");}},onSelect:function(h){var i=this.settings;var f={};for(var g in this.queueData.files){f=this.queueData.files[g];if(f.uploaded!=true&&f.name==h.name){var e=confirm(h.name+'" 已存在.\n\n确定再次上传?');if(!e){this.cancelUpload(h.id);this.queueData.filesCancelled++;return false;}else{c("#"+f.id).remove();this.cancelUpload(f.id);this.queueData.filesReplaced++;}}}var j=Math.round(h.size/1024);var o="KB";if(j>1000){j=Math.round(j/1000);o="MB";}var l=j.toString().split(".");j=l[0];if(l.length>1){j+="."+l[1].substr(0,2);}j+=o;var k=h.name;if(k.length>25){k=k.substr(0,25)+"...";}itemData={fileID:h.id,instanceID:i.id,fileName:k,fileSize:j};if(i.itemTemplate==false){i.itemTemplate='<div id="${fileID}" class="uploadify-queue-item"><div class="cancel"><a href="javascript:$(\'#${instanceID}\').uploadify(\'cancel\',\'*\')">放弃上传</a></div><span class="fileName">${fileName} (${fileSize})</span><span class="data"></span><div class="uploadify-progress"><div class="uploadify-progress-bar"><!--Progress Bar--></div></div></div>';}if(c.inArray("onSelect",i.overrideEvents)<0){itemHTML=i.itemTemplate;for(var m in itemData){itemHTML=itemHTML.replace(new RegExp("\\$\\{"+m+"\\}","g"),itemData[m]);}c("#"+i.queueID).append(itemHTML);}this.queueData.queueSize+=h.size;this.queueData.files[h.id]=h;if(i.onSelect){i.onSelect.apply(this,arguments);}},onSelectError:function(d,g,f){var e=this.settings;if(c.inArray("onSelectError",e.overrideEvents)<0){switch(g){case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:if(e.queueSizeLimit>f){this.queueData.errorMsg+="\nThe number of files selected exceeds the remaining upload limit ("+f+").";}else{this.queueData.errorMsg+="\nThe number of files selected exceeds the queue size limit ("+e.queueSizeLimit+").";}break;case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:this.queueData.errorMsg+='\nThe file "'+d.name+'" exceeds the size limit ('+e.fileSizeLimit+").";break;case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:this.queueData.errorMsg+='\nThe file "'+d.name+'" is empty.';break;case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:this.queueData.errorMsg+='\nThe file "'+d.name+'" is not an accepted file type ('+e.fileTypeDesc+").";break;}}if(g!=SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED){delete this.queueData.files[d.id];}if(e.onSelectError){e.onSelectError.apply(this,arguments);}},onQueueComplete:function(){if(this.settings.onQueueComplete){this.settings.onQueueComplete.call(this,this.settings.queueData);}},onUploadComplete:function(f){var g=this.settings,d=this;var e=this.getStats();this.queueData.queueLength=e.files_queued;if(this.queueData.uploadQueue[0]=="*"){if(this.queueData.queueLength>0){this.startUpload();}else{this.queueData.uploadQueue=[];if(g.onQueueComplete){g.onQueueComplete.call(this,this.queueData);}}}else{if(this.queueData.uploadQueue.length>0){this.startUpload(this.queueData.uploadQueue.shift());}else{this.queueData.uploadQueue=[];if(g.onQueueComplete){g.onQueueComplete.call(this,this.queueData);}}}if(c.inArray("onUploadComplete",g.overrideEvents)<0){if(g.removeCompleted){switch(f.filestatus){case SWFUpload.FILE_STATUS.COMPLETE:setTimeout(function(){if(c("#"+f.id)){d.queueData.queueSize-=f.size;d.queueData.queueLength-=1;delete d.queueData.files[f.id];c("#"+f.id).fadeOut(500,function(){c(this).remove();});}},g.removeTimeout*1000);break;case SWFUpload.FILE_STATUS.ERROR:if(!g.requeueErrors){setTimeout(function(){if(c("#"+f.id)){d.queueData.queueSize-=f.size;d.queueData.queueLength-=1;delete d.queueData.files[f.id];c("#"+f.id).fadeOut(500,function(){c(this).remove();});}},g.removeTimeout*1000);}break;}}else{f.uploaded=true;}}if(g.onUploadComplete){g.onUploadComplete.call(this,f);}},onUploadError:function(e,i,h){var f=this.settings;var g="Error";switch(i){case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:g="HTTP Error ("+h+")";break;case SWFUpload.UPLOAD_ERROR.MISSING_UPLOAD_URL:g="Missing Upload URL";break;case SWFUpload.UPLOAD_ERROR.IO_ERROR:g="IO Error";break;case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:g="Security Error";break;case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:alert("The upload limit has been reached ("+h+").");g="Exceeds Upload Limit";break;case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:g="Failed";break;case SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND:break;case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:g="Validation Error";break;case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:g="Cancelled";this.queueData.queueSize-=e.size;this.queueData.queueLength-=1;if(e.status==SWFUpload.FILE_STATUS.IN_PROGRESS||c.inArray(e.id,this.queueData.uploadQueue)>=0){this.queueData.uploadSize-=e.size;}if(f.onCancel){f.onCancel.call(this,e);}delete this.queueData.files[e.id];break;case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:g="Stopped";break;}if(c.inArray("onUploadError",f.overrideEvents)<0){if(i!=SWFUpload.UPLOAD_ERROR.FILE_CANCELLED&&i!=SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED){c("#"+e.id).addClass("uploadify-error");}c("#"+e.id).find(".uploadify-progress-bar").css("width","1px");if(i!=SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND&&e.status!=SWFUpload.FILE_STATUS.COMPLETE){c("#"+e.id).find(".data").html(" - "+g);}}var d=this.getStats();this.queueData.uploadsErrored=d.upload_errors;if(f.onUploadError){f.onUploadError.call(this,e,i,h,g);}},onUploadProgress:function(g,m,j){var h=this.settings;var e=new Date();var n=e.getTime();var k=n-this.timer;if(k>500){this.timer=n;}var i=m-this.bytesLoaded;this.bytesLoaded=m;var d=this.queueData.queueBytesUploaded+m;var p=Math.round(m/j*100);var o="KB/s";var l=0;var f=(i/1024)/(k/1000);f=Math.floor(f*10)/10;if(this.queueData.averageSpeed>0){this.queueData.averageSpeed=Math.floor((this.queueData.averageSpeed+f)/2);}else{this.queueData.averageSpeed=Math.floor(f);}if(f>1000){l=(f*0.001);this.queueData.averageSpeed=Math.floor(l);o="MB/s";}if(c.inArray("onUploadProgress",h.overrideEvents)<0){if(h.progressData=="percentage"){c("#"+g.id).find(".data").html(" - "+p+"%");}else{if(h.progressData=="speed"&&k>500){c("#"+g.id).find(".data").html(" - "+this.queueData.averageSpeed+o);}}c("#"+g.id).find(".uploadify-progress-bar").css("width",p+"%");}if(h.onUploadProgress){h.onUploadProgress.call(this,g,m,j,d,this.queueData.uploadSize);}},onUploadStart:function(d){var e=this.settings;var f=new Date();this.timer=f.getTime();this.bytesLoaded=0;if(this.queueData.uploadQueue.length==0){this.queueData.uploadSize=d.size;}if(e.checkExisting){c.ajax({type:"POST",async:false,url:e.checkExisting,data:{filename:d.name},success:function(h){if(h==1){var g=confirm('A file with the name "'+d.name+'" already exists on the server.\nWould you like to replace the existing file?');if(!g){this.cancelUpload(d.id);c("#"+d.id).remove();if(this.queueData.uploadQueue.length>0&&this.queueData.queueLength>0){if(this.queueData.uploadQueue[0]=="*"){this.startUpload();}else{this.startUpload(this.queueData.uploadQueue.shift());}}}}}});}if(e.onUploadStart){e.onUploadStart.call(this,d);}},onUploadSuccess:function(f,h,d){var g=this.settings;var e=this.getStats();this.queueData.uploadsSuccessful=e.successful_uploads;this.queueData.queueBytesUploaded+=f.size;if(c.inArray("onUploadSuccess",g.overrideEvents)<0){c("#"+f.id).find(".data").html(" - Complete");}if(g.onUploadSuccess){g.onUploadSuccess.call(this,f,h,d);}}};c.fn.uploadify=function(d){if(b[d]){return b[d].apply(this,Array.prototype.slice.call(arguments,1));}else{if(typeof d==="object"||!d){return b.init.apply(this,arguments);}else{c.error("The method "+d+" does not exist in $.uploadify");}}};})($);
 
 queueSizeLimitFeedback = 5;
$(document).bind("click",function(e){
    var target = $(e.target);
    if(target.closest(".feedback_con").length == 0 && target.closest(".feedback_wraper").length == 0){
        $(".feedback_con").hide();
    }
});  
function uploadifyFeedBackInit() {
    var queueNum =0;
    $('#feedback_file_upload').uploadify({
            'auto' : true,
            'multi' : false,
            'removeCompleted' : true,
            'fileSizeLimit' : '4000KB',
            'queueSizeLimit' : queueSizeLimitFeedback,
            'fileTypeExts' : '*.jpg;*.jpeg;*.gif;*.png',
            'buttonClass' : 'uploadifyButtonFeedback',
            'buttonText' : '上传截图',
            'width': 50,
            'height': 20,
            'swf'      : '/swf/uploadify.swf',
            //'uploader' : "http://"+domain+"/uploadify.php?type=feedback",
            'uploader' : uploadImageUrl+"?type=feedback",
            'overrideEvents': ['onSelectError', 'onDialogClose'],
            'onSelectError': function (file, errorCode, errorMsg) {
                switch (errorCode) {
                    case -100:
                        $('.feed_p1').text("只能上传5张图片");
                        break;
                    case -110:
                        $('.feed_p1').text("请上传小于4M的图片");
                        break;
                }
                return false;
            },
            'onDialogClose'  : function(queueData) {
                queueNum += queueData.filesQueued;
                $('#feedback_file_upload-queue').show();
            },
            'onUploadStart' : function(file) {
                $('#is_upload_progress').val(1);
                //$('.fileName','#'+file.id).html('正在上传' + (file.index+1) + ' / ' + queueNum);
                $('.fileName','#'+file.id).html('正在上传1/1');
            },
            'onUploadSuccess' : function(file, data, response) {
                $('#'+file.id).hide();
                $('.feed_ul').show();
                var imgData = eval('('+data+')');
			    addFeedbackImage(imgData,file.id,file.name);

                var imgCount = $('.feed_ul li').length;
                var limit = queueSizeLimitFeedback-imgCount;
                $('#feedback_file_upload').uploadify('settings','queueSizeLimit',limit);
                if (imgCount >= queueSizeLimitFeedback) {
                    $('#feedback_file_upload').uploadify('disable',true);
                }
                $('.feed_p1').text("您还可以上传"+limit+"张图片");
                $('#is_upload_progress').val(0);
            },
            'onClearQueue' : function(queueItemCount){
                $('.uploadify-queue').hide();
                $('#is_upload_progress').val(0);
            }
    });
    $('#SWFUpload_0').css('left','10px');
    $('.uploadify-queue').removeClass();
    $('#feedback_file_upload').attr('title','更直观的展示您遇到的问题');
}
$(function () {
    $(window).scroll(function(){
        if ($(window).scrollTop()>100) {
            $(".back_top").fadeIn(1500);
        } else {
            $(".back_top").fadeOut(1500);
        }
    });

    $(".back_top").bind("mouseenter",function(){
        $(this).children().show();
    }).bind("mouseleave",function(){
        $(this).children().hide();
    });
    $(".feedback").bind("mouseenter",function(){
        $(this).children().show();
    }).bind("mouseleave",function(){
        $(this).children().hide();
    });

    $(".weiXin_sider").bind("click",function(){
        if($(".weiXin_img").is(":hidden"))
        {
            $(".weiXin_img").show();
            $(".weiXin_sider").addClass("marginT106");
            $(".weiXin_tri").addClass("tri_R");
            $(".weiXin_con").width(218);
        }else
        {
            $(".weiXin_img").hide();
            $(".weiXin_sider").removeClass("marginT106");
            $(".weiXin_tri").removeClass("tri_R");
            $(".weiXin_con").width(32);

        }
    
    });
});
function feedback_scroll_top() {
    $('body,html').animate({scrollTop:0},1000);
}
function showFeedback() {
    AjaxGetFeedBack();
    if ($("#feedback_column1").is(":hidden") && $("#feedback_column2").is(":hidden") || !$("#feedback_column1").is(":hidden")) {
        $("#feedback_column1").toggle();
    } else {
        $("#feedback_column2").toggle();
    }
}
function close_feedback() {
    $('.feedback_con').hide();
}
function addFeedbackImage(imgData,id,name) {
    if(!id || !imgData || !imgData.url) {
        alert("上传失败.请重新上传!");
        return;
    }
    var successId = 'Success_' + id;
    var imgDiv = document.createElement("li");
    imgDiv.id = successId; 
    $("#thumbnails_feedback").append(imgDiv);
    var imgSrc = imgData.domain + '/' + imgData. smallImgSpec+ '/' + imgData.url;
    var imgHtml = '<img class="upload_img" src="'+imgSrc+'" width="50" height="31" value="'+imgData.url+'" realwidth="'+imgData.width+'" realheight="'+imgData.height+'"/><a href="javascript:void(0);" onclick="removeFeedbackImage(\''+successId+'\')" class="pic_delete"></a>';
    $('#'+successId).append(imgHtml);
}
function buildFeedbackImageParam() {
    var imgParam = "";
    var images = $(".upload_img").length;
    if(images <= queueSizeLimitFeedback) {
        $(".upload_img").each(function(){
                imgParam += $(this).attr("value");
                imgParam += "---" + $(this).attr("realwidth");
                imgParam += "---" + $(this).attr("realheight");
                imgParam += "|||";
                });
    } else {
        $('.feed_p1').text("上传图片不超过5张！");
        return false;
    }
    return imgParam;
}
function removeFeedbackImage(id) {
    $('#feedback_file_upload').uploadify('cancel',id);
    var imgCount = $('.feed_ul li').length;
    var limit = queueSizeLimitFeedback-imgCount+1;
    $('#feedback_file_upload').uploadify('settings','queueSizeLimit',limit);
    if (imgCount < queueSizeLimitFeedback) {
        $('#feedback_file_upload').uploadify('disable',false);
    }
    if (imgCount <= 1) {
        $('.feed_ul').hide();
    }
    $('.feed_p1').text("您还可以上传"+limit+"张图片");
}
function feedback_focus(id,content) {
    var val = $('#'+id).val();
    if (val == content) {
        $('#'+id).val('');
    }
}
function feedback_blur(id,content) {
    var val = $('#'+id).val();
    if (val == '') {
        $('#'+id).val(content);
    }
}
function checkFeedbackVals() {
    var cont = document.getElementById("feedback_problem").value.replace(/[ ]/g,"");
    document.getElementById("showFeedbackCountVals").innerHTML = 1000 - cont.length;
    $('#feedback_problem').val(cont.substring(0,1000));
}
function validFeedbackProblem() {
    var feedbackProblemVal = $('#feedback_problem').val();
    if (feedbackProblemVal == '' || feedbackProblemVal == '请告诉我们您对小猪短租的意见和建议，我们会认真参考您的意见。') {
        $('.feed_p1').text("请输入反馈意见内容");
        return false;
    }
    if (feedbackProblemVal.length > 1000) {
        $('.feed_p1').text("最多输入1000字");
        return false;
    }
    $('.feed_p1').text("");
    return true;
}
function validFeedbackContact() {
    var feedbackContactVal = $('#feedback_contact').val();
    if (feedbackContactVal.length > 30) {
        $('.feed_p1').text("联系方式只允许输入30位");
        return false;
    }
    $('.feed_p1').text("");
    feedback_blur('feedback_contact','留下您的手机，QQ或者Email，我们会尽快联系您');
    return true;
}
function addFeedback() {
    if ($('#is_upload_progress').val()>0) {
        if (confirm('您正在上传图片，若此时提交，该图片将被舍弃，您确定要继续吗？')) {
            doAddFeedback();
        }
    }
    doAddFeedback();
}
function doAddFeedback() {
    if (!validFeedbackProblem() || !validFeedbackContact()) {
        return false;
    }
    var problem = encodeURI($('#feedback_problem').val());
    var contact = $('#feedback_contact').val();
    contact = (contact == '留下您的手机，QQ或者Email，我们会尽快联系您') ? '' : contact;
    var imageParam = buildFeedbackImageParam();
    $.ajax({
        type: "POST",
        url: XZWebUrlWriter.getAjax_AddFeedbackUrl(problem,contact,imageParam),
        success: function(data) {
            var obj = eval("("+data+")");
            if (obj.status == 0) {
                $('.feed_p1').text(obj.errmsg);
                return false;
            } else {
                $('#feedback_column1').hide();
                $('#feedback_column2').show();
                $('#feedback_problem').val('请告诉我们您对小猪短租的意见和建议，我们会认真参考您的意见。');
                $('#feedback_contact').val('留下您的手机，QQ或者Email，我们会尽快联系您');
                $("#thumbnails_feedback li").each(function(){
                    $(this).remove();
                });
                $('#feedback_file_upload').uploadify('disable',false);
            }
        }
    });
}
function AjaxGetFeedBack() {
    if ($("#feedback_column1").length < 1) {
        $.ajax({
            type: "POST",
            url:XZWebUrlWriter.getAjax_GetFeedbackUrl(),
            success: function(data) {
                $('#load_feedback').append(data);
                uploadifyFeedBackInit();
                $("#feedback_column1").show();
            }
        });
    }
}
 
 $(window).load(function() {
    try{
    if($.browser.msie && $.browser.version == "6.0")
    {
        $.getScript("/js/jquery/jquery-plugin/jquery.nyroModal.custom.min.js");
        $.getScript("/js/jquery/jquery-plugin/jquery.nyroModal-ie6.min.js",loadNyroModal);
    }else{
        $.getScript("/js/jquery/jquery-plugin/jquery.nyroModal.custom.min.js",loadNyroModal);
    }
    }catch(e){}
});
 
 $(document).ready(function(){
    var action = $('#actionName').val();
    var userId = $('#loginUserId').val();
    if(userId) {
        _ozuid = userId;
    }
    switch(action) {
        case 'Front_Search':
            _ozurltail="#search";
            var keyWord = $('#putkey').val();
            var startDate = $('#startdate').val();
            var endDate = $('#enddate').val();
            var leaseType = $('#leasetype').val();
            var number = $('#guestnum').val();
            _ozprm = '';
            if(keyWord) {
                _ozprm += 'Keyword='+keyWord+'&';
            }
            if(startDate) {
                _ozprm += 'startDate='+startDate+'&';
            }
            if(endDate) {
                _ozprm += 'endDate='+endDate+'&';
            }
            if(leaseType) {
                _ozprm += 'Lease='+leaseType+'&';
            }
            if(number) {
                _ozprm +='number='+number;
            }
            if(_ozprm.substr(-1,1) === '&') {
                if(_ozprm.length) {
                    _ozprm = _ozprm.substring(0,_ozprm.length-1);
                }
            }
            break;
        case 'Front_Detail':
            var id = $('#lodgeUnitId').val();
            //var _ozurltail="#product";
            _ozprm="id="+id+"&bid="+''+"&cid="+'';
            break;
        case 'Front_BookSuccess':
        case 'Front_BookOrderPayFirstPay':
            var orderId = $('#bookOrderId').val();
            var orderTotal = $('#totalPrice').val();
            var landlord = $('#landlordid').val();
            var luid = $('#luid').val();
            var dayCount = $('#dayCount').val();
            var avgPrice = $('#avgPrice').val();
            _ozprm = "orderid="+orderId+"&ordertotal="+orderTotal+"&landlord="+landlord+"&skulist="+luid+","+avgPrice+","+dayCount+",,,";
            break;
        case 'Front_OrderFirstPayPaySuccess':
        case 'Front_OrderPaySuccess':
            var orderId = $('#bookOrderId').val();
            var totalPrice = $('#totalPrice').val();
            _ozprm = "orderid="+orderId+"&ordertotal="+totalPrice;
            break;
        case 'Front_Mail_Register_Success':
        case 'Front_Register_SuccessPage':
            var userid = $('#userid').val();
            var phone = $('#phone').val();
            var email = $('#usermail').val();
            if(phone) {
                _ozprm = "userid="+userid+"&phone="+phone;
            } else if(email) {
                _ozprm = "userid="+userid+"&email="+email;
            }
            break;
        default:
            break;
    }
    var u= 'http://'+domain+'/js/com/';
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; g.type='text/javascript'; g.defer=true; g.async=true; g.src=u+'o_code.js'; 
    s.parentNode.insertBefore(g,s); 
});
 
 
XZWebAjax = {
    get : function(url, ajaxData, async, callback) {
        if (!ajaxData) var ajaxData = {};
        var nexturl = $('input[name=next][type=hidden]').val();
        if (nexturl){ajaxData.next = nexturl;}
        var returnData;
        $.ajax({
            type     : "GET",
            url      : url,
            data     : ajaxData,
            dataType : 'json',
            async    : async ? true : false,
            success  : function(datas){returnData = datas;if(callback) callback(datas);},
            error : function (XMLHttpRequest, textStatus, errorThrown){
                LogErrors(url, ajaxData, textStatus, XMLHttpRequest.readyState, XMLHttpRequest.responseText);
            }
        });
        return returnData;
    },
    post : function(url, ajaxData, async, callback) {
        if (!ajaxData) var ajaxData = {};
        var nexturl = $('input[name=next][type=hidden]').val();
        if (nexturl){ajaxData.next = nexturl;}
        var returnData;
        $.ajax({
            type     : "POST",
            url      : url,
            data     : ajaxData,
            dataType : 'json',
            async    : async ? true : false,
            success  : function(datas){returnData = datas;if(callback) callback(datas);},
            error : function (XMLHttpRequest, textStatus, errorThrown){
                LogErrors(url, ajaxData, textStatus, XMLHttpRequest.readyState, XMLHttpRequest.responseText);
            }
        });
        return returnData;
    },
    encrypt : function(url, ajaxData, async, callback) {
    }
};

 
 
_storage = window.localStorage;
var _timestamp = function (){ return Date.parse(new Date()) / 1000 ; };
function getStorage(name) {
    if(_storage) {
        return JSON.parse(_storage.getItem(name));
    }
}
function setStorage(name, value) {
    if(_storage) {
        _storage.setItem(name, JSON.stringify(value));
    }
}

var LogErrors = function(url, ajaxData, type, readyState, responseText) {
    var record = getStorage('9RU72crHq1-Yx608hqNB0');
    if (record && record.indexOf(url) >= 0) return;
    if (!record) record = [];
    record.push(url);
    setStorage('9RU72crHq1-Yx608hqNB0',record);
    var storageKey = 'hfHG5s70T7-A1Q8tl7P6p';
    if(_storage) {
        if (getStorage(storageKey)) {
            var logger = getStorage(storageKey);
        } else {
            var logger = [];
        }
        var time = _timestamp();
        var loggerData = {
            url:url,
            type:type,
            params:JSON.stringify(ajaxData),
            state:readyState,
            response:responseText,
            t: time
        };
        logger.push(loggerData);
        setStorage(storageKey, logger);
    }
    return true;
}
var sendErrors = function () {
    
    var storageKey = 'hfHG5s70T7-A1Q8tl7P6p';
    var logger = getStorage(storageKey);
    if (!logger) return;
    var date = new Date();
    var logTimer = getStorage('oTnH56x70F-' + date.getDate());
    if (logTimer > 10) return;
    var counter = logger.length;
    if(_storage && counter > 0 && counter < 10) {
        var oneLog = logger.shift();
        $.post(XZWebUrlWriter.getAjax_jsErrorLogger(),oneLog, function(){
            setStorage(storageKey, logger);
            setStorage('oTnH56x70F-' + date.getDate(), 1 + logTimer);
        });
    } else if (_storage && counter > 20) {
        setStorage(storageKey, []);
    }
}

sendErrors();











 
 
function checkuser(e){
    if (e.indexOf("@",0)==-1){
        return  checkmobile(e);
    }
    else{
        return checkemail(e);
    }
}
function checkUsernameMobilEmail(e)
{
    if(xzRegularExpression.isMobile.test(e)){
        return  checkmobile(e);
    }
    else if (e.indexOf("@") >=0){
        return checkemail(e);
    }
    else {
        return checkOldUserName(e);
    }
}
function checkmobile(mobile){
    var returnContent = {};
    returnContent.msg = '';
    returnContent.rst = true;
    if (mobile == ""){
        returnContent.msg = "请输入手机号";
        returnContent.rst = false;
        return returnContent;
    }
    if(!xzRegularExpression.mobile.test(mobile))
    {
        returnContent.msg = "手机号码格式错误";
        returnContent.rst = false;
        return returnContent;
    }
    return returnContent;
}
function checkverifyCode(verifyCode){
    var returnContent = {};
    returnContent.msg = '';
    returnContent.rst = true;
    if (verifyCode == "") {
        returnContent.msg = "请输入图片验证码";
        returnContent.rst = false;
        return returnContent;
    }
    if(verifyCode.length != 4)
    {
        returnContent.msg = "图片验证码错误";
        returnContent.rst = false;
        return returnContent;
    }
    return returnContent;
}
function checkactivateCode(activateCode){
    var returnContent = {};
    returnContent.msg = '';
    returnContent.rst = true; 
    if (activateCode == "") {
        returnContent.msg = "请输入手机验证码";
        returnContent.rst = false;
        return returnContent;
    }
    if(activateCode.length != 4){
        returnContent.msg = "手机验证码错误";
        returnContent.rst = false;
        return returnContent;
    }
    return returnContent;
}

function CharMode(iN){
    if (iN >= 48 && iN <= 57) 
        return 1;
    if (iN >= 65 && iN <= 90) 
        return 2;
    if (iN >= 97 && iN <= 122) 
        return 4;
    else
        return 8;  
}

function bitTotal(num){
    modes = 0;
    for (i = 0; i < 5; i++){
        if (num & 1) modes++;
        num >>>= 1;
    }
    return modes;
}

function checkStrong(sPW){
    if (sPW.length <= 5)
        return 0;
    Modes = 0;
    for (i = 1; i < sPW.length; i++) {
        Modes |= CharMode(sPW.charCodeAt(i));
    }
    return bitTotal(Modes);
}

function subCheckPassword(pwd){
    var repeat = true;
    var series = true;
    var series2 = true;
    var len = pwd.length;
    var first = pwd.charAt(0);
    for(var i=1;i<len;i++){
        repeat = repeat && pwd.charAt(i) == first;
        series = series && pwd.charCodeAt(i) == pwd.charCodeAt(i-1) + 1;
        series2 = series2 && pwd.charCodeAt(i) == pwd.charCodeAt(i-1) - 1;
    }
    return !(repeat || series || series2);
}
function checkpassword(password,passEmptyMsg){
    var returnContent = {};
    returnContent.msg = '';
    returnContent.blurmsg = '';
    if(passEmptyMsg=="" || typeof(passEmptyMsg)=="undefined") 
        passEmptyMsg = '请输入密码';
    if(password.length > 8 && checkStrong(password)>1){
        returnContent.level = 3;
    }
    else if(password.length > 8 && checkStrong(password)==1){
        returnContent.level = 2;
    }
    else if(checkStrong(password)>2){
        returnContent.level = 3;
    }
    else
    {
        returnContent.level = checkStrong(password);
    }
    returnContent.rst = true;
    if (password == ""){
        returnContent.msg = passEmptyMsg;
        returnContent.rst = false;
        return returnContent;
    }
    if(!xzRegularExpression.password.test(password)){
        returnContent.msg = "包含非法字符，请重新输入";
        returnContent.rst = false;
        return returnContent;
    }
    if(password.length < 6 || password.length > 12) {
        returnContent.msg = "密码长度只能在6-12位之间";
        returnContent.rst = false;
        return returnContent;
    }
    if(subCheckPassword(password) == false){
       returnContent.msg = "您的密码过于简单";
       returnContent.rst = false;
     return returnContent;
     }
    return returnContent;
}

function checkpassword2(password){
    var returnContent = {};
    returnContent.msg = '';
    if(password.length > 8 && checkStrong(password) > 1){
        returnContent.level = 3;
    }
    else if(password.length > 8 && checkStrong(password) == 1){
         returnContent.level = 2;
    }
    else if(checkStrong(password) > 2){
        returnContent.level = 3;
    }
    else
    {
        returnContent.level = checkStrong(password);
    }
    returnContent.rst = true;
    if(subCheckPassword(password) == false && password.length > 5){
        returnContent.msg = "您的密码过于简单";
        returnContent.rst = false;
        return returnContent;
    }
    if(!xzRegularExpression.password.test(password)){
        returnContent.msg = "包含非法字符，请重新输入";                                                                                                                                                          
        returnContent.rst = false;                                                                                                                                                                                                     
        return returnContent;  
    }
    return returnContent;
}
function checkusername(username){
    var returnContent = {};
    returnContent.msg = '';
    returnContent.rst = true;
    if (username == "") {
        returnContent.msg = "请输入用户名";
        returnContent.rst = false;
        return returnContent;
    }
    var len=0;
    var usernamelen=username.split("");
    for(var i=0;i<username.length;i++)
    {
        if(usernamelen[i].charCodeAt(0)<299){len++ }
        else len+=2;
    }
    if (len < 4){
        returnContent.msg = "用户名太短了";
        returnContent.rst = false;
        return returnContent;
    }
    if (len > 16){
        returnContent.msg = "用户名太长了";
        returnContent.rst = false;
        return returnContent;
    }
    if (!xzRegularExpression.isUsername.test(username)){
        returnContent.msg = "仅可用汉字、字母、数字或下划线";
        returnContent.rst = false;
        return returnContent;
    }
    if ((xzRegularExpression.isMobile.test(username)||xzRegularExpression.simpleEmail.test(username)||xzRegularExpression.numbers.test(username)) && (username.length >4)){
        returnContent.msg = "请勿出现QQ、手机等个人联系方式";
        returnContent.rst = false;
        return returnContent;
    }
    return returnContent;
}
function checkusername2(username){
    var returnContent = {};
        returnContent.msg = '';
        returnContent.rst = true;
    if ((xzRegularExpression.isMobile.test(username)||xzRegularExpression.simpleEmail.test(username)||xzRegularExpression.numbers.test(username)) && (username.length >4)){
        returnContent.msg = "请勿出现手机、QQ、邮箱等个人联系方式";
        returnContent.rst = false;
        return returnContent;
    }
    if (!xzRegularExpression.isUsername.test(username)){
        returnContent.msg = "仅可使用汉字、英文、数字、下划线";
        returnContent.rst = false;
        return returnContent;
    }
    return returnContent;
}
function checkemail(email){
    var returnContent = {};
    returnContent.msg = '';
    returnContent.rst = true;
    if (email == ""){
        returnContent.msg = "请输入邮箱";
        returnContent.rst = false;
        return returnContent;
    }
    if(!xzRegularExpression.email.test(email)){
        returnContent.msg = "邮箱格式不正确";
        returnContent.rst = false;
        return returnContent;
    }
    return returnContent;
}
function checkOldUserName(oldUserName)
{
    var returnContent = {};
    returnContent.msg = '';
    returnContent.rst = true;
    if (!xzRegularExpression.isUsername.test(oldUserName)){
        returnContent.msg = "请输入手机号或邮箱";
        returnContent.rst = false;
    }
    return returnContent;
}
function checkPassport(passId)
{
    var rst = {};
    rst.msg = '';
    rst.rst = true;
    if (passId == '') {
        rst.msg = "请输入护照号码";
        rst.rst = false;
    } else if (!xzRegularExpression.passport.test(passId)){
        rst.msg = "护照号码格式不正确 ";
        rst.rst = false;
    }
    return rst;
}

function checkIdCardRule(cardNo)
{
    var len = cardNo.length;
    if(len != 15 && len !=18)
    {
        return false;
    }
    var reg;
    var cardNoSplit;
    var bGoodDay;   
    var birth;
    if(len == 15)
    {
        if(!(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/.test(cardNo)))
        {
            return false;
        }
        else 
        {
            reg = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);   
            cardNoSplit = cardNo.match(reg);
            birth = new Date('19' + cardNoSplit[2] + '/' + cardNoSplit[3] + '/' + cardNoSplit[4]);   
            bGoodDay = (birth.getYear() == Number(cardNoSplit[2])) && ((birth.getMonth() + 1) == Number(cardNoSplit[3])) && (birth.getDate() == Number(cardNoSplit[4]));   
        }
    }
    else if(len == 18)
    {
        if(!(/^(\d{6})(19|20)?(\d{2})([01]\d)([0123]\d)(\d{3})(\d|X|x)?$/.test(cardNo)))
        {
            return false;
        }
        else 
        {
            reg = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$/);
            cardNoSplit = cardNo.match(reg);
            birth = new Date(cardNoSplit[2] + "/" + cardNoSplit[3] + "/" + cardNoSplit[4]);   
            bGoodDay = (birth.getFullYear() == Number(cardNoSplit[2])) && ((birth.getMonth() + 1) == Number(cardNoSplit[3])) && (birth.getDate() == Number(cardNoSplit[4]));   

        }
    }
    if (!bGoodDay) 
    { 
        return false;
    }
    else 
    {
        var nowYear = new Date().getFullYear();
        var nowMonth = new Date().getMonth();
        var nowDate = new Date().getDate();

        if( compareBirthDate(birth.getFullYear()+'-'+birth.getMonth()+'-'+birth.getDate(), ((nowYear-102)+"-"+nowMonth+"-"+nowDate))<0 || compareBirthDate(birth.getFullYear()+'-'+birth.getMonth()+'-'+birth.getDate(), ((nowYear-2)+"-"+nowMonth+"-"+nowYear))>0)
        {
            return false;
        }
        else 
        {
            if(len == 15)
            {
                return true;
            }
            else{
            // check city
            var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};
            if(aCity[parseInt(cardNo.substr(0,2))]==null) {
                return false;
            }
            var arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];//加权因子  
            var arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];//校验码  
            var sum = 0, idx;  
            for(var i = 0; i < cardNo.length - 1; i++){  
                sum += parseInt(cardNo.substr(i, 1), 10) * arrExp[i];  
            }  
            idx = sum % 11;  
            // 检验第18为是否与校验码相等  
            return arrValid[idx] == cardNo.substr(17, 1).toUpperCase();  
            }
        }
    }
}
function compareBirthDate(date1,date2)
{ // For ID Card Verify
    var newDate1 = date1.split('-');
    var dateY1 = newDate1[0];
    var dateM1 = newDate1[1];
    var dateD1 = newDate1[2];

    var newDate2 = date2.split('-');
    var dateY2 = newDate2[0];
    var dateM2 = newDate2[1];
    var dateD2 = newDate2[2];

    if(dateY1<dateY2)
    {
        return -1;
    }
    else if(dateY1>dateY2)
    {
        return 1;
    }
    else if(dateY1 == dateY2)
    {
        if(dateM1<dateM2)
        {
            return -1;
        }
        else if(dateM1>dateM2)
        {
            return 1;
        }
        else if(dateM1 == dateM2)
        {
            if(dateD1<dateD2)
            {
                return -1;
            }
            else if(dateD1>dateD2)
            {
                return 1;
            }
            else if(dateD1 == dateD2)
            {
                return 0;
            }
        }
    }
}

 
 
/* ==================== 输入框input type=text,password： ==================== 
 *  var username_input = new inputBox('#username', '#username-tip');
 *      username_input.showError('用户名重复');
 *      username_input.showOk();
 *      username_input.hideTip();
 *      username_input.setPlaceholder('请输入用户名');
 */
var inputBox = function(e, i, options) {
    options = options || {};

    this.placeHolder    = options.placeHolder   || '';
    this.errorTipClass  = options.errorTipClass || 'tipwrong';
    this.errorHtml      = options.errorHtml     || '<span class="icon-wrong"></span>';
    this.okHtml         = options.okHtml        || '<span class="icon-ok"></span>';
    this.focusBoxClass  = options.focusBoxClass || 'blue-border';
    this.errorBoxClass  = options.errorBoxClass || 'red-border';
    this.blurFunction   = options.blurFunction  || null;

    // blur时默认触发的校验函数，格式：{rst:true,msg:'请输入'}
    this.blurCheck      = options.blurCheck || null;
    //keyup时默认触发的校验,格式同上
    this.keyUpCheck      = options.keyUpCheck || null;
    //空值失焦默认提示文字
    this.blurDefaultTip = options.blurDefaultTip || null; 
    

    this.status = false;
    this.isCheck = false;
    this.e = typeof(e) == 'object' ? e : $(e);
    this.i = $(i).length > 0 ? $(i) : this.e.parent().parent().find('.tip-info-box, .tip, ' + '.' + this.errorBoxClass);
    this.init();
    return(this);
}
inputBox.prototype.init = function() {
    var _this = this;
    this.i.hide();
    if (this.placeHolder) this.setPlaceholder(this.placeHolder);
    this.e.focus(function(){
        _this.isCheck = false;
        $(this).parent('div').removeClass(_this.errorBoxClass).addClass(_this.focusBoxClass);
    });
    this.e.blur(function(){
        $(this).parent().removeClass(_this.errorBoxClass).removeClass(_this.focusBoxClass);
        if ($(this).val() == '' && _this.blurDefaultTip) _this.showError(_this.blurDefaultTip);
        if (_this.blurCheck) _this.check(_this.blurCheck);
        if (_this.blurFunction) _this.blurFunction();
        _this.isCheck = true;
    });
    this.e.keyup(function(){
        if (_this.keyUpCheck) _this.check(_this.keyUpCheck);
    });
    return(this);
}
inputBox.prototype.setPlaceholder = function(data) {
    this.e.attr('placeholder', data);
}
inputBox.prototype.showError = function(data) {
    this.i.html( this.errorHtml + data);
    this.i.addClass(this.errorTipClass).show();
    this.e.parent().addClass(this.errorBoxClass).removeClass(this.focusBoxClass);
    this.status = false;
}
inputBox.prototype.showOk = function() {
    this.i.html( this.okHtml);
    this.i.removeClass(this.errorTipClass).hide();
    this.e.parent().removeClass(this.errorBoxClass);
    this.status = true;
}
inputBox.prototype.hideTip = function(status) {
    this.i.hide();
    this.status = true;
}
inputBox.prototype.check = function(func) {
    var rst = func();
    if (!rst.rst && rst.msg){
        this.showError(rst.msg);
    } else {
        //this.hideTip();
        this.showOk();
    }
}

/* ==================== 密码强度设定： ==================== 
 *  var passTest = new passwordLevel('#padd-level');
 *      passText.setLevel(1);
 *      passText.setLevel(2);
 */
var passwordLevel = function(e, options) {
    options = options || {};
    this.e = $(e);
    this.l1 = this.e.find('.passwd-level-1');
    this.l2 = this.e.find('.passwd-level-2');
    this.l3 = this.e.find('.passwd-level-3');
    this.init();
    return(this);
}
passwordLevel.prototype.init = function() {
    this.e.blur(function(){
        $(this).css('border','1px solid red');
    });
    return(this);
}
passwordLevel.prototype.setLevel = function (level) {

    for (var x = 1;x <=3; ++x) {
        this.e.find('.passwd-level-' + x)
            .removeClass('password_level_1')
            .removeClass('password_level_2')
            .removeClass('password_level_3')
        if (x <= level) {
            this.e.find('.passwd-level-' + x ).addClass('password_level_' + level);
        } 
    }
}
passwordLevel.prototype.clearLevel = function () {
    this.e
    .removeClass().removeClass().removeClass();
}

/* ==================== 发送手机激活码： ==================== 
 *  var codeBtn = new sendCodeButton('#code-button');
 */
var sendCodeButton = function(e, options) {
    options = options || {};
    var _this = this;
    this.e = $(e);
    //this.state = false;
    this.state = true;
    this.buttonText = typeof(options.buttonText) == 'undefined' ? options.buttonText : '获取短信激活码';
    this.second = typeof(options.second) == 'undefined' ? 5 : options.second;
    this.init();
    return(this);
}
sendCodeButton.prototype.init = function() {
    var _this = this;
    this.e.click(function(){
        //_this.start(_this.second);
    });
    return(this);
}
sendCodeButton.prototype.start = function (second) {
    if (this.state) return;
    this.state = true;
    var _this = this;
    this.e.attr('disabled', true);
    //this.e.css('background', '-webkit-linear-gradient(top,#F3F3F3,#CDCDCD)');
    this.e.addClass('no-nb').removeClass('have-nb');
    //this.e.attr('sec', second);
    this.sec = second;
    if(this.intervalProcess){
        window.clearInterval(this.intervalProcess); 
    }
    this.intervalProcess=window.setInterval(function(){_this.refreshText();},1000);
}
sendCodeButton.prototype.stop = function (second) {
    this.e.addClass('have-nb').removeClass('no-nb');
}
sendCodeButton.prototype.setButtonText = function (buttonText) {
    if (this.e.attr('type') == 'button') {
        this.e.val(buttonText);
    } else {
        this.e.text(buttonText);
    };
}
sendCodeButton.prototype.refreshText = function () {
    if (this.sec < 1) {
        clearInterval(this.intervalProcess);
        this.setButtonText('重新发送');
        this.e.attr('disabled', false);
        this.e.addClass('have-nb').removeClass('no-nb');
        this.state = false;
        return;
    } 
    this.setButtonText('重新发送' + '(' + this.sec + 's)');
    this.sec = this.sec - 1;
}




var simpleWindow = function(options) {
    options = options || {};

    this.title           = options.title ;
    this.secTrigger      = options.secTrigger || null;
    this.contentHtml     = options.contentHtml || null;
    this.simpleWindowId  = 'simplewindow-' + Math.ceil(Math.random()* 10000);
    this.contentAjaxUrl  = options.contentAjaxUrl || null;
    this.contentAjaxData = options.contentAjaxData || {};
    this.contentAjaxCallback = options.contentAjaxCallback || null;
    this.contentRefresh = options.contentRefresh || false;
    this.contentLoaded = false;

    this.e = $('<div id="' + this.simpleWindowId + '" class="tcbox" style="border:1px solid #999;position:fixed;display:none;z-index:1999;">' + 
                    '<div class="t">'+this.title+'<a  class="close ' + this.simpleWindowId + '" id="close-' + this.simpleWindowId + '"></a></div>' + 
                    '<div class="c-pad1" id="window-content-' + this.simpleWindowId + '">' + this.contentHtml + '</div>' + 
                '</div>');
    $("body").prepend(this.e);
    this.b = $('<div id="background-' + this.simpleWindowId + '" style="display:none;width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; background-color: rgba(0,0,0, 0.619608);z-index:1997;">  </div>')
    $("body").prepend(this.b);
    //this.e = $(this.simpleWindowId);
    this.init();
    return(this);
}
simpleWindow.prototype.init = function() {
    var _this = this;
    this.e.hide();
    var e_height = this.e.outerHeight();
    var e_width  = this.e.outerWidth();
    this.e
        .css('top', $(window).height()/2 - e_height/2)
        .css('left', $(window).width()/2 - e_width/2);
    $('.' + this.simpleWindowId).live('click',function(){
        _this.hideWindow();
        //$('#' + _this.simpleWindowId).hide();
    });
    return(this);
}
simpleWindow.prototype.hideWindow = function() {
    this.e.hide();
    this.hideBackground();
}
simpleWindow.prototype.showBackground = function() {
    this.b.show();
};
simpleWindow.prototype.hideBackground = function() {
    this.b.hide();
};
simpleWindow.prototype.showWindow = function(sec) {
    if (!this.contentHtml && (!this.contentLoaded || this.contentRefresh )) {
        var _this = this;
        $('#window-content-' + this.simpleWindowId).load(this.contentAjaxUrl, this.contentAjaxData, function(responseText, textStatus, jqXHR){if (_this.contentAjaxCallback) _this.contentAjaxCallback(responseText, textStatus, jqXHR)});
    }
    if (sec) this.timeout(sec)
    this.e.show();
    this.showBackground();
    this.contentLoaded = true;
};
simpleWindow.prototype.timeout = function(sec) {
    var _this = this;
    this.sec = sec
    if (_this.secTrigger)  _this.secTrigger(_this.sec);
    this.intervalProcess=window.setInterval(function(){
        _this.sec --;
        if (_this.secTrigger)  _this.secTrigger(_this.sec);
        if (_this.sec < 0) {
            clearInterval(_this.intervalProcess);
            _this.hideWindow();
            return false;
        }
    },1000);
    this.e.hide();
};


var _jumpTo = $('#success-jump-to');
var _jumpUrl = _jumpTo.attr('url');
if (typeof(_jumpUrl) != 'undefined') {
    var _jumpSec = _jumpTo.attr('time');
    var _jumpText = $('#success-jump-span');
    if (typeof(_jumpUrl) != 'undefined') {
        var timer = window.setInterval(function(){
            _jumpSec --;
            _jumpText.html(_jumpSec);
    
            if (_jumpSec <= 0) {
                clearInterval(timer);
                window.location.href=_jumpUrl;
            }
        },1000);
    }
}

/* ==================== 文本输入框放大效果： ==================== 
 *  new TextMagnifier({ 
 *      inputElem          :     'inputElem',     // 输入框目标元素
 *      parentCls          :     '.parentCls',     // 目标元素的父类
 *      align              :     'right',            // 对齐方式有 ['top','bottom','left','right']四种 默认为top
 *      splitType          :     [3,4,4],          // 拆分规则
 *      delimiter          :     '-'                // 分隔符可自定义
 *  };
 */
function TextMagnifier(options) {

    this.config = {
        inputElem          :     '.inputElem',     
        parentCls          :     '.parentCls',     
        align              :     'right',            
        splitType          :     [3,4,4],          
        delimiter          :     '-'                
    };
    this.cache = {
        isFlag  :  false
    };
    this.init(options);
}

TextMagnifier.prototype = {
    constructor: TextMagnifier,
    init: function(options) {
        this.config = $.extend(this.config,options || {});
        var self = this,
            _config = self.config,
            _cache = self.cache;
        self._bindEnv();
    },
    _appendHTML: function($this,value) {
        var self = this,
        _config = self.config,
        _cache = self.cache;
        var html = '',
            $parent = $($this).closest(_config.parentCls);

        if($('.js-max-input',$parent).length == 0) {
            html += '<div class="js-max-input"></div>';
            $($parent).append(html);
        }
        var value = self._formatStr(value);
        $('.js-max-input',$parent).html(value);
    },

    _position: function(target){
        var self = this,
        _config = self.config;
        var elemWidth = $(target).outerWidth(),
            elemHeight = $(target).outerHeight(),
            elemParent = $(target).closest(_config.parentCls),
            containerHeight = $('.js-max-input',elemParent).outerHeight(); 
        $(elemParent).css({"position":'relative'});

        switch(true){
            case _config.align == 'top':
                $('.js-max-input',elemParent).css({'position':'absolute','top' :-elemHeight - containerHeight/2,'left':0});
                break;
            case _config.align == 'left':
                $('.js-max-input',elemParent).css({'position':'absolute','top' :0,'left':0});
                break;
            case _config.align == 'bottom':
                $('.js-max-input',elemParent).css({'position':'absolute','top' :elemHeight + 4 + 'px','left':0});
                break;
            case _config.align == 'right':
                $('.js-max-input',elemParent).css({'position':'absolute','top' :0,'left':elemWidth + 2 + 'px'});
                break;
        }
    },
    _bindEnv: function(){
        var self = this,
        _config = self.config,
        _cache = self.cache;

        $(_config.inputElem).each(function(index,item){
            $(item).keyup(function(e){
                var value = $.trim(e.target.value),
                parent = $(this).closest(_config.parentCls);
            if(value == '') {
                self._hide(parent);
            }else {
                var html = $.trim($('.js-max-input',parent).html());
                if(html != '') {
                    self._show(parent);
                }
            }
            self._appendHTML($(this),value);
            self._position($(this));
            });

            $(item).unbind('focusin');
            $(item).bind('focusin',function(){
                var parent = $(this).closest(_config.parentCls),
                html = $.trim($('.js-max-input',parent).html());

            if(html != '') {
                self._show(parent);
            }
            });

            $(item).unbind('focusout');
            $(item).bind('focusout',function(){
                var parent = $(this).closest(_config.parentCls);
                self._hide(parent);
            });
        });
    },
    _formatStr: function(str){
        var self = this,
        _config = self.config,
        _cache = self.cache;
        var count = 0,
            output = [];
        for(var i = 0, ilen = _config.splitType.length; i < ilen; i++){
            var s = str.substr(count,_config.splitType[i]);
            if(s.length > 0){
                output.push(s);
            }
            count+= _config.splitType[i];
        }
        return output.join(_config.delimiter);
    },
    _show: function(parent) {
        var self = this,
        _config = self.config,
        _cache = self.cache;
        if(!_cache.isFlag) {
            $('.js-max-input',parent).show();
            _cache.isFlag = true;
        }
    },
    _hide: function(parent) {
        var self = this,
        _config = self.config,
        _cache = self.cache;
        if(_cache.isFlag) {
            $('.js-max-input',parent).hide();
            _cache.isFlag = false;
        }
    }
};
 
 
var pub = {};
//刷新验证码图片 例子：<img id='veryfi-image' src=''>    pub.resetVerifyCode('#verify-image');
pub.resetVerifyCode = function(e){
    $(e).attr("src",XZWebUrlWriter.getAjax_GetVerifyCode());
};
// 此账号是否已注册
pub.verifyRegist = function(user){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_CheckRegistExist(),{user:user});
};

// 手机号是否已注册
pub.mobileExist = function(mobile){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_CheckMobileExist(mobile));
};

//  邮箱是否已注册
pub.emailExist = function(email) {
    return XZWebAjax.post(XZWebUrlWriter.getAjax_CheckEmailExist(), {email:email});
};
//  用户名(昵称)是否已注册
pub.usernameExist = function(username) {
    return XZWebAjax.post(XZWebUrlWriter.getAjax_CheckUsernameExist(username), {});
};
//  老(登录)用户名是否存在
pub.oldUsernameExist = function(username) {
    return XZWebAjax.post(XZWebUrlWriter.getAjax_CheckOldUsernameExist(username), {});
};

// 检查图片验证码
pub.checkVerifyCode=function(verifyCode, mobile){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_CheckVerifyCode(),{verifycode:verifyCode});
};

// 发送手机激活码
pub.sendAvtivateCode=function(verifyCode, mobile){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_SendActivateCode(mobile,verifyCode));
};
// 发送找回密码手机激活码
pub.sendConfirmCode=function(verifyCode, mobile){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_SendConfirmCode(mobile,verifyCode));
};
//发送快速登录手机验证码
pub.sendQuickLoginCode = function(verifyCode, mobile){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_SendQuickLoginCode(mobile,verifyCode));
};
// 验证找回密码手机激活码
pub.checkConfirmCode=function(confirmCode, mobile){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_CheckConfirmCode(mobile,confirmCode));
};

// 验证手机激活码
pub.checkActivateCode=function(mobile, activateCode){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_CheckActiveCode(mobile,activateCode));
};

// 验证注册邀请码
pub.checkInviteCode = function(inviteCode){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_CheckInviteCode(inviteCode)); 
}

// 用手机号注册
pub.doRegisterByMobile=function(mobile, username, password, activateCode, next,createfrom,comefrom,referrer,inviteCode,lodgeid,ajaxShowSucc){
    var inviteCode = !inviteCode ? '' : inviteCode; 
    var lodgeid    = !lodgeid ? '' : lodgeid; 
    var ajaxShowSucc = ajaxShowSucc ? ajaxShowSucc : false;
    return XZWebAjax.post(XZWebUrlWriter.getAjax_RegisterByMobile(),{
        username:username,
        phone:mobile,
        password:password,
        imagecode:activateCode,
        next:next,
        createfrom:createfrom,
        comefrom:comefrom,
        referrer:referrer,
        invitecode:inviteCode,
        lodgeid:lodgeid,
        ajaxshowsucc : ajaxShowSucc
    });
}

// 用邮箱注册
pub.doRegisterByEmail=function(email, username, password, country, passport,createfrom,comefrom,referrer,lodgeid){
     lodgeid    = !lodgeid ? '' : lodgeid; 
    return XZWebAjax.post(XZWebUrlWriter.getAjax_RegisterByEmail(),{email:email, username:username, password:password, country:country, passport:passport, createfrom:createfrom, comefrom:comefrom, referrer:referrer, lodgeid:lodgeid });
}

// 发送激活邮件
pub.sendActivateEmail=function(uid, uidtoken){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_ReSendActiveEmail(uid,uidtoken),{});
}
// 修改注册时邮箱
pub.changeActivateEmail=function(email){
    return XZWebAjax.post(XZWebUrlWriter.getAjax_ChangeActiveEmail(),{email:email});
}

// 登录
pub.doLogin=function(emailOrMobile,  password, verifyCode,setcookie,lodgeid){
    if(typeof(lodgeid)=='undefined'||lodgeid==''){
      return XZWebAjax.post(XZWebUrlWriter.getAjax_Login(),{username:emailOrMobile, password:password, verifycode:verifyCode, setcookie:setcookie});   
    }
    return XZWebAjax.post(XZWebUrlWriter.getAjax_Login(),{username:emailOrMobile, password:password, verifycode:verifyCode, setcookie:setcookie,lodgeid:lodgeid});
}

// 手机快捷登录
pub.doLoginMobile=function(mobile, verifyCode,setcookie,lodgeid){
    if(typeof(lodgeid)=='undefined'||lodgeid==''){
      return XZWebAjax.post(XZWebUrlWriter.getAjax_LoginMobile(),{usermobile:mobile, verifycode:verifyCode, setcookie:setcookie});   
    }
    return XZWebAjax.post(XZWebUrlWriter.getAjax_LoginMobile(),{usermobile:mobile, verifycode:verifyCode, setcookie:setcookie,lodgeid:lodgeid});
}

// 找回密码:手机号
pub.findPasswordByMobile=function(mobile, confirmCode, newPassword) {
    return XZWebAjax.post(XZWebUrlWriter.getAjax_FindPasswordByMobile(),{mobile:mobile, confirmcode:confirmCode, password:newPassword});
}
// 找回密码=邮箱
pub.findPasswordByEmail=function(email) {
    return XZWebAjax.post(XZWebUrlWriter.getAjax_FindPasswordByEmail(),{email:email});
}

// 找回密码:设置新密码
pub.findToSetPassword=function(password, state) {
    return XZWebAjax.post(XZWebUrlWriter.getAjax_ResetPasswordFromEmail(),{password:password, state:state});
}
// 合作账户绑定 已有小猪账户
pub.bindOpenAccount=function(mobileOrEmail, password, verifyCode) {
    return XZWebAjax.post(XZWebUrlWriter.getAjax_BindOpenAccount(),{account:mobileOrEmail,password:password, verifycode:verifyCode});
}
// 合作账户绑定 新小猪账户 完善信息
pub.bindOpenAccountRegister=function(mobile,email,username,activateCode, country, passport,inviteCode) {
    inviteCode = !inviteCode ? '' : inviteCode;
    return XZWebAjax.post(XZWebUrlWriter.getAjax_OpenAccountRegister(),{mobile:mobile,email:email,username:username,activatecode:activateCode, country:country, passport:passport,invitecode:inviteCode});
}

pub.getAjax = function(url, ajaxData) {
    if (!ajaxData) var ajaxData = {};
    var nexturl = $('input[name=next]').val();
    if (nexturl){ajaxData.next = nexturl;}
    var returnData;
    $.ajax({
        type     : "POST",
        url      : url,
        data     : ajaxData,
        dataType : 'json',
        async    : false,
        success  : function(datas){returnData = datas;},
        error : function (XMLHttpRequest, textStatus, errorThrown){
            alert('网络错误,请刷新页面重试:'+textStatus);
        }
    });
    return returnData;
};

var book = {};
// 移除入住人信息
book.tenantRemove = function(tenantId) {
    return pub.getAjax(XZWebUrlWriter.getAjax_TenantRemove(), {tenantid:tenantId});
}
 
 /*********************************************************************
* 注册登录相关模块组件和基础功能
* 使用时引入该类提供平台通用功能，如果特殊页面存在特殊需求请通过继承
* 或者重新定义覆盖对应方法的实现。
*********************************************************************/
var RegisterLoginComponent = {
    //{{{
    initInputMobile : function(options){
        //{{{
        var that = this;
        var options = options || {};
        options = $.extend({
            element : '#input-mobile',
            tipHolder : '#input-mobile-tip',
            defaultPlaceHolder : '手机号',
            focusPlaceHolder : '仅限大陆手机号',
            existCheck : true
        },options);
        var input_mobile = new inputBox(options.element,options.tipHolder,{
            placeHolder:options.defaultPlaceHolder
        });
        input_mobile.e.focus(function(){
            input_mobile.setPlaceholder(options.focusPlaceHolder);
        })
        .blur(function(){
            input_mobile.setPlaceholder(options.defaultPlaceHolder);
            var checker = checkmobile($(this).val());
            if (checker.rst == false) {
                input_mobile.showError(checker.msg);
                input_mobile.e.addClass('r_input_1_cur');
                return true;
            }
            if(options.existCheck){
                $.when(that.checkMobileExist($(this).val()))
                .done(function(ajaxChecker){
                    if(ajaxChecker.status == 0) {
                        input_mobile.showError(ajaxChecker.errmsg);
                        input_mobile.e.addClass('r_input_1_cur');
                    } else{
                        input_mobile.status = true;
                    } 
                });
            } else {
                input_mobile.status = true;
            }
        })
        .keyup(function(){
            input_mobile.i.hide();
            input_mobile.e.removeClass('r_input_1_cur');
        });
        
        return input_mobile;
        //}}}
    },
    initInputImageVerifyCode : function(options){
        //{{{
        var that = this;
        var options = options || {};
        options = $.extend({
            element : '#image-verify-code',
            tipHolder : '#image-verify-code-tip',
            defaultPlaceHolder : '图片验证码',
            focusPlaceHolder : '图片验证码'
        },options);
        var input_imageVerifyCode = new inputBox(options.element, options.tipHolder, {placeHolder:options.defaultPlaceHolder});
        input_imageVerifyCode.codeSendSuc = false;
        input_imageVerifyCode.e.blur(function(){
            if(input_imageVerifyCode.codeSendSuc){
                return true; 
            }
            var verifyCode = $(this).val();
            var checker = checkverifyCode(verifyCode);
            if (checker.rst == false) {
                input_imageVerifyCode.showError(checker.msg);
                input_imageVerifyCode.e.addClass('r_input_small_cur');
                return true;
            }
            input_imageVerifyCode.isAjaxChecking = true;
            $.when(that.checkImageVerifyCode(input_imageVerifyCode.e.val()))
            .done(function(ajaxChecker){
                if (ajaxChecker.status == 0) {
                    input_imageVerifyCode.showError(ajaxChecker.errmsg);
                    input_imageVerifyCode.e.addClass('r_input_small_cur');
                } else {
                    input_imageVerifyCode.status = true;
                }
                input_imageVerifyCode.isAjaxChecking = false;
            });
            
            
        })
        .keyup(function(){
            input_imageVerifyCode.i.hide();
            input_imageVerifyCode.e.removeClass('r_input_small_cur');
        });
        $('.change-verify-image').live('click',function(){
            $('img.change-verify-image').attr('src','');
            pub.resetVerifyCode('img.change-verify-image');
        });

        return input_imageVerifyCode;
        //}}}
    },
    initInputInviteCode : function(options){
        //{{{
        options = options || {};
        options = $.extend({
            element : '#invitecode',
            tipHolder : '#input-invitecode-tip'
        },options);
        var input_inviteCode = new inputBox(options.element,options.tipHolder,{
            placeHolder:'邀请码（选填）'
        });
        input_inviteCode.checkInviteCode = function(){
            //{{{
            if(this.e.val() == '') return true;
            ajaxChecker = pub.checkInviteCode(this.e.val());
            if(ajaxChecker.status != 1){
                $(options.tipHolder).show().parent('.h_30').show();
                input_inviteCode.e.addClass('r_input_1_cur');
                return false;
            } else {
                $(options.tipHolder).hide().parent('.h_30').hide();
                input_inviteCode.e.removeClass('r_input_1_cur');
                input_inviteCode.status = true;
                return true;
            }
            //}}}
        }
        input_inviteCode.e.keydown(function(){
            $(options.tipHolder).hide().parent('.h_30').hide(); 
            input_inviteCode.e.removeClass('r_input_1_cur');
        });

        return input_inviteCode;
        //}}}
    },
    initInputUserName : function(options){
        //{{{
        var that = this;
        var options = options || {};
        options = $.extend({
            element : '#reginput-username',
            tipHolder : '#reginput-username-tip',
            defaultPlaceHolder : '用户名',
            focusPlaceHolder : '请输入汉字、英文、数字或下划线',
            existCheck : true
        },options);
        var input_username = new inputBox(options.element, options.tipHolder,{
            placeHolder:options.defaultPlaceHolder
        });
        input_username.e.focus(function(){
            input_username.setPlaceholder(options.focusPlaceHolder);
        });
        input_username.e.keyup(function(){
            input_username.i.hide();
            input_username.e.removeClass('r_input_1_cur');
        })
        .blur(function(){
            input_username.setPlaceholder(options.defaultPlaceHolder);
            var checker = checkusername($(this).val());
            if (checker.rst == false) {
                input_username.showError(checker.msg);
                input_username.e.addClass('r_input_1_cur');
                return true;
            }
            input_username.isAjaxChecking = true;
            $.when(that.checkUserNameExist($(this).val()))
             .done(function(ajaxChecker){
                if(ajaxChecker.status == 0) {
                    input_username.showError(ajaxChecker.errmsg);
                    input_username.e.addClass('r_input_1_cur');
                } else {
                    input_username.status = true;
                }
                input_username.isAjaxChecking = false;
            });
        });
        
        return input_username;
        //}}}
    },
    initInputPassWord : function(options){
        //{{{
        options = options || {};
        options = $.extend({
            element : '#regpassword',
            tipHolder : '#regpassword-tip',
            defaultPlaceHolder : '密码',
            focusPlaceHolder : '密码'
        },options);
        var input_password = new inputBox(options.element, options.tipHolder, {
            placeHolder:options.defaultPlaceHolder
        });
        input_password.e.keyup(function(){
            input_password.i.hide();
            input_password.e.removeClass('r_input_1_cur');
        }).focus(function(){
            input_password.setPlaceholder(options.focusPlaceHolder);
        })
        .blur(function(){
            var checker = checkpassword($(this).val());
            if (checker.rst == false){
                input_password.showError(checker.msg);
                input_password.e.addClass('r_input_1_cur');
                return true;
            } 
            input_password.status = true;
        })
        .bind('paste',function(e){
            e.preventDefault(); 
        });
        
        return input_password;
        //}}}
    },
    /*initInputMobileActiveCode : function(){
        //{{{
        var that = this;
        var input_mobileActivateCode = new inputBox('#activate-code', '#activate-code-tip', {
            placeHolder:'手机验证码'
        });
        input_mobileActivateCode.e.keyup(function(){
            input_mobileActivateCode.i.hide();
        }).blur(function(){
            var activateCode = $(this).val();
            var checker = checkactivateCode(activateCode);
            if (checker.rst == false) {
                input_mobileActivateCode.showError(checker.msg);
                return true;
            }
            ajaxCheck = pub.checkConfirmCode(input_mobileActivateCode.e.val(),input_mobile.e.val());
            if (ajaxCheck.status == 0){
                input_mobileActivateCode.showError(ajaxCheck.errmsg);
                return true;
            } 
            input_mobileActivateCode.status = true;
        });

        return input_mobileActivateCode;
        //}}}
    },*/
    initInputEmail : function(options){
        //{{{
        var that = this;
        var options = options || {};
        options = $.extend({
            'defaultPlaceHolder' : '邮箱',
            'existCheck' : true,
            'existCheckFind' :false
        },options);

        var input_email = new inputBox('#input-email', '#input-email-tip', {
            placeHolder:options.defaultPlaceHolder
        });
        input_email.e.blur(function(){
            var checker = checkemail($(this).val());
            if (checker.rst == false) {
                input_email.showError(checker.msg);
                input_email.e.addClass('r_input_1_cur');
                return false;
            }
            if(options.existCheck){ 
                $.when(that.checkEmailExist($(this).val())).done(function(ajaxChecker){
                    if(ajaxChecker.status == 0) {
                        input_email.showError(ajaxChecker.errmsg);
                        input_email.e.addClass('r_input_1_cur');
                    } else {
                        input_email.status = true;
                    }
                });
            } else if(options.existCheckFind){
                var ajaxCheckerFind = pub.emailExist($(this).val());
                if(ajaxCheckerFind.status == 1) {
                    input_email.showError("邮箱不存在");
                    input_email.e.addClass('r_input_1_cur');
                } else {
                    input_email.status = true;
                }
            } else {
                input_email.status = true;
            }
        }).keydown(function(){
            input_email.i.hide();
            input_email.e.removeClass('r_input_1_cur');
        });

        return input_email;
        //}}}
    },
    initSelectCountry : function(){
        //{{{
        var that = this;
        var input_country = new inputBox('#input-country', '#input-country-tip');   
        input_country.e.blur(function(){
            if(!that.showSelect){
               $('.r_select_list').hide();
            }
            if (!input_country.e.val()){
                input_country.showError('请选择国家/地区');
                input_country.e.closest('.r_input_1').addClass('r_input_1_cur');
            } else { 
                input_country.status = true;
            }
        }).click(function(){
            $('.r_select_list').show();
        }).change(function(){
            input_country.i.hide();
            input_country.e.closest('.r_input_1').removeClass('r_input_1_cur');
        });
        $('.r_select_arrow').click(function(){
            $('.r_select_list').show();
            setTimeout(function(){
                that.btnClick = true;
            },500);
        });
        $('body').click(function(){
            if($('.r_select_list:visible').length && that.btnClick){
                $('.r_select_list').hide();
                that.btnClick = false;
            }
        });
        $('.r_select_box .place-holder-sm').addClass('place-holder-sm-pos');
        if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0"){
            $('.r_select_box .place-holder-sm').css('margin-left','-98px');
        }
        $('.r_select_list').mouseenter(function(){
            that.showSelect = true;
        }).mouseleave(function(){
            that.showSelect = false;
        });
        $('.r_select_list li').click(function(e){
            input_country.e.val($(this).html()); 
            input_country.e.countryId = $(this).attr('data-id');
            $('.r_select_list').hide();
            $('.r_select_box .place-holder-sm').hide();
            input_country.i.hide();
            input_country.e.closest('.r_input_1').removeClass('r_input_1_cur');
        });

        return input_country;
        //}}}
    },
    /*
    initGetActiveCodeBtn : function(){
        //{{{
        var that = this;
        var getcode_btn = new sendCodeButton('#get-code-btn');
        getcode_btn.state = false;
        getcode_btn.setButtonText('获取手机验证码');
        getcode_btn.e.click(function(){
            that.input_mobile.e.blur();
            that.input_imageVerifyCode.e.blur();
            if (getcode_btn.state == false){
                that.getActiveCode();    
            } 
        });

        return getcode_btn;
        //}}} 
    },
    */
    checkMobileExist : function(mobile){
        //{{{
        var defer = $.Deferred();
        XZWebAjax.post(XZWebUrlWriter.getAjax_CheckMobileExist(mobile),{},true,function(data){
            defer.resolve(data);
        });
        return defer.promise();
        //}}}
    },
    checkEmailExist : function(email){
        //{{{
        var defer = $.Deferred();
        XZWebAjax.post(XZWebUrlWriter.getAjax_CheckEmailExist(), {email:email},true,function(data){
            defer.resolve(data);
        });
        return defer.promise();
        //}}}
    },
    checkUserNameExist : function(username){
        //{{{
        var defer = $.Deferred();
        XZWebAjax.post(XZWebUrlWriter.getAjax_CheckUsernameExist(username),{},true,function(data){
            defer.resolve(data);
        });
        return defer.promise();
        //}}}
    },
    checkImageVerifyCode : function(verifyCode){
        //{{{
        var defer = $.Deferred();
        XZWebAjax.post(XZWebUrlWriter.getAjax_CheckVerifyCode(),{verifycode:verifyCode},true,function(data){
            defer.resolve(data);
        });
        return defer.promise();
        //}}}
    },
    checkActiveCode : function(mobile,activateCode){
        //{{{
        var defer = $.Deferred();
        XZWebAjax.post(XZWebUrlWriter.getAjax_CheckActiveCode(mobile,activateCode),{},true,function(data){
            defer.resolve(data);
        });
        return defer.promise(); 
        //}}}
    },
    centerRegLoginForm : function(width,height){
        //{{{
        var win = $(window);
        var top = win.scrollTop() + (win.height() - height)/2;
        var left = (win.width() - width)/2;
        left = left >= 200 ? left : 200;
        top = top >= 90 ? top : 90;
        $('.loginbox').css({
                position:'absolute',
                'left': left,
                'top': top,
                'z-index' : 1
        });
        //}}}
    },
    pageLoginDirect : function(){
        //{{{
        $('body').on('click','.login-direct',function(e){
            e.preventDefault();
            var next = $('#next').val();
            window.location.href = $(this).attr('href') + 'next=' + encodeURIComponent(next);
        });  
        //}}}
    }
    //}}}
}
//模拟实现ie低版本placeholder
jQuery(function(){
    //{{{
    jQuery.fn.placeholder = function(){
        var i = document.createElement('input'),
            placeholdersupport = 'placeholder' in i;
        if(!placeholdersupport){
            var inputs = jQuery(this);
            inputs.each(function(){
                var input = jQuery(this),
                text = input.attr('placeholder'),
                pdl = 0,
                height = input.outerHeight(),
                width = input.outerWidth(),
                placeholder = jQuery('<span class="place-holder-sm">'+text+'</span>');
            try{
                pdl = input.css('padding-left').match(/\d*/i)[0] * 1;
            }catch(e){
                pdl = 5;
            }
            placeholder.css({'margin-left': -(width-pdl),'height':height,'line-height':height+"px",'position':'absolute', 'color': "#c2cacd", 'font-size' : "12px"});
            placeholder.click(function(){
                input.focus();
            });
            if(input.val() != ""){
                placeholder.css({display:'none'});
            }else{
                placeholder.css({display:'inline'});
            }
            placeholder.insertAfter(input);
            input.focus(function(e){
                placeholder.html(input.attr('placeholder'));
            });
            input.keyup(function(e){
                if(jQuery(this).val() != ""){
                    placeholder.css({display:'none'});
                }else{
                    placeholder.css({display:'inline'});
                }
            });
            });
        }
        return this;
    };
    $('input[placeholder]').placeholder();
    //}}}
});
 
 $(function(){
    $('.loginbox').show();
    RegisterLoginComponent.centerRegLoginForm(668,423);
    $(window).resize(function(){
         RegisterLoginComponent.centerRegLoginForm(668,423);
    });

    var mobileNum = 0;
    var input_imageVerifyCode = RegisterLoginComponent.initInputImageVerifyCode();
    input_imageVerifyCode.e.keydown(function(e){
        if (e.keyCode == 13) {
            $("#orgBtn").trigger('click');
            return;
        };
    });

    $(".r_tab li").click(function () {
        var $this = $(this);
        var index = $this.index();
        $(this).addClass("underL1").siblings().removeClass("underL1");
        var general_mobile = $("#mobileLi").is('.underL1');
        if(general_mobile){
            $('#quick-input-mobile').val('').removeClass("r_input_1_cur");
            $('#quick-image-code').removeClass("r_input_small_cur");
            $('#quick-image-code-tip').hide();
            $('#quick-activate-code').val('').removeClass("r_input_small_cur");
            $('#quick-activate-code-tip').hide();
            $('#quick-input-mobile-tip').hide();
            $("#generalLogin").hide();
            $("#mobileLogin").show();
            XZWebMobileQuickLogin.initMobileLoginForm();
        }else{
            $('#input-username').val('').removeClass("r_input_1_cur");
            $('#input-username-tip').hide();
            $('#password').val('').removeClass("r_input_1_cur");
            $('#password-tip').hide();
            $('#image-verify-code').val('');
            pub.resetVerifyCode("#img_imagecodes");
            $('#image-verify-code').removeClass("r_input_small_cur");
            $("#mobileLogin").hide();
            $("#generalLogin").show();
            //input_imageVerifyCode = RegisterLoginComponent.initInputImageVerifyCode();
        }
    })
    var input_username = new inputBox('#input-username', '#input-username-tip', {
        placeHolder:'手机号、邮箱'
    });
    var input_password = new inputBox('#password', '#password-tip', {
        placeHolder:'密码'
    });
    input_username.e.blur(function(){
        if($(this).val() == '')
        {
            input_username.e.addClass("r_input_1_cur");
            input_username.showError('请输入手机号或邮箱');
            return false;
        }else{
            XZWebAjax.post(XZWebUrlWriter.getAjax_CheckRegistExist(),{user:$(this).val()},true,function(userRegist){
                if(userRegist.status == 0){
                    input_username.e.addClass("r_input_1_cur");
                    input_username.showError(userRegist.errmsg);
                    return false;
                }
                input_username.e.removeClass("r_input_1_cur");
                input_username.hideTip();
                return false;
            });
        }
    })
    input_username.e.keyup(function(e){
        $('#input-username-tip').hide();
        input_username.e.removeClass("r_input_1_cur");
    })
    input_password.e.blur(function(){
        if($(this).val() == '')
        {
            input_password.e.addClass("r_input_1_cur");
            input_password.showError('请输入密码');
            return false;
        }
        else {
            input_password.e.removeClass("r_input_1_cur");
            input_password.showOk();
            input_password.hideTip();
            return false;
        }
    })
    .keyup(function(e) {
        if (e.keyCode == 13) {
            $("#orgBtn").trigger('click');
            return;
        };
        $('#password-tip').hide();
        input_password.e.removeClass("r_input_1_cur");
    });

    $("#orgBtn").click(function(){
        var username = $.trim($("#input-username").val());
        var password = $.trim($("#password").val());
        var lodgeid=$.trim($("#lodgeid").val());
        var verifyCode = $.trim($("#image-verify-code").val()); 
        $.when((function(){
            var def = $.Deferred(); 
            input_username.e.blur();
            input_password.e.blur();
            if($("#image-verify-code").is(":visible"))
            {
                input_imageVerifyCode.e.blur();
            }
            input_imageVerifyCode.e.blur();
            setTimeout(function(){
                def.resolve();
            },500);
            return def.promise();
        })()).done(function(){
            if(!(input_username.status && input_password.status))
            {
                return false;
            }
            if($("#image-verify-code").is(":visible"))
            {
                if(!input_imageVerifyCode.status)
                {
                    return false;
                }
            }
            var setcookie =  0;
            if($('#setcookie').is(':checked') == true){
                setcookie = 14;
            }

            $("#orgBtn").text('正在登录...');
            XZWebAjax.post(XZWebUrlWriter.getAjax_Login(),
            {username:username, password:password, verifycode:verifyCode, setcookie:setcookie,lodgeid:lodgeid},
            true,
            function(returndata){
                if(returndata.status == 0) {
                    var checker = checkmobile(username);
                    if(checker.rst == true){
                        mobileNum+=1;
                    }
                    $("#image-verify-code").val('');
                    $("#image-verify-code").blur();
                    if(returndata.verifycode) {
                        $("#verify-show").show();
                        pub.resetVerifyCode('#img_imagecodes');
                    }
                    //location.reload();
                    if(mobileNum>3){
                        input_password.e.addClass("r_input_1_cur");
                        input_password.showError("您输入的密码不正确，可以尝试短信快捷登录");
                    }else{
                        if(returndata.error == '账户和密码不匹配'){
                            input_password.e.addClass("r_input_1_cur");
                            input_password.showError(returndata.error);
                        }else{
                            input_username.e.addClass("r_input_1_cur");
                            input_username.showError(returndata.error);
                        }
                    }
                    $("#orgBtn").html('登录');
                    return false;
                }else if (returndata.status == 1){
                    if(returndata.next){
                        if(returndata.backnext == 1){
                            var hint = $("#hint").val();
                            if(hint){
                                window.location.href = "/"; 
                            }else{
                                location.reload();
                            }     
                        }else{
                            window.location.href = returndata.next;
                        }
                    }
                }
            });
        });
    });
    $('body').on('click',"#closeUserLoginDialog",function(e){
        $('#input-username').attr("disabled",'true');
        $('#password').attr("disabled","true");
        $('#image-verify-code').attr("disabled","true");
        $('#quick-input-mobile').attr("disabled",'true');
        $('#quick-image-code').attr("disabled","true");
        $('#quick-activate-code').attr("disabled","true");

        $('#userlogindialog').dialog('destroy');
        $('body').eq(0).css('overflow','visible');
    });

    $('body').on('click',".logindialog",function(e){
        e.preventDefault();
        var isVerifyCode = XZWebUrlWriter.getRequest(XZWebUrlWriter.getAjax_VerifyCodeFirstShow(),'json');
        if(isVerifyCode.status){
            $("#verify-show").show();
            pub.resetVerifyCode('#img_imagecodes');
        } 
        if($('#registerDialog:visible').length){
            XZWebRegByMobileDialog.clearDialogValue();
            XZWebRegByMobileDialog.closeRegisterDialog();
        }
        $("#orgBtnMobile").html('登录');
        var general_mobile = $("#mobileLi").is('.underL1');
        if(general_mobile){
            XZWebMobileQuickLogin.initMobileLoginForm();
        }
        $("body").eq(0).css("overflow","hidden");
        $('#userlogindialog').dialog({
            width:698,
            hide:true,
            resizable: false,
            modal:true,
            zIndex : 7000
        })
        
        var dialog = $("#userlogindialog").parent('.ui-dialog');
        dialog.css({top:dialog.position().top+15,position:'absolute'});
        //$('#userlogindialog').parent().removeClass('ui-widget-content');
        //$('#userlogindialog').removeClass('ui-widget-content ui-dialog-content ui-dialog');
        $('.ui-widget-overlay').css({background:'none repeat scroll 0 0 #000',opacity:'0.5'});
        $('.ui-dialog-titlebar').hide();
        $('#input-username').removeAttr("disabled");
        $('#password').removeAttr("disabled");
        $('#image-verify-code').removeAttr("disabled","true");
        $('#quick-input-mobile').removeAttr("disabled",'true');
        $('#quick-image-code').removeAttr("disabled","true");
        $('#quick-activate-code').removeAttr("disabled","true");

        //$('#userlogindialog .show-register-box').unbind('click');
        $('#userlogindialog .show-register-box').click(function(){
            //$('#userlogindialog').dialog('destroy');    
            $('#input-username').attr("disabled",'true');
            $('#password').attr("disabled","true");
            //if($('#loginUserId').length == 0){
            //    XZWebRegByMobileDialog.showRegForm();
            //}
            $('#input-username').attr("disabled",'true');
            $('#password').attr("disabled","true");
            $('#img_imagecodes').attr("disabled","true");
            $('#quick-input-mobile').attr("disabled",'true');
            $('#quick-image-code').attr("disabled","true");
            $('#quick-activate-code').attr("disabled","true");
        });
    });
    
})   

 
 $(function(){
    window.XZWebMobileQuickLogin = {
        //{{{
        init : function(options){
           //{{{
           this.showByDialog = options.showByDialog;
           this.input_mobile = RegisterLoginComponent.initInputMobile(
               {element:'#quick-input-mobile',tipHolder:'#quick-input-mobile-tip',focusPlaceHolder:'手机号',existCheck:false});
           this.input_imageVerifyCode = RegisterLoginComponent.initInputImageVerifyCode(
              {element:'#quick-image-code',tipHolder:'#quick-image-code-tip'});
           this.initInputActiveCode({element:'#quick-activate-code',tipHolder:'#quick-activate-code-tip'});
           this.initGetCodeBtn();
           this.initMobileBtn();
           var that = this;
           $('#closeUserLoginDialog').click(function(){
                that.clearDialogValue();
           });
           //}}}
        },
        initMobileBtn : function(){
            //{{{
            var that = this;
            this.hasCommit = false;
            $("#orgBtnMobile").click(function(e){
                e.preventDefault(); 
                if(that.hasCommit){
                    return false; 
                }
                that.hasCommit = true;
                $.when((function(){
                    var def = $.Deferred();
                    //if(!that.input_mobile.isCheck){
                        that.input_mobile.e.blur();    
                    //}
                    //if(!that.input_imageVerifyCode.isCheck){
                        //that.input_activateCode.e.addClass('r_input_small_cur');
                        that.input_imageVerifyCode.e.blur();
                    //}
                    //if(!that.input_activateCode.isCheck){
                        that.input_activateCode.e.blur(); 
                    //}
                    setTimeout(function(){
                        def.resolve(); 
                    },500);

                    return def.promise();
                })()).done(function(){
                    if(!(that.input_mobile.status && that.input_imageVerifyCode.status && that.input_activateCode.status)){
                        that.hasCommit = false;
                        return false;
                    }
                    that.loginByMobile();
                });
            });
            //}}}
        },
        initMobileLoginForm : function(){
           //{{{
           pub.resetVerifyCode('#img_imagecodeMobile'); 
           this.input_mobile.status = false;
           this.input_imageVerifyCode.e.val('');
           //}}}
        },
        initMobieInfoForm : function(){
            //{{{
            this.input_username = RegisterLoginComponent.initInputUserName(
                    {element:'#quick-input-username',tipHolder:'#quick-input-username-tip'});
            this.input_password = RegisterLoginComponent.initInputPassWord(
                    {element:'#quick-regpassword',tipHolder:'#quick-regpassword-tip'});
            this.input_password.e.keydown(function(e){
                if (e.keyCode == 13) {
                    $("#mobileInfoPerfeactBtn").trigger('click');
                }
            });
            this.input_inviteCode = RegisterLoginComponent.initInputInviteCode(
                    {element:'#quick-invitecode',tipHolder:'#quick-invitecode-tip'});
            this.input_inviteCode.e.keydown(function(e){
                if (e.keyCode == 13) {
                    $("#mobileInfoPerfeactBtn").trigger('click');
                }
            });
            //}}}
        },
        initGetCodeBtn : function(){
            //{{{
            var that = this;
            var getcode_btn = new sendCodeButton('#quick-get-code-btn',{second:120});
            getcode_btn.state = false;
            getcode_btn.e.click(function(){
                $.when((function(){
                    if(getcode_btn.state){
                        return true; 
                    }
                    var def = $.Deferred();
                    $('#quick-activate-code').removeClass('r_input_small_cur'); 
                    that.input_activateCode.i.hide();
                    //if(!that.input_mobile.isCheck){
                        that.input_mobile.e.blur();
                    //}
                    if(that.input_imageVerifyCode.codeSendSuc){
                        pub.resetVerifyCode('#img_imagecodeMobile');
                        that.input_imageVerifyCode.e.val('');
                        that.input_imageVerifyCode.e.focus();
                        that.input_imageVerifyCode.status = false;
                        that.input_imageVerifyCode.codeSendSuc = false;
                    }
                    //if(!that.input_imageVerifyCode.isCheck){
                        that.input_imageVerifyCode.e.blur();
                    //}
                    setTimeout(function(){
                        def.resolve(); 
                    },500);

                    return def.promise();
                })()).done(function(){
                    if (!(that.input_mobile.status && that.input_imageVerifyCode.status)){
                        return false;
                    }
                    if (getcode_btn.state == false){
                        that.getActiveCode();
                    }
                });
            });

            this.getcode_btn = getcode_btn;
            //}}}
        },
        initInputActiveCode : function(options){
            //{{{
            var that = this;
            var options = options || {};
            options = $.extend({
                element : '#activate-code',
                tipHolder : '#activate-code-tip',
                defaultPlaceHolder : '动态验证码'
            },options);

            var input_activateCode = new inputBox(options.element, options.tipHolder, {
                placeHolder:options.defaultPlaceHolder
            });
            input_activateCode.e.keydown(function(){
                input_activateCode.e.removeClass('r_input_small_cur');
                input_activateCode.i.hide();
            }).blur(function(){
                var activateCode = $(this).val();
                if (activateCode == "") {
                    input_activateCode.e.addClass('r_input_small_cur');
                    input_activateCode.showError("请输入动态验证码");
                    return;
                }
                //需要先验证手机
                if(activateCode.length != 4 || !that.input_mobile.status){
                    input_activateCode.e.addClass('r_input_small_cur');
                    input_activateCode.showError("动态验证码错误");
                    return;
                }
                input_activateCode.status = true;
            }).keydown(function(e){
                if (e.keyCode == 13) {
                    $("#orgBtnMobile").trigger('click');
                }
            });

            this.input_activateCode = input_activateCode;
            //}}}
        },
        clearDialogValue : function(){
            //{{{
            $('#input-username').val('');
            $('#password').val('');
            this.input_mobile.e.val('');
            this.input_activateCode.e.val('');
            clearInterval(this.getcode_btn.intervalProcess);
            this.getcode_btn.setButtonText('获取动态验证码');
            this.getcode_btn.state = false;
            this.input_imageVerifyCode.codeSendSuc = false;
            this.getcode_btn.e.removeClass('no-nb').addClass('have-nb');
            $('.r_error_tip').hide();
            $('.r_input_1_cur').removeClass('r_input_1_cur');
            $('.r_input_small_cur').removeClass('r_input_small_cur');
            //}}}
        },
        showPerfeactInfoForm : function(){
            //{{{
            this.initMobieInfoForm();
            var that = this;
            $('#pageLoginDialog').hide();
            $('#mobilePerfeactInfoDialog').show();
            $('#mobileInfoPerfeactBtn').unbind('click');
            that.hasCommit = false;
            $('#mobileInfoPerfeactBtn').click(function(e){
                e.preventDefault();
                if(that.hasCommit){
                    return false; 
                }
                that.hasCommit = true;
                that.doRegister(function(reg_rst){
                    if (reg_rst.status == 0) {
                        alert(reg_rst.msg);
                        return true;
                    } else {
                        window.location.href = reg_rst.next;
                    }
                });
            });
            //}}}
        },
        showPerfeactInfoDialog : function(){
            //{{{
            this.initMobieInfoForm(); 
            var that = this;
            $('#userlogindialog').dialog('close');
            $('#mobilePerfeactInfoDialog').dialog({
                width : 403,
                resizable: false,
                modal:true,
                position: "center"
            }).parent('.ui-dialog').find('.ui-dialog-titlebar').hide().end().find('.perfeact-info-content').show();
            var dialog = $("#mobilePerfeactInfoDialog").parent('.ui-dialog');
            dialog.css({top:dialog.position().top+15});
            $('#mobilePerfeactInfoBtn').unbind('click');
            $('#mobilePerfeactInfoBtn').click(function(e){
                that.clearDialogValue();
                $('#mobilePerfeactInfoDialog').dialog('close');
            });
            $('#mobileInfoPerfeactBtn').unbind('click');
            that.hasCommit = false;
            $('#mobileInfoPerfeactBtn').click(function(e){
                e.preventDefault();
                if(that.hasCommit){
                    return false; 
                }
                that.hasCommit = true;
                that.doRegister(function(reg_rst){
                    if (reg_rst.status == 0) {
                        alert(reg_rst.msg);
                        return true;
                    } else {
                        $('#mobilePerfeactInfoDialog').dialog('close');
                        $('#regSuccessDialog').dialog({
                            width : 403,
                            resizable: false,
                            modal:true,
                            position: "center"
                        }).parent('.ui-dialog').css({'z-index':9000,'background':'none'})
                        .find('.ui-dialog-titlebar').hide().end().find('#regSuccInfo').html(reg_rst.html);
                        var dialog = $("#regSuccessDialog").parent('.ui-dialog');
                        dialog.css({top:dialog.position().top+15});
                        $('#closeRegSuccDialogBtn,returnOriBtn').unbind('click');
                        $('#closeRegSuccDialogBtn,returnOriBtn').click(function(){
                            window.location.reload();
                        });            
                    }
                });
            });
            //}}}
        },
        getActiveCode : function(){
            //{{{
            $('#quick-get-code-btn').html('发送中...');
            var ajaxRsponse =  pub.sendQuickLoginCode(this.input_imageVerifyCode.e.val(), this.input_mobile.e.val());
            if(ajaxRsponse.status != 0){
               this.handleSendActiveCodeErr(ajaxRsponse); 
            } else {
               this.handleSendActiveCodeSuc(ajaxRsponse);
            }
            //}}}
        },
        handleSendActiveCodeErr : function(ajaxRsponse){
            //{{{
            if(ajaxRsponse.status == 2){
                this.input_mobile.e.addClass('r_input_1_cur');
                this.input_mobile.showError(ajaxRsponse.error);
            } else {
                this.input_activateCode.showError(ajaxRsponse.error);
                pub.resetVerifyCode('#img_imagecodeMobile');
                this.input_imageVerifyCode.e.val('').focus();
                this.getcode_btn.state = false;
                this.getcode_btn.start(120);
            }
            $('#quick-get-code-btn').html('重新发送');
            //}}}
        },
        handleSendActiveCodeSuc : function(ajaxRsponse){
            //{{{
            this.getcode_btn.state = false;
            this.input_imageVerifyCode.codeSendSuc = true;
            this.getcode_btn.start(120);
            //}}}
        },
        loginByMobile : function(){
            //{{{
            var that = this;
            var setcookie =  0;
            var lodgeid=$.trim($("#lodgeid").val());
            if($('#setcookie').is(':checked') == true){
                setcookie = 14;
            }
            $("#orgBtnMobile").text('正在登录...');
            XZWebAjax.post(XZWebUrlWriter.getAjax_LoginMobile(),
                    {usermobile : that.input_mobile.e.val(),
                        mobileVerifycode : $("#quick-activate-code").val(), 
                setcookie : setcookie,
                lodgeid : lodgeid}
                ,true,
                function(returndataMobile){
                    that.hasCommit = false;
                    if(returndataMobile.status == 0){
                        that.input_activateCode.showError(ajaxRsponse.error);
                        $("#orgBtnMobile").html('登录');
                        return false;
                    } else if(returndataMobile.status == 1){
                        if(returndataMobile.backnext == 1){
                            var hints = $("#hint").val();
                            if(hints){
                                window.location.href = "/"; 
                            }else{
                                location.reload();
                            }     
                        }else{
                            window.location.href = returndataMobile.next;
                        }
                    } else if(returndataMobile.status == 2){
                        if(XZWebMobileQuickLogin.showByDialog){
                            that.showPerfeactInfoDialog();
                        } else {
                            that.showPerfeactInfoForm();
                        }
                    } else if(returndataMobile.status == 3){
                        that.input_activateCode.e.addClass('r_input_small_cur');
                        that.input_activateCode.showError(returndataMobile.error);
                        $("#orgBtnMobile").html('登录');
                    }else if(returndataMobile.status == 4){
                        that.input_mobile.e.addClass('r_input_1_cur');
                        that.input_mobile.showError(returndataMobile.error);
                    }else{
                        that.input_activateCode.showError('操作异常,稍后重试');
                        $("#orgBtnMobile").html('登录');
                    }
                });       
            //}}}
        },
        doRegister : function(afterRegister){
            //{{{
            var that = this;
            var inviteCodeCheck = false;
            $.when((function(){
                var def = $.Deferred();
                //if(!that.input_username.isCheck){
                    that.input_username.e.blur();
                //}
                //if(!that.input_password.isCheck){
                    that.input_password.e.blur();
                //}
                inviteCodeCheck = that.input_inviteCode.checkInviteCode();
                setTimeout(function(){
                    def.resolve(); 
                },500);

                return def.promise();
            })()).done(function(){
                if(!(that.input_mobile.status && that.input_username.status && that.input_password.status && inviteCodeCheck)){
                    that.hasCommit = false;
                    return false;
                }
                var next = $("#next").val();
                var reg_rst = pub.doRegisterByMobile(
                    that.input_mobile.e.val(),
                    that.input_username.e.val(),
                    that.input_password.e.val(),
                    that.input_activateCode.e.val(),
                    next,
                    '',
                    '',
                    '',
                    that.input_inviteCode.e.val(),
                    '',
                    true 
                );

                afterRegister(reg_rst);
            });
            //}}}
        }
        //}}}
    }

    if($('#mobileLi').attr('dialog') == '0'){
        XZWebMobileQuickLogin.init({showByDialog:false});
    } else {
        XZWebMobileQuickLogin.init({showByDialog:true});
    }

});

 
 var XZWebRegByMobile = {
    //{{{
    init : function() {
        //{{{
        this.input_mobile = RegisterLoginComponent.initInputMobile({'focusPlaceHolder':'仅限大陆手机号'});
        this.input_imageVerifyCode = RegisterLoginComponent.initInputImageVerifyCode(
                {element:'#reg-image-code',tipHolder:'#reg-image-code-tip'});
        this.input_imageVerifyCode.e.keydown(function(e){
            if (e.keyCode == 13) {
                $("#reg-btn").trigger('click');
            }
        });
        this.input_inviteCode = RegisterLoginComponent.initInputInviteCode();
        this.input_inviteCode.e.keydown(function(e){
            if (e.keyCode == 13) {
                $("#reg-btn").trigger('click');
            }
        });
        this.input_password = RegisterLoginComponent.initInputPassWord({focusPlaceHolder:'请输入6-12位字母、数字或符号'});
        this.input_password.e.keydown(function(e){
            if (e.keyCode == 13) {
                $("#regConfirmBtn").trigger('click');
            }
        });
        this.initRegBtn();
        this.oriMobileNum = '';

        //}}}
    },
    initRegBtn : function(){
        //{{{
        //这种写法主要原因是最初在原有代码的基础上使用的是同步ajax调用机制，在谷歌浏览器没问题
        //但是在火狐浏览器中，这种同步请求很容易阻塞ui进程，造成ui的瞬间假死，点击无效.
        var that = this;
        //防止重复点击
        this.hasCommit = false;
        $('#reg-btn').click(function(e){
            e.preventDefault();
            if(that.hasCommit){
                return false;
            }
            that.hasCommit = true;
            var inviteCodeCheck = false;
            $.when((function(){
                var def = $.Deferred();
                //if(!that.input_mobile.isCheck){
                   that.input_mobile.e.blur();
                //}
                //if(!that.input_imageVerifyCode.isCheck){
                   that.input_imageVerifyCode.e.blur();
                //}
                inviteCodeCheck = that.input_inviteCode.checkInviteCode();
                setTimeout(function(){
                    def.resolve();
                },500)
                return def.promise();
            })())
            .done(function(){
                if (!(that.input_mobile.status && that.input_imageVerifyCode.status && inviteCodeCheck)) {
                    that.hasCommit = false;
                    return true;
                }
                that.showPerfectInfoForm();
                if(that.input_mobile.e.val() != that.oriMobileNum){
                    if(!that.getcode_btn){
                       that.initGetCodeBtn();
                    }
                    that.getActiveCode();
                }
            });
        });
        //}}}
    },
    initGetCodeBtn : function(){
        //{{{
        var getcode_btn = new sendCodeButton('#get-code-btn');
        var that = this;
        getcode_btn.e.click(function(){
            if (that.getcode_btn.state == false){
                that.showRegForm({resetImage:true});
                that.oriMobileNum = '';
                that.input_imageVerifyCode.e.focus();
            } 
        });
        this.getcode_btn = getcode_btn;
        //}}}
    },
    initRegConfirmBtn : function(options){
        //{{{
        var options = options || {}; 
        options = $.extend({
            ajaxShowSucc : false
        },options); 
        
        var that = this;
        this.hasCommit = false;
        $('#regConfirmBtn').click(function(e){
            e.preventDefault();
            if(that.hasCommit){
                return false; 
            }
            that.hasCommit = true; 
            $.when((function(){
                var def = $.Deferred();
                //if(!that.input_activateCode.isCheck){
                    that.input_activateCode.e.blur();
                //}
                //if(!that.input_username.isCheck){
                    that.input_username.e.blur();
                //}
                //if(!that.input_password.isCheck){
                    that.input_password.e.blur();
                //}
                if(!$('#activate-code-tip:visible').length){
                    that.checkActiveCode();
                }               
                setTimeout(function(){
                    def.resolve();
                },500);

                return def.promise();
            })())
            .done(function(){
                if (!(that.input_activateCode.status && that.input_username.status && that.input_password.status)) {
                    that.hasCommit = false;
                    return true;
                }
                var next = $("#next").val();
                var reg_rst = pub.doRegisterByMobile(
                    that.input_mobile.e.val(),
                    that.input_username.e.val(),
                    that.input_password.e.val(),
                    that.input_activateCode.e.val(),
                    next,
                    '',
                    '',
                    '',
                    that.input_inviteCode.e.val(),
                    '',
                    options.ajaxShowSucc
                );
                that.hasCommit = false;
                if (reg_rst.status == 0) {
                    that.handleRegErr(reg_rst);
                } else {
                    that.handleRegSuc(reg_rst);
                }
            });
        });
        //}}}
    },
    initInputActiveCode : function(options){
        //{{{
        var that = this;
        var options = options || {};
        options = $.extend({
            element : '#activate-code',
            tipHolder : '#activate-code-tip',
            defaultPlaceHolder : '手机验证码'
        },options);
        
        var input_activateCode = new inputBox(options.element, options.tipHolder, {
            placeHolder:options.defaultPlaceHolder
        });
        
        input_activateCode.e.keyup(function(){
            input_activateCode.i.hide();
            input_activateCode.e.removeClass('r_input_small_cur');
        }).blur(function(){
            var activateCode = $(this).val();
            var checker = checkactivateCode(activateCode);
            if (checker.rst == false) {
                input_activateCode.showError(checker.msg);
                input_activateCode.e.addClass('r_input_small_cur');
                return true;
            }
            //input_activateCode.status = true;
            /*
            $.when(RegisterLoginComponent.checkActiveCode(that.input_mobile.e.val(),input_activateCode.e.val()))
            .done(function(ajaxCheck){
                if (ajaxCheck.status == 0){
                    input_activateCode.showError(ajaxCheck.errmsg);
                    input_activateCode.e.addClass('r_input_small_cur');
                }else{
                    input_activateCode.status = true;
                }
            });
            */
        });

        this.input_activateCode = input_activateCode;
        //}}}
    },
    getActiveCode : function(){
        //{{{
        window.clearInterval(this.getcode_btn.intervalProcess);
        this.getcode_btn.e.html('发送中...');
        XZWebAjax.post(XZWebUrlWriter.getAjax_SendActivateCode(this.input_mobile.e.val(),this.input_imageVerifyCode.e.val()),{},true,
        function(ajaxRsponse){
            if(ajaxRsponse.status == 0){
               XZWebRegByMobile.handleSendActiveCodeErr(ajaxRsponse); 
            } else {
               XZWebRegByMobile.handleSendActiveCodeSuc(ajaxRsponse);
            }
        });
        //}}}
    },
    showRegForm : function(options){
        //{{{
        var options = options || {};
        options = $.extend({resetImage:false},options);
        $("#mobileRegisterInfoDialog").hide();
        $("#registerDialog").show(); 
        if(options.resetImage){
           pub.resetVerifyCode('img.change-verify-image');
        }
        this.input_imageVerifyCode.e.val('');
        //}}}
    },
    showPerfectInfoForm : function(){
        //{{{
        var that = this;
        $("#registerDialog").hide(); 
        $("#mobileRegisterInfoDialog").show();
        $('#codeRecivePhone').text(this.input_mobile.e.val());
        $('#modifyRegisterBtn').unbind('click');
        $('#modifyRegisterBtn').click(function(e){
            e.preventDefault();
            that.oriMobileNum = that.input_mobile.e.val();
            that.showRegForm({resetImage:true});
        });
        this.initInputActiveCode();
        this.input_username = RegisterLoginComponent.initInputUserName();
        this.initRegConfirmBtn();
        $(window).unbind('resize');
        RegisterLoginComponent.centerRegLoginForm(403,443);
        $(window).resize(function(){
            RegisterLoginComponent.centerRegLoginForm(403,443);
        });
        //}}}
    },
    handleSendActiveCodeErr : function(ajaxRsponse){
        //{{{
        this.getcode_btn.e.html('重新发送');
        this.input_activateCode.showError(ajaxRsponse.errmsg);
        this.getcode_btn.state = false;
        this.getcode_btn.start(120);
        //}}}
    },
    handleSendActiveCodeSuc : function(ajaxRsponse){
        //{{{
        this.getcode_btn.state = false;
        this.getcode_btn.start(120);
        //}}}
    },
    handleRegErr : function(ajaxResponse){
        //{{{
        alert(ajaxResponse.msg);
        return true;
        //}}}
    },
    handleRegSuc : function(ajaxResponse){
        //{{{
        window.location.href = ajaxResponse.next;
        //}}}
    },
    checkActiveCode : function(){
        var that = this;
        $.when(RegisterLoginComponent.checkActiveCode(that.input_mobile.e.val(),that.input_activateCode.e.val()))
        .done(function(ajaxCheck){
            if (ajaxCheck.status == 0){
                that.input_activateCode.showError(ajaxCheck.errmsg);
                that.input_activateCode.e.addClass('r_input_small_cur');
            }else{
                that.input_activateCode.status = true;
            }
        });
    }
    //}}}
};
 
 window.XZWebRegByMobileDialog = $.extend(XZWebRegByMobile,{
    //{{{
    initGetCodeBtn : function(){
        //{{{
        var getcode_btn = new sendCodeButton('#get-code-btn');
        var that = this;
        getcode_btn.e.click(function(){
            if (that.getcode_btn.state == false){
                that.closeMobileRegisterInfoDialog();
                that.showRegForm();
                that.oriMobileNum = '';
                that.input_imageVerifyCode.e.focus();
            } 
        });
        this.getcode_btn = getcode_btn;
        //}}}
    },
    clearDialogValue : function(){
        //{{{
        this.input_mobile.e.val('');
        this.input_imageVerifyCode.e.val('');
        this.input_inviteCode.e.val('');
        this.input_password.e.val('');
        $('.r_error_tip').hide();
        $('.r_input_1_cur').removeClass('r_input_1_cur');
        $('.r_input_small_cur').removeClass('r_input_small_cur');
        //}}}
    },
    showRegForm : function(){
        //{{{
        if($('#userlogindialog:visible').length){
            $('#userlogindialog').dialog('destroy');
            $('body').eq(0).css('overflow','visible');
        }
        var that = this;
        $("body").eq(0).css("overflow","hidden");
        $("#registerDialog").dialog({
            width : 698,
            resizable: false,
            modal:true,
            zIndex:7000
        }).parent('.ui-dialog').css({'z-index':9000}).find('.ui-dialog-titlebar').hide();
        //z-index 9000 兼容结果列表页层级问题
        var dialog = $("#registerDialog").parent('.ui-dialog');
        dialog.css({top:dialog.position().top+15,position:'absolute'});
        //向上移动15像素解决title被隐藏产生的垂直无法居中bug,指定absoute解决有些页面弹窗无法脱离文档流的问题
        $('.ui-widget-overlay').css({background:'none repeat scroll 0 0 #000',opacity:'0.5'});
        if(that.oriMobileNum == ''){
            that.clearDialogValue();
        }
        $('#reg-btn').focus();
        $('#closeRegiserDialog').unbind('click');
        $('#closeRegiserDialog').click(function(){
            that.clearDialogValue();
            that.closeRegisterDialog();
        });
        pub.resetVerifyCode('#img_imagecode');
        this.input_imageVerifyCode.e.val('');
        //}}}
    },
    closeRegisterDialog : function(){
        //{{{
        $("#registerDialog").dialog('destroy');
        $("body").eq(0).css("overflow","visible");
        //}}}
    },
    showPerfectInfoForm : function(){
        //{{{
        var that = this;
        that.closeRegisterDialog();
        $("body").eq(0).css('overflow',"hidden");
        $("#mobileRegisterInfoDialog").dialog({
            width : 400,
            resizable: false,
            modal:true,
            position: "center",
            zIndex :7000 
        }).parent('.ui-dialog').css({'z-index':9000}).find('.ui-dialog-titlebar').hide();
        var dialog = $("#mobileRegisterInfoDialog").parent('.ui-dialog');
        dialog.css({top:dialog.position().top+15,position:'absolute'});
        $('#codeRecivePhone').html(this.input_mobile.e.val());
        $('#closeMobileRegisterInfoDialog').unbind('click');
        $('#closeMobileRegisterInfoDialog').click(function(){
            that.clearDialogValue();
            that.closeMobileRegisterInfoDialog();
        });
        $('#modifyRegisterBtn').unbind('click');
        $('#modifyRegisterBtn').click(function(e){
            e.preventDefault();
            that.closeMobileRegisterInfoDialog();
            that.oriMobileNum = that.input_mobile.e.val();
            that.showRegForm();
        });
        this.initInputActiveCode();
        this.input_username = RegisterLoginComponent.initInputUserName();
        this.initRegConfirmBtn({ajaxShowSucc:true});
        //}}}
    },
    closeMobileRegisterInfoDialog : function(){
        //{{{
        $('.r_error_tip').hide();
        $('.r_input_1_cur').removeClass('r_input_1_cur');
        $('.r_input_small_cur').removeClass('r_input_small_cur');
        $("#mobileRegisterInfoDialog").dialog('destroy');
        $("body").eq(0).css('overflow',"visible");
        //}}}
    },
    handleRegSuc : function(ajaxResponse){
        //{{{
        this.closeMobileRegisterInfoDialog();
        $("body").eq(0).css("overflow","hidden");
        $('#regSuccessDialog').dialog({
            width : 401,
            resizable: false,
            modal:true,
            position: "center"
        }).parent('.ui-dialog').css({'z-index':9000,'background':'none'})
        .find('.ui-dialog-titlebar').hide().end().find('#regSuccInfo').html(ajaxResponse.html);
        var dialog = $('#regSuccessDialog').parent('.ui-dialog');
        dialog.css({top:dialog.position().top+15,position:'absolute'});
        $('#closeRegSuccDialogBtn,returnOriBtn').unbind('click');
        $('#closeRegSuccDialogBtn,returnOriBtn').click(function(){
            XZWebRegByMobileDialog.afterRegSuc();     
        });
        return true;
        //}}}
    },
    afterRegSuc : function(){
       window.location.reload();
    }
    //}}}
});
$(window).load(function(){  

    XZWebRegByMobileDialog.init();

    //注册弹窗事件
    $("#userregister, .show-register-box").click(function(e){
        e.preventDefault();
        if($('#loginUserId').length == 0){
            XZWebRegByMobileDialog.showRegForm();
        }
        return false;
    });

    //页面加载之后如果处于登录状态的一些逻辑,暂时按照以前规范放到这里,包含赞和im
    var key = sessionStorage.getItem("from");
    var isLogin = $('#loginUserId').length > 0 ;
    switch (key) {
        case "praise":
            if (isLogin) setTimeout(function(){$('#praise_btn').click()},500);
            break;
        case "IMtalk":
            if (isLogin) setTimeout(function(){ $("#webim-chat-user").click()},2000);
            break;
    }
    sessionStorage.setItem("from","null");
});
