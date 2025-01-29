<script lang="ts">
  interface Props {
    name?: string;
  }

  let { name = "world" }: Props = $props();
  </script>
  
  <h1>Hello {name}!</h1>
  