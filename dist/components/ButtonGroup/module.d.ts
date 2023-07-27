import type { SelectStore, SelectStoreValue } from '../../stores/select';
import type { ThemeColor, ThemeFocused, ThemeRounded, ThemeSize, ThemeTransitioned } from '../../types';
import type { ButtonProps } from '../Button/module';
import type { ButtonGroupItemVariant } from '../ButtonGroupItem';
export type ButtonGroupProps = Omit<ButtonProps<'button' | 'a'>, 'disabled' | 'variant'> & {
    multiple?: boolean;
    selected?: SelectStoreValue | SelectStoreValue[];
    variant?: ButtonGroupItemVariant;
};
export type ButtonGroupContext = SelectStore & {
    globals: {
        focused: ThemeFocused;
        full: boolean;
        rounded: ThemeRounded;
        size: ThemeSize;
        theme: ThemeColor;
        transitioned: ThemeTransitioned;
        variant: ButtonGroupItemVariant;
    };
};
export declare const buttonGroupDefaults: Partial<ButtonGroupProps>;