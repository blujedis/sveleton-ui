const baseVariant = {
	$base: 'aria-expanded:border-b border-b-default-200 rounded-none',
	white: 'aria-expanded:text-white',
	default: 'aria-expanded:text-default-800',
	primary: 'aria-expanded:text-primary-500',
	secondary: 'aria-expanded:text-secondary-500',
	tertiary: 'aria-expanded:text-tertiary-500',
	danger: 'aria-expanded:text-danger-500',
	warning: 'aria-expanded:text-warning-500',
	success: 'aria-expanded:text-success-500',
	info: 'aria-expanded:text-info-500'
};

export const accordionButton = {
	default: { ...baseVariant },
	outlined: { ...baseVariant },
	flushed: {
		$base: 'border-b border-default-200',
		white: 'aria-expanded:text-white',
		default: 'aria-expanded:text-default-900',
		primary: 'aria-expanded:text-primary-500',
		secondary: 'aria-expanded:text-secondary-500',
		tertiary: 'aria-expanded:text-tertiary-500',
		danger: 'aria-expanded:text-danger-500',
		warning: 'aria-expanded:text-warning-500',
		success: 'aria-expanded:text-success-500',
		info: 'aria-expanded:text-info-500'
	},
	pills: {
		$base: 'aria-expanded:text-white bg-default-100',
		white: 'aria-expanded:text-inherit aria-expanded:bg-default-200',
		default: 'aria-expanded:text-inherit aria-expanded:bg-default-200',
		primary: 'aria-expanded:bg-primary-500',
		secondary: 'aria-expanded:bg-secondary-500',
		tertiary: 'aria-expanded:bg-tertiary-500',
		danger: 'aria-expanded:bg-danger-500',
		warning: 'aria-expanded:bg-warning-500',
		success: 'aria-expanded:bg-success-500',
		info: 'aria-expanded:bg-info-500'
	}
};
