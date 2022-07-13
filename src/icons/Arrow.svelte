<script>
  export let direction = "down";
  export let color = "#ffffff";
  let svgDirection;
  switch (direction) {
    case "down":
      svgDirection = "M1 1l4 4 4-4";
      break;
    case "left":
      svgDirection = "M6 9L2 5l4-4";
      break;
    default:
      //up
      svgDirection = "M1 6l4-4 4 4";
  }
</script>

<svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"
  ><path
    d={svgDirection}
    stroke={color}
    stroke-width="2"
    fill="none"
    fill-rule="evenodd"
  /></svg
>
