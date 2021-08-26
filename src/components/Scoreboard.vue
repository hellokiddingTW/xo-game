<template>
<div>
   <div class="scoreBoard d-flex align-items-end">
          <div class="player br-left text-white" :class="this.$store.state.player==1?'bg-pinkRed':'bg-black'">O</div>
          <div class="score Roboto-Condensed border-right-0">{{circleScore}}</div>
          <div class="vs text-white bg-black">vs</div>
          <div class="score Roboto-Condensed border-left-0">{{crossScore}}</div>
          <div class="player text-white bg-black br-right" :class="this.$store.state.player== -1?'bg-pinkRed':'bg-black'">X</div>
        </div>
        <div class="d-flex  mt-2 w-100">
          <p class="Roboto-Condensed text-white" v-if="this.$store.state.player === 1">YOUR TURN!</p>
          <p class="Roboto-Condensed text-white ms-auto" v-else>YOUR TURN!</p>
        </div>
</div>
</template>

<script>
export default {
data(){
  return{
circleScore:0,
crossScore:0,
  }
},
  methods:{  
    getWinTimes(){
      console.log('12345')
      this.circleScore= Number(localStorage.getItem('circleWin'))||0
      this.crossScore = Number(localStorage.getItem('crossWin'))||0
    }
  },
  created(){
    this.getWinTimes()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.player {
  width: 64px;
  height: 64px;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
}

.br-left {
  border: 4px solid #000000;
  border-radius: 8px 0px 0px 8px;
  border-right: none;
}

.br-right {
  border: 4px solid #000000;
  border-radius: 0px 8px 8px 0px;
  border-left: none;
}

.score {
  height: 64px;
  width: 179px;
  border: 4px solid #000000;
  font-size: 58px;
  text-align: center;
  line-height: 58px;
  background-color: #fff;
}

.border-left-0 {
  border-left: none;
}

.border-right-0 {
  border-right: none;
}

.vs {
  width: 70px;
  height: 71px;
  border-radius: 8px 8px 0px 0px;
  font-size: 20px;
  text-align: center;
  line-height: 71px;
}

</style>
