<template>
    <div class="say">
        <MyHeader :documentTitle="documentTitle"></MyHeader>
        <div>
            <section class="say__tips">
               <div class="tips__photo"></div>
               <p class="tips__txt">请将商业对象放入框中</p>               
            </section>
            <footer>
                <input class="say__footer photo">
                <input type="text" class="say__say" value="拍照">
                <button class="say__footer"><img src="../../assets/images/icon_相册.png" alt=""></button>
            </footer>
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
        }
    },
    created() {
        let cl = document.getElementById('cl');
        this.documentTitle = '拍商业';

    },
    methods: {
       scamera(){
            this.$router.push({ path: './goAnthor' })    
       },
    }
}
</script>
<style lang="less" scoped>
@import './goAnthor.less';
</style>

