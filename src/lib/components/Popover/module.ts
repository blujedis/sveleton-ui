/**
 * Global Options
 * dropshadow: (light: none)
 */
import type { SvelteComponent } from 'svelte';
import type { popover } from './config';
import type { ThemeColor, ThemeRounded, ThemeShadowed, ThemeSize } from '../../types';

export type PopoverVariant = keyof typeof popover;

export type PopoverProps = {
	hide?: () => void;
	arrowed?: boolean;
	content?: string | typeof SvelteComponent;
	rounded?: ThemeRounded;
	sanitizer?: (value: string) => string; // only allow @html when sanitized.
	shadowed?: ThemeShadowed;
	size?: ThemeSize;
	theme?: ThemeColor;
	transitioned?: boolean;
	unstyled?: boolean;
	variant?: PopoverVariant;
};

export const popoverDefaults: PopoverProps = {
	arrowed: true,
	shadowed: 'md',
	size: 'md',
	theme: 'light',
	variant: 'filled'
};
