<script>
  import Arrow from "../icons/Arrow.svelte";
</script>

<div class="current-item">
  <h4><span class="light">Sort By:</span> Most Upvotes</h4>
  <div class="arrow">
    <Arrow />
  </div>
</div>

<style>
  .current-item {
    display: flex;
    align-items: center;
  }
  .current-item h4 {
    font-size: 0.8125rem;
    color: var(--light-grey);
  }
  .current-item h4 .light {
    font-weight: 400;
  }
  .arrow {
    padding-left: 0.5rem;
  }
</style>
