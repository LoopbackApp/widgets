<svelte:options customElement="loopback-widget" />

<script lang="ts">
  import { FeedbackWidget } from "@loopbackapp/widget-svelte";

  export let projectId: string;
</script>

<div
  role="dialog"
  class="wrapper"
>
  <div class="widget-wrapper">
  <div class="title">Feedback 💬</div>
    <FeedbackWidget
      {projectId}
    />
  </div>
</div>

<style>
  .wrapper {
    position: fixed;
    height: 0px;
    bottom: 0;
    left: 1rem;
    transition:
      height 0.3s ease,
      width 0.3s ease;
  }
  
  .wrapper:hover {
      height: fit-content;
  }
  
  .widget-wrapper {
    border: black solid 1px;
    border-top-right-radius: 1rem;
    border-bottom: 0;
  }
  
  .widget-wrapper :global(.widget) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
  }

  .title {
      position: absolute;
      top: -32px;
      left: 0;
      background-color: var(--lb-background);
      color: var(--lb-foreground);
    text-align: center;
    width: 135px;
    padding: 5px 10px;
    cursor: pointer;
    border-top: black solid 1px;
    border-right: black solid 1px;
    border-left: black solid 1px;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    border-bottom: 0;
  }
</style>
