<script>
  import NavCard from '$lib/components/NavCard.svelte';
  import './styles.css';
</script>

<div class="main_layout_holder">
  <div class="main_layout_navcard">
    <NavCard authorName="Luke Rabbitte"/>
  </div>
  
  <slot></slot>
  
  <div class="main_layout_footer">
    <div class="main_layout_wrapper">
      <p>&copy; {new Date().getFullYear()}</p>
    </div>
  </div>
</div>

<style>

  .main_layout_holder {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
    margin: 0;
    height: 100vh;
  }

  .main_layout_navcard{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .main_layout_footer {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: auto;
    justify-content: center;
    align-items: center;
    height: var(----footer-height);
  }

  .main_layout_wrapper {
    padding: 15px;
    border-radius: 10px;
    background: var(--secondary-color);
  }

  .main_layout_footer p {
    margin: 0;
    color: var(--accent-color-3);
  }
</style>