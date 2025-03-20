<script lang="ts">
    import AbstractComponent from "./AbstractComponent.svelte";
import type { Specialty_Props } from "./specialty-types";

    interface Props {
        name: Specialty_Props;
    }

    let { name }: Props = $props();

    function doSomething(data: number) {
        console.log("doSomething() called");
    }
</script>

<AbstractComponent {doSomething}></AbstractComponent>