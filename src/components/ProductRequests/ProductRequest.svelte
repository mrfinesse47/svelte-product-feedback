<script>
  import Button from "../../shared/Button.svelte";
  import UpVoteButton from "../../shared/UpVoteButton.svelte";
  import CommentCounter from "../../shared/CommentCounter.svelte";
</script>

<li>
  <header>Add tags for Solutions</header>
  <p>Easier to search for solutions based on a specific stack</p>
  <Button noClick>test</Button>
  <footer>
    <UpVoteButton count={112} />
    <CommentCounter count={100} />
  </footer>
</li>

<style>
  li {
    background-color: white;
    width: 20.4375rem;
    margin: 1rem auto;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
