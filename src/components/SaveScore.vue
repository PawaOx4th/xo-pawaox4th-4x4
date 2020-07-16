<template>
  <div id="saveScore">
    <div class="card-popup">
      <transition name="card-save">
        <form>
          <label for="username">User Name</label>
          <br />
          <input type="text" id="username" name="username" v-model="statistics.name" />
          <br />
          <br />
          <label id="labelScore" for="score">Score</label>
          <br />
          <input type="number" id="score" name="score" v-model="statistics.score" />
          <br />
          <br />
          <button class="card-save-btn" @click.prevent="handleSaveUser">Save</button>
        </form>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "saveScore",
  data() {
    return {
      statistics: {
        name: "",
        score: ""
      }
    };
  },
  methods: {
    handleSaveUser() {
      this.$store.dispatch("saveHisory", this.statistics);
      this.$emit("handleSaveUser");
    }
  }
};
</script>

<style lang="scss" scoped>
#saveScore {
  // background: rgba(0, 162, 255, 0.705);
  z-index: 99;
}

.card-popup {
  border-radius: 1rem;
  padding: 2rem;
  z-index: 99;
  color: #fff;
  background: #313d5a;

  label {
    font-size: 1.3rem;
    font-weight: bold;
  }

  input {
    font-size: 1.2rem;
    padding: 0.5rem;
    border: none;
    border-radius: 16px;
    padding: 1.2rem;
    margin: 0.5rem 0 0 0;
    font-family: "Nunito", sans-serif !important;
    color: #313d5a;
  }

  input:focus {
    outline: none;
  }

  .card-save-btn {
    display: block;
    width: 100%;
    height: 3rem;
    border-radius: 1rem;
    border: none;
    outline: none;
    background: transparent;
    border: 3px solid #17b978;
    font-size: 1.3rem;
    color: #fff;
    transition: 0.35s ease-out background;
    font-family: "Nunito", sans-serif !important;
    font-weight: bold;
  }

  .card-save-btn:hover {
    background: #1ae694;
    border: none;
    // box-shadow: 2.5px 5px 25px rgba(255, 255, 255, 0.554),
    //   0 1px 6px rgba(255, 255, 255, 0.698);
    color: black;
  }
}
</style>
