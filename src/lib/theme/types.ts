import type { fontSizes, borderStyles, objectFit, aspectRatio, objectPosition } from './options';
import type * as baseOptions from './options';
import type * as componentOptions from '../components/options';
import type defaults from './defaults';
import type * as configs from '../components/configs';
import type { colors, prefixes, shades } from './constants';
import type { appcolors, namedcolors, tailwindcolors } from './palettes';

/////////////////////////////////////////////////////

export type DeepPartial<T> = T extends object
	? T extends Array<infer U>
		? DeepPartial<U>[]
		: { [K in keyof T]?: DeepPartial<T[K]> }
	: T;

/**
 * usage: PropsWithoutPrefix<keyof SomeType, '_'>
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type PropsWithoutPrefix<T, P extends string> = T extends `${P}${infer Rest}` ? never : T;

/**
 * usage: PropsWithPrefix<keyof SomeType, '_'>;
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type PropsWithPrefix<T, P extends string> = T extends `${P}${infer Rest}` ? T : never;

export type ParsePath<T, Key extends keyof T> = Key extends string
	? T[Key] extends Record<string, any>
		?
				| `${Key}.${ParsePath<T[Key], Exclude<keyof T[Key], keyof any[]>> & string}`
				| `${Key}.${Exclude<keyof T[Key], keyof any[]> & string}`
		: never
	: never;

export type ParsePathKey<T> = ParsePath<T, keyof T> | keyof T;

export type Path<T> = ParsePathKey<T> extends string | keyof T ? ParsePathKey<T> : keyof T;

export type PathValue<T, P extends Path<T>> = P extends `${infer Key}.${infer Rest}`
	? Key extends keyof T
		? Rest extends Path<T[Key]>
			? PathValue<T[Key], Rest>
			: never
		: never
	: P extends keyof T
	? T[P]
	: never;

/**
 * Maintains code help while allowing arbitrary values/string.
 */
// export type TypeOrKey<Keys extends string | number | symbol> = Keys | (string & { value?: any });

export type ColorType =
	| `${'#'}${string}`
	| `${'rgb' | 'rgba' | 'hsl' | 'hwb'}(${string})`
	| 'currentColor';

/////////////////////////////////////////////////////

export type TailwindColor = keyof typeof tailwindcolors;
export type NamedColor = keyof typeof namedcolors;
export type ThemeColorBase = typeof colors[number];
export type ThemeColorShade = typeof shades[number];
export type ThemeColorPrefix = typeof prefixes[number];
export type ThemeColor = ThemeColorBase | 'white';
export type ThemeColorKey =
	| `${ThemeColorBase}${'.' | '-'}${ThemeColorShade}`
	| ThemeColor
	| ColorType;
export type ThemePickKey = `${ThemeColorPrefix}${'.' | '-'}${ThemeColorKey}` | ThemeColorKey;

export interface ThemeConfig {
	options: ThemeOptions;
	defaults: typeof defaults;
	components: typeof configs;
	palette: typeof appcolors;
}

export type ThemeOptions = typeof baseOptions & typeof componentOptions;
export type ThemeOption = keyof ThemeOptions;
export type ThemeShade = 0 | ThemeColorShade;

export type ThemeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xl2' | 'unstyled';
export type ThemeSimpleSize = 'sm' | 'md' | 'lg';
export type ThemeRounded = ThemeSize | 'full' | 'none';
export type ThemeShadowed = ThemeSize | 'inner' | 'none';
export type ThemeFontSize = keyof typeof fontSizes;
export type ThemeBorderStyle = keyof typeof borderStyles;
export type ThemeTransitioned = boolean | 'colors' | 'all'; // bool = colors
export type ThemeResize = 'x' | 'y' | 'both';
export type ThemeSpeed = 'slow' | 'medium' | 'fast';
export type ThemeObjectFit = keyof typeof objectFit;
export type ThemeAspect = keyof typeof aspectRatio;
export type ThemeObjectPosition = keyof typeof objectPosition;
export type ThemeFocused = 'default' | 'visible' | boolean;

export type Template = string | [string, string | string[], number | number[]];
export type Templates<K extends string = string> = Record<K, Template>;
export type TemplateInternal = [string, string[], number[]];
export type TemplatesInternal<K extends string = string> = Record<K, TemplateInternal>;

/////////////////////////////////////////////////////

export type ThemeDefaults = {
	global: {
		bg: string;
		text: string;
	};
	component: {
		focused: boolean; // elements that should receive focus either always or only focus-visible.
		rounded: ThemeRounded;
		shadowed: ThemeShadowed;
		size: ThemeSize;
		theme: ThemeColor; // default theme color.
		transitioned: boolean;
	};
};
