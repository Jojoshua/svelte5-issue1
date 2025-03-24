<!-- Purpose: Abstract component for all Speciality components -->
<script lang="ts">
    import type { SpecialtyComponent } from "./specialty-types";

    interface Props {
        component: SpecialtyComponent;
    }

    let { }: Props = $props();
</script>

<!-- Intentionally left blank. This is an abstract component. -->