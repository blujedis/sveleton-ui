import type { IconifyIcon } from '@iconify/svelte';
import { inputDefaults } from '../Input/module';
import type { InputProps } from '../Input';
import type { DropdownItem } from '../Dropdown/module';

export interface DropdownFilterHandler {
	(item: Required<DropdownItem>): boolean;
	(items: Required<DropdownItem>[]): Required<DropdownItem>[];
}

export type DropdownInputProps = InputProps & {
	caret?: null | string | IconifyIcon;
	filterable?: boolean;
	multiple?: boolean;
	newable?: boolean; // allows for new items when in multiselect mode.
	removable?: boolean; // allow remove when in multiselect mode.
	resetable?: boolean;
	placeholder?: string;
	roticon?: string | boolean;
};

export const dropdownInputDefaults: DropdownInputProps = {
	...inputDefaults,
	caret: 'octicon:chevron-down-24', // 'mdi:chevron-down', //  mdi:unfold-more-horizontal
	filterable: false,
	newable: false,
	placeholder: 'Please Select',
	removable: true,
	resetable: true,
	roticon: true
};
