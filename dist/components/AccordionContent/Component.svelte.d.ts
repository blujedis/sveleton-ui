import { SvelteComponent } from "svelte";
import { type AccordionContentProps } from './module';
import type { ElementProps, HTMLTag } from '../../types';
declare class __sveltets_Render<Tag extends HTMLTag> {
    props(): AccordionContentProps<Tag> & ElementProps<Tag>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {};
    };
}
export type ComponentProps<Tag extends HTMLTag> = ReturnType<__sveltets_Render<Tag>['props']>;
export type ComponentEvents<Tag extends HTMLTag> = ReturnType<__sveltets_Render<Tag>['events']>;
export type ComponentSlots<Tag extends HTMLTag> = ReturnType<__sveltets_Render<Tag>['slots']>;
export default class Component<Tag extends HTMLTag> extends SvelteComponent<ComponentProps<Tag>, ComponentEvents<Tag>, ComponentSlots<Tag>> {
}
export {};