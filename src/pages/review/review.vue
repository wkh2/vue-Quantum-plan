<template>
    <div class="review">
        <MyHeader :documentTitle="documentTitle"></MyHeader>
        <div class="review__content">
            <div class="content__icon">
                <span class="name">XXXXXXX</span>
                <span class="date">2017-05-06</span>
            </div>
            <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
            </p>
        </div>
        <div class="review__content all">
            <div class="content__icon icon2">
                <span class="name">XXXXXXX</span>
                <span class="date">2017-05-06</span>
            </div>
            <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
            </p>
        </div>
        <div class="review__content all">
            <div class="content__icon icon3">
                <span class="name">XXXXXXX</span>
                <span class="date">2017-05-06</span>
            </div>
            <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
            </p>
        </div>
    </div>
</template>
<script>
import MyHeader from '../../components/Header/header.vue';
import Vue from 'vue'
export default {
    components: {
        MyHeader
    },
    data() {
        return {
        }
    },
    created() {
        this.documentTitle = '评论';

    },
    methods: {
    }
}
</script>
<style lang="less" scoped>
@import './review.less';
</style>

