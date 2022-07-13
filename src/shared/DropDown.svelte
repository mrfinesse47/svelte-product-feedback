<script>
  import Arrow from "../icons/Arrow.svelte";
</script>

<div class="current-item">
  <h4><span class="light">Sort By:</span> Most Upvotes</h4>
  <Arrow />
</div>

<style>
  .current-item {
    background-color: var(--deep-purple);
    display: flex;
  }
  .current-item img {
    width: 10px;
    height: 7px;
  }
  .current-item h4 {
    font-size: 0.8125rem;
    color: var(--light-grey);
  }
  .current-item h4 .light {
    font-weight: 400;
  }
</style>
