const baseTrackVariant = {
	$base: 'stroke-default-200',
	white: 'stroke-white',
	default: '',
	primary: '',
	secondary: '',
	tertiary: '',
	danger: '',
	warning: '',
	success: '',
	info: ''
};

const baseValueVariant = {
	$base: '',
	white: 'stroke-default-300',
	default: 'stroke-default-400',
	primary: 'stroke-primary-500',
	secondary: 'stroke-secondary-500',
	tertiary: 'stroke-tertiary-500',
	danger: 'stroke-danger-500',
	warning: 'stroke-warning-500',
	success: 'stroke-success-500',
	info: 'stroke-info-500'
};

const baseTextVariant = {
	$base: 'text-[.85em]',
	white: 'fill-white',
	default: 'fill-default-600',
	primary: 'fill-primary-600',
	secondary: 'fill-secondary-600',
	tertiary: 'fill-tertiary-600',
	danger: 'fill-danger-600',
	warning: 'fill-warning-600',
	success: 'fill-success-600',
	info: 'fill-info-600'
};

export const progressCircleTrack = {
	default: { ...baseTrackVariant },
	filled: { ...baseTrackVariant }
};

export const progressCircleValue = {
	default: { ...baseValueVariant },
	filled: { ...baseValueVariant }
};

export const progressCircleText = {
	default: { ...baseTextVariant },
	filled: { ...baseTextVariant }
};
