<script>
  import ProductRequest from "./ProductRequest.svelte";
  import FilterBar from "./FilterBar/FilterBar.svelte";
</script>

<div class="product-request-list">
  <FilterBar />

  <ProductRequest />
</div>

<style>
  .product-request-list {
    background-color: var(--background-color);
  }
</style>
