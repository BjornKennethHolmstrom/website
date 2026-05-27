<script lang="ts">
  export let title: string;
</script>

<nav class="mb-6 text-sm inline-flex items-center gap-1">
  <a
    href="/governance-simulator"
    class="flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
      <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
    </svg>
    Governance Simulator
  </a>
  <span class="opacity-40">/ {title}</span>
</nav>
