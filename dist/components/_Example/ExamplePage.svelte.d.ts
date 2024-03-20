import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        title?: string | undefined;
        description?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ExamplePageProps = typeof __propDef.props;
export type ExamplePageEvents = typeof __propDef.events;
export type ExamplePageSlots = typeof __propDef.slots;
export default class ExamplePage extends SvelteComponent<ExamplePageProps, ExamplePageEvents, ExamplePageSlots> {
}
export {};
