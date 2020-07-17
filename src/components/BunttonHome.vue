<template>
  <div id="button-game">
    <button class="btn" @click="nextPagetoHome">Home</button>
  </div>
</template>

<script>
export default {
  name: "button-game",
  methods: {
    nextPagetoHome() {
      // eslint-disable-next-line no-undef
      //  Go to Game
      this.$router.push("/home").catch(() => {});
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Nunito", sans-serif;
}
.btn {
  width: 20rem;
  height: 5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  color: #fff;
  background: #00e0ff;
  transition: 0.35s ease-out;
  border-radius: 20px;
  outline: none;
  margin-bottom: 1rem;

  &:hover {
    background: #fff;
    color: #00e0ff;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
}
</style>