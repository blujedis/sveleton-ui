import type {
	ThemeColor,
	ThemeRounded,
	ThemeShadowed,
	ThemeSize,
	ThemeTransitioned
} from '$lib/types';
import type { tile } from './config';

export type TileVariant = keyof typeof tile;

export type TileProps = {
	full?: boolean;
	rounded?: ThemeRounded;
	shadowed?: ThemeShadowed;
	size?: ThemeSize;
	theme?: ThemeColor;
	transitioned?: boolean;
	variant?: TileVariant;
};

export const tileDefaults: Partial<TileProps> = {
	rounded: 'md',
	size: 'md',
	theme: 'default',
	variant: 'filled'
};
