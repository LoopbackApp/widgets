<script lang="ts">
  import IconHeartBroken from "@tabler/icons-svelte/icons/heart-broken";
</script>

<div class="lb-flex lb-space-y-2 lb-flex-col lb-items-center lb-justify-center">
  <IconHeartBroken
    class="lb-text-red-700 lb-slide-in-from-bottom-4 lb-duration-700 lb-fade-in-0 lb-animate-in"
    size={36}
  />
  <p
    class="lb-animate-in lb-font-semibold lb-duration-700 lb-fade-in lb-slide-in-from-bottom-4"
  >
    Something went wrong...
  </p>
  <p
    class="lb-animate-in lb-text-sm lb-text-neutral-600 lb-duration-700 lb-fade-in lb-slide-in-from-bottom-4"
  >
    Please try again later
  </p>
</div>
