<script lang="ts">
    import AbstractComponent from "./AbstractComponent.svelte";
    import type { Specialty_Props } from "./specialty-types";
    import type { svelte } from "@sveltejs/vite-plugin-svelte";
    import self from "./S1.svelte"
    import AbstractComponentFull from "./AbstractComponentFull.svelte";
 

    let { name }: Specialty_Props = $props();

    function doSomething(data: number) {
        console.log("doSomething() called");
    }
    
    export const title:string = "";
</script>

<AbstractComponent {doSomething}></AbstractComponent>

<AbstractComponentFull component={self}></AbstractComponentFull>