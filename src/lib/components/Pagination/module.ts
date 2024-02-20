import type {
	ThemeColor,
	ThemeRounded,
	ThemeShadowed,
	ThemeSize,
} from '$lib/types';
import type { PaginatorOptions, PaginatorStore } from '$lib/stores/paginator';

export type PaginationContext<T extends Record<string, any> = Record<string, any>> =
	PaginatorStore<T> & {
		globals: {
			focused: boolean;
			hovered: boolean;
			rounded: ThemeRounded;
			// shadowed: ThemeShadowed;
			size: ThemeSize;
			theme: ThemeColor;
			transitioned: boolean;
			variant: PaginationVariant;
		};
	};

export type PaginationVariant = 'filled' | 'flushed' | 'soft'; 

export interface PaginationProps<T extends Record<string, any> = Record<string, any>>
	extends PaginatorOptions<T> {
	ellipsis?: boolean;
	focused?: boolean;
	hovered?: boolean;
	rounded?: ThemeRounded;
	shadowed?: ThemeShadowed;
	size?: ThemeSize;
	theme?: ThemeColor;
	transitioned?: boolean;
	variant?: PaginationVariant;
}

export const paginationDefaults: Partial<PaginationProps> = {
	size: 'md',
	theme: 'frame',
	variant: 'filled'
};
