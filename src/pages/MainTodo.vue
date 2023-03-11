<script setup>
import { ref } from 'vue';
import { useTodoList } from '../composables/useTodoList';
import ButtonAdd from '../components/Buttons/ButtonAdd.vue';
import ButtonEditDone from '../components/Buttons/ButtonEditDone.vue';
import ButtonEdit from '../components/Buttons/ButtonEdit.vue';
import ButtonDelete from '../components/Buttons/ButtonDelete.vue';
const todoRef = ref('');
const isEditRef = ref(false);
const { todoListRef, add, show, edit, del, check, countFin } = useTodoList();

//#region Handler
const addTodo = () => {
  add(todoRef.value);
  todoRef.value = '';
};
const showTodo = (id) => {
  todoRef.value = show(id);
  isEditRef.value = true;
};
const editTodo = () => {
  edit(todoRef.value);
  isEditRef.value = false;
  todoRef.value = '';
};
const deleteTodo = (id) => {
  del(id);
  isEditRef.value = false;
  todoRef.value = '';
};
const changeCheck = (id) => {
  check(id);
};
//#endregion
</script>

<template>
  <div class="box_input">
    <input
      id="inp"
      type="text"
      class="todo_input"
      v-model="todoRef"
      placeholder="＋ TODOを入力"
    />
    <ButtonEditDone @on-click="editTodo" v-if="isEditRef" />
    <ButtonAdd @on-click="addTodo" v-else />
  </div>
  <div class="box_list">
    <div class="todo_list" v-for="todo in todoListRef" :key="todo.id">
      <div class="todo" :class="{ fin: todo.checked }">
        <input
          type="checkbox"
          class="check"
          :checked="todo.checked"
          @change="changeCheck(todo.id)"
        />
        <label>{{ todo.task }}</label>
      </div>
      <div class="btns">
        <ButtonEdit @on-click="showTodo(todo.id)" />
        <ButtonDelete @on-click="deleteTodo(todo.id)" />
      </div>
    </div>
  </div>
  <div class="finCount">
    <span>完了：{{ countFin }}、</span>
    <span>未完了：{{ todoListRef.length - countFin }}</span>
  </div>
</template>

<style scoped>
.box_input {
  margin-top: 20px;
}
.todo_input {
  width: 300px;
  margin-right: 8px;
  padding: 8px;
  font-size: 18px;
  border: 1px solid #aaa;
  border-radius: 6px;
}
.btn {
  padding: 8px;
  background-color: #03a9f4;
  border-radius: 6px;
  color: #fff;
  text-align: center;
  font-size: 14px;
}

.box_list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.todo_list {
  display: flex;
  align-items: center;
  gap: 8px;
}
.todo {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 12px;
  width: 300px;
}

.check {
  border: 1px solid red;
  transform: scale(1.6);
  margin: 0 16px 2px 6px;
}
.fin {
  text-decoration: line-through;
  background-color: #ddd;
  color: #777;
}

.btns {
  display: flex;
  gap: 4px;
}
.green {
  background-color: #00c853;
}
.pink {
  background-color: #ff4081;
}
.finCount {
  margin-top: 8px;
  font-size: 0.8em;
}
</style>
