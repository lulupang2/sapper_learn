<script context="module">
  export async function preload(page, session) {
    const result = await this.fetch("products.json");
    const products = await result.json();
    return { products };
  }
</script>

<script>
  export let products;
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>
<div class="wrap">
  <div class="boardwrap">
    <div class="rowhead">
      <div class="row ">번호</div>
      <div class="row">제목</div>
      <div class="row">작성자</div>
      <div class="row">작성일</div>
      <div class="row">조회수</div>
    </div>

    {#each products as board}
      <div class="boardlist">
        <div class="row">{board.num}</div>
        <div class="row">{board.subject}</div>
        <div class="row">{board.name}</div>
        <div class="row">{board.wdate}</div>
        <div class="row">{board.views}</div>
      </div>
    {/each}
  </div>
</div>

<style>
  * {
    box-sizing: border-box;
  }
  .wrap {
    display: flexbox;
    min-height: 100vh;
  }
  .boardwrap {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    display: flexbox;
    height: 70vh;
    width: 75vh;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: baseline;
  }
  .rowhead,
  .boardlist {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    text-align: center;
    width: 100%;
    height: 25px;
  }
  .row {
    height: 25px;
  }
  .rowhead {
    font-weight: bolder;
    border-bottom: 1px solid #ccc;
    height: 50px;
    line-height: 50px;
  }
  .row:nth-child(1) {
    flex-basis: 7%;
  }
  .row:nth-child(2) {
    flex-basis: 50%;
  }
  .row:nth-child(3) {
    flex-basis: 15%;
  }
  .row:nth-child(4) {
    flex-basis: 20%;
  }
  .row:nth-child(5) {
    flex-basis: 8%;
  }
  .row:hover {
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  @media (min-width: 480px) {
  }
</style>
