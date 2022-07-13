<script>
  import DropDown from "../../../shared/DropDown.svelte";
  import Button from "../../../shared/Button.svelte";
</script>

<nav>
  <div class="sort">
    <DropDown />
    <Button type="bright-purple" large>+ Add Feedback</Button>
  </div>
</nav>

<style>
  nav {
    width: 100%;
    background-color: var(--deep-purple);
  }
  nav .sort {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1.5rem;
    align-items: center;
  }
</style>
