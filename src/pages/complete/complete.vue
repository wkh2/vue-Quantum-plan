<template>
    <div class="complete">
        <MyHeader :documentTitle="documentTitle"></MyHeader>
        <div class="complete__icon">
            <div class="icon">
                <img src="../../assets/images/已完成.png" alt="">
            </div>
            <P>已采纳！</P>
        </div>
        <div class="complete__btn">
            <div class="btn" @click="myDemand">我的需求</div>
            <div class="btn two">返回方案</div>
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
        }
    },
    created() {
        this.documentTitle = '邀请评估';
    },
    methods: {
        myDemand: function() {
            this.$router.push({ path: './myDemand' });
        }
    }
}
</script>
<style lang="less" scoped>
@charset 'utf-8';
.complete {
    font-size: 12px;
    .complete__icon {
        .icon {
            line-height: 2rem;
            text-align: center;
            margin: 0 auto;
            margin-top: 1rem;
            img {
                height: 3rem;
            }
        }
        p {
            text-align: center;
            line-height: 1.5rem;
        }
    }
    .complete__btn {
        margin-left: 2rem;
        margin-top: 1rem;
        display: flex;
        .btn {
            background: #f02b2b;
            color: #fff;
            text-align: right;
            width: 2.5rem;
            border: 1px solid #ccc;
            line-height: .8rem;
            text-align: center;
            border-radius: .1rem;
        }
        .two {
            margin-left: 1.5rem;
        }
    }
}
</style>

