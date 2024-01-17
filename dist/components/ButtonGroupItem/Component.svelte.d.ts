import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Omit<import("../Button").ButtonProps<"a" | "button">, "shadowed" | "variant"> & {
        value: string | number;
        variant?: "text" | "filled" | "outlined" | "ghost" | undefined;
    } & import("svelte/elements").HTMLButtonAttributes;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ComponentProps = typeof __propDef.props;
export type ComponentEvents = typeof __propDef.events;
export type ComponentSlots = typeof __propDef.slots;
export default class Component extends SvelteComponent<ComponentProps, ComponentEvents, ComponentSlots> {
}
export {};
