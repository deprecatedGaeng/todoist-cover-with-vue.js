<template>
  <div class="today">
    <h2 class="todoist-title">오늘</h2>
    <TodoList :todos="getTodos"></TodoList>
    <AddTodoWrap :inputDate="today" inputState="new"></AddTodoWrap>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import AddTodoWrap from '@/components/AddTodoWrap.vue'
export default {
  name: 'today',
  data : function(){
    return {
      //today : this.$moment(new Date()).format('YYYYMMDD')
      today : new Date()
    }
  },
  components: {
    TodoList,AddTodoWrap
  },
  computed: {
    getTodos() {
      const getToday = new Date().getTime();
      return this.$store.getters.getTodos.filter(todo => todo.date === this.$moment(getToday).format('YYYYMMDD'));
    },
  }
}
</script>
