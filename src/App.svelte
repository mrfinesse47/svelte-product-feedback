<script>
  import Header from "./components/Header.svelte";
  import SideDrawer from "./components/SideDrawer/SideDrawer.svelte";

  let isMenuOpen = false;
</script>

<main>
  <Header bind:isMenuOpen />
  {#if isMenuOpen}
    <SideDrawer />
  {/if}
</main>

<!-- we are going to use global style variables this time -->
<style>
  :global(:root) {
    --primary-color: #4661e6;
    --primary-inverse-color: #f2f4ff;
    --header-color: purple;
    --background-color: #f7f8fd;
  }
  main {
    width: 23.4375rem;
    margin: 0 auto;
    position: relative;
    /* temporary for mobile dev first */
  }
</style>
