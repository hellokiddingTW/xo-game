<template>
  <div>
    <div>
      <div class="bigCross"></div>
      <div class="bigCircle"></div>
    </div>
    <div class="textWrap d-flex flex-column">
      <h1 class="winner Roboto-Condensed fst-italic">DREW!</h1>
      <h1 class="winner Roboto-Condensed fst-italic">DREW!</h1>
      <h1 class="winner Roboto-Condensed fst-italic">DREW!</h1>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.winnerDisplay {
  width: 540px;
  height: 540px;
}

.bigCross {
  &::before {
    content: "";
    position: absolute;
    width: 220px;
    height: 25px;
    top: 50%;
    right: -10%;
    transform: translate(-50%, -50%) rotate(45deg);
    background-color: #ed494c;
  }
  &::after {
    content: "";
    position: absolute;
    width: 220px;
    height: 25px;
    top: 50%;
    right: -10%;
    transform: translate(-50%, -50%) rotate(-45deg);
    background-color: #ed494c;
  }
}

.bigCircle {
  &::before {
    content: "";
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: #ed494c;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
  }
  &::after {
    content: "";
    position: absolute;
    width: 145px;
    height: 145px;
    border-radius: 50%;
    background-color: #ff6d70;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
  }
}

.textWrap {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.winner {
  font-size: 154px;
  color: #fff;
  -webkit-text-fill-color: #ff6d70;
  -webkit-text-stroke: 3px #fff;
}
</style>