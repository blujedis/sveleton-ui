import { placeholder, common } from '$lib/constants/options';
import { mergeConfigs } from '$lib/theme/utils';
import { commonBgAriaExpanded, commonTextAriaExpanded } from '../options';

const { default: defaultBg, ...restBg } = commonBgAriaExpanded;
const { default: defaultText, ...restText } = commonTextAriaExpanded;

export const accordionButton = {
	filled: mergeConfigs({ default: 'aria-expanded:text-current' }, restBg),
	outlined: mergeConfigs({ default: 'text-current' }, restText),
	grouped: mergeConfigs({ default: 'aria-expanded:text-current' }, restBg),
	unstyled: mergeConfigs({ default: 'text-current' }, restText),
};
