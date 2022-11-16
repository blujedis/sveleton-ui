import { config } from '../_config';
import { pickVariant, type Palette, pick } from '@forewind/util';

const { shadow, rounded, common, colormap, animate } = config;

const default_ring = pick(colormap.theme.default, 'ring_focus');
const defGhost = { ...pick(colormap.theme.default, 'text'), default_ring };
const ghost = pickVariant(colormap.theme, 'text');

const defFilled = { ...pick(colormap.theme.default, 'bg', 'text'), default_ring };
const filled = pickVariant(colormap.theme, 'bg');

const defOutline = { ...pick(colormap.theme.default, 'text', 'border'), default_ring };
const outline = pickVariant(colormap.theme, 'text', 'border');

const main = {
	base: 'inline-flex items-center justify-center border',
	rounded: { ...rounded },
	shadow: { ...shadow },
	transition: common.transition,
	animate: animate,
	active: common.active,
	size: {
		unstyled: '',
		xs: 'h-4 w-4',
		sm: 'h-5 w-5',
		md: 'h-6 w-6',
		lg: 'h-8 w-8',
		xl: 'h-10 w-10',
		'2xl': 'h-12 w-12'
	},
	border: [] as const,
	hovered: (variant: any, theme = 'default' as any) => {
		const conf = colormap.theme[theme as keyof typeof colormap.theme];
		if (variant === 'filled') return conf.hover;
		return conf.hover_text;
	},
	variant: {
		filled: {
			base: 'text-white border-transparent',
			default: defFilled,
			themes: {
				...filled
			}
		},
		outlined: {
			base: 'border-2',
			default: defOutline,
			themes: {
				...outline
			}
		},
		ghost: {
			base: 'border-transparent',
			default: defGhost,
			themes: {
				...ghost
			}
		}
	}
};

const icon = { main };

export default icon;
