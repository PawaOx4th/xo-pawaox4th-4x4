<template>
  <div class="game">
    <div class="game-area">
      <div class="game-title">
        <img src="@/assets/logo.png" alt="Vue" />
        <p>XO Game</p>
      </div>

      <div class="game-info">
        <!-- รอบของ  X -->
        <div v-if="stepNumber === 0">
          Round of &nbsp;&nbsp;&nbsp;&nbsp;
          <p :class="currentPlayer">{{ currentPlayer }}</p>
        </div>
        <!-- ชนะ -->
        <div v-else-if="!!winner">
          &nbsp;
          <p :class="currentPlayer">{{ currentPlayer }} Winner</p>&nbsp;
          <!-- <button @click="restart">New Game</button> -->
        </div>
        <!-- เสมอ -->
        <div v-else-if="stepNumber > 13">
          Draw&nbsp;
          <button @click="restart">New Game</button>
        </div>
        <!-- รอบของ  Y -->
        <div v-else>
          Round of &nbsp;
          <p :class="currentPlayer">{{ currentPlayer }}</p>&nbsp;
        </div>
      </div>

      <div class="board-score">
        <board :squares="squares" :winner="winner" :status="blankClass" @click="click" />
        <SaveScore v-if="!!winner" class="save-score" @handleSaveUser="handleSaveUser" />
      </div>
    </div>

    <!-- Save Score Section -->
  </div>
</template>

<script>
export default {
  name: "game",
  components: {
    Board: () => import("../components/Board"),
    SaveScore: () => import("../components/SaveScore")
  },
  data() {
    return {
      squares: Array(16).fill(null),
      stepNumber: 0,
      currentPlayer: "X",
      winner: null,
      blankClass: true,
      userWinner: {
        name: "",
        score: 0
      }
    };
  },
  mounted() {
    this.setBlank();
  },
  computed: {
    state() {
      return this.$store.state.history;
    }
  },
  methods: {
    handleSaveUser() {
      this.restart();
      console.log("222");
    },

    handleStore() {
      this.$store.dispatch("saveHisory", this.userWinner);

      this.restart();
    },

    hasWinner() {
      if (this.winner) return true;
      const squares = this.squares;
      const matches = [
        [0, 5, 10, 15],
        [3, 6, 9, 12],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 3, 12, 15]
      ];
      for (let i = 0; i < matches.length; i++) {
        const [a, b, c, d] = matches[i];
        if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c] &&
          squares[a] == squares[d]
        ) {
          this.winner = [a, b, c, d];
          return true;
        }
      }

      return false;
    },

    restart() {
      //   Restart Game
      this.squares = Array(16).fill(null);
      this.stepNumber = 0;
      this.setBlank();
      // eslint-disable-next-line no-self-assign
      this.currentPlayer = this.currentPlayer;
      this.winner = null;
    },

    click(i) {
      //  Function Click เลือก X หรือ O ในช่องที่เลือก
      if (this.squares[i] || this.winner) return;
      this.$set(this.squares, i, this.currentPlayer);
      if (!this.hasWinner()) {
        this.stepNumber++;
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      }
    },

    setBlank() {
      //  Function สุ่มปิดช่อง  1 ช่อง
      //  min : คือค่าเลขต่ำสุดที่จะทำการ random
      //  max : คือค่าเลขสูงสุดที่จะทำการ random
      const min = 0;
      const max = 15;

      //  เรียก function ทำการ random เลขเพื่อทำการ ปิดช่อง
      let randomNumberinRange = this.renDomMunber(min, max);
      this.squares[randomNumberinRange] = "blank";
      // console.log("setBlank -> this.squares", this.squares)
    },

    renDomMunber(min, max) {
      //  function ทำการ random เลข โดยรับ
      //  min : ค่าเลขต่ำสุดที่จะเริ่ม random ได้
      //  max : ค่าเลขสูงสุดที่จะ random ไม่เกิน
      return Math.floor(Math.random() * (max - min) + min);
    }
  }
};
</script>

<style scoped>
.save-score {
  padding: 2rem;
}

.board-score {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.game {
  /* background-color: rgba(var(--gradient-color-base)); */
  /* background-image: linear-gradient(
    to bottom,
    rgb(41, 128, 185),
    rgb(109, 213, 250),
    rgb(29, 103, 151)
  ); */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-area {
  display: flex;
  flex-flow: column;
  z-index: 1;
}

.game-title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 3vmin;
}

.game-title img {
  margin: 0 12px 0 -20px;
  width: 40px;
  filter: drop-shadow(-1px 1px 0 #0007) drop-shadow(1px -1px 0 #0007)
    drop-shadow(1px 1px 0 #0007);
}

.game-title p {
  margin: 0;
  font-size: 3em;
  font-weight: 800 !important;
  color: rgba(var(--theme-color));
  text-shadow: -1px -1px 1px #000b, -1px 1px 1px #000b, 1px -1px 1px #000b,
    1px 1px 1px #000b;
}

.game-info {
  margin: 0 0 3vmin 0;
  padding: 1rem 0.5rem;
  font-size: 1.25em;
  text-align: center;
  box-shadow: 2.5px 5px 25px #0001, 0 1px 6px #0004;
  text-shadow: 0 0 1px #fff, 0 2px 5px #fff5;
  border-radius: 0.5rem;
  backdrop-filter: blur(10px);
  background: #fff6;
  background-blend-mode: exclusion;
  background-image: var(--noise-pattern);
  color: #111;
}

.game-info p {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-info {
  font-weight: bold;
}

.game-info .X,
.game-info .O {
  text-shadow: -1px -1px 0 #000b, -1px 1px 0 #000b, 1px -1px 0 #000b,
    1px 1px 0 #000b;
}

.game-info .X {
  color: #ff5722;
  font-size: 2rem;
}

.game-info .O {
  color: #ffeb3b;
  font-size: 2rem;
}

.game-info button {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.75em;
  padding: 0.5rem 1rem;
  margin: -0.5rem 0 -0.5rem 1rem;
  border: 2px solid #fff;
  background: #fff5;
  text-shadow: 0 0 1px #fff, 0 2px 5px #fff5;
  color: #111;
  cursor: pointer;
  outline: none;
  transition: all 0.25s ease;
}

.game-info button:focus,
.game-info button:hover {
  background: #1115;
  border-color: rgba(var(--theme-color));
  box-shadow: 0 0 10px rgba(var(--theme-color), 0.75);
  color: rgba(var(--theme-color));
  text-shadow: -1px -1px 0 #0007, -1px 1px 0 #0007, 1px -1px 0 #0007,
    1px 1px 0 #0007;
}

.game-info button:active {
  background: #1119;
}

.save-user {
  z-index: 10;
}
</style>
