<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import EmojiScale from "./emoji-scale.svelte";
  import UserInput from "./user-input.svelte";
  import StatusSuccess from "./status-success.svelte";
  import StatusFailure from "./status-failure.svelte";

  export let projectId: string;

  let selectedEmotion: null | 1 | 2 | 3;
  $: selectedEmotion = null;
  let email: null | string;
  let note: null | string;
  let form: HTMLFormElement;
  let submitSuccess: boolean | null;
  $: submitSuccess = null;

  $: if (selectedEmotion) {
    dispatch("emotion-changed", { emotion: selectedEmotion });
  }

  const handleSubmit = async (event: SubmitEvent) => {
    const feedback = {
      type: "feedback",
      payload: {
        emotion: selectedEmotion,
        note,
        email,
      },
      projectId,
    };

    const url = `${window.location.hostname === "localhost" ? "http://localhost:5173" : "https://dash.loopback.works"}/api/feedback`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedback),
    });

    if (res.ok) {
      submitSuccess = true;
    } else {
      submitSuccess = false;
    }
    form.reset();

    setTimeout(() => {
      selectedEmotion = null;
      email = null;
      note = null;
      submitSuccess = null;
    }, 5000);
  };
</script>

<div
  class="lb-m-auto lb-bg-background lb-text-foreground lb-font-medium loopback-root lb-max-w-md lb-rounded-tr-2xl lb-space-y-6 lb-px-6 lb-py-8"
>
  {#if submitSuccess === true}
    <StatusSuccess />
  {:else if submitSuccess === false}
    <StatusFailure />
  {:else}
    <p class="lb-text-center lb-font-bold">Leave feedback</p>
    <form
      bind:this={form}
      action="post"
      on:submit|preventDefault={handleSubmit}
    >
      {#if selectedEmotion}
        <UserInput bind:selectedEmotion bind:email bind:note />
      {:else}
        <EmojiScale bind:selectedEmotion />
      {/if}
    </form>
  {/if}
  <p class="lb-text-[0.6rem] lb-text-center">
    Powered by{" "}
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://loopback.works/"
      class="lb-font-bold"
    >
      Loopback
    </a>
  </p>
</div>
