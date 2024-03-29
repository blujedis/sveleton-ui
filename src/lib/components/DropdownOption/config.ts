const baseVariant = {
	$base: 'text-default-500',
	white: 'hover:text-default-200 aria-selected:text-white aria-selected:hover:text-white',
	default: 'hover:text-default-800 aria-selected:text-default-800',
	primary: 'hover:text-primary-600 aria-selected:text-primary-600',
	secondary: 'hover:text-secondary-600 aria-selected:text-secondary-600',
	tertiary: 'hover:text-tertiary-600 aria-selected:text-tertiary-600',
	danger: 'hover:text-danger-600 aria-selected:text-danger-600',
	warning: 'hover:text-warning-600 aria-selected:text-warning-600',
	success: 'hover:text-success-600 aria-selected:text-success-600',
	info: 'hover:text-info-600 aria-selected:text-info-600'
};
export const dropdownOption = {
	default: { ...baseVariant },
	filled: { ...baseVariant },
	outlined: { ...baseVariant },
	text: { ...baseVariant },
	ghost: { ...baseVariant }
};
