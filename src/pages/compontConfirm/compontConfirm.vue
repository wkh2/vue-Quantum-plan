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
                <img src="../../assets/images/icon_邀请.png" alt="">
                <img src="../../assets/images/icon_返回.png" alt="">
            </div>
        </div>
        <div class="footer">
            <span>评分：_ _</span>
            <div class="btn one">
                <img src="../../assets/images/icon_点评.png" class="img1" alt="">
                <span @click="commentShow">点评</span>
            </div>
            <div class="btn" @click="complete">
                <img src="../../assets/images/icon_评估.png" class="img2" alt="">采纳</div>
        </div>
        <comment v-show="show"></comment>
        <canvas id="canvas"></canvas>
    </div>
</template>
<script>
import MyHeader from '../../components/Header/header.vue';
import comment from '../../components/comment/comment.vue';

export default {
    components: {
        MyHeader,
        comment
    },
    data() {
        return {
            show: false,
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
        complete: function() {
            this.$router.push({ path: './complete' });
        },
        commentShow: function() {
            this.show = true;
            //this.$router.push({ path: './complete' });            
        },
    }
}
</script>
<style lang="less" scoped>
@import './compontConfirm.less';
</style>

