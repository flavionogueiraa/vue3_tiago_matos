<template>
  <div>
    <header class="header">
      <h1 v-if="$slots.title" class="title">
        <slot name="title" />
      </h1>
      <div v-if="$slots.description" class="description">
        <slot name="description" />
      </div>

      <div class="content">
        <slot></slot>
      </div>
    </header>

    <!-- <p :class="pClass">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
      dolores! Pariatur quibusdam nihil distinctio cupiditate quae eius alias,
      amet ut ipsa nisi, impedit dolore iure exercitationem vitae placeat.
      Consequatur, veniam.
    </p>
    <p :style="styleClass">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi
      obcaecati sit eaque vero corporis laborum expedita eum veniam quo ex, iure
      ullam, cupiditate necessitatibus ipsa ducimus, consequuntur temporibus
      quos!
    </p>

    <div class="todos-items" v-for="(obj, index) in todos" :key="obj.id">
      <img v-if="obj.imgSrc" :src="obj.imgSrc" />
      {{ index }} - {{ obj.title }}
    </div> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      todos: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
          imgSrc: "https://placehold.co/600x400",
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
          imgSrc: "https://placehold.co/600x400",
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: false,
        },
        {
          userId: 1,
          id: 4,
          title: "et porro tempora",
          completed: true,
        },
        {
          userId: 1,
          id: 5,
          title:
            "laboriosam mollitia et enim quasi adipisci quia provident illum",
          completed: false,
        },
      ],
      classVar: "title",
      isHome: true,
      pClass: ["text", "text-home"],
      styleClass: {
        color: "black",
        backgroundColor: "red",
        "font-size": "20px",
      },
    };
  },

  mounted() {
    // window.addEventListener("resize", this.resize);
    console.log(this.$slots);
  },

  // beforeUnmount() {
  //   window.removeEventListener("resize", this.resize);
  //   console.log("beforeUnmount");
  //   console.log("DOM:", this.$el);
  // },

  // unmounted() {
  //   console.log("unmounted");
  //   console.log("DOM:", this.$el);
  // },

  methods: {
    // resize($evt) {
    //   console.log($evt);
    // },
  },
};
</script>

<style>
.todos-items {
  background: black;
  margin: 0 0 5px 0;
  padding: 3px 6px;
  color: white;
  border-radius: 5px;
}

.header {
  color: white;
  background: black;
}

.title-home {
  font-size: 40px;
  color: green;
}

.text-home {
  color: cyan;
}

.text {
  color: yellow;
}
</style>
