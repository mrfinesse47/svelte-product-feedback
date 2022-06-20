<script>
  export let isMenuOpen;
  function handleEnterPress({ keyCode }) {
    if (keyCode === 13) {
      //this could be a cb
      isMenuOpen = !isMenuOpen;
      //
    }
  }
</script>

<header>
  <div class="title">
    <h1>Frontend Mentor</h1>
    <h3>Feedback Board</h3>
  </div>
  <div
    class="hamburger-menu"
    tabindex="0"
    on:click={() => {
      isMenuOpen = !isMenuOpen;
    }}
    on:keydown={(e) => handleEnterPress(e)}
  >
    <img
      src={`./assets/shared/mobile/icon-${
        isMenuOpen ? "close" : "hamburger"
      }.svg`}
      alt={`${isMenuOpen ? "close" : "open"} menu`}
    />
  </div>
</header>

<style>
  header {
    background-image: url("../assets/suggestions/mobile/background-header.png");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #ffffff;
  }
  h1 {
    font-size: 0.9375rem;
    line-height: 1.375rem;
    letter-spacing: -0.0117rem;
  }
  h3 {
    font-weight: 500;
    font-size: 0.8125rem;
    line-height: 1.1875rem;
    mix-blend-mode: normal;
    opacity: 0.75;
  }
  .title {
    margin-top: 1rem;
    margin-left: 1.5rem;
    margin-bottom: 0.9375rem;
    width: 7.1875rem;
  }
  .hamburger-menu {
    align-self: center;
    margin-right: 1.5rem;
  }
  .hamburger-menu:hover {
    cursor: pointer;
  }
  img {
    width: 1.25rem;
    height: 1.0625rem;
  }
</style>
