<script>
  import Header from "./components/Header.svelte";
</script>

<main>
  <Header />
</main>

<!-- we are going to use global style variables this time -->
<style>
  :global(:root) {
    --header-color: purple;
  }
  main {
    width: 23.4375rem;
    margin: 0 auto;
    /* temporary for mobile dev first */
  }
</style>
