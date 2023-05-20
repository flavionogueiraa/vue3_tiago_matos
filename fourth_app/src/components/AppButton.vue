<template>
  <div>
    <button @click="sendData()">
      {{ variant }}
      <slot></slot>
      <slot name="icon"></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "success",
    },
  },
  setup(props, { slots, emit }) {
    console.log(props.variant);
    console.log(slots);

    const sendData = () => {
      emit("update", true);
    };

    return {
      sendData,
    };
  },
};
</script>

<style></style>
