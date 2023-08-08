import type { ElementProps, HTMLTag } from '../../types';
export type DisclosurePanelProps<T extends HTMLTag> = ElementProps<T> & {
    as?: T;
    unmount?: boolean;
};
export declare const disclosurePanelDefaults: DisclosurePanelProps<'div'>;
