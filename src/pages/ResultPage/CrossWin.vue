<template>
    <div>
          <div class="bigCross"></div>
          <div>
            <h1 class="winner Roboto-Condensed fst-italic">WNNER!</h1>
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
    width: 400px;
    height: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%) rotate(45deg);
    background-color: #ed494c;
  }
  &::after {
    content: "";
    position: absolute;
    width: 400px;
    height: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%) rotate(-45deg);
    background-color: #ed494c;
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