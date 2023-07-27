import type { ThemeColor, ThemeRounded, ThemeShadowed, ThemeSize } from '$lib/types';
import type { card } from './config';

export type CardVariant = keyof typeof card;

export type CardContext = {
	globals: {
		size?: ThemeSize;
		theme?: ThemeColor;
		wide?: boolean;
	};
};

export type CardProps = {
	rounded?: ThemeRounded;
	shadowed?: ThemeShadowed;
	size?: ThemeSize;
	theme?: ThemeColor;
	variant?: CardVariant;
	wide?: boolean;
};

export const cardDefaults: Partial<CardProps> = {
	size: 'md',
	theme: 'light',
	variant: 'default'
};
