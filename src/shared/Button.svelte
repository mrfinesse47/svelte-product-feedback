<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
  //flat and inverse are shorthand  -- see https://svelte.dev/tutorial/class-shorthand
</script>

<button class={type} class:flat class:inverse on:click><slot /></button>

<style>
  button {
    border: 0;
    cursor: pointer;
    font-family: "Jost";
    font-style: normal;
    font-weight: 600;
    font-size: 0.8125rem;
    line-height: 1.1875rem;
    color: #ffffff;
    border-radius: 0.625rem;
  }
  .primary {
    background-color: #f2f4ff;
    color: #4661e6;
  }
  .secondary {
    background-color: #45c496;
    color: white;
  }
  .flat {
    box-shadow: none;
  }
  .primary.inverse {
    background-color: white;
    color: #d91b42;
  }
  .secondary.inverse {
    background-color: white;
    color: #45c496;
  }
</style>
