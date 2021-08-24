<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  const dispatch = createEventDispatcher();

  export let todo;
</script>

<li transition:fade>
  <input
    type="checkbox"
    checked={todo.done}
    on:change={() => dispatch("toggleDone")}
  />
  <span class={"done-" + todo.done}>{todo.text}</span>
  <button on:click={() => dispatch("delete")}>DELETE</button>
</li>

<style>
  .done-true {
    color: #333;
    text-decoration: line-through;
  }
  button {
    margin: 10px;
    background-color: #99ccff;
    color: #fff;
    border: 0;
    padding: 10px;
    font-size: 16px;
  }
  button:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
</style>
