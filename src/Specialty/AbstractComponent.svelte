<!-- Purpose: Abstract component for all Speciality components -->
<script lang="ts">
    interface Props {
        doSomething: (data:number)=>void;
    }

    let { doSomething }: Props = $props();
</script>

<!-- Intentionally left blank. This is an abstract component. -->