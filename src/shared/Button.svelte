<script>
  export let type = "primary";
  //   export let flat = false;
  export let inverse = false;
  //flat and inverse are shorthand  -- see https://svelte.dev/tutorial/class-shorthand
</script>

<button class={type} class:inverse on:click><slot /></button>

<style>
  button {
    display: block;
    border: 0;
    cursor: pointer;
    font-family: "Jost";
    font-style: normal;
    font-weight: 600;
    font-size: 0.8125rem;
    line-height: 1.1875rem;
    border-radius: 0.625rem;
    padding: 0.3125rem 1rem 0.375rem;
    margin-right: 8px;
    margin-bottom: 0.875rem;
  }
  .primary {
    background-color: var(--primary-color);
    color: white;
  }

  .flat {
    box-shadow: none;
  }
  .primary.inverse {
    background-color: var(--primary-inverse-color);
    color: var(--primary-color);
  }
</style>
