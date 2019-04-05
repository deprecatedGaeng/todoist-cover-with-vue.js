import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        contents: 'Vue로 Todoist 만들기',
        createdAt: 123412341234123,
        date: '20190405',
        done: true
      },
      {
        contents: 'Blog update',
        createdAt: 23412314234123434,
        date: '20190407',
        done: true
      }
    ],
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
  },
  mutations: {

  },
  actions: {
    addTodo(context, payload) {
      const todoData = {
        contents: payload.todoContents,
        date: payload.todoDate,
        createdAt: payload.createdAt,
        done: false
      };
      context.state.todos = [todoData, ...context.state.todos];
    },
    updateTodo(context, payload){
      context.state.todos = context.state.todos.map(todo => {
        if(todo.createdAt === payload.todoCreatedAt){
          todo.contents = payload.todoContents;
          todo.date = payload.todoDate;
        }
        return todo;
      })
    },
    toggleComplete(context, payload){
      context.state.todos = context.state.todos.map(todo => {
        if(todo.createdAt === payload.createdAt){
          todo.done = payload.done;
        }
        return todo;
      })
    }
  },
});
