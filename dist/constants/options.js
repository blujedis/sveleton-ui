import { mergeConfigs } from '../theme/utils';
export const placeholder = {
    $base: '',
    unstyled: '',
    white: '',
    black: '',
    frame: '',
    primary: '',
    secondary: '',
    tertiary: '',
    danger: '',
    warning: '',
    success: '',
    info: ''
};
export const borderSizes = {
    unstyled: '',
    transparent: 'border-transparent',
    none: 'border-0',
    xs: 'border',
    sm: 'border-2',
    md: 'border-4',
    lg: 'border-6',
    xl: 'border-8',
    xl2: 'border-10'
};
export const borderStyles = {
    unstyled: '',
    none: 'border-none',
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
    double: 'border-double',
    hidden: 'border-hidden'
};
export const fontLeadings = {
    unstyled: '',
    none: 'leading-none',
    xs: 'leading-3',
    sm: 'leading-4',
    md: 'leading-5',
    lg: 'leading-6',
    xl: 'leading-7',
    xl2: 'leading-8',
    xl3: 'leading-9',
    xl4: 'leading-10',
    tight: 'leading-tight',
    snug: 'leading-snug',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose'
};
export const fieldLeading = {
    unstyled: '',
    xs: fontLeadings.md, // 'sm:leading-5',
    sm: fontLeadings.md, // 'sm:leading-5',
    md: fontLeadings.lg, // 'sm:leading-6',
    lg: fontLeadings.xl, // 'sm:leading-7',
    xl: fontLeadings.xl2, // 'sm:leading-8',
    xl2: fontLeadings.xl3 //  'sm:leading-9'
};
export const fontSizes = {
    unstyled: '',
    base: 'text-base',
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    xl2: 'text-2xl',
    xl3: 'text-3xl',
    xl4: 'text-4xl',
    xl5: 'text-5xl',
    xl6: 'text-6xl',
    xl7: 'text-7xl',
    xl8: 'text-8xl',
    xl9: 'text-9xl'
};
export const fieldPaddingX = {
    unstyled: '',
    xs: 'px-2.5',
    sm: 'px-2.5',
    md: 'px-3',
    lg: 'px-3.5',
    xl: 'px-5',
    xl2: 'px-6'
};
export const fieldFontSizes = {
    unstyled: '',
    xs: fontSizes.xs,
    sm: fontSizes.sm,
    md: fontSizes.sm,
    lg: fontSizes.base,
    xl: fontSizes.lg,
    xl2: fontSizes.xl
};
export const fieldPaddingY = {
    unstyled: '',
    xs: 'py-0.5',
    sm: 'py-1',
    md: 'py-1.5',
    lg: 'py-2',
    xl: 'py-2.5',
    xl2: 'py-3'
};
export const fieldPaddingTightY = {
    unstyled: '',
    xs: 'py-px',
    sm: 'py-0.5',
    md: 'py-1',
    lg: 'py-1.5',
    xl: 'py-2',
    xl2: 'py-2.5'
};
export const fieldUpperPaddingY = {
    unstyled: '',
    xs: 'py-1',
    sm: 'py-1.5',
    md: 'pt-2.5 pb-1.5',
    lg: 'py-2.5',
    xl: 'py-3',
    xl2: 'py-3.5'
};
export const boxPadding = {
    unstyled: '',
    xs: 'py-1.5 px-3',
    sm: 'py-3 px-4',
    md: 'py-3 px-6',
    lg: 'py-4 px-8',
    xl: 'py-5 px-10',
    xl2: 'py-6 px-12'
};
export const fieldPadding = mergeConfigs(fieldPaddingY, fieldPaddingX, fieldLeading);
export const buttonPadding = mergeConfigs(fieldPaddingY, {
    unstyled: '',
    xs: 'px-3',
    sm: 'px-3.5',
    md: 'px-5',
    lg: 'px-6',
    xl: 'px-7',
    xl2: 'px-8'
}, fieldLeading);
export const menuPadding = mergeConfigs(fieldPaddingTightY, {
    unstyled: '',
    xs: 'px-2',
    sm: 'px-2',
    md: 'px-2.5',
    lg: 'px-3',
    xl: 'px-4',
    xl2: 'px-5'
});
export const iconCaretSizes = {
    unstyled: '',
    xs: 'h-3 w-3',
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-4 w-4',
    xl: 'h-5 w-5',
    xl2: 'h-6 w-6'
};
export const objectFit = {
    unstyled: '',
    none: 'object-none',
    contain: 'object-contain',
    cover: 'object-cover',
    fill: 'object-fill',
    scaled: 'object-scale-down'
};
export const objectPosition = {
    unstyled: '',
    center: 'object-center',
    top: 'object-top',
    'top-right': 'object-right-top',
    'top-left': 'object-left-top',
    bottom: 'object-bottom',
    'bottom-right': 'object-right-bottom',
    'botom-left': 'object-left-bottom',
    left: 'object-left',
    right: 'object-right'
};
export const aspectRatio = {
    unstyled: '',
    auto: 'aspect-auto',
    square: 'aspect-square',
    video: 'aspect-video'
};
export const roundeds = {
    unstyled: '',
    none: 'rounded-none',
    xs: 'rounded-sm',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    xl2: 'rounded-2xl',
    full: 'rounded-full',
    true: 'rounded-sm',
    false: 'rounded-none'
};
export const sizeStepdown = {
    unstyled: 'unstyled',
    none: 'none',
    xs: 'xs',
    sm: 'xs',
    md: 'sm',
    lg: 'md',
    xl: 'lg',
    xl2: 'xl',
    full: 'rounded-full',
    true: 'rounded-sm',
    false: 'rounded-none'
};
export const shadows = {
    unstyled: '',
    inner: 'shadow-inner',
    none: 'shadow-none',
    xs: 'shadow-xs',
    sm: 'shadow',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    xl2: 'shadow-2xl',
    true: 'rounded-sm',
    false: 'rounded-none'
};
export const dropshadows = {
    unstyled: '',
    inner: '',
    none: 'drop-shadow-none',
    xs: 'drop-shadow-xs',
    sm: 'drop-shadow-sm',
    md: 'drop-shadow-md',
    lg: 'drop-shadow-lg',
    xl: 'drop-shadow-xl',
    xl2: 'drop-shadow-2xl',
    true: 'rounded-sm',
    false: 'rounded-none'
};
export const resizes = {
    unstyled: '',
    none: 'resize-none',
    x: 'resize-x',
    y: 'resize-y',
    both: 'resize-both'
};
export const gridgaps = {
    unstyled: '',
    none: 'gap-0',
    xs: 'gap-2',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-12',
    xl: 'gap-16',
    xl2: 'gap-24'
};
export const animate = {
    unstyled: '',
    none: 'animate-none',
    bounce: 'motion-safe:animate-bounce',
    ping: 'motion-safe:animate-ping',
    pulse: 'motion-safe:animate-pulse',
    spin: 'motion-safe:animate-spin'
};
const _hovered = {
    $base: 'hover:brightness-115',
    unstyled: '',
    white: '',
    black: '',
    frame: '',
    primary: '',
    secondary: '',
    tertiary: '',
    danger: '',
    warning: '',
    success: '',
    info: ''
};
export const hovered = {
    text: _hovered,
    filled: {
        ..._hovered,
        frame: 'hover:brightness-102 dark:hover:brightness-115'
    },
    outlined: {
        ..._hovered,
        frame: 'hover:brightness-102 dark:hover:brightness-115'
    },
    ghost: _hovered,
    flushed: _hovered,
    simple: _hovered,
    soft: {
        ..._hovered,
        frame: 'hover:brightness-102 dark:hover:brightness-115'
    },
    panel: {
        ...placeholder,
        $base: 'hover:brightness-105 dark:hover:brightness-115'
    }
};
