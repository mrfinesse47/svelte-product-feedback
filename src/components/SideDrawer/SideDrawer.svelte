<script>
  import slideRtoL from "../../transitions/slideRtoL";
  import FadingContainer from "./FadingContainer.svelte";
  import ButtonSelectGroup from "../../shared/ButtonSelectGroup.svelte";
  import RoadmapWidget from "./RoadmapWidget.svelte";
</script>

<nav transition:slideRtoL>
  <FadingContainer>
    <ButtonSelectGroup />
  </FadingContainer>
  <FadingContainer>
    <RoadmapWidget />
  </FadingContainer>
</nav>

<style>
  nav {
    width: 16.9375rem;
    height: 37.1875rem;
    position: absolute;
    top: 4.5rem;
    right: 0rem;
    background-color: var(--background-color);
    overflow: hidden;
  }
</style>
