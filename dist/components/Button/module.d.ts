import type { ThemeFocused, ThemeRounded, ThemeShadowed, ThemeSize, ThemeTransitioned, ThemeColor } from '../../types';
import type { button } from './config';
export type ButtonVariant = keyof typeof button;
export type ButtonProps<Tag extends 'button' | 'a'> = {
    as?: Tag;
    disabled?: boolean;
    focused?: ThemeFocused;
    full?: boolean;
    href?: string | null;
    strategy?: 'button' | 'text';
    rounded?: ThemeRounded;
    shadowed?: ThemeShadowed;
    size?: ThemeSize;
    theme?: ThemeColor;
    transitioned?: ThemeTransitioned;
    variant?: ButtonVariant;
    unstyled?: boolean;
};
export declare const buttonDefaults: Partial<ButtonProps<'button'>>;
