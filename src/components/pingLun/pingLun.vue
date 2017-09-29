<template>
    <div>
        <div class="anthor__main" v-show="show">
            <div class="main__child">
                <div class="child__title" @click="close"><img src="../../assets/images/close.png" /></div>
                <input type="text" class="chlid__txt" placeholder="为你的商业模式起个名字">
                <div class="footer__confrim" @click="saveClick">
                    确定
                </div>
            </div>
        </div>
        <div class="save" v-show="save">
            <p>保存成功</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: true,
            save: false,
        }
    },
    methods: {
        close: function() {
            this.show = false;
        },
        saveClick: function() {
            this.save = true;
            this.show = false;
            setTimeout(() => {
                this.save = false;
            }, 1000);
        },
    }
}
</script>

<style lang="less" scoped>
@charset 'utf-8';
.anthor__main {
    font-size: 12px;
    position: absolute;
    top: 0rem;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 99;
    .main__child {
        height: 4rem;
        width: 8rem;
        margin: 0 auto;
        position: relative;
        top: 5.7rem;
        background: #fff;
        .child__title {
            text-align: right;
            & img {
                width: .6rem;
                height: .6rem;
            }
        }
        .chlid__txt {
            width: 6rem;
            height: 1rem;
            border: 2px solid #ccc;
            margin-left: 1rem;
            margin-top: .3rem;
            border-radius: .2rem;
        }
        .footer__confrim {
                border-radius: .2rem;
            width: 2rem;
            height: .8rem;
            line-height: .8rem;
            text-align: center;
            border: 1px solid #ccc;
            background: #ff4a4a;
            box-shadow: 0 0 4px 0 rgba(0, 0, 0, .3);
            margin-left: 3rem;
            margin-top: .5rem;
        }
    }
}

.save {
    font-size: 12px;
    position: absolute;
    text-align: center;
    bottom: 7rem;
    left: 2rem;
    background: rgba(0, 0, 0, .6);
    width: 6rem;
    height: 3.5rem;
    line-height: 3.5rem;
    color: #fff;
    border-radius: .2rem;
}
</style>
