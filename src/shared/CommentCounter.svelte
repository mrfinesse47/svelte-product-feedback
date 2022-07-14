<script>
  import Comment from "../icons/Comment.svelte";
  export let count;
</script>

<div><Comment />{count}</div>

<style>
  div {
    display: flex;
    align-items: center;
    color: var(--dark-text);
  }
</style>
