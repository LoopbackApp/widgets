<svelte:options customElement="loopback-widget" />

<script lang="ts">
  import { FeedbackWidget } from "@loopbackapp/widget-svelte";

  export let projectId: string;

  let isExpanded = false;
</script>

<div
  role="dialog"
  class="wrapper"
  class:expanded={isExpanded}
>
  <div class="widget">
  <div class="title lb-bg-background lb-text-foreground">Feedback 💬</div>
    <FeedbackWidget
      {projectId}
      on:emotion-changed={(event) => {
        console.log({ event });
        isExpanded = true;
      }}
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
  
  .wrapper.expanded {
      height: 0px;
      width: 450px;      
  }
  
  .wrapper:hover {
      height: fit-content;
  }
  
  .wrapper:hover.expanded {
      width: 450px;
  }

  .widget {
    border: black solid 1px;
    border-top-right-radius: 1rem;
    border-bottom: 0;
  }

  .title {
      position: absolute;
      top: -34px;
      left: 0;
    /*margin-bottom: -1px;*/ /* To cover the .widget top border */
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

  /* .title::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: white;
    z-index: 1;
  } */
</style>
