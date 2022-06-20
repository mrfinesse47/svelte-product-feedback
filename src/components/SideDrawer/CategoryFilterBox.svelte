<script>
  import { fade } from "svelte/transition";
  import ButtonSelectGroup from "../../shared/ButtonSelectGroup.svelte";
</script>

<div
  class="container"
  in:fade={{ duration: 500, delay: 250 }}
  out:fade={{ duration: 100 }}
>
  <ButtonSelectGroup />
</div>

<style>
  .container {
    background-color: #ffffff;
    margin: 1.5rem;
    padding: 1.5rem 1.125rem 1.375rem 1.5rem;
    border-radius: 0.625rem;
    width: 11.375rem;
  }
</style>
