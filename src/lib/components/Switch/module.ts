import type { ThemeColor, ThemeFocused, ThemeShadowed, ThemeSize } from '$lib/theme';
import type { switchBackdrop } from './config';

export type SwitchVariant = keyof typeof switchBackdrop;

export type SwitchProps = {
	classHandle?: string;
	classFill?: string;
	classBackdrop?: string;
	disabled?: boolean;
	focused?: ThemeFocused;
	shadowed?: ThemeShadowed;
	size?: ThemeSize;
	srtext?: string;
	theme?: ThemeColor;
	variant?: SwitchVariant;
	unstyled?: boolean;
};

export const switchDefaults: Partial<SwitchProps> = {
	focused: true,
	size: 'md',
	srtext: 'Use Switch',
	theme: 'default',
	variant: 'default'
};
