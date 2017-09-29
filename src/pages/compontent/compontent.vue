<template>
    <div class="compont">
        <MyHeader :documentTitle="documentTitle"></MyHeader>
        <div class="compont__mes">
            <div class="compont__mount" v-for="(data, index) in amountArray">
                <div class="mount__circle">
                    <span>{{data.name}}</span>
                </div>
            </div>
            <div class="block">
                <img src="../../assets/images/icon_列表模式.png" alt="">
                <img src="../../assets/images/icon_开发者.png" alt="">
            </div>
            <div class="compont__plan">
                <div class="plan light" @click="goConfirm">
                    <h3>方案A</h3>
                    <p>最快|
                        <em>91.00</em>
                    </p>
                </div>
                <div class="plan">
                    <h3>方案B</h3>
                    <p>最省|
                        <em>86.00</em>
                    </p>
                </div>
                <div class="plan">
                    <h3>方案C</h3>
                    <p>适中|
                        <em>89.00</em>
                    </p>
                </div>
            </div>
            <div class="footer">
                <span>查看详情>></span>
                <div class="btn">
                    <img src="../../assets/images/icon_采纳.png"> 采纳
                </div>
            </div>
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
            amountArray: [
                {
                    name: 'XXXXXX'
                },
                {
                    name: 'XXXXXX'

                },
                {
                    name: 'XXXXXX'

                },
                {
                    name: 'XXXXXX'

                },
                {
                    name: 'XXXXXX'

                },
                {
                    name: 'XXXXXX'
                },
                {
                    name: 'XXXXXX'

                },
                {
                    name: 'XXXXXX'
                },
                {
                    name: 'XXXXXX'

                },
                {
                    name: 'XXXXXX'

                },
                {
                    name: 'XXXXXX'

                },
                {
                    name: 'XXXXXX'

                },
                {
                    name: 'XXXXXX'
                },
                {
                    name: 'XXXXXX'

                },
                {
                    name: 'XXXXXX'
                },
                {
                    name: 'XXXXXX'

                },
                {
                    name: 'XXXXXX'

                },
                {
                    name: 'XXXXXX'

                },
                {
                    name: 'XXXXXX'

                },
                {
                    name: 'XXXXXX'
                },
                {
                    name: 'XXXXXX'

                },
            ],


        }
    },
    created() {
        this.documentTitle = '量子评估';
    },
    methods: {
        goConfirm: function() {
            this.$router.push({ path: './planA' });

        }
    }
}
</script>
<style lang="less" scoped>
@import './compontent.less';
</style>

