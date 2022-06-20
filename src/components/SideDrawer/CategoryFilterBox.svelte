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
  }
</style>
