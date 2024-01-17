import { SvelteComponent } from "svelte";
import { type ImageProps } from './module';
declare const __propDef: {
    props: ImageProps & import("svelte/elements").HTMLImgAttributes;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ComponentProps = typeof __propDef.props;
export type ComponentEvents = typeof __propDef.events;
export type ComponentSlots = typeof __propDef.slots;
export default class Component extends SvelteComponent<ComponentProps, ComponentEvents, ComponentSlots> {
}
export {};
