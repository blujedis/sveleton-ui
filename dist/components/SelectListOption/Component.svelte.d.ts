import { SvelteComponent } from "svelte";
import { type SelectListOptionProps } from './module';
import type { ElementProps } from '../../types';
declare class __sveltets_Render<Tag extends 'button' | 'a'> {
    props(): SelectListOptionProps<Tag> & ElementProps<Tag>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {
            active: boolean;
        };
    };
}
export type ComponentProps<Tag extends 'button' | 'a'> = ReturnType<__sveltets_Render<Tag>['props']>;
export type ComponentEvents<Tag extends 'button' | 'a'> = ReturnType<__sveltets_Render<Tag>['events']>;
export type ComponentSlots<Tag extends 'button' | 'a'> = ReturnType<__sveltets_Render<Tag>['slots']>;
export default class Component<Tag extends 'button' | 'a'> extends SvelteComponent<ComponentProps<Tag>, ComponentEvents<Tag>, ComponentSlots<Tag>> {
}
export {};
