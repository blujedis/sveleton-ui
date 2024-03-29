import type { ThemeColor, ThemeSize, ThemeTransitioned } from '$lib/theme';
import type { selectOption } from './config';

export type SelectOptionVariant = keyof typeof selectOption;

export type SelectOptionProps = {
	disabled?: boolean;
	full?: boolean;
	size?: ThemeSize;
	theme?: ThemeColor;
	transitioned?: ThemeTransitioned;
	value: string | number;
	variant?: SelectOptionVariant;
	unstyled?: boolean;
};

export const selectOptionDefaults: Partial<SelectOptionProps> = {
	size: 'md',
	theme: 'default',
	variant: 'default'
};
