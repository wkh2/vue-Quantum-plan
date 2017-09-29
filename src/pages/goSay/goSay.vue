<template>
    <div class="say">
        <MyHeader :documentTitle="documentTitle"></MyHeader>
        <div v-show="noSubmit">
            <section class="say__tips">
                <h2 class="tips__tit">你可以这样说</h2>
                <p>我是运营</p>
                <p>我要卖大闸蟹</p>
                <p>我要买火车票</p>
                <p>我要吃好吃的</p>
                <p>我要回家</p>
            </section>
            <footer>
                <input class="say__footer photo" @click="goSubmit()">
                <input type="text" class="say__say" placeholder="点击说话">
                <button class="say__footer" @click="scamera()"><img src="../../assets/images/icon_键盘.png" alt=""></button>
            </footer>
        </div>
        <section class="say__submit" v-show="showSubmit">
            <div class="submit__txt">
                <p>我是京东运营，我想在在京东商城</p>
            </div>
            <button class="submit__btn" @click="detail()">提交</button>
        </section>
    </div>
</template>
<script>
import MyHeader from '../../components/Header/header.vue';

export default {
    components: {
        MyHeader
    },
    data() {
        return {
            documentTitle: document.title,
            showSubmit: false,
            noSubmit: true
        }
    },
    created() {
        let cl = document.getElementById('cl');
        this.documentTitle = '说商业';

    },
    methods: {
        scamera() {
            this.$router.push({ path: './goAnthor' })
        },
        goSubmit() {
            this.showSubmit = true;
            this.noSubmit = false;
            //this.$router.push({path:'submit'})
        },
        detail() {
            this.$router.push({ path: './detail' })
        }
    }
}
</script>
<style lang="less" scoped>
@import './goSay.less';
</style>

