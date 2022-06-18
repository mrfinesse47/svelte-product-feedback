<script>
  export let isMenuOpen;
</script>

<header>
  <div class="title">
    <h1>Frontend Mentor</h1>
    <h3>Feedback Board</h3>
  </div>
  <div class="hamburger-menu" tabindex="0">
    <img
      src="./assets/shared/mobile/icon-hamburger.svg"
      alt="open menu"
      on:click={() => {
        isMenuOpen = !isMenuOpen;
      }}
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
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.1875px;
  }
  h3 {
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    mix-blend-mode: normal;
    opacity: 0.75;
  }
  .title {
    margin-top: 16px;
    margin-left: 24px;
    margin-bottom: 15px;
    width: 115px;
  }
  .hamburger-menu {
    align-self: center;
    margin-right: 24px;
  }
  .hamburger-menu:hover {
    cursor: pointer;
  }
</style>
