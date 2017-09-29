/**
 * @Created by cdlanxingxing@jd.com on 2016/7/7.
 * @Use JD.ID APP JS SDK
 * @Description config,ready,loginRpc,openSpecial,getOpenProductUrl,openApp,isApp;
 */
!(function( factory ){
    window['jdId'] = factory();
})(function( ){
    'use strict';

    /* private tools */
    var utility = {
        cookie:{
            /**
             * 获取指定 name的cookie值
             * @method get
             * @param {String} name - cookie名称
             * @returns {String}
             * @example
             */
            get: function (name) {
                name = name.replace(/([\.\[\]\$])/g, '\\\$1');
                var rep = new RegExp(name + '=([^;]*)?;', 'i');
                var co = document.cookie + ';';
                var res = co.match(rep);
                if (res) {
                    return decodeURIComponent(res[1]) || "";
                }
                else {
                    return "";
                }
            },
            /**
             * 设置cookie
             * @method set
             * @param {String} name - COOKIE名称
             * @param {String} value - COOKIE值
             * @param {String} expire - 过期时间，该过期时间以小时计算，例如设置1，则表示1小时后过期
             * @param {String} path - COOKIE有效路径
             * @param {String} domain - COOKIE的有效域名
             * @param {String} secure - -
             * @return {undefined}
             * @example
             */
            set: function (name, value, expire, path, domain, secure) {
                var cookieArr = [];
                cookieArr.push(name + '=' + encodeURIComponent(value));
                if (expire) {
                    var dd = new Date();
                    var expires = dd.getTime() + expire * 3600000;
                    dd.setTime(expires);
                    cookieArr.push('expires=' + dd.toGMTString());
                }
                if (path) {
                    cookieArr.push('path=' + path);
                }
                if (domain) {
                    cookieArr.push('domain=' + domain);
                }
                if (secure) {
                    cookieArr.push(secure);
                }
                document.cookie = cookieArr.join(';');
            },
            del:function( name ){
                this.set( name, '', -1 );
            }
        }
    };

    var nativeJdId = (function( utility ){
        /* private */

        /* public */
        return {
            log:function( str ){ },
            config:function(conf){
                var defaults={
                    debug : false,
                    api:[
                        'passportDoLogin',
                        'webViewFocus'
                    ]
                }
                for( var k in conf ) defaults[k] = conf[k];

                if( defaults.debug && console && console.log ){
                    this.log = function( str ){ console.log(str); }
                }
            },
            DEVICE:{ IOS:'ios', ANDROID:'android' },
            SPECIAL:{ INDEX:/*首页*/1, CATEGORY:/*分类*/2, CART:/*购物车*/3, USER_CENTER:/*个人中心*/4, ORDER_LIST:/*订单列表*/5 },
            statusReady:false,
            readyCallbacks:[],
            ready:function(callback){
                this.readyCallbacks.push( callback );
                if(this.statusReady){
                    this.handlerReadyCallbacks();
                }else{
                    this.init();
                }
            },
            handlerReadyCallbacks:function(){
                for(var i=0; i<this.readyCallbacks.length;i++){
                    this.readyCallbacks[i]();
                }
                this.readyCallbacks = [];
            },
            noticeReady:function(){
                this.statusReady = true;
                this.handlerReadyCallbacks();
            },
            initIosBridge:function(bridge){
                bridge.init();

                //注册[注册成功]Native　API
                //bridge.registerHandler("passportRegister", function (data, responseCallback) { log("register handler", data); });
                // 注册[第三方登陆成功]Native API
                //bridge.registerHandler("passportJointLogin", function (data, responseCallback) { log("jointlogin handler", data); });
                // 注册[打开网页]Native API
                //bridge.registerHandler("passportOpenURL", function (data, responseCallback) { log("openUrl handler", data); });
                // 注册[立即登录]Native API
                //bridge.registerHandler("passportDoLogin", function (data, responseCallback) { log("doLogin handler", data); });

                this.noticeReady();
            },
            init:function(){
                var self = this;
                if(window['androidpassport']){
                    self.noticeReady();
                }else{
                    if (window['WebViewJavascriptBridge']) {
                        self.initIosBridge(window['WebViewJavascriptBridge']);
                    } else {
                        document.addEventListener('WebViewJavascriptBridgeReady', function (event) { self.initIosBridge(event['bridge']); }, true);
                    }
                }
            },
            getFreeVarName:function(){
                var fix = 'freeCallback';
                var num = 0;
                do{
                    num++;
                }while( window[fix+num] != undefined );
                return fix+num;
            },
            getServerDate:function( callback ){
                var script = document.createElement('script');
                var callbackName = this.getFreeVarName();
                window[callbackName] = function(data){
                    console.log(data);
                    callback && callback(data);
                    delete window[callbackName];
                    document.body.removeChild(script);
                };
                script.src = '//sale.jd.id/time/getCurrentTime?callback='+callbackName
                document.body.appendChild( script );
            },
            callNativeAPI:function(apiName, data, callback) {
                var params = data;
                try{
                    if(window['androidpassport']){
                        if( typeof params == 'object') params = JSON.stringify(params);
                        window['androidpassport'][apiName]( params );
                    }else if(window['WebViewJavascriptBridge']){
                        window['WebViewJavascriptBridge']['callHandler'](apiName, params, callback);
                    }
                }catch(e) { this.log('app not current api');  }
            },
            webViewFocus:function( focusHandler ){
                var windowFreeVarName = this.getFreeVarName();
                window[windowFreeVarName] = focusHandler;
                this.callNativeAPI( 'webViewFocus', windowFreeVarName  );
            },
            openSpecial: function( SPECIAL ){
                this.callNativeAPI('openSpecial', SPECIAL||1 );
            },
            /**
             * 打开首页
             */
            openSpecialIndex:function(){
                this.openSpecial( this.SPECIAL.INDEX );
            },
            /**
             * 打开分类页
             */
            openSpecialCategory:function(){
                this.openSpecial( this.SPECIAL.CATEGORY );
            },
            /**
             * 打开购物车
             */
            openSpecialCart:function(){
                this.openSpecial( this.SPECIAL.CART );
            },
            /**
             * 打开用户中心
             */
            openSpecialUserCenter:function(){
                this.openSpecial( this.SPECIAL.USER_CENTER );
            },
            /**
             * 打开订单列表
             */
            openSpecialOrderList:function(){
                this.openSpecial( this.SPECIAL.ORDER_LIST );
            },

            loginRpc:function(){
                console.log(this);
                var self = this;
                var callbacks = [];

                var getToken = function(){
                    return self.getCookie('lighting-id');
                };
                var isLogin = function(){
                    var token = getToken;
                    if( token && token.length > 10) return true;
                    else return false;
                };
                var openLogin = function( callback ){
                    callbacks.push( callback );
                    self.callNativeAPI("passportDoLogin", {success: true, pin: ""});
                };

                var listenerLogin = function(callback){
                    var token = getToken();
                    ( token && token.length>10 ) ? callback(token) : callbacks.push( callback );
                };

                self.ready(function(){
                    self.webViewFocus(function(){
                        if(callbacks.length==0) return;
                        var token = getToken();
                        if(token && token.length>10){
                            for(var i=0; i<callbacks.length; i++){
                                ( typeof callbacks[i] == 'function' ) && callbacks[i](token);
                            }
                            callbacks = [];
                        }
                    });
                });

                return {
                    isLogin  : isLogin,
                    getToken : getToken,
                    openLogin: openLogin,
                    listenerLogin:listenerLogin
                }
            },

            /**
             * 获取URL地址
             * @param name 不区分大小写
             * @param search
             * @returns {*}
             */
            getUrlParameter:function (name, search) {
                var url = '';
                if(search){
                    url = search.substr( search.indexOf('?') + 1 );
                }else{
                    url = window.location.search.substr(1);
                }
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
                var r = ( url ).match(reg);
                if (r != null) {
                    return decodeURIComponent(r[2]) || '';
                } else {
                    return null;
                }
            },
            /**
             * 替换URL中的参数
             * @param url 目标url
             * @param arg 需要替换的参数名称
             * @param arg_val 替换后的参数的值
             * @returns {string} 参数替换后的url
             */
            setUrlParameter : function (url, object ) {
                /**
                 * 处理现在已经有的参数打成JSON，解决重复的参数。
                 * @type {Array}
                 */
                var arr = [], p = {}, temp = [];
                if (url.split("?").length == 2) {
                    arr = url.split("?")[1].split("&");
                }
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i]) {
                        temp = arr[i].split("=");
                        if (temp.length == 2) {
                            p[temp[0]] = temp[1];
                        } else {
                            p[temp[0]] = "";
                        }
                    }
                }

                /**
                 * 设置参数的值
                 */

                for( k in object ){
                    p[k] = object[k];
                    if( object[k] == null ) delete p[k];
                }

                /**
                 * 重新拼接URL
                 * @type {string}
                 */
                var args = "?";
                for (var k in p) {
                    args = args + k + "=" + p[k] + "&";
                }
                args = args.substr(0, args.length - 1);

                return url.split("?")[0] + args;
            },
            getCookie:function(name) {
                var arrStr = document.cookie.split("; ");
                for (var i = 0; i < arrStr.length; i++) {
                    var temp = arrStr[i].split("=");
                    if (temp[0] == name) return decodeURIComponent(temp[1]);
                }
            },
            isAppByCookie:function() {
                if((this.getCookie("from")||'').indexOf('app_')>=0){
                    return true;
                }else return false;
            },
            isAppByUrl:function(){
                var app = false;
                var clientType = this.getUrlParameter('clientType') || this.getUrlParameter('clienttype');
                if( clientType && clientType.toLocaleLowerCase()!='m') app = true;

                //var reg = (/clienttype=[ios|android]/,'i');
                //if( decodeURIComponent( window.location.search).search( reg ) > 0 ) app = true;

                return app;
            },
            isAppByUserAgent:function(){
                return (new RegExp('JDIDAN','gi')).test( window.navigator.userAgent );
            },
            /**
             * 像不像JD的APP
             * @returns {boolean}
             */
            likeApp:function(){
                var app = this.isAppByUrl();
                if( !app ) app = this.isAppByCookie();
                if( !app ) app = this.isAppByUserAgent();
                return app;
            },


            /**
             * 网页在APP内时获取打开APP某一个商品的链接
             * @param spu
             * @param sku
             * @returns {string}
             */
            getOpenProductUrl : function(spu,sku){
                return 'openapp.overseas.jdmobile://virtual?params={"productId":"'+spu+'","skuId":"'+sku+'","sourceType":1}';
            },

            openAppForAndroid:function ( params ){
                var openStr = 'jd.id.overseas.android://virtual' + params;
                var ifr = document.createElement("iframe");
                ifr.setAttribute('src', openStr);
                ifr.setAttribute('style', 'display:none');
                document.body.appendChild(ifr);
            },
            openAppForIos: function (params) {
                var openStr = 'jd.id.overseas.ios://virtual' + params;
                var a = document.createElement("a");
                a.setAttribute("href", openStr);
                a.style.display = "none";
                document.body.appendChild(a);
                var e = document.createEvent("HTMLEvents");
                e.initEvent("click", !1, !1);
                a.dispatchEvent(e);
            },
            /**
             * 浏览器中唤醒JD APP。
             * @param spu
             * @param sku
             */
            openApp:function( spu, sku ){
                var params = '';
                if(spu&&sku) params = '?extra={"pid":"'+spu+'","kid":"'+sku+'","t":2}';
                if( !!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ){
                    this.openAppForIos( params );
                }else this.openAppForAndroid( params );
            },

            /**
             * 是否是ID M站首页
             * @param url
             * @returns {boolean}
             */
            isIdMIndex:function( url ){
                url = url.split('?')[0];//.replace(/^\s+$/gi,"").replace(/\s+$/gi,"");
                url = url.split('#')[0];//.replace(/^\s+$/gi,"").replace(/\s+$/gi,"");

                var reg = new RegExp("^(https:|http:)?//m.jd.id(|/+|/+index(|/+|[.][^./]{1,}))$","gi");
                return reg.test( url )
            },
            isAndroid:function(){
                var userAgentInfo = navigator.userAgent;
                var Agents = ["Android"];
                for (var v = 0; v < Agents.length; v++) {
                    if (userAgentInfo.indexOf(Agents[v]) > 0) {
                        return true;
                    }
                }
                return false;
            },
            isIos:function(){
                var userAgentInfo = navigator.userAgent;
                var Agents = ["iPhone", "iPad", "iPod"];
                for (var v = 0; v < Agents.length; v++) {
                    if (userAgentInfo.indexOf(Agents[v]) > 0) {
                        return true;
                    }
                }
                return false;
            }
        };
    })( utility );


    return nativeJdId;
});