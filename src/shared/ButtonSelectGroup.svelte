<script>
  import Button from "./Button.svelte";
</script>

<div class="container" aria-label="category filter">
  <!-- thinking of these generating dynamic based on data -->

  <Button selected>All</Button>
  <Button>UI</Button>
  <Button>UX</Button>
  <Button>Enhancement</Button>
  <Button>Bug</Button>
  <Button>Feature</Button>
</div>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
  }
</style>
