 
 var topLevelDomain = "xiaozhu.com";
var domain = "www.xiaozhu.com";
var webimIframUrl = "http://xiaozhu.com/webim.html";
var uploadImageUrl = "http://image2.xiaozhustatic2.com/imgin4uploadify.php";
var jciUrl = "http://jci.xiaozhustatic1.com";
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
 (function($) {
    $.fn.lazyload = function(options) {
        var settings = {
            threshold: 0,
            lazyImgWidth: 32,
            lazyImgHeight: 32,
            userAttr: "lazy_src"
        };
        if (options) {
            $.extend(settings, options);
        }

        var scrolltop = (document.body.scrollTop || document.documentElement.scrollTop+ 5);
        var visiableArea = $(window).height();
        elements = $("img[lazy_src]["+settings.userAttr+" != 'finish']");
        for(var i=0; i<elements.length; i++) {
            var imgtop = 0;
            var img = elements[i];

            imgtop = $.getElementTop(img);
            if(imgtop < scrolltop+visiableArea) {
                var truesrc = $(img).attr(settings.userAttr);
                $(img).attr("src", truesrc);
                $(img).attr(settings.userAttr, "finish");
            }
        }
        var obj = (options && options.operationobj != undefined) ?  options.operationobj : $(window)  ;
        obj.scroll(function(){
            var scrolltop = (options && options.operationobj != undefined) ? options.operationobj.scrollTop() : (document.body.scrollTop || document.documentElement.scrollTop+ 5) ;
            var visiableArea = $(window).height();
            elements = $("img[lazy_src]["+settings.userAttr+" != 'finish']");
            for(var i=0; i<elements.length; i++) {
                var imgtop = 0;
                var img = elements[i];

                imgtop = $.getElementTop(img);
                if(imgtop < scrolltop+visiableArea) {
                    var truesrc = $(img).attr(settings.userAttr);
                    $(img).attr("src", truesrc);
                    $(img).attr(settings.userAttr, "finish");
                }
            }
        });

    };
    $.getElementTop = function(element){
        var actualTop = element.offsetTop;
        var current = element.offsetParent;
        while (current !== null){
            actualTop += current.offsetTop;
            current = current.offsetParent;
        }
        return actualTop;
    };
})(jQuery);
 
 var _keywordValue = '';
var districtSearchKey = 'E';

function getFullDate(date){
    var _FullDate = date;
    if(date < 10)
        _FullDate = 0 + String(date);

    return _FullDate;
}
function searchCity(pageType)
{
   if($('#actionname').val()=='Front_Search'){
     var searchCity = $('#searchcityd').attr("value");
   }else{
     var searchCity = $('#searchcity').attr("value");
   }
   
    var cityDomain = $('#citydomain').attr("value");
    var suggestion_cityDomain = $('#suggestion_citydomain').attr("value");
    if(suggestion_cityDomain != "")
        cityDomain = suggestion_cityDomain;
    var searchKey = $('#searchkey').val();//api name
    var searchPutKey = $('#keyword').val();//user set word
    var searchLid = $('#landmarkid').val();
    var landmarktype = $('#landmarktype').val();
    var defaulturl = $('#defaulturl').val();
    var isOpenBlank = $('#isopenblank').val();
    var jumpUrl = '';
    if(searchKey == _keywordValue)
        searchKey = '';
    if(searchPutKey == _keywordValue || searchPutKey=='输入地点...')
        searchPutKey = '';

    if(!searchCity || searchCity =='请选择城市或目的地')
    {
        $('#tip_searchcity').html("请选择城市或目的地");
        $('#tip_searchcity').show();
        return ;
    }
    searchCity = encodeURI(searchCity); 
    var startDate = $('#startdate').attr('value');
    var endDate = $('#enddate').attr('value');

    var abtest_ABTest4SearchDate = getCookie('abtest_ABTest4SearchDate');
    if (abtest_ABTest4SearchDate == 'b')
    {
        if((startDate == '' || startDate == '请选择入住日期') && (endDate == ''|| endDate == '请选择退房日期'))
        {
            startDate = '';
            endDate = '';
            deleteCookie('startDate','/','.'+topLevelDomain);
            deleteCookie('endDate','/','.'+topLevelDomain);
        }
        else if(startDate == '请选择入住日期' || startDate.length < 1 )
        {
            $('#startdate').css('color','red').fadeOut('slow').fadeIn("slow").fadeOut("slow").fadeIn("slow",function(){
                    $(this).css('color','')
                    });
            return ;
        }
        else if(endDate == '请选择退房日期' || endDate.length < 1)
        { 
            $('#enddate').css('color','red').fadeOut('slow').fadeIn("slow").fadeOut("slow").fadeIn("slow",function(){
                    $(this).css('color','')
                    });
            return ;
        }
    }
    else
    {
        if((startDate == '请选择入住日期' && endDate == '请选择退房日期') || (startDate.length < 1 && endDate.length < 1))
        {
            $('#startdate').css('color','red').fadeOut('slow').fadeIn("slow").fadeOut("slow").fadeIn("slow",function(){
                    $(this).css('color','')
                    });
            $('#enddate').css('color','red').fadeOut('slow').fadeIn("slow").fadeOut("slow").fadeIn("slow",function(){
                    $(this).css('color','')
                    });
            $('#calendar_btn_s').click();
            return ;
        }
        else if(startDate == '请选择入住日期' || startDate.length < 1 )
        {
            $('#startdate').css('color','red').fadeOut('slow').fadeIn("slow").fadeOut("slow").fadeIn("slow",function(){
                    $(this).css('color','')
                    });
            return ;
        }
        else if(endDate == '请选择退房日期' || endDate.length < 1)
        { 
            $('#enddate').css('color','red').fadeOut('slow').fadeIn("slow").fadeOut("slow").fadeIn("slow",function(){
                    $(this).css('color','')
                    });
            return ;
        }
    }
    var   type="^[0-9]*[1-9][0-9]*$";
    var   re   =   new   RegExp(type);


    if(searchCity.match(re) != null)
    {
        $.ajax({
            type:"get",
            url:XZWebUrlWriter.getAjax_CheckLodgeUnitUrl(searchCity),
            async : false,
            success:function(data){
               if(data)
               {
                   var obj = eval("("+data+")");
                    if(obj['error'] == '1')
                   {
                        $('#tip_searchcity').html(obj['errormsg']);
                        $('#tip_searchcity').show();
                        return;
                   }else
                    {
                        if(isOpenBlank == '1')
                        {
                            openNewPage(obj['detailurl']);
                        }else
                        {
                            location.href = obj['detailurl'];
                        }
                        return;
                    }
               }
                
            }
            
        })
    }else
   {
    if(pageType == 'search')
        cityDomain = '';
    $.ajax({
        type: "get",
        url:XZWebUrlWriter.getAjax_CheckSearchConditionUrl(searchCity,cityDomain,startDate,endDate),
        async : false,
        success: function(data) {
            if(data)
            {
                var dataObj = eval("("+data+")");
                if(dataObj['error'] == '1')
                {
                    if(dataObj['cityInfo'])
                {
                    $('#tip_searchcity').html(dataObj['cityInfo']);
                    $('#tip_searchcity').show();
                };
                if(dataObj['dateInfo'])
                {       
                    $('#tip_enddate').html(dataObj['dateInfo']);
                    $('#tip_enddate').show();
                };
                //setTimeout(function() { $('#tip_searchcity').hide() }, 4000);
                 setTimeout(function() { $('#tip_enddate').hide() }, 4010);
                 if($('#actionname').val()=='Front_Search'){
                        alert('对不起，没有找到相应的结果');
                        location.reload();
                      }
                }
                else
                {
                    var city = dataObj['city'] ;
                    var paramArray = new Array();
                    var paramStr = '';
                    if(startDate != '')
                    {
                        paramArray.push('startDate='+startDate);
                    }
                    if(endDate != '')
                    {
                        paramArray.push('endDate='+endDate);
                    }
                    if(searchPutKey != '' && searchPutKey != null && landmarktype != districtSearchKey)
                    {
                        paramArray.push('putkey='+encodeURIComponent(ignoreSpaces(searchPutKey)));
                    }
                    else if(searchKey != '' && searchKey != null && landmarktype != districtSearchKey)
                    {
                        paramArray.push('putkey='+encodeURIComponent(ignoreSpaces(searchKey)));
                    }

                    
                    paramStr = paramArray.join('&');
                    if(landmarktype == districtSearchKey)
                    {
                        defaulturl = searchLid+"-duanzufang-8/";
                        if(paramStr)
                            defaulturl += "?";
                        jumpUrl = "http://" + city + "." + topLevelDomain + "/" + defaulturl+paramStr;
                        if(isOpenBlank == '1')
                        {
                            openNewPage(jumpUrl);
                        }else
                        {
                            location.href = jumpUrl;
                        }
                        return false;
                    }
                    if(defaulturl)
                    {
                        defaulturl += "-duanzufang-20/";
                        if(paramStr)
                            defaulturl += "?";
                        jumpUrl = "http://" + city + "." + topLevelDomain + "/" + defaulturl+paramStr;
                        if(isOpenBlank == '1')
                        {
                            openNewPage(jumpUrl);
                        }else
                        {
                            location.href = jumpUrl;
                        }
                        return false;
                    }

                    if(startDate != '' || endDate != '')
                        paramStr = paramArray.join('&');
                    if(paramStr !='')
                    {
                        if(searchLid)
                        {
                            if(searchKey)
                                var paramVal = encodeURIComponent(searchKey) + "_" + searchLid + "S-duanzufang-20/"; 
                            else if(searchPutKey)
                                var paramVal = encodeURIComponent(ignoreSpaces(searchPutKey)) + "_" + searchLid + "M-duanzufang-20/"; 

                            jumpUrl = "http://"+city+'.'+topLevelDomain+"/"+paramVal+'?'+paramStr;
;
                            if(isOpenBlank == '1')
                            {
                                openNewPage(jumpUrl);
                            }else
                            {
                                location.href = jumpUrl;
                            }
                        }
                        else
                        {
                            var paramVal = "";
                            if(searchPutKey)
                            {
                                paramVal = encodeURIComponent(ignoreSpaces(searchPutKey)) + "_M-duanzufang-20/"; 
                            }
                            jumpUrl = "http://"+city+'.'+topLevelDomain+"/"+paramVal+'?'+paramStr;

                            if(isOpenBlank == '1')
                            {
                                openNewPage(jumpUrl);
                            }else
                            {
                                location.href = jumpUrl;
                            }
                        }
                    }
                    else 
                    {
                        if(!searchLid && searchPutKey)
                        {
                            var paramVal = encodeURIComponent(ignoreSpaces(searchPutKey)) + "_M-duanzufang-20/"; 
                            jumpUrl = "http://"+city+'.'+topLevelDomain+"/"+paramVal+'?'+paramStr;
                            if(isOpenBlank == '1')
                            {
                                openNewPage(jumpUrl);
                            }else
                            {
                                location.href = jumpUrl;
                            }
                        }
                        else if(searchLid && (searchPutKey || searchKey))
                        {
                            if(searchKey)
                                var paramVal = encodeURIComponent(ignoreSpaces(searchKey)) + "_" + searchLid + "S-duanzufang-20/"; 
                            if(searchPutKey)
                                var paramVal = encodeURIComponent(ignoreSpaces(searchPutKey)) + "_" + searchLid + "M-duanzufang-20/"; 
                            jumpUrl = "http://"+city+'.'+topLevelDomain+"/"+paramVal+'?'+paramStr;
                            if(isOpenBlank == '1')
                            {
                                openNewPage(jumpUrl);
                            }else
                            {
                                location.href = jumpUrl;
                            }
                        }
                        else
                        {
                            jumpUrl = "http://"+city+'.'+topLevelDomain+"/";
                            if(isOpenBlank == '1')
                            {
                                openNewPage(jumpUrl);
                            }else
                            {
                                location.href = jumpUrl;
                            }

                        }
                    }
                }
            }
        }
    });
   }
}

function debug(str){
    if(window.console){
        console.debug(str);
        return;
    }

    var d = $('#debug');
    if(d.length == 0){
        $(document.body).append('<div id="debug"></div>');
        d = $('#debug');
    }

    var item = $('<div></div>').text(str);
    d.append(item);
}
//compare date
function compareDate(date){
    var newDate = date.split("-");
    var dateY = newDate[0];
    var dateM = newDate[1];
    var dateD = newDate[2];
    return Date.parse(dateM + "/" + dateD + "/" + dateY);
}

function checkBankCardNo(bankno){
    var lastNum=bankno.substr(bankno.length-1,1);

    var first15Num=bankno.substr(0,bankno.length-1);
    var newArr=new Array();
    for(var i=first15Num.length-1;i>-1;i--){   
        newArr.push(first15Num.substr(i,1));
    }
    var arrJiShu=new Array();  
    var arrJiShu2=new Array(); 

    var arrOuShu=new Array();  
    for(var j=0;j<newArr.length;j++){
        if((j+1)%2==1){
            if(parseInt(newArr[j])*2<9)
                arrJiShu.push(parseInt(newArr[j])*2);
            else
                arrJiShu2.push(parseInt(newArr[j])*2);
        }
        else 
            arrOuShu.push(newArr[j]);
    }

    var jishu_child1=new Array();
    var jishu_child2=new Array();
    for(var h=0;h<arrJiShu2.length;h++){
        jishu_child1.push(parseInt(arrJiShu2[h])%10);
        jishu_child2.push(parseInt(arrJiShu2[h])/10);
    }       

    var sumJiShu=0; 
    var sumOuShu=0; 
    var sumJiShuChild1=0; 
    var sumJiShuChild2=0; 
    var sumTotal=0;
    for(var m=0;m<arrJiShu.length;m++){
        sumJiShu=sumJiShu+parseInt(arrJiShu[m]);
    }

    for(var n=0;n<arrOuShu.length;n++){
        sumOuShu=sumOuShu+parseInt(arrOuShu[n]);
    }

    for(var p=0;p<jishu_child1.length;p++){
        sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1[p]);
        sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2[p]);
    }     
    //计算总和
    sumTotal=parseInt(sumJiShu)+parseInt(sumOuShu)+parseInt(sumJiShuChild1)+parseInt(sumJiShuChild2);

    //计算Luhm值
    var k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10;       
    var luhm= 10-k;

    if(lastNum==luhm){
        return true;
    }
    else{
        return false;
    }       
}
function is_array(test)  
{  
    if(typeof test == 'object' && typeof test.sort == 'function' && typeof test.length == 'number')  
    {  
        return true;  
    }  
    else  
    {  
        return false;  
    }  
}
function gaClickSta(strEvent)
{
}
function ignoreSpaces(string) {
    var temp = "";
    string = '' + string;
    splitstring = string.split(" ");
    for(i = 0; i < splitstring.length; i++)
        temp += splitstring[i];
    return temp;
}
function  checkIAgree(){
    $("#tip_affirm").css("display","none");   
}

function check_all(obj){$("input." + obj).each(function(i){this.checked = true;});}
function check_no(obj){$("input." + obj).each(function(i){this.checked = false;});}
function check_fan(obj){$("input." + obj).each(function(i){this.checked = this.checked == true ? false : true;});}
function check_str(obj){str = new String();$("input." + obj).each(function(i){str = this.checked == true ? str + this.value + "," : str;});str = str.substr("0", str.lastIndexOf(","));return str;}

function keyFocus(iptName,defValue)
{

    var _text = $("#"+iptName).val();

    if(_text == defValue)
    {
        $("#"+iptName).attr("value", '');
        $("#"+iptName).attr("style",'color:#555');
    }   
}
function keyBlur(iptName,defValue)
{   
    var _text = $("#"+iptName).val();  
    if(_text == '')
    {
        $("#"+iptName).attr("value",defValue);
        $("#"+iptName).attr("style",'color:#999');
    }
}

function getCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if(endstr == -1) {
        endstr = document.cookie.length;
    }
    return document.cookie.substring(offset, endstr);
}
function getCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    var j = 0;
    while(i < clen) {
        j = i + alen;
        if(document.cookie.substring(i, j) == arg){
            return getCookieVal(j);
        }
        i = document.cookie.indexOf(" ", i) + 1;
        if(i === 0){
            break;
        }
    }
    return '';
}
function deleteCookie(name,path,domain) {
    var exp = new Date();
    var cval = getCookie(name);
    exp.setTime(exp.getTime() - 1);
    document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString() +
        ((domain === null) ? "" : ("; domain=" + domain)) +
        ((path === null) ? "" : ("; path=" + path)) ;
}

function deleteCookie4Search(name,path,domain) {
    var exp = new Date();
    var cval = getCookie(name);
    exp.setTime(exp.getTime() - 1);
    document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString() +
        ((domain === null) ? "" : ("; domain=" + domain)) +
        ((path === null) ? "" : ("; path=" + path)) ;
}

function setCookie(name, value) {
    var argv = setCookie.arguments;
    var argc = setCookie.arguments.length;
    var exp = (argc > 2) ? argv[2] : 90;
    var path = (argc > 3) ? argv[3] : null;
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5] : false;
    var expires = new Date();
    deleteCookie(name,path,domain);
    if(exp < 365) {
        expires.setTime(expires.getTime() + (exp*24*60*60*1000));
    }else{
        expires.setTime(expires.getTime() + (exp));
    }
    document.cookie = name + "=" + value +
        "; expires=" + expires.toGMTString() +
        ((domain === null) ? "" : ("; domain=" + domain)) +
        ((path === null) ? "" : ("; path=" + path)) +
        ((secure === true) ? "; secure" : "");
}
function orderDetail(lodgeId,sameRoomNum,startDate,endDate)
{
       content = '';
        $.ajax({
            type: "get",
            url: XZWebUrlWriter.getAjax_GetBookLodgeUnitDetailUrl(lodgeId,sameRoomNum,startDate,endDate),
            async:false,
            success: function(data) {
                content = data;
            }
        });
    $('#lodgeUnitPriceDetail').dialog({
        width : 750,
        //height:520,
        resizable: false,
        modal:false,
        position: "center"
    });
    if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) 
    { 
        $('#lodgeUnitPriceDetail').dialog({
            bgiframe: true,
            height:520
        });
    } 

    $('#lodgeUnitPriceDetail').html(content);
    $('#lodgeUnitPriceDetail').dialog("open");
    $('.ui-dialog-titlebar').hide();
    $('.ui-widget-content').css('border','0px');
}

function priceOrder()
{
    var bookorderid = $("#bookOrderId").val();
    orderPriceDetail(bookorderid);
}

function orderPriceDetail(bookOrderId,url)
{
    var url = (typeof url == "undefined") ? XZWebUrlWriter.getAjax_GetOrderPriceDetailUrl(bookOrderId) : url;
     content = '';
        $.ajax({
            type: "get",
            url: url, 
            async:false,
            success: function(data) {
                content = data;
            }
        });
    $('#lodgeUnitPriceDetail').dialog({
        width : 750,
        resizable: true,
        modal:false,
        position: "center"
    });
    if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) 
    { 
        $('#lodgeUnitPriceDetail').dialog({
            height:520
        });
    }
    $('#lodgeUnitPriceDetail').html(content);
    $('#lodgeUnitPriceDetail').dialog("open");
    $('.ui-dialog-titlebar').hide();
    $('.ui-widget-content').css('border','0px');
}

function dateTransform(date)
{
    var newDate = new Date(date);
    var dateY = newDate.getFullYear();
    var dateM = getFullDate(newDate.getMonth()+1);
    var dateD = getFullDate(newDate.getDate());
    return dateY + "-" + dateM + "-" + dateD;
}
function getSubCHString(value,len)
{
    if(value.length <= len)
        return value;
    var strlen = 0; 
    var strnum = 0;
    var str = "";
    for(var i = 0;i < value.length;i++)
    {
        strlen ++;
        if(value.charCodeAt(i) <= 128)
        {
            strnum++;
        }
        if(strnum > len)
        {
            strnum = len;
        }
        str += value.charAt(i);
        if(strlen >= (len + strnum)){ 
            return str + '...';
        }
    }
    return str + '...';
}
$(function(){
    window.setTimeout(getLayzeLoadData,1000);
})
function getLayzeLoadData()
{
    var layzeloadObj = $('layzeload');
    if(layzeloadObj.length<0)
    {
        return false;
    }
    layzeloadObj.each(function(){
        var turl = encodeURIComponent($(this).attr('turl'));
        var memkey = $(this).attr('memkey');
        var memtimeout = $(this).attr('memtimeout');
        var jsexecafterload = $(this).attr('jsexecafterload');
        var id = 'load_'+$(this).attr('key');

        $.ajax({
            type:"get",
            url: XZWebUrlWriter.getAjax_GetLazyInfoUrl(memkey,memtimeout,turl), 
            success:function(data){
                $("#"+id).html(data);
                if (jsexecafterload)
                    eval(jsexecafterload);
            }
        })
    })
    return false;
}
function isIe6()
{
    if($.browser.msie && $.browser.version=="6.0")
    {
        return true;
    }
    return false;
}
function changeDate(startDate,days) 
{
    // 参数表示在当前日期下要增加的天数
    var now = new Date(startDate.replace(/-/g, "/"));
    // + 1 代表日期加，- 1代表日期减
    now.setDate((now.getDate() + 1 * days));
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    return year + '-' + month + '-' + day;
}
function openNewPage(url)
{
    var a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("target", "_blank");
    a.setAttribute("id", "openwin");
    document.body.appendChild(a);
    a.click();
}
function ajaxHandleCall(req,callback)
{
    if(!req || "object" !== typeof req)
    {
        return false;    
    }

    $.ajax({
        tyep : req.type,
        url : req.url,
        data : req.data + '&_t=' + new Date().getTime(),
        success : function(data){
            if(data)
            {
                callback(data);    
            }
        }
    });
}
function isDefined(property) 
{
    return 'undefined' !== typeof property;
}
function clickEvent(urlTracker,pageType)
{
    if(!isDefined(pageType) && !isDefined(urlTracker) && !isDefined(_paq))
        return false; 

    urlTracker = 'http://www.trackerlink.com/'+pageType+'/'+urlTracker;
    _paq.push(['trackLink', urlTracker, 'link']);
}
function searchEvent(pageType)
{
    var defaultStartDate = $('#defaultstartdate').val();
    var defaultEndDate = $('#defaultenddate').val();
    var startDate = $('#startdate').val();
    var endDate = $('#enddate').val();
    var url="defaultstartdate="+defaultStartDate+"&defaultenddate="+defaultEndDate+"&startdate="+startDate+"&enddate="+endDate;
    //clickEvent(url, pageType);
}
function flashChecker()
{
    var hasFlash=0;         //是否安装了flash
    var flashVersion=0; //flash版本
    var isIE=/*@cc_on!@*/0;      //是否IE浏览器

    if(isIE)
    {
        var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash'); 
        if(swf) {
            hasFlash=1;
            VSwf=swf.GetVariable("$version");
            flashVersion=parseInt(VSwf.split(" ")[1].split(",")[0]); 
        }
    }else{
        if (navigator.plugins && navigator.plugins.length > 0)
        {
            var swf=navigator.plugins["Shockwave Flash"];
            if (swf)
            {
                hasFlash=1;
                var words = swf.description.split(" ");
                for (var i = 0; i < words.length; ++i)
                {
                    if (isNaN(parseInt(words[i]))) continue;
                    flashVersion = parseInt(words[i]);
                }
            }
        }
    }
    return {f:hasFlash,v:flashVersion};
}
function initDisplayLodgeUnitIndex(luidAndIndex)
{
    clickEvent('luidAndIndex_'+luidAndIndex,'search');
}
function setDialogHeight(dialogId)
{
    var dialogHeight = $("#"+dialogId).height();
    $('#'+dialogId).css({marginTop:'-'+dialogHeight/2+'px'});
    $('.ui-dialog-titlebar').hide();
}
function closeDialog(dialogId)
{
    $("#"+dialogId).dialog("close");
    return false;
}
function dateDiff(date1,date2)
{
    return parseInt((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)); 
}
function CloseWebPage(){  
    if (navigator.userAgent.indexOf("MSIE") > 0) {  //IE浏览器
        if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {  
            window.opener = null; window.close();  
        }  
        else {  
            window.open('', '_top'); window.top.close();  
        }  
    }  
    else if (navigator.userAgent.indexOf("Firefox") > 0) {  //火狐浏览器
        window.location.href = 'about:blank ';  
    }  
    else {     //其他浏览器
        window.opener = null;   
        window.open('', '_self', '');  
        window.close();  
    }  
}  

function chkstrlen(str) {     //检查输入的真实姓名的长度
    var strlen = 0;
    for(var i = 0;i < str.length; i++) {
        if(str.charCodeAt(i) > 255) { //如果是汉字，则字符串长度加2
            strlen += 2;
        }
        else { 
            strlen++;
        }
    }
    return   strlen;
}
function scrollPage(obj)
{
    var windowHeight = $(window).height();
    var offsetTop = parseInt(obj.offset().top);
    var scrollTop = $(document).scrollTop();
    var suggestionHeight = obj.height();
    if( (windowHeight - (offsetTop - scrollTop)) - suggestionHeight < 0 ) {
        var newTopHeight = scrollTop + (suggestionHeight + 10 ) - (windowHeight - (offsetTop - scrollTop)); 
        $('html,body').animate({ scrollTop: newTopHeight }, 300);
    }

}

 
 function getShortWeekNameByDate(date)
{
    var week = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
    return week[new Date(date).getDay()];
}
function getDateDiff(sDate1, sDate2){
    var sDate = new Date(sDate1.replace(/-/g, "/"));
    var eDate = new Date(sDate2.replace(/-/g, "/"));
    var timediff = eDate.getTime() - sDate.getTime();
    var daydiff = parseInt(timediff/1000/60/60/24);
    return daydiff;
}  
function compareBirthDate(date1,date2)
{
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
 
 var numToStr = function(n,num) {
    numStr = num.toString();
    var l = numStr.length;
    for (var i=1; i<= n - l;++i) {
        numStr = '0'+numStr;
    }
    return numStr;
}
try{
    var calendarV2 = function(e, options) {
        options = options || {};

        this.classWeek   = options.classWeek || 'calendar-week';
        this.classTitle   = options.classTitle || 'calendar-title';
        this.classMonth   = options.classMonth || 'calendar-month';
        this.classDay   = options.classDay || 'calendar-day';
        this.classDayBase   = options.classDayBase || 'line2';
        this.classDayShow   = options.classDayShow || 'show-date';
        this.classDaySelect = options.classDaySelect || 'cal_select';
        this.classDayPass = options.classDayPass || 'old';
        this.classDayUnSelectAble = options.classDayUnSelectAble || 'unselectable';
        this.classPink = options.classPink || 'pink';
        this.prependHtml   = options.prependHtml || '';
        this.today   = options.today || new Date();

        this.fillDayInfo = options.fillDayInfo || null;
        this.getDayInfo  = options.getDayInfo || null;

        this.checkState = 0;
        this.doColor = false;

        this.checkIn      = options.checkIn || null;
        this.checkOut     = options.checkOut || null;
        this.checkDayChange = options.checkDayChange || function(){};
        this.setDay = new Date();

        this.dateArray      = [];
        this.monthArray     = [];
        this.calenderHTML   = '';
        this.clearDateHtml   = '';
        this.preMonthHtml   = '';
        this.nextMonthHtml   = '';
        this.totalMohth     = 2;
        this.firstGray = false;

        this.e = typeof(e) == 'object' ? e : $(e);

        this.init();

        return(this);
    }
    calendarV2.prototype.init = function() {
        this.dateArray      = [];
        this.monthArray     = [];
        this.calenderHTML   = '';
        this.checkState = 0;
        this.gengerateCalArray().gengerateCalHtml().fillCalender();
        this.bindEvent();
        return(this);
    }
    calendarV2.prototype.preMonth = function() {
        if((this.today.getMonth() == this.firstDate.m) && (this.today.getFullYear() == this.firstDate.y) ){
            return false;
        }
        else {
            this.setDay.setDate(1);
            (this.firstDate.m == 0) ? (this.setDay.setMonth(11)) : this.setDay.setMonth(this.firstDate.m-1);
            (this.firstDate.m == 0) ? (this.setDay.setFullYear(this.firstDate.y-1)) : this.setDay.setFullYear(this.firstDate.y);
            this.dateArray      = [];
            this.monthArray     = [];
            this.calenderHTML   = '';
            this.checkState = 0;
            this.gengerateCalArray().gengerateCalHtml().fillCalender();
            this.bindEvent();
            return(this);
        }
    }
    calendarV2.prototype.nextMonth = function() {
        this.setDay.setDate(1);
        (this.lastDate.m == 0) ? this.setDay.setMonth(11) : (this.setDay.setMonth(this.lastDate.m-1));
        (this.lastDate.m == 0) ? this.setDay.setFullYear(this.lastDate.y-1) :this.setDay.setFullYear(this.lastDate.y);
        this.dateArray      = [];
        this.monthArray     = [];
        this.calenderHTML   = '';
        this.checkState = 0;
        this.gengerateCalArray().gengerateCalHtml().fillCalender();
        this.bindEvent();
        return(this);
    }
    calendarV2.prototype.setYmd = function(y,m,d, isDisplay) {
        var cdate = new Date();
        this.setDay = new Date();
        m = isDisplay ? m - 1 : m;
        cdate.setDate(1);
        cdate.setMonth(m);
        cdate.setFullYear(y);
        cdate.setDate(d);
        return cdate;
    }
    calendarV2.prototype.getYmd = function(s) {
        //return s.getFullYear() + '-' + (s.getMonth() + 1) + '-' + s.getDate();// + '  ' + s.getDay();
        return s.getFullYear() + '-' + numToStr(2,s.getMonth() + 1) + '-' + numToStr(2,s.getDate());// + '  ' + s.getDay();
    }

    calendarV2.prototype.gengerateCalArray = function() {
        //this.dateArray = [];
        for (var i = 0; i <= this.totalMohth; i++) {
            var toMonth = this.setDay.getMonth();
            for (var j = 1; j <= 37; j++) {
                this.setDay.setDate(j);
                if (this.setDay.getMonth() != toMonth){
                    break;
                }
                this.dateArray.push({y:this.setDay.getFullYear(),m:this.setDay.getMonth(),d:this.setDay.getDate(),w:this.setDay.getDay()});
            };
        };
        this.firstDate = this.dateArray[0];
        this.lastDate  = this.dateArray[this.dateArray.length -1];
        return(this);
    }

    calendarV2.prototype.gengerateCalHtml = function() {
        this.calenderHTML = '';
        this.monthArray = [];
        var m = -1;
        var len = this.dateArray.length - 1;
        for (var i = 0; i <= len; i++) {
            var day = this.dateArray[i];
            var cc = this.setYmd(day.y,day.m,day.d,false);
            if (m == -1) m = day.m;
            if (m != day.m) {
                this.calenderHTML += this.genMonth();
                this.monthArray = [];
                m = day.m;
            }
            this.monthArray.push(day);
        };
        return(this);
    }

    calendarV2.prototype.genDate = function(day) {
        var writeDay = this.setYmd(day.y,day.m,day.d,false);
        var old = '';
        var unselectable = '';
        var checkDay = '';
        var isToday = this.getYmd(writeDay) == this.getYmd(this.today) ? 1 : 0;
        var dayText = isToday ? '今天' : day.d;
        if (writeDay < this.today) old = this.classDayPass;
        if (writeDay>=this.today && writeDay < this.checkIn && this.checkOut == null) unselectable = this.classDayUnSelectAble;
        if (    (this.checkIn && writeDay <= this.checkOut && writeDay > this.checkIn) || 
                (this.checkOut && this.getYmd(writeDay) == this.getYmd(this.checkOut)) ||  
                (this.checkIn && this.getYmd(writeDay) == this.getYmd(this.checkIn))
           ) {
               checkDay = this.classDaySelect;
           } 
        if (this.checkIn && this.getYmd(writeDay) == this.getYmd(this.checkIn)) dayText = '入住';
        if (this.checkOut && this.getYmd(writeDay) == this.getYmd(this.checkOut)) dayText = '离开';

        if(old) {
            var li_classes = [this.classDayBase, old, checkDay];
        }
        else if(unselectable) {
            var li_classes = [this.classDayBase, unselectable];
        }
        else {
            var li_classes = [this.classDayBase, this.classDayShow, checkDay];
        }
        var li_html =  '<li class="'+ li_classes.join(' ') +'" d="'+day.d+'" m="'+day.m+'" y="'+day.y+'" w="'+day.w+'" today="'+isToday+'" ymd="'+this.getYmd(writeDay)+'" ><span>'+ dayText +'</span>';
        var new_html = '';
        if ( this.fillDayInfo) new_html = this.fillDayInfo(li_html);
        return new_html == '' ? li_html : new_html;
    }

    calendarV2.prototype.genMonth = function() {
        var dayHtml = '';
        var len = this.monthArray.length - 1;
        for (var i = 0; i <= len ; i++) {
            var day = this.monthArray[i];
            if (i==0) dayHtml+=this.genEmptyDay(day.w);
            var dayHtml = dayHtml + this.genDate(day);
        };
        dayHtml+=this.genEmptyDay(6 - day.w);
        var preHtml = 
            '<div class="'+this.classMonth+'">'+
            '<div class="'+this.classTitle+'">'+
            '<h2 cury="'+day.y+'" curm="'+(day.m + 1)+'">'+day.y+'-'+(day.m + 1)+'</h2>'+
            '</div>'+
            '<ul class="'+this.classWeek+'">'+
            '<li class="pink">日</li>' +
            '<li>一</li>' +
            '<li>二</li>' +
            '<li>三</li>' +
            '<li>四</li>' +
            '<li>五</li>' +
            '<li class="pink">六</li>' +
            '</ul>';
        var afterHtml = '</div>';
        return preHtml + '<ul class="'+this.classDay+'">'+dayHtml+'</ul>' + afterHtml;
    }

    calendarV2.prototype.genEmptyDay = function(num) {
        var emptyday = '';
        for (var i = 1; i<= num; i++) {
            emptyday+='<li class="'+this.classDayPass+' '+this.classDayBase+'"></li>';
        }
        return emptyday;
    }

    calendarV2.prototype.fillCalender = function() {
        this.e.html(this.prependHtml + this.calenderHTML + this.clearDateHTML() + this.preMonthHTML() + this.nextMonthHTML());
        this.e.find('.' + this.classMonth).first().addClass('paddingR10');
        this.e.find('.' + this.classMonth).first().children('.' + this.classTitle).addClass('width_274');
        return(this);
    }
    calendarV2.prototype.clearSelect = function() {
        var _this = this;
        this.e.find('.checkedday,' + '.' + this.classDaySelect).each(function(){
            if ($(this).attr('today') == '1') {
                $(this).find('span').html('今天');
            } else {
                $(this).find('span').html($(this).attr('d'));
            }
            if (_this.fillDayInfo) _this.fillDayInfo($(this));

        })
        .removeClass('checkedday');
        this.e.find('.' + this.classDaySelect).removeClass(this.classDaySelect);
        this.e.find('.' + this.classDayUnSelectAble).addClass(this.classDayShow).removeClass(this.classDayUnSelectAble);
        $("#clearSelect").removeClass(_this.classPink);
        if(this.checkIn && this.checkOut) {
            this.e.hide();
        }
        this.checkOut = null;
        this.checkIn  = null;
        this.firstGray = false;
        return(this);
    }

    calendarV2.prototype.bindEvent = function() {
        var _this = this;

        this.e.find('.' + this.classDayBase).on('click', function(){
            if ($(this).hasClass(_this.classDayPass) || $(this).hasClass(_this.classDayUnSelectAble)) return false;
            if ($(this).hasClass('cal_noRoom')) return false;
            if ($(this).hasClass(_this.classDaySelect) && $('.checkedday').index(this) == 0) return false;
            var thisday = $(this).find('span');
            if (!_this.checkIn && !_this.checkOut) {
                $('.checkedday').removeClass('checkedday');
                $(this).addClass('checkedday');
            } else if (_this.checkIn && !_this.checkOut) {
                $(this).addClass('checkedday');
            } else if (_this.checkIn && _this.checkOut) {
                _this.clearSelect();
                _this.e.show();
                $(this).addClass('checkedday');
            } else if (!_this.checkIn && _this.checkOut) {
                _this.clearSelect();
            }
            $("#clearSelect").addClass(_this.classPink);
            $(this).toggleClass(_this.classDaySelect);
            _this.refreshCheckState();
        })
        return(this);
    }
    calendarV2.prototype.refreshCheckState = function() {
        _this = this;
        var checkedday = this.e.find('.checkedday');
        var checkLast = checkedday.last();
        checkLast.find('span').html('离开');

        if(!_this.checkIn) {
            var checkFirst = checkedday.first();
            checkFirst.find('span').html('入住');
            var enterday = checkFirst.attr('ymd');
        }

        if (_this.fillDayInfo) {
            this.fillDayInfo(checkLast);
            if(!_this.checkIn) {
                this.fillDayInfo(checkFirst);
            }
        }

        var leaveday = checkLast.attr('ymd');
        this.doColor = leaveday == enterday ? false : true;

        doColorState = false;

        if (!_this.checkIn && checkFirst.length) {
            this.checkIn = this.setYmd(checkFirst.attr('y'),checkFirst.attr('m'),checkFirst.attr('d'));
        }
        if(leaveday != enterday) {
            this.checkOut = this.setYmd(checkLast.attr('y'),checkLast.attr('m'),checkLast.attr('d'));
        }
        this.e.find('.' + this.classDayBase).not('.old').each(function(){
            var liYmd = $(this).attr('ymd');
            liYmd = new Date(liYmd.replace(/-/g, "/"));
            if (_this.doColor) {
                if(!_this.checkIn) {
                    if ($(this).hasClass(_this.classDaySelect)) doColorState = !doColorState;
                    if (doColorState){
                        $(this).addClass(_this.classDaySelect);
                        $(this).addClass('checkedday');
                        if (_this.getDayInfo) _this.getDayInfo($(this));
                    } 
                }
                else {
                    if( (_this.getYmd(liYmd) >= _this.getYmd(_this.checkIn))  && ( _this.getYmd(liYmd) <= _this.getYmd(_this.checkOut)) ) {
                        $(this).addClass(_this.classDaySelect);
                        $(this).addClass('checkedday');
                        if (_this.getDayInfo) _this.getDayInfo($(this));
                    }
                }
            }
            if(_this.getYmd(liYmd) < _this.getYmd(_this.checkIn) ) {
                $(this).addClass(_this.classDayUnSelectAble);
                $(this).removeClass(_this.classDayShow);
            }
            if (_this.fillDayInfo) _this.fillDayInfo($(this));
        })
        this.checkDayChange();
        return(this);
    }
    calendarV2.prototype.resetBeforeCheckInState = function() {
        this.e.find('.' + this.classDayUnSelectAble).addClass(this.classDayShow).removeClass(this.classDayUnSelectAble);
    }
    calendarV2.prototype.clearDateHTML = function() {
        if(this.checkIn){
            var clearHtml = '<div class="clear_date ' + this.classPink + '" id="clearSelect">清空日期 </div>';
        }
        else {
            var clearHtml = '<div class="clear_date" id="clearSelect">清空日期 </div>';
        }
        return clearHtml;
    }
    calendarV2.prototype.preMonthHTML = function() {
        if((this.today.getMonth() == this.firstDate.m) && (this.today.getFullYear() == this.firstDate.y)) {
            return '';
        }
        else {
            var preMonth = '<span class="cal_pre" id="preMonth"></span>';
            return preMonth;
        }
    }
    calendarV2.prototype.nextMonthHTML = function() {
        var nextMonth = '<span class="cal_next" id="nextMonth"></span>';
        return nextMonth;
    }
}
catch(e){console.log(e);}
 
 function blurImageCode(phone)
{
    var checkcode = $('#imagecode').val();
    var flag = true;
    $('#tip_imagecode').html('').hide();
    if (checkcode == '') {
        $('#tip_imagecode').html('请输入验证码').show();
        return false;
    } else if (checkcode.length !=4 ) {
        $('#tip_imagecode').html('验证码不正确').show();
        $('#img_imagecode').attr("src",XZWebUrlWriter.getAjax_GetPicCheckCodeShowUrl());
        return false;
    }
    else {
    $.ajax({
        type:'get',
        url : XZWebUrlWriter.getAjax_Front_PicCheckCodeVerify(checkcode,phone),
        async: false,
        success:function(data){
            var dataObj=eval("("+data+")");
            if (dataObj && dataObj.status=='1') {
                $('#tip_imagecode').html('').hide();
                flag = true;
                return true;
            } else {
                $('#tip_imagecode').html(dataObj.errmsg).show();
                $('#img_imagecode').attr("src",XZWebUrlWriter.getAjax_GetPicCheckCodeShowUrl());
                flag = false;
                return false;
            }
        }
    });
    return flag;
    }
}
function blurImageCodeInfo(phone)
{
    var checkcode = $('#imagecodeInfo').val();
    var flag = true;
    $('#tip_imagecode').html('').hide();
    if (checkcode == '') {
        $('#tip_imagecode').html('请输入验证码').show();
        return false;
    } else if (checkcode.length !=4 ) {
        $('#tip_imagecode').html('验证码不正确').show();
        $('#img_imagecodeInfo').attr("src",XZWebUrlWriter.getAjax_GetPicCheckCodeShowUrl());
        return false;
    }
    else {
    $.ajax({
        type:'get',
        url : XZWebUrlWriter.getAjax_Front_PicCheckCodeVerify(checkcode,phone),
        dataType : 'json',
        async: false,
        success:function(dataObj){
            if (dataObj && dataObj.status=='1') {
                $('#tip_imagecode').html('').hide();
                flag = true;
                return true;
            } else {
                $('#tip_imagecode').html(dataObj.errmsg).show();
                $('#img_imagecodeInfo').attr("src",XZWebUrlWriter.getAjax_GetPicCheckCodeShowUrl());
                flag = false;
                return false;
            }
        }
    });
    return flag;
    }
}

function resetCheckcode(imageID,imagecode) 
{ 
    if(imageID == '' || typeof(imageID)=='undefined')
        imageID='img_imagecode';

    if(imagecode == '' || typeof(imagecode)=='undefined')
        imagecode='imagecode';

    $('#'+imageID).attr("src",XZWebUrlWriter.getAjax_GetPicCheckCodeShowUrl());
    $('#'+imagecode).val('');   
    return false;
}

 
 var defaultText = '入住离开日期';
var defaultStartText = '选择入住日期';
var defaultEndText = '选择离开日期';
try{

    var execCalendar = function(input,option){
        var inputObj = $(input);
        var autoSearch = option.autoSearch || null;
        var calendar = new calendarV2('#calendar-box', {
            checkDayChange:function(){
                if(this.checkIn){
                    var startMonth = (this.checkIn.getMonth() < 9) ? '0'+ (this.checkIn.getMonth()+1) : (this.checkIn.getMonth()+1);
                    var startDate = (this.checkIn.getDate() < 10) ? '0'+ (this.checkIn.getDate()) : this.checkIn.getDate();
                    $('#startdate').val(this.checkIn.getFullYear() + '-' + startMonth + '-' + startDate);
                    $('#enddate').val('');
                   inputObj.val(defaultEndText); 
                }
                if(this.checkOut){
                    var endMonth = (this.checkOut.getMonth() < 9) ? '0'+ (this.checkOut.getMonth()+1) : (this.checkOut.getMonth()+1);
                    var endDate = (this.checkOut.getDate() < 10) ? '0'+ (this.checkOut.getDate()) : this.checkOut.getDate();
                    $('#enddate').val(this.checkOut.getFullYear() + '-' + endMonth + '-' + endDate);
                   inputObj.val(this.checkIn.getFullYear() + '-' + (this.checkIn.getMonth()+1) + '-' + this.checkIn.getDate() + '至' + this.checkOut.getFullYear() + '-' + ( this.checkOut.getMonth()+1) + '-' + this.checkOut.getDate()); 
                   this.e.hide();
                $('.icon_searchandremove').show();
                   if(autoSearch) {
                    /*
                       var city = $("#selectcitydomain").val(); 
                       var jumpUrl = "http://" + city + "." + topLevelDomain + "/?startDate=" + $("#startdate").val() + "&endDate=" + $("#enddate").val() ;
                       location.href = jumpUrl;
                    */
                       $('#filter_confirm').click();
                   }
                }
                scrollPage($('#calendar-box'));
            },
            checkIn: $('#startdate').val() ? new Date($('#startdate').val().replace(/-/g, "/")) : null,
            checkOut: $('#enddate').val() ? new Date($('#enddate').val().replace(/-/g, "/")) : null
        })
        $('#calendar-box').unbind('click');
        $('#calendar-box').on('click','#clearSelect',function(){
            calendar.clearSelect();
            $('#startdate').val('');
            $('#enddate').val('');
            if(autoSearch&&$('#tmpenddate').val()&&$('#tmpstartdate').val()) {
                $('#deldatetime').click();
                $('#filter_confirm').click();
                return false;
            }
            if($('#calendar-box').is(':visible')) {
                inputObj.val(defaultStartText); 
            }
            else {
                inputObj.val(defaultText); 
            }
        })
        $("#calendar-box").on('click','#preMonth',function(){
            calendar.preMonth();
            scrollPage($('#calendar-box'));
        })
        $("#calendar-box").on('click','#nextMonth',function(){
            calendar.nextMonth();
            scrollPage($('#calendar-box'));
        })
        inputObj.bind('click focus',function(){
            if($('#startdate').val() == '' && $('#enddate').val() == ''){
                inputObj.val(defaultStartText);
            }
            if($('#startdate').val() != '' && $('#enddate').val() != ''){
                calendar.resetBeforeCheckInState();
            }
            calendar.e.show();
            scrollPage($('#calendar-box'));
        })
        inputObj.bind('blur',function(){
            //calendar.e.hide();
        })
    }
    /*
       var transToReadableDate = function(dateobj) {
       return numToStr(2,dateobj.getMonth() + 1) + '-' + numToStr(2,dateobj.getDate());
       }
       if (lastCheckedDay) {
       calender.checkDayChange();
       $('#checkin-checkout').html( transToReadableDate(calender.checkIn) + ' 至 ' + transToReadableDate(calender.checkOut) );
       $('#total-days-show').text('共' + $('#total-days').text() + '晚');
       }
       $('#date-selected').on(EVENT_TAP, function(e){
       if (!calender.checkIn) {
       xz.ui.message('请选择入住日期');
       return;
       } 
       if (!calender.checkOut)  {
       xz.ui.message('请选择离开日期');
       return;
       }
       $('#backto-index').trigger('click');
       $('#checkin-checkout').html( transToReadableDate(calender.checkIn) + ' 至 ' + transToReadableDate(calender.checkOut) );
       $('#total-days-show').text('共' + $('#total-days').text() + '晚');
       });
       */
    $('#calendar_btn_s').click(function(){
            $("#startenddate").click();
    })
}
catch(e){}
 
 /* Respond.js: min/max-width media query polyfill. (c) Scott Jehl. MIT Lic. j.mp/respondjs  */
(function( w ){

	"use strict";

	//exposed namespace
	var respond = {};
	w.respond = respond;

	//define update even in native-mq-supporting browsers, to avoid errors
	respond.update = function(){};

	//define ajax obj
	var requestQueue = [],
		xmlHttp = (function() {
			var xmlhttpmethod = false;
			try {
				xmlhttpmethod = new w.XMLHttpRequest();
			}
			catch( e ){
				xmlhttpmethod = new w.ActiveXObject( "Microsoft.XMLHTTP" );
			}
			return function(){
				return xmlhttpmethod;
			};
		})(),

		//tweaked Ajax functions from Quirksmode
		ajax = function( url, callback ) {
			var req = xmlHttp();
			if (!req){
				return;
			}
			req.open( "GET", url, true );
			req.onreadystatechange = function () {
				if ( req.readyState !== 4 || req.status !== 200 && req.status !== 304 ){
					return;
				}
				callback( req.responseText );
			};
			if ( req.readyState === 4 ){
				return;
			}
			req.send( null );
		},
		isUnsupportedMediaQuery = function( query ) {
			return query.replace( respond.regex.minmaxwh, '' ).match( respond.regex.other );
		};

	//expose for testing
	respond.ajax = ajax;
	respond.queue = requestQueue;
	respond.unsupportedmq = isUnsupportedMediaQuery;
	respond.regex = {
		media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
		keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
		comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
		urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
		findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
		only: /(only\s+)?([a-zA-Z]+)\s?/,
		minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
		maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
		minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
		other: /\([^\)]*\)/g
	};

	//expose media query support flag for external use
	respond.mediaQueriesSupported = w.matchMedia && w.matchMedia( "only all" ) !== null && w.matchMedia( "only all" ).matches;

	//if media queries are supported, exit here
	if( respond.mediaQueriesSupported ){
		return;
	}

	//define vars
	var doc = w.document,
		docElem = doc.documentElement,
		mediastyles = [],
		rules = [],
		appendedEls = [],
		parsedSheets = {},
		resizeThrottle = 30,
		head = doc.getElementsByTagName( "head" )[0] || docElem,
		base = doc.getElementsByTagName( "base" )[0],
		links = head.getElementsByTagName( "link" ),

		lastCall,
		resizeDefer,

		//cached container for 1em value, populated the first time it's needed
		eminpx,

		// returns the value of 1em in pixels
		getEmValue = function() {
			var ret,
				div = doc.createElement('div'),
				body = doc.body,
				originalHTMLFontSize = docElem.style.fontSize,
				originalBodyFontSize = body && body.style.fontSize,
				fakeUsed = false;

			div.style.cssText = "position:absolute;font-size:1em;width:1em";

			if( !body ){
				body = fakeUsed = doc.createElement( "body" );
				body.style.background = "none";
			}

			// 1em in a media query is the value of the default font size of the browser
			// reset docElem and body to ensure the correct value is returned
			docElem.style.fontSize = "100%";
			body.style.fontSize = "100%";

			body.appendChild( div );

			if( fakeUsed ){
				docElem.insertBefore( body, docElem.firstChild );
			}

			ret = div.offsetWidth;

			if( fakeUsed ){
				docElem.removeChild( body );
			}
			else {
				body.removeChild( div );
			}

			// restore the original values
			docElem.style.fontSize = originalHTMLFontSize;
			if( originalBodyFontSize ) {
				body.style.fontSize = originalBodyFontSize;
			}


			//also update eminpx before returning
			ret = eminpx = parseFloat(ret);

			return ret;
		},

		//enable/disable styles
		applyMedia = function( fromResize ){
			var name = "clientWidth",
				docElemProp = docElem[ name ],
				currWidth = doc.compatMode === "CSS1Compat" && docElemProp || doc.body[ name ] || docElemProp,
				styleBlocks	= {},
				lastLink = links[ links.length-1 ],
				now = (new Date()).getTime();

			//throttle resize calls
			if( fromResize && lastCall && now - lastCall < resizeThrottle ){
				w.clearTimeout( resizeDefer );
				resizeDefer = w.setTimeout( applyMedia, resizeThrottle );
				return;
			}
			else {
				lastCall = now;
			}

			for( var i in mediastyles ){
				if( mediastyles.hasOwnProperty( i ) ){
					var thisstyle = mediastyles[ i ],
						min = thisstyle.minw,
						max = thisstyle.maxw,
						minnull = min === null,
						maxnull = max === null,
						em = "em";

					if( !!min ){
						min = parseFloat( min ) * ( min.indexOf( em ) > -1 ? ( eminpx || getEmValue() ) : 1 );
					}
					if( !!max ){
						max = parseFloat( max ) * ( max.indexOf( em ) > -1 ? ( eminpx || getEmValue() ) : 1 );
					}

					// if there's no media query at all (the () part), or min or max is not null, and if either is present, they're true
					if( !thisstyle.hasquery || ( !minnull || !maxnull ) && ( minnull || currWidth >= min ) && ( maxnull || currWidth <= max ) ){
						if( !styleBlocks[ thisstyle.media ] ){
							styleBlocks[ thisstyle.media ] = [];
						}
						styleBlocks[ thisstyle.media ].push( rules[ thisstyle.rules ] );
					}
				}
			}

			//remove any existing respond style element(s)
			for( var j in appendedEls ){
				if( appendedEls.hasOwnProperty( j ) ){
					if( appendedEls[ j ] && appendedEls[ j ].parentNode === head ){
						head.removeChild( appendedEls[ j ] );
					}
				}
			}
			appendedEls.length = 0;

			//inject active styles, grouped by media type
			for( var k in styleBlocks ){
				if( styleBlocks.hasOwnProperty( k ) ){
					var ss = doc.createElement( "style" ),
						css = styleBlocks[ k ].join( "\n" );

					ss.type = "text/css";
					ss.media = k;

					//originally, ss was appended to a documentFragment and sheets were appended in bulk.
					//this caused crashes in IE in a number of circumstances, such as when the HTML element had a bg image set, so appending beforehand seems best. Thanks to @dvelyk for the initial research on this one!
					head.insertBefore( ss, lastLink.nextSibling );

					if ( ss.styleSheet ){
						ss.styleSheet.cssText = css;
					}
					else {
						ss.appendChild( doc.createTextNode( css ) );
					}

					//push to appendedEls to track for later removal
					appendedEls.push( ss );
				}
			}
		},
		//find media blocks in css text, convert to style blocks
		translate = function( styles, href, media ){
			var qs = styles.replace( respond.regex.comments, '' )
					.replace( respond.regex.keyframes, '' )
					.match( respond.regex.media ),
				ql = qs && qs.length || 0;

			//try to get CSS path
			href = href.substring( 0, href.lastIndexOf( "/" ) );

			var repUrls = function( css ){
					return css.replace( respond.regex.urls, "$1" + href + "$2$3" );
				},
				useMedia = !ql && media;

			//if path exists, tack on trailing slash
			if( href.length ){ href += "/"; }

			//if no internal queries exist, but media attr does, use that
			//note: this currently lacks support for situations where a media attr is specified on a link AND
				//its associated stylesheet has internal CSS media queries.
				//In those cases, the media attribute will currently be ignored.
			if( useMedia ){
				ql = 1;
			}

			for( var i = 0; i < ql; i++ ){
				var fullq, thisq, eachq, eql;

				//media attr
				if( useMedia ){
					fullq = media;
					rules.push( repUrls( styles ) );
				}
				//parse for styles
				else{
					fullq = qs[ i ].match( respond.regex.findStyles ) && RegExp.$1;
					rules.push( RegExp.$2 && repUrls( RegExp.$2 ) );
				}

				eachq = fullq.split( "," );
				eql = eachq.length;

				for( var j = 0; j < eql; j++ ){
					thisq = eachq[ j ];

					if( isUnsupportedMediaQuery( thisq ) ) {
						continue;
					}

					mediastyles.push( {
						media : thisq.split( "(" )[ 0 ].match( respond.regex.only ) && RegExp.$2 || "all",
						rules : rules.length - 1,
						hasquery : thisq.indexOf("(") > -1,
						minw : thisq.match( respond.regex.minw ) && parseFloat( RegExp.$1 ) + ( RegExp.$2 || "" ),
						maxw : thisq.match( respond.regex.maxw ) && parseFloat( RegExp.$1 ) + ( RegExp.$2 || "" )
					} );
				}
			}

			applyMedia();
		},

		//recurse through request queue, get css text
		makeRequests = function(){
			if( requestQueue.length ){
				var thisRequest = requestQueue.shift();

				ajax( thisRequest.href, function( styles ){
					translate( styles, thisRequest.href, thisRequest.media );
					parsedSheets[ thisRequest.href ] = true;

					// by wrapping recursive function call in setTimeout
					// we prevent "Stack overflow" error in IE7
					w.setTimeout(function(){ makeRequests(); },0);
				} );
			}
		},

		//loop stylesheets, send text content to translate
		ripCSS = function(){

			for( var i = 0; i < links.length; i++ ){
				var sheet = links[ i ],
				href = sheet.href,
				media = sheet.media,
				isCSS = sheet.rel && sheet.rel.toLowerCase() === "stylesheet";

				//only links plz and prevent re-parsing
				if( !!href && isCSS && !parsedSheets[ href ] ){
					// selectivizr exposes css through the rawCssText expando
					if (sheet.styleSheet && sheet.styleSheet.rawCssText) {
						translate( sheet.styleSheet.rawCssText, href, media );
						parsedSheets[ href ] = true;
					} else {
						if( (!/^([a-zA-Z:]*\/\/)/.test( href ) && !base) ||
							href.replace( RegExp.$1, "" ).split( "/" )[0] === w.location.host ){
							// IE7 doesn't handle urls that start with '//' for ajax request
							// manually add in the protocol
							if ( href.substring(0,2) === "//" ) { href = w.location.protocol + href; }
							requestQueue.push( {
								href: href,
								media: media
							} );
						}
					}
				}
			}
			makeRequests();
		};

	//translate CSS
	ripCSS();

	//expose update for re-running respond later on
	respond.update = ripCSS;

	//expose getEmValue
	respond.getEmValue = getEmValue;

	//adjust on resize
	function callMedia(){
		applyMedia( true );
	}

	if( w.addEventListener ){
		w.addEventListener( "resize", callMedia, false );
	}
	else if( w.attachEvent ){
		w.attachEvent( "onresize", callMedia );
	}
})(this);
 
 var suggestVal = '';
var defaultCity = $('#defaultCityShowStr').val();
if (typeof defaultCity == 'undefined' || defaultCity == null || !defaultCity)
defaultCity = '请选择城市或目的地';
// var city_name = '北京';

if($('#actionname').val()=='Front_Search'||$('#actionname').val()=='Front_Search_Partner'){
    var city_name = $('#searchcityd').val();
    var _keywordValue = '';
}else{
    var city_name = $('#searchcity').val();
    var _keywordValue = '无';
}
var sugTitle = 'hotcity';

var defaultErrorTip = '对不起，没有找到对应的结果';
(function ($) {

    $.suggest = function (input, options, reset) {
        $('#suggestion_citydomain').val('');
        var $input = $(input).attr("autocomplete", "off");
        var $results;
        var timeout = false;		// hold timeout ID for suggestion results to appear	
        var prevLength = 0;			// last recorded length of $input.val()
        var cache = [];				// cache MRU list
        var cacheSize = 0;			// size of cache in chars (bytes?)

        if ($(".dropDiv").is(":visible"))
    $(".dropDiv").empty().hide();

if ($.trim($input.val()) == '' && !$('#suggest').is(':visible') && !$('.sug').is(':visible'))
{
    $input.val(defaultCity);
}
if (!options.attachObject)
options.attachObject = $(document.createElement("ul")).appendTo('body');

$results = $(options.attachObject);
$results.addClass(options.resultsClass);

if (reset)
{
    resetPosition();
    $(window)
        .load(resetPosition)		// just in case user is changing size of page while loading
        .resize(resetPosition);
}

$input.blur(function () {
    //setTimeout(function() { $results.hide() }, 200);
    //setTimeout(function() {$('.sug').hide()}, 200);
    if($('#actionname').val()=='Front_Search'){
        $('#searchcityd').val(city_name);
    }
    setTimeout(function () {
        $('#suggest').hide();
        // $('.sug').hide()
        setDefaultCity();

    }, 200);
});

$input.focus(function () {
    $('#tip_searchcity').hide();
    if ($.trim($(this).val()) == defaultCity) {
        //$(this).val('').css('color','#000');
        $(this).val('');
    }
    if ($(".sug").is(":visible"))
    $(".sug").hide();
if ($.trim($(this).val()) == ''||$('#searchcity').val()) {
    $('.sug').show();
    if ($("#dropDiv").is(":visible"))
    $("#dropDiv").empty().hide();
$('#hotcity').click();
$('#suggest').html('');
$('#suggest').hide();
scrollPage($('.sug'));
}
});
$input.click(function () {
    $('#tip_searchcity').hide();
    $("#keyword").val(_keywordValue);
    $("#searchkey").val("");
    $("#defaulturl").val("");
    $("#landmarklat").val("");
    $("#landmarklng").val("");
    $("#landmarkid").val("");
    $("#landmarktype").val("");
    var q = $.trim($(this).val());
    if (q == '' || q == defaultCity)
{
    $('.sug').show();
    if ($("#dropDiv").is(":visible"))
    $("#dropDiv").empty().hide();
$('#hotcity').click();
$('#suggest').html('');
$('#suggest').hide();
$(this).select();
} else
{
        if ($('.sug').is(":visible")){
               // do nothing
        }else{
            displayItems(q); 
        }
    //$(this).select();
}

});
$('#searchcityd_search').click(function(){
    selectCurrentResult();
});

// help IE users if possible
/**
  try {
  $results.bgiframe();
  } catch(e) { }
 **/
$input.keyup(processKey);//
$input.on('input', processKey);

function resetPosition() {
    // requires jquery.dimension plugin
    var offset = $input.offset();
    var offsetTop = offset.top + 3;
    $results.css({
        top: (offsetTop + input.offsetHeight) + 'px',
        left: offset.left + 'px'
    });
    $('.sug').css({
        top: (offsetTop + input.offsetHeight) + 'px',
        left: offset.left + 'px'
    });

}


function processKey(e) {
    if($('#actionname').val()=='Front_Search'||$('#actionname').val()=='Front_Search_Partner'){
        if($('#searchcityd').val()!=''&&$('#searchcityd').val()!='请选择城市或目的地'){
            $('#searchcityd_search').show();
            $('.sug').hide();
        }else{
            $('#searchcityd_search').hide();  
        }
    }
    // handling up/down/escape requires results to be visible
    // handling enter/tab requires that AND a result to be selected
    if ((/27$|38$|40$/.test(e.keyCode) && $results.is(':visible')) ||
            (/^13$|^9$/.test(e.keyCode) && getCurrentResult())) {

                if (e.preventDefault)
                    e.preventDefault();
                if (e.stopPropagation)
                    e.stopPropagation();

                e.cancelBubble = true;
                e.returnValue = false;

                switch (e.keyCode) {

                    case 38: // up
                        prevResult();
                        break;

                    case 40: // down
                        nextResult();
                        break;
                    case 13: // return
                        var inputValue = $('#searchcity').attr('value');
                        /*
                           if(inputValue != ''&& inputValue != defaultCity && suggest_tip.indexOf(inputValue) < 0)
                           {
                           displayItems(inputValue);
                           break;
                           }*/
                        selectCurrentResult();                 
                        break;

                    case 27: //	escape
                        $results.hide();
                        break;

                }

            } else if ($input.val().length != prevLength) {

                if (timeout)
                    clearTimeout(timeout);
                timeout = setTimeout(suggest, options.delay);
                prevLength = $input.val().length;

            }

}

function suggest() {

    var q = $.trim($input.val());
    if (q != '' && q != defaultCity)
    {
        $('.sug').hide();
        displayItems(q);
    } else
    {
        $('#suggest').html('');
        $('#suggest').hide();
        $('.sug').show();
        if ($("#dropDiv").is(":visible"))
            $("#dropDiv").empty().hide();
        $('#hotcity').click();
    }
}
function displayItems(items) {
    if (items == defaultCity)
    {
        items = '';
        $input.val('');
    }
    var html = '';
    if (items != '')
    {
        if($('#actionname').val()=='Front_Search'||$('#actionname').val()=='Front_Search_Partner'){
            var searchcityVal = $("#searchcityd").val();  
        }else{
            var searchcityVal = $("#searchcity").val();  
        }

        html = getSuggestionHtml(searchcityVal);
        if (html == '') {
            $('#suggestion_citydomain').attr('value', '');
            suggest_tip = '<div class="ac_result_tip">' + defaultErrorTip + '</div>';
        }
        if (html == '')
            html = suggest_tip;
        else
            html = '<ul>' + html + '</ul>';
    } else
    {
        html = '';
        $results.hide();
    }
    var findStr = "citySpan";
    if (html != '' && suggestVal == items && items != '' && items != defaultCity)
    {
        var li_len = eval("html.match(/" + findStr + "/ig).length");
        if (li_len == 1)
        {
            html = '';
            $results.hide();
            $('.sug').show();
            if ($("#dropDiv").is(":visible"))
                $("#dropDiv").empty().hide();
            $('#' + sugTitle).click();
            $('.sug-city a').removeClass('a_over');
            $(".sug-city a[title='" + city_name + "']").addClass('a_over');

        }
    }
    if (html != '')
    {
        $results.html(html).show();
        $results.children('ul').children('li:first-child').addClass(options.selectClass);

        $results.children('ul')
            .children('li')
            .mouseover(function () {
                $results.children('ul').children('li').removeClass(options.selectClass);
                $(this).addClass(options.selectClass);
            })
        .click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            selectCurrentResult();
        });
    }
}

function getCurrentResult() {

    if (!$results.is(':visible'))
        return false;

    var $currentResult = $results.children('ul').children('li.' + options.selectClass);
    if (!$currentResult.length)
        $currentResult = false;

    return $currentResult;

}

function selectCurrentResult() {
    $currentResult = getCurrentResult();
    if ($currentResult) {

        if ($.browser.msie)
        {
            $input.val($currentResult.children('a').children('span')[0].outerText);
        } else
        {
            $input.val($currentResult.children('a').children('span')[0].textContent);
        }
        $results.hide();
        if ($(options.dataContainer)) {
            $(options.dataContainer).val($currentResult.attr('rel'));
        }

        if (typeof ($.fn.autopoint) == "function") {
            $("#keyword,#keyword_icon").autopoint({url: 'http://' + domain + '/ajax.php?op=Ajax_getLandMarkSuggestion', submit: ["searchbtn"]});
        }
        if (options.onSelect) {
            options.onSelect.apply($input[0]);
        }
        city_name = $input.val();
        $('#searchcity').blur();
        $('#suggestion_citydomain').val($currentResult.attr('rel'));
        var landmarkid = $currentResult.attr('landmarkid');
        var landmarktype = $currentResult.attr('landmarktype');
        if (landmarkid == '' || !isDefined(landmarkid))
        {
            $('#searchkey').val('');
            $('#landmarkid').val('');
            $('#landmarktype').val('');
            $('#defaulturl').val('');
        } else
        {
            $('#searchkey').val(city_name);
            $('#landmarkid').val(landmarkid);
            $('#landmarktype').val(landmarktype);
            $('#defaulturl').val(city_name + '_' + parseInt(landmarkid).toString(36) + landmarktype);
        }

        if($('#actionname').val()=='Front_Search'||$('#actionname').val()=='Front_Search_Partner'){
            setTimeout(function() {
                searchCity('home');
            }, 1);
        }

    }

}
function getFirstValue()
{
    var firstValue = '';
    if (!$results.is(':visible'))
        return false;
    var $suggestResult = $results.children('ul').children('li');
    if (!$suggestResult.length)
        $currentResult = false;
    else
    {
        if ($.browser.msie)
        {
            firstValue = $suggestResult.eq(0).children('a').children('span')[0].outerText;

        } else
        {
            firstValue = $suggestResult.eq(0).children('a').children('span')[0].textContent;
        }
    }
    return firstValue;
}
function nextResult() {

    $currentResult = getCurrentResult();

    var searchcityVal = $("#searchcity").val();
    $("#searchcity").val('').val(searchcityVal);
    if ($currentResult)
        $currentResult
            .removeClass(options.selectClass)
            .next()
            .addClass(options.selectClass);
    else
        $results.children('ul').children('li:first-child').addClass(options.selectClass);

}

function prevResult() {

    $currentResult = getCurrentResult();

    var searchcityVal = $("#searchcity").val();
    $("#searchcity").val('').val(searchcityVal);
    if ($currentResult)
        $currentResult
            .removeClass(options.selectClass)
            .prev()
            .addClass(options.selectClass);
    else
        $results.children('ul').children('li:last-child').addClass(options.selectClass);

}

}

$.fn.suggest = function (source, options, reset) {

    if (!source)
        return;

    options = options || {};
    options.source = source;
    options.delay = options.delay || 0;
    options.resultsClass = options.resultsClass || 'ac_results2';
    options.selectClass = options.selectClass || 'ac_over';
    options.matchClass = options.matchClass || 'ac_match';
    options.minchars = options.minchars || 1;
    options.delimiter = options.delimiter || '\n';
    options.onSelect = options.onSelect || false;
    options.dataDelimiter = options.dataDelimiter || '\t';
    options.dataContainer = options.dataContainer || '#SuggestResult';
    options.attachObject = options.attachObject || null;

    this.each(function () {
        new $.suggest(this, options, reset);
    });

    return this;

};

})(jQuery);

$('#suggest_icon').click(function () {
    if ($(this).hasClass('list_arrow_down') || $(this).hasClass('tenant_need_city')) {
        if ($('.sug').is(':visible'))
{
    $('.sug').hide();
}
else
{
    $('.sug').click();
    $('#hotcity').click();
    $('.sug').show();
}
$('#searchcity').click();
$('#searchcity').blur();
}
else
{
    if ($('.sug').is(':visible'))
{
    $('.sug').hide();
}
else if ($('#suggest').is(':visible'))
{
    $('#suggest').hide();
}
else
{
    $('#searchcity').focus();
    $('#searchcity').click();
    $(this).blur();
}
}
});

function setDefaultCity()
{
    if($('#actionname').val()=='Front_Search'||$('#actionname').val()=='Front_Search_Partner'){
        if ($('#searchcityd').val()== '' && !$('#suggest').is(':visible') && !$('.sug').is(':visible'))
        {
            $('#searchcityd').val(defaultCity);
        }
    }else{
        if ($('#searchcity').attr('value') == '' && !$('#suggest').is(':visible') && !$('.sug').is(':visible'))
        {
            $('#searchcity').attr('value', defaultCity);
        }
    }  
}
//new suggest
$('.sug-tit span').each(function ()
        {
            $(this).click(function () {
                $(this).addClass('sug-hover').siblings().removeClass('sug-hover');
                var spellings = $(this).attr('value');
                sugTitle = spellings;
                var listStr = '';
                var spanClass = '';
                var num = 0;
                if (spellings != 'hotcity')
            {
                var spellArr = spellings.split('_');
                for (var m = 0; m < spellArr.length; m++)
            {
                for (var n = 0; n < citys.length; n++)
            {
                if (citys[n][2].indexOf(spellArr[m]) == 0)
            {
                num++;
                if (num % 6 == 0)
            {
                spanClass = "city_width";
            } else
            {
                spanClass = "";
            }
            if (citys[n][1] == city_name)
            {
                if (spanClass == "")
                {
                    listStr += '<span><a class="a_over" title="' + citys[n][1] + '" href="javascript:getSelectedCity(\'' + citys[n][1] + '\',\'' + citys[n][3] + '\',\'' + citys[n][7] + '\',\'' + citys[n][8] + '\',\'' + citys[n][9] + '\')">' + citys[n][1] + '</a></span>';
                } else
                {
                    listStr += '<span class="' + spanClass + '"><a class="a_over" title="' + citys[n][1] + '" href="javascript:getSelectedCity(\'' + citys[n][1] + '\',\'' + citys[n][3] + '\',\'' + citys[n][7] + '\',\'' + citys[n][8] + '\',\'' + citys[n][9] + '\')">' + citys[n][1] + '</a></span>';
                }
            } else
            {
                if (spanClass == "")
                {
                    listStr += '<span><a title="' + citys[n][1] + '" href="javascript:getSelectedCity(\'' + citys[n][1] + '\',\'' + citys[n][3] + '\',\'' + citys[n][7] + '\',\'' + citys[n][8] + '\',\'' + citys[n][9] + '\')">' + citys[n][1] + '</a></span>';
                } else
                {
                    listStr += '<span class="' + spanClass + '"><a title="' + citys[n][1] + '" href="javascript:getSelectedCity(\'' + citys[n][1] + '\',\'' + citys[n][3] + '\',\'' + citys[n][7] + '\',\'' + citys[n][8] + '\',\'' + citys[n][9] + '\')">' + citys[n][1] + '</a></span>';
                }
            }
            }
            }
            }
            } else
            {
                for (var p = 0; p < hotcitys.length; p++)
                {
                    if ((p + 1) % 6 == 0)
                    {
                        spanClass = "city_width";
                    } else
                    {
                        spanClass = "";
                    }
                    if (hotcitys[p][1] == city_name)
                    {
                        if (spanClass == "")
                        {
                            listStr += '<span><a class="a_over" title="' + hotcitys[p][1] + '" href="javascript:getSelectedCity(\'' + hotcitys[p][1] + '\',\'' + hotcitys[p][3] + '\',\'' + hotcitys[p][7] + '\',\'' + hotcitys[p][8] + '\',\'' + hotcitys[p][9] + '\')">' + hotcitys[p][1] + '</a></span>';
                        } else
                        {
                            listStr += '<span class="' + spanClass + '"><a class="a_over" title="' + hotcitys[p][1] + '" href="javascript:getSelectedCity(\'' + hotcitys[p][1] + '\',\'' + hotcitys[p][3] + '\',\'' + hotcitys[p][7] + '\',\'' + hotcitys[p][8] + '\',\'' + hotcitys[p][9] + '\')">' + hotcitys[p][1] + '</a></span>';
                        }
                    } else
                    {
                        if (spanClass == "")
                        {
                            listStr += '<span><a title="' + hotcitys[p][1] + '" href="javascript:getSelectedCity(\'' + hotcitys[p][1] + '\',\'' + hotcitys[p][3] + '\',\'' + hotcitys[p][7] + '\',\'' + hotcitys[p][8] + '\',\'' + hotcitys[p][9] + '\')">' + hotcitys[p][1] + '</a></span>';
                        } else
                        {
                            listStr += '<span class="' + spanClass + '"><a title="' + hotcitys[p][1] + '" href="javascript:getSelectedCity(\'' + hotcitys[p][1] + '\',\'' + hotcitys[p][3] + '\',\'' + hotcitys[p][7] + '\',\'' + hotcitys[p][8] + '\',\'' + hotcitys[p][9] + '\')">' + hotcitys[p][1] + '</a></span>';
                        }
                    }
                }
            }
            $('#con_one_1').html(listStr);
            scrollPage($('.sug'));
            })
        })
var op = $('#actionname').val();
function getSelectedCity(cityName, cityDomain, landmarkid, landmarkType, cityId)
{
    if (op == "Front_Search"||op=='Front_Search_Partner') {
        window.location = 'http://' + cityDomain + '.' + topLevelDomain;
    } else {
        $('#searchcity').val(cityName);
        $('#suggestion_citydomain').val(cityDomain);
        $('#selectcitydomain').val(cityDomain);
        $('#cityid').val(cityId);
        if (landmarkid == '')
        {
            $('#searchkey').val('');
            $('#landmarkid').val('');
            $('#defaulturl').val('');
        } else
        {
            $('#searchkey').val(cityName);
            $('#landmarkid').val(landmarkid);
            $('#defaulturl').val(cityName + '_' + parseInt(landmarkid).toString(36) + landmarkType);
        }
        if (typeof ($.fn.autopoint) == "function") {
            $("#keyword,#keyword_icon").autopoint({url: 'http://' + domain + '/ajax.php?op=Ajax_getLandMarkSuggestion', submit: ["searchbtn"]});
        }
        city_name = $('#searchcity').val();
        $('.sug').hide();
    }
}
$('#close_new').click(function () {
    $('.sug').hide();
    if ($('#searchcity').val() == '' && !$('.suggest').is(':visible'))
{
    $('#searchcity').val(defaultCity);
}
})

function getSuggestionHtml(word)
{
    var cityAjaxUrl = 'http://' + domain + '/ajax.php?op=Ajax_getCityLandMarkSuggestion';
    var cityId = '';
    var returnMsg = '';
    try {
        var rand = Math.floor(Math.random() * 10000);
        var params = "jsoncallback=?&searchKey=" + encodeURIComponent(word) + "&_t=" + rand;
        if (isDefined(cityId))
            params += "&cityId=" + cityId;
        $.ajaxSettings.async = false;
        $.getJSON(cityAjaxUrl, params, function (msg) {
            if ('' + msg.data != 'null')
            returnMsg = '' + msg.data;
            else
            return '';
        });
    } catch (err)
    {
    }
    return returnMsg;
}
 
 var hotcitys=new Array();

hotcitys[0]=new Array('bj','北京','beijing','bj','3940','beijing','北京','','',12);

hotcitys[1]=new Array('sh','上海','shanghai','sh','2485','shanghai','上海','','',13);

hotcitys[2]=new Array('gz','广州','guangzhou','gz','830','guangdong','广东','','',16);

hotcitys[3]=new Array('cd','成都','chengdu','cd','1658','sichuan','四川','','',45);

hotcitys[4]=new Array('sz','深圳','shenzhen','sz','734','guangdong','广东','','',17);

hotcitys[5]=new Array('xa','西安','xian','xa','888','shanxi','陕西','','',176);

hotcitys[6]=new Array('nj','南京','nanjing','nj','475','jiangsu','江苏','','',65);

hotcitys[7]=new Array('hz','杭州','hangzhou','hz','807','zhejiang','浙江','','',26);

hotcitys[8]=new Array('cq','重庆','chongqing','cq','741','chongqing','重庆','','',15);

hotcitys[9]=new Array('wh','武汉','wuhan','wh','560','hubei','湖北','','',194);

hotcitys[10]=new Array('sz','苏州','suzhou','su','481','jiangsu','江苏','','',67);

hotcitys[11]=new Array('wx','无锡','wuxi','wx','88','jiangsu','江苏','','',66);

hotcitys[12]=new Array('qd','青岛','qingdao','qd','1549','shandong','山东','','',114);

hotcitys[13]=new Array('xm','厦门','xiamen','xm','760','fujian','福建','','',76);

hotcitys[14]=new Array('sy','三亚','sanya','sanya','1248','hainan','海南','','',144);

hotcitys[15]=new Array('dl','大连','dalian','dl','542','liaoning','辽宁','','',56);

hotcitys[16]=new Array('heb','哈尔滨','haerbin','hrb','421','heilongjiang','黑龙江','','',93);

hotcitys[17]=new Array('km','昆明','kunming','km','187','yunnan','云南','','',225);

hotcitys[18]=new Array('xg','香港','xianggang','xianggang','177','xianggang','香港','','',344);

hotcitys[19]=new Array('sy','沈阳','shenyang','sy','233','liaoning','辽宁','','',55);

hotcitys[20]=new Array('zz','郑州','zhengzhou','zz','183','henan','河南','','',103);

var citys=new Array();

citys[0]=new Array('bj','北京','beijing','bj','3940','beijing','北京','','',12);

citys[1]=new Array('sh','上海','shanghai','sh','2485','shanghai','上海','','',13);

citys[2]=new Array('gz','广州','guangzhou','gz','830','guangdong','广东','','',16);

citys[3]=new Array('cd','成都','chengdu','cd','1658','sichuan','四川','','',45);

citys[4]=new Array('sz','深圳','shenzhen','sz','734','guangdong','广东','','',17);

citys[5]=new Array('xa','西安','xian','xa','888','shanxi','陕西','','',176);

citys[6]=new Array('nj','南京','nanjing','nj','475','jiangsu','江苏','','',65);

citys[7]=new Array('hz','杭州','hangzhou','hz','807','zhejiang','浙江','','',26);

citys[8]=new Array('cq','重庆','chongqing','cq','741','chongqing','重庆','','',15);

citys[9]=new Array('wh','武汉','wuhan','wh','560','hubei','湖北','','',194);

citys[10]=new Array('sz','苏州','suzhou','su','481','jiangsu','江苏','','',67);

citys[11]=new Array('wx','无锡','wuxi','wx','88','jiangsu','江苏','','',66);

citys[12]=new Array('qd','青岛','qingdao','qd','1549','shandong','山东','','',114);

citys[13]=new Array('xm','厦门','xiamen','xm','760','fujian','福建','','',76);

citys[14]=new Array('sy','三亚','sanya','sanya','1248','hainan','海南','','',144);

citys[15]=new Array('dl','大连','dalian','dl','542','liaoning','辽宁','','',56);

citys[16]=new Array('heb','哈尔滨','haerbin','hrb','421','heilongjiang','黑龙江','','',93);

citys[17]=new Array('qhd','秦皇岛','qinhuangdao','qinhuangdao','645','hebei','河北','','',3);

citys[18]=new Array('tj','天津','tianjin','tj','133','tianjin','天津','','',14);

citys[19]=new Array('km','昆明','kunming','km','187','yunnan','云南','','',225);

citys[20]=new Array('xg','香港','xianggang','xianggang','177','xianggang','香港','','',344);

citys[21]=new Array('cc','长春','changchun','cc','107','jilin','吉林','','',84);

citys[22]=new Array('sy','沈阳','shenyang','sy','233','liaoning','辽宁','','',55);

citys[23]=new Array('hf','合肥','hefei','hf','152','anhui','安徽','','',123);

citys[24]=new Array('zz','郑州','zhengzhou','zz','183','henan','河南','','',103);

citys[25]=new Array('ty','太原','taiyuan','ty','139','shanxi','山西','','',155);

citys[26]=new Array('wh','威海','weihai','wei','280','shandong','山东','','',120);

citys[27]=new Array('lj','丽江','lijiang','lijiang','87','yunnan','云南','','',230);

citys[28]=new Array('dl','大理','dali','dali','124','yunnan','云南','','',237);

citys[29]=new Array('gl','桂林','guilin','gl','155','guangxi','广西','','',134);

citys[30]=new Array('fz','福州','fuzhou','fz','84','fujian','福建','','',75);

citys[31]=new Array('nb','宁波','ningbo','nb','39','zhejiang','浙江','','',27);

citys[32]=new Array('zh','珠海','zhuhai','zhuhai','135','guangdong','广东','','',18);

citys[33]=new Array('cs','长沙','changsha','cs','230','hunan','湖南','','',204);

citys[34]=new Array('sjz','石家庄','shijiazhuang','sjz','130','hebei','河北','','',1);

citys[35]=new Array('ls','拉萨','lasa','ls','9','xicang','西藏','','',256);

citys[36]=new Array('cz','常州','changzhou','changzhou','34','jiangsu','江苏','','',69);

citys[37]=new Array('yz','扬州','yangzhou','yangzhou','44','jiangsu','江苏','','',74);

citys[38]=new Array('dg','东莞','dongguan','dg','13','guangdong','广东','','',24);

citys[39]=new Array('hk','海口','haikou','hn','91','hainan','海南','','',143);

citys[40]=new Array('lz','兰州','lanzhou','lz','108','gansu','甘肃','','',166);

citys[41]=new Array('ly','洛阳','luoyang','luoyang','62','henan','河南','','',104);

citys[42]=new Array('wlmq','乌鲁木齐','wulumuqi','xj','28','xinjiang','新疆','','',241);

citys[43]=new Array('xz','徐州','xuzhou','xuzhou','25','jiangsu','江苏','','',68);

citys[44]=new Array('gy','贵阳','guiyang','gy','83','guizhou','贵州','','',36);

citys[45]=new Array('hhht','呼和浩特','huhehaote','nmg','42','neimenggu','内蒙古','','',145);

citys[46]=new Array('jn','济南','jinan','jn','161','shandong','山东','','',113);

citys[47]=new Array('ts','唐山','tangshan','tangshan','24','hebei','河北','','',2);

citys[48]=new Array('bd','保定','baoding','baoding','20','hebei','河北','','',6);

citys[49]=new Array('nc','南昌','nanchang','nc','30','jiangxi','江西','','',214);

citys[50]=new Array('hd','邯郸','handan','handan','7','hebei','河北','','',4);

citys[51]=new Array('nn','南宁','nanning','nn','47','guangxi','广西','','',142);

citys[52]=new Array('wf','潍坊','weifang','weifang','13','shandong','山东','','',119);

citys[53]=new Array('jz','锦州','jinzhou','jinzhou','5','liaoning','辽宁','','',60);

citys[54]=new Array('rz','日照','rizhao','rizhao','263','shandong','山东','','',306);

citys[55]=new Array('ly','临沂','linyi','linyi','17','shandong','山东','','',307);

citys[56]=new Array('as','鞍山','anshan','anshan','11','liaoning','辽宁','','',57);

citys[57]=new Array('lf','廊坊','langfang','langfang','23','hebei','河北','','',10);

citys[58]=new Array('dq','大庆','daqing','daqing','2','heilongjiang','黑龙江','','',98);

citys[59]=new Array('bh','北海','beihai','beihai','123','guangxi','广西','','',317);

citys[60]=new Array('zs','中山','zhongshan','zhongshan','27','guangdong','广东','','',25);

citys[61]=new Array('xn','西宁','xining','xn','77','qinghai','青海','','',186);

citys[62]=new Array('jh','金华','jinhua','jinhua','15','zhejiang','浙江','','',32);

citys[63]=new Array('dd','丹东','dandong','dandong','48','liaoning','辽宁','','',59);

citys[64]=new Array('cd','承德','chengde','chengde','116','hebei','河北','','',8);

citys[65]=new Array('pj','盘锦','panjin','panjin','20','liaoning','辽宁','','',63);

citys[66]=new Array('zb','淄博','zibo','zibo','5','shandong','山东','','',115);

citys[67]=new Array('zz','株洲','zhuzhou','zhuzhou','11','hunan','湖南','','',205);

citys[68]=new Array('fs','佛山','foshan','foshan','37','guangdong','广东','','',20);

citys[69]=new Array('jl','吉林','jilinshi','jilin','15','jilin','吉林','','',85);

citys[70]=new Array('xt','邢台','xingtai','xingtai','3','hebei','河北','','',5);

citys[71]=new Array('qqhe','齐齐哈尔','qiqihaer','qiqihaer','3','heilongjiang','黑龙江','','',94);

citys[72]=new Array('yc','宜昌','yichang','yichang','16','hubei','湖北','','',199);

citys[73]=new Array('dt','大同','datong','datong','44','shanxi','山西','','',156);

citys[74]=new Array('yt','烟台','yantai','yantai','244','shandong','山东','','',118);

citys[75]=new Array('yc','银川','yinchuan','yc','28','ningxia','宁夏','','',165);

citys[76]=new Array('wz','温州','wenzhou','wenzhou','17','zhejiang','浙江','','',28);

citys[77]=new Array('ha','淮安','huaian','huaian','25','jiangsu','江苏','','',72);

citys[78]=new Array('my','绵阳','mianyang','mianyang','36','sichuan','四川','','',49);

citys[79]=new Array('bt','包头','baotou','baotou','14','neimenggu','内蒙古','','',146);

citys[80]=new Array('fs','抚顺','fushun','fushun','10','liaoning','辽宁','','',58);

citys[81]=new Array('ta','泰安','taian','taian','34','shandong','山东','','',305);

citys[82]=new Array('jn','济宁','jining','jining','9','shandong','山东','','',304);

citys[83]=new Array('lyg','连云港','lianyungang','lianyungang','11','jiangsu','江苏','','',71);

citys[84]=new Array('qz','泉州','quanzhou','quanzhou','45','fujian','福建','','',79);

citys[85]=new Array('ay','安阳','anyang','anyang','4','henan','河南','','',109);

citys[86]=new Array('hz','惠州','huizhou','huizhou','79','guangdong','广东','','',23);

citys[87]=new Array('hld','葫芦岛','huludao','huludao','138','liaoning','辽宁','','',64);

citys[88]=new Array('jx','嘉兴','jiaxing','jiaxing','122','zhejiang','浙江','','',29);

citys[89]=new Array('nt','南通','nantong','nantong','13','jiangsu','江苏','','',70);

citys[90]=new Array('jms','佳木斯','jiamusi','jiamusi','8','heilongjiang','黑龙江','','',100);

citys[91]=new Array('dz','德州','dezhou','dezhou','5','shandong','山东','','',308);

citys[92]=new Array('gz','赣州','ganzhou','ganzhou','2','jiangxi','江西','','',220);

citys[93]=new Array('bz','滨州','binzhou','binzhou','1','shandong','山东','','',122);

citys[94]=new Array('xy','咸阳','xianyang','xianyang','3','shanxi','陕西','','',179);

citys[95]=new Array('jm','江门','jiangmen','jiangmen','2','guangdong','广东','','',21);

citys[96]=new Array('zz','漳州','zhangzhou','zhangzhou','22','fujian','福建','','',80);

citys[97]=new Array('xx','新乡','xinxiang','xinxiang','4','henan','河南','','',108);

citys[98]=new Array('xf','襄樊','xiangfan','xiangfan','1','hubei','湖北','','',196);

citys[99]=new Array('nc','南充','nanchong','nanchong','10','sichuan','四川','','',51);

citys[100]=new Array('lc','聊城','liaocheng','liaocheng','11','shandong','山东','','',309);

citys[101]=new Array('zjk','张家口','zhangjiakou','zhangjiakou','49','hebei','河北','','',7);

citys[102]=new Array('cz','沧州','cangzhou','cangzhou','2','hebei','河北','','',9);

citys[103]=new Array('shz','石河子','shihezi','shihezi','2','xinjiang','新疆','','',255);

citys[104]=new Array('bj','宝鸡','baoji','baoji','3','shanxi','陕西','','',178);

citys[105]=new Array('cf','赤峰','chifeng','chifeng','7','neimenggu','内蒙古','','',148);

citys[106]=new Array('zj','湛江','zhanjiang','zhanjiang','13','guangdong','广东','','',264);

citys[107]=new Array('sq','商丘','shangqiu','shangqiu','1','henan','河南','','',297);

citys[108]=new Array('pds','平顶山','pingdingshan','pingdingshan','2','henan','河南','','',105);

citys[109]=new Array('jj','九江','jiujiang','jiujiang','10','jiangxi','江西','','',217);

citys[110]=new Array('yk','营口','yingkou','yingkou','162','liaoning','辽宁','','',61);

citys[111]=new Array('hy','衡阳','hengyang','hengyang','1','hunan','湖南','','',207);

citys[112]=new Array('st','汕头','shantou','shantou','4','guangdong','广东','','',19);

citys[113]=new Array('wh','芜湖','wuhu','wuhu','9','anhui','安徽','','',124);

citys[114]=new Array('hlbe','呼伦贝尔','hulunbeier','hulunbeier','72','neimenggu','内蒙古','','',151);

citys[115]=new Array('xt','湘潭','xiangtan','xiangtan','4','hunan','湖南','','',206);

citys[116]=new Array('cys','朝阳市','chaoyang','chaoyang','3','liaoning','辽宁','','',289);

citys[117]=new Array('qy','清远','qingyuan','qingyuan','16','guangdong','广东','','',270);

citys[118]=new Array('sn','遂宁','suining','suining','1','sichuan','四川','','',276);

citys[119]=new Array('tz','泰州','jstaizhou','jstaizhou','1','jiangsu','江苏','','',291);

citys[120]=new Array('pt','莆田','putian','putian','2','fujian','福建','','',77);

citys[121]=new Array('lz','泸州','luzhou','luzhou','19','sichuan','四川','','',47);

citys[122]=new Array('zs','舟山','zhoushan','zhoushan','48','zhejiang','浙江','','',34);

citys[123]=new Array('zj','镇江','zhenjiang','zhenjiang','2','jiangsu','江苏','','',290);

citys[124]=new Array('kf','开封','kaifeng','kaifeng','6','henan','河南','','',293);

citys[125]=new Array('eeds','鄂尔多斯','eerduosi','eerduosi','1','neimenggu','内蒙古','','',150);

citys[126]=new Array('sy','十堰','shiyan','shiyan','2','hubei','湖北','','',197);

citys[127]=new Array('yb','延边','yanbian','yanbian','12','jilin','吉林','','',92);

citys[128]=new Array('lf','临汾','linfen','linfen','3','shanxi','山西','','',164);

citys[129]=new Array('cd','常德','changde','changde','2','hunan','湖南','','',210);

citys[130]=new Array('cz','郴州','chenzhou','chenzhou','2','hunan','湖南','','',211);

citys[131]=new Array('dy','德阳','deyang','deyang','6','sichuan','四川','','',48);

citys[132]=new Array('sx','绍兴','shaoxing','shaoxing','23','zhejiang','浙江','','',31);

citys[133]=new Array('ny','南阳','nanyang','nanyang','2','henan','河南','','',111);

citys[134]=new Array('hz','菏泽','heze','heze','1','shandong','山东','','',338);

citys[135]=new Array('tz','台州','zjtaizhou','zjtaizhou','8','zhejiang','浙江','','',35);

citys[136]=new Array('zy','遵义','zunyi','zunyi','2','guizhou','贵州','','',38);

citys[137]=new Array('yc','盐城','yancheng','yancheng','1','jiangsu','江苏','','',73);

citys[138]=new Array('xq','宿迁','suqian','suqian','2','jiangsu','江苏','','',292);

citys[139]=new Array('jz','焦作','jiaozuo','jiaozuo','5','henan','河南','','',106);

citys[140]=new Array('cz','长治','changzhi','changzhi','16','shanxi','山西','','',158);

citys[141]=new Array('ja','吉安','jian','jian','8','jiangxi','江西','','',221);

citys[142]=new Array('hz','汉中','hanzhong','hanzhong','9','shanxi','陕西','','',182);

citys[143]=new Array('hy','河源','heyuan','heyuan','2','guangdong','广东','','',268);

citys[144]=new Array('tl','铁岭','tieling','tieling','1','liaoning','辽宁','','',288);

citys[145]=new Array('jz','晋中','jinzhong','jinzhong','25','shanxi','山西','','',161);

citys[146]=new Array('ak','安康','ankang','ankang','1','shanxi','陕西','','',184);

citys[147]=new Array('yy','岳阳','yueyang','yueyang','2','hunan','湖南','','',209);

citys[148]=new Array('zq','肇庆','zhaoqing','zhaoqing','1','guangdong','广东','','',265);

citys[149]=new Array('hs','衡水','hengshui','hengshui','8','hebei','河北','','',11);

citys[150]=new Array('mdj','牡丹江','mudanjiang','mudanjiang','6','heilongjiang','黑龙江','','',302);

citys[151]=new Array('ls','乐山','leshan','leshan','61','sichuan','四川','','',50);

citys[152]=new Array('bb','蚌埠','bengbu','bengbu','5','anhui','安徽','','',125);

citys[153]=new Array('sg','韶关','shaoguan','shaoguan','11','guangdong','广东','','',263);

citys[154]=new Array('yj','阳江','yangjiang','yangjiang','1','guangdong','广东','','',269);

citys[155]=new Array('cz','潮州','chaozhou','chaozhou','3','guangdong','广东','','',271);

citys[156]=new Array('zjj','张家界','zhangjiajie','zhangjiajie','24','hunan','湖南','','',334);

citys[157]=new Array('hh','怀化','huaihua','huaihua','1','hunan','湖南','','',336);

citys[158]=new Array('xsbn','西双版纳','xishuangbanna','xishuangbanna','7','yunnan','云南','','',235);

citys[159]=new Array('ms','眉山','meishan','meishan','1','sichuan','四川','','',279);

citys[160]=new Array('fcg','防城港','fangchenggang','fangchenggang','9','guangxi','广西','','',318);

citys[161]=new Array('yy','益阳','yiyang','yiyang','1','hunan','湖南','','',335);

citys[162]=new Array('sr','上饶','shangrao','shangrao','10','jiangxi','江西','','',224);

citys[163]=new Array('qz','衢州','quzhou','quzhou','1','zhejiang','浙江','','',33);

citys[164]=new Array('lps','六盘水','liupanshui','liupanshui','1','guizhou','贵州','','',37);

citys[165]=new Array('bs','白山','baishan','baishan','5','jilin','吉林','','',89);

citys[166]=new Array('sz','池州','chizhou','chizhou','2','anhui','安徽','','',315);

citys[167]=new Array('jc','晋城','jincheng','jincheng','1','shanxi','山西','','',159);

citys[168]=new Array('hs','黄石','huangshi','huangshi','7','hubei','湖北','','',195);

citys[169]=new Array('xx','湘西','xiangxi','xiangxi','8','hunan','湖南','','',337);

citys[170]=new Array('yc','宜春','jxyichun','jxyichun','6','jiangxi','江西','','',222);

citys[171]=new Array('mz','梅州','meizhou','meizhou','2','guangdong','广东','','',266);

citys[172]=new Array('ls','凉山','liangshan','liangshan','8','sichuan','四川','','',54);

citys[173]=new Array('yb','宜宾','yibin','yibin','3','sichuan','四川','','',52);

citys[174]=new Array('hz','湖州','huzhou','huzhou','32','zhejiang','浙江','','',30);

citys[175]=new Array('cz','滁州','chuzhou','chuzhou','2','anhui','安徽','','',128);

citys[176]=new Array('ya','延安','yanan','yanan','2','shanxi','陕西','','',181);

citys[177]=new Array('np','南平','nanping','nanping','6','fujian','福建','','',81);

citys[178]=new Array('smx','三门峡','sanmenxia','sanmenxia','1','henan','河南','','',296);

citys[179]=new Array('sy','松原','songyuan','songyuan','3','jilin','吉林','','',90);

citys[180]=new Array('hs','黄山','huangshan','huangshan','34','anhui','安徽','','',313);

citys[181]=new Array('wn','渭南','weinan','weinan','2','shanxi','陕西','','',180);

citys[182]=new Array('xn','咸宁','xianning','xianning','3','hubei','湖北','','',329);

citys[183]=new Array('es','恩施','enshi','enshi','10','hubei','湖北','','',331);

citys[184]=new Array('ly','龙岩','longyan','longyan','6','fujian','福建','','',82);

citys[185]=new Array('th','通化','tonghua','tonghua','2','jilin','吉林','','',88);

citys[186]=new Array('xc','宣城','xuancheng','xuancheng','1','anhui','安徽','','',316);

citys[187]=new Array('xlgl','锡林郭勒','xilinguole','xilinguole','2','neimenggu','内蒙古','','',321);

citys[188]=new Array('jdz','景德镇','jingdezhen','jingdezhen','3','jiangxi','江西','','',215);

citys[189]=new Array('jy','济源','jiyuan','jiyuan','1','henan','河南','','',112);

citys[190]=new Array('hh','黑河','heihe','heihe','3','heilongjiang','黑龙江','','',101);

citys[191]=new Array('ll','吕梁','lvliang','lvliang','1','shanxi','山西','','',323);

citys[192]=new Array('ts','天水','tianshui','tianshui','1','gansu','甘肃','','',169);

citys[193]=new Array('yl','榆林','sxyulin','sxyulin','4','shanxi','陕西','','',183);

citys[194]=new Array('px','萍乡','pingxiang','pingxiang','2','jiangxi','江西','','',216);

citys[195]=new Array('hm','哈密','hami','hami','7','xinjiang','新疆','','',244);

citys[196]=new Array('ab','阿坝','aba','aba','7','sichuan','四川','','',283);

citys[197]=new Array('nd','宁德','ningde','ningde','1','fujian','福建','','',83);

citys[198]=new Array('als','阿拉善','alashan','alashan','7','neimenggu','内蒙古','','',322);

citys[199]=new Array('yq','阳泉','yangquan','yangquan','2','shanxi','山西','','',157);

citys[200]=new Array('ks','喀什','kashi','kashi','1','xinjiang','新疆','','',247);

citys[201]=new Array('yc','伊春','hljyichun','hljyichun','7','heilongjiang','黑龙江','','',99);

citys[202]=new Array('xz','宿州','ahsuzhou','ahsuzhou','1','anhui','安徽','','',130);

citys[203]=new Array('aks','阿克苏','akesu','akesu','1','xinjiang','新疆','','',246);

citys[204]=new Array('qdn','黔东南','qiandongnan','qiandongnan','1','guizhou','贵州','','',43);

citys[205]=new Array('qth','七台河','qitaihe','qitaihe','1','heilongjiang','黑龙江','','',301);

citys[206]=new Array('hs','河池','hechi','hechi','1','guangxi','广西','','',140);

citys[207]=new Array('zy','张掖','zhangye','zhangye','5','gansu','甘肃','','',171);

citys[208]=new Array('jq','酒泉','jiuquan','jiuquan','7','gansu','甘肃','','',173);

citys[209]=new Array('snj','神农架','shennongjia','shennongjia','6','hubei','湖北','','',333);

citys[210]=new Array('klmy','克拉玛依','kelamayi','kelamayi','1','xinjiang','新疆','','',242);

citys[211]=new Array('yl','伊犁','yili','yili','6','xinjiang','新疆','','',252);

citys[212]=new Array('gz','甘孜','ganzi','ganzi','2','sichuan','四川','','',284);

citys[213]=new Array('ls','丽水','lishui','lishui','2','zhejiang','浙江','','',285);

citys[214]=new Array('wys','武夷山','wuyishan','wuyishan','4','fujian','福建','','',349);

citys[215]=new Array('bz','亳州','bozhou','bozhou','1','anhui','安徽','','',314);

citys[216]=new Array('hz','贺州','hezhou','hezhou','2','guangxi','广西','','',319);

citys[217]=new Array('by','白银','baiyin','baiyin','1','gansu','甘肃','','',168);

citys[218]=new Array('tc','铜川','tongchuan','tongchuan','2','shanxi','陕西','','',177);

citys[219]=new Array('bygl','巴音郭楞','bayinguoleng','bayinguoleng','1','xinjiang','新疆','','',249);

citys[220]=new Array('xz','忻州','xinzhou','xinzhou','4','shanxi','山西','','',163);

citys[221]=new Array('ww','武威','wuwei','wuwei','1','gansu','甘肃','','',170);

citys[222]=new Array('yx','玉溪','yuxi','yuxi','2','yunnan','云南','','',227);

citys[223]=new Array('hh','红河','honghe','honghe','1','yunnan','云南','','',234);

citys[224]=new Array('wzs','五指山','wuzhishan','wuzhishan','4','hainan','海南','','',353);

citys[225]=new Array('jyg','嘉峪关','jiayuguan','jiayuguan','2','gansu','甘肃','','',343);

citys[226]=new Array('hb','海北','haibei','haibei','2','qinghai','青海','','',188);

citys[227]=new Array('sz','随州','suizhou','suizhou','1','hubei','湖北','','',330);

citys[228]=new Array('bs','保山','baoshan','baoshan','2','yunnan','云南','','',228);

citys[229]=new Array('dq','迪庆','diqing','diqing','1','yunnan','云南','','',240);

citys[230]=new Array('wc','文昌','wenchang','wc','14','hainan','海南','','',397);

citys[231]=new Array('qh','琼海','qionghai','qionghai','6','hainan','海南','','',399);

citys[232]=new Array('wn','万宁','wanning','wanning','3','hainan','海南','','',401);

citys[233]=new Array('df','东方','dongfang','dongfang','1','hainan','海南','','',402);

citys[234]=new Array('ld','乐东','ledong','ledong','3','hainan','海南','','',409);

citys[235]=new Array('ls','陵水','lingshui','lingshui','12','hainan','海南','','',410);

citys[236]=new Array('qz','琼中','qiongzhong','qiongzhong','1','hainan','海南','','',412);

citys[237]=new Array('changbaish','长白山','changbaishan','changbaishan','19','jilin','吉林','','',413);

citys[238]=new Array('tb','台北','taibei','tb','13','taiwan','台湾','','',378);

citys[239]=new Array('xb','新北','xinbei','xb','9','taiwan','台湾','','',379);

citys[240]=new Array('tz','台中','taizhong','tz','4','taiwan','台湾','','',380);

citys[241]=new Array('gx','高雄','gaoxiong','gx','2','taiwan','台湾','','',382);

citys[242]=new Array('jy','嘉义','jiayi','jy','1','taiwan','台湾','','',385);

citys[243]=new Array('hlx','花莲乡','hualianxiang','hlx','2','taiwan','台湾','','',394);

citys[244]=new Array('tdx','台东县','taidongxian','tdx','1','taiwan','台湾','','',395);

 
 function showVideo_youku(domid,vid,autoplay)    
{
    player = new YKU.Player(domid,{
        styleid: '0',
        client_id: client_id_youku,
        vid:vid,
        autoplay: autoplay,
        show_related: false,
        events:{
            onPlayerReady: function(){ /*your code*/ },
            onPlayStart: function(){ /*your code*/ },
            onPlayEnd: function(){ /*your code*/ }
        }
    });
}
 
 (function(){function x(a){var c=document.createElement("script");c.type="text/javascript";c.src=a;document.getElementsByTagName("head")[0].appendChild(c)}function pa(a){if(!a)return"";var a=a.toString(),c,b,f,k,e,h=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,
28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1];k=a.length;f=0;for(e="";f<k;){do c=h[a.charCodeAt(f++)&255];while(f<k&&-1==c);if(-1==c)break;do b=h[a.charCodeAt(f++)&255];while(f<k&&-1==b);if(-1==b)break;e+=String.fromCharCode(c<<2|(b&48)>>4);do{c=a.charCodeAt(f++)&255;if(61==c)return e;c=h[c]}while(f<k&&-1==c);if(-1==c)break;e+=String.fromCharCode((b&15)<<4|(c&60)>>2);do{b=a.charCodeAt(f++)&255;if(61==b)return e;b=h[b]}while(f<k&&-1==b);if(-1==b)break;e+=String.fromCharCode((c&
3)<<6|b)}return e}function F(a,c){for(var b=[],f=0,k,e="",h=0;256>h;h++)b[h]=h;for(h=0;256>h;h++)f=(f+b[h]+a.charCodeAt(h%a.length))%256,k=b[h],b[h]=b[f],b[f]=k;for(var p=f=h=0;p<c.length;p++)h=(h+1)%256,f=(f+b[h])%256,k=b[h],b[h]=b[f],b[f]=k,e+=String.fromCharCode(c.charCodeAt(p)^b[(b[h]+b[f])%256]);return e}function G(a,c){for(var b=[],f=0;f<a.length;f++){for(var e=0,e="a"<=a[f]&&"z">=a[f]?a[f].charCodeAt(0)-97:a[f]-0+26,g=0;36>g;g++)if(c[g]==e){e=g;break}b[f]=25<e?e-26:String.fromCharCode(e+97)}return b.join("")}
function qa(a){function c(a,c){return a<<c|a>>>32-c}function b(a){var c="",d,f;for(d=7;0<=d;d--)f=a>>>4*d&15,c+=f.toString(16);return c}var f,e,g=Array(80),h=1732584193,p=4023233417,i=2562383102,l=271733878,m=3285377520,o,n,t,q,r,a=function(a){for(var a=a.replace(/\r\n/g,"\n"),c="",b=0;b<a.length;b++){var d=a.charCodeAt(b);128>d?c+=String.fromCharCode(d):(127<d&&2048>d?c+=String.fromCharCode(d>>6|192):(c+=String.fromCharCode(d>>12|224),c+=String.fromCharCode(d>>6&63|128)),c+=String.fromCharCode(d&
63|128))}return c}(a);o=a.length;var s=[];for(f=0;f<o-3;f+=4)e=a.charCodeAt(f)<<24|a.charCodeAt(f+1)<<16|a.charCodeAt(f+2)<<8|a.charCodeAt(f+3),s.push(e);switch(o%4){case 0:f=2147483648;break;case 1:f=a.charCodeAt(o-1)<<24|8388608;break;case 2:f=a.charCodeAt(o-2)<<24|a.charCodeAt(o-1)<<16|32768;break;case 3:f=a.charCodeAt(o-3)<<24|a.charCodeAt(o-2)<<16|a.charCodeAt(o-1)<<8|128}for(s.push(f);14!=s.length%16;)s.push(0);s.push(o>>>29);s.push(o<<3&4294967295);for(a=0;a<s.length;a+=16){for(f=0;16>f;f++)g[f]=
s[a+f];for(f=16;79>=f;f++)g[f]=c(g[f-3]^g[f-8]^g[f-14]^g[f-16],1);e=h;o=p;n=i;t=l;q=m;for(f=0;19>=f;f++)r=c(e,5)+(o&n|~o&t)+q+g[f]+1518500249&4294967295,q=t,t=n,n=c(o,30),o=e,e=r;for(f=20;39>=f;f++)r=c(e,5)+(o^n^t)+q+g[f]+1859775393&4294967295,q=t,t=n,n=c(o,30),o=e,e=r;for(f=40;59>=f;f++)r=c(e,5)+(o&n|o&t|n&t)+q+g[f]+2400959708&4294967295,q=t,t=n,n=c(o,30),o=e,e=r;for(f=60;79>=f;f++)r=c(e,5)+(o^n^t)+q+g[f]+3395469782&4294967295,q=t,t=n,n=c(o,30),o=e,e=r;h=h+e&4294967295;p=p+o&4294967295;i=i+n&4294967295;
l=l+t&4294967295;m=m+q&4294967295}r=b(h)+b(p)+b(i)+b(l)+b(m);return r.toLowerCase()}function y(a,c){if("js"==c){var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("src",a)}else"css"==c&&(b=document.createElement("link"),b.setAttribute("rel","stylesheet"),b.setAttribute("type","text/css"),b.setAttribute("href",a));"undefined"!=typeof b&&document.getElementsByTagName("head")[0].appendChild(b)}function Q(){return e.isAndroid?e.isAndroid4?"adr4":"adr":e.isIPHONE?
"iph":e.isIPAD?"ipa":e.isIPOD?"ipo":"oth"}function z(a){return e.isIPAD&&0<=window.location.href.indexOf("v.youku.com")?"x-player":200>=a?"x-player x-player-200":300>=a?"x-player x-player-200-300":660>=a?"x-player x-player-300-660":800>=a?"x-player x-player-660-800":"x-player"}VER="2013/12/2713:55:33";VER="2014/08/2518:26:49";VER="2014/08/2916:02:44";VER="2014/08/2916:05:39";VER="2014/08/2916:10:08";VER="2014/08/2916:19:00";VER="2014/08/2916:19:25";VER="2014/08/2916:39:16";VER="2014/08/2916:40:26";
VER="2014/09/0116:01:10";VER="2014/09/0116:15:20";VER="2014/09/0116:17:27";VER="2014/09/0212:00:09";VER="2014/09/0212:00:41";VER="2014/09/0216:19:29";VER="2014/09/0216:26:07";VER="2014/09/0417:44:57";VER="2014/09/0417:46:33";VER="2014/09/0417:47:49";VER="2014/09/0417:49:21";VER="2014/09/0417:49:56";VER="2014/09/0418:15:26";VER="2014/09/3010:56:11";VER="2014/10/1611:25:41";VER="2014/10/1611:28:29";VER="2014/10/1616:22:57";VER="2014/10/2115:53:11";VER="2014/10/2115:54:04";VER="2014/10/2115:55:08";VER=
"2014/10/2812:03:59";VER="2014/10/2813:08:13";VER="2014/11/0417:56:16";VER="2014/11/0417:59:22";VER="2014/11/0418:03:16";VER="2014/11/0418:23:28";VER="2014/11/0418:28:34";VER="2014/11/0418:32:33";VER="2014/11/0510:56:34";VER="2014/11/0510:57:54";VER="2014/11/0510:59:03";VER="2014/11/0511:00:06";VER="2014/11/0511:02:24";VER="2014/11/0511:11:34";VER="2014/11/1010:38:18";VER="2014/11/1318:06:15";VER="2014/11/1318:23:25";VER="2014/11/1318:29:24";VER="2014/11/1318:30:27";VER="2014/11/1318:31:03";VER="2014/11/1318:32:38";
VER="2014/11/1318:35:09";VER="2014/11/1318:36:04";VER="2014/11/1318:36:59";VER="2014/11/1318:37:54";VER="2014/11/1318:39:50";VER="2014/11/1318:40:10";VER="2014/11/1318:41:10";VER="2014/11/1318:45:44";VER="2014/11/1318:46:49";VER="2014/11/1318:47:19";VER="2014/11/1410:12:17";VER="2014/11/1410:14:53";VER="2014/11/1410:16:39";VER="2014/11/1410:18:07";VER="2014/11/1410:19:15";VER="2014/11/1410:52:32";VER="2014/11/1410:54:46";VER="2014/11/1410:59:26";VER="2014/11/1411:14:09";VER="2014/11/1411:15:20";VER=
"2014/11/1411:16:59";VER="2014/11/1411:17:24";VER="2014/11/1411:57:02";VER="2014/11/1711:02:45";VER="2014/11/1817:14:29";VER="2014/11/2017:50:34";VER="2014/11/2017:50:55";VER="2014/11/2017:51:40";VER="2014/11/2017:53:29";VER="2014/11/2017:54:06";VER="2014/11/2017:57:26";VER="2014/11/2017:59:13";VER="2014/11/2018:00:57";VER="2014/11/2018:33:10";VER="2014/11/2018:34:26";VER="2014/11/2018:36:46";VER="2014/11/2018:40:49";VER="2014/11/2018:42:03";VER="2014/11/2411:24:13";VER="2014/11/2815:53:58";VER="2014/12/0418:00:32";
VER="2014/12/0418:09:56";DEBUG__=0;if(0==DEBUG__||!window.console)window.console={},window.console.log=function(){};debug={log:function(a){null!=document.getElementById("debug")&&(document.getElementById("debug").innerHTML+=a+" | ")}};var b={},C={},e={playerType:"",uniplayerUrl:"http://passport-log.youku.com/logsys/logstorage/append?project=uniplayer&log=",MPIECEURL:"http://passport-log.youku.com/logsys/logstorage/append?project=mpiece&log=",userCache:{a1:"4",a2:"1"},playerState:{PLAYER_STATE_INIT:"PLAYER_STATE_INIT",
PLAYER_STATE_READY:"PLAYER_STATE_READY",PLAYER_STATE_AD:"PLAYER_STATE_AD",PLAYER_STATE_PLAYING:"PLAYER_STATE_PLAYING",PLAYER_STATE_END:"PLAYER_STATE_END",PLAYER_STATE_ERROR:"PLAYER_STATE_ERROR"},playerCurrentState:"PLAYER_STATE_INIT",Log:function(a,c){var b=document.createElement("img");c&&b.addEventListener("error",c,!1);b.src=a+"&r_="+Math.floor(1E4*Math.random());b.id="youku-uniplayer-stat"},isNeedAdrTrick:function(){return e.isAndroid&&!e.adrPlayTrick&&!e.isHTC&&e.isNeedFrontAd&&!e.isVIVO},adrInvalidPauseCheck:function(a){var c=
a.currentTime,b=0,f=!1;e.adrPlayTrick=!0;a.pause();a.play();setInterval(function(){a.currentTime==c&&!f?(b++,a.play(),0==b%10&&(a.load(),a.play())):f=!0},1E3)},sendErrorReport:function(a){var c={},d="",d=e.isIPAD?"xplayer_ipad":e.isIPHONE?"xplayer_iphone":"xplayer_android";c.m=d;c.ec=a;d="";1E3==a&&(d=b.v.data[0].error_code);c.gc=d;c.u=encodeURIComponent(window.location.href);c.v=b.videoInfo?b.videoInfo._sid:"";c.ct=b.v?b.v.data[0].ct:"";c.cs=b.v?b.v.data[0].cs:"";c.hd=e.hd?e.hd:0;c.a=b.v?b.v.controller.area_code+
"|"+b.v.controller.dma_code:"";a="";b.initConfig.vvlogconfig&&b.initConfig.vvlogconfig.pvid&&(a=b.initConfig.vvlogconfig.pvid);c.pid=a;e.Log("http://v.l.youku.com/perror?"+n(c))},uniReport:function(a){a.partner=b.initConfig.client_id;a.os=escape(e.os);a.mios=e.isMobileIOS;a.adrd4=e.isAndroid4;a.mobile=e.isMobile;a.adrpad=e.isAndroidPad;!1==a.mobile&&(a.ua=escape(navigator.userAgent.replace(/[\/\+\*@\(\)\,]/g,"")));a.version=VER.replace(/[-: ]/g,"");e.Log(e.uniplayerUrl+q(a))},Load:function(a,c){if("js"==
c){var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("src",a)}else"css"==c&&(b=document.createElement("link"),b.setAttribute("rel","stylesheet"),b.setAttribute("type","text/css"),b.setAttribute("href",a));"undefined"!=typeof b&&document.getElementsByTagName("head")[0].appendChild(b)},showError:function(a,c){var d=b.get("#x-player");d.innerHTML=c?c:"\u8be5\u89c6\u9891\u683c\u5f0f\u7279\u6b8a\uff0c\u8bf7\u5728PC\u4e0a\u89c2\u770b";d.style.textAlign="center";
d.style.color="white";d.style.lineHeight=d.offsetHeight+"px";if(b.playerEvents&&b.playerEvents.onPlayError)b.playerEvents.onPlayError(c?c:"\u8be5\u89c6\u9891\u683c\u5f0f\u7279\u6b8a\uff0c\u8bf7\u5728PC\u4e0a\u89c2\u770b")}};(function(){var a=document.createElement("video"),c={MP4:"video/mp4",OGG:"video/ogg",WEBM:"video/webm"},b={isWin:"Win",isMac:"Mac",isSafari:"Safari",isChrome:"Chrome",isIPAD:"iPad",isIPAD7:"iPad; CPU OS 7",isIPHONE:"iPhone",isIPOD:"iPod",isLEPAD:"lepad_hls",isMIUI:"MI-ONE",isAndroid:"Android",
isAndroid4:"Android 4.",isAndroid41:"Android 4.1",isSonyDTV:"SonyDTV",isBlackBerry:"BlackBerry",isMQQBrowser:"MQQBrowser",isMobile:"Mobile",isSamSung:"SAMSUNG",isHTC:"HTC",isVIVO:"vivo"};e.supportHTML5Video=!1;e.isIOS=!1;e.os="";if(a.canPlayType){e.supportHTML5Video=!0;for(var f in c)e["canPlay"+f]=a.canPlayType(c[f])?!0:!1}for(var k in b)if(-1!==navigator.userAgent.indexOf(b[k])?(e[k]=!0,e.os+=b[k]+" "):e[k]=!1,-1!==navigator.userAgent.indexOf("Android"))a=navigator.userAgent.indexOf("Android"),
a=navigator.userAgent.substr(a,10),a>b.isAndroid4&&(e.isAndroid4=!0,e.os+=a+" ");e.isMobileIOS=e.isIPAD||e.isIPHONE||e.isIPOD;e.isIOS=e.isMobileIOS||e.isMac;e.isSupportH5M3U8=e.isMobileIOS||e.isMac&&e.isSafari&&!e.isChrome||e.isLEPAD||e.isSonyDTV;e.isSupportH5MP4=(e.isChrome||e.isIE10||e.isAndroid41||e.isAndroid4)&&e.canPlayMP4;k=b=0;try{if(document.all){var g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");g&&(b=1,VSwf=g.GetVariable("$version"),parseInt(VSwf.split(" ")[1].split(",")[0]))}else if(navigator.plugins&&
0<navigator.plugins.length&&(g=navigator.plugins["Shockwave Flash"]))for(var b=1,h=g.description.split(" "),g=0;g<h.length;++g)isNaN(parseInt(h[g]))||parseInt(h[g])}catch(p){k=b=1}e.isSupportFlash=b&&!k;e.isMQQBrowser&&(e.isSupportFlash=!1);e.isPhone=e.isIPHONE||e.isIPOD||e.isAndroid&&e.isMobile;e.isAndroidPad=e.isAndroid&&!e.isMobile;e.isPad=e.isIPAD||e.isAndroidPad;e.isMobile=e.isIPAD||e.isIPHONE||e.isIPOD||e.isLEPAD||e.isMIUI||e.isAndroid4||e.isSonyDTV})();var J=function(a){debug.log("canplay mp4 = "+
e.canPlayMP4);b.initConfig=a;this._vid=a.vid;this._target=a.target;this._partnerId=a.partnerId;a.client_id&&(this._partnerId=a.client_id);!a.pkid&&(!this._vid||!this._target||!this._partnerId)?alert("[Fail]The params of {vid,target,client_id} are necessary !"):(this._events=a.events,b.playerEvents=a.events,e._target=this._target,this._paid=0,null!=a.paid&&(this._paid=a.paid),this._id=a.id,null==this._id&&(this._id="youku-player"),e.playerId=this._id,this._width=a.width,this._height=a.height,this._expand=
a.expand,null==a.width||null==a.height?null==a.expand&&(this._expand=0):null==a.expand&&(this._expand=1),this._prefer=a.prefer?a.prefer.toLowerCase():"flash",this._starttime=a.starttime,this._password=a.password,this._poster=a.poster,this._autoplay=eval(a.autoplay),this._canWide=a.canWide,this._showRelated=a.show_related,this._winType=a.wintype,this._pkid=a.pkid,this._pkpid=a.pkpid,this._pkurl=a.pkurl,this._playlistconfig=a.playlistconfig,this._isMobile=e.isMobile,this._isMobileIOS=e.isMobileIOS,
this._weixin=a.weixin,this._playerType="",b.mk={},b.mk.a3="b4et",b.mk.a4="boa4")};J.prototype={isSupportH5MP4:function(){return e.isSupportH5MP4},isSupportH5M3U8:function(){return e.isSupportH5M3U8},isSupportFlash:function(){return e.isSupportFlash},playerType:function(){if(""!=this._playerType)return this._playerType;this._playerType="h5"==this._prefer?this.isSupportH5M3U8()?"h5m3u8":this.isSupportH5MP4()?"h5mp4":this.isSupportFlash()?"flash":"error":"flash"==this._prefer?this.isSupportFlash()?"flash":
this.isSupportH5M3U8()?"h5m3u8":this.isSupportH5MP4()?"h5mp4":"error":"error";if(("h5m3u8"==this._playerType||"h5mp4"==this._playerType)&&void 0!=this._pkid)this._playerType="h5pk";window.console&&console.log&&console.log("playerType = "+this._playerType);return this._playerType},select:function(){debug.log("playerType = "+this.playerType());if(this.isThirdParty()){var a=this;this.processThirdParty(function(){a.selectHandler()})}else this.selectHandler()},selectHandler:function(){"h5m3u8"==this.playerType()?
this.selectH5M3U8():"h5mp4"==this.playerType()?this.selectH5MP4():"h5pk"==this.playerType()?this.selectH5PK():"flash"==this.playerType()?this.selectFlash():this.selectDirectUrl();if(this._events&&this._events.onPlayerReady){var a=this._events.onPlayerReady;if("h5"==e.playerType)var c=setInterval(function(){if($$$(e.playerId)){e.playerCurrentState=e.playerState.PLAYER_STATE_READY;debug.log(e.playerCurrentState);clearInterval(c);try{l.appendItem("phase","playerready"),a()}catch(b){}}},500);else"flash"==
e.playerType&&(c=setInterval(function(){if(1==C.swfLoaded){e.playerCurrentState=e.playerState.PLAYER_STATE_READY;debug.log(e.playerCurrentState);clearInterval(c);try{l.appendItem("phase","playerready"),a()}catch(b){}}},500))}},selectH5MP4:function(){e.uniReport({mp4:1});e.playerType="h5";var a=this._h5player=new YoukuHTML5Player({id:this._id,vid:this._vid,partnerId:this._partnerId,parentBox:this._target,events:this._events,width:this._width,height:this._height,poster:this._poster,autoplay:this._autoplay,
isMobile:this._isMobile,isMobileIOS:this._isMobileIOS,content:"mp4",wintype:this._winType,expand:this._expand,partner_config:this.partner_config,canWide:this._canWide?this._canWide:0});e.GetMP4OK=function(c,d){l.appendItem("phase","vinfo_mp4");a.startPlay(c,d);if(b.initConfig.events.onMediaSrcOK)b.initConfig.events.onMediaSrcOK(m,d._videoSegsDic[m][0].src)};i.playlistconfig=this._playlistconfig;i.start(this._vid,this._password,"mp4")},selectH5M3U8:function(){e.uniReport({m3u8:1});e.playerType="h5";
var a={id:this._id,vid:this._vid,partnerId:this._partnerId,parentBox:this._target,events:this._events,width:this._width,height:this._height,poster:this._poster,autoplay:this._autoplay,isMobile:this._isMobile,isMobileIOS:this._isMobileIOS,content:"m3u8",wintype:this._winType,expand:this._expand,partner_config:this.partner_config,canWide:this._canWide?this._canWide:0};b.isWeixin=!1;if(e.isIPHONE||e.isIPOD)a.playType="directsrc",this._weixin&&(b.isWeixin=!0);var c=new YoukuHTML5Player(a);this._h5player=
c;e.GetM3U8OK=function(a,b){l.appendItem("phase","vinfo_m3u8");console.log("videoinfo src = "+b.src);c.startPlay(a,b)};i.playlistconfig=this._playlistconfig;i.start(this._vid,this._password,"m3u8")},selectH5PK:function(){e.playerType="h5";var a={id:this._pkid,pid:this._pkpid,url:decodeURIComponent(this._pkurl),parentBox:this._target};this._h5player=new R(a)},processThirdParty:function(a){var c=new S({client_id:b.initConfig.client_id,video_id:b.initConfig.vid,embsig:b.initConfig.embsig,refer:escape(window.location.href)}),
d=this;c.addEventListener(PartnerConstant.OPEN_API_OK,function(c){debug.log("thirdparty res ok");d.partner_config=c.data;a()});c.addEventListener(PartnerConstant.OPEN_API_ERROR,function(){debug.log("thirdparty res error");a()});c.addEventListener(PartnerConstant.OPEN_API_TIME_OUT,function(){debug.log("thirdparty res timeout");a()})},selectH5VTag:function(){e.playerType="h5";var a="http://v.youku.com/player/getM3U8/vid/"+this._vid+"/type/mp4/ts/"+parseInt((new Date).getTime()/1E3),a=a+(this._password?
"/password/"+this._password:""),a='<video src="'+(a+"/v.m3u8")+'" controls width='+this._width+" height="+this._height+" id="+this._id+" autohide=false "+(this._poster?"poster="+this._poster:"")+" "+(!0==this._autoplay?"autoplay=true":"")+"></video>";$$$(this._target).innerHTML=a},isThirdParty:function(){if(void 0!=this._pkid)return!1;var a=b.initConfig.client_id;return null!=a&&16==(a+"").length?!0:!1},selectFlash:function(){e.uniReport({flash:1});e.playerType="flash";var a={imglogo:this._poster||
"",paid:this._paid,partnerId:b.initConfig.client_id};null!=b.initConfig.firsttime&&(a.firsttime=b.initConfig.firsttime);null!=this._autoplay&&(a.isAutoPlay=this._autoplay);null!=b.initConfig.embsig&&(a.embsig=b.initConfig.embsig);null!=this._showRelated&&(a.isShowRelatedVideo=this._showRelated);null!=b.initConfig.password&&(a.passwordstr=b.initConfig.password);null!=b.initConfig.styleid&&(a.styleid=b.initConfig.styleid);null!=b.initConfig.vext&&(a.vext=b.initConfig.vext);for(var c in b.initConfig.adconfig)a[c]=
b.initConfig.adconfig[c];for(c in b.initConfig.flashconfig)a[c]=b.initConfig.flashconfig[c];c="";this.isThirdParty()&&(c="/partnerid/"+this._partnerId);a.delayload&&(c="");var d="";null!=this._winType&&""!=this._winType&&(d="/winType/"+this._winType);null!=b.initConfig.pkid&&(a.VideoIDS=b.initConfig.pkid);null!=b.initConfig.pkpid&&(a.pkpid=b.initConfig.pkpid);null!=b.initConfig.pkurl&&(a.pkurl=b.initConfig.pkurl);c="http://player.youku.com/player.php/sid/"+this._vid+c+d+"/v.swf";b.initConfig.flashsrc&&
(c=b.initConfig.flashsrc);null!=b.initConfig.pkid&&(c="youkupaike.swf");a=n(a);$$$(this._target).innerHTML="<object type=application/x-shockwave-flash data= "+c+" width=100% height=100% id="+this._id+"><param name=allowFullScreen value=true><param name=allowScriptAccess value=always><param name=movie value="+c+"><param name=flashvars value="+a+">"+(b.initConfig.flashext||"")+"</object>";this._expand&&($$$(this._target).style.width=this._width+"px",$$$(this._target).style.height=this._height+"px")},
selectDirectUrl:function(a){a=a||"mp4";debug.log("select directsrc");e.uniReport({direct:1});e.playerType="directsrc";var c=new DirectPlayer({id:this._id,vid:this._vid,partnerId:this._partnerId,parentBox:this._target,events:this._events,width:this._width,height:this._height,poster:this._poster,autoplay:this._autoplay,isMobile:this._isMobile,isMobileIOS:this._isMobileIOS,content:a,playType:"directsrc",wintype:this._winType,expand:this._expand,canWide:this._canWide?this._canWide:0});this._h5player=
c;i.playlistconfig=this._playlistconfig;i.start(this._vid,this._password,a,function(a,b){c.startPlay(a,b)})},selectError_:function(a,c){e.uniReport({error:1});if(this._width||this._height)$$$(this._target).style.width=this._width+"px",$$$(this._target).style.height=this._height+"px";e.playerType="error";e.showError(this._target,a,c)}};C.Player=function(a,c){c.target=a;this.select=new J(c);this.select.select();this._player=""};C.Player.prototype={player:function(){return""!=this._player?this._player:
this._player="h5"==e.playerType?new T(this.select._h5player):"flash"==e.playerType?new U:"error"},resize:function(a,c){this.player().resize(a,c)},currentTime:function(){return this.player().currentTime()},totalTime:function(){return this.player().totalTime()},playVideo:function(){this.player().playVideo()},pauseVideo:function(){this.player().pauseVideo()},seekTo:function(a){this.player().seekTo(a)},hideControls:function(){this.player().hideControls()},showControls:function(){this.player().showControls()},
playVideoById:function(a){this.player().playVideoById(a)},switchFullScreen:function(){try{this.player().switchFullScreen()}catch(a){}}};var U=function(){this._player=document.getElementById(e.playerId)};U.prototype={resize:function(a,c){this._player.style.width=a+"px";this._player.style.height=c+"px"},currentTime:function(){var a=this._player.getPlayerState().split("|");return 3<=a.length?a[2]:-1},totalTime:function(){var a=this._player.getPlayerState().split("|");return 4<=a.length?a[3]:-1},playVideo:function(){this._player.pauseVideo(!1)},
pauseVideo:function(){this._player.pauseVideo(!0)},seekTo:function(a){this._player.nsseek(a)},playVideoById:function(a){this._player.playVideoByID(a)},hideControls:function(){this._player.showControlBar(!1)},showControls:function(){this._player.showControlBar(!0)}};PartnerConstant={OPEN_API_URL:"https://openapi.youku.com/v2/players/custom.json",OPEN_API_OK:"openapiokyouku",OPEN_API_TIME_OUT:"openapitimeoutyouku",OPEN_API_ERROR:"openapierror"};var S=function(a){this._handler={};window.partnerinfo=
this;a.callback="partnerinfo.parse";a=n(a);x(PartnerConstant.OPEN_API_URL+"?"+a);var c=this;setTimeout(function(){c._hasResp||c.dispatch({type:PartnerConstant.OPEN_API_TIME_OUT})},2E3)};S.prototype={addEventListener:function(a,c){this._handler[a]=c},removeEventListener:function(a){this._handler[a]=null},dispatch:function(a){a&&this._handler[a.type]&&(a._target=this,this._handler[a.type](a))},parse:function(a){this._hasResp=!0;null!=a.error||1!=a.status?this.dispatch({type:PartnerConstant.OPEN_API_ERROR}):
this.dispatch({type:PartnerConstant.OPEN_API_OK,data:a})}};var i={},A={},D=[];i.mp4srcs=[];i.start=function(a,c,b,f){this._callback=f;if(null==this._callback)switch(this._type){case "m3u8":this._callback=e.GetM3U8OK;break;case "mp4":this._callback=e.GetMP4OK;break;default:this._callback=e.GetM3U8OK}null!=A[a]&&null!=A[a][b]?(console.log("Cache Hit vid = "+a),this._callback(A[a][b].v,A[a][b].videoInfo)):(this._vid=a,this._password=c,this._type=b,this._videoInfo=null,this._url="",this.mp4srcs=[],this.request())};
i.cache=function(){A[i._vid]={};A[i._vid][i._type]={v:this._v,videoInfo:this._videoInfo}};i.getPlayListUrl=function(){var a="http://v.youku.com/player/getPlayList/VideoIDS/"+this._vid,a=a+"/Pf/4/ctype/12/ev/1",c;for(c in this.playlistconfig)a+="/"+c+"/"+this.playlistconfig[c];return a+"?"};i.error=function(a){a||(a=0);e.sendErrorReport(0);e.uniReport({error:a,vid:b.initConfig.vid});e.showError(b.config.parentBox,"\u8be5\u89c6\u9891\u6682\u65f6\u4e0d\u80fd\u64ad\u653e,\u8bf7\u4e0b\u8f7dAPP\u6216\u5728PC\u4e0a\u89c2\u770b",
320)};i.reportPlayListUep=function(){var a=(new Date).getTime()-this._plreqStartTime;D.push({type:"getplaylist",time:a})};i.response=function(a){this.playlistError||(this.playlistOK=!0,this.reportPlayListUep(),(b.v=a)&&a.data&&a.data[0]&&!0!==a.data[0].rtmp&&!0!==a.data[0].drm?this.init(a):this.error(1,a,a.data,a.data[0]))};i.request=function(){this._url=this.getPlayListUrl();this._password&&(this._url+="password="+escape(this._password),this._url+="&");this._password&&(b.initConfig.client_id&&b.config.partner_config&&
1==b.config.partner_config.status&&1==b.config.partner_config.passless)&&(this._url+="client_id="+b.initConfig.client_id,this._url+="&");this._url+="__callback=BuildVideoInfo.response";""!=b.getUCStr(this._vid)&&(this._url+=b.getUCStr(this._vid));this._plreqStartTime=(new Date).getTime();x(this._url);var a=this;setTimeout(function(){if(!a.playlistOK){a.playlistError=true;e.sendErrorReport(2003);if(b.playerEvents&&b.playerEvents.onPlayError)b.playerEvents.onPlayError("\u89c6\u9891\u4fe1\u606f\u51fa\u9519\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5");
b.get("#x-player").innerHTML="\u89c6\u9891\u4fe1\u606f\u51fa\u9519\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5";b.get("#x-player").style.color="white";b.get("#x-player").style.textAlign="center";b.get("#x-player").style.lineHeight=b.get("#x-player").offsetHeight+"px"}},15E3)};i.m3u8src=function(a){b.password=this._password;return b.m3u8src_v2(this._vid,a)};i.total=function(a){for(var c in a.segs){for(var b=0,f=0,e=0;e<a.segs[c].length;e++)var g=a.segs[c][e],b=b+parseInt(g.seconds),f=f+parseInt(g.size);return{totalTime:b,
totalBytes:f}}};i.cleanSrc=function(){for(var a=this._videoInfo._videoSegsDic[m],c=0;c<a.length;c++)a[c].fyksrc=a[c].src,a[c].src=i.mp4srcs[c]};i.processError=function(a){debug.log("playlist errorcode = "+a.error_code);if(-12==a.error_code||-13==a.error_code)return a.segs={"3gphd":[{no:"0",size:"0",seconds:"0",k:"",k2:""}]},a.streamfileids={"3gphd":"0*0"},!1;null==this._callback?"m3u8"==this._type?e.GetM3U8OK(this._v,{}):e.GetMP4OK(this._v,{}):this._callback(this._v,{});return!0};i.init=function(a){this._v=
a;a=a.data[0];if(!a.ep||!a.ip)e.sendErrorReport(2004),e.showError(null,"\u6570\u636e\u89e3\u6790\u9519\u8bef");else{var c=F(G(b.mk.a3+"o0b"+e.userCache.a1,[19,1,4,7,30,14,28,8,24,17,6,35,34,16,9,10,13,22,32,29,31,21,18,3,2,23,25,27,11,20,5,15,12,0,33,26]).toString(),pa(a.ep));if(2>c.split("_").length)e.sendErrorReport(2004),e.showError(null,"\u6570\u636e\u89e3\u6790\u9519\u8bef");else{e.userCache.sid=c.split("_")[0];e.userCache.token=c.split("_")[1];if(null!=a.error_code&&(-6==a.error_code||-7==a.error_code?
e.sendErrorReport(4E3):e.sendErrorReport(1E3),this.processError(a)))return;c=i.total(a);this._videoInfo=new V(a,this._type);this._videoInfo.totalTime=c?c.totalTime:a.seconds;if("m3u8"==this._type)b.defaultVideoType="mp4",null!=l.getItem("defaultVideoType")&&(b.defaultVideoType=l.getItem("defaultVideoType")),-1==a.streamtypes.indexOf(b.defaultVideoType)&&(b.defaultVideoType="mp4",-1==a.streamtypes.indexOf("mp4")&&(b.defaultVideoType="flv")),debug.log("default = "+b.defaultVideoType),this._videoInfo.src=
i.m3u8src(b.defaultVideoType),this.cache(),null==this._callback?e.GetM3U8OK(this._v,this._videoInfo):this._callback(this._v,this._videoInfo);else if("mp4"==this._type){c=["3gphd","mp4","flv"];m=null;for(var d=0;d<c.length;d++)if(this._videoInfo._videoSegsDic[c[d]]&&!("3gphd"==c[d]&&7200<parseInt(a.seconds))){m=c[d];break}debug.log("mp4 type="+m);m?("flv"==m&&(e.Log(e.uniplayerUrl+q({error:"flvonly",vid:b.initConfig.vid})),b.config.playType="directsrc"),this.fetchDirectSrc(this._videoInfo._videoSegsDic[m]),
this._tid=setInterval("checkSrc()",500)):this.error(2)}}}};i.getFileUrl=function(a){var c=[];if(a)for(var b=0;b<a.length;b++)c.push(a[b].src);return c};i.fetchDirectSrc=function(a){this._fyks=urls=this.getFileUrl(a);if(this._v&&this._v.data[0].trial){for(var a=0,c=this._v.data[0].segs,a=0;a<c.mp4.length&&-1!==c.mp4[a].k;a++);urls.length=a}for(a=0;a<urls.length;a++)i.mp4srcs.push(urls[a])};DirectSrcOK=function(a){null==a||("object"!=typeof a||0==a.length)||i.mp4srcs.push(a[0].server)};var V=function(a,
c){this._sid=e.userCache.sid;this._seed=a.seed;this._fileType=c;var b=new W(this._seed);this._streamFileIds=a.streamfileids;this._videoSegsDic={};for(c in a.segs){for(var f=[],k=0,g=0;g<a.segs[c].length;g++){var h=a.segs[c][g],p={};p.no=h.no;p.size=h.size;p.seconds=h.seconds;h.k&&(p.key=h.k);p.fileId=this.getFileId(a.streamfileids,c,parseInt(g),b);p.type=c;p.src=this.getVideoSrc(h.no,a,c,p.fileId);f[k++]=p}this._videoSegsDic[c]=f}},W=function(a){this._randomSeed=a;this.cg_hun()};W.prototype={cg_hun:function(){this._cgStr=
"";for(var a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/\\:._-1234567890",c=a.length,b=0;b<c;b++){var f=parseInt(this.ran()*a.length);this._cgStr+=a.charAt(f);a=a.split(a.charAt(f)).join("")}},cg_fun:function(a){for(var a=a.split("*"),c="",b=0;b<a.length-1;b++)c+=this._cgStr.charAt(a[b]);return c},ran:function(){this._randomSeed=(211*this._randomSeed+30031)%65536;return this._randomSeed/65536}};V.prototype={getFileId:function(a,c,b,f){for(var e in a)if(e==c){streamFid=a[e];break}if(""==
streamFid)return"";c=f.cg_fun(streamFid);a=c.slice(0,8);b=b.toString(16);1==b.length&&(b="0"+b);b=b.toUpperCase();c=c.slice(10,c.length);return a+b+c},getVideoSrc:function(a,c,d,f,k,g){if(!c.videoid||!d)return"";var h={flv:0,flvhd:0,mp4:1,hd2:2,"3gphd":1,"3gp":0}[d],p={flv:"flv",mp4:"mp4",hd2:"flv","3gphd":"mp4","3gp":"flv"}[d],i=a.toString(16);1==i.length&&(i="0"+i);var l=c.segs[d][a].seconds,a=c.segs[d][a].k;if(""==a||-1==a)a=c.key2+c.key1;d="";c.show&&(d=c.show.show_paid?"&ypremium=1":"&ymovie=1");
c="/player/getFlvPath/sid/"+e.userCache.sid+"_"+i+"/st/"+p+"/fileid/"+f+"?K="+a+"&hd="+h+"&myp=0&ts="+l+"&ypp=0"+d;f=encodeURIComponent(E(F(G(b.mk.a4+"poz"+e.userCache.a2,[19,1,4,7,30,14,28,8,24,17,6,35,34,16,9,10,13,22,32,29,31,21,18,3,2,23,25,27,11,20,5,15,12,0,33,26]).toString(),e.userCache.sid+"_"+f+"_"+e.userCache.token)));c=c+("&ep="+f)+"&ctype=12&ev=1"+("&token="+e.userCache.token);c+="&oip="+b.v.data[0].ip;return"http://k.youku.com"+(c+((k?"/password/"+k:"")+(g?g:"")))}};var T=function(a){this._player=
document.getElementById("youku-html5player-video");null==this._player&&(this._player=document.getElementById("youku-html5player-video-0"));this._oplayer=a};T.prototype={resize:function(a,c){this._oplayer.resize(a,c)},currentTime:function(){return this._player.currentTime},totalTime:function(){return this._player.duration},playVideo:function(){this._oplayer.play()},pauseVideo:function(){this._player.pause()},seekTo:function(a){try{this._player.currentTime=a}catch(c){}},playVideoById:function(a,c){debug.log("YKH5Player playVideoByid");
var d=this._oplayer;b.config.autoplay=!0;b.config.vid=a;i.start(a,c,b.config.content,function(a,c){d.startPlay(a,c)})},hideControls:function(){this._player.removeAttribute("controls")},showControls:function(){this._player.setAttribute("controls",!0)},switchFullScreen:function(){this._oplayer.controls.fullscreenPanel.switchFullScreen({})}};(function(){this.FX=function(c,b,d,e,p,i){this.el=a.get(c);this.attributes=b;this.duration=d||0.7;this.transition=e&&e in FX.transitions?e:"easeInOut";this.callback=
p||function(){};this.ctx=i||window;this.units={};this.frame={};this.endAttr={};this.startAttr={}};this.FX.transitions={linear:function(a,c,b,d){return b*a/d+c},easeIn:function(a,c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOut:function(a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOut:function(a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c}};this.FX.prototype={start:function(){var a=this;this.getAttributes();this.duration*=1E3;this.time=(new Date).getTime();this.animating=!0;this.timer=
setInterval(function(){var c=(new Date).getTime();c<a.time+a.duration?(a.elapsed=c-a.time,a.setCurrentFrame()):(a.frame=a.endAttr,a.complete());a.setAttributes()},10)},ease:function(a,c){return FX.transitions[this.transition](this.elapsed,a,c-a,this.duration)},complete:function(){clearInterval(this.timer);this.timer=null;this.animating=!1;this.callback.call(this.ctx)},setCurrentFrame:function(){for(attr in this.startAttr)if(this.startAttr[attr]instanceof Array){this.frame[attr]=[];for(var a=0;a<this.startAttr[attr].length;a++)this.frame[attr][a]=
this.ease(this.startAttr[attr][a],this.endAttr[attr][a])}else this.frame[attr]=this.ease(this.startAttr[attr],this.endAttr[attr])},getAttributes:function(){for(var c in this.attributes)switch(c){case "color":case "borderColor":case "border-color":case "backgroundColor":case "background-color":this.startAttr[c]=b(this.attributes[c].from||a.getStyle(this.el,c));this.endAttr[c]=b(this.attributes[c].to);break;case "scrollTop":case "scrollLeft":var e=this.el==document.body?document.documentElement||document.body:
this.el;this.startAttr[c]=this.attributes[c].from||e[c];this.endAttr[c]=this.attributes[c].to;break;default:var g=this.attributes[c].to,h=this.attributes[c].units||"px";this.attributes[c].from?e=this.attributes[c].from:(e=parseFloat(a.getStyle(this.el,c))||0,"px"!=h&&document.defaultView&&(a.setStyle(this.el,c,(g||1)+h),e*=(g||1)/parseFloat(a.getStyle(this.el,c)),a.setStyle(this.el,c,e+h)));this.units[c]=h;this.endAttr[c]=g;this.startAttr[c]=e}},setAttributes:function(){for(var c in this.frame)switch(c){case "opacity":a.setStyle(this.el,
c,this.frame[c]);break;case "scrollLeft":case "scrollTop":(this.el==document.body?document.documentElement||document.body:this.el)[c]=this.frame[c];break;case "color":case "borderColor":case "border-color":case "backgroundColor":case "background-color":a.setStyle(this.el,c,"rgb("+Math.floor(this.frame[c][0])+","+Math.floor(this.frame[c][1])+","+Math.floor(this.frame[c][2])+")");break;default:a.setStyle(this.el,c,this.frame[c]+this.units[c])}}};var a={get:function(a){return"string"==typeof a?document.getElementById(a):
a},getStyle:function(a,b){var b=c(b),d=document.defaultView;return d&&d.getComputedStyle?d.getComputedStyle(a,"")[b]||null:"opacity"==b?(d=a.filters("alpha").opacity,isNaN(d)?1:d?d/100:0):a.currentStyle[b]||null},setStyle:function(a,b,d){"opacity"==b?(a.style.filter="alpha(opacity="+100*d+")",a.style.opacity=d):(b=c(b),a.style[b]=d)}},c=function(){var a={};return function(c){if(a[c])return a[c];var b=c.split("-"),d=b[0];if(1<b.length)for(var e=1,i=b.length;e<i;e++)d+=b[e].charAt(0).toUpperCase()+
b[e].substring(1);return a[c]=d}}(),b=function(){var a=/^#?(\w{2})(\w{2})(\w{2})$/,c=/^#?(\w{1})(\w{1})(\w{1})$/,b=/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;return function(d){var e=d.match(a);if(e&&4==e.length)return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)];if((e=d.match(b))&&4==e.length)return[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10)];if((e=d.match(c))&&4==e.length)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}}()})();FX.transitions.quadIn=
function(a,c,b,f){return b*(a/=f)*a+c};FX.transitions.quadOut=function(a,c,b,f){return-b*(a/=f)*(a-2)+c};FX.transitions.quadInOut=function(a,c,b,f){return 1>(a/=f/2)?b/2*a*a+c:-b/2*(--a*(a-2)-1)+c};FX.transitions.cubicIn=function(a,c,b,f){return b*(a/=f)*a*a+c};FX.transitions.cubicOut=function(a,c,b,f){return b*((a=a/f-1)*a*a+1)+c};FX.transitions.cubicInOut=function(a,c,b,f){return 1>(a/=f/2)?b/2*a*a*a+c:b/2*((a-=2)*a*a+2)+c};FX.transitions.quartIn=function(a,c,b,f){return b*(a/=f)*a*a*a+c};FX.transitions.quartOut=
function(a,c,b,f){return-b*((a=a/f-1)*a*a*a-1)+c};FX.transitions.quartInOut=function(a,c,b,f){return 1>(a/=f/2)?b/2*a*a*a*a+c:-b/2*((a-=2)*a*a*a-2)+c};FX.transitions.quintIn=function(a,c,b,f){return b*(a/=f)*a*a*a*a+c};FX.transitions.quintOut=function(a,c,b,f){return b*((a=a/f-1)*a*a*a*a+1)+c};FX.transitions.quintInOut=function(a,c,b,f){return 1>(a/=f/2)?b/2*a*a*a*a*a+c:b/2*((a-=2)*a*a*a*a+2)+c};FX.transitions.expoIn=function(a,c,b,f){return 0==a?c:b*Math.pow(2,10*(a/f-1))+c-0.001*b};FX.transitions.expoOut=
function(a,c,b,f){return a==f?c+b:1.001*b*(-Math.pow(2,-10*a/f)+1)+c};FX.transitions.expoInOut=function(a,c,b,f){return 0==a?c:a==f?c+b:1>(a/=f/2)?b/2*Math.pow(2,10*(a-1))+c-5.0E-4*b:1.0005*(b/2)*(-Math.pow(2,-10*--a)+2)+c};FX.transitions.circIn=function(a,c,b,f){return-b*(Math.sqrt(1-(a/=f)*a)-1)+c};FX.transitions.circOut=function(a,c,b,f){return b*Math.sqrt(1-(a=a/f-1)*a)+c};FX.transitions.circInOut=function(a,c,b,f){return 1>(a/=f/2)?-b/2*(Math.sqrt(1-a*a)-1)+c:b/2*(Math.sqrt(1-(a-=2)*a)+1)+c};
FX.transitions.backIn=function(a,c,b,f,e){e=e||1.70158;return b*(a/=f)*a*((e+1)*a-e)+c};FX.transitions.backOut=function(a,c,b,f,e){e=e||1.70158;return b*((a=a/f-1)*a*((e+1)*a+e)+1)+c};FX.transitions.backBoth=function(a,c,b,f,e){e=e||1.70158;return 1>(a/=f/2)?b/2*a*a*(((e*=1.525)+1)*a-e)+c:b/2*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)+c};FX.transitions.elasticIn=function(a,c,b,f,e,g){if(0==a)return c;if(1==(a/=f))return c+b;g||(g=0.3*f);!e||e<Math.abs(b)?(e=b,b=g/4):b=g/(2*Math.PI)*Math.asin(b/e);return-(e*
Math.pow(2,10*(a-=1))*Math.sin((a*f-b)*2*Math.PI/g))+c};FX.transitions.elasticOut=function(a,b,d,f,e,g){if(0==a)return b;if(1==(a/=f))return b+d;g||(g=0.3*f);if(!e||e<Math.abs(d))var e=d,h=g/4;else h=g/(2*Math.PI)*Math.asin(d/e);return e*Math.pow(2,-10*a)*Math.sin((a*f-h)*2*Math.PI/g)+d+b};FX.transitions.elasticBoth=function(a,b,d,f,e,g){if(0==a)return b;if(2==(a/=f/2))return b+d;g||(g=f*0.3*1.5);if(!e||e<Math.abs(d))var e=d,h=g/4;else h=g/(2*Math.PI)*Math.asin(d/e);return 1>a?-0.5*e*Math.pow(2,10*
(a-=1))*Math.sin((a*f-h)*2*Math.PI/g)+b:0.5*e*Math.pow(2,-10*(a-=1))*Math.sin((a*f-h)*2*Math.PI/g)+d+b};FX.transitions.backIn=function(a,b,d,f,e){"undefined"==typeof e&&(e=1.70158);return d*(a/=f)*a*((e+1)*a-e)+b};FX.transitions.backOut=function(a,b,d,f,e){"undefined"==typeof e&&(e=1.70158);return d*((a=a/f-1)*a*((e+1)*a+e)+1)+b};FX.transitions.backBoth=function(a,b,d,f,e){"undefined"==typeof e&&(e=1.70158);return 1>(a/=f/2)?d/2*a*a*(((e*=1.525)+1)*a-e)+b:d/2*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)+b};
FX.transitions.bounceIn=function(a,b,d,f){return d-FX.transitions.bounceOut(f-a,0,d,f)+b};FX.transitions.bounceOut=function(a,b,d,f){return(a/=f)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b};FX.transitions.bounceBoth=function(a,b,d,f){return a<f/2?0.5*FX.transitions.bounceIn(2*a,0,d,f)+b:0.5*FX.transitions.bounceOut(2*a-f,0,d,f)+0.5*d+b};$$$=function(a){return document.getElementById(a)};var ra=
function(a){a=parseInt(a);return Math.min(Math.max(a,0),b.videoInfo.totalTime)},q=function(a){var b=[],d;for(d in a)b.push(d+":"+a[d]);return"{"+b.join(",")+"}"},n=function(a){var b=[],d;for(d in a)b.push(d+"="+a[d]);return b.join("&")},E=function(a){if(!a)return"";var a=a.toString(),b,d,f,e,g,h;f=a.length;d=0;for(b="";d<f;){e=a.charCodeAt(d++)&255;if(d==f){b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>2);b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((e&
3)<<4);b+="==";break}g=a.charCodeAt(d++);if(d==f){b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>2);b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((e&3)<<4|(g&240)>>4);b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((g&15)<<2);b+="=";break}h=a.charCodeAt(d++);b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>2);b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((e&
3)<<4|(g&240)>>4);b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((g&15)<<2|(h&192)>>6);b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(h&63)}return b},v={"-1":"\u8be5\u89c6\u9891\u6b63\u5728\u8f6c\u7801\u4e2d... , \u8bf7\u7a0d\u5019","-2":"\u8be5\u89c6\u9891\u6b63\u5728\u5ba1\u6838\u4e2d... , \u8bf7\u7a0d\u5019","-3":"\u8be5\u89c6\u9891\u5df2\u88ab\u5c4f\u853d","-4":"\u8be5\u89c6\u9891\u8f6c\u7801\u5931\u8d25","-9":"\u65e0\u6548\u89c6\u9891",
"-5":"\u8be5\u89c6\u9891\u88ab\u8bbe\u4e3a\u79c1\u5bc6","-6":"\u8be5\u89c6\u9891\u5df2\u7ecf\u52a0\u5bc6","-7":"\u5bf9\u4e0d\u8d77\uff0c\u60a8\u8f93\u5165\u7684\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165","-8":"Sorry,this video can only be streamed within Mainland China.","-15":"\u5f88\u62b1\u6b49! \u8be5\u89c6\u9891\u7684\u683c\u5f0f\u6682\u65f6\u4e0d\u652f\u6301\u5728ipad\u5e73\u53f0\u4e0a\u64ad\u653e","-25":"\u60a8\u7684\u8d26\u53f7\u89c2\u770b\u8fc7\u4e8e\u9891\u7e41\uff0c\u8d85\u8fc7IP\u4e0a\u9650,\u5982\u8d26\u53f7\u88ab\u76d7\uff0c\u8bf7\u53ca\u65f6\u8054\u7cfb\u5ba2\u670d",
"-26":"\u60a8\u6240\u5728\u7684\u56fd\u5bb6/\u5730\u533a\u65e0\u6cd5\u89c2\u770b\u6b64\u89c6\u9891\uff01"},K=function(a,c){this.player=a;this._handle={};this._feedback=b.get(".x-feedback");this._message=this._feedback.getElementsByClassName("x-message")[0];this._messagetxt=this._message.getElementsByClassName("x-message-txt")[0];this._messagebtn=this._message.getElementsByClassName("x-message-btn")[0];this._errorcode=this._error=null;this.init(c);this.bindEvent()};K.prototype={init:function(a){if(a&&
a.data&&a.data[0]&&(a.data[0].error_code||a.data[0].error)){b.hide(b.get(".x-video-button"));b.hide(b.get(".x-console"));this._vid=a.data[0].videoid;this._title=a.data[0].title;this._userid=a.data[0].userid;this._error=a.data[0].error;this._errorcode=parseInt(a.data[0].error_code);switch(this._errorcode){case -1:this.setMessage(v["-1"]);break;case -2:this.setMessage(v["-2"]);break;case -3:this.setMessage(v["-3"]);this.setButton("\u641c\u7d22",this.search);break;case -4:this.setMessage(v["-4"]);this.bind_feedback=
b.bindAsEventListener(this,this.feedback);this.setButton("\u5728\u7ebf\u53cd\u9988",this.bind_feedback);break;case -9:this.setMessage(v["-9"]);break;case -5:this.setMessage(v["-5"]);this.bind_contact=b.bindAsEventListener(this,this.contactOwner);this.setButton("\u8054\u7cfb\u4e0a\u4f20\u8005",this.bind_contact);break;case -6:this._messagetxt.innerHTML="<input type=password placeholder=\u8f93\u5165\u5bc6\u7801\u89c2\u770b\u89c6\u9891 class=x-message-input>";this.bind_inputpassword=b.bindAsEventListener(this,
this.inputPassword);this.setButton("\u786e\u5b9a",this.bind_inputpassword);break;case -7:this._messagetxt.innerHTML='<input type=password placeholder="\u5bf9\u4e0d\u8d77,\u60a8\u8f93\u5165\u7684\u5bc6\u7801\u9519\u8bef,\u8bf7\u91cd\u65b0\u8f93\u5165" class=x-message-input>';this.bind_inputpassword=b.bindAsEventListener(this,this.inputPassword);this.setButton("\u786e\u5b9a",this.bind_inputpassword);break;case -8:this.setMessage(v["-8"]);break;case -15:this.setMessage(v["-15"]);break;case -25:this.setMessage(v["-25"]);
break;case -26:this.setMessage(v["-26"]);break;default:this.setMessage(a.data[0].error)}this.show();this.showMessage()}},bindEvent:function(){},show:function(){b.show(this._feedback)},hide:function(){b.hide(this._feedback)},showMessage:function(){b.show(this._message)},hideMessage:function(){b.hide(this._message)},setMessage:function(a){this._messagetxt.innerHTML="<p>"+a+"</p>"},setButton:function(a,c){this._messagebtn.innerHTML="<button type=button class=x-btn>"+a+"</button>";var d=this._message.getElementsByClassName("x-btn")[0];
b.addEventHandler(d,"click",c)},search:function(){window.location.href="http://www.soku.com/search_video/q_"+this._title},feedback:function(){window.location.href="http://www.youku.com/service/feed/subtype/4/"},contactOwner:function(){window.location.href="http://i.youku.com/u/id_"+this._userid},onPasswordConfirm:function(){},inputPassword:function(){var a=this._messagetxt.getElementsByClassName("x-message-input")[0],c=a.value;if(null==c||0==c.replace(/\s/g,"").length)a.value="",a.placeholder="\u5bc6\u7801\u4e3a\u7a7a\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165";
else{var d=this.player;b.password=c;i.start(this._vid,c,b.config.content,function(a,e){b.hide(b.get(".x-feedback"));b.password=c;b.show(b.get(".x-video-button"));b.hide(b.get(".x-message"));d.startPlay(a,e)})}}};var X=function(a){this._handler={};this.player=a;this._fullflag=null;this.init();this._fullscreen=b.get(".x-fullscreen");this._btn=this._fullscreen.getElementsByTagName("button")[0];this._btnb=this._btn.getElementsByTagName("b")[0];this.bindEvent()};X.prototype={addEventListener:function(a,
b){this._handler[a]=b},removeEventListener:function(a){this._handler[a]=null},dispatch:function(a){a&&this._handler[a.type]&&(a._target=this,this._handler[a.type](a))},init:function(){},bindEvent:function(){this.bind_switch=b.bindAsEventListener(this,this.switchFullScreen);b.addEventHandler(this._fullscreen,"click",this.bind_switch,!0)},removeEvent:function(){b.removeEventHandler(this._fullscreen,"click",this.bind_switch,!0)},zoomStatus:function(){return this._btnb.className},fullFlag:function(){if(null!==
this._fullflag)return this._fullflag;var a=this.player.video.webkitDisplayingFullscreen;return this._fullflag="undefined"!=typeof a?a:!1},switchFullScreen:function(a){var c=a.method||"c",d=this._btnb.className;b.config.events&&b.config.events.onSwitchFullScreen?(-1===d.indexOf("in")?(this._fullflag=!1,this._btnb.className=d.replace(/out/g,"in"),this.player.controls.hideShowListBtn(),this.player._reporter.sendUserActionReport("xexfs",c),this.player.adjustVideoRatio(1),this.dispatch({type:"exitfullscreen"})):
(this._fullflag=!0,this._btnb.className=d.replace(/in/g,"out"),this.player.controls.showShowListBtn(),this.player._reporter.sendUserActionReport("xenfs",c),this.player.adjustVideoRatio(),this.dispatch({type:"enterfullscreen"})),c=b.config.events.onSwitchFullScreen,c(a,d)):(a=document.getElementById("x-player"),-1===d.indexOf("in")?(this.player._reporter.sendUserActionReport("xexfs",c),document.webkitCancelFullScreen&&(this._btnb.className=d.replace(/out/g,"in"),this._fullflag=!1,document.webkitCancelFullScreen())):
(this.player._reporter.sendUserActionReport("xenfs",c),a.webkitRequestFullScreen?(this._btnb.className=d.replace(/in/g,"out"),this._fullflag=!0,a.webkitRequestFullScreen()):this.player.video.webkitSupportsFullscreen&&1<=this.player.video.readyState&&this.player.video.webkitEnterFullscreen()))}};var Y=function(a,c){this.handler={};this.player=a;this.information=b.get(".x-video-info");this.title=this.information.getElementsByClassName("x-title")[0];this.videoState=this.information.getElementsByClassName("x-video-state")[0];
b.hide(this.videoState);this.init(c)};Y.prototype={init:function(a){!a.data[0].trial&&(!a.data[0].error_code&&!a.data[0].error)&&(this.title.innerHTML=a.data[0].title.substr(0,20),this.videoState.innerHTML="<span>\u65f6\u957f: "+b.getTime(parseInt(a.data[0].seconds))+"</span>",this.show())},show:function(){b.v.data[0].trial||b.show(this.information)},hide:function(){b.hide(this.information)},bindEvent:function(){}};var Z=function(a){this.player=a;this._tip=b.get(".x-prompt");this.init()};Z.prototype=
{init:function(){this._tip.innerHTML='<div class=x-prompt-mode><div class=x-prompt-time></div><div class=x-prompt-forward>\u5feb\u8fdb</div><div class=x-prompt-back>\u5feb\u9000</div><div class=x-mask></div></div><div class=x-prompt-status style="display:none"><div class=x-prompt-txt></div><div class=x-mask></div></div>';this._mode=this._tip.getElementsByClassName("x-prompt-mode")[0];this._time=this._tip.getElementsByClassName("x-prompt-time")[0];this._back=this._tip.getElementsByClassName("x-prompt-back")[0];
this._forward=this._tip.getElementsByClassName("x-prompt-forward")[0];this._status=this._tip.getElementsByClassName("x-prompt-status")[0];this._statusTxt=this._tip.getElementsByClassName("x-prompt-txt")[0]},setProgress_:function(a){!0!=this._progressFlag&&(this._time.innerHTML=b.getTime(parseInt(a)))},setStatus:function(a){this._statusTxt.innerHTML=a;this.showStatus()},hideStatus:function(){b.hide(this._status);b.hide(this._tip)},showStatus:function(){b.hide(this._mode);b.show(this._status);b.show(this._tip)},
setTip:function(a,c){this._progressFlag=!0;this._time.innerHTML=b.getTime(ra(a+c));0>=c?(b.show(this._back),b.hide(this._forward)):(b.show(this._forward),b.hide(this._back));var d=this;setTimeout(function(){d._progressFlag=false},1E3)},isVisible:function(){return"none"!=this._tip.style.display},hide:function(){b.hide(this._tip)},show:function(){b.show(this._mode);b.hide(this._status);b.show(this._tip)},autoHide:function(a){var b=this;setTimeout(function(){b.hide()},a||1E3)}};var $=function(a,c){this._handler=
{};b.isWeixin?b.get(".x-localization").style.display="none":!c||!c.data||!c.data[0]||!c.data[0].dvd||!c.data[0].dvd.audiolang?b.get(".x-localization").style.display="none":(this.player=a,this._language=b.get(".x-localization"),this.init(c),this.bindEvent(),this._button=this._language.getElementsByTagName("button")[0],this._panel=this._language.getElementsByTagName("div")[0],this._nodes=this._language.getElementsByTagName("li"))};$.prototype={addEventListener:function(a,b){this._handler[a]=b},removeEventListener:function(a){this._handler[a]=
null},dispatch:function(a){a&&this._handler[a.type]&&(a._target=this,this._handler[a.type](a))},init:function(a){for(var a=a.data[0],b=a.dvd.audiolang,d=["<button class=x-control-btn>","","</button>"],f=["<div class=x-panel><ul>","","</ul><div class=x-mask></div>","</div>"],e=[],g=0;g<b.length;g++){var h="",h=h+("<li data-vid="+b[g].vid),h=h+(" data-language="+b[g].lang);b[g].vid==a.vidEncoded?(d[1]=b[g].lang,h+=" class=selected>"):h+=">";h+=b[g].lang+"</li>";e[b[g].langid]=h}f[1]=e.join("");this._language.innerHTML=
d.join("")+f.join("")},bindEvent:function(){var a=this._language.getElementsByTagName("li");if(0!=a.length){this.bind_toggle=b.bindAsEventListener(this,this.toggleLanguagePanel);b.addEventHandler(this._language,"click",this.bind_toggle);for(var c=0;c<a.length;c++)b.addEventHandler(a[c],"click",b.bindAsEventListener(this,this.switchLanguage))}},removeEvent:function(){null!=this._language&&b.removeEventHandler(this._language,"click",this.bind_toggle)},hide:function(a){if(this._language){var b=this._panel;
this._language.className=this._language.className.replace(/[\s]*pressed/g,"");b.style.display="none";a||this.dispatch({type:"settinghide"})}},toggleLanguagePanel:function(a){var b=this._panel;-1===this._language.className.indexOf("pressed")?(this._language.className+=" pressed",b.style.display="block",this.dispatch({type:"settingshow"}),this.player._reporter.sendUserActionReport("xcl","c")):(this.hide(),this.player._reporter.sendUserActionReport("xhl","c"));this.dispatch(a)},switchLanguage:function(a){this.player._reporter.sendUserActionReport("xsl",
"c");a.stopPropagation();var a=a.target,c=null,d=null;a.getAttribute?(c=a.getAttribute("data-vid"),d=a.getAttribute("data-language")):(c=a.parentNode.getAttribute("data-vid"),d=a.parentNode.getAttribute("data-language"));b.defaultLanguage=d;a=this._nodes;for(d=0;d<a.length;d++)if(a[d].getAttribute("data-vid")==c){if(-1!==a[d].className.indexOf("selected")){this.toggleLanguagePanel();return}a[d].innerHTML=a[d].getAttribute("data-language");a[d].className+=" selected";this._button.innerHTML=a[d].getAttribute("data-language")}else a[d].innerHTML=
a[d].getAttribute("data-language"),a[d].className=a[d].className.replace(/[\s]*selected/g,"");this.toggleLanguagePanel();this.dispatch({type:"settingdone"});var f=this.player,e=this.player.currentTime;if("mp4"==b.config.content)e=this.player.currentTime,i.start(c,"",b.config.content,function(a,d){console.log("switchLanguage vid = "+c);if(a.data&&a.data[0]){if(a.data[0].dvd==null){a.data[0].dvd=b.v.data[0].dvd;console.log("switchLanuage keep dvd info audiolang")}b.config.nextAutoPlay=1;if(d._videoSegsDic!=
null&&d._videoSegsDic[m]!=null){f.video.src=d._videoSegsDic[m][0].src;f.video.load();f.video.play()}var g=0;f.video.addEventListener("canplay",function(){if(g!==1){g=1;f.seek(e)}})}});else{this.player.video.src=b.m3u8src_v2(c,b.defaultVideoType);this.player.video.autoplay=!0;b.unitedTag=null;var g=this,h=0;this.player.video.addEventListener("canplay",function(){if(h!==1){h=1;g.player.seek(e)}});this.player.video.load();this.player.video.play()}}};var l={setItem:function(a,b){try{window.localStorage.setItem(a,
b)}catch(d){}},appendItem:function(a,b){"phase"==a&&!this.phaseTag&&(this.phaseTag=!0,l.removeItem("phase"));try{var d=l.getItem(a);null!==d&&(b=d+"-"+b);window.localStorage.setItem(a,b)}catch(f){}},getItem:function(a){try{return window.localStorage.getItem(a)}catch(b){return null}},removeItem:function(a){try{window.localStorage.removeItem(a)}catch(b){}}},aa=function(a){this.player=a;this._progress=b.get(".x-progress-mini");this._track=this._progress.getElementsByClassName("x-progress-track-mini")[0];
this._play=this._progress.getElementsByClassName("x-progress-play-mini")[0];this._load=this._progress.getElementsByClassName("x-progress-load-mini")[0];this._handler={};this.bindEvent();this.resetProgress();this.hide()};aa.prototype={addEventListener:function(a,b){this._handler[a]=b},removeEventListener:function(a){this._handler[a]=null},bindEvent:function(){},removeEvent:function(){},dispatch:function(a){if(a&&this._handler[a.type])this._handler[a.type]()},setProgress:function(a,c){var d=Math.min(a,
b.videoInfo.totalTime);this.playTime=d;var f=d/b.videoInfo.totalTime;this._play.style.width=100*f+"%";!0!==c&&(this.loadTime=d+=Math.max(this.player.bufferedEnd()-a,0),f=d/b.videoInfo.totalTime+0.05,this._load.style.width=100*Math.min(Math.max(f,0),1)+"%")},resetProgress:function(){this._play.style.width="0%";this._load.style.width="0%"},show:function(){this._progress.style.display="block"},hide:function(){this._progress.style.display="none"}};var ba=function(a,c){this._handler={};this._hasPayInfo=
!1;this._payInfo=b.get(".x-pay");this._text=b.get(".x-pay-txt");this._title=this._text.getElementsByTagName("h1")[0];this._vip=this._text.getElementsByTagName("em")[0];this._tip=b.get(".x-pay-tips");this._button=b.get(".x-pay-btn");this._tryBtn=b.get("#x-try");this._payBtn=b.get("#x-pay");this.player=a;this.init(c)};ba.prototype={addEventListener:function(a,b){this._handler[a]=b},removeEventListener:function(a){this._handler[a]=null},dispatch:function(a){a&&this._handler[a.type]&&(a._target=this,
this._handler[a.type](a))},bindEvent:function(){this.bind_try=b.bindAsEventListener(this,this.play);this.bind_pay=b.bindAsEventListener(this,this.pay);b.addEventHandler(this._tryBtn,"click",this.bind_try);b.addEventHandler(this._payBtn,"click",this.bind_pay)},removeEvent:function(){b.removeEventHandler(this._tryBtn,"click",this.bind_try);b.removeEventHandler(this._payBtn,"click",this.bind_pay)},init:function(a){if(null==a.data[0].trial)debug.log("not pay");else{this._hasPayInfo=!0;this._showid=a.data[0].show.showid;
this._type=a.data[0].show.paid_type;var b=a.data[0].title;12<b.length&&(b=b.substr(0,12)+"...");this._tryDuration=parseInt(a.data[0].trial.time);this.player.tryDuration=this._tryDuration;debug.log("try = "+this._tryDuration);"vod"==this._type?(this._title.innerHTML=b+"<em class=x-vip>\u4ed8\u8d39\u5f71\u7247</em>",this._payBtn.innerHTML="\u7acb\u5373\u8d2d\u4e70"):(this._title.innerHTML=b+"<em class=x-vip>\u4ed8\u8d39\u5305\u6708\u5f71\u7247</em>",this._payBtn.innerHTML="\u5f00\u901a\u4f1a\u5458");
this.bindEvent();this.show();this.player._reporter.sendPayReport()}},play:function(){if((e.isIPHONE||e.isIPOD)&&null!=b.v.data[0].trial)this.player.video.style.display="block";0===this.activeTime?this.player.seek(0):this.player.video.play();this.player._reporter.sendUserActionReport("xtry","c")},pay:function(){this.player.video.pause();b.v.payInfo&&b.v.payInfo.h5_caseurl&&window.open(b.v.payInfo.h5_caseurl,"","",!1);this.player._reporter.sendUserActionReport("xbuy","c")},hide:function(){this._payInfo&&
(this._payInfo.style.display="none")},show:function(){!1!=this._hasPayInfo&&(this._payInfo.style.display="block",0>=this._tryDuration&&b.hide(this._tryBtn))},isBlock:function(){return"block"==this._payInfo.style.display},showTip:function(){this._hasPayInfo&&(this._tip.innerHTML="\u514d\u8d39\u8bd5\u770b\u5df2\u7ecf\u7ed3\u675f\uff0c\u4ed8\u8d39\u5373\u53ef\u89c2\u770b",this.show())},clearTip:function(){this._tip.innerHTML=""},hasPayInfo:function(){return this._hasPayInfo},tryDuration:function(){return this._tryDuration}};
var ca=function(a,b){this._handler={};this.player=a;this._videoInfo=b;this._app_disable=!1;this._limitTime=2400;!0==this._videoInfo.controller.app_disable&&(this._app_disable=!0);this._isLimit=!1;!0==this._videoInfo.controller.xplayer_disable&&(this._isLimit=!0,this.player.tryDuration=this._limitTime);this._isCreated=!1;debug.log("videoInfo.controller.xplayer_disable:",this._isLimit);debug.log("videoInfo.controller.app_disable:",this._app_disable)};ca.prototype={addEventListener:function(a,b){this._handler[a]=
b},removeEventListener:function(a){this._handler[a]=null},dispatch:function(a){a&&this._handler[a.type]&&(a._target=this,this._handler[a.type](a))},create:function(){if(!this._isCreated){debug.log("playLimit create");this.player.video.pause();this._isCreated=!0;var a=b.get("#x-player"),c=this._videoInfo.controller.mobile_disabled,d=this._videoInfo.controller.pad_disabled,f=this._videoInfo.controller.pc_disabled,c=!1==this._app_disable&&(!0==c||!0==d)&&!1==f;!0==this._app_disable||c?(a.innerHTML="<div class=x-app-guide><div class=x-app-guide-tips><p>\u672c\u9875\u9762\u63d0\u4f9b40\u5206\u949f\u9884\u89c8\uff0c</p><p>\u8bf7\u4f7f\u7528\u7535\u8111\u89c2\u770b\u5b8c\u6574\u7248\uff01</p></div></div>",
this._content=b.get(".x-app-guide"),e.Log("http://hz.youku.com/red/click.php?tp=1&cp=4009227&cpp=1000752&url=")):(a.innerHTML='<div class=x-app-guide><div class=x-app-guide-tips><p>\u672c\u9875\u9762\u63d0\u4f9b40\u5206\u949f\u9884\u89c8</p></div><div class=x-app-guide-action><button type=button class="x-btn x-btn-major">&nbsp;&nbsp;&nbsp;\u70b9\u8fd9\u91cc\u89c2\u770b\u5b8c\u6574\u7248&nbsp;&nbsp;&nbsp;</button></div><div class=x-app-openapp></div></div>',this._content=b.get(".x-app-guide"),this._fullBtn=
this._content.getElementsByClassName("x-btn")[0],this._openApp=this._content.getElementsByClassName("x-app-openapp")[0],this.bind_onFullClick=b.bindAsEventListener(this,this.onFullClick),b.addEventHandler(this._fullBtn,"click",this.bind_onFullClick),e.Log("http://hz.youku.com/red/click.php?tp=1&cp=4009212&cpp=1000752&url="));this._content.style.marginLeft=parseInt(-this._content.offsetWidth/2)+"px";this._content.style.marginTop=parseInt(-this._content.offsetHeight/2)+"px"}},onFullClick:function(){debug.log("onFullClick");
this._content.getElementsByClassName("x-app-guide-action")[0].innerHTML='<button type=button class="x-btn x-btn-major">&nbsp;\u4e0b\u8f7d\u5b89\u88c5&nbsp;</button><button type=button class="x-btn">&nbsp;\u6211\u77e5\u9053\u4e86&nbsp;</button>';this._downloadBtn=this._content.getElementsByClassName("x-btn")[0];this._knowBtn=this._content.getElementsByClassName("x-btn")[1];this.bind_onDownload=b.bindAsEventListener(this,this.onDownloadClick);this.bind_onKnow=b.bindAsEventListener(this,this.onKnowClick);
b.addEventHandler(this._downloadBtn,"click",this.bind_onDownload);b.addEventHandler(this._knowBtn,"click",this.bind_onKnow);e.Log("http://hz.youku.com/red/click.php?tp=1&cp=4009213&cpp=1000752&url=");this._content.getElementsByClassName("x-app-guide-tips")[0].innerHTML="<p>\u770b\u5b8c\u6574\u7248\u9700\u5b89\u88c5\u6700\u65b0\u4f18\u9177app</p>";this._content.style.marginLeft=parseInt(-this._content.offsetWidth/2)+"px";this._content.style.marginTop=parseInt(-this._content.offsetHeight/2)+"px";this.openApp()},
onDownloadClick:function(){e.Log("http://hz.youku.com/red/click.php?tp=1&cp=4009215&cpp=1000752&url=");window.open("http://hz.youku.com/red/click.php?tp=1&cp=4008066&cpp=1000687&url=http://m.youku.com/webapp/dl?app=youku&source=webqr","_blank")},onKnowClick:function(){e.Log("http://hz.youku.com/red/click.php?tp=1&cp=4009216&cpp=1000752&url=");setTimeout(function(){window.location.reload()},500)},openApp:function(){var a=document.createElement("iframe");a.height=0;a.width=0;a.frameBorder="no";a.src=
"youku://play?vid="+b.initConfig.vid;e.isIPAD&&(a.src="youkuhd://play?vid="+b.initConfig.vid);document.getElementsByTagName("body")[0].appendChild(a)},isLimit:function(){return this._isLimit},limitTime:function(){return this._limitTime}};var B={2:"2\u500d","1.5":"1.5\u500d",1:"\u5e38\u901f","0.8":"0.8\u500d"},da=function(a,c){this._handler={};!b.isWeixin&&e.isIPAD7&&(this.player=a,this.playRate=b.get(".x-playspeed"),this.init(c),this.bindEvent(),this.button=this.playRate.getElementsByTagName("button")[0],
this.panel=this.playRate.getElementsByTagName("div")[0],this.nodes=this.playRate.getElementsByTagName("li"),b.show(this.playRate))};da.prototype={addEventListener:function(a,b){this._handler[a]=b},removeEventListener:function(a){this._handler[a]=null},dispatch:function(a){a&&this._handler[a.type]&&(a._target=this,this._handler[a.type](a))},init:function(){for(var a=["<button class=x-control-btn>","","</button>"],b=['<div class=x-panel style="display:none"><ul>',"","</ul><div class=x-mask></div>",
"</div>"],d="",f=[],e=["2","1.5","1","0.8"],g=0;g<e.length;g++){var h=e[g],p="",i="";"1"==h&&(p="",a[1]=B[h],i=" class=selected");d+="<li data-vtype="+h+i+">"+p+B[h]+"</li>";f.push(B[h])}b[1]=d;this.playRate.innerHTML=a.join("")+b.join("")},bindEvent:function(){var a=this.playRate.getElementsByTagName("li");if(0!=a.length){this.bind_toggle=b.bindAsEventListener(this,this.toggleRatePanel);b.addEventHandler(this.playRate,"click",this.bind_toggle);for(var c=0;c<a.length;c++)b.addEventHandler(a[c],"click",
b.bindAsEventListener(this,this.switchRate))}},removeEvent:function(){null!=this.playRate&&b.removeEventHandler(this.playRate,"click",this.bind_toggle)},hide:function(a){if(this.playRate){var b=this.panel;this.playRate.className=this.playRate.className.replace(/[\s]*pressed/g,"");b.style.display="none";a||this.dispatch({type:"settinghide"})}},toggleRatePanel:function(a){var b=this.panel;-1===this.playRate.className.indexOf("pressed")?(this.playRate.className+=" pressed",b.style.display="block",this.player._reporter.sendUserActionReport("xcra",
"c"),this.dispatch({type:"settingshow"})):(this.hide(),this.player._reporter.sendUserActionReport("xhra","c"));this.dispatch(a)},switchRate:function(a){a.stopPropagation();var b=a.target,a=null,a=b.getAttribute?b.getAttribute("data-vtype"):b.parentNode.getAttribute("data-vtype");this.player._reporter.sendUserActionReport("xsra","c",{rate:a});for(var b=this.button,d=this.nodes,f=0;f<d.length;f++)if(d[f].getAttribute("data-vtype")==a){if(-1!==d[f].className.indexOf("selected")){this.toggleRatePanel();
return}d[f].innerHTML=B[a];d[f].className+=" selected";b.innerHTML=B[a]}else{var e=d[f].getAttribute("data-vtype");d[f].innerHTML=B[e];d[f].className=d[f].className.replace(/selected/,"")}this.toggleRatePanel();this.dispatch({type:"settingdone"});this.player.video.pause();this.player.video.playbackRate=parseFloat(a);this.player.video.play()}};var ea=function(a){this.player=a;this._progress=b.get(".x-progress");this._track=this._progress.getElementsByClassName("x-progress-track")[0];this._play=this._progress.getElementsByClassName("x-progress-play")[0];
this._load=this._progress.getElementsByClassName("x-progress-load")[0];this._seek=this._progress.getElementsByClassName("x-progress-seek")[0];this._seekHandle=this._seek.getElementsByClassName("x-seek-handle")[0];this._handler={};this.bindEvent()};ea.prototype={addEventListener:function(a,b){this._handler[a]=b},removeEventListener:function(a){this._handler[a]=null},bindEvent:function(){this.bind_seek=b.bindAsEventListener(this,this.seek);this.bind_touchstart=b.bindAsEventListener(this,this.onTouchStart);
b.addEventHandler(this._track,"click",this.bind_seek,!0);b.addEventHandler(this._seek,"touchstart",this.bind_touchstart)},removeEvent:function(){b.removeEventHandler(this._track,"click",this.bind_seek,!0);b.removeEventHandler(this._seek,"touchstart",this.bind_touchstart)},removeClickEvent:function(){b.removeEventHandler(this._track,"click",this.bind_seek,!0)},addClickEvent:function(){b.addEventHandler(this._track,"click",this.bind_seek,!0)},dispatch:function(a){if(a&&this._handler[a.type])this._handler[a.type](a)},
setProgress:function(a,c){var d=Math.min(Math.max(a,0),b.videoInfo.totalTime);this.playTime=d;var f=d/b.videoInfo.totalTime,e=this._track.offsetWidth,g=this._seek.offsetWidth;this._play.style.width=Math.min(100*(f+g/e/2),100)+"%";this._seek.style.left=f*e>e-g?e-g+"px":100*Math.min(Math.max(f,0),1)+"%";this.uCurrentTime.innerHTML=b.getTime(d);!0!==c&&(this.loadTime=d+=Math.max(this.player.bufferedEnd()-a,0),f=d/b.videoInfo.totalTime,this._load.style.width=100*Math.min(Math.max(f+0.05,0),1)+"%")},resetProgress:function(){this._seek.style.left=
this._seek.style.width;this._load.style.width="0";this._play.style.width="0"},getRate:function(a,c){var d=1,f=b.get(".x-fs-console");f&&(d=parseFloat(b.getCurrentStyle(f).zoom));return a/(c*d)},seek:function(a){var c=(new Date).getTime()-fa;if(a.srcElement==this._seek||c<ga)return debug.log(c+","+ga),!1;this.player._reporter.sendUserActionReport("xcs","c");c=a.offsetX||a.changedTouches[0].clientX-this._track.clientX;debug.log("x = "+c);var c=this.getRate(c,this._track.offsetWidth),d=c*b.videoInfo.totalTime;
debug.log("progress bar time = "+d+"rate = "+c+"total = "+b.videoInfo.totalTime);this.setProgress(d,!0);this.dispatch({type:"progressend"});this.player.seek(d);this.dispatch(a)},handleX:function(){return 0},onTouchStart:function(a){if(1!=a.targetTouches.length||this.isTouching)return!1;this.startX=a.targetTouches[0].clientX;a.preventDefault();this.isTouching=!0;this.startTime=this._currentTime=this.player.currentTime||0;"m3u8"==b.config.content&&(this._prepaused=this.player.video.paused,this.player.video.pause(),
this.startTime=this.player.currentTime);if("mp4"==b.config.content){this.player.video.pause();this.startTime=this.player.video.currentTime;for(a=0;a<s;a++)this.startTime+=parseInt(b.videoInfo._videoSegsDic[m][a].seconds)}this.bind_onTouchMove=b.bindAsEventListener(this,this.onTouchMove);this.bind_onTouchEnd=b.bindAsEventListener(this,this.onTouchEnd);b.addEventHandler(this._seek,"touchmove",this.bind_onTouchMove);b.addEventHandler(this._seek,"touchend",this.bind_onTouchEnd)},onTouchMove:function(a){if(1!=
a.targetTouches.length)return!1;a.preventDefault();a.stopPropagation();a=this.startTime+this.getRate(a.targetTouches[0].clientX-this.startX,this._track.offsetWidth)*b.videoInfo.totalTime;this.dispatch({type:"progressing",st:this._currentTime,dt:a-this._currentTime});this._currentTime=a;this.setProgress(Math.min(Math.max(this._currentTime,0),b.videoInfo.totalTime),!0);return!1},onTouchEnd:function(a){this.dispatch({type:"progressend"});this.isTouching=!1;if(1<a.changedTouches.length)return!1;var c=
{tb:parseInt(100*this.startTime)/100,to:parseInt(100*this._currentTime)/100};debug.log("tb="+c.tb);this.player._reporter.sendUserActionReport("xds","d",c);a.preventDefault();a.stopPropagation();b.removeEventHandler(this._seek,"touchmove",this.bind_onTouchMove);b.removeEventHandler(this._seek,"touchend",this.bind_onTouchEnd);a=Math.min(Math.max(this._currentTime,0),b.videoInfo.totalTime-5);this.player.controls.onPlay();var d=this.player;this.player.seek(a,function(){d.video.play()});return!1}};var ha=
function(a,c){this._handler={};b.isWeixin&&(b.get(".x-quality").style.display="none");"m3u8"!=b.config.content?b.get(".x-quality").style.display="none":!c||!c.data||!c.data[0]||!(c.data[0].streamtypes&&1<c.data[0].streamtypes.length)?b.get(".x-quality").style.display="none":(this.player=a,this._quality=b.get(".x-quality"),this.init(c),this.bindEvent(),this._button=this._quality.getElementsByTagName("button")[0],this._panel=this._quality.getElementsByTagName("div")[0],this._nodes=this._quality.getElementsByTagName("li"))};
ha.prototype={addEventListener:function(a,b){this._handler[a]=b},removeEventListener:function(a){this._handler[a]=null},dispatch:function(a){a&&this._handler[a.type]&&(a._target=this,this._handler[a.type](a))},init:function(a){var a=a.data[0],c=["<button class=x-control-btn title=\u753b\u8d28\u8bbe\u7f6e>","","</button>"],d=['<div class=x-panel style="display:none"><ul>',"","</ul><div class=x-mask></div>","</div>"],f="",e=[],g;for(g in u)if(-1!==a.streamtypes.indexOf(g)&&-1===e.indexOf(u[g])){var h=
"",i="";g==b.defaultVideoType&&(h="",c[1]=u[g],i=" class=selected");f+="<li data-vtype="+g+i+">"+h+u[g]+"</li>";e.push(u[g])}""==c[1]&&(c[1]=e[0]);d[1]=f;this._quality.innerHTML=c.join("")+d.join("")},bindEvent:function(){var a=this._quality.getElementsByTagName("li");if(0!=a.length){this.bind_toggle=b.bindAsEventListener(this,this.toggleQualityPanel);b.addEventHandler(this._quality,"click",this.bind_toggle);for(var c=0;c<a.length;c++)b.addEventHandler(a[c],"click",b.bindAsEventListener(this,this.switchQuality))}},
removeEvent:function(){null!=this._quality&&b.removeEventHandler(this._quality,"click",this.bind_toggle)},hide:function(a){if(this._quality){var b=this._panel;this._quality.className=this._quality.className.replace(/[\s]*pressed/g,"");b.style.display="none";a||this.dispatch({type:"settinghide"})}},toggleQualityPanel:function(a){var b=this._panel;-1===this._quality.className.indexOf("pressed")?(this._quality.className+=" pressed",b.style.display="block",this.player._reporter.sendUserActionReport("xcq",
"c"),this.dispatch({type:"settingshow"})):(this.hide(),this.player._reporter.sendUserActionReport("xhq","c"));this.dispatch(a)},switchQuality:function(a){this.player._reporter.sendUserActionReport("xsq","c");a.stopPropagation();for(var c=a.target,a=null,a=c.getAttribute?c.getAttribute("data-vtype"):c.parentNode.getAttribute("data-vtype"),c=this._button,d=this._nodes,f=0;f<d.length;f++)if(d[f].getAttribute("data-vtype")==a){if(-1!==d[f].className.indexOf("selected")){this.toggleQualityPanel();return}d[f].innerHTML=
u[a];d[f].className+=" selected";c.innerHTML=u[a];l.setItem("defaultVideoType",a);b.defaultVideoType=a}else{var e=d[f].getAttribute("data-vtype");d[f].innerHTML=u[e];d[f].className=d[f].className.replace(/selected/,"")}debug.log("q1");this.toggleQualityPanel();this.dispatch({type:"settingdone"});var g=this.player.currentTime,h=b.m3u8src_v2(b.v.data[0].videoid,a);b.unitedTag=null;this.player.video.src=h;var i=this,m=0;this.player.video.addEventListener("canplay",function(){1===m?debug.log("XXXXXXXXXXXXXXXXXXXXX"):
(m=1,debug.log("q2 nsrc="+h),i.player.seek(g),debug.log("q3"))});this.player.video.load();this.player.video.play()},switchQuality_:function(a){a.stopPropagation();for(var a=a.target.dataset.vtype,b=this._button,d=this._nodes,f=0;f<d.length;f++)if(d[f].dataset.vtype==a){if(-1!==d[f].className.indexOf("selected")){this.toggleQualityPanel();return}d[f].innerHTML=u[a];d[f].className+=" selected";b.innerHTML=u[a]}else d[f].innerHTML=u[d[f].dataset.vtype],d[f].className=d[f].className.replace(/selected/,
"");debug.log("q1");this.toggleQualityPanel();var e=this.player.video.currentTime,g=this.player.video.src.replace(/type\/(flv|flvhd|mp4|hd2)/,"type/"+a);this.player.video.src=g;var h=this,i=0;this.player.video.addEventListener("canplay",function(){1===i?debug.log("XXXXXXXXXXXXXXXXXXXXX"):(i=1,debug.log("q2 nsrc="+g),h.player.seek(e),debug.log("q3"))})}};var ia=function(a,c){this._handler={};this.player=a;this._panel=document.createElement("div");this._panel.className="x-recommend";this.init(c);this.request(c);
window.relatedpanel=this;b.get("#x-player").appendChild(this._panel);this._panel.style.display="box";var d={e:"xendcard"};d.device=e.isAndroid?"adr":e.isIPAD?"ipad":"oth";e.Log(e.uniplayerUrl+q(d))};ia.prototype={bindDynamicEvent:function(){var a=this._listinner.getElementsByClassName("x-item");this.bind_itemclick=b.bindAsEventListener(this,this.onItemClick);for(var c=0;c<a.length;c++)b.addEventHandler(a[c],"click",this.bind_itemclick,!0)},onItemClick:function(a){a=a.currentTarget.getAttribute("data-i");
"x"==a?this.replay():this.player._reporter.sendRecommendLog(this.getReportParam(a))},init:function(){this._panel.innerHTML="<div class=x-pages></div>";this._listinner=this._panel.getElementsByClassName("x-pages")[0]},request:function(a){var c,d={};d.vid=a.data[0].videoid;d.uid=a.data[0].userid;a.data[0].show&&a.data[0].show.showid&&(d.sid=a.data[0].show.showid);d.cate=a.data[0].categories;d.site="1";d.module="2";a=a.controller.playmode;d.pg="1";d.pg={normal:1,show:3,folder:4}[a];"interior"==b.config.winType?
d.apptype=12:(d.apptype=12,d.pg=1);d.pl=36;for(c in b.initConfig.playlistconfig)d[c]=b.initConfig.playlistconfig[c];d.callback="relatedpanel.parseResponse";c="http://ykrec.youku.com/video/packed/list.json?"+n(d);x(c);this._apt=d.apptype;this._pg=d.pg;this._md=d.module},parseResponse:function(a){this._info=a;this.buildPanel(this._info)},buildPanel:function(a){var a=a.data,c=a.length;debug.log("realted len = "+c);var d=[];d.push('<ul class="x-item" data-i="x"><li class="x-item-img"><img src="http://player.youku.com/h5player/img/replay.png"></li></ul>');
for(var f=Math.floor((this._panel.offsetWidth-60+16)/166)*Math.floor((this._panel.offsetHeight-120+12)/97),f=(f>c?c:f)-1,f=0>f?0:f,c=0;c<f;c++){var e=a[c].picUrl,g=a[c].title.substr(0,20),h="http://v.youku.com/v_show/id_"+a[c].codeId+".html?from=",i="y7",i="interior"==b.config.winType?i+".2-1-":i+".7-1-",i=i+b.v.data[0].categories,i=i+".4",i=i+("."+(c+1)+"-1"),i=i+("."+this._apt+"-"+this._pg+"-"+this._md+"-"+c),h=h+i;debug.log(h);"myoukucom"==b.initConfig.client_id&&(h="http://m.youku.com/smartphone/detail?vid="+
a[c].codeId);d.push('<ul class="x-item" data-i='+c+'><li class="x-item-img"><img src='+e+'></li><li class="x-item-info"><div class="x-item-title">'+g+'</div><div class="x-item-bg"></div></li><li class="x-item-url"><a href='+h+' target="_blank"></a></li><li class="x-item-loading"><div class="x-play-loading"></div></li></ul>')}this._listinner.innerHTML=d.join("");this.bindDynamicEvent();this.buildImgEvent()},getReportParam:function(a){var c={};c.pos=""+a;c.sct=b.v.data[0].categories;c.dct=this._info.data[a].dct;
c.ord=this._info.ord;c.req_id=this._info.req_id;c.abver=this._info.ver;c.dma=this._info.data[a].dma;c.algInfo=this._info.data[a].algInfo;c.apt=this._apt;c.md=this._md;c.pg=this._pg;c.r=(new Date).getTime();c.vid=b.v.data[0].vidEncoded;c.uid=b.v.data[0].userid;1==this._info.data[a].type?c.dvid=this._info.data[a].id:c.dsid=this._info.data[a].id;c.sid="";b.v.data[0].show&&b.v.data[0].show.showid&&(c.sid=b.v.data[0].show.showid);return c},buildImgEvent:function(){for(var a=this._listinner.getElementsByClassName("x-item-img"),
c=0;c<a.length;c++)b.addEventHandler(a[c],"error",b.bindAsEventListener(this,this.onLoadImgError)),b.addEventHandler(a[c],"abort",b.bindAsEventListener(this,this.onLoadImgError))},onLoadImgError:function(a){debug.log("img error");a=a.target;b.addClass(a.parentNode.parentNode,"x-no-pic");a.src="http://player.youku.com/h5player/img/no_pic.png"},replay:function(a){this.player.controls.rePlay(a)},onResize:function(){var a=this;setTimeout(function(){a.buildPanel(a._info)},500)}};var ja=function(a,c){this._handler=
{};this.player=a;this._showbtn=b.get(".x-playshow");this._showlist=b.get(".x-showlist");this.init(c);this._inner=this._showlist.getElementsByClassName("x-showlist-inner");this._bullet=this._showlist.getElementsByClassName("x-showlist-bullet");this.bindEvent()};ja.prototype={init:function(a){this._showlist.innerHTML='<div class=x-showlist-inner><div class=x-showlist-hd></div><div class=x-showlist-bd></div><div class=x-showlist-ft style="display:none"></div><div class=x-mask></div></div>';this._slhd=
this._showlist.getElementsByClassName("x-showlist-hd")[0];this._slbd=this._showlist.getElementsByClassName("x-showlist-bd")[0];this._slft=this._showlist.getElementsByClassName("x-showlist-ft")[0];this._slhd.innerHTML="<label>\u9009\u96c6</label><div class=x-showlist-close></div>";this._closeHandle=this._slhd.getElementsByClassName("x-showlist-close")[0];var c=a.data[0].list;if(!(null==c||0==c.length)){for(var d=["<ul class=x-showlist-bullet>","","</ul>"],f=[],e=0;e<c.length;e++){var g=c[e],h="http://v.youku.com/v_show/id_"+
g.vidEncoded+".html";b.v.folder&&(h=h+"?f="+b.v.folder.folderId);var i="";g.vidEncoded==b.v.data[0].vidEncoded&&(i=" class=selected");g="<li"+i+"><a href="+h+">"+g.title.substr(0,20)+"</a></li>";f.push(g)}d[1]=f.join("");this._slbd.innerHTML=d.join("");d="<div class=x-showlist-pages>;<span class=x-showlist-pre></span>;<ul>;;</ul>;<span class=x-showlist-next></span>".split(";");f=[];i=a.data[0].list_pre?parseInt(a.data[0].list_pre.seq/60):0;for(e=0;e<(c.length-1)/60+1;e++)a="",e==i&&(a=" class=current"),
g="<li"+a+"><em>"+(e+1)+"</em></li>",f.push(g);d[3]=f.join("");this._slft.innerHTML=d.join("")}},addEventListener:function(a,b){this._handler[a]=b},removeEventListener:function(a){this._handler[a]=null},dispatch:function(a){a&&this._handler[a.type]&&(a._target=this,this._handler[a.type](a))},bindEvent:function(){this.bind_close=b.bindAsEventListener(this,this.hide);b.addEventHandler(this._closeHandle,"click",this.bind_close);this.bind_toggle=b.bindAsEventListener(this,this.toggle);b.addEventHandler(this._showbtn,
"click",this.bind_toggle)},removeEvent:function(){b.removeEventHandler(this._closeHandle,"click",this.bind_close)},hide:function(){this._showbtn.className=this._showbtn.className.replace(/[\s]*pressed/g,"");b.hide(this._showlist)},show:function(){this._showbtn.className+=" pressed";b.show(this._showlist)},showListBtn:function(){var a=b.v.data[0].list;null==a||1>=a.length||b.show(this._showbtn)},hideListBtn:function(){var a=b.v.data[0].list;null==a||0==a.length||(b.hide(this._showbtn),this.hide())},
toggle:function(a){"block"!=this._showlist.style.display?(this.show(),this.player._reporter.sendUserActionReport("xshl","c"),e.Log(e.uniplayerUrl+q({e:"xshl",adr:e.isAndroid,ios:e.isIPAD}))):this.hide();this.dispatch(a)},touchStart:function(a){this._sx=a.targetTouches[0].clientX;this._sy=a.targetTouches[0].clientY;this._ex=this._sx;this._ey=this._ey},touchEnd:function(){},touchMove:function(a){this._ex=a.targetTouches[0].clientX;this._ey=a.targetTouches[0].clientY;this._dx=this._ex-this._sx;this._dy=
this._ey-this._sy;Math.abs(this._dx)>Math.abs(this._dy)||a.preventDefault()}};var ka=function(a){this.player=a;this._handle={};this._tips=b.get(".x-tips");b.hide(this._tips);this._tips.innerHTML="<div class=x-tips-txt></div><div class=x-tips-close><a href=#><em>\u5173\u95ed</em></a></div><div class=x-tips-mask></div>";this._ptip=this._tips.getElementsByClassName("x-tips-txt")[0];this._ctip=this._tips.getElementsByClassName("x-tips-close")[0];null==l.getItem("youku_conf_skip")&&l.setItem("youku_conf_skip",
!0);this.bindEvent()};ka.prototype={bindEvent:function(){b.addEventHandler(this._ctip,"click",b.bindAsEventListener(this,this.closeTip))},closeTip:function(){b.hide(this._tips);this.keepLastTime()},autoHide:function(a){var b=this;setTimeout(function(){b.closeTip()},a)},keepLastTime:function(){},ignoreLastTime:function(){},isShowTimeTip:function(){var a=l.getItem("youku_keep_lasttime"),a=parseInt(a),b=l.getItem("youku_ignore_lasttime"),b=parseInt(b);return 3<=a||3<=b?!1:!0},showLastTimeTip:function(a){a=
b.getTime(a);debug.log("last = "+a);!1!=this.isShowTimeTip()&&(this._ptip.innerHTML="\u4f18\u9177\u8bb0\u5fc6\u60a8\u4e0a\u6b21\u64ad\u653e\u5230<span class=x-tips-time>"+a+"</span>, <a class=x-tip-timebegin href=#>\u4ece\u5934\u89c2\u770b</a>",this._playBegin=this._ptip.getElementsByClassName("x-tip-timebegin")[0],b.addEventHandler(this._playBegin,"click",b.bindAsEventListener(this,this.seekBegin)),b.show(this._tips),this.autoHide(5E3))},onSkipTail:function(){"true"==l.getItem("youku_conf_skip")?
(this._ptip.innerHTML="\u5373\u5c06\u4e3a\u60a8\u8df3\u8fc7\u7247\u5c3e, <a class=x-tip-skipnoway href=#>\u4e0d\u518d\u8df3\u8fc7</a>",this._skipnowtail=this._ptip.getElementsByClassName("x-tip-skipnoway")[0],b.addEventHandler(this._skipnowtail,"click",b.bindAsEventListener(this,this.skipNoway))):(this._ptip.innerHTML="\u662f\u5426\u8df3\u8fc7\u7247\u5934\u7247\u5c3e? <a class=x-tip-skipalways href=#>\u59cb\u7ec8\u8df3\u8fc7</a>",this._skipalwtail=this._ptip.getElementsByClassName("x-tip-skipalways")[0],
b.addEventHandler(this._skipalwtail,"click",b.bindAsEventListener(this,this.skipAlways)));b.show(this._tips);this.autoHide(1E4)},onSkipHead:function(){"true"==l.getItem("youku_conf_skip")?(this._ptip.innerHTML="\u5df2\u7ecf\u4e3a\u60a8\u8df3\u8fc7\u7247\u5934, <a class=x-tip-skipnoway href=#>\u4e0d\u518d\u8df3\u8fc7</a>",this._skipnow=this._ptip.getElementsByClassName("x-tip-skipnoway")[0],b.addEventHandler(this._skipnow,"click",b.bindAsEventListener(this,this.skipNoway))):(this._ptip.innerHTML="\u662f\u5426\u8df3\u8fc7\u7247\u5934\u7247\u5c3e? <a class=x-tip-skipalways href=#>\u59cb\u7ec8\u8df3\u8fc7</a>",
this._skipalw=this._ptip.getElementsByClassName("x-tip-skipalways")[0],b.addEventHandler(this._skipalw,"click",b.bindAsEventListener(this,this.skipImediately)));b.show(this._tips);this.autoHide(5E3)},onUglyAdPlay:function(){this._ptip.innerHTML="\u5c0a\u656c\u7684\u4f1a\u5458\uff0c\u56e0\u7248\u6743\u539f\u56e0\uff0c\u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2 \u5173\u95ed\u5e7f\u544a ";b.show(this._tips);var a=this;setTimeout(function(){b.hide(a._tips)},15E3)},closeUglyHint:function(){b.hide(this._tips)},
skipImediately:function(){debug.log("skip imediately");this.player._reporter.sendUserActionReport("xskh","c");l.setItem("youku_conf_skip",!0);var a=parseInt((b.v.data[0].dvd||"").head)/1E3;this.onSkipHead();this.player.seek(a);return!1},skipNoway:function(){this.player._reporter.sendUserActionReport("xnsk","c");l.setItem("youku_conf_skip",!1);this._ptip.innerHTML="\u8bbe\u7f6e\u6210\u529f";return!1},skipAlways:function(){this.player._reporter.sendUserActionReport("xask","c");l.setItem("youku_conf_skip",
!0);this._ptip.innerHTML="\u8bbe\u7f6e\u6210\u529f";return!1},seekBegin:function(){this.player._reporter.sendUserActionReport("xseb","c");b.hide(this._tips);this.ignoreLastTime();this.player.seek(0);return!1}};var L=function(a,b,d){this.player=a;this.v=b;this.sid=d;this.isSendedConsumeReport=!1;e.hd=this.getHDFlag();if(0<D.length)for(a=0;a<D.length;a++)this.sendUepReport(D[a].type,D[a].time);this.dimension={w:document.getElementById("x-player").offsetWidth,h:document.getElementById("x-player").offsetHeight};
this.screenDim={w:screen.availWidth,h:screen.availHeight};if("onorientationchange"in window){var f=this;window.addEventListener("orientationchange",function(){f.sendUserActionReport("xro","r");var a={e:"xro"};a.device=e.isAndroid?"adr":e.isIPAD?"ipad":"oth";e.Log(e.uniplayerUrl+q(a))})}};L.prototype={sendRecommendLog:function(a){e.Log("http://r.l.youku.com/recclick?"+n(a))},tsInit:function(){this.tsSn=null},sendTSLog:function(a){null==this.tsSn&&(this.tsSn=0);var c=5,c=24<this.tsSn?20:12<this.tsSn?
10:5,d=this;this.tstimer=setTimeout(function(){d.sendTSLog(60)},1E3*c);if(61==a)clearTimeout(this.tstimer),this.tstimer=null;else if(d.player.video.paused)return;if(0==this.tsSn)this.tsSn++;else{var f=b.v.data[0];f.sid=b.videoInfo._sid;b.initConfig.tslogconfig=b.initConfig.tslogconfig||{};var k={};k.vvid=f.sid;k.vid=f.videoid;k.cf=this.getHDFlag();k.cpt=this.player.currentTime?Math.floor(this.player.currentTime):0;k.full=this.player.controls.fullscreenPanel.fullFlag()?1:0;k.lang=this.getLanguage();
k.pc=60==a?0:1;k.clb=0;k.iku="m";k.pt=this.getPlayTime();k.sn=this.tsSn++;k.hi=c;k.uid=b.v.user.id;k.r=this.signTS(k.vvid+k.vid+k.cpt+k.pt+k.sn);e.Log("http://p-log.ykimg.com/tslog?"+n(k))}},signTS:function(a){if(null==a)return 0;var b=0,d=a.length;for(j=0;j<d;j++)b=43*b+a.charCodeAt(j),b%=1E10;return b},getPlayTime:function(){var a=0;return a=24<this.tsSn?180+20*(this.tsSn-24):12<this.tsSn?60+10*(this.tsSn-12):5*this.tsSn},tslogparse:function(){},sendTSErrorLog:function(){},sendVVLog:function(a){var c=
b.v.data[0];c.sid=b.videoInfo._sid;b.initConfig.vvlogconfig=b.initConfig.vvlogconfig||{};var d={pvid:""};d.chid=c.ct;d.url=escape(window.location.href);d.rurl="";d.vvid=c.sid;d.vid=c.videoid;d.schid=c.cs;d.plid="";d.plchid="";d.shid=null!=c.show&&c.show.showid?c.show.showid:"";d.shchid=c.ct;d.ptype=b.WIN_TYPE;d.cp=null!=c.show&&c.show.copyright?c.show.copyright:"";d.vl=parseInt(c.seconds);d.cf=this.getHDFlag();d.hf=this.getMaxFileType();d.spt=0;d.pb=62==a?2:0;d.vdoid=c.userid;d.out="interior"==b.initConfig.wintype?
0:1;d.r=this.signTS(d.vvid+d.vid);d.ext=this.getExtString(a);for(var f in b.initConfig.vvlogconfig)d[f]=b.initConfig.vvlogconfig[f];e.Log("http://v.l.youku.com/ykvvlog?"+n(d))},getLanguage:function(){null==this.langMap&&(this.langMap={"\u56fd\u8bed":1,"\u7ca4\u8bed":2,"\u82f1\u8bed":6,"\u65e5\u8bed":7,"\u5ddd\u8bdd":3});return this.langMap[b.defaultLanguage||"\u56fd\u8bed"]},getExtString:function(a){var c={iku:"m"};c.full=this.player.controls.fullscreenPanel.fullFlag();c.lang=this.getLanguage();c.num=
a;c.ctp=0;c.pc=60==a?0:1;c.clb=0;c.ctype="12";c.ev="1";c.tk=e.userCache.token;c.oip=b.v.data[0].ip;c.isvip=b.v.user.vip?"1":"0";c.paystate=this.getPayState();c.playstate=null==b.v.data[0].trial?"1":"2";return escape(n(c))},getPlayByType_:function(a){var c=0;62==a&&(c=2);b.initConfig.vvlogconfig.pb&&(c=b.initConfig.vvlogconfig.pb);return c},getMaxFileType:function(){return b.v.data[0].segs.hd2?2:b.v.data[0].segs.mp4?1:0},getHDFlag:function(){if(null==this.player)return 0;var a=null,c=this.player.video.src;
-1!=c.indexOf("m3u8")?(a={flv:0,flvhd:0,mp4:1,hd2:2,hd3:3},c=b.defaultVideoType):a={"030020":4,"030004":0,"030008":1,"030080":3};for(var d in a)if(-1!==c.indexOf(d))return a[d];return 0},addPlayerDurationReport:function(a){var c=b.videoInfo;if(!(null==c||null==c._playListData)){if(null==this.drtimer){var d=this;this.drtimer=setInterval(function(){d.player.video.paused||d.addPlayerDurationReport(60)},6E4)}61==a&&(clearInterval(this.drtimer),this.drtimer=null);var f={};f.sid=c._sid;f.videoOwnerId=b.v.data[0].userid;
f.viewUserId=b.v.user.id;f.videoid=b.v.data[0].videoid;f.ct=b.v.data[0].ct;f.cs=b.v.data[0].cs;f.number=a;f.rnd=((new Date).getTime()-c.abstarttime)/1E3;null!=c._playListData.show?(f.showid_v2=null==c._playListData.show?"":c._playListData.show.showid,f.showid_v3=null==c._playListData.show?"":c._playListData.show.showid_encode,f.show_videotype=c._playListData.show.show_videotype,f.stg=c._playListData.show.stage,f.Tid=c._playListData.show.theaterid,f.Copyright=c._playListData.show.copyright):(f.showid_v2=
"",f.Tid=0,f.Copyright="");f.hd=0;f.ikuflag="m";f.hd={flv:0,flvhd:0,mp4:1,hd2:2,hd3:3}[b.defaultVideoType];f.winType=b.WIN_TYPE;f.mtype=Q();f.totalsec=c.totalTime;f.fullflag=this.player.controls.fullscreenPanel.fullFlag();f.playComplete=0;61==a&&(f.playComplete=1);59==a&&(f.referUrl=(b.initConfig.vvlogconfig||"").rurl,f.url=encodeURIComponent(window.location.href),f.starttime=0);f.currentPlayTime=parseInt(this.player.currentTime||0);f.continuationPlay=0;f.pid=b.initConfig.client_id;f.timestamp=(new Date).getTime();
f.ctype="12";f.ev="1";f.tk=e.userCache.token;f.oip=b.v.data[0].ip;f.isvip=b.v.user.vip?"1":"0";f.paystate=this.getPayState();f.playstate=null==b.v.data[0].trial?"1":"2";e.Log("http://stat.youku.com/player/addPlayerDurationReport?"+n(f))}},addPlayerStaticReport:function(){var a={};a.videoid=this.v.data[0].videoid;a.t=this.v.data[0].ts;a.totalsec=parseInt(this.v.data[0].seconds);a.ikuflag="m_"+this.getShowFlag();a.url=escape(window.location.href);a.fullflag=this.player.controls.fullscreenPanel.fullFlag();
a.source="video";a.referer=(b.initConfig.vvlogconfig||"").rurl;a.sid=this.sid;a.uid=this.v.data[0].userid;for(var c=a.t,d=!1,f="";!d;){for(var f="",k=0;20>k;k++)var g=Math.floor(61*Math.random()),f=f+"0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".substring(g,g+1);hstr=c+f;hashcash=qa(hstr);"00"==hashcash.substring(0,2)&&(d=!0)}a.h=f;a.totalseg=b.pieceLength();a=n(a);e.Log("http://stat.youku.com/player/addPlayerStaticReport?"+a)},sendUserActionReport:function(a,c,d){c={t:1002,e:a,
v:c};c.d=E(Q());var f={v:"h5player",vid:b.v.data[0].videoid,ssid:b.videoInfo._sid,ct:b.v.data[0].ct,cs:b.v.data[0].cs,uid:0};b.v.data[0].user&&(f.uid=b.v.user.id);f.sid="";b.v.data[0].show&&(f.sid=b.v.data[0].show.showid);f.tc=this.player.currentTime||0;f.w=b.get("#x-player").offsetWidth;f.h=b.get("#x-player").offsetHeight;f.f=this.player.video.webkitDisplayingFullscreen?"on":"off";f.q=this.player.getQuality();f.ver="1.0.0";for(var k in d)f[k]=d[k];c.x=E(n(f));k=n(c);if("xre"==a)this.checkPlayerResize("http://e.stat.ykimg.com/red/ytes.php?",
k);else{if("xenfs"==a||"xexfs"==a){this._giveupReTag=!0;var g=this;setTimeout(function(){g._giveupReTag=false},800)}e.Log("http://p-log.ykimg.com/event?"+k)}this.sendCustomUserAction(a,d)},checkScreenRotate:function(a,b){var d=screen.availWidth,f=screen.availHeight;debug.log("<hr/>rota w,h = "+d+","+f);if(this.screenDim.w!=d||this.screenDim.h!=f)this.screenDim.w=d,this.screenDim.h=f,debug.log("<b><font color=red>rotate</font></b>"),e.Log(a+b)},checkPlayerResize:function(a,b){if(!0===this._giveupReTag)debug.log("give up xre after enfs or exfs");
else{var d=document.getElementById("x-player");this._resizeList=this._resizeList||[];this._resizeList.push({str:b,time:(new Date).getTime(),w:d.offsetWidth,h:d.offsetHeight});var f=this;setTimeout(function(){if(0!=f._resizeList.length){for(var b=f._resizeList[0].time,c=0;c<f._resizeList.length;c++){var d=f._resizeList[c].w,i=f._resizeList[c].h,l=f._resizeList[c].time;if(d!=f.dimension.w||i!=f.dimension.h)f.dimension.w=d,f.dimension.h=i,(800<l-b||c==f._resizeList.length-1)&&e.Log(a+f._resizeList[c].str)}f._resizeList=
[]}},1E3)}},sendCustomUserAction:function(a,b){var d={e:a},f;for(f in b)d[f]=b[f];d.device=e.isAndroid?"adr":e.isIPAD?"ipad":"oth";switch(a){case "xenfs":e.Log(e.uniplayerUrl+q(d));break;case "xexfs":e.Log(e.uniplayerUrl+q(d));break;case "xsra":e.Log(e.uniplayerUrl+q(d))}},sendCustomLoadedTime:function(a){a={vid:b.v.data[0].videoid,os:escape(e.os),adrd4:e.isAndroid4,mobile:e.isMobile,type:"mp4"==b.config.content?m:b.config.content,cost:a,ver:VER.replace(/[-:]/g,"")};!1==a.mobile&&(a.ua=escape(navigator.userAgent.replace(/[\/\+\*@\(\)\,]/g,
"")));e.Log("http://passport-log.youku.com/logsys/logstorage/append?project=xplayerloadtime&log="+q(a))},sendUepReport:function(a,c,d){!1!==d&&10<100*Math.random()||(d="",d=e.isIPAD?"xplayer_ipad":e.isIPHONE?"xplayer_iphone":"xplayer_android",a={m:d,hd:this.getHDFlag(),t:a,s:c,u:escape(window.location.href),p:2,v:b.videoInfo._sid,ct:b.v.data[0].ct,cs:b.v.data[0].cs,a:b.v.controller.area_code+"|"+b.v.controller.dma_code},e.Log("http://v.l.youku.com/uep?"+n(a)))},sendLoadedTime:function(a){debug.log("loaded cost = "+
a);this.sendCustomLoadedTime(a);this.sendUepReport("videoload",a)},sendComScoreReport:function(a){if(!this._hasComScore){for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++)if(-1!==c[d].src.indexOf("scorecardresearch.com/beacon.js")){this._hasComScore=!0;break}!0!==this._hasComScore&&(c=document.createElement("script"),d=document.getElementsByTagName("script")[0],c.async=!0,c.src=("https:"==document.location.protocol?"https://sb":"http://b")+".scorecardresearch.com/beacon.js",d.parentNode.insertBefore(c,
d));this._hasComScore=!0}var f=setInterval(function(){if("undefined"!=typeof COMSCORE){clearInterval(f);try{COMSCORE.beacon({c1:1,c2:7293931,c3:a,c6:b.v.data[0].categories})}catch(c){debug.log("beacon exception")}}},500)},sendIResearchReport:function(){},sendThirdPartyReport:function(a){"xplayer_h5"==a&&(a=e.isAndroid?"xplayer_h5_android":e.isIPAD?"xplayer_h5_ipad":"xplayer_h5_other");this.sendComScoreReport(a);this.sendIResearchReport(a)},sendPayReport:function(){var a={vid:b.v.data[0].videoid,os:escape(e.os)};
e.Log("http://passport-log.youku.com/logsys/logstorage/append?project=unipay&log="+q(a))},sendClientConsumeReport:function(){!0!=this.isSendedConsumeReport&&(null!=b.config.partner_config&&1==b.config.partner_config.status&&null!=b.config.partner_config.token&&""!=b.config.partner_config.token)&&(this.isSendedConsumeReport=!0,e.Log("https://openapi.youku.com/v2/players/consume.json?token="+b.config.partner_config.token))},getPayState:function(){var a=0;b.v.data[0].show&&"vod"==b.v.data[0].show.paid_type&&
(a=1);b.v.data[0].show&&"mon"==b.v.data[0].show.paid_type&&(a=2);return a},getShowFlag:function(){var a="m";return a=b.v.data[0].show?a+"1":a+"0"}};var la=function(a,b){this._handler={};this._adinfo=a;this._info={VAL:[]};for(var d in a)"VAL"!=d&&(this._info[d]=a[d]);this._vt2nodes=b||[]};la.prototype={addEventListener:function(a,b){this._handler[a]=b},removeEventListener:function(a){this._handler[a]=null},dispatch:function(a){a&&this._handler[a.type]&&(a._target=this,this._handler[a.type](a))},buildAdRS:function(){for(var a=
"http://pl.youku.com/playlist/m3u8?",c={},d={},f=this._adinfo.VAL,k=0;k<f.length;k++){var g=f[k];d["a"+(k+1)]=g.VID+"_"+g.VQT}d.v=b.v.data[0].videoid+"_"+b.defaultVideoType;var k=escape,g=[],h;for(h in d)g.push('"'+h+'":"'+d[h]+'"');d="{"+g.join(",")+"}";c.ids=k(d);c.ts=parseInt((new Date).getTime()/1E3);b.password&&(c.password=b.password);b.password&&(b.initConfig.client_id&&b.config.partner_config&&1==b.config.partner_config.status&&1==b.config.partner_config.passless)&&(c.client_id=b.initConfig.client_id);
d=[];for(h=0;h<f.length;h++)d.push(f[h].VID);d.push(b.v.data[0].videoid);f=encodeURIComponent(E(F(G(b.mk.a4+"poz"+e.userCache.a2,[19,1,4,7,30,14,28,8,24,17,6,35,34,16,9,10,13,22,32,29,31,21,18,3,2,23,25,27,11,20,5,15,12,0,33,26]).toString(),e.userCache.sid+"_"+d.join("")+"_"+e.userCache.token)));c.ep=f;c.sid=e.userCache.sid;c.token=e.userCache.token;c.ctype="12";c.ev="1";c.oip=b.v.data[0].ip;a+=n(c);""!=b.getUCStr(b.v.data[0].videoid)&&(a+=b.getUCStr(b.v.data[0].videoid));return a},run:function(){if(!(null==
this._adinfo||null==this._adinfo.VAL||0==this._adinfo.VAL.length)){for(var a={SUS:[],SU:[],SUE:[],CU:[],CUM:[],VTVC:[]},b=0,d=0;d<this._adinfo.VAL.length;d++){var f=this._adinfo.VAL[d];if(!(null==f.VID||null==f.VQT)){null==f.SU&&(f.SU=[]);null==f.SUE&&(f.SUE=[]);if(0==d)a.SUS=f.SUS||[];else for(var e=0;e<f.SUS.length;e++)a.SU.push({T:b,U:f.SUS[e].U});for(e=0;e<f.SU.length;e++){var g=f.SU[e].T+b;a.SU.push({T:g,U:f.SU[e].U})}if(d==this._adinfo.VAL.length-1)a.SUE=f.SUE;else for(e=0;e<f.SUE.length;e++)g=
b+f.AL,a.SU.push({T:g,U:f.SUE[e].U});b+=f.AL;a.CU.push({T:b,U:f.CU});a.CUM.push({T:b,CUM:f.CUM});1==parseInt(f.VT)&&a.VTVC.push({U:f.VC,T:b});if(0!=this._vt2nodes.length)for(e=0;e<this._vt2nodes.length;e++)f=this._vt2nodes[e].VC,g=this._vt2nodes[e].pos_,-1==g&&a.VTVC.push({U:f,T:0}),g==d&&a.VTVC.push({U:f,T:b})}}a.AL=b;a.RS=this.buildAdRS();this._info.VAL.push(a);this._info.src=a.RS}this.dispatch({type:ADConstant.FRONT_AD_INFO_ADAPER_OK,data:this._info})}};var M=function(a,b){this._handler={};this.player=
a;this.video=this.player.video;this.controls=this.player.controls;this._adplugin=this.player._adplugin;this._adplugin.adplayer=this;this.video.preload="none";this.video.src=b.data.urls[0];debug.log("ad src="+this.video.src);this.video.style.display="block";this._addata=b.data;this._addata.curnum=0;this._playTag=[];this.bindAdEvent();this._adreporter=new H(this,this._addata)};M.prototype={addEventListener:function(a,b){this._handler[a]=b},removeEventListener:function(a){this._handler[a]=null},dispatch:function(a){a&&
this._handler[a.type]&&(a._target=this,this._handler[a.type](a))},bindAdEvent:function(){this.bind_fadtoplay=b.bindAsEventListener(this,this.onPlayClick);this.bind_fadplay=b.bindAsEventListener(this,this.onAdPlay);this.bind_fadended=b.bindAsEventListener(this,this.onAdEnded);this.bind_faderror=b.bindAsEventListener(this,this.onAdError);this.bind_fadpause=b.bindAsEventListener(this,this.onAdPause);this.bind_fadsuspend=b.bindAsEventListener(this,this.onAdSuspend);this.bind_fadstalled=b.bindAsEventListener(this,
this.onAdStalled);this.bind_fadwaiting=b.bindAsEventListener(this,this.onAdWaiting);this.bind_fadloadedmetadata=b.bindAsEventListener(this,this.onAdLoadedMetaData);this.bind_fadtimeupdate=b.bindAsEventListener(this,this.onAdTimeUpdate);b.addEventHandler(this.video,"play",this.bind_fadplay);b.addEventHandler(this.video,"ended",this.bind_fadended);b.addEventHandler(this.video,"error",this.bind_faderror);b.addEventHandler(this.video,"pause",this.bind_fadpause);b.addEventHandler(this.video,"suspend",
this.bind_fadsuspend);b.addEventHandler(this.video,"stalled",this.bind_fadstalled);b.addEventHandler(this.video,"waiting",this.bind_fadwaiting);b.addEventHandler(this.video,"loadedmetadata",this.bind_fadloadedmetadata);b.addEventHandler(this.video,"timeupdate",this.bind_fadtimeupdate);this.shadow=this.controls.buttons.shadow;this.videobtn=this.controls.buttons.videobtn;b.addEventHandler(this.videobtn,"click",this.bind_fadtoplay,!0)},removeAdEvent:function(){b.removeEventHandler(this.video,"play",
this.bind_fadplay);b.removeEventHandler(this.video,"ended",this.bind_fadended);b.removeEventHandler(this.video,"error",this.bind_faderror);b.removeEventHandler(this.video,"pause",this.bind_fadpause);b.removeEventHandler(this.video,"suspend",this.bind_fadsuspend);b.removeEventHandler(this.video,"stalled",this.bind_fadstalled);b.removeEventHandler(this.video,"waiting",this.bind_fadwaiting);b.removeEventHandler(this.video,"timeupdate",this.bind_fadtimeupdate);b.removeEventHandler(this.video,"loadedmetadata",
this.bind_fadloadedmetadata);b.removeEventHandler(this.videobtn,"click",this.bind_fadtoplay,!0)},onPlayClick:function(){this.video.play()},checkVTVC:function(a){var b=this._addata.vtvc;if(!(null==b||0===b.length))for(var d=0;d<b.length;d++){var e=b[d];e.pos_==a-1&&y(e.VC,"js")}},play:function(){this.checkVTVC(0);this.video.load();this.video.play()},leftSecond:function(){for(var a=this._addata.curnum,b=this._addata.seconds.length,d=this._addata.seconds[a]-this.video.currentTime,a=a+1;a<b;a++)d+=this._addata.seconds[a];
return parseInt(d)},clearTimer:function(){clearInterval(this._checkTimer);this._checkTimer=null},checkPause:function(){if(!this._checkTimer){var a=this;this._timelist=[];this._checkTimer=setInterval(function(){if(a.video.paused)a.onAdPause();else a._timelist.push(a.video.currentTime),3<=a._timelist.length&&(1>Math.abs(a._timelist[0]-a._timelist[2])&&(debug.log("<b>ad unexpected pause</b>"),a.video.play(),0==a.leftSecond()&&(debug.log("<b>exception left = 0 </b>"),a.onAdEnded())),a._timelist=[])},
1E3)}},onAdPlay:function(){this.checkPause();var a=this.controls.container.poster;b.hide(this.controls.buttons.videobtn);b.hide(a);b.hide(b.get(".x-video-info"));this.video.style.display="block";a=this._addata.curnum;debug.log("left="+this.leftSecond()+" curtotal="+this._addata.seconds[a]+" curtime="+this.video.currentTime);this._adplugin.setLeftSecond(this.leftSecond());var c=this;setTimeout(function(){debug.log("ad media timeout check begin = "+c._adBegin);c._adBegin||(c.removeAdEvent(),c._adplugin.hide(),
c._adplugin.reportTime("advideo",-1,!1),c.dispatch({type:ADConstant.AD_ERROR,data:!0}))},1E4);this._playTag[a]||(this._playTag[a]=!0,this._adfirsttu=!1,this._adplugin.recordTime("advideo"),l.appendItem("phase","adplay"))},uglyClose:function(){this.video.src="";this.video.load();this.video.play()},onAdError:function(){this.checkVTVC(this._addata.curnum+1);this.removeAdEvent();this._adplugin.hide();this._adplugin.reportTime("advideo",-1,!1);this.dispatch({type:ADConstant.AD_ERROR,data:!0})},onAdEnded:function(a){debug.log("ad ended");
this._adreporter.sendSUE();this.checkVTVC(this._addata.curnum+1);if(this._addata.curnum<this._addata.urls.length-1)this.onMiddleAdEnded(a);else this.removeAdEvent(),this._adplugin.hide(),this.clearTimer(),this.dispatch({type:ADConstant.AD_END,data:!0}),l.appendItem("phase","adend")},onMiddleAdEnded:function(){debug.log("onMiddleAdEnded");this._pauseLeftSec=!0;var a=this;setTimeout(function(){a._pauseLeftSec=!1},1E3);this._addata.curnum++;this.video.src=this._addata.urls[this._addata.curnum];this.video.load();
this.video.play();this._adBegin=!1},onAdPause:function(){this.player.video.ended||(b.show(this.controls.buttons.videobtn),b.hide(this.controls.buttons.shadow))},onAdSuspend:function(){debug.log("<font color=red>ad suspend</font>")},onAdStalled:function(){debug.log("<font color=red>ad stalled</font>")},onAdWaiting:function(a){this.controls.onWaiting(a)},onAdTimeUpdate:function(){b.hide(this.controls.buttons.loading);this._adBegin=!0;b.hide(this.controls.buttons.loading);this._pauseLeftSec||this._adplugin.setLeftSecond(this.leftSecond());
this._adreporter.sendSU(this.video.currentTime);0.5<=this.video.currentTime&&this._adplugin.show();this._adfirsttu||(this._adfirsttu=!0,this._adreporter.sendSUS(),this._adreporter.sendVC(),this._adplugin.reportTime("advideo"),e.isNeedAdrTrick()&&e.adrInvalidPauseCheck(this.video),0===this._adplugin.SKIP&&this.dispatch({type:ADConstant.UGLY_CLOSE_AD_HINT}))},onAdLoadedMetaData:function(){this._adBegin=!0},onAdClick:function(){this.video.pause();this._adreporter.sendCUM();var a=this._addata,a=a.info.VAL[a.curnum].CU;
debug.log("click cu="+a);window.open(a,"","",!1)}};ADConstant={FRONT_REQUEST_BASE:"http://mf.atm.youku.com/mf?",BACK_REQUEST_BASE:"http://mb.atm.youku.com/mb?",PAUSE_REQUEST_BASE:"http://mp.atm.youku.com/mp?",INSERT_REQUEST_BASE:"http://valo.atm.youku.com/valo?",OVERLAY_REQUEST_BASE:"http://valc.atm.youku.com/valc?",FRONT_AD:"frontAD",BACK_AD:"backAD",INSERT_AD:"insertAD",PAUSE_AD:"pauseAD",OVERLAY_AD:"overlayAD",AD_END:"adend",AD_ERROR:"aderror",UGLY_CLOSE_AD:"uglyclosead",FRONT_AD_END:"frontADend",
FRONT_AD_ERROR:"frontADerror",FRONT_AD_INFO_OK:"frontAdinfook",FRONT_AD_UNITED_INFO_OK:"unitedfrontadinfook",FRONT_AD_INFO_ADAPER_OK:"frontAdinfoadapterok",FRONT_AD_INFO_TIMEOUT:"frontAdinfotimeout",BACK_AD_END:"backAdend",BACK_AD_ERROR:"backaderror",BACK_AD_INFO_OK:"backAdinfook",BACK_AD_INFO_TIMEOUT:" backAdinfotimeout",INSERT_AD_INFO_OK:"insertAdinfook",PAUSE_AD_INFO_OK:"pauseAdinfook",PAUSE_AD_INFO_ERROR:"pauseAdinfoerror",PAUSE_AD_INFO_TIMEOUT:"pauseadinfotimeout",OVERLAY_AD_INFO_OK:"overlayAdinfook",
AdPluginObject:"adpluginobject"};var N=function(a,c,d){this._handler={};this.player=a;this.sid=d;this._advids=[];this._adsecs=[];this._adsrcs=[];this._vid=c.data[0].videoid;this._advert=b.get(".x-advert");this._adskip=this._advert.getElementsByClassName("x-advert-skip")[0];this._adcount=this._advert.getElementsByClassName("x-advert-countdown")[0];this._adknowdet=this._advert.getElementsByClassName("x-advert-detail")[0];this.init(c);this.bindEvent()};N.prototype={init:function(a){this.initRequestParam(a);
this._adskipTxt=this._adskip.getElementsByClassName("x-advert-txt")[0];this._adskipTxt.innerHTML="\u8df3\u8fc7\u5e7f\u544a";this._adcountTxt=this._adcount.getElementsByClassName("x-advert-txt")[0];this._adcountTxt.innerHTML="\u5e7f\u544a <span class=x-advert-sec></span> \u79d2";this._adsec=this._adcountTxt.getElementsByClassName("x-advert-sec")[0]},initRequestParam:function(a){var c={site:1,p:0,vl:parseInt(a.data[0].seconds),fu:0,ct:a.data[0].ct,cs:a.data[0].cs,d:0,paid:a.data[0].show?a.data[0].show.paid:
0,s:a.data[0].show?a.data[0].show.showid:0,sid:this.sid,td:a.data[0].sourceVid?a.data[0].sourceVid:0,v:a.data[0].videoid,vip:a.user.vip?1:0,wintype:"xplayer_m3u8",u:a.data[0].userid,bt:e.isPad?"pad":"phone",os:e.isMobileIOS?"ios":"Android",rst:e.isMobileIOS?"m3u8":"3gphd",tict:0,aw:"w",vs:"1.0"};null!=b.config.partner_config&&(c.partnerid=b.initConfig.client_id,c.atm=b.config.partner_config.atm);for(var d in b.initConfig.adconfig)c[d]=b.initConfig.adconfig[d];this._param=c;this._ti=encodeURIComponent(a.data[0].title);
this._k=encodeURIComponent((a.data[0].tags||[]).join("|"));this.loadPartnerParam()},loadPartnerParam:function(){},partnerParse:function(){},initRequestParam_:function(a){var c={ct:a.data[0].ct,cs:a.data[0].cs,v:a.data[0].videoid,t:parseInt(a.data[0].seconds),u:a.data[0].userid,fileid:"todo",winType:"xplayer_m3u8",partnerid:b.config.partnerId,sid:this.sid,k:"",td:"todo"};c.s=a.data[0].show?a.data[0].show.showid:"";a.user&&(c.vip=a.user.vip?1:0);c.paid=a.data[0].show?a.data[0].show.paid:0;for(var d in b.initConfig.adconfig)c[d]=
b.initConfig.adconfig[d];this._param=c},bindEvent:function(){var a=this;this.fSkipAd=function(){a.adplayer.video.pause();window.open("http://cps.youku.com/redirect.html?id=000002bf","","",!1)};this._adskip.addEventListener("click",this.fSkipAd,!1);this._adknowdet.addEventListener("click",function(){debug.log("detail clicked");a.adplayer.onAdClick("")},!1)},addEventListener:function(a,b){this._handler[a]=b},removeEventListener:function(a){this._handler[a]=null},dispatch:function(a){a&&this._handler[a.type]&&
(a._target=this,this._handler[a.type](a))},show:function(){b.show(this._advert)},hide:function(){b.hide(this._advert)},setLeftSecond:function(a){debug.log(a);this._adsec&&(this._adsec.innerText=a)},splitVTVC:function(a){debug.log("split adinfo vt vc");this._vtvc=[];var b={},d;for(d in a)"VAL"!=d&&(b[d]=a[d]);b.VAL=[];a=a.VAL;for(d=0;d<a.length;d++)2===parseInt(a[d].VT)?(a[d].pos_=d-1-this._vtvc.length,this._vtvc.push(a[d])):null==a[d].RS||(""==a[d].RS.trim()||null==a[d].VID||null==a[d].VQT)||b.VAL.push(a[d]);
return b},buildTestData:function(){return{VAL:[{AL:15,VID:147660115,VQT:"flv",SUS:[{U:"http://mytestdata.com1"},{U:"http://mytestdata.com2"}],SU:[],SUE:[],CU:"http://www.baidu.com",CUM:[{U:"http://cum"}],RS:"http://fasdfa"},{AL:15,VID:15252,VQT:"flv",SUS:[{U:"http://mytestdata.com1"},{U:"http://mytestdata.com2"}],SU:[],SUE:[],CU:"http://www.bing.com",CUM:[{U:"http://cum"}],RS:"http://fasdfa",VT:2,VC:"http://vc.com"}]}},checkSkip:function(a){a&&0===parseInt(a.SKIP)&&(b.hide(this._adskip),this.SKIP=
0)},adParseUnited:function(a){this.checkSkip(a);this._isAdInfoOk=!0;l.appendItem("phase","adinfo");this.reportTime("adinfo");a&&a.VAL&&(debug.log("<b>before split val length =  "+a.VAL.length+"</b>"),a=this.splitVTVC(a),debug.log("<b>after : val length =  "+a.VAL.length+"</b>"));if(null==a||null==a.VAL||0==a.VAL.length)a={VAL:[]},this.dispatch({type:ADConstant.FRONT_AD_UNITED_INFO_OK,data:{info:{VAL:[]},vtvc:this._vtvc||[]}});else{var a=new la(a,this._vtvc),b=this;a.addEventListener(ADConstant.FRONT_AD_INFO_ADAPER_OK,
function(a){debug.log("ad info adapter ok");b.dispatch({type:ADConstant.FRONT_AD_UNITED_INFO_OK,data:{info:a.data,vtvc:b._vtvc||[]}})});a.run()}},adParse:function(a){this.checkSkip(a);l.appendItem("phase","adinfo");this.reportTime("adinfo");this._isAdInfoOk=!0;if(a&&a.VAL)for(var a=this.splitVTVC(a),b=a.VAL,d=0;d<b.length;d++)this._adsrcs.push(b[d].RS),this._adsecs.push(parseInt(b[d].AL));debug.log("frontad len ="+this._adsrcs.length);this.dispatch({type:ADConstant.FRONT_AD_INFO_OK,data:{ids:this._advids||
[],urls:this._adsrcs,seconds:this._adsecs,info:a,vtvc:this._vtvc||[]}})},buildPauseData:function(){return adinfo={P:10,VAL:[{RS:"http://static.atm.youku.com/Youku2013/201307/0715/27896/600-430.jpg",RST:"img",AT:73,SU:[],SUS:[{U:"http://mf.atm.youku.com/mshow?v=137006183&at=73&ct=d&cs=1003&ca=135159&ie=150597&uid=1234567&ck=137689524489061H&al=0&bl=1&s=&td=&st=1&vl=1200.0&ap=4&sid=1&cr=0&tvb=0&pr=100&oidtype=27896%7C1&tpa=null&rid=&os=1&dt=1&aw=a&avs="}],SUE:[],CU:"http://vid.atm.youku.com/mclick?v=137006183&at=73&ct=d&cs=1003&ca=135159&ie=150597&uid=1234567&ck=137689524489061H&al=0&bl=1&s=&td=&st=1&vl=1200.0&ap=4&sid=1&cr=0&tvb=0&pr=100&oidtype=27896%7C1&tpa=null&rid=&os=1&dt=1&aw=a&avs=&u=http://static.youku.com/pub/youku/fragment/panel_phone.html&md5=f2450cd80597324b57d986147dc1b3a9",
W:400,H:300,CF:"1"}]}},adParsePause:function(a){debug.log("<b> ad parse pause </b>");l.appendItem("phase","pauseadinfo");this.reportTime("adinfo");this._isPauseAdInfoOk=!0;null==a||null==a.VAL||0==a.VAL.length||10!=a.P?this.dispatch({type:ADConstant.PAUSE_AD_INFO_ERROR}):(debug.log("<b>pause ad len = "+a.VAL.length+"</b>"),this.dispatch({type:ADConstant.PAUSE_AD_INFO_OK,data:{info:a}}))},frontAd:function(){this._param.fu=this.player.controls.fullscreenPanel.fullFlag()?1:0;this._param.p=7;this._param.callback=
ADConstant.AdPluginObject+".adParse";b.OLD_M3U8=!0;e.isIPAD&&(debug.log("<font color=red> new m3u8 api</font>"),b.OLD_M3U8=!1,this._param.callback=ADConstant.AdPluginObject+".adParseUnited");var a=ADConstant.FRONT_REQUEST_BASE+n(this._param)+"&ti="+this._ti+"&k="+this._k;x(a);this.recordTime("adinfo");var c=this;setTimeout(function(){if(!c._isAdInfoOk){debug.log("adinfo timeout");c.reportTime("adinfo",-1);c.dispatch({type:ADConstant.FRONT_AD_INFO_TIMEOUT,data:{timeout:8E3}})}},8E3)},pauseAd:function(){this._param.r_=
parseInt(1E4*Math.random());this._param.p=10;this._param.fu=this.player.controls.fullscreenPanel.fullFlag()?1:0;this._param.callback=ADConstant.AdPluginObject+".adParsePause";var a=ADConstant.PAUSE_REQUEST_BASE+n(this._param)+"&ti="+this._ti+"&k="+this._k;x(a);this.recordTime("adinfo");var b=this;setTimeout(function(){b._isPauseAdInfoOk||(debug.log("pause ad info timeout"),b.reportTime("adinfo",-1),b.dispatch({type:ADConstant.PAUSE_AD_INFO_TIMEOUT,data:{timeout:8E3}}))},8E3)},recordTime:function(a){null==
this._timearr&&(this._timearr={});this._timearr[a]=(new Date).getTime()},reportTime:function(a,b,d){null==this._timearr&&(this._timearr={});b=b||(new Date).getTime()-this._timearr[a];this.player._reporter.sendUepReport({adinfo:"valfload",advideo:"adload"}[a],b,d)},backAd:function(){this._param.fu=this.player.controls.fullscreenPanel.fullFlag();this._param.p=9;this._param.callback=ADConstant.AdPluginObject+".adParse";this._param.ctu=0;var a=ADConstant.BACK_REQUEST_BASE+n(this._param)+"&ti="+this._ti+
"&k="+this._k;x(a);var b=this;setTimeout(function(){b._isAdInfoOk||(debug.log("adinfo timeout"),b.dispatch({type:ADConstant.BACK_AD_INFO_TIMEOUT,data:{timeout:5E3}}))},5E3)},insertAd:function(){this._param.ps=0;this._param.pt=0}};var H=function(a,b){this.adplayer=a;this.addata=b;"undefined"==typeof b.curnum&&(this.addata.curnum=0)};H.prototype={sendSUS:function(){var a=this.addata.info.VAL[this.addata.curnum].SUS;if("undefined"!=typeof a)for(var b=0;b<a.length;b++)e.Log(a[b].U)},sendUnitedVTVC:function(a){var a=
a+2,b=this.addata.info.VAL[0].VTVC;this._vtccache||(this._vtccache=[]);for(var d=null,e=1E6,k=1E5,g=0;g<b.length;g++){var h=b[g].U,i=parseInt(b[g].T),l=a-i;0<=l&&l<k&&(k=l,d=h,e=i)}null!=d&&-1==this._vtccache.indexOf(e)&&(this._vtccache.push(e),debug.log("<b> vc = "+d+"</b>"),y(d,"js"))},sendVC:function(){var a=this.addata.info.VAL[this.addata.curnum];"undefined"!=typeof a.VT&&y(a.VC,"js")},sendSUS_:function(){var a=this.addata.info,b=this.addata.curnum+2,d=a["A"+b].ATMSU,f=a["A"+b].ISOSU;e.Log(a["A"+
b].SU);e.Log(d);e.Log(f)},sendSUE:function(){var a=this.addata.info.VAL[this.addata.curnum].SUE;if("undefined"!=typeof a)for(var b=0;b<a.length;b++)e.Log(a[b].U)},sendSUE_:function(){var a=this.addata.info,b=this.addata.curnum+2,d=a["A"+b].COU;e.Log(a["A"+b].OU);e.Log(d)},sendSU:function(a){var b=this.addata.info.VAL[this.addata.curnum].SU;if("undefined"!=typeof b){this._sucache||(this._sucache=[]);for(var d=1E4,f=1E6,k=0;k<b.length;k++){var g=parseInt(b[k].T),h=a-g;0<=h&&h<d&&(d=h,f=g)}if(1E6!=f&&
-1==this._sucache.indexOf(f)){this._sucache.push(f);for(k=0;k<b.length;k++)parseInt(b[k].T)==f&&e.Log(b[k].U)}}},sendSU_:function(a){curnum+=2;var b=this.addata.info["A"+curnum].MT;b&&a>=parseInt(b)&&(a=this.addata.info["A"+curnum].CMU,e.Log(this.addata.info["A"+curnum].MU),e.Log(a))},sendCUM:function(){var a=this.addata.info.VAL[this.addata.curnum].CUM;if("undefined"!=typeof a)for(var b=0;b<a.length;b++)e.Log(a[b].U)},sendUnitedCUM:function(a){var b=this.addata.info.VAL[0].CUM;if(!("undefined"==
typeof b||0===b.length))for(var d=0;d<b.length;d++)if(a<parseInt(b[d].T)){for(a=0;a<(b[d].CUM||[]).length;a++)e.Log(b[d].CUM[a].U);break}},sendCUM_:function(){var a=this.addata;e.Log(a.info["A"+(a.curnum+2)].VCU)}};var ma=function(a,c){this._handler={};this.player=a;this.controls=a.controls;this.adplugin=this.controls._pauseAdPlugin;this.info=c.data.info;this.adjustIMGWH();this.adpause=b.get(".x-ad-pause");this.info.VAL[0].VT=parseInt(this.info.VAL[0].VT);2!=this.info.VAL[0].VT&&(this.init(),this.bindEvent(),
this._adreporter=new H(this,c.data));this.loadVC()};ma.prototype={addEventListener:function(a,b){this._handler[a]=b},removeEventListener:function(a){this._handler[a]=null},dispatch:function(a){a&&this._handler[a.type]&&(a._target=this,this._handler[a.type](a))},bindEvent:function(){b.addEventHandler(this.adcontent,"click",b.bindAsEventListener(this,this.adClick));b.addEventHandler(this.adclose,"click",b.bindAsEventListener(this,this.hide));var a=this;window.addEventListener("orientationchange",function(){setTimeout(function(){b.isLandScape()||
a.hide()},1E3)})},adjustIMGWH:function(){var a=this.info.VAL[0].W,c=this.info.VAL[0].H,d=(b.get("#x-player").offsetHeight-110)/c;if(1<d||0>=d)d=1;this.info.VAL[0].W=a*d;this.info.VAL[0].H=c*d;debug.log("pause img adjusted w = "+this.info.VAL[0].W+" h = "+this.info.VAL[0].H)},init:function(){this.adpause.innerHTML="<div class=x-pause-content></div><div class=x-pause-close></div>";this.adcontent=this.adpause.getElementsByClassName("x-pause-content")[0];this.adcontent.innerHTML=" <img class=x-pause-img width="+
this.info.VAL[0].W+" height="+this.info.VAL[0].H+" src="+this.info.VAL[0].RS+">";this.adclose=this.adpause.getElementsByClassName("x-pause-close")[0];this.adimg=this.adcontent.getElementsByClassName("x-pause-img")[0];this.adimg.style.height=this.info.VAL[0].H+"px";this.adimg.style.width=this.info.VAL[0].W+"px";this.adpause.style.marginLeft="-"+this.info.VAL[0].W/2+"px";this.adpause.style.marginTop="-"+this.info.VAL[0].H/2+"px"},hide:function(){b.hide(this.adpause)},play:function(){2!=this.info.VAL[0].VT&&
(b.show(this.adpause),this._adreporter.sendSUS())},adClick:function(){window.open(this.info.VAL[0].CU,null);this._adreporter&&this._adreporter.sendCUM()},loadVC:function(){(2==this.info.VAL[0].VT||1==this.info.VAL[0].VT)&&y(this.info.VAL[0].VC,"js")}};var na=function(a,b){this._handler={};this.player=a;this.video=this.player.video;this.controls=this.player.controls;this._adplugin=this.player._adplugin;this._adplugin.adplayer=this;this._addata=b.data.info;this.video.preload="none";this.video.src=this._addata.VAL[0].RS;
debug.log("ad src="+this.video.src);this.video.style.display="block";this._playTag=[];this.bindAdEvent();this._adreporter=new H(this,{curnum:0,info:this._addata})};na.prototype={addEventListener:function(a,b){this._handler[a]=b},removeEventListener:function(a){this._handler[a]=null},dispatch:function(a){a&&this._handler[a.type]&&(a._target=this,this._handler[a.type](a))},bindAdEvent:function(){this.bind_fadtoplay=b.bindAsEventListener(this,this.onPlayClick);this.bind_fadplay=b.bindAsEventListener(this,
this.onAdPlay);this.bind_fadended=b.bindAsEventListener(this,this.onAdEnded);this.bind_faderror=b.bindAsEventListener(this,this.onAdError);this.bind_fadpause=b.bindAsEventListener(this,this.onAdPause);this.bind_fadsuspend=b.bindAsEventListener(this,this.onAdSuspend);this.bind_fadstalled=b.bindAsEventListener(this,this.onAdStalled);this.bind_fadwaiting=b.bindAsEventListener(this,this.onAdWaiting);this.bind_fadloadedmetadata=b.bindAsEventListener(this,this.onAdLoadedMetaData);this.bind_fadtimeupdate=
b.bindAsEventListener(this,this.onAdTimeUpdate);b.addEventHandler(this.video,"play",this.bind_fadplay);b.addEventHandler(this.video,"error",this.bind_faderror);b.addEventHandler(this.video,"pause",this.bind_fadpause);b.addEventHandler(this.video,"suspend",this.bind_fadsuspend);b.addEventHandler(this.video,"stalled",this.bind_fadstalled);b.addEventHandler(this.video,"waiting",this.bind_fadwaiting);b.addEventHandler(this.video,"loadedmetadata",this.bind_fadloadedmetadata);b.addEventHandler(this.video,
"timeupdate",this.bind_fadtimeupdate);this.shadow=this.controls.buttons.shadow;this.videobtn=this.controls.buttons.videobtn;b.addEventHandler(this.videobtn,"click",this.bind_fadtoplay,!0)},removeAdEvent:function(){b.removeEventHandler(this.video,"play",this.bind_fadplay);b.removeEventHandler(this.video,"ended",this.bind_fadended);b.removeEventHandler(this.video,"error",this.bind_faderror);b.removeEventHandler(this.video,"pause",this.bind_fadpause);b.removeEventHandler(this.video,"suspend",this.bind_fadsuspend);
b.removeEventHandler(this.video,"stalled",this.bind_fadstalled);b.removeEventHandler(this.video,"waiting",this.bind_fadwaiting);b.removeEventHandler(this.video,"timeupdate",this.bind_fadtimeupdate);b.removeEventHandler(this.video,"loadedmetadata",this.bind_fadloadedmetadata);b.removeEventHandler(this.videobtn,"click",this.bind_fadtoplay,!0)},onPlayClick:function(){this.video.play()},play:function(){this.video.load();this.video.play()},leftSecond:function(){return parseInt(Math.max(0,this._addata.VAL[0].AL-
this.video.currentTime))},clearTimer:function(){clearInterval(this._checkTimer);this._checkTimer=null},checkPause:function(){if(!this._checkTimer){var a=this;this._timelist=[];this._checkTimer=setInterval(function(){if(a.video.paused)a.onAdPause();else a._timelist.push(a.video.currentTime),3<=a._timelist.length&&(1>Math.abs(a._timelist[0]-a._timelist[2])&&(debug.log("<b>ad unexpected pause</b>"),a.video.play(),0==a.leftSecond()&&(debug.log("<b>exception left = 0 </b>"),a.onAdEnded())),a._timelist=
[])},1E3)}},onAdPlay:function(){this.checkPause();var a=this.controls.container.poster;b.hide(this.controls.buttons.videobtn);b.hide(a);b.hide(b.get(".x-video-info"));this.video.style.display="block";this._adplugin.setLeftSecond(this.leftSecond());var c=this;setTimeout(function(){debug.log("ad media timeout check begin = "+c._adBegin);c._adBegin||(c.removeAdEvent(),c._adplugin.hide(),c._adplugin.reportTime("advideo",-1,!1),c.dispatch({type:ADConstant.AD_ERROR,data:!0}))},15E3);this._playTag[0]||(this._playTag[0]=
!0,this._adfirsttu=!1,this._adplugin.recordTime("advideo"),l.appendItem("phase","adplay"))},uglyClose:function(){debug.log("united ugly close");this.onAdError()},onAdError:function(){this.removeAdEvent();this._adplugin.hide();this._adplugin.reportTime("advideo",-1,!1);this.clearTimer();this.dispatch({type:ADConstant.AD_ERROR,data:!0})},onAdEnded:function(){debug.log("united ad ended");this._adreporter.sendSUE();this.removeAdEvent();this._adplugin.hide();this.clearTimer();this.dispatch({type:ADConstant.AD_END,
data:!0});l.appendItem("phase","adend")},onAdPause:function(){this.player.video.ended||(b.show(this.controls.buttons.videobtn),b.hide(this.controls.buttons.shadow))},onAdSuspend:function(){debug.log("<font color=red>ad suspend</font>")},onAdStalled:function(){debug.log("<font color=red>ad stalled</font>")},onAdWaiting:function(a){this.controls.onWaiting(a)},onAdTimeUpdate:function(){if(this.video.currentTime>this._addata.VAL[0].AL)this.onAdEnded();else b.hide(this.controls.buttons.loading),this._adBegin=
!0,b.hide(this.controls.buttons.loading),this._adplugin.setLeftSecond(this.leftSecond()),this._adreporter.sendSU(this.video.currentTime),this._adreporter.sendUnitedVTVC(this.video.currentTime),this._adfirsttu||(this._adplugin.show(),this._adreporter.sendSUS(),this._adfirsttu=!0,this._adplugin.reportTime("advideo"),0===this._adplugin.SKIP&&this.dispatch({type:ADConstant.UGLY_CLOSE_AD_HINT}))},onAdLoadedMetaData:function(){this._adBegin=!0},onAdClick:function(){this.video.pause();this._adreporter.sendUnitedCUM(this.video.currentTime||
0);for(var a=this._addata.VAL[0].CU,b=this.video.currentTime,d=0;d<a.length;d++){var e=a[d],k=e.U;if(b<=parseInt(e.T)){window.open(k,"","",!1);break}}}};DirectPlayer=function(a){b.config=a;null==b.config.width&&(b.config.width=r(b.config.parentBox).offsetWidth);this.buildDirectDom(r(b.config.parentBox))};DirectPlayer.prototype={buildDirectDom:function(a){a.innerHTML="<div id=x-player class="+z(b.config.width)+'><div class=x-video-poster><img id=x-img></img></div><div class=x-video-button><div class=x-video-play-ico></div></div><div class=x-video-info><h1 class=x-title></h1><div class=x-video-state style="display:none"><span class=x-time-span></span></div><div class=x-showmore></div><div class=x-mask></div></div>'},
bindEvent:function(){this._videobtn=b.get(".x-video-button");b.addEventHandler(this._videobtn,"click",b.bindAsEventListener(this,this.redirect))},startPlay:function(a,c){b.v=a;b.videoInfo=c;b.videoInfo._playListData=a.data[0];this._pimg=b.get("#x-img");this._pimg.src=a.data[0].logo;this._title=b.get(".x-title");this._title.innerHTML=a.data[0].title;this._timespan=b.get(".x-time-span");this._timespan.innerHTML=b.getTime(a.data[0].seconds);b.show(b.get(".x-video-poster"));b.show(b.get(".x-video-info"));
this.adapterForReport();this._reporter=new L(this,b.v,b.videoInfo._sid);this.bindEvent()},onPlayStart:function(){b.config.events&&b.config.events.onPlayStart&&(e.playerCurrentState=e.playerState.PLAYER_STATE_PLAYING,debug.log(e.playerCurrentState),debug.log("api:onplaystart"),b.config.events.onPlayStart())},getSrc:function(){if(this.src)return this.src;"m3u8"==b.config.content?this.src=b.videoInfo.src:null!=b.videoInfo._videoSegsDic&&null!=b.videoInfo._videoSegsDic[m]&&(this.src=b.videoInfo._videoSegsDic[m][0].src);
return this.src},redirect:function(){var a=this.getSrc();debug.log("redirect play src="+a);e.isMIUI?window.location.href=a:window.open(a,"","",!1);this.onPlayStart();this._reporter.addPlayerStaticReport();this._reporter.addPlayerDurationReport(59);this._reporter.sendVVLog(59);this._reporter.sendTSLog(60);this._reporter.sendUserActionReport("xps","c");this._reporter.sendThirdPartyReport("xplayer_dl");this._reporter.sendCustomLoadedTime(1);this._reporter.sendClientConsumeReport()},adapterForReport:function(){this.controls=
{fullscreenPanel:{fullFlag:function(){return 1}}};this.video={src:this.getSrc()};this.getQuality=function(){return"m"}}};var R=function(a){this._id=a.id;this._pid=a.pid||"";this._url=a.url;this._box=a.parentBox;this._gotInfo=!1;a.width=r(a.parentBox).offsetWidth;a.height=r(a.parentBox).offsetHeight;b.config=a;this.request()};R.prototype={request:function(){window.pkinfo=this;x(this._url+"/h5/videos/play.json?vid="+this._id+
"&pid="+this._pid+"&callback=pkinfo.parse");var a=this;setTimeout(function(){!0!=a._gotInfo&&a.showError()},5E3)},parse:function(a){this._gotInfo=!0;0==a.error?(this.videoSrc=a.results.url,this.imgSrc=a.results.cover,this.buildDom()):this.showError()},buildDom:function(){var a="<div id=x-player class="+this.cssAdapt(parseInt(b.config.width))+">";this.$(this._box).innerHTML=a+"<video class=x-video-player id=youku-html5player-video style=width: 100%; height: 100%; position: relative; display: none; top: -1000px; src="+
this.videoSrc+"></video><div class=x-video-poster><img src="+this.imgSrc+"></img></div><div class=x-video-loading></div><div id=x-video-button class=x-video-button><div class=x-video-play-ico></div></div></div>";this.video=b.get(".x-video-player");this.cover=b.get(".x-video-poster");this.videoBtn=b.get(".x-video-button");this.loading=b.get(".x-video-loading");b.addEventHandler(this.videoBtn,"click",b.bindAsEventListener(this,this.onOverBtnClick));b.addEventHandler(this.video,"ended",b.bindAsEventListener(this,
this.onEnded));b.addEventHandler(this.video,"timeupdate",b.bindAsEventListener(this,this.onTimeUpdate));b.addEventHandler(this.video,"waiting",b.bindAsEventListener(this,this.onWaiting))},showError:function(){this.$(this._box).innerHTML='<div style="background:#000; color:#FFF; text-align:center; color: white; line-height:'+$$$(this._box).offsetHeight+'px " >\u89c6\u9891\u4fe1\u606f\u51fa\u9519\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5</div>'},onOverBtnClick:function(){this.video.play();this.loading.style.display=
"block";this.videoBtn.style.display="none"},onEnded:function(){this.cover.style.display="block";this.videoBtn.style.display="block";this.loading.style.display="none";this.video.style.display="none"},onTimeUpdate:function(){"none"!=this.loading.style.display&&(this.loading.style.display="none");"block"!=this.video.style.display&&(this.video.style.display="block");"none"!=this.cover.style.display&&(this.cover.style.display="none")},onWaiting:function(){this.loading.style.display="block"},cssAdapt:function(a){return e.isIPAD&&
0<=window.location.href.indexOf("v.youku.com")?"x-player":200>=a?"x-player x-player-200":300>=a?"x-player x-player-200-300":660>=a?"x-player x-player-300-660":800>=a?"x-player x-player-660-800":"x-player"},$:function(a){return document.getElementById(a)}};var oa=function(a,c){this.setting={debug:!1,controls:b.get(".x-console"),feedback:b.get(".x-feedback"),container:{poster:b.get(".x-video-poster")},buttons:{pointVideo:b.get("#point-video"),playControl:b.get(".x-play-control"),play:b.get("#x-playbtn"),
videobtn:b.get(".x-video-button"),loading:b.get(".x-video-loading"),videoinfo:b.get(".x-video-info"),shadow:b.get(".x-trigger"),currentTime:b.get(".x-time-current"),totalTime:b.get(".x-time-duration"),fullscreen:b.get(".x-fullscreen")},classNames:{play:"x-playing",pause:"x-pause"},init:function(){}};b.extend(this.setting,c);this.player=a;this.dashboard=this.setting.controls;this.container=this.setting.container;this.progressBar=new ea(a);this.progressBar.uCurrentTime=this.setting.buttons.currentTime;
this.miniProgressBar=new aa(a);this.fullscreenPanel=new X(a);this.interactionPanel=new Z(a);this.xplayer=b.get("#x-player");this.buttons=this.setting.buttons};oa.prototype={init:function(a,c){this.buttons.totalTime.innerHTML=c.totalTime?b.getTime(c.totalTime):"00:00";this.resetProgress();this.buttons.play.className=this.setting.classNames.play;var d=this.container.poster.getElementsByTagName("img")[0];b.config.poster?d.src=b.config.poster:a.data[0].trial||-6==a.data[0].error_code?(this.container.poster.style.backgroundColor=
"black",d.parentNode.removeChild(d),b.show(this.container.poster)):(d.src=a.data[0].logo,this.container.poster.style.display="block");this._qualityPanel=new ha(this.player,a);this._languagePanel=new $(this.player,a);this._playratePanel=new da(this.player,a);this._payPanel=new ba(this.player,a);this._feedbackPanel=new K(this.player,a);this._informationPanel=new Y(this.player,a);this.tipPanel=new ka(this.player,a);this.showlistPanel=new ja(this.player,a);this.playLimit=new ca(this.player,a);this.bindDynamicEvent()},
bindDynamicEvent:function(){this.bind_mutualHide=b.bindAsEventListener(this,this.mutualHide);b.addEventHandler(this._languagePanel,"click",this.bind_mutualHide);b.addEventHandler(this._qualityPanel,"click",this.bind_mutualHide);b.addEventHandler(this.showlistPanel,"click",this.bind_mutualHide);b.addEventHandler(this._playratePanel,"click",this.bind_mutualHide);this.bind_progress=b.bindAsEventListener(this,this.onProgress);b.addEventHandler(this.progressBar,"progressing",this.bind_progress);b.addEventHandler(this.progressBar,
"progressend",b.bindAsEventListener(this,this.onProgressEnd));b.addEventHandler(this._languagePanel,"settingdone",b.bindAsEventListener(this,this.onSettingDone));b.addEventHandler(this._qualityPanel,"settingdone",b.bindAsEventListener(this,this.onSettingDone));b.addEventHandler(this._playratePanel,"settingdone",b.bindAsEventListener(this,this.onSettingDone));b.addEventHandler(this._languagePanel,"settingshow",b.bindAsEventListener(this,this.onSettingShow));b.addEventHandler(this._qualityPanel,"settingshow",
b.bindAsEventListener(this,this.onSettingShow));b.addEventHandler(this._playratePanel,"settingshow",b.bindAsEventListener(this,this.onSettingShow));b.addEventHandler(this._languagePanel,"settinghide",b.bindAsEventListener(this,this.onSettingHide));b.addEventHandler(this._qualityPanel,"settinghide",b.bindAsEventListener(this,this.onSettingHide));b.addEventHandler(this._playratePanel,"settinghide",b.bindAsEventListener(this,this.onSettingHide));b.addEventHandler(this.fullscreenPanel,"enterfullscreen",
b.bindAsEventListener(this,this.onEnterFullScreen));b.addEventHandler(this.fullscreenPanel,"exitfullscreen",b.bindAsEventListener(this,this.onExitFullScreen))},retimer:function(){debug.log("retimer");this.autoHideDashBoard()},hideDashBoard:function(){var a=this._payPanel,b=this._informationPanel,d=this.miniProgressBar,e=this.interactionPanel,k=this._languagePanel;this.setting.controls.style.display="none";d.show();a.hide();b.hide();e.hideStatus();k.hide();this._qualityPanel.hide();this._playratePanel.hide()},
autoHideDashBoard:function(a){this.dashboardTimer&&clearTimeout(this.dashboardTimer);var c=this;this.dashboardTimer=setTimeout(function(){"block"==b.get(".x-showlist").style.display?c.autoHideDashBoard(a):c.player.video.paused||c.hideDashBoard()},a||2E3)},onMultiTouch:function(){},showUglyHint:function(){},closeUglyHint:function(){},showBoardInfo:function(){b.show(this.setting.controls);this.miniProgressBar.hide();this._informationPanel.show();this._payPanel.hasPayInfo()&&this._payPanel.show()},toggleDashBoard:function(a){if(!("touchend"==
a.type&&1<a.changedTouches.length)){this._sx=this._sx||0;this._sy=this._sy||0;a.changedTouches=a.changedTouches||[{clientX:this._sx,clientY:this._sy}];var b={x:this._sx,y:this._sy},a={x:a.changedTouches[0].clientX,y:a.changedTouches[0].clientY};!this._stmtag&&(1!==this._sactionType&&this.isTouchTooShort(b,a,100))&&(b=this.setting.controls.style.display,"none"==b||""==b?(this.player._reporter.sendUserActionReport("xcd","c"),this.showBoardInfo(),this.autoHideDashBoard(),fa=(new Date).getTime()):(this.player._reporter.sendUserActionReport("xhd",
"c"),clearTimeout(this.dashboardTimer),this.hideDashBoard()))}},bindAdVideoBtnEvent:function(){b.addEventHandler(this.buttons.videobtn,"touchstart",b.bindAsEventListener(this,this.onVideoBtnTouchStart));b.addEventHandler(this.buttons.videobtn,"touchend",b.bindAsEventListener(this,this.onVideoBtnTouchEnd))},bindVideoBtnEvent:function(){b.addEventHandler(this.buttons.videobtn,"click",b.bindAsEventListener(this,this.onVideoBtnClick),!0)},bindEvent:function(){debug.log("bind event");this.bind_uireinit=
b.bindAsEventListener(this,this.uiInit);this.bind_play=b.bindAsEventListener(this,this.play);this.bind_redirect=b.bindAsEventListener(this,this.redirect);this.bind_showTimeTip=b.bindAsEventListener(this,this.showTimeTip);this.bind_hideTimeTip=b.bindAsEventListener(this,this.hideTimeTip);this.bind_changeVolume=b.bindAsEventListener(this,this.changeVolume);this.bind_toggleVolume=b.bindAsEventListener(this,this.toggleVolume);this.bind_gestureChange=b.bindAsEventListener(this,this.onGestureChange);this.bind_toggleDashBoard=
b.bindAsEventListener(this,this.toggleDashBoard);this.bind_retimer=b.bindAsEventListener(this,this.retimer);b.addEventHandler(this.progressBar,"click",this.bind_uireinit);b.addEventHandler(this.setting.controls,"click",this.bind_retimer);b.addEventHandler(this.setting.controls,"touchstart",this.bind_retimer);b.addEventHandler(this.buttons.playControl,"click",this.bind_play);"directsrc"==b.config.playType&&(!e.isIPHONE&&!e.isIPOD?b.addEventHandler(this.buttons.videobtn,"click",this.bind_redirect,!0):
b.addEventHandler(this.buttons.videobtn,"click",b.bindAsEventListener(this,this.playIPH),!0));b.addEventHandler(this.buttons.shadow,"touchstart",b.bindAsEventListener(this,this.shadowTouchStart));b.addEventHandler(this.buttons.shadow,"touchmove",b.bindAsEventListener(this,this.shadowTouchMove));b.addEventHandler(this.buttons.shadow,"touchend",b.bindAsEventListener(this,this.shadowTouchEnd));b.addEventHandler(this.buttons.shadow,"click",this.bind_toggleDashBoard);b.addEventHandler(this.buttons.shadow,
"touchend",b.bindAsEventListener(this,this.onMultiTouch));b.addEventHandler(this.buttons.shadow,"gesturechange",this.bind_gestureChange)},removeEvent:function(){debug.log("remove event begin");b.removeEventHandler(this.progressBar,"click",this.bind_uireinit);b.removeEventHandler(this.buttons.playControl,"click",this.bind_play);b.removeEventHandler(this.buttons.shadow,"click",this.bind_toggleDashBoard);b.removeEventHandler(this.progressBar,"touchstart",this.bind_uireinit);b.removeEventHandler(this._languagePanel,
"click",this.bind_mutualHide);b.removeEventHandler(this._qualityPanel,"click",this.bind_mutualHide);b.removeEventHandler(this._playratePanel,"click",this.bind_mutualHide);this.progressBar.removeEvent();this.fullscreenPanel.removeEvent();this._languagePanel.removeEvent();this._qualityPanel.removeEvent();debug.log("remove event end")},onGestureChange:function(a){a.preventDefault();var b=-1!==this.fullscreenPanel.zoomStatus().indexOf("in");if(1.1<a.scale&&b||0.9>a.scale&&!b)a.method="m",this.fullscreenPanel.switchFullScreen(a)},
toggleVolume:function(){},changeVolume:function(){},rePlay:function(){debug.log("replay");this.player._reporter.sendUserActionReport("xrp","c");w=!1;(this._recommend=b.get(".x-recommend"))&&b.get("#x-player").removeChild(this._recommend);this.resetProgress();this._first=!1;this.player.replay();debug.log("replay func end")},redirect:function(a){this.player.redirect(a)},hideFacade:function(){var a=this.container.poster;b.hide(this.buttons.videobtn);b.hide(a);b.hide(b.get(".x-feedback"));debug.log("<font color=blue>hide facade</font>")},
onVideoBtnTouchStart:function(a){this._vtsx=a.targetTouches[0].clientX;this._vtsy=a.targetTouches[0].clientY},onVideoBtnTouchEnd:function(a){debug.log("<font color=red>video btn clicked</font>");a=a||{};w?this.rePlay():a&&a.changedTouches&&50<Math.abs(a.changedTouches[0].clientY-this._vtsy)?debug.log("videobtn too long y"):(this.player._reporter.sendUserActionReport("xps","c"),!0!==this._hasAdReq&&(this._hasAdReq=!0,this.hideFacade(),debug.log("active src="+this.player.video.src),this.player.video.load(),
this.player.requestAd()))},onVideoBtnClick:function(){if((e.isIPHONE||e.isIPOD)&&null!=b.v.data[0].trial)this.player.video.style.display="block";w?this.rePlay():b.v.data[0].trial&&0==b.v.data[0].trial.time||(this.player.video.load(),this.player.video.play())},playIPH:function(){if(!this.iphTag){this.player.video.load();var a=this;this.player.video.addEventListener("timeupdate",function(b){4==b.target.readyState&&(a.iphTag=!0)})}this.player.video.play()},play:function(a){a=a||{};if(w)this.rePlay();
else{var b=this.player.video.paused;debug.log("m3u8 isPause = "+b+" e = "+a);b?(0===this._payPanel.activeTime?(this._payPanel.activeTime=-1,this.player.seek(0)):this.player.video.play(),this.player._reporter.sendUserActionReport("xpl","c"),this.interactionPanel.setStatus("\u64ad\u653e")):(this.player.video.pause(),this.player._reporter.sendUserActionReport("xpa","c"),this.interactionPanel.setStatus("\u6682\u505c"));this.checkPauseAd()}},isProperWH:function(a,c){var d=b.get("#x-player");return d.offsetWidth>=
a&&d.offsetHeight>=c},isNeedPauseAd:function(){return this.player.video.paused&&b.isLandScape()},checkPauseAd:function(){this.isNeedPauseAd()?(this._pauseAdPlugin=new N(this.player,b.v,b.videoInfo._sid),this._pauseAdPlugin.addEventListener(ADConstant.PAUSE_AD_INFO_OK,b.bindAsEventListener(this,this.onPauseAdInfoOK)),this._pauseAdPlugin.addEventListener(ADConstant.PAUSE_AD_INFO_TIMEOUT,b.bindAsEventListener(this,this.onPauseAdInfoTimeout)),this._pauseAdPlugin.addEventListener(ADConstant.PAUSE_AD_INFO_ERROR,
b.bindAsEventListener(this,this.onPauseAdInfoERROR)),window[ADConstant.AdPluginObject]=this._pauseAdPlugin,this._pauseAdPlugin.pauseAd(),debug.log("send pause ad request<br/>")):(debug.log("<font color=blue> donot need pause ad </font>"),this.hidePauseAd())},hidePauseAd:function(){b.hide(b.get(".x-ad-pause"))},onPauseAdInfoOK:function(a){debug.log("pause info ok");this._pauseAdStart||(this._pauseAdStart=!0);this._pauseAdPlayer=new ma(this.player,a);this._pauseAdPlayer.play()},onPauseAdInfoTimeout:function(a){debug.log("pause info timeout = "+
a.data.timeout);this._pauseAdStart||(this._pauseAdStart=!0)},onPauseAdInfoERROR:function(){debug.log("<font color=blue>pause info error no info</font>");this._pauseAdStart||(this._pauseAdStart=!0)},autoShow:function(){this.show();var a=this;setTimeout(function(){a.hide()},5E3)},mutualHide:function(a){a._target==this._languagePanel?(this._qualityPanel.hide(!0),this._playratePanel.hide(!0),this.showlistPanel.hide()):a._target==this._qualityPanel?(this._languagePanel.hide(!0),this._playratePanel.hide(!0),
this.showlistPanel.hide()):a._target==this.showlistPanel?(this._qualityPanel.hide(!0),this._languagePanel.hide(!0),this._playratePanel.hide(!0)):a._target==this._playratePanel&&(this._qualityPanel.hide(!0),this._languagePanel.hide(!0),this.showlistPanel.hide())},show:function(a){a?b.show(this.buttons[a]):b.show(this.setting.controls)},hide:function(a){a?b.hide(this.buttons[a]):b.hide(this.setting.controls)},backAdPrepare:function(){this.dashboard.style.display="none";this.buttons.shadow.display="none"},
onEnded:function(){this.dashboard.style.display="none";this.buttons.shadow.display="none";this.buttons.videobtn.style.display="block";this.container.poster.style.display="block";this._informationPanel.show();this.miniProgressBar.hide();this.interactionPanel.hide();null==b.v.data[0].trial&&!1!=b.initConfig.show_related&&(this._relatedPanel=new ia(this.player,b.v))},onPlay:function(){this.player.video.style.display="block";this.buttons.play.className=this.setting.classNames.pause;this.buttons.videobtn.style.display=
"none";this.container.poster.style.display="none";this.hidePauseAd();this.buttons.shadow.style.display="block";(this._recommend=b.get(".x-recommend"))&&b.get("#x-player").removeChild(this._recommend);w=!1;this._first||(this._first=!0,this._informationPanel.show(),this.setting.controls.style.display="block");this.autoHideDashBoard(5E3)},onPause:function(){this.buttons.play.className=this.setting.classNames.play;b.hide(this.buttons.loading);this.interactionPanel.isVisible()||(this.showBoardInfo(),this.interactionPanel.setStatus("\u6682\u505c"))},
onWaiting:function(){!this.player.video.paused&&"none"==this.buttons.videobtn.style.display&&(this.buttons.loading.style.display="block")},onTryPlayEnded:function(){debug.log("try end");var a=this.player.video;this.player.video.pause();this._payPanel.activeTime=0;w=!0;this.onEnded({target:a});this._payPanel.showTip();var b=this;setTimeout(function(){b.dashboard.style.display="none";b.buttons.shadow.style.display="none";b.interactionPanel.hide()},1E3)},onTimeUpdate:function(a){this.buttons.loading.style.display=
"none";if(a.target==this.player.video){var b=this.player.currentTime;4==a.target.readyState&&this.setProgress(b);if(this._payPanel.hasPayInfo()&&b>=this._payPanel.tryDuration())this.onTryPlayEnded();this.playLimit.isLimit()&&b>=this.playLimit.limitTime()&&this.playLimit.create()}},checkPlayLimit:function(){return this.playLimit.isLimit()?(this.playLimit.create(),!0):!1},removeControls:function(){this.video.controls=!1},loadControls:function(){this.video.controls=!0},setProgress:function(a){a=Math.min(Math.max(a,
0),b.videoInfo.totalTime);this.progressBar.setProgress(a);this.miniProgressBar.setProgress(a);this.buttons.currentTime.innerHTML=b.getTime(this.progressBar.playTime)},resetProgress:function(){this.progressBar.resetProgress();this.miniProgressBar.resetProgress();this.buttons.currentTime.innerHTML="00:00"},hideTimeTip:function(a){if(a.srcElement.id==this.buttons.progressHandler.id)return!1;this.buttons.progressTime.style.display="none"},showTimeTip:function(a){if(a.srcElement.id==this.buttons.progressHandler.id||
a.srcElement.id==this.buttons.progressTime.id||a.srcElement.id==this.buttons.pointVideo.id)return!1;a=a.offsetX/this.buttons.progressBar.offsetWidth;this.buttons.progressTime.innerHTML=b.getTime(a*b.videoInfo.totalTime);this.buttons.progressTime.style.left=100*Math.min(Math.max(a,0.023),0.977)+"%";this.buttons.progressTime.style.display="block"},shadowTouchStart:function(a){1<a.targetTouches.length?this.interactionPanel.hide():(this._sx=a.targetTouches[0].clientX,this._sy=a.targetTouches[0].clientY,
this._smx=this._sx,this._smy=this._sy,this._presmx=this._sx,this._presmy=this._sy,this._deltaxs=[],this._ttime=this._stime=this.player.currentTime||0,this._spretag=this._stmtag=!1,this._presmt=this._sactionTime=(new Date).getTime(),this._stmlrtag=this._sactionType=0)},shadowTouchMove:function(a){if(1<a.targetTouches.length)this.interactionPanel.hide();else{this._smx=a.targetTouches[0].clientX;this._smy=a.targetTouches[0].clientY;this._smt=(new Date).getTime();var b=Math.abs(this._smx-this._sx),d=
Math.abs(this._smy-this._sy),e=this._smt-this._sactionTime;0===this._stmlrtag&&(this._stmlrtag=b>d?1:-1);1==this._stmlrtag&&a.preventDefault();if(1!=this._sactionType)if(100<b&&b>d&&500>e)debug.log("quick seek moving"),this.player.video.pause(),this._sactionType=1,e=this._smx>this._sx?30:-30,this.interactionPanel.setTip(this._stime,e),this.interactionPanel.show();else if(200>b&&(100>d&&1E3<e)&&(this._spretag=!0),this._spretag&&b>d||this._stmtag)debug.log("stmtag ="+this._stmtag),this._sactionType=
2,this._stmtag=!0,this.player.video.pause(),this.dragging(a)}},shadowTouchEnd:function(a){1<a.changedTouches.length?this.interactionPanel.hide():(this.adrAdapt(a),this.isShadowTouchTooShort()&&!this._stmtag&&1!=this._sactionType?debug.log("too short or horizontal"):(a=Math.abs(this._smy-this._sy)>Math.abs(this._smx-this._sx)?"xdud":"xdlr",debug.log("shadow action = "+a),this.player._reporter.sendUserActionReport(a,"d"),2==this._sactionType?(debug.log("<br/><b>normal seek</b>"),this.player.video.play(),
this.player.seek(this._ttime),this.interactionPanel.hide(),this.player._reporter.sendUserActionReport("xtseek","d"),e.Log(e.uniplayerUrl+q({e:"xtseek",adr:e.isAndroid,ios:e.isIPAD,d:parseInt(this._ttime-this._stime)}))):1==this._sactionType&&(a=0<this._smx-this._sx?30:-30,debug.log("<br/><font color=red>quick seek deltat = "+a+" cur="+this._stime+"</font>"),this.setProgress(this._stime+a),this.interactionPanel.setTip(this._stime,a),this.interactionPanel.show(),this.interactionPanel.autoHide(),this.player.video.play(),
this.player.seek(this._stime+a),this.player._reporter.sendUserActionReport("xqseek","d"),e.Log(e.uniplayerUrl+q({e:"xqseek",adr:e.isAndroid,ios:e.isIPAD,d:a})),debug.log("<br/>"))))},dragging_:function(a){var c=this._smx-this._presmx;this._deltaxs.push(10<c?c/2:c);for(var d=c=0;d<this._deltaxs.length;d++)c+=this._deltaxs[d];a=Math.min(Math.max(c/a.currentTarget.offsetWidth*b.videoInfo.totalTime+this._stime,0),b.videoInfo.totalTime);this.setProgress(a);this.interactionPanel.show();this._ttime=a;this._presmx=
this._smx;this._presmy=this._smy;this._presmt=this._smt},dragging:function(a){a=Math.min(Math.max(60*((this._smx-this._sx)/a.currentTarget.offsetWidth)+this._stime,0),b.videoInfo.totalTime);this.setProgress(a);this.interactionPanel.setTip(this._ttime,a-this._ttime);this.interactionPanel.show();this._ttime=a;this._presmx=this._smx;this._presmy=this._smy;this._presmt=this._smt},onProgress:function(a){this.interactionPanel.setTip(a.st||0,a.dt||0);this.interactionPanel.show()},onProgressEnd:function(){this.interactionPanel.hide()},
onSettingDone:function(){this.interactionPanel.setStatus("\u8bbe\u7f6e\u6210\u529f")},onSettingShow:function(){debug.log("<b>setting show</b>");clearTimeout(this.pbarClickTimer);this.progressBar.removeClickEvent()},onSettingHide:function(){debug.log("<b>setting hide</b>");var a=this;this.pbarClickTimer=setTimeout(function(){a.progressBar.addClickEvent()},1E3)},onEnterFullScreen:function(){e.isIPAD&&b.addClass(this.setting.controls,"x-fs-console")},onExitFullScreen:function(){e.isIPAD&&b.removeClass(this.setting.controls,
"x-fs-console")},adrAdapt:function(a){e.isAndroid&&(this._smx=a.changedTouches[0].clientX,this._smy=a.changedTouches[0].clientY,debug.log("<hr/>adr smy= "+this._smy+" y = "+this._sy))},isShadowTouchTooShort:function(a){return this.isTouchTooShort({x:this._sx,y:this._sy},{x:this._smx,y:this._smy},a)},isTouchTooShort:function(a,b,d){var e=Math.abs(b.x-a.x),e=e||1.0E-6,a=(a=Math.abs(b.y-a.y))||1.0E-6;debug.log(e+","+a);d=d||100;return e<d&&a<d?!0:!1},showShowListBtn:function(){this.showlistPanel.showListBtn()},
hideShowListBtn:function(){this.showlistPanel.hideListBtn()},showLastTimeTip:function(a){0>=a||this.tipPanel.showLastTimeTip(a)},uiInit:function(){debug.log("uiInit");w&&(w=!1,this.buttons.videobtn.style.display="block")},onResize:function(a){var c=r(b.config.parentBox).offsetWidth,d=r(b.config.parentBox).offsetHeight;if(c&&(d&&b.resizeTag)&&(this.player._reporter.sendUserActionReport("xre","r"),d=this.xplayer.className,this.xplayer&&(-1===d.indexOf("fullscreen")?this.xplayer.className=z(c):(c=window.innerWidth,
this.xplayer.className=z(c)+" x-player-fullscreen")),this._relatedPanel))this._relatedPanel.onResize(a)}};var O=function(){this.video=b.get("#youku-html5player-video");this._startPlayTime=-1;this.currentTime=this._waitTry=0};O.prototype={getVideo:function(){return this.video},show:function(){b.show(this.video)},hide:function(){b.hide(this.video)},play:function(){b.v&&b.v.data[0].trial&&0==b.v.data[0].trial.time?debug.log("<b> trial time = 0  </b>"):this.video.play()},pause:function(){this.video.pause()},
setupControls:function(a){this.controls&&this.controls.removeEvent();return new oa(a)},hideControls:function(){this.controls.hide()},showControls:function(){this.controls.show()},removeControls:function(){this.controls.removeControls()},loadControls:function(){this.controls.loadControls()},retry:function(){},showError:function(a){this.errorBox||(this.errorBox=document.createElement("div"),this.errorBox.style.cssText="position:absolute;width:100%;top:50%;display:none;text-align:center;",this.video.parentNode.appendChild(this.errorBox));
this.errorBox.innerHTML=a;this.errorBox.style.marginTop="-"+this.errorBox.offsetHeight/2+"px";this.errorBox.style.display="block"},onLoadStart:function(){},onCanPlay:function(){},onLoadedData:function(){},onLoadedMetaData:function(){},onAbort:function(){},onError:function(){this._reporter.sendUserActionReport("xve","e");this._reporter.sendUepReport("videoload",-1,!1);e.uniReport({error:10,vid:b.v.data[0].videoid,time:this.currentTime,errorcode:this.video.error.code,ua:escape(navigator.userAgent.replace(/[\/\+\*@\(\)\,]/g,
""))});e.sendErrorReport(2001);if(0<=this._retry--)-1!==this.video.src.indexOf("m3u8")&&(this.video.src=b.m3u8src_v2(b.v.data[0].videoid,b.defaultVideoType)),debug.log("video onerror retry it ,time="+this.currentTime+" src="+this.video.src),this.video.load(),this.video.play(),this.seek(this.currentTime);else if(!(this.isOnePiece()&&!0==this.controls.checkPlayLimit())&&!this._errorTag){e.uniReport({error:11,errorcode:this.video.error.code,vid:b.v.data[0].videoid,ua:escape(navigator.userAgent.replace(/[\/\+\*@\(\)\,]/g,
""))});this._errorTag=!0;if(b.playerEvents&&b.playerEvents.onPlayError)b.playerEvents.onPlayError("\u62b1\u6b49\uff0c\u89c6\u9891\u51fa\u9519\uff0c\u8bf7\u5237\u65b0");var a=b.get("#x-player");a.innerHTML="\u62b1\u6b49\uff0c\u89c6\u9891\u51fa\u9519\uff0c\u8bf7\u5237\u65b0";a.style.textAlign="center";a.style.color="white";a.style.lineHeight=a.offsetHeight+"px"}},onPause:function(){this.controls.onPause()},onPlayIPH:function(){debug.log("onplayiph");this.onPlayStart();this._firstPlayTag?!0==this._endedIPH&&
(this._reporter.tsInit(),this._reporter.sendVVLog(62),this._reporter.sendTSLog(60),this._reporter.addPlayerDurationReport(62)):(this._firstPlayTag=!0,this._reporter.addPlayerStaticReport(),this._reporter.addPlayerDurationReport(59),this._reporter.sendVVLog(59),this._reporter.sendTSLog(60),this._reporter.sendUserActionReport("xps","c"),this._reporter.sendLoadedTime(3),this._reporter.sendThirdPartyReport("xplayer_iph"),this._reporter.sendClientConsumeReport())},onTimeUpdateIPH:function(){this.currentTime=
this.video.currentTime},onEndedIPH:function(){this.onPlayEnd();this._reporter.addPlayerDurationReport(61);this._reporter.sendTSLog(61);this._endedIPH=!0},onPlay:function(){debug.log("onplay");this.controls.onPlay();this._firstPlayTag||(this._firstPlayTag=!0,this.onPlayStart(),b.initConfig.firsttime?(debug.log("starttime = "+b.initConfig.firsttime),this.seek(b.initConfig.firsttime)):this.seekToLastPoint()||this.skipHead(),this._startPlayTime=(new Date).getTime(),this._reporter.addPlayerStaticReport(),
this._reporter.addPlayerDurationReport(59),this._reporter.sendVVLog(59),this._reporter.sendTSLog(60),this._reporter.sendClientConsumeReport());l.appendItem("phase","videoplay")},onVolumeChange:function(){},onPlaying:function(){},onStalled:function(a){debug.log("<b>stalled</b>");if(this.isOnePiece()||a.target==this.video)this.controls.onWaiting(a)},onSuspend:function(){},onWaiting:function(a){if(this.isOnePiece()||a.target==this.video)this.controls.onWaiting(a)},onSeeked:function(){debug.log("onSeeked waitSkip="+
this._waitSeek+" try= "+this._waitTry);if(!isNaN(this._waitSeek)){var a=this._waitSeek;10<Math.abs(this.video.currentTime-a)&&5>=this._waitTry?(this._waitTry+=1,this.seek(a)):this._waitSeek="NaN"}},onSeeking:function(a){debug.log("seeking");if(this.isOnePiece()||a.target==this.video){var b=this;setTimeout(function(){b.controls.onWaiting(a)},100)}},onDurationChange:function(){},onProgress:function(){},onRateChange:function(){},customWaiting:function(){var a=this;!1==this.video.paused&&this._lastTime===
this.currentTime&&(debug.log("custom waiting!:) networkstate="+this.video.networkState),this.controls.onWaiting());this._lastTime=this.currentTime;setTimeout(function(){a.customWaiting()},5E3)},sendLoadedTime:function(){var a=0,a=-1==this._startPlayTime?0:(new Date).getTime()-this._startPlayTime;this._reporter.sendLoadedTime(a)},onTimeUpdate:function(a){if(this.isOnePiece())this.currentTime=this.video.currentTime,b.unitedTag&&(this.currentTime-=b.unitedTag.offset);else{for(var c=0,d=0;d<s;d++)c+=
parseInt(b.videoInfo._videoSegsDic[m][d].seconds);this.currentTime=c+this.video.currentTime}this.controls.onTimeUpdate(a);this._firstflag||(this._firstflag=!0,this.customWaiting(),this.recordLocalPlayPoint(),this.sendLoadedTime(),l.appendItem("phase","videotimeupdate"),e.isNeedAdrTrick()&&e.adrInvalidPauseCheck(this.video));this._comscoreflag||(this._comscoreflag=!0,this._reporter.sendThirdPartyReport("xplayer_h5"));this.skipTail(this.currentTime)},curVideo:function(){return this.video},getQuality:function(){if("m3u8"==
b.config.content){var a=this.video.src;if(-1!==a.indexOf("mp4"))return"m";if(-1!==a.indexOf("flv"))return"f";if(-1!==a.indexOf("hd2"))return"h"}else return"m"},bufferedEnd:function(){var a=this.curVideo().buffered;return 0==a.length?0:a.end(a.length-1)},loadNextVideo:function(){var a=b.v.data[0].list_next,c=this;debug.log("loadNextVideo vid = "+a.vidEncoded);if(a.vidEncoded){var d={isFullScreen:!0,vid:a.vid,vidEncoded:a.vidEncoded,Pt:2==window.playmode?a.seq:null};b.config.nextAutoPlay=!0;i.start(a.vidEncoded,
"",b.config.content,function(a,b){c.startPlay(a,b);try{onPlayerStart(d)}catch(e){console.log("onPlayerStart error")}})}},onPlayEnd:function(){e.playerCurrentState=e.playerState.PLAYER_STATE_END;debug.log(e.playerCurrentState);b.config.events&&b.config.events.onPlayEnd&&(debug.log("callback: on play end"),b.config.events.onPlayEnd(b.v.data[0].list_next))},onPlayStart:function(){b.config.events&&b.config.events.onPlayStart&&(e.playerCurrentState=e.playerState.PLAYER_STATE_PLAYING,debug.log(e.playerCurrentState),
debug.log("callback: on play start"),b.config.events.onPlayStart())},onMiddleEnded:function(){s++;this.video.src=b.multiPieceSrc(s);this.video.load();this.video.play();this.video.style.display="block";debug.log("middle src = "+this.video.src)},onEnded:function(a){if(!(this.isOnePiece()&&!0==this.controls.checkPlayLimit()))if(this.isOnePiece()||s==b.videoInfo._videoSegsDic[m].length-1)w=!0,this._reporter.addPlayerDurationReport(61),this._reporter.sendTSLog(61),this.clearLocalPlayPoint(),this.showEndCard(a),
l.appendItem("phase","videoended");else this.onMiddleEnded(a)},showEndCard:function(a){this.video.style.display="none";this.controls.onEnded(a);this.onPlayEnd()},onBeginFullscreen:function(){},onEndFullscreen:function(){if((e.isIPHONE||e.isIPOD)&&null!=b.v.data[0].trial)this.video.style.display="none"},detectIsPlaying:function(a){var b=a||0,d=this;clearTimeout(this.timeoutTimer);0===this.video.currentTime&&60>=b&&(this.video.load(),this.play(),this.timeoutTimer=setTimeout(function(){d.detectIsPlaying(++b)},
1E3))},isOnePiece:function(){return"m3u8"==b.config.content||"mp4"==b.config.content&&1==b.videoInfo._videoSegsDic[m].length},bindEvent:function(){if(!b.v.data[0].error_code&&!b.v.data[0].error)if("directsrc"==b.config.playType&&!1==b.isWeixin)b.addEventHandler(this.video,"play",b.bindAsEventListener(this,this.onPlayIPH)),b.addEventHandler(this.video,"timeupdate",b.bindAsEventListener(this,this.onTimeUpdateIPH)),b.addEventHandler(this.video,"ended",b.bindAsEventListener(this,this.onEndedIPH)),b.addEventHandler(this.video,
"webkitendfullscreen",b.bindAsEventListener(this,this.onEndFullscreen));else{var a={loadstart:"onLoadStart",canplay:"onCanPlay",loadeddata:"onLoadedData",loadedmetadata:"onLoadedMetaData",abort:"onAbort",error:"onError",pause:"onPause",waiting:"onWaiting",stalled:"onStalled",suspend:"onSuspend",play:"onPlay",volumechange:"onVolumeChange",playing:"onPlaying",seeked:"onSeeked",seeking:"onSeeking",durationchange:"onDurationChange",progress:"onProgress",ratechange:"onRateChange",timeupdate:"onTimeUpdate",
ended:"onEnded",webkitbeginfullscreen:"onBeginFullscreen",webkitendfullscreen:"onEndFullscreen"},c;for(c in a)b.addEventHandler(this.video,c,b.bindAsEventListener(this,this[a[c]]))}}};var s=-1,w=!1,m=null,fa=0,ga=600,u={flvhd:"\u6807\u6e05",flv:"\u6807\u6e05",mp4:"\u9ad8\u6e05",hd2:"\u8d85\u6e05"};b.WIN_TYPE=30;b.defaultVideoType="mp4";b.resizeTag=!0;b.extend=function(a,b){for(var d in b)a[d]=b[d]};b.inherits=function(a,b){var d=function(){};d.prototype=b.prototype;a.prototype=new d;a.prototype.constructor=
a};b.bind=function(a,b){return function(){return b.apply(a,arguments)}};b.bindAsEventListener=function(a,b){var d=Array.prototype.slice.call(arguments).slice(2);return function(e){return b.apply(a,[e||window.event].concat(d))}};b.getCurrentStyle=function(a){return a.currentStyle||document.defaultView.getComputedStyle(a,null)};b.addEventHandler=function(a,c,d,e){b.config.isMobile&&("click"==c&&!e)&&(c="touchend");a.addEventListener?a.addEventListener(c,d,!1):a.attachEvent?a.attachEvent("on"+c,d):a["on"+
c]=d};b.removeEventHandler=function(a,c,d,e){b.config.isMobile&&("click"==c&&!e)&&(c="touchend");a.removeEventListener?a.removeEventListener(c,d,!1):a.detachEvent?a.detachEvent("on"+c,d):a["on"+c]=null};b.show=function(a){a.style.display="video"===a.tagName.toLowerCase()?"":"block"};b.hide=function(a){a&&(a.style.display="none")};b.getLeftPosition=function(a){for(var b=a.offsetLeft;a.offsetParent;)a=a.offsetParent,b+=a.offsetLeft;return b};b.get=function(a){return document.querySelector(a)};b.pieceLength=
function(){return"m3u8"==b.config.content?1:b.videoInfo._videoSegsDic[m].length};b.multiPieceSrc=function(a){return a>=b.videoInfo._videoSegsDic[m].length?"":b.videoInfo._videoSegsDic[m][a].src};b.getTime=function(a){if(!a)return"00:00";var b=Math.floor(a),a=b%60,b=Math.floor(b/60);return(10>b?"0"+b:b)+":"+(10>a?"0"+a:a)};b.addClass=function(a,c){b.hasClass(a,c)||(a.className+=" "+c)};b.hasClass=function(a,b){return RegExp("(^| )"+b+"( |$)").test(a.className)};b.removeClass=function(a,b){a.className=
a.className.replace(RegExp("(^| )"+b+"( |$)")," ").replace(/^\s+|\s+$/g,"")};b.m3u8src=function(a,b){var d="http://v.youku.com/player/getM3U8/vid/"+a+"/type/"+b+"/ts/"+parseInt((new Date).getTime()/1E3);if(e.isIPHONE||e.isIPOD)d+="/useKeyFrame/0";return d+"/v.m3u8"};b.m3u8src_v2=function(a,c){if(b.OLD_M3U8)return b.m3u8src(a,c);var d={vid:a,type:c,ts:parseInt((new Date).getTime()/1E3),keyframe:e.isIPHONE?0:1};b.password&&(d.password=b.password);b.password&&(b.initConfig.client_id&&b.config.partner_config&&
1==b.config.partner_config.status&&1==b.config.partner_config.passless)&&(d.client_id=b.initConfig.client_id);var f=encodeURIComponent(E(F(G(b.mk.a4+"poz"+e.userCache.a2,[19,1,4,7,30,14,28,8,24,17,6,35,34,16,9,10,13,22,32,29,31,21,18,3,2,23,25,27,11,20,5,15,12,0,33,26]).toString(),e.userCache.sid+"_"+a+"_"+e.userCache.token)));d.ep=f;d.sid=e.userCache.sid;d.token=e.userCache.token;d.ctype="12";d.ev="1";d.oip=b.v.data[0].ip;d="http://pl.youku.com/playlist/m3u8?"+n(d);""!=b.getUCStr(a)&&(d+=b.getUCStr(a));
return d};b.isLandScape=function(){return 90==window.orientation||-90==window.orientation};b.getUCStr=function(a){var c="";if("undefined"!=typeof getUCSecret)a=getUCSecret(a),c+="&xk="+a;else if("undefined"!=typeof uckey)var d=uckey.getUCKey(a),c=c+("&vid="+a+"&uc_param_str=xk&xk="+d);else!0==b.isUCBrowserAndValidVersion()&&(c+="&vid="+a+"&uc_param_str=xk");return c};b.isUCBrowserAndValidVersion=function(){var a=navigator.userAgent,b=a.search(/ucbrowser/i);return-1!=b&&9.8<=parseFloat(a.substr(b+
10,4))?!0:!1};var r=function(a){return document.getElementById(a)};YoukuHTML5Player=function(a,c){null==a.parentBox&&(a.parentBox="parentBox");a.expand&&0<parseInt(a.width)?(r(a.parentBox).style.width=a.width+"px",r(a.parentBox).style.height=a.height+"px"):(a.width=r(a.parentBox).offsetWidth,a.height=r(a.parentBox).offsetHeight);b.config=a;var d=r(b.config.parentBox),e=parseInt(b.config.width);parseInt(b.config.height);playerDom='<div id=x-player class="'+z(e)+'">';e="";b.isWeixin&&(e="webkit-playsinline");
d.innerHTML=playerDom+"<video class=x-video-player id=youku-html5player-video  "+e+'></video><div class=x-video-poster><img></img></div><div class=x-video-loading></div><div class=x-video-info><h1 class=x-title></h1><div class=x-video-state></div><div class=x-showmore></div><div class=x-mask></div></div><div id=x-video-button class=x-video-button><div class=x-video-play-ico></div></div><div class=x-feedback><div class="x-message"><div class=x-message-txt></div><div class=x-message-btn></div></div><div class="x-mask"></div></div><div class="x-pay"><div class=x-pay-txt><h1><em class=vip></em></h1><p class=x-pay-tips></p></div><div class=x-pay-btn><button type=button id=x-try class=x-btn>\u514d\u8d39\u8bd5\u770b</button><button type=button id=x-pay class="x-btn x-btn-pay"></button></div></div><div class=x-advert><div class=x-advert-info><div class=x-advert-skip><div class=x-advert-txt></div><div class=x-mask></div></div><div class=x-advert-countdown><div class=x-advert-txt></div><div class=x-mask></div></div></div><div class=x-advert-detail><div class=x-advert-txt>\u8be6\u7ec6\u4e86\u89e3<span class=x-ico-detail></span></div><div class=x-mask></div></div></div><div class=x-ad-pause></div><div class=x-prompt></div><div class="x-dashboard"><div class=x-progress-mini><div class=x-progress-track-mini></div><div class=x-progress-load-mini></div><div class=x-progress-play-mini></div></div><div class="x-console"><div class="x-progress"><div class="x-progress-track"><div class="x-progress-load"></div><div class=x-progress-play></div><div class="x-progress-seek"><div class="x-seek-handle"></div></div></div></div><div class="x-controls"><div class="x-play-control"><button class="x-control-btn"><b id=x-playbtn class="x-playing"><em>\u64ad\u653e</em></b></button></div><div class="x-time-display"><span class="x-time-current">00:00</span><span class="x-time-splite">/</span><span class="x-time-duration">00:00</span></div><div class="x-settings"><div class=x-playspeed></div><div class=x-playshow style=display:none><button class=x-control-btn title=\u9009\u96c6>\u9009\u96c6</button></div><div class="x-localization"></div><div class="x-quality"></div><div class="x-fullscreen"><button class="x-control-btn" type="button" title="\u5168\u5c4f\u6a21\u5f0f" rol="button"><b class=x-zoomin><em>\u5168\u5c4f</em></b></button></div></div></div></div></div><div class=x-showlist></div><div class=x-tips></div><div class=x-trigger></div></div>';
O.apply(this,arguments);this.video.style.width="100%";this.video.style.height="100%";this.video.style.display="none";this.video.style.position="relative";this._firstPlayTag=!1;this._retry=2;this.uiAdapter()};b.inherits(YoukuHTML5Player,O);b.extend(YoukuHTML5Player.prototype,{startPlay:function(a,c,d){if(a&&(a.data&&a.data[0])&&(a.data[0].show=a.data[0].show||{},c.abstarttime=(new Date).getTime(),c._playListData=a.data[0],c._user=a.user,b.v=a,b.videoInfo=c,this.setting={},b.extend(this.setting,d),
!a.data[0].error_code&&!a.data[0].error||!this.processError(a,c,d)))if(this._reporter=new L(this,b.v,b.videoInfo._sid),this.controls=this.setupControls(this),this.controls.init(b.v,b.videoInfo),this.mpieceReport(),this.createIdNode(),this.isNeedAdRequest())this.processAd();else if(this.controls.bindVideoBtnEvent(),this.realStartPlay(),1==b.initConfig.ucautoplay)this.controls.onVideoBtnClick({})},isNeedAdRequest:function(){"undefined"==typeof this._frontAdTag&&(this._frontAdTag=!1);e.isNeedFrontAd=
!this._frontAdTag&&"directsrc"!=b.config.playType&&!b.v.data[0].trial;return e.isNeedFrontAd},processAd:function(){if(this.isNeedAdRequest()&&(this._frontAdTag=!0,this._adplugin=new N(this,b.v,b.videoInfo._sid),this.bind_frontAd=b.bindAsEventListener(this,this.onFrontAdInfoOK),this.bind_frontAdInfoTimeout=b.bindAsEventListener(this,this.onFrontAdInfoTimeout),this._adplugin.addEventListener(ADConstant.FRONT_AD_INFO_OK,this.bind_frontAd,!1),this._adplugin.addEventListener(ADConstant.FRONT_AD_INFO_TIMEOUT,
this.bind_frontAdInfoTimeout),this.bind_unitedFrontAd=b.bindAsEventListener(this,this.onUnitedFrontAdInfoOK),this._adplugin.addEventListener(ADConstant.FRONT_AD_UNITED_INFO_OK,this.bind_unitedFrontAd,!1),this.bind_backAdInfoOK=b.bindAsEventListener(this,this.onBackAdInfoOK),this.bind_backAdInfoTimeout=b.bindAsEventListener(this,this.onBackAdInfoTimeout),this._adplugin.addEventListener(ADConstant.BACK_AD_INFO_OK,this.bind_backAdInfoOK,!1),this._adplugin.addEventListener(ADConstant.BACK_AD_INFO_TIMEOUT,
this.bind_backAdInfoTimeout),this.bind_uglyCloseAd=b.bindAsEventListener(this,this.onUglyCloseAd),this._adplugin.addEventListener(ADConstant.UGLY_CLOSE_AD,this.bind_uglyCloseAd),this.controls.bindAdVideoBtnEvent(),window[ADConstant.AdPluginObject]=this._adplugin,1==b.initConfig.ucautoplay))this.controls.onVideoBtnTouchEnd({})},requestAd:function(){this._adplugin&&this._adplugin.frontAd()},onUglyCloseHint:function(){this.controls.showUglyHint()},onUglyCloseAd:function(){debug.log("ugly close");this.controls.closeUglyHint();
this.adplayer.uglyClose()},onFrontAdInfoTimeout:function(){this._hasStartPlay=!0;this.realStartPlay(!0)},onUnitedFrontAdInfoOK:function(a){debug.log("<b>on united front adinfo ok</b>");var c=a.data.info;if(0==a.data.info.VAL.length)debug.log("<b>onUnitedFrontAdInfoOK val length == 0 </b>"),this.loadVTVC(a.data.vtvc),this.video.src=b.m3u8src_v2(b.v.data[0].videoid,b.defaultVideoType),this.unitedStartPlay(c,!0);else{this.adplayer=new na(this,a);var d=this;this.adplayer.addEventListener(ADConstant.AD_END,
function(){debug.log("<font color=red>united ad end</font>");d._realFlag||(d._realFlag=!0,d.adplayer.clearTimer(),d.unitedStartPlay(c))},!1);this.adplayer.addEventListener(ADConstant.AD_ERROR,function(){debug.log("<font color=red>united ad error</font>");d._realFlag||(b.unitedTag=null,d._realFlag=!0,d.adplayer.clearTimer(),d.video.src=b.m3u8src_v2(b.v.data[0].videoid,b.defaultVideoType),d.unitedStartPlay(c,!0))},!1);this.adplayer.addEventListener(ADConstant.UGLY_CLOSE_AD_HINT,function(){debug.log("<b>ugly hint</b>");
d.onUglyCloseHint()},!1);this.adplayer.play();this.createIdNode()}},loadVTVC:function(a){for(var b=0;b<a.length;b++)y(a[b].VC,"js")},onFrontAdInfoOK:function(a){debug.log("onFrontAdInfoOK");if(!0!==this._hasStartPlay)if(0==a.data.urls.length)this.loadVTVC(a.data.vtvc),this.realStartPlay(!0);else{e.playerCurrentState=e.playerState.PLAYER_STATE_AD;debug.log(e.playerCurrentState);this.adplayer=new M(this,a);var b=this;this.adplayer.addEventListener(ADConstant.AD_END,function(a){debug.log("ad end");b._realFlag||
(b._realFlag=!0,b.adplayer.clearTimer(),b.realStartPlay(a.data))},!1);this.adplayer.addEventListener(ADConstant.AD_ERROR,function(a){debug.log("<font color=red>ad error</font>");b._realFlag||(b._realFlag=!0,b.adplayer.clearTimer(),b.realStartPlay(a.data))},!1);this.adplayer.addEventListener(ADConstant.UGLY_CLOSE_AD_HINT,function(){debug.log("<b>ugly hint</b>");b.onUglyCloseHint()},!1);this.adplayer.play();this.createIdNode()}},onBackAdInfoTimeout:function(){debug.log("onBackAdInfoTimeout");this.showEndCard()},
onBackAdInfoOK:function(a){debug.log("onBackAdInfoOK");if(0==a.data.urls.length)this.showEndCard();else{this.adplayer=new M(this,a);var b=this;this.adplayer.addEventListener(ADConstant.AD_END,function(){b.showEndCard()});this.adplayer.addEventListener(ADConstant.AD_ERROR,function(){b.showEndCard()});this.adplayer.play()}},prepareVideoTag:function(){this.video.preload="none";"m3u8"==b.config.content?this.video.src=b.videoInfo.src:null!=b.videoInfo._videoSegsDic&&null!=b.videoInfo._videoSegsDic[m]&&
(this.video.src=b.videoInfo._videoSegsDic[m][0].src);b.v.data[0].trial&&0==b.v.data[0].trial.time&&(this.video.src=null);this.createIdNode()},createIdNode:function(){if(!r(b.config.id)){var a=document.createElement("div");a.id=b.config.id;r(b.config.parentBox).appendChild(a)}},redirect:function(){var a="";"m3u8"==b.config.content?a=b.videoInfo.src:null!=b.videoInfo._videoSegsDic&&null!=b.videoInfo._videoSegsDic[m]&&(a=b.videoInfo._videoSegsDic[m][0].src);debug.log("redirect play src="+a);this._reporter.addPlayerStaticReport();
this._reporter.addPlayerDurationReport(59);this._reporter.sendVVLog(59);this._reporter.sendTSLog(60);this._reporter.sendUserActionReport("xps","c");window.open(a,"","",!1);this._reporter.sendClientConsumeReport();this.onPlayStart()},realStartPlay:function(a){debug.log("realStartPlay "+a);this.controls.bindEvent();this.bindEvent();this.prepareVideoTag();this.playVideos(a)},unitedStartPlay:function(a,c){debug.log("<b>united start play </b>");b.unitedTag={offset:a.VAL.length?a.VAL[0].AL:0};this.controls.bindEvent();
this.bindEvent();if(!0===c)this.video.load(),this.video.play();else this.onPlay();this.controls.onPlay()},playVideos:function(a){debug.log("playVideos "+a);w=!1;s=0;this.video.style.display=(e.isIPHONE||e.isIPOD)&&null!=b.v.data[0].trial?"none":"block";if(b.config.autoplay||b.config.nextAutoPlay||a)debug.log("src= "+this.video.src+" auto = "+a),this.video.load(),this.video.play()},processError:function(a){var c=a.data[0].error_code;if(-12==c||-13==c)return a.data[0].error_code=null,a.data[0].error=
null,a.data[0].trial={time:0},!1;b.hide(b.get(".x-video-poster"));this.feedbackPanel=new K(this,a);return!0},mpieceReport:function(){"mp4"==b.config.content&&(b.videoInfo._videoSegsDic&&null!=b.videoInfo._videoSegsDic[m]&&1<b.videoInfo._videoSegsDic[m].length)&&(debug.log("mpiece report"),e.Log(e.MPIECEURL+q({partner:b.config.partnerId,type:m,length:b.videoInfo._videoSegsDic[m].length,vid:b.v.data[0].videoid})))},resize_:function(a,c,d){debug.log("resize="+b.resizeTag);c&&(d&&b.resizeTag&&this.controls)&&
(a=this.controls.xplayer.className,this.controls&&this.controls.xplayer&&(-1===a.indexOf("fullscreen")?this.controls.xplayer.className=z(c):(c=window.innerWidth,this.controls.xplayer.className=z(c)+" x-player-fullscreen")))},uiAdapter:function(){"index"==b.config.wintype&&(b.hide(b.get(".x-localization")),b.hide(b.get(".x-quality")));b.get("#x-video-button").className="x-video-button";"m3u8"!=b.config.content&&b.hide(b.get(".x-quality"));var a=this;window.addEventListener("resize",function(b){debug.log("window.resize");
if(a.controls)a.controls.onResize(b)},!1)},isOutTryDuration:function(a){return this.tryDuration?a>=this.tryDuration:!1},replay:function(){s=0;this._ireflag=this._comscoreflag=!1;this._firstflag=e.adrPlayTrick=!1;this.video.style.display="block";this.isOnePiece()||(this.video.src=b.multiPieceSrc(s));e.isIPAD&&(this.video.src=b.m3u8src_v2(b.v.data[0].videoid,b.defaultVideoType),b.unitedTag=null);this.video.load();this.video.play();this._reporter.tsInit();this._reporter.sendVVLog(62);this._reporter.sendTSLog(60);
this._reporter.addPlayerDurationReport(62)},seekToLastPoint:function(){if(e.isAndroid)return!1;var a=b.v.data[0].lastpoint/1E3||-1,c=parseInt(l.getItem(b.v.data[0].videoid+"_playpoint"))||-1,d=-1;-1!=a&&-1!=c?(d=a,60>Math.abs(a-c)&&(d=c)):(d=a,-1==a&&(d=c));debug.log("lastpoint="+d);a=l.getItem("youku_ignore_lasttime");a=parseInt(a)||0;return-1!==d&&120<=d&&3>a&&null==b.v.data[0].trial&&!1==b.v.controller.xplayer_disable&&600<=b.v.data[0].seconds?(this.controls.showLastTimeTip(d),e.isAndroid&&(this._waitSeek=
d),this.seek(d),!0):!1},clearLocalPlayPoint:function(){var a=b.v.data[0].videoid;clearTimeout(this._recordLPPTimer);l.removeItem(a+"_playpoint")},recordLocalPlayPoint:function(){var a=b.v.data[0].videoid,c=this.currentTime||0,d=this;this._recordLPPTimer=setTimeout(function(){d.recordLocalPlayPoint()},1E4);l.removeItem(a+"_playpoint");if(600<=b.v.data[0].seconds&&(c<b.v.data[0].seconds-120&&null==b.v.data[0].trial&&120<=c)&&(l.setItem(a+"_playpoint",c),!this.updatePPVids)){this.updatePPVids=!0;c=l.getItem("youku_playpoint_vids")||
"";if(""==c)c=a;else{for(var c=c.split(":"),e=0;e<c.length;e++)c[e]==a&&(c[e]="");c.push(a);c=c.join(":");for(e=0;":"==c.charAt(e);)e++;c=c.substring(e);c=c.replace(/:(:)+/g,":")}a=c.split(":");30<a.length&&(debug.log("slice"),l.removeItem(a[0]+"_playpoint"),c=a.slice(1).join(":"));debug.log("youku_playpoint_vids="+c);l.setItem("youku_playpoint_vids",c)}},skipHead:function(){if(!e.isAndroid){var a=parseInt((b.v.data[0].dvd||{}).head||-1);debug.log("skiphead = "+a);-1!=a&&(this.controls.tipPanel.onSkipHead(),
"true"==l.getItem("youku_conf_skip")&&(e.isAndroid&&(this._waitSeek=a/1E3),this.seek(a/1E3)))}},skipTail:function(a){if(!e.isAndroid){var c=parseInt((b.v.data[0].dvd||{}).tail||-1);-1!=c&&(a>=c/1E3-10&&!this._tailTip)&&(debug.log("skiptail(act before 10) ="+c),this._tailTip=!0,this.controls.tipPanel.onSkipTail());-1!=c&&(a>=c/1E3&&!this._tailSkipped)&&(this._tailSkipped=!0,"true"==l.getItem("youku_conf_skip")&&this.seek(parseInt(b.v.data[0].seconds)-1))}},assistSkipTail:function(a){var c=parseInt((b.v.data[0].dvd||
{}).tail||-1);this._tailTip=a>=c/1E3?this._tailSkipped=!0:this._tailSkipped=!1},seek:function(a,c){a=a||0;a=Math.max(a,0);b.videoInfo.totalTime&&(a=Math.min(a,b.videoInfo.totalTime-5));this.isOutTryDuration(a)&&(a=this.tryDuration-1);this.assistSkipTail(a);var d=this;this.switchTimer&&clearTimeout(this.switchTimer);this.currentTime=a;if(this.isOnePiece()){var e=this.video.seekable;b.unitedTag&&(a+=b.unitedTag.offset);1==e.length&&a<e.end(0)?(debug.log("seek ct = "+a+",end = "+e.end(0)),this.seekTo(a,
c)):(this.controls.onWaiting(),this.switchTimer=setTimeout(function(){d.seek(a,c)},100))}else debug.log("multi seek"),this.multiSeekTo(a)},seekTo:function(a,b){if(this.isOnePiece()){debug.log("is one piece");var d=this;try{d.video.currentTime=a}catch(e){var i=0;this.video.addEventListener("canplay",function(){1!==i&&(i=1,debug.log("canplay time="+a),d.video.currentTime=a)})}"function"==typeof b&&(debug.log("<b>seekto callback(mayby play)</b>"),b())}},multiSeekTo_:function(){debug.log("YoukuHTML5 ")},
multiSeekTo:function(a){debug.log("YoukuHTML5Player multiSeekTo !");for(var c=0,d=0,e=0,i=0;i<b.videoInfo._videoSegsDic[m].length;i++){var g=parseInt(b.videoInfo._videoSegsDic[m][i].seconds),c=c+g;if(c>a){d=i;e=g-(c-a);break}else if(c==a){d=i+1;e=0;break}}this.video.pause();if(d==s){debug.log(" piece time = "+e);try{this.video.currentTime=e}catch(h){}}else{s=d;var l=0,n=this;this.video.addEventListener("canplay",function(){1!==l&&(l=1,debug.log("canplay time="+e),n.video.currentTime=e)});this.video.src=
b.multiPieceSrc(s);this.video.load()}this.video.play();this.video.style.display="block"},adjustVideoRatio:function(a){if(!e.isIOS){if(("onorientationchange"in window||"orientation"in window)&&!this._avrTag){this._avrTag=!0;var c=this;window.addEventListener("orientationchange",function(){!0===c.controls.fullscreenPanel.fullFlag()&&c.adjustVideoRatio()})}var c=this,d=this.video;setTimeout(function(){if(1===a)d.style.width="100%",d.style.height="100%",d.style.top=null,d.style.left=null;else{var c=b.get(".x-player"),
c=c.offsetWidth/c.offsetHeight,e=d.videoWidth/d.videoHeight;isNaN(e)||isNaN(c)||!isFinite(c)||!isFinite(e)?(d.style.width="100%",d.style.height="100%",d.style.top=null,d.style.left=null):c<e?(d.style.width="100%",d.style.height=100*(c/e)+"%",d.style.top=100*(1/c-1/e)/2*c+"%",d.style.left=null):(d.style.height="100%",d.style.width=100*(e/c)+"%",d.style.left=100*((c-e)/2/c)+"%",d.style.top=null)}},2E3)}}});window.YoukuPlayerSelect=J;window.BuildVideoInfo=i;window.checkSrc=function(){i._fyks.length>
i.mp4srcs.length||(clearInterval(i._tid),i.cleanSrc(),i.cache(),null==i._callback?e.GetMP4OK(i._v,i._videoInfo):i._callback(i._v,i._videoInfo))};window.QS=function(){for(var a={},b=window.location.search.substring(1).split("&"),d=0;d<b.length;d++){var e=b[d].split("=");"undefined"===typeof a[e[0]]?a[e[0]]=e[1]:"string"===typeof a[e[0]]?a[e[0]]=[a[e[0]],e[1]]:a[e[0]].push(e[1])}return a};window.YKP=e;window.YKU=C;window.YoukuHTML5Player=YoukuHTML5Player;for(var P=document.getElementsByTagName("script"),
I=0;I<P.length;I++)if(-1!==P[I].src.indexOf("player.youku.com/jsapi")){eval(P[I].innerHTML);break}window.notifyYKU=function(){C.swfLoaded=1};window.onPlayerStart=function(){b.initConfig.events&&b.initConfig.events.onPlayStart&&(e.playerCurrentState=e.playerState.PLAYER_STATE_PLAYING,debug.log(e.playerCurrentState),debug.log("api:flash play start"),b.initConfig.events.onPlayStart())};window.onPlayerComplete=function(){b.initConfig.events&&b.initConfig.events.onPlayEnd&&(e.playerCurrentState=e.playerState.PLAYER_STATE_END,
debug.log(e.playerCurrentState),debug.log("api:flash play end"),b.initConfig.events.onPlayEnd())}})();
 
 var imageLen = $('.banner_ul li').length;
var lastPic = imageLen - 1;
var firstPic = 0;
var timeInterval = 5000;
var fadeInOutTime = 2000;
var setInt;
$(document).ready(function(){
    showLazyLoadImage(firstPic);
    setBannerHeight();
    $("img").lazyload();
    if($.browser.msie&&($.browser.version == "6.0"))
    {
        document.execCommand("BackgroundImageCache", false, true);
    }
    $('.indexdialog').dialog({
        autoOpen:false,
        width:790,
        resizable: false,
        modal:true,
        draggable:false,
        position: "center"
    });
    $('.vediodialog').dialog({
        autoOpen:false,
        width:880,
        resizable: false,
        modal:true,
        draggable:false,
        position: "center"
    });
    var regiaterBtn = $('.head_bar .nav_R li').first().find('a');
    var inviteCode = $('#inviteCodeHidden').val();
    if(inviteCode){
        regiaterBtn.attr('href',regiaterBtn.attr('href')+'&invitecode='+inviteCode);
    }
})
$(document).click(function(ev){
    ev = ev || window.event || arguments.callee.caller.arguments[0];
    var target = ev.target || ev.srcElement;
    if (!/^(searchcity)|(cuspricetitle)|(price_custom)|(suggest)|(suggest_icon)|(hotcity)|(a_d)|(e_j)|(k_n)|(p_w)|(x_z)$/.test(target.id) && !$(target).is("#con_one_1 *")) {
        $(".sug").hide();
        $("#suggest").hide();
        $("#cuspricediv").hide();
        if($('#searchcity').attr('value') == '' && !$('#suggest').is(':visible') && !$('.sug').is(':visible')) {
            $('#searchcity').attr('value',defaultCity);
        }
    }
    if (!/^(startenddate)|(calendar_btn_s)|(calendar-box)|(preMonth)|(nextMonth)|(clearSelect)$/.test(target.id) && !$(target).is("#calendar-box,#calendar-box *")) {
        if( $('#startdate').val() !='' && $("#enddate").val() == '') {
            endDateWarn($('#startenddate'));
        }
        else {
            if( $('#startdate').val() =='' && $("#enddate").val() == '') {
                $('#startenddate').val(defaultText);
            }
            $("#calendar-box").hide();
        }
    }
    if ( $(target).is(".ui-widget-overlay")) {
        closeDialog();
    }
});
document.onkeydown=function(event){
    var ev = event || window.event || arguments.callee.caller.arguments[0];
    if(ev && ev.keyCode == 27) {
        return closeDialog();
    }
}
$(window).load(function() {
    setInt = setTimeout("next_pic()",timeInterval);   
    $(".pics_pre").show();
    $(".pics_next").show();
    $("#searchcity").suggest('citys',{
        attachObject:'#suggest',
        dataContainer:'#selectcitydomain'
    });
    window.onresize=function(){  
        setBannerHeight();
    }  
    var indexCalendar = new execCalendar('#startenddate',{}); 
    $('.indexdialogpic').click(function(){
        $("body").eq(0).css("overflow","hidden");
        var dialogId = $(this).attr('name') + "Dialog";
        if($(this).attr('name') == 'focusus'){
            $("#" + dialogId).dialog("option","width",616);
        }
        $("#" + dialogId).dialog("open").css({'width':''});
        var t = parseInt($('#'+dialogId).parent('.ui-dialog').css('top'));
        $('#'+dialogId).parent('.ui-dialog').css({'top': (t-60) +'px'});
        $('.ui-dialog-titlebar').hide();
    })
    $('.vediodialogpic').click(function(){
        $("body").eq(0).css("overflow","hidden");

        if($(this).attr('name') =='vedio1') {
            showVideo_youku('vedio1Content','XODc1ODk3NDk2',true);
        }
        else if($(this).attr('name') =='vedio2') {
            showVideo_youku('vedio2Content','XODc1OTUwOTE2',true);
        }
        var dialogId = $(this).attr('name') + "Dialog";
        $("#" + dialogId).dialog("open").css('width','');
        $("#" + dialogId).css({'overflow':'hidden'});
        $("#" + dialogId).parent('.ui-dialog').addClass('bg_black_1');
        $('.ui-dialog-titlebar').hide();
    })
    $('.closVedioeDialog').click(function(){
        $("#vedio1Content").html('');
        $("#vedio2Content").html('');
        return closeDialog();
    })
    $('.closeDialog').click(function(){
        return closeDialog();
    })

    $('#commentdiary').load('/ajax.php?op=Ajax_getCommentDiary4Index', function(){
        $('.cmt_ul li').live('mouseover',function(){
            $(this).addClass('cmt_current');
            $(this).siblings().removeClass('cmt_current');
            var slide_index = $('.cmt_ul li').index($(this));
            var slide_show = $('.cmt_ul').siblings('div').eq(slide_index);
            slide_show.show();
            slide_show.siblings('div').hide();
            $(this).trigger('click');
        })
        var commentAndDiary = document.getElementsByClassName("cmt_con");
        var commentAndDiaryStartClientX = 0;
        var commentAndDiaryEndClientX = 0;
        var commentTouchStart = function(ev) {
                var touch = ev.touches[0];
                var changedTouches = ev.changedTouches;
                commentAndDiaryStartClientX = changedTouches[0].clientX;
            }
        var commentTouchEnd = function(ev) {
                var touch = ev.touches[0];
                var changedTouches = ev.changedTouches;
                commentAndDiaryEndClientX = changedTouches[0].clientX;
                var changeClientX = commentAndDiaryEndClientX - commentAndDiaryStartClientX;

                var slide_index = $(this).find('.cmt_ul li');
                var slide_length = slide_index.length - 1;
                var currentIndex = 0;
                if(changeClientX > 20) {
                    slide_index.each(function() {
                        if($(this).hasClass("cmt_current")) {
                            currentIndex = $(this).index();
                            slide_index.eq(currentIndex).removeClass('cmt_current');
                            if(currentIndex == 0) {
                                currentIndex = slide_length+1;
                            }
                            var slide_show = slide_index.parent().siblings('div').eq(currentIndex - 1);
                            slide_show.show();
                            slide_show.siblings('div').hide();
                        }
                    })
                    $(this).find('.cmt_ul li').siblings().eq(currentIndex - 1).addClass('cmt_current');
                } else if(changeClientX < -20){
                    slide_index.each(function() {
                        if($(this).hasClass("cmt_current")) {
                            currentIndex = $(this).index();
                            slide_index.eq(currentIndex).removeClass('cmt_current');
                            if(currentIndex == slide_length) {
                                currentIndex = -1;
                            }
                            var slide_show = slide_index.parent().siblings('div').eq(currentIndex + 1);
                            slide_show.show();
                            slide_show.siblings('div').hide();
                        }
                    })
                    $(this).find('.cmt_ul li').siblings().eq(currentIndex + 1).addClass('cmt_current');
                }
            }
        for(var i=0;i<commentAndDiary.length;i++) {
            commentAndDiary[i].removeEventListener('touchstart',commentTouchStart,false);
            commentAndDiary[i].removeEventListener('touchend',commentTouchEnd,false);
            commentAndDiary[i].addEventListener('touchstart',commentTouchStart,false);
            commentAndDiary[i].addEventListener('touchend',commentTouchEnd,false);
        }
    });
    var obj = document;
    obj.addEventListener('touchstart', function(ev) {
        ev = ev || window.event || arguments.callee.caller.arguments[0];
        var target = ev.target || ev.srcElement;
        if (!/^(searchcity)|(cuspricetitle)|(price_custom)|(suggest_icon)|(hotcity)|(a_d)|(e_j)|(k_n)|(p_w)|(x_z)$/.test(target.id) && !$(target).is(".sug * ")) {
            $(".sug").hide();
            $("#cuspricediv").hide();
            if($('#searchcity').attr('value') == '' && !$('#suggest').is(':visible') && !$('.sug').is(':visible')) {
                $('#searchcity').attr('value',defaultCity);
                $('#searchcity').blur();
            }
        }
        if (!/^(startenddate)|(calendar_btn_s)|(calendar-box)|(preMonth)|(nextMonth)|(clearSelect)$/.test(target.id) && !$(target).is("#calendar-box,#calendar-box *")) {
            if( $('#startdate').val() !='' && $("#enddate").val() == '') {
                endDateWarn($('#startenddate'));
            }
            else {
                if( $('#startdate').val() =='' && $("#enddate").val() == '') {
                    $('#startenddate').val(defaultText);
                }
                $("#calendar-box").hide();
            }
        }
        if ( $(target).is(".ui-widget-overlay")) {
            closeDialog();
        }
    }, false);  

    var indeximage = document.getElementsByName("indeximage");
    var startClientX = 0;
    var endClientX = 0;

    var indexTouchStart = function(ev) {
            var touch = ev.touches[0];
            var changedTouches = ev.changedTouches;
            startClientX = changedTouches[0].clientX;
        }
    var indexTouchEnd = function(ev) {
            var touch = ev.touches[0];
            var changedTouches = ev.changedTouches;
            endClientX = changedTouches[0].clientX;
            var changeClientX = endClientX - startClientX;
            if(changeClientX > 50) {
                pre_pic();
            } else if(changeClientX < -50){
                next_pic();
            }
        }
    for(var i=0;i<indeximage.length;i++) {
        indeximage[i].removeEventListener('touchstart',indexTouchStart,false);
        indeximage[i].removeEventListener('touchend',indexTouchEnd,false);
        indeximage[i].addEventListener('touchstart',indexTouchStart,false);
        indeximage[i].addEventListener('touchend',indexTouchEnd,false);
    }
})
function pre_pic()
{
    var currentImage = $('.banner_img');
    var currentIndex = $('.banner_ul li').index($(currentImage));
    if(currentIndex > firstPic && currentIndex <= lastPic){
         currentIndex--;
    }
    else {
        currentIndex  = lastPic;
    }
    clearInterval(setInt);
    showLazyLoadImage(currentIndex);
    currentImage.removeClass('banner_img').fadeOut(fadeInOutTime);
    $('.banner_ul li').eq(currentIndex).addClass('banner_img').fadeIn(fadeInOutTime);
    setInt = setTimeout("next_pic()",timeInterval);   
} 
function next_pic()
{
    var currentImage = $('.banner_img');
    var currentIndex = $('.banner_ul li').index(currentImage);
    if(currentIndex >= firstPic && currentIndex < lastPic){
        currentIndex++;
    }
    else {
        currentIndex = firstPic;
    }
    showLazyLoadImage(currentIndex);
    clearInterval(setInt);
    currentImage.removeClass('banner_img').fadeOut(fadeInOutTime);
    $('.banner_ul li').eq(currentIndex).addClass('banner_img').fadeIn(fadeInOutTime);
    setInt = setTimeout("next_pic()",timeInterval);   
}
function setBannerHeight()
{
    var currentImgHeight = $('.banner_img').children('a').children('img').height();
    $('div .banner').css('height',currentImgHeight+'px');
}
function closeDialog()
{
    if($('.login_register_box:visible').length){
        return; 
    }
    $("body").eq(0).css("overflow","scroll");
    $('.ui-icon-closethick').click();
    return false;
}
function endDateWarn (inputObj)
{
    var i = 0,t=false,v=inputObj.val();
    if( (v == '') || t) return ;
    t= setInterval(function(){
        if($('#startdate').val() == '' || $("#enddate").val() != '') { clearInterval(t); return ;}
        i++;
        if(i%2) { inputObj.val(''); }
        else { inputObj.val(v); }
        if(i== 6){ clearInterval(t); }
    },600);
}
function showLazyLoadImage(imgIndex)
{
    for(var i=0;i<3;i++) {
        if( (imgIndex + i) > lastPic) {
            return ;
        }
        var obj = $('.banner_ul li').eq(imgIndex+i).children('a').children('img');

        if(typeof(obj.attr('src')) == 'undefined') {
            obj.attr('src',obj.attr('lazyloadsrc'));
            obj.removeAttr('lazyloadsrc');
        }
    }
}

