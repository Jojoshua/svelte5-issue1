import App from '../App.svelte';
import { mount } from "svelte";

const app : App = mount(App, { target: document.getElementById("app") as Element, props: {name:"Hello"} });

