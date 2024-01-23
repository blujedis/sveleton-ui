import { filledBg, filledText, outlinedText, outlinedRing, ghostBgHover, ghostText, filledOutlineFocusVisible, outlinedOutlineFocusVisible, ghostOutlineFocusVisible } from '../../constants/states';
import { mergeConfigs } from '../../theme/utils';
export const button = {
    text: mergeConfigs(outlinedText, outlinedOutlineFocusVisible),
    filled: mergeConfigs(filledBg, filledText, filledOutlineFocusVisible),
    outlined: mergeConfigs(outlinedText, outlinedRing, outlinedOutlineFocusVisible, {
        $base: 'ring-1'
    }),
    ghost: mergeConfigs(ghostText, ghostBgHover, ghostOutlineFocusVisible)
};