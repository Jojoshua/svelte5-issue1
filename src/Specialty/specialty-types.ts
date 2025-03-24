import type { Component } from "svelte";

export interface Specialty_Props {
    name: string;
}

export interface Specialty_Exports {
    title: string;
}

export interface Specialty_AbstractComponent{  
    doSomething:(data:number)=>void;
}


export type SpecialtyComponent = Component<Specialty_Props,Specialty_Exports>