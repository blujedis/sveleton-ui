import { SvelteComponent } from 'svelte';
declare const __propDef: {
	props: {
		label?: string | undefined;
		checked?: boolean | undefined;
	};
	events: {
		[evt: string]: CustomEvent<any>;
	};
	slots: {};
};
export type CheckboxProps = typeof __propDef.props;
export type CheckboxEvents = typeof __propDef.events;
export type CheckboxSlots = typeof __propDef.slots;
export default class Checkbox extends SvelteComponent<
	CheckboxProps,
	CheckboxEvents,
	CheckboxSlots
> {}
export {};
