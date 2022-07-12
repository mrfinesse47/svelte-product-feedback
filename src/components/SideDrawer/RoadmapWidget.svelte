<script>
  import Button from "../../shared/Button.svelte";
</script>

<header>
  <h3 aria-label="Roadmap">Roadmap</h3>
  <Button
    textStyle
    on:click={() => {
      alert("hi");
    }}>View</Button
  >
</header>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
