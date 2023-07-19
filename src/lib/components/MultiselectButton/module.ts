import type { multiselectButton } from './config';
import { type ButtonProps, buttonDefaults } from '../Button';
import type { IconifyIcon } from '@iconify/svelte';

export type MultiselectButtonVariant = keyof typeof multiselectButton;

type ButtonPropsBase = Omit<ButtonProps<'button'>, 'as'>;

export type MultiselectButtonProps = ButtonPropsBase & {
	caret?: null | string | IconifyIcon;
	roticon?: boolean;
	view?: 'text' | 'counter',
	variant?: MultiselectButtonVariant;
};

export const multiselectButtonDefaults = {
	...buttonDefaults,
	caret: 'octicon:chevron-down-24', // 'mdi:chevron-down', //  mdi:unfold-more-horizontal,
	placeholder: '',
	roticon: true,
	variant: 'outlined'
};