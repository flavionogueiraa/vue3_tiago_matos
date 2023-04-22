<template>
  <div>
    <div class="todos-items" v-for="(obj, index) in todos" v-bind:key="obj.id">
      {{ index }} - {{ obj.title }}
    </div>
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
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
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
    };
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
</style>
