;(function(window, document, undefined, $){
	
	"use strict";
	
	if(!window['somssiCommonUtil']){

		var somssiCommonUtil = {};
		var somssiCommonDateUtil = {
			_DASH : "-",			
			_WEEK_NAME_LIST : {
				 "0" 	: [0, 1, 2, 3, 4, 5, 6]
				,"1"	: ["일", "월", "화", "수", "목", "금", "토"]
				,"2"	: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
				,"3"	: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
			},
			_MAX_DAY_IN_MONTH : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
		};
		
		somssiCommonUtil.broswerInfo = function() {

			var agent = navigator.userAgent.toLowerCase(), name = navigator.appName, browser = '';

			if (name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
				browser = 'ie';
				if (name === 'Microsoft Internet Explorer') {
					agent = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(agent);
					browser += parseInt(agent[1]);
				} else {
					if (agent.indexOf('trident') > -1) {
						browser += 11;
					} else if (agent.indexOf('edge/') > -1) {
						browser = 'edge';
					}
				}
			} else if (agent.indexOf('safari') > -1) {
				if (agent.indexOf('opr') > -1) {
					browser = 'opera';
				} else if (agent.indexOf('chrome') > -1) {
					browser = 'chrome';
				} else {
					browser = 'safari';
				}
			} else if (agent.indexOf('firefox') > -1) {
				browser = 'firefox';
			}

			return browser;
		};

		somssiCommonUtil.getDeviceName = function(navigator){
			if(navigator){
				var userAgent = navigator.userAgent.toLowerCase();

				if (/android/i.test(userAgent)){
					return "android";
				}else if (/iphone|ipad|ipod/i.test(userAgent)){
					return "ios";
				}
			}
			
			return '';
		};	

		somssiCommonUtil.isMobile = function(){
			return /Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);
		};
		
		somssiCommonUtil.contains = function(obj, target){
			if(!obj){ 
				return false;
			}
			
			if(!target){ 
				return false;
			}
			
			if(typeof(obj) === "string"){
				return obj.indexOf(target) > -1 ? true : false;
			}else if( obj.constructor === Object ){
				return obj.hasOwnProperty(target);
			}else if( obj.constructor === Array ){
				return $.inArray(target, obj) > -1 ? true : false;
			}
			return false;
		};
		
		somssiCommonUtil.isEmpty = function(target){
			
			if(typeof target === "string"){
				return $.trim(target).length === 0 ? true : false;
			}else if(typeof target === "object"){
				if(somssiCommonUtil.isEqual(target, null)){
					return true;
				}else{
					
					if( target.constructor === String ){
						return $.trim(target).length === 0 ? true : false;
					}else if( target.constructor === Object ){
						return Object.keys(target).length <= 0 ? true : false;
					}else if( target.constructor === Array ){
						return target.length <= 0 ? true : false;
					}else if( target instanceof $ ){
						return target.length <= 0 ? true : false;
					}else if( typeof target === "number"){
						return false;
					}else if( typeof target === "boolean"){
						return false;
					}else if( typeof target === "function"){
						return false;
					}else{
						return $(target).length <= 0 ? true : false;
					}
				}
			}
			
			return target === undefined ? true : false;
		};
		
		somssiCommonUtil.isNotEmpty = function(target){
			return !somssiCommonUtil.isEmpty(target);
		};
		
		somssiCommonUtil.isEqual = function(lObj, rObj){
			return lObj === rObj;
		};
		
		somssiCommonUtil.isNotEqual = function(lObj, rObj){
			return !somssiCommonUtil.isEqual(lObj, rObj);
		};
		
		somssiCommonUtil.submitAjax = function(url, ajaxOption){

			if(!url){
				return false;
			}
			
			ajaxOption = ajaxOption || {};
			
			if(ajaxOption.url){
				ajaxOption.url = "";
			}
			
			var opts = $.extend({}, {
				  type 			: "post"
				, contentType	: "application/x-www-form-urlencoded; charset=UTF-8"
				, url 			: url
				, data			: {}
				, dataType		: "json"
				, async 		: true
				, beforeSend	: null
				, complete 		: null
				, success		: null
				, error 		: null
			}, ajaxOption);
			
			if(opts['beforeSend'] && typeof(opts['beforeSend']) == "function"){
				var beforeSendFnc = opts['beforeSend'];
				opts['beforeSend'] = function(){
					beforeSendFnc.call(this);
				};
			}else{
				opts['beforeSend'] = function(){
				};
			}
			
			if(opts['complete'] && typeof(opts['complete']) == "function"){
				var completeFnc = opts['complete'];
				opts['complete'] = function(){
					completeFnc.call(this);
				};
			}else{
				opts['complete'] = function(){
				};
			}	
			
			if(opts['success'] && typeof(opts['success']) == "function"){
				var successFnc = opts['success'];
				opts['success'] = function(data, status) {
					successFnc.call(this, data, status);
				};
			}
			
			if(opts['error'] && typeof(opts['error']) == "function"){
				var errorFnc = opts['error'];
				opts['error'] = function(xhr, status, error) {				
					errorFnc.call(this, xhr, status, error);
				};
			}
			
			if(opts.contentType.toLowerCase().match("json")){
				opts.data = JSON.stringify(opts.data);
			}
			
			return $.ajax(opts);
		};
	 
		somssiCommonUtil.submitForm = function(actionUrl, method, paramObj, target){
			
			if(!actionUrl){
				return;
			}
			
			method = method || "post";
			
			if(!somssiCommonUtil.contains(["get", "post"], method.toLowerCase())){
				console.log("not allow method type -> " +  method);
				return;
			}
			
			target = target || "_self";
			
			var $tempForm = $("<form/>").attr("id", "form-" + somssiCommonUtil.generateUUID()).attr("action", actionUrl).attr("method", method).attr("target", target);
			
			if(paramObj != null && Object.keys(paramObj).length > 0){
				$.each(paramObj, function(key, val){
					$tempForm.append( $("<input/>").attr("type", "hidden").attr("name", key).val(val) );
				});
			}
			
			$(document).find("body").append($tempForm);
			$tempForm.submit().remove();
		};
		
		somssiCommonUtil.generateUUID = function(){
			var dt = new Date().getTime();
		    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		        var r = (dt + Math.random() * 16) % 16 | 0;
		        dt = Math.floor(dt/16);
		        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
		    });
		};
		
		somssiCommonUtil.getQueryStringToObject = function(str){
			var obj = {};
			
			if(!str){
				str = document.location.href;
			}
			
			str.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(a, e, o) {
				obj[e] = decodeURIComponent(o);
			});
			
			return obj;
		};
		

		somssiCommonUtil.getCookie = function(key) {
			
			var x, y, res = "", cookies = document.cookie.split(";");
			
			for (var i = 0; i < cookies.length; i++){

				x = cookies[i].substr(0, cookies[i].indexOf("="));
				y = cookies[i].substr(cookies[i].indexOf("=") + 1);
				x = x.replace(/^\s+|\s+$/g, "");

				if (x == key){
					res = unescape(y);
					break;
				}
			}
			return res;
		};
		
    	somssiCommonUtil.setCookie = function(key, val, expireDay){
    		
			// key, val, expireDay 필수
			if(!key || !val || !expireDay){
				return ;
			}
			
			var expire = new Date();
	        expire.setDate(expire.getDate() + expireDay);
	        var cookieStr = key + "=" + escape(val) + "; path=/; expires=" + expire.toGMTString() + ";"      
	        document.cookie = cookieStr;
    	};
    	
    	somssiCommonUtil.delCookie = function(key){
    		if(!key){
    			return ;
    		}
    		somssiCommonUtil.setCookie(key, "", -1);
    	};
    	
    	somssiCommonUtil.onlyNumberBind = function(targetSelectorStr){
    		
    		if(typeof(targetSelectorStr) != "string"){
    			return;
    		}
    		
    		$(document).on("keyup", targetSelectorStr, function(e){
    			var n = $(this).val().replace(/[^0-9]/g,"");
    			$(this).val( n );
    		});
    	};
    	
    	somssiCommonUtil.numberComma = function(_number){
    		
    		if(typeof _number == "string"){
    			_number = _number.replace(/,/gi, '').replace(/원/gi, '');
    		}
    		
    		var num = Number(_number);
    		if(num == 0) {
    			return 0;
    		}
    		
    		var reg = /(^[+-]?\d+)(\d{3})/;
    		var n = (num + '');
    		while (reg.test(n)){
    			n = n.replace(reg, '$1' + ',' + '$2');
    		}
    		return n;
    	};
    	
    	somssiCommonDateUtil.getToday = function(format){
    		if(somssiCommonUtil.isEmpty(format)){
    			format = "yyyy-MM-dd";
    		}
    		return somssiCommonDateUtil.getFormatDate(new Date(), format);
    	};
    	
    	somssiCommonDateUtil.getFormatDate = function(dt, format){
    		
    		if(!(dt instanceof Date)){
    			throw new Error("somssiCommonDateUtil Error : Date 형식이 아닙니다.");
    		}
    		
    		if(somssiCommonUtil.isEmpty(format)){
    			format = "yyyy-MM-dd";
    		}
    		
    	    return format.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function(s) {
    	        switch (s) {
    	            case "yyyy" : 
    	            	return dt.getFullYear();
    	            case "yy" : 
    	            	return String(dt.getFullYear()).substring(2,4);
    	            case "MM" : 
    	            	return somssiCommonDateUtil.makeStrForLowerThanTen(dt.getMonth() + 1);		            	            	
    	            case "dd" : 
    	            	return somssiCommonDateUtil.makeStrForLowerThanTen(dt.getDate());
    	            case "E": 
    	            	return somssiCommonDateUtil._WEEK_NAME_LIST["2"][dt.getDay()];
    	            case "HH": 
    	            	return somssiCommonDateUtil.makeStrForLowerThanTen(dt.getHours());
    	            case "hh": 
    	            	return somssiCommonDateUtil.makeStrForLowerThanTen((dt.getHours() % 12) ? (dt.getHours() % 12) : 12);
    	            case "mm": 
    	            	return somssiCommonDateUtil.makeStrForLowerThanTen(dt.getMinutes());
    	            case "ss": 
    	            	return somssiCommonDateUtil.makeStrForLowerThanTen(dt.getSeconds());
    	            case "a/p": 
    	            	return dt.getHours() < 12 ? "오전" : "오후";
    	        }
    	    });
    	};
    	
    	somssiCommonDateUtil.isValidDate = function(str){
    		
    		try{
    			
    			if(!str){
    				return false;
    			}
    			
    			// console.log("input value : " + str);
    			
    			if(typeof(str) == "string") {
    				
    				if(somssiCommonUtil.contains(str, 'null') || somssiCommonUtil.contains(str, 'NaN')) {
    					return false;
    				}
    				
    				var year, month, day;
    				var temp = str.split(' '); // 시간부분은 버리기 위함
    				
    				if(somssiCommonUtil.contains(str, '-')){
    					
    					var dtArr = temp[0].split('-');
    					
    					year = Number(dtArr[0]);
    					month = Number(dtArr[1]); 
    					day = Number(dtArr[2]);
    					
    				}else{
    					
    					if(temp[0].length == 8 || temp[0].length == 10){
    						temp[0] = temp[0].replace(/\//gi, '');
    						year = Number(temp[0].substring(0, 4));
    						month = Number(temp[0].substring(4, 6));
    						day = Number(temp[0].substring(6, 8));
    					}else{
    						return false;
    					}
    				}
    				
    				if(month < 1 || month > 12){
    					return false;
    				}
    				
    				var maxDay = somssiCommonDateUtil._MAX_DAY_IN_MONTH[month - 1];
    				
    				// 윤년 체크
    	            if( month == 2 && ( year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ) ) {
    	                maxDay = 29;
    	            }
    				
    				if(day <= 0 || day > maxDay){
    					return false;
    				}
    				
    				var d = new Date(year + "/" + month + "/" + day);
    				
    				if(d.toString() == "Invalid Date"){
    					return false;
    				}else{
    					
    					//console.log("year(" + d.getFullYear() + ", " + year +")\n, month(" + (d.getMonth() + 1) + ", " + month + ")\n, day(" + d.getDate() + ", " + day + ")");
    					
    					if (d.getFullYear() == year && d.getMonth() + 1 == month && d.getDate() == day) {
    						return true;
    					}else{
    						return false;
    					}
    				}
    				
    			}else if(str instanceof Date){
    				if(str.toString() == "Invalid Date"){
    					return false;
    				}else{
    					return true;
    				}
    			}
    		}catch(e){
    			console.log(e);
    			return false;
    		}
    		return false;
    	};
    	
    	somssiCommonDateUtil.compareDate = function(cmd, lDate, rDate){
    		
    		if(!cmd) {
    			return;
    		}
    		
    		if(typeof(cmd) != "string") {
    			return;
    		}
    		
    		var year, month, day;
    		
    		if(typeof(lDate) == "string") {
    			lDate = lDate.replace(/-/gi, '').replace(/\//gi, '').trim();
    			
    			if(lDate.length != 8){
    				console.log("arg first : " + lDate + " is not valid Date");
    				return ;
    			}
    			
    			year = Number(lDate.substring(0, 4));
    			month = Number(lDate.substring(4, 6));
    			day = Number(lDate.substring(6, 8));
    			
    			lDate = new Date(year + "/" + month + "/" + day);
    		}
    		
    		if(typeof(rDate) == "string") {
    			rDate = rDate.replace(/-/gi, '/').replace(/\//gi, '').trim();
    			
    			if(rDate.length != 8){
    				console.log("arg second : " + rDate + " is not valid Date");
    				return ;
    			}
    			
    			year = Number(rDate.substring(0, 4));
    			month = Number(rDate.substring(4, 6));
    			day = Number(rDate.substring(6, 8));
    			
    			rDate = new Date(year + "/" + month + "/" + day);
    		}
    		
    		if(!somssiCommonDateUtil.isValidDate(lDate)) {
    			console.log("arg first : " + lDate + " is not valid Date");
    			return ;
    		}
    		if(!somssiCommonDateUtil.isValidDate(rDate)) {
    			console.log("arg second : " + rDate + " is not valid Date");
    			return ;
    		}
    		
    		if(cmd == 'eq' || cmd == '==') {
    			return lDate.getTime() == rDate.getTime();
    		}else if(cmd == 'ne' || cmd == '!=') {
    			return lDate.getTime() != rDate.getTime();
    		}else if(cmd == 'lt' || cmd == '<') {
    			return lDate < rDate;
    		}else if(cmd == 'le' || cmd == '<=') {
    			return lDate <= rDate;
    		}else if(cmd == 'gt' || cmd == '>') {
    			return lDate > rDate;
    		}else if(cmd == 'ge' || cmd == '>=') {
    			return lDate >= rDate;
    		}
    		
    		return;
    	};
    	
    	somssiCommonDateUtil.getDayNm = function(type, dt) {
    		
    		if(!somssiCommonDateUtil.isValidDate(dt)){
    			console.log("getDayNm : " + dt + " is not valid Date");
    			return -1;
    		}

    		var day = (new Date(dt)).getDay();
    		
    		if(somssiCommonDateUtil._WEEK_NAME_LIST.hasOwnProperty(type)){
    			return somssiCommonDateUtil._WEEK_NAME_LIST[type][day];
    		}
    		
    		return -1;
    	};
    	
    	somssiCommonDateUtil.getDateDiff = function(dateA, dateB, opts){
    		
    		var year, month, day;
    		
    		if(typeof(dateA) == "string") {
    			dateA = dateA.replace(/-/gi, '').replace(/\//gi, '').trim();
    			
    			if(dateA.length != 8){
    				console.log("arg first : " + dateA + " is not valid Date");
    				return ;
    			}
    			
    			year = Number(dateA.substring(0, 4));
    			month = Number(dateA.substring(4, 6));
    			day = Number(dateA.substring(6, 8));
    			
    			dateA = new Date(year + "/" + month + "/" + day);
    		}
    		
    		if(typeof(dateB) == "string") {
    			dateB = dateB.replace(/-/gi, '').replace(/\//gi, '').trim();
    			
    			if(dateB.length != 8){
    				console.log("arg second : " + dateB + " is not valid Date");
    				return ;
    			}
    			
    			year = Number(dateB.substring(0, 4));
    			month = Number(dateB.substring(4, 6));
    			day = Number(dateB.substring(6, 8));
    			
    			dateB = new Date(year + "/" + month + "/" + day);
    		}
    		
    		if(!somssiCommonDateUtil.isValidDate(dateA)) {
    			console.log("arg first : " + dateA + " is not valid Date");
    			return ;
    		}
    		
    		if(!somssiCommonDateUtil.isValidDate(dateB)) {
    			console.log("arg second : " + dateB + " is not valid Date");
    			return ;
    		}
    		
    		var dtA = new Date(dateA);
    		var dtB = new Date(dateB);
    		
    		var options = opts;
    		
    		if(!options){
    			options = {};
    		}
    		 
    		var allowTypeArr = ['year', 'month', 'day', 'hour', 'minute', 'second']; 
    		
    		if(options.type){
    			if(!somssiCommonUtil.contains(allowTypeArr, options.type)){
    				console.log("now allowed type : " + options.type);
    				return ;
    			}
    		}else{
    			options.type = 'day';
    		}
    		
    		var result = "";
    		switch (options.type) {
    			case 'year':
    				result = dtB.getYear() - dtA.getYear();
    				break;
    			case 'month':
    				result = ((dtB.getYear() - dtA.getYear()) * 12) + (dtB.getMonth() - dtA.getMonth());		
    				break;
    			case 'day':
    				result = (dtB - dtA) / (1000 * 60 * 60 * 24);
    				break;
    			case 'hour':
    				result = Math.abs(dtB - dtA) / 36e5;
    				break;
    			case 'minute':
    				result = somssiCommonDateUtil.getDateDiff(dateA, dateB, {type : 'hour'}) * 60;
    				break;
    			case 'second':
    				result = somssiCommonDateUtil.getDateDiff(dateA, dateB, {type : 'minute'}) * 60;
    				break;
    			default:
    				break;
    		}
    		
    		return result;
    	};
    	
    	somssiCommonDateUtil.getDayListStartToEnd = function(dateA, dateB, interval){
    		
    		var year, month, day;
    		
    		if(typeof(dateA) == "string") {
    			
    			dateA = dateA.replace(/-/gi, '').replace(/\//gi, '').trim();
    			
    			if(dateA.length != 8){
    				console.log("arg first : " + dateA + " is not valid Date");
    				return [];
    			}
    			
    			year = Number(dateA.substring(0, 4));
    			month = Number(dateA.substring(4, 6));
    			day = Number(dateA.substring(6, 8));
    			
    			dateA = new Date(year + "/" + month + "/" + day);    			
    		}
    		
    		if(typeof(dateB) == "string") {
    			
    			dateB = dateB.replace(/-/gi, '').replace(/\//gi, '').trim();
    			
    			if(dateB.length != 8){
    				console.log("arg second : " + dateB + " is not valid Date");
    				return [];
    			}
    			
    			year = Number(dateB.substring(0, 4));
    			month = Number(dateB.substring(4, 6));
    			day = Number(dateB.substring(6, 8));
    			
    			dateB = new Date(year + "/" + month + "/" + day);
    		}
    		
    		if(!somssiCommonDateUtil.isValidDate(dateA)) {
    			console.log("arg first : " + dateA + " is not valid Date");
    			return [];
    		}
    		
    		if(!somssiCommonDateUtil.isValidDate(dateB)) {
    			console.log("arg second : " + dateB + " is not valid Date");
    			return [];
    		}
    		
    		var dayDiff = somssiCommonDateUtil.getDateDiff(dateA, dateB);
    		
    		var dtA = new Date(dateA);
    		var dtB = new Date(dateB);
    		
    		if(somssiCommonUtil.isEmpty(interval)){
    			interval = 1; // default
    		}
    		
    		interval = Number(interval);
    		
    		if(interval == NaN){
    			console.log("interval value is not a number!!!");
    			return null;
    		}
    		
    		var result = [];
    		if(dayDiff > 0){
    			for(var i = 0; i <= dayDiff; i++){
    				result.push(somssiCommonDateUtil.getFormatDate( dtA, 'yyyy-MM-dd' ));
    				dtA.setDate(dtA.getDate() + interval);
    				
    				if(somssiCommonDateUtil.compareDate('>', dtA, dtB)){
    					break;
    				}
    			}
    		}else{
    			result.push(somssiCommonDateUtil.getFormatDate( dtA, 'yyyy-MM-dd' ));
    		}
    		
    		return result;
    	};
    	
    	somssiCommonDateUtil.makeStrForLowerThanTen = function(num){
    		return Number(num) < 10 ? "0" + num : num;
    	};
    	
    	somssiCommonUtil.isValidLink = function(url){
    		return /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(url);
    	};

		somssiCommonUtil.initHeaderBar = function(param){
			var d = $.Deferred(), opts = {};
			
			if(param != undefined){
				if(typeof param === 'number'){
					opts = {activeIndex : param};
				}else if(param.constructor === Object){
					opts = param;
				}
			}
			
			var menus = [
				{'title' : '서비스소개', 'link' : '/main', 'target' : '_self'},
				{'title' : '언택트 워크샵', 'link' : '/main/b2b', 'target' : '_self'},
				{'title' : '인재영입', 'link' : 'https://thundering-knot-f7f.notion.site/80254cd1b2a640ab8a740ae4df27d556', 'target' : '_blank'},
				{'title' : '새소식', 'link' : '/main/board/list', 'target' : '_self'},
			];
			var tmpl = [
				'<header class="main-header">',
					'<div class="header">',
						'<div>',
							'<a class="header-close-btn"><i class="xi-close bold"></i></a>',
							'<a href="/main" class="logo" target="_self" title="솜씨당 메인 페이지">솜씨당</a>',
						'</div>',
						'<nav></nav>',
						'<div class="right-btn-area">',
							'<a class="header-right-move-btn" href="/main/host/welcome" target="_self" title="클래스 오픈하기 페이지 이동">클래스 오픈하기</a>',
						'</div>',
				    '</div>',
				'</header>'
			].join('');
			
			var header = $(tmpl);
			var nav = header.find('nav');
			var logoBtn = header.find('.logo > a');
			var mainBtn = header.find('.header-right-move-btn');
			var useSpacer = false;
			
			if(opts && 'headerClasses' in opts){
				opts['headerClasses'].split(' ').map(function(c){
					header.addClass(c);
					if(c == 'push-bottom'){
						useSpacer = true;
					}
				});
			}
			
			var showMenu = true;
			
			if(opts && 'showMenu' in opts){
				showMenu = opts['showMenu'];
			}
			
			var activeIndex = -9999;
			
			if(opts && 'activeIndex' in opts){
				activeIndex = opts['activeIndex'];
			}
			
			if(showMenu){
				var $ol = $('<ol/>');
				nav.empty().append($ol);
				menus.map(function(item, i){
					var $li = $('<li/>');
					var anchor = $('<a/>').attr({
						'href' : item['link'],
						'target' : item['target'] ? item['target'] : '_self',
						'title' : item['title']
					}).append($('<span/>').text(item['title']));
					
					if(activeIndex === i){
						$li.addClass('active');
					}
					
					$li.append(anchor);
					$ol.append($li);
				});
			}
			
			var mainBtnShow = true;
			
			if(opts && 'mainBtnShow' in opts){
				mainBtnShow = opts['mainBtnShow'];
			}
			
			if(mainBtnShow){
				if(opts && 'mainBtn' in opts && opts['mainBtn'].constructor === Object){
					var mainBtnOpts = opts['mainBtn'];
					
					mainBtn.attr({
						'href' : mainBtnOpts['href'],
						'target' : mainBtnOpts['target'] ? mainBtnOpts['target'] : '_self',
						'title' : mainBtnOpts['title'],
					}).empty().text(mainBtnOpts['title']);
					
					if(mainBtnOpts['classes']){
						mainBtnOpts['classes'].split(' ').map(function(c){
							mainBtn.addClass(c);
						});
					}
				}
			}else{
				mainBtn.remove();
			}
			
			if(opts && 'parent' in opts){
				$(opts['parent']).prepend(header);
			}else{
				$('body').prepend(header);	
			}
			
			d.resolve(header);
			
			if(useSpacer){
				header.after(
					$('<div/>').addClass('main-header-spacer')
				);
			}
			
			return d.promise();
		};

		somssiCommonUtil.bindFitScroll = function(callback){
			if(callback && typeof callback === 'function'){
				function _fit(_callback){
					var tick = false;
					return function(){
						if(tick){
							return;
						}
						
						tick = true;
						return requestAnimationFrame(function(){
							tick = false;
							return _callback.call();
						});
					}
				}
				
				var supportsPassive = false;
				try {
					var opts = Object.defineProperty({}, 'passive', {
						get: function() {
							supportsPassive = true;
						}
					});
					window.addEventListener("testPassive", null, opts);
					window.removeEventListener("testPassive", null, opts);
					
					window.addEventListener('scroll', _fit(callback), supportsPassive ? { passive: true } : false);
					window.addEventListener('touchmove', _fit(callback), supportsPassive ? { passive: true } : false);
					window.addEventListener('mousewheel', _fit(callback), supportsPassive ? { passive: true } : false);
				} catch (e) {
					$(window).on('scroll touchmove mousewheel', callback);
				}
			}
		};

		somssiCommonUtil.getAccessType = function(){
  			var d = $.Deferred();
  			var accessInfo = {
				os : 'etc',
   				inApp : false,
				isMobile : true,
			};
	
  			if(window['SssdApps']){
  				accessInfo = {
  					os : 'android',
  					inApp : true,
					isMobile : true,
  				};
  			}else if(window['webkit'] && window['webkit']['messageHandlers'] && window['webkit']['messageHandlers']['callBackHandler']){
  				accessInfo = {
 	   				os : 'ios',
 	   				inApp : true,
					isMobile : true,
 	   			};
  			}else if(somssiCommonUtil.isMobile()){
  				accessInfo = {
	   				os : somssiCommonUtil.getDeviceName(window.navigator),
	   				inApp : false,
					isMobile : true,
	   			};
  			}else{
  				accessInfo = {
	   				os : 'etc',
	   				inApp : false,
					isMobile : false,
	   			};
  			}
  			
  			d.resolve(accessInfo);
			return d.promise();
		};

		somssiCommonUtil.strFormat = function(formatted){
			var args = Array.prototype.slice.call(arguments, 1);
			return formatted.replace(/{(\d+)}/g, function(match, number) { 
				return typeof args[number] != 'undefined' ? args[number] : match;
			});
		};

		somssiCommonUtil.getRandNumRange = function rand(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		};

		somssiCommonUtil.saveToSessionStorage = function(key, obj){
    		var d = $.Deferred();
    		if(window.sessionStorage){
    			try{
    				sessionStorage.setItem(key, JSON.stringify(obj));
    				d.resolve();
    			}catch(e){
    				console.error(e);
    				d.reject();
    			}
    		}else{
    			console.error('sessionStorage 를 사용할 수 없는 브라우저입니다.');
    			d.reject();
    		}
    		return d.promise();
    	};
    	
    	somssiCommonUtil.releaseFromSessionStorage = function(key){
    		if(window.sessionStorage){
    			try{
    				sessionStorage.removeItem(key);
    				return true;
    			}catch(e){
    				console.error(e);
    				return false;
    			}
    		}
    		return false;
    	};
    	
    	somssiCommonUtil.getFromSessionStorage = function(key){
    		if(window.sessionStorage){
    			var obj = null;
    			try{
    				obj = sessionStorage.getItem(key);
    				obj = JSON.parse(obj);
    			}catch(e){
    				console.error(e);
    				obj = null;
    			}
    			return obj;
    		}
    		return null;
    	};
    	
    	somssiCommonUtil.saveToLocalStorage = function(key, obj){
    		var d = $.Deferred();
    		if(window.localStorage){
    			try{
    				localStorage.setItem(key, JSON.stringify(obj));
    				d.resolve();
    			}catch(e){
    				console.error(e);
    				d.reject();
    			}
    		}else{
    			console.error('localStorage 를 사용할 수 없는 브라우저입니다.');
    			d.reject();
    		}
    		return d.promise();
    	};
    	
    	somssiCommonUtil.releaseFromLocalStorage = function(key){
    		if(window.localStorage){
    			try{
    				localStorage.removeItem(key);
    				return true;
    			}catch(e){
    				console.error(e);
    				return false;
    			}
    		}
    		return false;
    	};
    	
    	somssiCommonUtil.getFromLocalStorage = function(key){
    		if(window.localStorage){
    			var obj = null;
    			try{
    				obj = localStorage.getItem(key);
    				obj = JSON.parse(obj);
    			}catch(e){
    				console.error(e);
    				obj = null;
    			}
    			return obj;
    		}
    		return null;
    	};

		somssiCommonUtil.showToastMsg = function(msg, classList, delay){
			if(msg){
				var toast = $('.common-toast-layer');
				
				if(toast.length <= 0){
					$('body').append(somssiCommonUtil['toastMsgTemplate']);
					toast = $('.common-toast-layer');
				}
				
				delay = delay || 1500;
				
				setTimeout(function(){
					_showAndHide();
				}, 50);
				
				function _showAndHide(){
					toast.find('.msg').empty().append(msg);
					
					if(classList && Array.isArray(classList)){
						classList.map(function(x){
							toast.addClass(x);
						});
					}
					
					toast.addClass('show');
					toast.fadeIn(function(){
						setTimeout(function(){
							toast.fadeOut(function(){
								toast.removeClass('show');
								if(classList && Array.isArray(classList)){
									classList.map(function(x){
										toast.removeClass(x);
									});
								}
							});
						}, delay);
					});	
				}
			}
		};

		somssiCommonUtil = $.extend({}, somssiCommonUtil, {
			APP_NAME		: "솜씨당",
			BUCKET_NAME 	: "sssdcimage",
			FILE_SEPARATOR 	: '/',
			IMG_SERVER 		: "https://s3.ap-northeast-2.amazonaws.com",
			SUCCESS			: "success",
			FAIL			: "fail",
			ERROR			: "error",
			KAKAO_KEY : 'd20a28792c73bb493e60b15633cf1c39',
			KAKAO_CH_ID: '_RqzDC',
			NIL_KEY : 'e5GKe52ZFYQxao_37MDZ',
			CFR :'https://d1x9f5mf11b8gz.cloudfront.net',
			toastMsgTemplate : [
				'<div class="common-toast-layer" style="display: none;">',
					'<div class="msg"></div>',
				'</div>'
			].join('')
		});
		
		if(!window.somssiCommonUtil){
			window.somssiCommonUtil = somssiCommonUtil;
		}
		
		if(!window.somssiCommonDateUtil){
			window.somssiCommonDateUtil = somssiCommonDateUtil;
		}
	}
})(window, document, undefined, jQuery !== undefined ? jQuery : $);
