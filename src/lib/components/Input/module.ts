import type {
	ThemeColor,
	ThemeFocused,
	ThemeRounded,
	ThemeShadowed,
	ThemeSize,
	ThemeTransitioned
} from '$lib/theme';
import type { input } from './config';

export type InputVariant = keyof typeof input;

export type InputProps = {
	disabled?: boolean;
	focused?: ThemeFocused;
	full?: boolean;
	rounded?: ThemeRounded;
	shadowed?: ThemeShadowed;
	size?: ThemeSize;
	theme?: ThemeColor;
	transitioned?: ThemeTransitioned;
	variant?: InputVariant;
	unstyled?: boolean;
};

export const inputDefaults: Partial<InputProps> = {
	focused: true,
	size: 'md',
	theme: 'default',
	variant: 'default'
};
