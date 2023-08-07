import { c as create_ssr_component, e as escape, a as subscribe, d as each, b as add_attribute, v as validate_component, n as null_to_empty } from "../../../chunks/ssr.js";
import "../../../chunks/firebase.js";
import "firebase/auth";
import { w as writable } from "../../../chunks/index.js";
import "firebase/firestore";
const authStore = writable({
  user: null,
  loading: true,
  data: {}
});
const TodoItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".todo.svelte-1c7jcq2.svelte-1c7jcq2{border-left:1px solid cyan;padding:8px 14px;display:flex;align-items:center;justify-content:space-between}.actions.svelte-1c7jcq2.svelte-1c7jcq2{display:flex;align-items:center;gap:14px;font-size:1.3rem}.actions.svelte-1c7jcq2 i.svelte-1c7jcq2{cursor:pointer}.actions.svelte-1c7jcq2 i.svelte-1c7jcq2:hover{color:coral}",
  map: null
};
const TodoItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let { todo } = $$props;
  let { editTodo } = $$props;
  let { removeTodo } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.todo === void 0 && $$bindings.todo && todo !== void 0)
    $$bindings.todo(todo);
  if ($$props.editTodo === void 0 && $$bindings.editTodo && editTodo !== void 0)
    $$bindings.editTodo(editTodo);
  if ($$props.removeTodo === void 0 && $$bindings.removeTodo && removeTodo !== void 0)
    $$bindings.removeTodo(removeTodo);
  $$result.css.add(css$1);
  return `<div class="todo svelte-1c7jcq2"><p>${escape(index + 1)}. ${escape(todo)}</p> <div class="actions svelte-1c7jcq2"> <i class="fa-regular fa-pen-to-square svelte-1c7jcq2"></i>  <i class="fa-regular fa-trash-can svelte-1c7jcq2"></i></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".mainContainer.svelte-f1ibbw.svelte-f1ibbw{display:flex;flex-direction:column;min-height:100vh;gap:24px;padding:24px;width:100%;max-width:1000px;margin:0 auto}.headerContainer.svelte-f1ibbw.svelte-f1ibbw{display:flex;align-items:center;justify-content:space-between}.headerBtns.svelte-f1ibbw.svelte-f1ibbw{display:flex;align-items:center;gap:14px}.headerContainer.svelte-f1ibbw button.svelte-f1ibbw{background:#003c5b;color:white;padding:10px 18px;border:none;border-radius:4px;font-weight:700;display:flex;align-items:center;gap:10px;cursor:pointer}.headerContainer.svelte-f1ibbw button i.svelte-f1ibbw{font-size:1.1rem}.headerContainer.svelte-f1ibbw button.svelte-f1ibbw:hover{opacity:0.7}main.svelte-f1ibbw.svelte-f1ibbw{display:flex;flex-direction:column;gap:8px;flex:1}.enterTodo.svelte-f1ibbw.svelte-f1ibbw{display:flex;align-items:stretch;border:1px solid #0891b2;border-radius:5px;overflow:hidden}.errorBorder.svelte-f1ibbw.svelte-f1ibbw{border-color:coral !important}.enterTodo.svelte-f1ibbw input.svelte-f1ibbw{background:transparent;border:none;padding:14px;color:white;flex:1}.enterTodo.svelte-f1ibbw input.svelte-f1ibbw:focus{outline:none}.enterTodo.svelte-f1ibbw button.svelte-f1ibbw{padding:0 28px;background:#003c5b;border:none;color:cyan;font-weight:600;cursor:pointer}.enterTodo.svelte-f1ibbw button.svelte-f1ibbw:hover{background:transparent}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let todoList = [];
  let currTodo = "";
  authStore.subscribe((curr) => {
    todoList = curr.data.todos;
  });
  function editTodo(index) {
    let newTodoList = [...todoList].filter((val, i) => {
      console.log(i, index, i !== index);
      return i != index;
    });
    currTodo = todoList[index];
    todoList = newTodoList;
  }
  function removeTodo(index) {
    let newTodoList = [...todoList].filter((val, i) => {
      console.log(i, index, i !== index);
      return i != index;
    });
    todoList = newTodoList;
  }
  $$result.css.add(css);
  $$unsubscribe_authStore();
  return `${!$authStore.loading ? `<div class="mainContainer svelte-f1ibbw"><div class="headerContainer svelte-f1ibbw"><h1 data-svelte-h="svelte-1g9d2um">Todo List</h1> <div class="headerBtns svelte-f1ibbw"><button class="svelte-f1ibbw" data-svelte-h="svelte-1j0i759"><i class="fa-regular fa-floppy-disk svelte-f1ibbw"></i> <p>Save</p></button> <button class="svelte-f1ibbw" data-svelte-h="svelte-1mat3wy"><i class="fa-solid fa-right-from-bracket svelte-f1ibbw"></i> <p>Logout</p></button></div></div> <main class="svelte-f1ibbw">${todoList.length === 0 ? `<p data-svelte-h="svelte-1jtqiij">You have nothing to do!</p>` : ``} ${each(todoList, (todo, index) => {
    return `${validate_component(TodoItem, "TodoItem").$$render($$result, { todo, index, removeTodo, editTodo }, {}, {})}`;
  })}</main> <div class="${escape(null_to_empty("enterTodo "), true) + " svelte-f1ibbw"}"><input type="text" placeholder="Enter todo" class="svelte-f1ibbw"${add_attribute("value", currTodo, 0)}> <button class="svelte-f1ibbw" data-svelte-h="svelte-o5h7g0">ADD</button></div></div>` : ``}`;
});
export {
  Page as default
};
