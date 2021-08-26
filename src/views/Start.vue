<template>
  <div>
    <div class="startPage container-fluid bg-black">
      <div class="gameArea">
        <div class="d-flex mb-30">
          <div
            class="
              fz-100
              text-white
              fw-bold
              Roboto-Condensed
              fst-italic
              lh-grid
              mr-30
            "
          >
            TIC
          </div>
          <div class="circle mr-30"></div>
          <div class="text-white  lh-grid hollow"></div>
        </div>
        <div class="d-flex mb-30">
          <div class="cross mr-30"></div>
          <div class="fz-100 text-white fw-bold lh-grid Roboto-Condensed
              fst-italic mr-30">TAC</div>
          <div class="hollowCircle"></div>
        </div>
        <div class="d-flex mb-30">
          <div class="hollowCircle mr-30"></div>
          <div class="cross mr-30"></div>
          <div class="fz-100 text-white fw-bold lh-grid Roboto-Condensed
              fst-italic">TOE</div>
        </div>
        <button class="startBtn Roboto-Condensed " @click="()=> this.$router.push(`/playBoard`)">START</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Start",
  components: {},
};
</script>


<style lang="scss" scoped>
.lh-grid {
  line-height: 160px;
}

.mr-30{
  margin-right: 30px;
}

.mb-30{
  margin-bottom: 30px;
}



.d-flex {
  > div {
    width: 160px;
    height: 160px;
  }
}

.fz-100 {
  font-size: 100px;
}

.circle {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ed494c;
  }
  &::after {
    content: "";
    width: 90px;
    height: 90px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #000;
  }
}

.hollowCircle {
   position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border:5px solid #ED494C;
  }
  &::after {
    content: "";
    width: 78px;
    height: 78px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border:5px solid #ED494C;
  }
}

.cross {
  position: relative;
  &::before {
    content: "×";
    position: absolute;
    font-size: 220px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    color: #ED494C;
    
  }
}

.hollow {
 position: relative;
  &::before {
    content: "×";
    position: absolute;
    font-size: 220px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    color: #fff;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 3px #fff;
  }
}

.startBtn {
  width: 100%;
  border-radius: 8px;
  height: 89px;
  font-size: 48px;
  color:#FF6D70;
  border-color:transparent;
  background-color: #fff;
}
</style>