import type { ThemeFocused, ThemeRounded, ThemeShadowed, ThemeSize, ThemeColor } from '$lib/types';

export type ButtonVariant = 'text' | 'filled' | 'outlined' | 'ghost' | 'soft';

export type ButtonProps<Tag extends 'button' | 'a'> = {
	as?: Tag;
	disabled?: boolean;
	focused?: ThemeFocused;
	full?: boolean;
	hovered?: boolean;
	href?: string | null;
	rounded?: ThemeRounded;
	shadowed?: ThemeShadowed;
	size?: ThemeSize;
	theme?: ThemeColor;
	transitioned?: boolean;
	variant?: ButtonVariant;
	underlined?: boolean | 'hover'; // when hover only shown when hovering.
};

export const buttonDefaults: Partial<ButtonProps<'button'>> = {
	as: 'button',
	hovered: true,
	size: 'md',
};
