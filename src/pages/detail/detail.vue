<template>
    <div class="detail">
        <MyHeader :documentTitle="documentTitle"></MyHeader>
        <div class="detail__top all">
            <p>完整度
                <span v-if="!show">30%</span>
                <span v-else>80%</span>
            </p>
        </div>
        <div class="detail__slide1 all">
            <h3 class="slide1__txt">黄金流程</h3>
        </div>
        <div class="detail__slide2 all">
            <div class="slide2__flex">
                <div class="slide2__cont" v-for="(data, index) in dataArray" @click="updateCurIndex(index)" :class="{'active': currentIndex === index}">{{data.txt}}</div>
            </div>
            <div class="slide2__flex">
                <div class="slide2__cont">3.渠道通路</div>
                <div class="slide2__cont light" @click="goAnthor">4.客户关系</div>
            </div>
            <h3 class="slide2__txt">核心资源</h3>
        </div>
        <div class="detail__slide3 all">
            <div class="slide3__flex">
                <div class="slide3__cont light" @click="goAnthor">1.核心资源</div>
                <div class="slide3__cont">2.关键活动</div>
                <div class="slide3__cont">3.重要伙伴</div>
            </div>
            <h3 class="slide3__txt">预期收益</h3>
        </div>
        <div class="detail__slide4 all">
            <div class="slide4__flex">
                <div class="slide4__cont">1.收本结构</div>
                <div class="slide4__cont light">2.收入来源</div>
            </div>
            <h3 class="slide4__txt">环境因素</h3>
        </div>
        <div class="detail__slide5">
            <div class="slide5__flex">
                <div class="slide5__cont">1.财务</div>
                <div class="slide5__cont light" @click="goAnthor">2.税务</div>
                <div class="slide5__cont light" @click="goAnthor">3.法务</div>

            </div>
        </div>
        <div class="detail__btn" @click="goInvite">提交</div>
        <Close v-show="show"></Close>
        <Loading v-show="loading"></Loading>
        <div class="detail__footer"> </div>
    </div>
</template>
<script>
import MyHeader from '../../components/Header/header.vue';
import Loading from '../../components/loading/loading.vue';
import Close from '../../components/close/close.vue';

export default {
    components: {
        MyHeader,
        Close,
        Loading

    },
    data() {
        return {
            loading: false,
            show: false,
            currentIndex: 0,
            documentTitle: document.title,
            dataArray: [
                {
                    txt: '1.客户细分',
                },
                {
                    txt: '2.价值主张',
                },
            ]
        }
    },
    created() {
        this.documentTitle = '写商业';

    },
    methods: {
        updateCurIndex: function(index) {
            this.show = true;
            this.currentIndex = this.currentIndex === index ? -1 : index;
        },
        goAnthor: function() {
            if (!this.show) {
                this.show = true;
            }
        },
        goInvite: function() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.$router.push({ path: './invite' })
            }, 2000)
        }
    }
}
</script>
<style lang="less" scoped>
@import './detail.less';
</style>

