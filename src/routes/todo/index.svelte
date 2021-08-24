<script>
  import Todo from "./todo.svelte";
  let lastId = 0;

  const createTodo = (text, done = false) => ({ id: ++lastId, text, done });

  let todoText = "";

  let todos = [createTodo("First", true), createTodo("HI")];
  // :$ 리액티브 구문 -> 해당 구문이 참조하는 변수중 값이 바뀔떄 다시 실행
  $: uncomplatedCount = todos.filter(t => !t.done).length;
  $: status = `${uncomplatedCount} of ${todos.length} remaining`;

  function addTodo() {
    todos = todos.concat(createTodo(todoText));
    todoText = "";
  }
  function complete() {
    todos = todos.filter(t => !t.done);
  }
  function delteTodo(todoId) {
    todos = todos.filter(t => t.id !== todoId);
  }
  function toggleDone(todo) {
    const { id } = todo;
    todos = todos.map(t => (t.id === id ? { ...t, done: !t.done } : t)); // === type,value 확인 , ...전개구문
  }
</script>

<div>
  <h1>할 일 목록 (DB연동안됨)</h1>
  <div>
    {status}
    <button on:click={complete}>완료</button>
  </div>
  <div>
    <form on:submit|preventDefault>
      <input
        type="text"
        size="30"
        placeholder="할 일을 입력하세요"
        bind:value={todoText}
      />
      <button disabled={!todoText} on:click={addTodo}>추가</button>
    </form>
    <ul>
      {#each todos as todo}
        <Todo
          {todo}
          on:delete={() => delteTodo(todo.id)}
          on:toggleDone={() => toggleDone(todo)}
        />
      {/each}
    </ul>
  </div>
</div>
<nav />

<style>
  button {
    margin: 10px;
    background-color: #99ccff;
    color: #fff;
    border: 0;
    padding: 10px;
    font-size: 16px;
  }
  input[type="text"] {
    height: 40px;
    padding: 0;
    margin: 0;
    border: 0;
    box-shadow: 0 2px rgba(0, 0, 0, 0.4);
  }
  input:focus {
    outline: none;
  }
  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
  }
</style>
