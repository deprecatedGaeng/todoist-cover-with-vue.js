<template>
<ul class="todo-list" v-if="todos.length >= 1">
    <li class="todo-list__item"
		v-for="todo in todos"
		:key="todo.createdAt"
		:id="`item${todo.createdAt}`"
    >
		<div class="todo-list__contents-wrap">
			<label class="todo-list__chkbox-wrap"
				:for="`complete${todo.createdAt}`"
			>
				<input type="checkbox"
					:checked="todo.done"
					@change="toggleComplete(todo.createdAt,$event.target.checked)"
					:id="`complete${todo.createdAt}`">
				<div class="todo-list__chkbox"></div>
			</label>
			<div class="todo-list__contents"
				@click="editMode(todo.createdAt)"
			>
				{{todo.contents}}
			</div>
			<div class="todo-list__date">
				{{displayDate(todo.date)}}
			</div>
		</div>
		<div class="todo-list__edit-wrap">
			<TodoInput
				:propDate="todo.date | moment()"
				:propContents="todo.contents"
				:propCreatedAt="todo.createdAt"
				propModeState="edit"
			>
			</TodoInput>
		</div>
    </li>
</ul>
<div class="no-data" v-else>
    새로운 작업을 추가해보세요.
</div>
</template>
<style lang="scss">
.todo-list{
	margin-bottom:20px;
}
.todo-list__item{
	border-bottom:1px solid #ddd;
	padding:20px 0;
	&:nth-of-type(1){
		border-top:1px solid #ddd;
	}
	&.edit{
		.todo-list__contents-wrap{
			display:none;
		}
		.todo-list__edit-wrap{
			display:block;
		}
	}
}
.todo-list__contents-wrap{
	position:relative;
	padding-left:20px;
	padding-right:100px;
}
.todo-list__contents{
	word-break: break-all;
}
.todo-list__chkbox-wrap{
	position:absolute;
	left:0;
	top:0;
	width:18px;
	height:18px;
	border-radius: 50%;
	border:1px solid #c1c1c1;
	display:block;
	text-align: center;
	overflow: hidden;
	vertical-align: middle;
	&:hover{
		background-color:#aaa;
	}
	input[type="checkbox"]{
		position:absolute;
		left:-9999px;
		width:1px;
		height:1px;
		&:checked ~ .todo-list__chkbox{
			background-color:orange;
			&:after{
				content:'\2713';
				display:inline-block;
				color:#fff;
				font-size:12px;
			}
		}
	}
}
.todo-list__chkbox{
	position:relative;
	width:100%;
	height:100%;
}
.todo-list__date{
	position:absolute;
	right:0;
	top:0;
	width:100px;
}
.todo-list__edit-wrap{
	display:none;
}
.no-data{
	background-color:#f1f1f1;
	padding:20px 0;
	margin:30px 0;
}
</style>
<script>
import TodoInput from '@/components/TodoInput.vue'
export default {
	components: {
		TodoInput
	},
	props : ['todos'],
	data(){
		return {

		}
	},
	methods : {
		dateFilter(date){
			return this.$moment(date)
		},
		displayDate(date){
			return this.$moment(date).format('M월D일')
		},
		toggleComplete(createdAt, isCompleted) {
			const payload = {
				createdAt : createdAt,
				done : isCompleted
			}
			this.$store.dispatch('toggleComplete', payload);
		},
		editMode(id){
			document.querySelector(`#item${id}`).classList.add('edit');
		}
	}
}
</script>

