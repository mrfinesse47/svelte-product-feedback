<script>
  export let type = "primary";
  export let textStyle = false;
  export let selected = false;
  export let large = false;
  export let noClick = false;
</script>

<button
  class={type}
  class:noClick
  class:selected
  class:textStyle
  class:large
  on:click><slot /></button
>

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
  .bright-purple {
    margin: 0;
    padding: 0;
    color: #f2f4fe;
    background-color: var(--bright-purple);
  }

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
  .large {
    font-weight: 700;
    padding: 0.6563rem 1.0625rem 0.6563rem 1rem;
  }
  .noClick {
    pointer-events: none;
    cursor: none;
  }
</style>
