<script>
  import ProductRequest from "./ProductRequest.svelte";
  import FilterBar from "./FilterBar/FilterBar.svelte";
</script>

<div class="product-request-list">
  <FilterBar />
  <ul>
    <ProductRequest />
  </ul>
</div>

<style>
  .product-request-list {
    background-color: var(--background-color);
  }
  ul {
    list-style: none;
  }
</style>
