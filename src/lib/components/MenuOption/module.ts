import type { ThemeColor, ThemeSize } from '$lib/types';
import type { menuOption } from './config';

export type MenuOptionVariant = keyof typeof menuOption;

export type MenuOptionProps<Tag extends 'a' | 'button'> = {
	active?: boolean;
	as?: Tag;
	selected?: boolean;
	size?: ThemeSize;
	theme?: ThemeColor;
	key?: string | number;
	variant?: MenuOptionVariant;
};

export const menuOptionDefaults: MenuOptionProps<'a'> = {
	as: 'a',
	size: 'sm',
	theme: 'default',
	variant: 'default'
};