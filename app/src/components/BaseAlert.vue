<template>
  <div :class="baseClass">{{ text }}</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },

  watch: {},

  computed: {
    baseClass() {
      return ["alert", this.variant ? `alert-${this.variant}` : ""];
    },
  },

  methods: {},

  props: {
    variant: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Test",
    },
  },
};
</script>

<style scoped>
.alert {
  padding: 5px;
  border-radius: 6px;
  color: gray;
  background: #ddd;
}
.alert-success {
  background: #42b983;
  color: white;
}

.alert-danger {
  background: red;
  color: white;
}

.alert-wanrning {
  background: yellow;
  color: black;
}
</style>
