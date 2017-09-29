<template>
    <div class="anthor">
        <MyHeader :documentTitle="documentTitle"></MyHeader>
        <div class="anthor__main" v-show="show">
            <div class="main__child">
                <div class="child__title" @click="goAnthor">
                    <span>补充活动需求</span>
                </div>
                <div class="child__txt">
                    <textarea>你还可以补充内容： </textarea>
                    <div>
                        <span class="txt__tips">还能输入100字</span>
                        <span class="say__tips">语音</span>
                    </div>
                </div>
                <div class="child__img">
                    <div class="img__photo1">照片</div>
                    <div class="img__photo1 photo_color" @click="changeImg()">
                        <img src="../../assets/images/add.png" />
                        <!-- <input id="img_input" type="file" accept="image/*"/> -->
                        </div>
                </div>
                <div class="child__footer">
                    <p class="footer__tit">推荐需求标签</p>
                    <div class="footer__tips">
                        <div class="footer__block" v-for="(value,index) in amountArray" :class="{light:index==4}">{{value}}</div>
                        <!-- <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide slide" v-for="value in amountArray">
                                            <div class="footer__block">{{value}}</div>
                                        </div>
                                    </div>
                                    <div class="swiper-pagination"></div>
                                </div> -->
                    </div>
                    <div class="footer__confrim" @click="goAnthor">
                        确定
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MyHeader from '../../components/Header/header.vue';
import '../../utils/swiper-3.3.1.js';
export default {
    components: {
        MyHeader
    },
    data() {
        return {
            show: true,
            documentTitle: document.title,
            amountArray: []
        }
    },
    created() {
        this.documentTitle = '写商业';
        for (let i = 0; i < 9; i++) {
            this.amountArray[i] = i + 1;
        }
    },
    mounted() {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 3,
            slidesPerColumn: 2,
            paginationClickable: true,
            spaceBetween: 30
        });
    },
    methods: {
        goAnthor: function() {
            this.show = false;
        },
        changeImg() {
            //
        }
    }
}
</script>
<style lang="less" scoped>
@import './close.less';
</style>

