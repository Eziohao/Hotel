(function() {

    function capStr(str) {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    }

    var tuJiaPrefAnalytics = {
        config: {
            postUrl: "",
            sendNum: 5,
            delay: 100,
            pageName: "",
            info: "",
            site: "None"
        },
        post: function (obj) {
            var self = this;

            if (obj) {
                for (var key in obj) {
                    this.config[key] = obj[key];
                }
            }

            if (!this.config.postUrl) {
                this.intiPostUrl();
            }
            
            if (this.config.postUrl) {
                window.onload = function () {

                    self.intiSessionId();

                    setTimeout(function () {
                        self.logPerf();
                    }, self.config.delay);
                };
            }
        },
        intiPostUrl : function () {
            var scripts = document.getElementsByTagName("script");
            for (var i in scripts) {
                if (scripts[i].src && scripts[i].src.toLowerCase().indexOf("tujiaprefanalytics.js") > 0) {
                    this.config.postUrl = scripts[i].src.replace(".js", ".ashx");
                }
            }
        },
        supportPerf: function() {
            try {
                return 'performance' in window && window['performance'] !== null && window['performance']['timing'] !== null && window['performance']['getEntries'] !== null;
            } catch (e) {
                return false;
            }
        },

        supports_html5_storage: function() {
            try {
                return 'localStorage' in window && window['localStorage'] !== null;
            } catch (e) {
                return false;
            }
        },

        getDocPerf: function() {
            var timing = null;
            var oDoc = {};
            if (this.supportPerf()) {
                timing = window.performance.timing;
                oDoc["RedirectCount"] = window.performance.navigation.redirectCount;
                for (var key in timing) {
                    oDoc[capStr(key)] = timing[key];
                }
                return oDoc;
            } else {
                return null;
            }
        },

        getResPerf: function () {
            try
            {
                var aEntryList = null;
                var aRes = [];
                var name = "";
                if (this.supportPerf()) {
                    aEntryList = window.performance.getEntriesByType("resource");
                    for (var i = 0; i < aEntryList.length; i++) {
                        var initiatorType = aEntryList[i].initiatorType;
                        if ((initiatorType == "link" || initiatorType == "script") && aEntryList[i].duration > 200 ) {
                            name = aEntryList[i].name.split('?')[0];
                            name = name.substring(name.lastIndexOf('/') + 1);
                            aRes.push({
                                "Name": name,
                                "StartTime": parseInt(aEntryList[i].startTime),
                                "Duration": parseInt(aEntryList[i].duration),
                                "InitiatorType": initiatorType
                            });
                        }
                    }
                    return aRes;
                } else {
                    return [];
                }
            }
            catch (e)
            {
                return [];
            }
        },

        logPerf: function () {
            try {
                var oDocPerf = this.getDocPerf();
                //暂时不记录资源文件，看以后需求
                var oResPerf = [];
                //var oResPerf = this.getResPerf();
                if (this.supports_html5_storage()) {
                    var localData = JSON.parse(localStorage['perfTiming'] || "[]");
                    if (oDocPerf) {
                        oDocPerf["PageName"] = this.config.pageName;
                        oDocPerf["Info"] = this.config.info;
                        oDocPerf["Site"] = this.config.site;
                        oDocPerf["SessionId"] = this.sessionId || "";
                        oDocPerf["Url"] = encodeURIComponent(window.location.href);
                        oDocPerf["TuJiaResourceTimingList"] = oResPerf;
                        localData.push(oDocPerf);
                        var localDataString = JSON.stringify(localData);
                        if (localData.length >= this.config.sendNum) {
                            this.sendData(localDataString);
                            localStorage.removeItem('perfTiming');
                        }
                        else {
                            localStorage['perfTiming'] = localDataString;
                        }
                    }
                }
            } catch (e) {
                return false;
            }
        },
        sendData: function (data) {
            var url = this.config.postUrl;
            this.postAjax(url, function () { }, {"data" : data});
        },
        postAjax: function (url, callback, data) {
            var ajaxRequest = this.getAjaxRequest(callback);

            ajaxRequest.open("POST", url, true);
            ajaxRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            ajaxRequest.setRequestHeader("Connection", "close");
            var arr = [];
            for (var i in data) {
                arr.push(i + "=" + data[i]);
            }
            ajaxRequest.send(arr.join("&"));
        },
        getAjaxRequest: function (callback) {

            var ajaxRequest;

            try {
                ajaxRequest = new XMLHttpRequest();
            } catch (e) {
                try {
                    ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
                } catch (e) {
                    try {
                        ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
                    } catch (e) {
                        return null;
                    }
                }
            }

            ajaxRequest.onreadystatechange = function () {
                if (ajaxRequest.readyState == 4) {
                    // Prob want to do some error or response checking, but for 
                    // this example just pass the responseText to our callback function
                    callback(ajaxRequest.responseText);
                }
            };

            return ajaxRequest;
        },
        getCookie: function (sName) {
            var aCookie = document.cookie.split("; ");
            for (var j = 0; j < aCookie.length; j++) {
                var aCrumb = aCookie[j].split("=");
                if (escape(sName) == aCrumb[0])
                    return unescape(aCrumb[1]);
            }
            return null;
        },
        setCookie: function (sName, sValue, expireHours) {
            var cookieString = sName + "=" + escape(sValue);
            //;判断是否设置过期时间
            if (expireHours > 0) {
                var date = new Date();
                date.setTime(date.getTime + expireHours * 3600 * 1000);
                cookieString = cookieString + "; expire=" + date.toGMTString();
            }
            document.cookie = cookieString + "; path=/";
        },
        guid: function () {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                           .toString(16)
                           .substring(1);
            }

            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        },
        intiSessionId: function () {
            this.sessionId = this.getCookie("tuJiaAnalyticsSessionId");

            if (!this.sessionId) {
                this.sessionId = this.guid();
                this.setCookie("tuJiaAnalyticsSessionId", this.sessionId);
            }
        }
    };

    window.tuJiaPrefAnalytics = tuJiaPrefAnalytics;
})();