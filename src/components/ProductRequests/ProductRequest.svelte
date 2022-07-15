<script>
  import Button from "../../shared/Button.svelte";
  import UpVoteButton from "../../shared/UpVoteButton.svelte";
  import CommentCounter from "../../shared/CommentCounter.svelte";
</script>

<li>
  <div class="container">
    <header>Add tags for Solutions</header>
    <p>Easier to search for solutions based on a specific stack</p>
    <Button noClick>Enhancment</Button>
    <footer>
      <UpVoteButton count={112} />
      <CommentCounter count={2} />
    </footer>
  </div>
</li>

<style>
  header {
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 1.1875rem;
    letter-spacing: -0.0113rem;
  }
  p {
    color: var(--grayish-blue);
    font-weight: 400;
    font-size: 0.8125rem;
    line-height: 1.1875rem;
    margin-bottom: 0.5rem;
    margin-top: 0.5625rem;
  }
  .container {
    padding: 24px;
  }
  li {
    background-color: white;
    width: 20.4375rem;
    margin: 1rem auto;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
