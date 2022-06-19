<script>
  import slideRtoL from "../../transitions/slideRtoL";
  import CategoryFilterBox from "./CategoryFilterBox.svelte";
</script>

<nav transition:slideRtoL>
  <CategoryFilterBox />
</nav>

<style>
  nav {
    width: 271px;
    height: 595px;
    position: absolute;
    top: 72px;
    right: 0px;
    background-color: var(--background-color);
    overflow: hidden;
  }
</style>
