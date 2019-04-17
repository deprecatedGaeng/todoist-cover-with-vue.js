<template>
		<div class="add-todo"
      :class="{'edit' : showInput}"
    >
      <div class="add-todo__toggle"
        @click="toggleInput()"
      >
        + 작업 추가
      </div>
      <div class="add-todo__input">
        <TodoInput :propDate="inputDate" :propModeState="inputState" :propHub="EventHub"></TodoInput>
      </div>
    </div>
</template>
<style lang="scss">
.add-todo{
  &.edit{
    .add-todo__input{
      display:block;
    }
    .add-todo__toggle{
      display:none;
    }
  }
}
.add-todo__input{
  display:none;
}
</style>
<script>
import Vue from 'vue'
import TodoInput from '@/components/TodoInput.vue'
export default {
  created() {
    this.EventHub.$on("showInput", bool => {
      this.showInput = bool;
    });
  },
	components: {
    TodoInput
  },
  props : ['inputDate','inputState'],
  data(){
    return {
      showInput : false,
      EventHub : new Vue()
    }
  },
  methods : {
    toggleInput(){
      this.showInput = true;
    }
  }
}
</script>
