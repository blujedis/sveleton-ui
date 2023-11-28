import type { SelectStoreValue, SelectStore } from '$lib/stores/select';
import type {
	ThemeColor,
	ThemeFocused,
	ThemeRounded,
	ThemeShadowed,
	ThemeSize,
	ThemeTransitioned
} from '$lib/types';

import type { select } from './config';

export type SelectVariant = keyof typeof select;

export type SelectContext = SelectStore & {
	//
};

export type SelectProps = {
	disabled?: boolean;
	focused?: ThemeFocused;
	full?: boolean;
	multiple?: boolean;
	placeholder?: boolean | string;
	rows?: number; // mapped to native size attribute.
	rounded?: ThemeRounded;
	selected?: SelectStoreValue | SelectStoreValue[];
	shadowed?: ThemeShadowed;
	size?: ThemeSize;
	theme?: ThemeColor;
	transitioned?: ThemeTransitioned;
	variant?: SelectVariant;
	unstyled?: boolean;
};

export const selectDefaults: Partial<SelectProps> = {
	focused: true,
	placeholder: true,
	rounded: 'sm',
	size: 'md',
	theme: 'default',
	variant: 'outlined'
};
