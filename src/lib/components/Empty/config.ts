const baseVariant = {
	$base: 'border-[3px] border-dashed relative',
	dark: 'border-frame-600 hover:border-frame-800',
	light: 'border-frame-200 hover:border-frame-300',
	primary: 'border-primary-500 hover:border-primary-600',
	secondary: 'border-secondary-500 hover:border-secondary-600',
	tertiary: 'border-tertiary-500 hover:border-tertiary-600',
	danger: 'border-danger-500 hover:border-danger-600',
	warning: 'border-warning-500 hover:border-warning-600',
	success: 'border-success-500 hover:border-success-600',
	info: 'border-info-500 hover:border-info-600'
};

export const empty = {
	default: {
		...baseVariant
	},
	outlined: {
		...baseVariant
	}
};
