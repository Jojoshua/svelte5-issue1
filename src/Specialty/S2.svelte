<script lang="ts">
    import SpecialityAbstractClass from "./SpecialityAbstractClass.svelte";
    import type { Specialty_Props } from "./specialty-types";

    interface Props {
        name: Specialty_Props;
    }

    let { name }: Props = $props();
    
    function doSomething() {
        console.log("doSomething() called");
    }
</script>

<SpecialityAbstractClass {doSomething}></SpecialityAbstractClass>