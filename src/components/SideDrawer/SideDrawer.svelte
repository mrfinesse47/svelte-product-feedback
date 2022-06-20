<script>
  import slideRtoL from "../../transitions/slideRtoL";
  import CategoryFilterBox from "./CategoryFilterBox.svelte";
</script>

<nav transition:slideRtoL>
  <CategoryFilterBox />
</nav>

<style>
  nav {
    width: 16.9375rem;
    height: 37.1875rem;
    position: absolute;
    top: 4.5rem;
    right: 0rem;
    background-color: var(--background-color);
    overflow: hidden;
  }
</style>
