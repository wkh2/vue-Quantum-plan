<template>
    <div class="plana">
        <MyHeader :documentTitle="documentTitle"></MyHeader>
        <div class="plana__head">
            <div class="plana__one all">
                <div class="head__icon">流程节点</div>
                <p class="head__mount1">12</p>
            </div>
            <div class="plana__two all">
                <div class="head__icon">应用组件</div>
                <p class="head__mount2">28</p>
            </div>
            <div class="plana__three all">
                <div class="head__icon">需要调整</div>
                <p class="head__mount3">5</p>
            </div>
        </div>
        <div class="plana__tips">
            <div class="footer__tips">
                <div class="tips"></div>
                <span> 仅能看到应用到的组件</span>
            </div>
        </div>
        <div class="content" v-for="(data,index) in contentArray" @click="goConfirm">
            <span class="name">{{data.name}}</span>
            <span class="status">{{data.status}} ></span>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import MyHeader from '../../components/Header/header.vue';
export default {
    components: {
        MyHeader
    },
    data() {
        return {
            currIndex: 0,
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
                    status: '需调整'
                },
                {
                    name: '5.XXXXXX',
                    status: '直接可用'
                },
                {
                    name: '6.XXXXXX',
                    status: '需增加'
                },
                {
                    name: '7.XXXXXX',
                    status: '直接可用'
                },
                {
                    name: '8.XXXXXX',
                    status: '需增加'
                },
            ]
        }
    },
    created() {
        this.documentTitle = '量子评估';

    },
    methods: {
        goConfirm: function() {
            this.$router.push({ path: './compontConfirm' });
        }
    }
}
</script>
<style lang="less" scoped>
@import './planA.less';
</style>

