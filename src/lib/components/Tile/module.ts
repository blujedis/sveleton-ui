import type { ThemeColor, ThemeRounded, ThemeShadowed, ThemeSize } from '$lib/types';

export type TileVariant = 'filled' | 'outlined' | 'soft';

export type TileProps = {
	bordered?: boolean;
	centered?: boolean;
	dropshadowed?: ThemeShadowed;
	focused?: boolean;
	full?: boolean;
	href?: string;
	hovered?: boolean;
	rounded?: ThemeRounded;
	shadowed?: ThemeShadowed;
	size?: ThemeSize;
	theme?: ThemeColor;
	transitioned?: boolean;
	variant?: TileVariant;
};

export const tileDefaults: Partial<TileProps> = {
	centered: true,
	rounded: 'md',
	size: 'md',
	theme: 'frame',
};
