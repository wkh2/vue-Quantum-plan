<template>
    <div class="invite">
        <MyHeader :documentTitle="documentTitle"></MyHeader>
        <div class="invite__top">
            <IEcharts :option="bar"></IEcharts>
        </div>
        <div class="invite__center">
            <div class="center__block">
            </div>
            <div class="center__block1">
                <h3 class="block1__title">XXXXXXXX</h3>
                <p class="detail">详情>></p>
                <p>how are you?I am fine ,thank youhow are you?I am fine ,thank youhow are you?I am fine ,thank you</p>
            </div>
            <div class="center__block right"></div>
        </div>
        <div class="invite__footer">
            <div class="footer__block">邀请评估</div>
            <div class="footer__block" @click="showPingLun">评论</div>
            <div class="footer__block light" @click="showClick">保存方案</div>
            <div class="footer__block2" @click="showCompontent">查看方案</div>
        </div>
        <PingLun v-show="show"></PingLun>
    </div>
</template>
<script>
import MyHeader from '../../components/Header/header.vue';
import PingLun from '../../components/pingLun/pingLun.vue';

import Vue from 'vue'
import IEcharts from 'vue-echarts-v3'
import 'echarts/lib/chart/bar'
export default {
    components: {
        MyHeader,
        IEcharts,
        PingLun
    },
    data() {
        return {
            show: false,
            //save: false,
            documentTitle: document.title,
            bar: {
                tooltip: {},
                radar: {
                    name: {
                        textStyle: {
                            color: '#000'
                        }
                    },
                    indicator: [
                        { name: 'CMV潜力', max: 6500 },
                        { name: '跨域方案', max: 16000 },
                        { name: '业务场景', max: 30000 },
                        { name: '合作伙伴', max: 38000 },
                        { name: '竞争力', max: 52000 },
                    ]
                },
                series: [{
                    name: '预算 vs 开销（Budget vs spending）',
                    type: 'radar',
                    areaStyle: { normal: {} },
                    data: [
                        {
                            value: [5200, 8000, 18000, 18000, 49000],
                            name: '预算分配（Allocated Budget）'
                        }
                    ]
                }]
            }
        }
    },
    created() {
        this.documentTitle = '量子评估';

    },
    methods: {
        showPingLun: function() {
            this.$router.push({ path: './review' });            
        },
        showClick: function() {
            this.show = true;
        },
        showCompontent: function() {
            this.$router.push({ path: './compontent' });
        }
    }
}
</script>
<style lang="less" scoped>
@import './invite.less';
</style>

