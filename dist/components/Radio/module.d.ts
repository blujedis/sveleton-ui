import type { ThemeColor, ThemeFocused, ThemeRounded, ThemeShadowed, ThemeSize } from '../../types';
import type { radio } from './config';
export type RadioVariant = keyof typeof radio;
export type RadioProps = {
    disabled?: boolean;
    focused?: ThemeFocused;
    full?: boolean;
    rounded?: ThemeRounded;
    shadowed?: ThemeShadowed;
    size?: ThemeSize;
    theme?: ThemeColor;
    transitioned?: boolean;
    variant?: RadioVariant;
    unstyled?: boolean;
};
export declare const radioDefaults: Partial<RadioProps>;
