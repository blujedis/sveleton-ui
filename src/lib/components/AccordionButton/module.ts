import type { SelectStoreValue } from '$lib/stores/select';
import type { ThemeColor, Iconify, HTMLTag } from '$lib/types';
import type { ButtonProps } from '../Button';
// import type { accordionButton } from './config';

export type AccordionVariant = 'filled' | 'outlined' | 'text'; // keyof typeof accordionButton;

export type AccordianButtonProps<Tag extends HTMLTag> = Omit<
	ButtonProps<'button'>,
	'as' | 'variant' | 'full' | 'focused' | 'underlined' | 'rounded' | 'shadowed' | 'href'
> & {
	as?: Tag;
	caret?: Iconify; // AccordionButtonIcon | [AccordionButtonIcon, AccordionButtonIcon];
	roticon?: boolean | string; // when true rotate expand icon ignore collapse.
	rotiangle?: 90 | 180;
	selectable?: boolean;
	key?: SelectStoreValue;
	theme?: ThemeColor;
	variant?: AccordionVariant;
};

export const accordionButtonDefaults: Partial<AccordianButtonProps<'button'>> = {
	as: 'button',
	// ['octicon:chevron-down-24', 'octicon:chevron-up-24'], 180 example
	// [ 'octicon:chevron-right-24'] set rotiangle to 90 which gives you ▶ to ▼
	caret: 'octicon:chevron-down-24',
	roticon: true,
	rotiangle: 180,
	size: 'sm'
};
