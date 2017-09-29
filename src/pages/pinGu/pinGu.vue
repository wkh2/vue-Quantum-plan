<template>
    <div class="pingu">
        <MyHeader :documentTitle="documentTitle"></MyHeader>
        <div class="pingu__head">
            <div class="head__text">
                <h3>XXXXXXXX</h3>
                <p>创建时间：2017-09-20</p>
            </div>
            <div class="head__border"></div>
            <div class="head__status">评估中</div>
        </div>
        <div class="pingu__center">
            <IEcharts :option="bar"></IEcharts>
        </div>
        <div class="pingu__footer">
            <div class="footer__child">查看方案</div>
            <div class="footer__child icon2" @click="goDetail">进展情况</div>
        </div>
    </div>
</template>
<script>
import MyHeader from '../../components/Header/header.vue';
import IEcharts from 'vue-echarts-v3'
import 'echarts/lib/chart/bar'
export default {
    components: {
        MyHeader,
        IEcharts
    },
    data() {
        return {
            documentTitle: document.title,
            bar: {
                tooltip: {},
                radar: {
                    name: {
                        textStyle: {
                            color: '#000',
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
        goDetail: function() {
            this.$router.push({ path: './compontDetail' });
        }
    }
}
</script>
<style lang="less" scoped>
@import './pinGu.less';
</style>

