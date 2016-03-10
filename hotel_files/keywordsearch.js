$.initSearch = function (conf) {
    $.initSearch.conf = conf;
}

var worldhouseSearch = {
    searchSubmit: function () {
        var self = this;
        var $subBtn = self.$subBtn;
        $subBtn.click(function (ev) {
            $subBtn.val('搜索中');
            var url = "";
            ev.preventDefault();
            var sData = self.searchData;
            sData.address = self.$adress.val();
            var currentDestination = $.grep(self.cityInfo.citys, function (c) {
                return c.id == self.searchData.DestinationId;
            })[0];
            var isCurrentDuanzu = false;
            var landmarkPinyin,
                conditionArray = [],
                query_param = [];
            if (window.location.pathname.indexOf("se0") > -1) {
                conditionArray.push({ key: "se", val: "0" });
            }
            if (self.searchType === 1 && sData.SearchKeyword) {
                if (sData.SearchKeyword == "d" && !(parseInt(sData.Value).toString().length == sData.Value.length)) {
                    landmarkPinyin = sData.Value;
                } else {
                    if (sData.SearchKeyword == "s" && !isCurrentDuanzu) {
                        conditionArray.push({ key: sData.SearchKeyword, val: sData.Note + "_s" + sData.Value });
                    } else {
                        conditionArray.push({ key: sData.SearchKeyword, val: sData.Value });
                    }

                    if (sData.ParentSearchKeyword && !isCurrentDuanzu) {
                        conditionArray.push({ key: sData.ParentSearchKeyword, val: sData.ParentValue, isParent: true });
                    }
                }
            } else if (self.searchType === 2 && sData.address) {
                if ((sData.lat == "" || sData.lng == "")) {
                    query_param.push({ key: "keyword", val: sData.address });
                } else {
                    query_param.push({ key: "adress", val: sData.address });
                    query_param.push({ key: "lat", val: sData.lat });
                    query_param.push({ key: "lng", val: sData.lng });
                }
            }
            if (self.vrchannel) {
                conditionArray.push({ key: "vr", val: self.vrchannel });
            }
            if (query_param.length > 0 || sData.SearchKeyword) {
                query_param.push({ key: "isFromInput", val: "true" });
            }

            if (self.srcPage) {
                query_param.push({ key: "srcPage", val: self.srcPage });
            }
            self.setCookie();
            self.doRedirect(currentDestination, isCurrentDuanzu, landmarkPinyin, conditionArray, query_param, sData.address, self.lm);
        });
    },

    setCookie: function () {
        var startDate = this.$startDate.val();
        var endDate = this.$endDate.val();
        $.cookie(this.serverDomain + "_PortalContext_WW_StartDate", startDate, { expires: 1, path: '/', domain: this.serverDomain });
        $.cookie(this.serverDomain + "_PortalContext_WW_EndDate", endDate, { expires: 1, path: '/', domain: this.serverDomain });
    },

    doRedirect: function (currentDestination, isCurrentDuanzu, landmarkPinyin, conditionArray, query_param, kwd, lm) {
 
        var url = worldUrl;
        url += "/" + currentDestination.pinyin;
        url += "_gongyu_r" + currentDestination.id;
        if (lm) {
            url += "_o6lm" + lm;
        }
        url += "/?destinationId=" + encodeURIComponent(currentDestination.id);
        url += "&startDate=" + this.$startDate.val();
        url += "&endDate=" + this.$endDate.val()
        url += "&guestCount=" + ($.initSearch.conf.ui.$guestCount ? $.initSearch.conf.ui.$guestCount.val() : 0);
        url += "&keyword=" + encodeURIComponent(kwd);

        $.initSearch.conf.ui.$submitForm.attr({ "action": url, "target": "_top" }).trigger("submit");
        
    },

    addrInputInit: function () {
        var self = this;
        var $destInput = self.$destInput;
        var $adress = self.$adress;
        var $addressDrop = $("#worldaddressDrop");
        var adressFocusTimeout, desInputFocusTimeOut;
        self.prevValueKwd = $adress.val();
        var keys = {
            ESC: 27,
            TAB: 9,
            RETURN: 13,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
        };

        $destInput.attr("autocomplete", "off");

        self.searchType = 2;
        $destInput.click(function (ev) {
            //ev.stopPropagation();
            self.prevValue = $(this).val();
        });
        $(document).on("click", function (ev) {
            if ($(ev.target).closest("#worldcityInput").length === 0 && !$(ev.target).is($destInput)) {
                $("#worldcityInput").hide();
            }
            if ($(ev.target).closest("#worldkwdList").length === 0) {
                $("#worldkwdList").hide();
            }
            if ($(ev.target).closest("#worldaddressDrop").length === 0) {
                $addressDrop.hide();
            }
        });

        $destInput.blur(function () {
            if ($destInput.data("enHide")) {
                $('#worldcityInput').hide();
                $destInput.val(self.searchData.DestinationName);
            }

            if (desInputFocusTimeOut) {
                clearTimeout(desInputFocusTimeOut);
            }
        });
        //此处有兼容性问题
        $destInput.bind("keydown", function (ev) {
            var $kwdList = $("#worldkwdList");
            var $curItem = $kwdList.find("a.hover");
            var $listItems = $kwdList.find("a");
            var index = $listItems.index($curItem);
            var lastIndex = $listItems.length - 1;
            if (ev.which == keys.DOWN && $kwdList.is(":visible")) {
                if (index === lastIndex) {
                    $curItem.removeClass("hover");
                    $listItems.first().addClass("hover");
                } else {
                    $curItem.removeClass("hover");
                    $listItems.eq(++index).addClass("hover");
                }
                ev.preventDefault();
            } else if (ev.which == keys.UP && $kwdList.is(":visible")) {
                if (index === 0) {
                    $curItem.removeClass("hover");
                    $listItems.last().addClass("hover");
                } else {
                    $curItem.removeClass("hover");
                    $listItems.eq(--index).addClass("hover");
                }
                ev.preventDefault();
            } else if (ev.which == keys.RETURN && $kwdList.is(":visible")) {
                ev.preventDefault();
                $curItem.trigger("click");
            }
        });

        $destInput.focus(function () {
            self.showCityInput();
            $("#worldkwdList").hide();
            desInputFocusTimeOut = setTimeout(function () { $destInput.select(); }, 30);
        });

        $destInput.bind("input propertychange", function (ev) {
            var keyWord = $.trim($(this).val());
            if (keyWord === "") {
                $("#worldcityInput").show();
                $("#worldkwdList").hide();
            } else if ($.trim(self.prevValue) != keyWord && keyWord != "") {
                $("#worldcityInput").hide();
                self.prevValue = keyWord;
                self.hasInputWord = true;
                self.$input = $destInput;
                self.destSearch(keyWord);
            }
        });

        $adress.bind("keydown", function (ev) {
            var $kwdList = $("#worldkwdList");
            var $curItem = $kwdList.find("a.hover");
            var $listItems = $kwdList.find("a");
            var index = $listItems.index($curItem);
            var lastIndex = $listItems.length - 1;
            if (ev.which == keys.DOWN && $kwdList.is(":visible")) {
                if (index === lastIndex) {
                    $curItem.removeClass("hover");
                    $listItems.first().addClass("hover");
                } else {
                    $curItem.removeClass("hover");
                    $listItems.eq(++index).addClass("hover");
                }
            } else if (ev.which == keys.UP && $kwdList.is(":visible")) {
                if (index === 0) {
                    $curItem.removeClass("hover");
                    $listItems.last().addClass("hover");
                } else {
                    $curItem.removeClass("hover");
                    $listItems.eq(--index).addClass("hover");
                }
            } else if (ev.which == keys.RETURN && $kwdList.is(":visible")) {
                ev.preventDefault();
                $curItem.trigger("click");
            }
        });

        $adress.bind("input propertychange", function (ev) {
            var kwd = $.trim($(this).val());
            $addressDrop.hide();
            self.searchType = 2;
            if (kwd === "") {
                $addressDrop.show();
                $("#worldkwdList").hide();
                self.lm = null;
            } else {
                $adress.next().hide();

                if (kwd != $.trim(self.prevValueKwd) && kwd != "") {
                    self.prevValueKwd = kwd;
                    $("#worldkwdList").hide();
                    clearTimeout(self.delayTimer);
                    self.delayTimer = setTimeout(function () {
                        self.$input = $adress;
                        self.kwdSearch(kwd);
                    }, 300);
                }
            }
        });

        $adress.bind("click", function (ev) {
            ev.stopPropagation();
            self.prevValueKwd = $(this).val();
            $(this).next().hide();
        });

        //adress textbox获得焦点时显示位置关键词列表
        $adress.focus(function () {
            adressFocusTimeout = setTimeout(function () {
                if (self.ac && self.ac.isBMapItemClicked) {
                    //百度autocomplete触发的focus不予处理
                    self.ac.isBMapItemClicked = false;
                    return;
                }
                $adress.select();
                var destId = self.searchData.DestinationId;

                var url = worldUrl + "/KeywordSearch/GetLandmarkGroup?regionId=" + destId + "&t=" + (new Date()).getTime();
                var ajaxObj = null;
                var addrPos = $adress.offset();

                if ($addressDrop.length === 0) {
                    $addressDrop = $('<div id="worldaddressDrop" class="m-add-drop"/>').appendTo("body").css({
                        "position": "absolute",
                        "display": "none",
                        "top": addrPos.top + $adress.outerHeight(),
                        "left": addrPos.left
                    }).on("click", "a", function () {
                        var $this = $(this);
                        self.searchData.ParentSearchKeyword = null;
                        self.searchData.ParentValue = null;
                        self.searchData.SearchKeyword = $this.attr("data-type");
                        self.lm = self.searchData.Value = $this.attr("data-val");
                        self.prevValueKwd = $this.text();
                        $adress.val($this.text());
                        $addressDrop.hide();
                        self.searchType = 1;
                        self.$subBtn.click();
                    });
                    self.resetPosition($adress, $("#worldaddressDrop"));
                    $(window).bind("resize.sel", function () {
                        self.resetPosition($adress, $("#worldaddressDrop"));
                    });
                }

                if (self.resCacheData[destId]) {
                    $addressDrop.html(self.resCacheData[destId]);
                    $("#worldkwdList").hide();
                    if (self.resCacheData[destId].length > 0) {
                        $addressDrop.show();
                        /*
                        var css = getPosition();
                        $addressDrop.css('left',css.left).show();
                        */
                    }
                } else {
                    if (ajaxObj) {
                        ajaxObj.abort();
                    }

                    ajaxObj = ajaxJson(url, function (data) {
                        self.resCacheData[destId] = data;
                        ajaxObj = null;
                        if (data) {
                            $addressDrop.html(data).show();
                        }
                        $("#worldkwdList").hide();
                    });
                }
            }, 30);
        });

        $adress.bind("blur", function () {
            if (adressFocusTimeout) {
                clearTimeout(adressFocusTimeout);
            }
            if ($adress.data("enHide")) {
                if ($(this).val() == "") {
                    $(this).next().show();
                }
                $addressDrop.hide();
            }
        });

        $destInput.data("enHide", true);
        $adress.data("enHide", true);
        $(document).on("mouseover", "#worldcityInput", function () {
            $destInput.data("enHide", false);
        });

        $(document).on("mouseout", "#worldcityInput", function () {
            $destInput.data("enHide", true);
        });

        $(document).on("mouseover", "#worldkwdList", function () {
            $destInput.data("enHide", false);
        });

        $(document).on("mouseout", "#worldkwdList", function () {
            $destInput.data("enHide", true);
        });

        $(document).on("mouseover", "#worldaddressDrop", function () {
            $adress.data("enHide", false);
        });

        $(document).on("mouseout", "#worldaddressDrop", function () {
            $adress.data("enHide", true);
        });

        //百度搜索初始化
        self.baiduInit();
        if (self.ac) {
            self.ac.setInputValue(self.$adress.val());
        }
        if (self.$adress.val() && self.$adress.val().length > 0) {
            $adress.next().hide();
        }
        self.searchSubmit();
    },
    baiduInit: function () {
        //百度地图API依赖于别的js文件，所以在document ready之后执行
        var self = this;
        $(function () {
            if (!window["BMap"]) {
                return;
            }
            self.ac = new BMap.Autocomplete({
                "input": "adress",
                "location": self.searchData.DestinationName,
                "onSearchComplete": function (s) {
                    self.hasBaiduResult = s.getNumPois() > 0;
                    self.ac.hide();
                }
            });
            var myGeo = new BMap.Geocoder();
            self.ac.addEventListener("onconfirm", function (e) { //鼠标点击下拉列表后的事件
                var _value = e.item.value, v = _value.province + _value.city + _value.district + _value.street + _value.business;
                //防止乱码
                self.ac.setInputValue($("<div/>").html(v).text());
                var cityName = _value.city;
                if (cityName && cityName.length > 1) {
                    if (cityName[_value.city.length - 1] == "市") {
                        cityName = cityName.substring(0, _value.city.length - 1);
                    }
                    var currentDestination = $.grep(self.cityInfo.citys, function (c) {
                        return c.name == cityName;
                    })[0];
                    if (currentDestination) {
                        self.setDestinationVal(currentDestination);
                        myGeo.getPoint(v, function (point) {
                            if (point) {
                                self.searchData.lat = point.lat;
                                self.searchData.lng = point.lng;
                                self.searchData.adress = v;
                                self.searchType = 2;
                            }
                            //触发搜索事件
                            self.$subBtn.click();
                        }, self.searchData.DestinationName);
                    } else {
                        self.resShow("对不起，该地我们还没有公寓", self.$input);
                    }
                } else {
                    self.$subBtn.click();
                }

                self.ac.isBMapItemClicked = true;
            });
            self.ac.setInputValue(self.$adress.val());
        });
    },
    destSearch: function (kwd) {
        var url = worldUrl + "/KeyWordSearch/?regionid=0&keywordtype=r&keyword=" + encodeURIComponent(kwd);
        var self = this;

        self.getSearchData(url).done(function (res) {
            if (!res || !res.IsSuccess || res.ResultList.length <= 0) {
                self.resShow("抱歉，找不到：" + kwd, self.$input);
                $("#worldcityInput").hide();
            } else {
                self.resShow(self.resCacheData[url].ResultList, self.$input);
                $("#worldcityInput").hide();
            }
        });
    },
    getSearchData: function (url) {
        var self = this;
        if (self.resCacheData[url]) {
            var deffered = $.Deferred();
            deffered.resolve(self.resCacheData[url]);
            return deffered.promise();
        } else {
            if (self.ajaxObj) {
                self.ajaxObj.abort();
            }
            return self.ajaxObj = ajaxJson(url + "&time=" + $.now(), function (res) {
                if (res.IsSuccess) {
                    self.resCacheData[url] = res;
                }
            });
        }
    },
    kwdSearch: function (kwd) {
        var self = this;
        var url = worldUrl + "/KeyWordSearch/?regionid=" + self.searchData.DestinationId + "&keywordtype=lm&keyword=" + encodeURIComponent(kwd);

        self.getSearchData(url).done(function (res) {
            if (!res || !res.IsSuccess || res.ResultList.length <= 0) {
                if (self.hasBaiduResult && self.ac) {
                    self.ac.show();
                }
                self.lm = null;
                self.resShow("抱歉，找不到：" + kwd, self.$input);
                $("#worldaddressDrop").hide();
            } else {
                //如果未在关联下拉框中选中某结果就点击搜索按钮，则按照第一条关联结果进行搜索
                self.lm = res.ResultList[0].Id;
                self.resShow(res.ResultList, self.$input);
                $("#worldaddressDrop").hide();
            }
        }).fail(function () {
            if (self.hasBaiduResult && self.ac) {
                self.ac.show();
            }
        });
    },
    resShow: function (resData, $input) {
        var self = this;
        var $kwdList = $("#worldkwdList");
        var $destInput = self.$destInput;
        var $adress = self.$adress;

        if ($kwdList.length === 0) {
            $kwdList = $('<div id="worldkwdList" class="m-kwd-list"></div>').appendTo("body");
            $kwdList.css({
                position: "absolute",
                left: $input.offset().left + self.kwdOffset[0] + "px",
                top: $input.offset().top + $input.outerHeight() + self.kwdOffset[1] + "px"
            });

            $kwdList.on("click", "a", function () {
                var kwdData = $(this).data("kwdData");
                //匹配到房屋时直接跳转到详情页
                if (kwdData.ConditionType == "u") {
                    window.open(kwdData.Note);
                    self.clearAdressInput();
                    $kwdList.hide();
                    return;
                }
                if (kwdData.Name && kwdData.ConditionType !== "r") {
                    $adress.next().hide();
                    self.prevValueKwd = kwdData.Name;
                    $adress.val(kwdData.Name);
                } else {
                    self.clearAdressInput();
                }
                self.searchData = $.extend(true, {}, self.searchData, kwdData);
                self.setDestinationName(kwdData.DestinationName);
               
                self.searchType = 1;
                $kwdList.hide();
                //added
                if (kwdData.ConditionType === "lm") {
                    self.lm = kwdData.Id;
                } else if (kwdData.ConditionType === "r") {
                    self.lm = null;
                }
                
                //含有具体的搜索逻辑就自动搜索，提交
                if (kwdData.Name && kwdData.ConditionType !== "r") {
                    self.$subBtn.click();
                }
            });

            $kwdList.on("mouseover", "a", function () {
                $kwdList.find("a").removeClass("hover");
                $(this).addClass("hover");
            });

        } else {
            $kwdList.empty();
            $kwdList.css({
                position: "absolute",
                left: $input.offset().left + self.kwdOffset[0] + "px",
                top: $input.offset().top + $input.outerHeight() + self.kwdOffset[0] + "px"
            });
        }

        if (typeof resData === "string") {
            $("<span class='error-info'>" + resData + "</span>").appendTo($kwdList);
        } else {
            var displaywithGroupData = {};
            $.each(resData, function (i, item) {
                var groupItems = displaywithGroupData[item.ConditiontTypeName] || [];
                groupItems.push(item);
                displaywithGroupData[item.ConditiontTypeName] = groupItems;
            });
            $.each(displaywithGroupData, function (key, valObj) {
                var $groupList = $("<div class='key-g'></div>");
                $.each(valObj, function (index, item) {
                    if (!item.Name) {
                        return;
                    }
                    //Name属性放第一个要显示的名称
                    var liString = '<a><span class="keywordName" data-val="' + item.Id + '" data-type="' + item.ConditionType + '">';
                    //标红     
                    if (item.MatchType == 2) {
                        liString += self.getMarkRed(item.Name, item);
                    } else {
                        liString += item.Name;
                    }                  

                    if (item.ConditionType != "r") {
                        liString += "，" + item.DestinationName;
                    }
                    else {
                        liString += "，" + item.DestinationParentName;
                    }
                    //海外英文
                    if (item.ConditionType == "r") {
                        if (item.MatchType == 0) {
                            liString += "&nbsp;" + self.getMarkRed(item.DestinationEng, item);
                        } else {
                            liString += "&nbsp;" + item.DestinationEng;
                        }
                    }
                    else {
                        if (item.MatchType == 0) {
                            liString += "&nbsp;" + self.getMarkRed(item.EnglishName, item);
                        } else {
                            liString += "&nbsp;" + item.EnglishName;
                        }
                    }
                    liString += '</span>';
                    if (index == 0) {
                        liString += '<span class="keywordItem">' + item.ConditiontTypeName + '<i class="i-keyword-' + item.ConditionType + '"></i></span>';
                    }
                    liString += '</a>';
                    $groupList.append($(liString).data("kwdData", item));
                });
                $kwdList.append($groupList);
            });
        }

        $kwdList.find("a").first().addClass("hover");
        if (self.highLighter) {
            self.highLighter.highlight($kwdList[0], $adress.val());
        }
        $kwdList.show();
        self.clearBaiduRes();
    },
    clearRes: function () {
        var $kwdList = $("#worldkwdList");
        $kwdList.empty().hide();
    },
    clearBaiduRes: function () {
        if (this.ac) {
            this.ac.hide();
        }
    },
    clearAdressInput: function () {
        this.$adress.val('').next().show();
    },
    setDestinationVal: function (destination) {
        this.prevValue = destination.name;
        this.$destInput.val(destination.name);
        if (this.ac) {
            this.ac.setLocation(destination.name);
        }
        this.searchData.DestinationId = destination.id;
        this.searchData.DestinationName = destination.name;
        this.searchData.DestinationPinyin = destination.pinyin;
    },
    setDestinationName: function (destinationName) {
        this.prevValue = destinationName;
        this.$destInput.val(destinationName);
        this.$adress.next().text("想住" + destinationName + "哪里？");
        if (this.ac) {
            this.ac.setLocation(destinationName);
        }
    },
    showCityInput: function () {
        var self = this;
        var $destInput = self.$destInput;
        var baseHtml = '<div id="worldcityInput" class="select-list"><div class="address_tabs"></div><div class="addr_wrap"></div></div>';
        var $root = null;
        var $addrTab = null;
        var $addrCon = null;
        var cityInputInfo = self.cityInfo;  //此处最好采用传参方式

        function drawCityContent(cityIds, isHide, isGrouping) {
            var citys = cityInputInfo.citys;
            var $cityCon = $("<div/>").addClass("address_content");
            var cityGroup = [];
            $.each(cityIds, function (i, id) {
                $.each(citys, function (j, cityItem) {
                    if (cityItem.id == id) {
                        //热门不分组
                        if (isGrouping) {
                            var firstCharacter = cityItem.pinyin.charAt(0).toUpperCase();
                            if (!cityGroup[firstCharacter]) {
                                var $cityContainer = $("<div class='cityContainer'/>");
                                $cityCon.append($("<div class='groupContainer'/>").append($("<div class='groupTitle'/>").text(firstCharacter)).append($cityContainer));
                                cityGroup[firstCharacter] = $cityContainer;
                            }
                            cityGroup[firstCharacter].append($("<span/>").text(cityItem.name).attr("data-value", cityItem.id).attr("data-pinyin", cityItem.pinyin));
                        } else {
                            $cityCon.append($("<span/>").text(cityItem.name).attr("data-value", cityItem.id).attr("data-pinyin", cityItem.pinyin));
                        }
                    }
                });
            });
            if (isHide) {
                $cityCon.hide();
            }
            $addrCon.append($cityCon);
        }

        if ($("#worldcityInput").length > 0) {
            $("#worldcityInput").show();
        } else {
            $root = $(baseHtml);

            $addrTab = $root.children().eq(0);
            $addrCon = $root.children().eq(1);
            if (cityInputInfo.hotgroup) {
                $("<span/>").text(cityInputInfo.hotgroup.name).addClass("current").appendTo($addrTab);
                drawCityContent(cityInputInfo.hotgroup.cityids, false, false);
            }
            if (cityInputInfo.lettergroups) {
                $.each(cityInputInfo.lettergroups, function (i, item) {
                    $("<span/>").text(item.name).appendTo($addrTab);
                    drawCityContent(item.cityids, true, false);
                });
            }
            if (cityInputInfo.areagroups) {
                $.each(cityInputInfo.areagroups, function (i, item) {
                    if (i === 0) {
                        $("<span/>").text(item.name).addClass("current").appendTo($addrTab);
                        drawCityContent(item.cityids, false, false);
                    }
                    else {
                        $("<span/>").text(item.name).appendTo($addrTab);
                        drawCityContent(item.cityids, true, false);
                    }
                });
            }
            /* $root.css({
                 position: "absolute",
                 left: $destInput.offset().left + self.destOffset[0] + "px",
                 top: $destInput.offset().top + $destInput.outerHeight() + self.destOffset[1] + "px",
                 zIndex: 9999
             });*/
            $addrTab.on("click", "span", function (ev) {
                ev.stopPropagation();
                $addrTab.find("span").removeClass("current");
                $(this).addClass("current");
                $addrCon.children().hide();
                $addrCon.children().eq($(this).index()).show();
            });

            $addrCon.on("click", "span", function (ev) {
                ev.stopPropagation();
                self.searchData.DestinationId = $(this).attr("data-value");
                self.searchData.DestinationName = $(this).text();
                self.searchData.DestinationPinyin = $(this).attr("data-pinyin");
                self.searchData.SearchKeyword = null;
                self.lm = self.searchData.Value = null;
                self.clearAdressInput();
                self.setDestinationName($(this).text());

                $destInput.attr("data-value", self.searchData.DestinationId);
                $destInput.attr("data-pinyin", self.searchData.DestinationPinyin);
                $destInput.val(self.searchData.DestinationName);

                self.$adress.next().text("想住" + self.searchData.DestinationName + "哪里？");

                $root.hide();
            });
            $("body").append($root);
            self.resetPosition($destInput, $root);
            $(window).bind("resize.sel", function () {
                self.resetPosition($destInput, $root);
            });
        }
    },
    resetPosition: function (elem, root) {
        var bodyWidth = $(document.body).outerWidth(true);
        var offset = elem.offset(), elemW = elem.innerWidth(), elemH = elem.innerHeight();
        var posLeft = offset.left + root.outerWidth(true) + this.destOffset[0];
        var posTop = offset.top + elem.outerHeight(true) + this.destOffset[1];
        if ((posLeft - bodyWidth) > 0) {
            posLeft = posLeft - (posLeft - bodyWidth)
        }
        root.css({
            position: "absolute",
            left: posLeft - root.outerWidth(true),
            top: posTop,
            zIndex: 9999
        });
    },
    dateInputInit: function ($startDate, $endDate) {
        var self = this;
        var mindate = parseDate(minDate),
          maxdate = parseDate(maxDate);


        var checkDateApi = $startDate.data("dateinput"),
            leaveDateApi = $endDate.data("dateinput");

        if (!checkDateApi) {
            $startDate.dateinput({
                min: mindate,
                max: new Date(+maxdate - 24 * 3600000),
                offset: self.dateOffset || [0, 0]
            });
            checkDateApi = $startDate.data("dateinput");

            checkDateApi.change(function (event, date) {
                var leaveDay = parseDate(leaveDateApi.getInput().val()),
                     leaveMinDay = new Date(+date + 24 * 3600000);

                //  checkDateApi.getInput().next().hide();

                // 如果未设定离店时间或入住时间大于离店时间
                if (!leaveDay || compareDate(date, leaveDay)) {
                    leaveDateApi.setMin(leaveMinDay).setValue(leaveMinDay).show();
                } else if (leaveDay) {
                    leaveDateApi.setMin(leaveMinDay);
                }

            });
        }

        if (!leaveDateApi) {
            $endDate.dateinput({
                min: new Date(+mindate + 24 * 3600000),
                max: maxdate,
                offset: self.dateOffset || [0, 0]
            });
            leaveDateApi = $endDate.data("dateinput");

            leaveDateApi.change(function (event, date) {
                var startDay = parseDate(checkDateApi.getInput().val()),
                     startMaxDay = new Date(+date - 24 * 3600000);

                // leaveDateApi.getInput().next().hide();

                // 如果未设定入住时间或者入住时间大于离店时间
                if (!startDay || compareDate(startDay, date)) {
                    checkDateApi.setValue(startMaxDay).show();
                }

            });
        }

    },
    initView: function (conf) {
        //初始化组件属性和配置参数
        this.$destInput = conf.$destInput;
        this.$adress = conf.$kwdInput;
        this.$startDate = conf.$startDate;
        this.$endDate = conf.$endDate;
        this.$subBtn = conf.$subBtn;
        this.cityInfo = conf.cityInfo;
        this.destOffset = conf.destOffset;
        this.dateOffset = conf.dateOffset;
        this.kwdOffset = conf.kwdOffset;
        this.vrchannel = conf.vrchannel;
        this.srcPage = conf.srcPage;
        this.prevValue = this.$destInput.val();
        this.serverDomain = conf.serverDomain;
        //初始化组件状态属性
        this.searchData = {
            DestinationName: this.$destInput.val(),
            DestinationPinyin: this.$destInput.attr("data-destPinyin"),//conf.destPinyin,
            DestinationId: this.$destInput.attr("data-destid"),
            address: "",
            lat: "",
            lng: ""
        };

        this.hasInputWord = false;
        this.resCacheData = {};
        this.highLighter = window["Highlighter"] ? new Highlighter() : null;

        //初始化日历控件
        this.dateInputInit($.initSearch.conf.ui.$startDate, $.initSearch.conf.ui.$endDate);
        this.initInputFromCookie();
        this.addrInputInit();
    },
    initInputFromCookie: function () {
        var self = this;
        var $destInput = self.$destInput;
        if (typeof (ServerDomain) != 'undefined') {
            var cityCookieName = ServerDomain + "_PortalContext_WorldDestinationId";
            var cityCookieValue = $.cookie(cityCookieName);
            var startDateCookieValue = $.cookie(ServerDomain + "_PortalContext_ww_StartDate");
            var endDateCookieValue = $.cookie(ServerDomain + "_PortalContext_ww_EndDate");

            if (cityCookieValue && cityCookieValue != "") {
                $.each(self.cityInfo.citys, function (index, item) {
                    if (item.id === parseInt(cityCookieValue)) {
                        $destInput.attr("data-destid", item.id);
                        $destInput.attr("data-destpinyin", item.pinyin);
                        $destInput.val(item.name);
                        self.$adress.next().text("想住" + item.name + "哪里？");
                        self.searchData.DestinationPinyin = item.pinyin;
                        self.searchData.DestinationName = item.name;
                        self.searchData.DestinationId = item.id;
                        return false;
                    }
                });
            }

            if (startDateCookieValue && startDateCookieValue != "") {
                var sDate = startDateCookieValue.split(" ")[0];
                var aDate = sDate.split("-");
                var api = self.$startDate.data("dateinput");
                self.$startDate.next().hide();
                api.setValueNoOpen(aDate[0], aDate[1] - 1, aDate[2]);

            }

            if (endDateCookieValue && endDateCookieValue != "") {
                var sDate = endDateCookieValue.split(" ")[0];
                var aDate = sDate.split("-");
                var api = self.$endDate.data("dateinput");
                self.$endDate.next().hide();
                api.setValueNoOpen(aDate[0], aDate[1] - 1, aDate[2]);
            }
        }
        var currentDestinationId = self.$destInput.attr("data-destid");
        var currentDestination = $.grep(self.cityInfo.citys, function (c) {
            return c.id == currentDestinationId;
        })[0];
        if (currentDestination) {
            self.$destInput.val(currentDestination.name);
            self.$destInput.attr("data-destpinyin", currentDestination.pinyin);
            self.$adress.next().text("想住" + currentDestination.name + "哪里？");
        }
    },
    //返回标红后的html字符串
    getMarkRed: function (input, item) {
        if (!input)
            return input;
        var start = parseInt(item.MatchIndex);
        if (start === -1 || start > input.length -1 || !item.SearchKeyword) {
            return input;
        }        
        var end = start + item.SearchKeyword.length - 1;
        if(end > input.length){
            return '<span class="highlight-text">' + input + '</span>';
        }
        var result = input.substring(0, start);
        result += '<span class="highlight-text">';
        result += input.substring(start, end + 1);
        result += '</span>';
        result += input.substring(end + 1);
        return result;
    }
};

function ajaxJson(url, callback)
{
    //跨域
    if (worldUrl) {
        return $.getJSON(url + "&callback=?", callback);
    }
    else {
        return $.get(url, callback);
    }
}