import type { SelectStore } from '../../stores';
import type { ThemeColor, ThemeFocused, ThemeRounded, ThemeShadowed, ThemeSize, ThemeTransitioned } from '../../types';
import { type SortAccessor, type Primer } from '../../utils';
import type { grid } from './config';
export type DataGridVariant = keyof typeof grid;
export type SortToken = 'asc' | 'desc' | 0 | 1 | '' | null;
export type DataGridDataItem = Record<string, any>;
export type DataGridColumnConfig<D = DataGridDataItem> = {
    label?: string;
    accessor: keyof D;
    sortable?: boolean;
    filterable?: boolean;
    width?: string;
} & Record<string, any>;
export type DataGridStore<C, D> = {
    sort: SortAccessor<D>[];
    columns: Required<C>[];
    items: D[];
    filtered: D[];
    grid?: HTMLDivElement;
};
export interface DataGridContextProps<C, D> {
    autocols: boolean;
    divided: boolean;
    columns: C[];
    focused: ThemeFocused;
    full: boolean;
    rowkey: keyof D;
    rounded: ThemeRounded;
    shadowed: ThemeShadowed;
    size: ThemeSize;
    stacked: boolean;
    sticky: boolean;
    striped: boolean;
    theme: ThemeColor;
    transitioned: ThemeTransitioned;
    variant: DataGridVariant;
}
export type DataGridContext<C = DataGridColumnConfig, D = DataGridDataItem> = SelectStore<DataGridStore<C, D>> & {
    sortby(...accessors: SortAccessor<D>[]): void;
    filter(query: string, ...accessors: (keyof D)[]): void;
    remove(rowkey: string): void;
    reset(): void;
    getDataGridTemplate(type?: 'rows' | 'cols', columns?: C[]): `grid-cols-[${string}]`;
    getSortToken(accessor: keyof D): number;
    globals: DataGridContextProps<C, D>;
};
export type DataGridProps<C, D> = Partial<DataGridContextProps<C, D>> & {
    columns: C[];
    filter?(query: string, items: D[], ...accessors: (keyof D)[]): D[] | Promise<D[]>;
    sorter?: (items: D[], accessors: (keyof D)[], primer?: Primer) => D[] | Promise<D[]>;
    items?: D[] | Promise<D[]>;
    onBeforeRemove?: (item?: D) => boolean | Promise<boolean>;
};
export declare const gridDefaults: Partial<DataGridProps<DataGridColumnConfig, DataGridDataItem>>;