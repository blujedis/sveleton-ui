import type { ResizerPosition, ResizerRectangle } from '$lib/hooks';
import type { SelectStore } from '$lib/stores';
import type {
	ThemeColor,
	ThemeFocused,
	ThemeRounded,
	ThemeShadowed,
	ThemeSize,
	TypeOrValue
} from '$lib/types';
import { sortArray, type SortAccessor, type Primer } from '$lib/utils';
import { filterRows, gridDefaultFilters, type DataGridFilterCriteria, type DataGridFilterListItem } from './filter';

export type SortToken = 'asc' | 'desc' | 0 | 1 | '' | null;

export type DataGridDataItem = Record<string, unknown>;

export type DataGridColumnConfig<D = DataGridDataItem> = {
	accessor: TypeOrValue<keyof D>;
	filterable?: boolean;
	id?: string | number;
	label?: string;
	reorderable?: boolean;
	resizeable?: boolean;
	rowkey?: keyof D;
	sortable?: boolean;
	static?: boolean;
	width?: string; // ex: 50px will be converted to template columns.
	transform?: (value: any) => any; // used to cast search values for comparison.
} & Record<string, unknown>;

export type DataGridStore<C, D> = {
	sorting: boolean;
	appliedFilters: DataGridFilterCriteria<D>[];
	sort: SortAccessor<D>[];
	columns: Required<C>[];
	rows: D[];
	filtered: (D & Record<string, unknown>)[];
	unsorted: D[];
	datagrid?: HTMLDivElement;
};

export interface DataGridContextProps<C, D, F = DataGridFilterListItem> {
	autocols: boolean;
	divided: boolean;
	columns: C[];
	filters: F[],
	focused: ThemeFocused;
	full: boolean;
	reorderable: boolean;
	resizeable: boolean;
	rowkey: keyof D;
	rounded: ThemeRounded;
	shadowed: ThemeShadowed;
	size: ThemeSize;
	stacked: boolean;
	sticky: boolean;
	striped: boolean;
	theme: ThemeColor;
	transitioned: boolean;
}

export type DataGridContext<C = DataGridColumnConfig, D = DataGridDataItem> = SelectStore<
	DataGridStore<C, D>
> & {
	sortby(...accessors: SortAccessor<D>[]): void;
	filter(criteria: DataGridFilterCriteria<D>): void;
	filter(...criteria: DataGridFilterCriteria<D>[]): void;
	remove(rowkey: string): void;
	reset(): void;
	updateColumn: (
		accessor: string,
		config: Partial<DataGridColumnConfig>,
		done?: (columns: Required<DataGridColumnConfig>[]) => any
	) => void;
	swapColumns: (source: number, target: number) => void;
	getDataGridTemplate(columns?: C[]): string;
	getSortToken(accessor: keyof D): number;
	globals: DataGridContextProps<C, D>;
};

export type DataGridProps<C, D, F = DataGridFilterListItem> = Partial<DataGridContextProps<C, D, F>> & {
	columns: C[];
	filter?: (criteria: DataGridFilterCriteria<D>[], rows: D[], columns: C[]) => D[] | Promise<D[]>;
	sortMultiple?: boolean;
	sorter?: (items: D[], accessors: (keyof D)[], primer?: Primer) => D[] | Promise<D[]>;
	rows?: D[];
	onAfterResize?: (props: ResizerPosition & ResizerRectangle) => any;
	onBeforeRemove?: (item?: D) => boolean | Promise<boolean>;
};

const defaultBeforeRemove = <D>(_item: D) => true;


export const gridDefaults: Partial<DataGridProps<DataGridColumnConfig, DataGridDataItem>> = {
	autocols: true,
	divided: false,
	filters: [...gridDefaultFilters],
	rowkey: 'id',
	size: 'md',
	theme: 'frame',
	filter: filterRows,
	sorter: sortArray,
	onBeforeRemove: defaultBeforeRemove
};
