<script>
  import Arrow from "../icons/Arrow.svelte";
  export let count;
</script>

<button>
  <div class="arrow-container">
    <Arrow direction="up" color="#4661E6" />
  </div>
  <div class="text">
    {count}
  </div>
</button>

<style>
  button {
    padding: 0.3125rem 0.8125rem 0.375rem 1rem;
    border-radius: 0.625rem;
    font-weight: 700;
    font-size: 0.8125rem;
    line-height: 1.1875rem;
    letter-spacing: -0.0113rem;
    display: flex;
    align-items: center;
    border: 0;
    background-color: #f2f4fe;
  }
  .arrow-container {
    padding-bottom: 0.18rem;
    padding-right: 0.625rem;
  }
  .text {
    color: #3a4374;
  }
</style>
