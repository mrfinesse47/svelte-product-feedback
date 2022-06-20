<script>
  export let type = "primary";
  //   export let flat = false;
  export let textStyle = false;
  export let selected = false;
  //flat and inverse are shorthand  -- see https://svelte.dev/tutorial/class-shorthand
</script>

<button class={type} class:selected class:textStyle on:click><slot /></button>

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
    margin-right: 0.5rem;
    margin-bottom: 0.875rem;
  }
  .primary {
    background-color: var(--primary-inverse-color);
    color: var(--primary-color);
  }
  /* 
  .flat {
    box-shadow: none;
  } */
  .primary.selected {
    background-color: var(--primary-color);
    color: white;
  }
  .textStyle {
    background-color: transparent;
    text-decoration: underline;
    color: var(--primary-color);
    font-weight: 600;
    font-size: 0.8125rem;
    line-height: 1.1875rem;
    border: 0;
    margin: 0;
    padding: 0;
  }
</style>
