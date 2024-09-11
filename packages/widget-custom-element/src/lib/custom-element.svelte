<svelte:options customElement="loopback-widget" />

<script lang="ts">
  import { FeedbackWidget } from "@loopbackapp/widget-svelte";

  export let projectId: string;

  $: wrapperHeight = "35px";
  $: wrapperWidth = "";
  let isExpanded = false;

  function handleMouseEnter() {
    if (isExpanded) {
      wrapperHeight = "400px";
      wrapperWidth = "450px";
    } else {
      wrapperHeight = "215px";
    }
  }

  function handleMouseLeave() {
    wrapperHeight = "35px";
  }
</script>

<div
  role="dialog"
  style:height={wrapperHeight}
  style:width={wrapperWidth}
  class="wrapper"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  <div class="title">Feedback 💬</div>
  <div class="widget">
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
    bottom: 0;
    left: 1rem;
    overflow: hidden;
    transition:
      height 0.3s ease,
      width 0.3s ease;
  }

  .widget {
    border: black solid 1px;
    border-top-right-radius: 0.75rem;
    border-bottom: 0;
  }

  .title {
    position: relative;
    text-align: center;
    width: 135px;
    padding: 5px 10px;
    cursor: pointer;
    border-top: black solid 1px;
    border-right: black solid 1px;
    border-left: black solid 1px;
    border-top-right-radius: 0.75rem;
    border-top-left-radius: 0.75rem;
    border-bottom: 0;
  }

  .title::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: white;
    z-index: 1;
  }
</style>
