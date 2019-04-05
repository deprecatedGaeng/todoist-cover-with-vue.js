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
        <TodoInput :propDate="inputDate" :propModeState="inputState"></TodoInput>
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
import TodoInput from '@/components/TodoInput.vue'
import { EventBus } from "@/utils/eventBus"
export default {
  created() {
    EventBus.$on("showInput", bool => {
      this.showInput = bool;
    });
  },
	components: {
    TodoInput
  },
  props : ['inputDate','inputState'],
  data(){
    return {
      showInput : false
    }
  },
  methods : {
    toggleInput(){
      this.showInput = true;
    }
  }
}
</script>
