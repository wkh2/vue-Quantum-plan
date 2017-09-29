<template>
  <div class="nav">
    <ul>
      <li :class="{cur: tab == 0}" @click="jump(0)">
        <span class="icon movie"></span>
        <span class="txt">Film</span>
      </li>
      <li :class="{cur: tab == 1}" @click="jump(1)">
        <span class="icon cinema"></span>
        <span class="txt">Bioskop</span>
      </li>
      <li :class="{cur: tab == 2}" @click="jump(2)">
        <span class="icon my"></span>
        <span class="txt">Pesanan Saya</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['tab'],
  methods: {
    jump(idx) {
      if (idx == this.tab) {
        return
      }
      if (idx == 1) {
        this.$router.push({ path: 'cinemaList' });
        console.log(ga)
        ga('send', 'event', 'm_movie_Bioskop', 'click', 'null');
      } else if (idx == 2) {
        this.$router.push({ path: 'myOrders' });
        ga('send', 'event', 'm_movie_Pesanan_Say', 'click', 'null');
      } else {
        this.$router.push({ path: '/' });
      }

    }
  }
}
</script>
<style lang="less" scoped>
@import "./nav.less";
</style>