import { cubicOut } from 'svelte/easing';
import type { ThemeColor, ThemeRounded, ThemeShadowed, ThemeSize } from '$lib/theme';
import type { progressBar } from './config';

export type ProgressBarVariant = keyof typeof progressBar;

export type ProgressBarTweenedOptions<T extends number = any> = {
	delay?: number;
	duration?: number | ((from: T, to: T) => number);
	easing?: (t: number) => number;
	interpolate?: (a: T, b: T) => (t: number) => T;
};

export type ProgressBarProps<T extends number = any> = ProgressBarTweenedOptions<T> & {
	animate?: boolean;
	full?: boolean;
	max?: number;
	rounded?: ThemeRounded;
	shadowed?: ThemeShadowed;
	size?: ThemeSize;
	theme?: ThemeColor;
	value?: T;
	variant?: ProgressBarVariant;
};

export const progressBarDefaults: ProgressBarProps<any> = {
	animate: true,
	duration: 400,
	easing: cubicOut,
	max: 100,
	size: 'md',
	theme: 'default',
	value: 0,
	variant: 'default'
};
