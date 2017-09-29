<template>
    <div class="top-header" v-if="!inApp">
        <header>
            <a href="javascript:window.history.go(-1);" class="i-goback" clstag="pageclick|keycount|201606272|banner_back"></a>
            <span class="title">{{documentTitle}}</span>
        </header>
    </div>
</template>
<script>
export default {
    data() {
        return {
            inApp: false
        }
    },
    props: ['documentTitle'],
    created() {
        //console.log(this.isApp());
        this.inApp = this.isApp();
        document.title = this.documentTitle;
    },
    methods: {
        /**
        * 获取URL地址
        * @param name
        * @param search
        * @returns {*}
        */
        getUrlQueryString(name, search) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = (search || window.location.search.substr(1)).match(reg);
            if (r != null) {
                return decodeURIComponent(r[2]);
            } else {
                return null;
            }
        },
        getCookie(name) {
            var arrStr = document.cookie.split("; ");
            for (var i = 0; i < arrStr.length; i++) {
                var temp = arrStr[i].split("=");
                if (temp[0] == name) return decodeURIComponent(temp[1]);
            }
        },
        isAppByCookie() {
            if ((this.getCookie("from") || '').indexOf('app_') >= 0) {
                return true;
            } else return false;
        },
        isAppByUrl() {
            var app = false;
            var clientType = this.getUrlQueryString('clientType') || this.getUrlQueryString('clienttype');
            if (clientType && clientType.toLocaleLowerCase() != 'm') app = true;
            return app;
        },
        isAppByUserAgent() {
            return (new RegExp('JDIDAN', 'gi')).test(window.navigator.userAgent);
        },
        /**
         * 判断是否是APP
         * @returns {boolean}
         */
        isApp() {
            var app = this.isAppByUrl();
            if (!app) app = this.isAppByCookie();
            if (!app) app = this.isAppByUserAgent();
            return app;
        }
    }
}

</script>
<style lang="less" scoped>
@import "./header.less";
</style>
