<script>
  import Button from "../../shared/Button.svelte";
  import UpVoteButton from "../../shared/UpVoteButton.svelte";
  import Comment from "../../icons/Comment.svelte";
</script>

<li>
  <header>Add tags for Solutions</header>
  <p>Easier to search for solutions based on a specific stack</p>
  <Button noClick>test</Button>
  <footer>
    <UpVoteButton count={112} />
    <Comment />
  </footer>
</li>

<style>
  li {
    background-color: white;
    width: 20.4375rem;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
