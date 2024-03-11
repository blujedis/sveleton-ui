import { ensureArray } from '$lib/utils';
import { writable, get, type Writable } from 'svelte/store';

export type SelectStoreValue =
	| string
	| number
	| Date
	| boolean
	| bigint
	| null
	| undefined
	| HTMLElement;

export interface SelectStoreOptions {
	max?: number;
	min?: number;
	multiple?: boolean;
	selected: SelectStoreValue[];
}

export type SelectInitProps = SelectStoreOptions & {
	selected?: SelectStoreValue | SelectStoreValue[];
};

export interface SelectStoreMethods {
	restore(...selected: SelectStoreValue[]): void;
	select(value?: SelectStoreValue): void;
	unselect(value?: SelectStoreValue): void;
	toggle(value?: SelectStoreValue): void;
	isSelected(value?: SelectStoreValue): boolean;
}

export type SelectStore<P extends Record<string, any> = Record<string, any>> = Writable<
	SelectStoreOptions & P
> &
	SelectStoreMethods;

export function useSelect<P extends Record<string, any> = Record<string, any>>(
	props = {} as P & SelectInitProps
): SelectStore<P> {
	const initialSelected = ensureArray(props.selected).filter((v) => typeof v !== 'undefined');
	const store = writable({ multiple: false, ...props, selected: [...initialSelected] } as Required<
		P & SelectStoreOptions
	>);

	function getStore() {
		return get(store);
	}

	function select(value?: SelectStoreValue) {
		if (typeof value === 'undefined') return;
		store.update((s) => {
			let selected = [] as SelectStoreValue[];
			const multiple = s.multiple;
			if (multiple) selected = s.selected.includes(value) ? s.selected : [...s.selected, value];
			else selected = [value];
			return { ...s, selected: [...selected] };
		});
	}

	function unselect(value?: SelectStoreValue) {
		if (typeof value === 'undefined') return;
		store.update((s) => {
			return { ...s, selected: s.selected.filter((v: SelectStoreValue) => v !== value) };
		});
	}

	function toggle(value?: SelectStoreValue) {
		if (typeof value === 'undefined') return;
		store.update((s) => {
			let selected = [...s.selected];
			if (selected.includes(value)) selected = selected.filter((v) => v !== value);
			else if (s.multiple || !selected.length) selected = [...selected, value];
			else if (!s.multiple) selected = [value];
			return { ...s, selected };
		});
	}

	function restore(...selected: SelectStoreValue[]) {
		store.update((s) => {
			return { ...s, selected: selected.length ? [...selected] : [...initialSelected] };
		});
	}

	function isSelected(value?: SelectStoreValue): boolean {
		if (typeof value === 'undefined') return false;
		return getStore().selected.includes(value);
	}

	return {
		...store,
		restore,
		select,
		unselect,
		toggle,
		isSelected
	};
}
