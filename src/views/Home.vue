<template>
  <div id="dash-board">
    <div class="container">
      <!-- <ul>
        <li v-for="(history, index) in historys" :key="index">
          {{ history.name }} / {{ history.score }}
        </li>
      </ul>-->
      <div class="start-game">
        <button class="btn page-game" @click="nextPagetoGame">Start Game</button>
      </div>
      <!-- <router-view></router-view> -->
      <div class="history">
        <button class="btn page-history" @click="nextPagetoHistory">History</button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "dash-board",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    nextPagetoGame() {
      // eslint-disable-next-line no-undef
      //  Go to Game
      this.$router.push("game").catch(() => {});
    },
    nextPagetoHistory() {
      this.$router.push("history").catch(() => {});
    }
  }
};
</script>

<style lang="scss" scoped>
#dash-board {
  margin: 0;
}

.container {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    font-size: 2rem;
    margin: 1rem 0;
    width: 10em;
    padding: 1.5rem;
    border-radius: 20px;
    border: 2px solid #fff;
    background: none;
    transition: 0.5s ease-out width;
    font-weight: bold;
    font-family: (var(--font));
    color: #fff;
    cursor: pointer;
    background: white;
  }

  .page-game {
    // border: 5px solid #c389fa;
    color: #2cb978;
  }

  .page-game:hover {
    background: #2cb978;
    border: none;
    width: 10.5em;
    color: #fff;
  }

  .page-history {
    color: #be6a15;
  }

  .page-history:hover {
    background: #be6a15;
    border: none;
    width: 10.5em;
    color: #fff;
  }

  .btn:focus {
    outline: none;
  }
}
</style>
