<template>
    <div class="demand">
        <MyHeader :documentTitle="documentTitle"></MyHeader>
        <div class="demand__head">
            <div class="head__icon"></div>
            <div class="head__txt">
                <p class="one">组件名称:
                    <span></span>
                </p>
                <p>应用流程:
                    <span></span>
                </p>
                <p>版本编号:
                    <span></span>
                </p>
                <p>综合评分:
                    <span></span>
                </p>
            </div>
        </div>
        <div class="page-navbar">
            <!-- navbar -->
            <mt-navbar class="page-part nav__border" v-model="selected">
                <mt-tab-item class="border" id="1">产品介绍</mt-tab-item>
                <mt-tab-item class="border" id="2">技术文档</mt-tab-item>
                <mt-tab-item class="border" id="3">改造评估</mt-tab-item>
            </mt-navbar>
            <!-- tabcontainer -->
            <mt-tab-container v-model="selected">
                <div class="line"></div>
                <div class="line2"></div>
                <mt-tab-container-item id="1" class="block">
                    <div class="left">
                        <div class="one all"></div>
                        <div class="two all"></div>
                        <div class="three all"></div>

                    </div>
                    <div class="right">
                        <div class="content first">
                            <h3>功能说明</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
                            </p>
                        </div>
                        <div class="content">
                            <h3>维护团队</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
                            </p>
                        </div>
                        <div class="content">
                            <h3>常见问题</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
                            </p>
                        </div>
                    </div>

                </mt-tab-container-item>

                <mt-tab-container-item id="2" class="block">
                    <div class="left">
                        <div class="one all"></div>
                        <div class="two all"></div>
                        <div class="three all"></div>

                    </div>
                    <div class="right">
                        <div class="content first">
                            <h3>功能说明</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
                            </p>
                        </div>
                        <div class="content">
                            <h3>技术规范</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
                            </p>
                        </div>
                        <div class="content">
                            <h3>对接流程</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
                            </p>
                        </div>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="3" class="block">
                    <div class="left">
                        <div class="one all"></div>
                        <div class="two all"></div>
                        <div class="three all"></div>

                    </div>
                    <div class="right">
                        <div class="content first">
                            <h3>改造范围</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
                            </p>
                        </div>
                        <div class="content">
                            <h3>上下游系统</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
                            </p>
                        </div>
                        <div class="content">
                            <h3>对接流程</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
                            </p>
                        </div>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import MyHeader from '../../components/Header/header.vue';
import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
export default {
    components: {
        MyHeader,
        Navbar,
    },
    data() {
        return {
            documentTitle: document.title,
            selected: '1',
            data: [],
            contentArray: [
                {
                    name: '1.XXXXXX',
                    status: '直接可用'
                },
                {
                    name: '2.XXXXXX',
                    status: '直接可用'
                },
                {
                    name: '3.XXXXXX',
                    status: '需调整'
                },
                {
                    name: '4.XXXXXX',
                    status: '需调整'
                },
                {
                    name: '5.XXXXXX',
                    status: '直接可用'
                }
            ]
        }
    },
    created() {
        this.documentTitle = '量子评估';
        Vue.http.get('/localhost:8080/' + this.data).then(response => {
            let res = response.body;
            if (res.code == 200) {
                console.log(res);
            }
        })
    },
    methods: {
        pinGuClick: function() {
            this.$router.push({ path: './pinGu' });

        },
        goConfirm: function() {
            //this.$router.push({ path: './pinGu' });

        }
    }
}
</script>
<style lang="less" scoped>
@import './compontDetail.less';
</style>

