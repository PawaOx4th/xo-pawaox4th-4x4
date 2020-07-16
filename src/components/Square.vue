<template>
  <button
    class="square"
    :class="[value, { winner: winner }, { status: status }]"
    :disabled="disabled"
    @click="click"
  >{{ value }}</button>
</template>

<script>
export default {
  name: "Square",
  props: {
    value: String,
    winner: Boolean,
    disabled: Boolean,
    status: Boolean
  },
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
.square {
  background: #f8f4e3;
  background-blend-mode: exclusion;
  background-image: var(--noise-pattern);
  border: 2px solid #353a47;
  font-size: 15vmin;
  font-weight: bold;
  line-height: 34px;
  padding: 0;
  text-align: center;
  box-shadow: inset 0 0 0 #0004;
  /* text-shadow: -1px -1px 1px #000b, -1px 1px 1px #000b, 1px -1px 1px #000b, 1px 1px 1px #000b; */
  transition: all 0.25s ease;
  outline: none;
}

.square.winner {
  background: #000;
}

.square:not([disabled]):empty:hover,
.square:not([disabled]):empty:focus {
  box-shadow: inset 0 2px 25px #34373f;
  cursor: pointer;
}

.square:not([disabled]):empty:active {
  box-shadow: inset 0 2px 50px #0008;
}

.square.blank {
  content: "";
  background: #585858;
  font-size: 0px;
  cursor: none;
  /* display: none; */
}

.square.X {
  color: #ef4056;
  font-family: "Nunito", sans-serif;
}

.square.O {
  color: #fcb643;
  font-family: "Nunito", sans-serif;
}
</style>
