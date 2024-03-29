import type { ThemeColor, ThemeSize } from '$lib/theme';
import type { ElementNativeProps } from '../types';
import type { dropdownOptionGroup } from './config';

export type DropdownOptionGroupVariant = keyof typeof dropdownOptionGroup;

export type DropdownOptionGroupProps = ElementNativeProps<'a'> & {
	group?: string;
	size?: ThemeSize;
	theme?: ThemeColor;
	variant?: DropdownOptionGroupVariant;
};

export const dropdownOptionGroupDefaults: Partial<DropdownOptionGroupProps> = {
	size: 'sm',
	theme: 'default',
	variant: 'default'
};
