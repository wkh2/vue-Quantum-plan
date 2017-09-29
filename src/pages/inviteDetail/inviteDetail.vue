<template>
    <div class="detail">
        <MyHeader :documentTitle="documentTitle"></MyHeader>
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
        this.documentTitle = '邀请评估';

    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
</style>

