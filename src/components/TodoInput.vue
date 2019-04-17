<template>
    <div class="todo-input">
		<div class="todo-input__contents-wrap">
			<input class="todo-input__contents todo-input__contents--new"
				type="text"
				@keypress.13="addTodo({todoContents,todoDate})"
				v-model="todoContents"
				v-if="modeState === 'new'"
			>
			<input class="todo-input__contents todo-input__contents--edit"
				type="text"
				@keypress.13="updateTodo({todoContents,todoDate,todoCreatedAt})"
				v-model="todoContents"
				v-else
			>
			<datepicker
				format="yyyyMMdd"
				placeholder="일정"
				v-model="todoDate"
				name="datepicker"
				class="datepicker-wrap"
			>
			</datepicker>
		</div>
		<div class="todo-input__btn-wrap">
			<button v-if="modeState === 'new'"
				class="todo-input__btn todo-input__btn--add"
				@click="addTodo({todoContents,todoDate})"
			>
				작업 추가
			</button>
			<button v-else
				class="todo-input__btn todo-input__btn--add"
				@click="updateTodo({todoContents,todoDate,todoCreatedAt})"
			>
				확인
			</button>
			<button class="todo-input__btn"
				@click="hideEditWrap()"
			>취소</button>
		</div>
	</div>
</template>
<style lang="scss">
.todo-input__contents-wrap{
	border:1px solid #ddd;
	border-radius:3px;
	padding-right:100px;
	position:relative;
	margin-bottom:8px;
}
.todo-input__contents{
	display:block;
	height:40px;
	width:100%;
	padding-left:10px;
}
.todo-input__btn{
	height:32px;
	padding:0 10px;
	border-radius:3px;
	overflow: hidden;
	cursor: pointer;
}
.todo-input__btn--add{
	font-weight:600;
	color:#fff;
	background-color:#222;
	margin-right:6px;
}
.vdp-datepicker{
	position: absolute;
	right:0;
	top:0;
	padding-left:5px;
	border-left:1px solid #ddd;
	width:100px;
	height:100%;
	background-color:#fff;
	>div:nth-of-type(1){
		position:relative;
		height:100%;
	}
	input{
		width:100%;
		height:100%;
	}
}
.vdp-datepicker__calendar{
	z-index: 10;
}
</style>
<script>
import Datepicker from 'vuejs-datepicker';
import { EventBus } from "@/utils/eventBus";
export default {
	components: {
    Datepicker
	},
	props : [
		'propDate',
		'propModeState',
		'propContents',
		'propCreatedAt',
		'propHub'
	],
	data(){
		return {
			todoDate : this.propDate,
			todoContents : this.propContents,
			todoCreatedAt : this.propCreatedAt,
			modeState : this.propModeState,
			eventHub : this.propHub,
			parentElement : this.propCreatedAt ? `#item${this.propCreatedAt}` : '.add-todo'
		}
	},
	methods : {
		addTodo(payload){
			payload.createdAt = new Date().getTime();
			payload.todoDate = this.$moment(payload.todoDate).format('YYYYMMDD');
			if (payload.todoContents.trim().length >= 1) {
				this.$store.dispatch('addTodo', payload);
				this.clearInput();
			}else{
				alert('내용을 입력해주세요.')
			}
		},
		updateTodo(payload){
			payload.todoDate = this.$moment(payload.todoDate).format('YYYYMMDD');
			if (payload.todoContents.trim().length >= 1) {
				this.$store.dispatch('updateTodo', payload);
			}else{
				alert('내용을 입력해주세요.')
			}
			this.hideEditWrap()
		},
		clearInput() {
      this.todoContents = '';
		},
		hideEditWrap(){
			if(this.modeState === 'new'){
				console.log(this.eventHub)
				this.eventHub.$emit('showInput',false)
				this.clearInput()
			}else{
				if(this.parentElement){
					document.querySelector(this.parentElement).classList.remove('edit')
				}
			}
		}
	}
}
</script>
