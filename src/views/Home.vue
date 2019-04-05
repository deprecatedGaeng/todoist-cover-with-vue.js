<template>
  <div class="home">
    <h2 class="todoist-title">관리함</h2>
    <TodoList :todos="getTodos"></TodoList>
    <AddTodoWrap :inputDate="today" inputState="new"></AddTodoWrap>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodoWrap from '@/components/AddTodoWrap.vue';
export default {
  name: 'home',
  data : function(){
    return {
      today : new Date()
    }
  },
  components: {
    TodoList,AddTodoWrap
  },
  computed: {
    getTodos() {
      return this.$store.getters.getTodos;
    },
  }
}
</script>
