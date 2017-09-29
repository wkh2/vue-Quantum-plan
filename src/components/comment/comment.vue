<template>
    <div class="anthor">
        <MyHeader :documentTitle="documentTitle"></MyHeader>
        <div class="anthor__main" v-show="show">
            <div class="main__child">
                <div class="child__title" @click="goAnthor">
                    <span>点评意见</span>
                </div>
                <div class="child__txt">
                    <textarea>你还可以补充内容： </textarea>
                </div>
                <div class="child__footer">
                    <div class="footer__confrim" @click="goAnthor">
                        保存
                    </div>
                    <div class="footer__confrim" @click="goAnthor">
                        发送至
                    </div>
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
            show: true,
            documentTitle: document.title,
        }
    },
    created() {
        this.documentTitle = '写商业';
       
    },
    mounted() {
       
    },
    methods: {
        goAnthor: function() {
            this.show = false;
        },
    }
}
</script>
<style lang="less" scoped>
@import './comment.less';
</style>

