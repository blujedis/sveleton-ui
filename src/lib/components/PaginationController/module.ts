import type {
	ThemeColor,
	ThemeRounded,
	ThemeShadowed,
	ThemeSize,
	ThemeTransitioned
} from '$lib/theme';
import type { PaginatorOptions, PaginatorStore } from '$lib/stores/paginator';
import type { paginationPage } from '../PaginationPage/config';

export type PaginationControllerContext<T extends Record<string, any> = Record<string, any>> =
	PaginatorStore<T> & {
		globals: {
			rounded?: ThemeRounded;
			shadowed?: ThemeShadowed;
			size?: ThemeSize;
			theme?: ThemeColor;
			transitioned?: ThemeTransitioned;
			variant?: PaginationControllerVariant;
		};
	};

export type PaginationControllerVariant = keyof typeof paginationPage;

export interface PaginationControllerProps<T extends Record<string, any> = Record<string, any>>
	extends PaginatorOptions<T> {
	ellipsis?: boolean;
	rounded?: ThemeRounded;
	shadowed?: ThemeShadowed;
	size?: ThemeSize;
	theme?: ThemeColor;
	transitioned?: ThemeTransitioned;
	variant?: PaginationControllerVariant;
}

export const paginationControllerDefaults: Partial<PaginationControllerProps> = {
	rounded: 'full',
	size: 'md',
	theme: 'default',
	variant: 'flushed'
};
