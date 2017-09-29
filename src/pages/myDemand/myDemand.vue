<template>
    <div class="demand">
        <MyHeader :documentTitle="documentTitle"></MyHeader>
        <div class="demand__head">
            <div @click="pinGuClick">
                <div class="head__icon icon1">3</div>
                <p class="head__txt">评估中</p>
            </div>
            <div>
                <div class="head__icon icon2">5</div>
                <p class="head__txt">待评估</p>
            </div>
        </div>
        <div class="demand__nav">
            <p class="light">进行中</p>
            <p>已完成</p>
            <p>已收藏</p>
        </div>
        <div class="content" v-for="(data,index) in contentArray" @click="gocompont">
            <span class="name">{{data.name}}</span>
            <span class="status">{{data.status}} ></span>
        </div>
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
            contentArray: [
                {
                    name: '1.XXXXXX',
                    status: '直接可用'
                },
                {
                    name: '2.XXXXXX',
                    status: '直接可用'
                },
                {
                    name: '3.XXXXXX',
                    status: '需调整'
                },
                {
                    name: '4.XXXXXX',
                    status: '直接可用'
                },
                {
                    name: '5.XXXXXX',
                    status: '直接可用'
                }
            ]
        }
    },
    created() {
        this.documentTitle = '量子评估';

    },
    methods: {
        pinGuClick: function() {
            this.$router.push({ path: './pinGu' });

        },
        gocompont: function() {
            this.$router.push({ path: './compontDetail' });

        }
    }
}
</script>
<style lang="less" scoped>
@import './myDemand.less';
</style>

