import App from '../App.svelte';
import { mount } from "svelte";

const app : App = mount(App, { target: document.getElementById("app") as Element, props: {name:"Hello"} });


class AppClass {
    //Have to explicitly type it so I can use the props....but that doesn't work either
    public anotherApp: App

    constructor() {
        this.anotherApp = mount(App, { target: document.getElementById("app") as Element, props: {name:"Hello"} });
    }   

    public doSomething() {
        // Property 'name' does not exist on type '{ $on?(type: string, callback: (e: any) => void): () => void; $set?(props: Partial<Props>): void; }'
        console.log(this.anotherApp.name);
    }
}

