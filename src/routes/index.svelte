<script>
  //  window.document.addEventListener("wheel", event => {
  //window.document.getElementById("wrap").scrollLeft += event.deltaY;
  //});
</script>

<svelte:head>
  <title>Home page</title>
</svelte:head>
<div id="wrap">
  <h1>HI</h1>
</div>

<style>
  #wrap {
    height: 200vh;
    width: 200vw;
    background: linear-gradient(red, blue);
  }
</style>
