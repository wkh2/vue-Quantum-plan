<template>
    <div class="index">
        <MyHeader :documentTitle="documentTitle"></MyHeader>
        <section class="swiper-container container-heder">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../assets/images/banner图.jpg">
                </div>
            </div>
            <div class="swiper-pagination swiper-header"></div>
        </section>
        <section class="index__banner">
            <div class="banner__icon">
                <i class="icon icon1"></i>
                <span class="banner__icon_right">我的需求</span>
            </div>
            <div class="banner__icon" @click="goSay()">
                <i class=" icon icon2"></i>
                <span class="banner__icon_right">发布需求</span>
            </div>
        </section>
        <h3>智慧领地</h3>
        <section class="index__content">
            <div class="content__icon">
                <div class="content__img icon1"><img src="../../assets/images/icon_心得交流.png" class="img__icon"></div>
                <p class="content__txt txt1">心得交流</p>
            </div>
            <div class="content__icon">
                <div class="content__img icon2"><img src="../../assets/images/icon_经典案例.png" class="img__icon2"></div>
                <p class="content__txt txt2">经典案例</p>
            </div>
            <div class="content__icon">
                <div class="content__img icon3"><img src="../../assets/images/icon_组件市场.png" class="img__icon"></div>
                <p class="content__txt txt3">组件市场</p>
            </div>
            <!-- <div class="swiper-container index__container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide index__slide">
                            <div class="content__icon">
                                <div class="content__img"> </div>
                                <p class="content__txt">心得交流</p>
                            </div>
                        </div>
                        <div class="swiper-slide index__slide">
                            <div class="content__icon">
                                <div class="content__img"> </div>
                                <p class="content__txt">经典案例</p>
                            </div>
                        </div>
                        <div class="swiper-slide index__slide">
                            <div class="content__icon">
                                <div class="content__img"> </div>
                                <p class="content__txt">组件市场</p>
                            </div>
                        </div>
                        <div class="swiper-slide index__slide">
                            <div class="content__icon">
                                <div class="content__img"> </div>
                                <p class="content__txt">中台海外</p>
                            </div>
                        </div>
                        <div class="swiper-slide index__slide">
                            <div class="content__icon">
                                <div class="content__img"> </div>
                                <p class="content__txt">中台海外</p>
                            </div>
                        </div>
                        <div class="swiper-slide index__slide">
                            <div class="content__icon">
                                <div class="content__img"> </div>
                                <p class="content__txt">中台海外</p>
                            </div>
                        </div>
                    </div>
                </div> -->
        </section>
        <h3>最佳实践</h3>
        <section class="index__footer">
            <div class="footer footer1">
            </div>
            <div class="footer__container2">
                <img src="../../assets/images/pic_最佳实践.png" alt="">
            </div>
            <div class="footer footer2">
            </div>
            <!-- <div class="swiper-container index__container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide index__slide">
                        <div class="footer__container2"> </div>
                    </div>
                    <div class="swiper-slide index__slide">
                        <div class="footer__container2"> </div>
                    </div>
                    <div class="swiper-slide index__slide">
                        <div class="footer__container2"> </div>
                    </div>
                    <div class="swiper-slide index__slide">
                        <div class="footer__container2"> </div>
                    </div>
                    <div class="swiper-slide index__slide">
                        <div class="footer__container2"> </div>
                    </div>
                    <div class="swiper-slide index__slide">
                        <div class="footer__container2"> </div>
                    </div>
                </div>
            </div> -->
        </section>
    </div>
</template> 
<script>
import Vue from 'vue';
import '../../utils/swiper-3.3.1.js';
import Cache from '../../utils/cache.js';
import MyHeader from '../../components/Header/header.vue';
export default {
    components: {
        MyHeader,
    },
    data() {
        return {
            documentTitle: document.title,
            bannerList: ['http://localhost:8080/src/assets/images/banner图.jpg']

        }
    },
    created() {
        this.documentTitle = '量子计划';
    },
    mounted() {
        this.$nextTick(() => {
            this.swiperSlide();
        })
    },
    methods: {
        swiperSlide() {
            var mySwiper = new Swiper('.container-heder', {
                pagination: '.swiper-header',   //如果需要分页器
                autoplay: 2000,                     //过渡延迟时间（单位ms），自动滑动时slide的停留时间
                loop: true,              //一种模式,循环播放
                observer: true,                        //修改swiper的子元素时自动初始化swiper
                observeParents: true,                  //resize重新启动autoplay
                autoplayDisableOnInteraction: false,  //用户操作swiper之后,重新启动autoplay
            });
            var swiper = new Swiper('.index__container', {
                pagination: '.swiper-footer',
                slidesPerView: 3,
                paginationClickable: true,
                spaceBetween: 30
            });
        },
        goSay() {
            this.$router.push({ path: './goSay' });
        }
    }
}
</script>
<style lang="less" scoped>
@import "./index.less";
</style>