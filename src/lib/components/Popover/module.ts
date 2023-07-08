/**
 * Global Options
 * dropshadow: (default: none)
 */
import type { SvelteComponent } from 'svelte';
import type { popover } from './config';
import type {
	ThemeColor,
	ThemeRounded,
	ThemeShadowed,
	ThemeSize,
	ThemeTransitioned
} from '$lib/theme';

export type PopoverVariant = keyof typeof popover;

export type PopoverProps = {
	arrowed?: boolean;
	content?: string | typeof SvelteComponent<any> | null;
	rounded?: ThemeRounded;
	shadowed?: ThemeShadowed;
	size?: ThemeSize;
	theme?: ThemeColor;
	transitioned?: ThemeTransitioned;
	unstyled?: boolean;
	variant?: PopoverVariant;
};

export const popoverDefaults: PopoverProps = {
	arrowed: true,
	shadowed: 'md',
	size: 'md',
	theme: 'default',
	unstyled: false,
	variant: 'default'
};
