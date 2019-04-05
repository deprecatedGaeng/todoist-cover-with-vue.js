<template>
  <div class="next">
    <h2 class="todoist-title">다음 7일</h2>
    <ul class="">
      <li v-for="day in get7Days"
        :key="day.date"
        class="next__item"
      >
        <div class="next__date-wrap">
          <span class="next__item-day">{{dayFilter(day.day)}}</span>
          <span class="next__item-date">{{day.displayDate}}</span>
        </div>
        <TodoList :todos="getTodos(day.date)"></TodoList>
        <AddTodoWrap :inputDate="day.date | moment()" inputState="new"></AddTodoWrap>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
.next__item{
  margin-bottom:50px;
}
  .next__date-wrap{
    margin-bottom:10px;
  }
  .next__item-day{
    display:inline-block;
    margin-right:10px;
    font-weight: 600;
    font-size:16px;
  }
  .next__item-date{
    font-size:12px;
    color:#aaa;
  }
</style>

<script>
import TodoList from '@/components/TodoList.vue'
import AddTodoWrap from '@/components/AddTodoWrap.vue'
export default {
  name: 'nextSevenDays',
  data : function(){
    return {
      today : new Date()
    }
  },
  components: {
    TodoList,AddTodoWrap
  },
  computed: {
    get7Days(){
      const sevenDays = _.range(7).map(num => {
        return {
          day : this.$moment(this.today).add(num,'days').format('ddd'),
          date : this.$moment(this.today).add(num,'days').format('YYYYMMDD'),
          displayDate : this.$moment(this.today).add(num,'days').format('M월D일')
        }
      })
      return sevenDays;
    }
  },
  methods : {
    getTodos(date){
      return this.$store.getters.getTodos.filter(todo => todo.date === date);
    },
    dayFilter(en){
      switch(en){
        case 'Mon':
          en = '월요일'
          break;
        case 'Tue':
          en = '화요일'
          break;
        case 'Wed':
          en = '수요일'
          break;
        case 'Thu':
          en = '목요일'
          break;
        case 'Fri':
          en = '금요일'
          break;
        case 'Sat':
          en = '토요일'
          break;
        case 'Sun':
          en = '일요일'
          break;
      }
      return en;
    }
  }
};
</script>
