<template>
  <div>
    <div class="startPage container-fluid bg-theme">
      <div class="gameArea">
        <Scoreboard />
        <div class="board">
          <div
            v-for="(grid, index) in 9"
            :key="index"
            class="grid"
            @click="turn(index)"
          >
            <div
              :class="
                grids[index].status == 0
                  ? ''
                  : grids[index].status == 1
                  ? 'circle'
                  : 'cross'
              "
            ></div>
          </div>
        </div>
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
  data() {
    return {
      winCombin: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
      grids: [
        { index: 0, status: 0 },
        { index: 1, status: 0 },
        { index: 2, status: 0 },
        { index: 3, status: 0 },
        { index: 4, status: 0 },
        { index: 5, status: 0 },
        { index: 6, status: 0 },
        { index: 7, status: 0 },
        { index: 8, status: 0 },
      ],
      // player: 1,
      clickTimes: 0,
      winRecord:{
        circleWin:0,
        crossWin:0
      }
    };
  },
  watch: {
    clickTimes: function () {
      if (this.clickTimes == 9) {
        this.$router.push("/result/Draw");
      }
    },
  },
  methods: {
    turn(index) {
      if (this.grids[index].status !== 0) return;
      this.grids[index].status = this.$store.state.player
      this.winCheck();
      this.$store.commit('CHANGE')
      this.clickTimes += 1;
    },

    winCheck() {
      this.winCombin.filter((item) => {
        let [a, b, c] = item;
        console.log(a, b, c);
        let winNum =
          this.grids[a].status + this.grids[b].status + this.grids[c].status;
        winNum == 3
          ? this.gotoWin('/result/circlewin','circleWin')
          : winNum == -3
          ? this.gotoWin('/result/crosswin','crossWin')
          : console.log("nowin");
      });
    },
    gotoWin(path,winner) {
      console.log(this.winRecord[winner])
      this.winRecord[winner]+= 1
      localStorage.setItem(winner, JSON.stringify(this.winRecord[winner]))
      this.$router.push(path);
    },

    getWinTimes(){
      console.log('12345')
      this.winRecord.circleWin = Number(localStorage.getItem('circleWin'))||0
      this.winRecord.crossWin = Number(localStorage.getItem('crossWin'))||0

    }
  },
  created(){
    console.log('created壞了ㄇ')
    this.getWinTimes()
  }
};
</script>

<style lang="scss" scoped>
.board {
  width: 540px;
  height: 540px;
  display: flex;
  flex-wrap: wrap;
}

.grid {
  width: 180px;
  height: 180px;
  position: relative;
  &:nth-child(2) {
    &::after {
      content: "";
      width: 540px;
      height: 8px;
      position: absolute;
      bottom: 0;
      background-color: #ed494c;
      left: -180px;
    }
  }
  &:nth-child(4) {
    &::after {
      content: "";
      width: 8px;
      height: 540px;
      position: absolute;
      top: -180px;
      background-color: #ed494c;
      left: 180px;
    }
  }
  &:nth-child(6) {
    &::after {
      content: "";
      width: 8px;
      height: 540px;
      position: absolute;
      top: -180px;
      background-color: #ed494c;
      left: 0px;
    }
  }
  &:nth-child(8) {
    &::after {
      content: "";
      width: 540px;
      height: 8px;
      position: absolute;
      top: 0;
      background-color: #ed494c;
      left: -180px;
    }
  }
}

.circle {
  &::before {
    content: "";
    width: 65px;
    height: 65px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #000;
  }
  &::after {
    content: "";
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ff6d70;
  }
}
.cross {
  &::before {
    content: "×";
    position: absolute;
    font-size: 120px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    color: #fff;
  }
}
</style>