import type { ButtonProps } from '../Button/module';

export type ButtonGroupVariant = 'text' | 'filled' | 'outlined' | 'ghost' | 'soft'; 

export type ButtonGroupItemProps = Omit<ButtonProps<'button' | 'a'>, 'shadowed' | 'variant'> & {
	value: string | number;
	variant?: ButtonGroupVariant;
};

export const buttonGroupItemDefaults: Partial<ButtonGroupItemProps> = {
	variant: 'filled'
};
