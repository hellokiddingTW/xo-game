<template>
  <div class="bg-theme">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="resultPage">
        <Scoreboard class="mt-6" />
        <div class="winnerDisplay position-relative">
         <router-view/>
        </div>
        <button class="btn btn-pinkRed w-100 Roboto-Condensed text-white mb-4" @click="restart()">
          RESTART
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Scoreboard from "../components/Scoreboard.vue";

export default {
  components: {
    Scoreboard,
  },
  methods:{
    restart(){
      this.$store.commit('RESTART', 1)
      this.$router.push('/')
    }
  }
};
</script>
<style lang="scss" scoped>
.resultPage {
  width: 540px;
}
.winnerDisplay {
  width: 540px;
  height: 540px;
}

.btn {
  font-size: 48px;
  border-radius: 8px;
}
</style>