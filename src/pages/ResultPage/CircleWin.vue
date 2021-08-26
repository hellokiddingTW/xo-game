<template>
  <div>
    <div class="bigCircle"></div>
    <div>
      <h1 class="winner Roboto-Condensed fst-italic">WNNER!</h1>
    </div>
  </div>
</template>
<script>
import Scoreboard from "../../components/Scoreboard.vue";

export default {
  components: {
    Scoreboard,
  },
};
</script>
<style lang="scss" scoped>
.bigCircle {
  &::before {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-color: #ed494c;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &::after {
    content: "";
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background-color: #ff6d70;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.winner {
  position: absolute;
  font-size: 154px;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-text-fill-color: #ff6d70;
  -webkit-text-stroke: 3px #fff;
}
</style>