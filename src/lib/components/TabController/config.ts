import { placeholder } from '$lib/theme';

export const tabController = {
	default: {
		...placeholder,
		$base: 'border-t-0 border-x-0 border-b border-default-200',
		white: 'border-white'
	},
	flushed: {
		...placeholder,
		$base: 'border-t-0 border-x-0 border-b border-default-200',
		white: 'border-white'
	},
	pills: { ...placeholder },
	grouped: { ...placeholder },
	labeled: {
		...placeholder,
		$base: 'border-t-0 border-x-0 border-b border-default-200',
		white: 'border-white'
	}
};
