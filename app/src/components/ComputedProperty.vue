<template>
  <div>
    <button @click="onClick">Click</button>

    {{ fullName }}

    <br /><br />

    <h2>Todos em aberto</h2>
    <div v-for="obj in uncompletedTodos" :key="obj.id">
      {{ obj.title }}
    </div>

    <h2>Todos completas</h2>
    <div v-for="obj in completedTodos" :key="obj.id">
      {{ obj.title }}
    </div>

    <h2>Todos</h2>
    <div v-for="obj in todos" :key="obj.id">
      <input type="checkbox" v-model="obj.completed" />
      {{ obj.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      user: {
        first_name: "Jon",
        last_name: "Snow",
      },
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
    };
  },
  computed: {
    fullName() {
      return `${this.user.first_name} ${this.user.last_name}`;
    },
    uncompletedTodos() {
      return this.todos.filter((todo) => !todo.completed);
    },
    completedTodos() {
      return this.todos.filter((todo) => todo.completed);
    },
  },
  methods: {
    onClick() {
      console.log(this);
    },
  },
};
</script>

<style></style>
