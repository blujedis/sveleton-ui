import { filledTextSoft, placeholder, solid, solidGlass, text } from '../../constants';
import { mergeConfigs } from '../../theme';
export const breadcrumbNav = {
    text: { ...placeholder },
    filled: mergeConfigs(solid, filledTextSoft, {
        white: 'text-frame-200',
        light: 'text-frame-200',
        dark: 'text-frame-400'
    }),
    glass: mergeConfigs(solidGlass, text, {})
};
