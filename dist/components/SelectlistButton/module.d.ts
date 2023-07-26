import type { selectListButton } from './config';
import type { IconifyIcon } from '@iconify/svelte';
import { type InputProps } from '../Input';
import type { SelectListItem } from '../SelectList';
export type SelectListButtonVariant = keyof typeof selectListButton;
export type SelectListButtonProps = InputProps & {
    caret?: string | IconifyIcon;
    filterable?: boolean;
    newable?: boolean;
    placeholder?: string;
    removable?: boolean;
    roticon?: boolean;
    tags?: boolean;
    variant?: SelectListButtonVariant;
    onBeforeAdd?: <T extends SelectListItem>(value: string, input: HTMLInputElement) => T | null | false | undefined | Promise<T | null | false | undefined>;
    onBeforeRemove?: <T extends SelectListItem>(item: T, input: HTMLInputElement) => boolean | Promise<boolean>;
};
export declare const selectListButtonDefaults: Partial<SelectListButtonProps>;
