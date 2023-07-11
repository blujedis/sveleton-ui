import type { ThemeColor, ThemeShadowed, ThemeSimpleSize, ThemeSpeed } from '../../theme';
import type { SvelteComponent } from 'svelte';
import type { drawer } from './config';
export type DrawerVariant = keyof typeof drawer;
export type DrawerProps = {
    backdrop?: boolean;
    content?: typeof SvelteComponent<Record<string, unknown>>;
    contentProps?: Record<string, unknown>;
    position?: 'left' | 'right';
    shadowed?: ThemeShadowed;
    size?: ThemeSimpleSize;
    speed?: ThemeSpeed;
    theme?: ThemeColor;
    variant?: DrawerVariant;
};
export declare const drawerPositionMap: {
    left: string;
    right: string;
};
export declare const drawerSizeMap: {
    sm: string;
    md: string;
    lg: string;
};
export declare const drawerSpeedMap: {
    slow: number;
    medium: number;
    fast: number;
};
export declare const drawerOffsetMap: Record<ThemeSimpleSize, {
    left: string | number;
    right: string | number;
}>;
export declare const drawerDefaults: Partial<DrawerProps>;