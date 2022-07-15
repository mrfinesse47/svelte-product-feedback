<script>
  import Comment from "../icons/Comment.svelte";
  export let count;
</script>

<div><Comment /><span>{count}</span></div>

<style>
  div {
    display: flex;
    align-items: center;
    color: var(--dark-text);
  }
  span {
    padding-left: 0.25rem;
    font-weight: 700;
    font-size: 0.8125rem;
    line-height: 1.1875rem;
    text-align: center;
    letter-spacing: -0.0113rem;
  }
</style>
