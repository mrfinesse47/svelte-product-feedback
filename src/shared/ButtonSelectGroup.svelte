<script>
  import Button from "./Button.svelte";
</script>

<div class="container">
  <!-- thinking of these generating dynamic based on data -->

  <Button>All</Button>
  <Button inverse>UI</Button>
  <Button inverse>UX</Button>
  <Button inverse>Enhancement</Button>
  <Button inverse>Bug</Button>
  <Button inverse>Feature</Button>
</div>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
  }
</style>
