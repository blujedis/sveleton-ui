const text = 'text-slate-600 dark:text-slate-300';
const bg = 'bg-white dark:bg-gray-800';

const form = {
	form_invalid:
		'!border-rose-500 text-rose-600 dark:text-rose-500 focus:!border-rose-500 focus:!ring-rose-500/70 bg-rose-50 hover:bg-rose-50 dark:hover:bg-rose-500/10 dark:bg-rose-500/10 focus:bg-rose-50 dark:focus:bg-rose-500/10 focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-offset-white dark:focus:ring-offset-gray-800',

	form_error:
		'invalid:!border-rose-500 invalid:text-rose-600 dark:invalid:text-rose-500 focus:invalid:!border-rose-500 focus:invalid:!ring-rose-500/70 invalid:bg-rose-50 hover:invalid:bg-rose-50 dark:hover:invalid:bg-rose-500/10 dark:invalid:bg-rose-500/10 invalid:focus:bg-rose-50 dark:invalid:focus:bg-rose-500/10 invalid:focus:ring-2 invalid:focus:ring-offset-0 invalid:focus:outline-none invalid:focus:ring-offset-white dark:invalid:focus:ring-offset-gray-800',

	success:
		'!border-emerald-500 text-emerald-600 dark:text-emerald-500 focus:!border-emerald-500 focus:!ring-emerald-500/70 bg-emerald-50 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 dark:bg-emerald-500/10 focus:bg-emerald-50 dark:focus:bg-emerald-500/10 focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-offset-white dark:focus:ring-offset-gray-800',

	warning:
		'!border-amber-500 text-amber-600 dark:text-amber-500 focus:!border-amber-500 focus:!ring-amber-500/70 bg-amber-50 hover:bg-amber-50 dark:hover:bg-amber-500/10 dark:bg-amber-500/10 focus:bg-amber-50 dark:focus:bg-amber-500/10 focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-offset-white dark:focus:ring-offset-gray-800'
};

const common = {
	bg_form: bg,
	text_white: 'text-white dark:text-white',
	text_white_hover: 'hover:text-white dark:hover:text-white',
	bg_active: 'bg-rose-600 dark:bg-rose-600',
	bg_selected: 'bg-rose-600 dark:bg-rose-600',
	bg_selected_hover: 'hover:bg-rose-600 dark:hover:bg-rose-600',
	bg_active_hover: 'hover:bg-rose-600 dark:hover:bg-rose-600',
	text_active: 'text-white dark:text-white',
	text_selected: 'text-rose-600 dark:text-rose-600',
	text_active_hover: 'hover:text-white dark:hover:text-white',
	text_selected_hover: 'hover:text-white dark:hover:text-white',
};

const _default = {
	...common,
	text,
	text_hover: 'hover:text-slate-700 dark:hover:text-slate-400',
	bg: 'bg-slate-200 dark:bg-slate-600',
	bg_glass: 'bg-slate-100 dark:bg-slate-500/20',
	bg_glass_focus: 'focus:bg-slate-200/90 dark:focus:bg-slate-500/30',
	bg_range: 'bg-slate-500/40 dark:bg-slate-500/40',
	bg_hover: 'hover:bg-slate-300/80 dark:hover:bg-slate-700',
	bg_glass_hover: 'hover:bg-slate-100 dark:hover:bg-slate-500/20',
	bg_glass_highlight_hover: 'hover:bg-slate-200/90 dark:hover:bg-slate-500/30',
	bg_checked: 'checked:bg-slate-600 dark:checked:bg-slate-600',
	bg_checked_hover: 'hover:checked:bg-slate-900 dark:hover:checked:bg-slate-700',
	bg_checked_peer: 'peer-checked:bg-slate-200 dark:peer-checked:bg-slate-600',
	border: 'border-slate-300 dark:border-slate-600',
	border_focus: 'focus:border-slate-300 dark:focus:border-slate-600',
	ring: 'ring-slate-200 dark:ring-slate-600',
	ring_focus: 'focus:ring-slate-200/80 dark:focus:ring-slate-600/60',
	ring_focus_peer: 'peer-focus:ring-slate-200/80 dark:peer-focus:ring-slate-600/60',
};

const primary = {
	...common,
	text: 'text-primary dark:text-primary-200',
	text_hover: 'hover:text-primary-700 dark:hover:text-primary-700',
	bg: 'bg-primary dark:bg-primary-600',
	bg_glass: 'bg-primary-50  dark:bg-primary-600/30',
	bg_glass_focus: 'focus:bg-primary-100/60 dark:focus:bg-primary-500/30',
	bg_hover: 'hover:bg-primary-700 dark:hover:bg-primary-700',
	bg_glass_hover: 'hover:bg-primary-50  dark:hover:bg-primary-600/30',
	bg_glass_highlight_hover: 'hover:bg-primary-100/60 dark:hover:bg-primary-600/30',
	bg_checked: 'checked:bg-primary dark:checked:bg-primary-600',
	bg_checked_hover: 'hover:checked:bg-primary-700 dark:hover:checked:bg-primary-700',
	bg_checked_peer: 'peer-checked:bg-primary dark:peer-checked:bg-primary-600',
	border: 'border-primary dark:border-primary-400',
	border_focus: 'focus:border-primary dark:focus:border-primary-400',
	ring: 'ring-primary dark:ring-primary-600',
	ring_focus: 'focus:ring-primary/30 dark:focus:ring-primary-600/30',
	ring_focus_peer: 'peer-focus:ring-primary/30 dark:peer-focus:ring-primary-600/30',
};

const secondary = {
	...common,
	text: 'text-secondary dark:text-secondary',
	text_hover: 'hover:text-secondary-700 dark:hover:text-secondary-700',
	bg: 'bg-secondary dark:bg-secondary',
	bg_glass: 'bg-secondary-50  dark:bg-secondary-500/20',
	bg_glass_focus: 'focus:bg-secondary-100/60 dark:focus:bg-secondary-500/30',
	bg_hover: 'hover:bg-secondary-700 dark:hover:bg-secondary-700',
	bg_glass_hover: 'hover:bg-secondary-50 dark:hover:bg-secondary-500/20',
	bg_glass_highlight_hover: 'hover:bg-secondary-100/60 dark:hover:bg-secondary-500/30',
	bg_checked: 'checked:bg-secondary dark:checked:bg-secondary',
	bg_checked_hover: 'hover:checked:bg-secondary-900 dark:hover:checked:bg-secondary-700',
	bg_checked_peer: 'peer-checked:bg-secondary dark:peer-checked:bg-secondary',
	border: 'border-secondary dark:border-secondary',
	border_focus: 'focus:border-secondary-600 dark:focus:border-secondary-600',
	ring: 'ring-secondary dark:ring-secondary',
	ring_focus: 'focus:ring-secondary/30 dark:focus:ring-secondary/30',
	ring_focus_peer: 'peer-focus:ring-secondary/30 dark:peer-focus:ring-secondary/30',
};

const tertiary = {
	...common,
	text: 'text-tertiary dark:text-tertiary',
	text_hover: 'hover:text-tertiary-700 dark:hover:text-tertiary-700',
	bg: 'bg-tertiary dark:bg-tertiary',
	bg_glass: 'bg-tertiary-50  dark:bg-tertiary-500/20',
	bg_glass_focus: 'focus:bg-tertiary-100/60 dark:focus:bg-tertiary-500/30',
	bg_hover: 'hover:bg-tertiary-700 dark:hover:bg-tertiary-700',
	bg_glass_hover: 'hover:bg-tertiary-50  dark:hover:bg-tertiary-500/20',
	bg_glass_highlight_hover: 'hover:bg-tertiary-100/60 dark:hover:bg-tertiary-500/30',
	bg_checked: 'checked:bg-tertiary dark:checked:bg-tertiary',
	bg_checked_hover: 'hover:checked:bg-tertiary-900 dark:hover:checked:bg-tertiary-700',
	bg_checked_peer: 'peer-checked:bg-tertiary dark:peer-checked:bg-tertiary',
	border: 'border-tertiary dark:border-tertiary',
	border_focus: 'focus:border-tertiary dark:focus:border-tertiary',
	ring: 'ring-tertiary dark:ring-tertiary',
	ring_focus: 'focus:ring-tertiary/30 dark:focus:ring-tertiary/30',
	ring_focus_peer: 'peer-focus:ring-tertiary/30 dark:peer-focus:ring-tertiary/30',

};

const quaternary = {
	...common,
	text: 'text-quaternary dark:text-quaternary',
	text_hover: 'hover:text-quaternary-700 dark:hover:text-quaternary-700',
	bg: 'bg-quaternary dark:bg-quaternary',
	bg_glass: 'bg-quaternary-50  dark:bg-quaternary-500/20',
	bg_glass_focus: 'focus:bg-quaternary-100/60 dark:focus:bg-quaternary-500/30',
	bg_hover: 'hover:bg-quaternary-700 dark:hover:bg-quaternary-700',
	bg_glass_hover: 'hover:bg-quaternary-50  dark:hover:bg-quaternary-500/20',
	bg_glass_highlight_hover: 'hover:bg-quaternary-100/60 dark:hover:bg-quaternary-500/30',
	bg_checked: 'checked:bg-quaternary dark:checked:bg-quaternary',
	bg_checked_hover: 'hover:checked:bg-quaternary-900 dark:hover:checked:bg-quaternary-700',
	bg_checked_peer: 'peer-checked:bg-quaternary dark:peer-checked:bg-quaternary',
	border: 'border-quaternary dark:border-quaternary',
	border_focus: 'focus:border-quaternary dark:focus:border-quaternary',
	ring: 'ring-quaternary dark:ring-quaternary',
	ring_focus: 'focus:ring-quaternary/30 dark:focus:ring-quaternary/30',
	ring_focus_peer: 'peer-focus:ring-quaternary/30 dark:peer-focus:ring-quaternary/30',
};

const danger = {
	...common,
	text: 'text-danger dark:text-danger',
	text_hover: 'hover:text-danger-700 dark:hover:text-danger-700',
	bg: 'bg-danger dark:bg-danger',
	bg_glass: 'bg-danger-50 dark:bg-danger-500/20',
	bg_glass_focus: 'focus:bg-danger-100/60 dark:focus:bg-danger-500/30',
	bg_hover: 'hover:bg-danger-700 dark:hover:bg-danger-700',
	bg_glass_hover: 'hover:bg-danger-50  dark:hover:bg-danger-500/20',
	bg_glass_highlight_hover: 'hover:bg-danger-100/60 dark:hover:bg-danger-500/30',
	bg_checked: 'checked:bg-danger dark:checked:bg-danger',
	bg_checked_hover: 'hover:checked:bg-danger-900 dark:hover:checked:bg-danger-700',
	bg_checked_peer: 'peer-checked:bg-danger dark:peer-checked:bg-danger',
	border: 'border-danger dark:border-danger',
	border_focus: 'focus:border-danger dark:focus:border-danger',
	ring: 'ring-danger dark:ring-danger',
	ring_focus: 'focus:ring-danger/30 dark:focus:ring-danger/30',
	ring_focus_peer: 'peer-focus:ring-danger/30 dark:peer-focus:ring-danger/30',
};

const warning = {
	...common,
	text: 'text-warning dark:text-warning',
	text_hover: 'hover:text-warning-700 dark:hover:text-warning-700',
	bg: 'bg-warning dark:bg-warning',
	bg_glass: 'bg-warning-50  dark:bg-warning-500/20',
	bg_glass_focus: 'focus:bg-warning-100/60 dark:focus:bg-warning-500/30',
	bg_hover: 'hover:bg-warning-700 dark:hover:bg-warning-700',
	bg_glass_hover: 'hover:bg-warning-50  dark:hover:bg-warning-500/20',
	bg_glass_highlight_hover: 'hover:bg-warning-100/60 dark:hover:bg-warning-500/30',
	bg_checked: 'checked:bg-warning dark:checked:bg-warning',
	bg_checked_hover: 'hover:checked:bg-warning-900 dark:hover:checked:bg-warning-700',
	bg_checked_peer: 'peer-checked:bg-warning dark:peer-checked:bg-warning',
	border: 'border-warning darl"border-warning',
	border_focus: 'focus:border-warning dark:focus:border-warning',
	ring: 'ring-warning dark:ring-warning',
	ring_focus: 'focus:ring-warning/30 dark:focus:ring-warning/30',
	ring_focus_peer: 'peer-focus:ring-warning/30 dark:peer-focus:ring-warning/30',
};

const success = {
	...common,
	text: 'text-success dark:text-success',
	text_hover: 'hover:text-success-700 dark:hover:text-success-700',
	bg: 'bg-success dark:bg-success',
	bg_glass: 'bg-success-50  dark:bg-success-500/20',
	bg_glass_focus: 'focus:bg-success-100/60 dark:focus:bg-success-500/30',
	bg_hover: 'hover:bg-success-700 dark:hover:bg-success-700',
	bg_glass_hover: 'hover:bg-success-50  dark:hover:bg-success-500/20',
	bg_glass_highlight_hover: 'hover:bg-success-100/60 dark:hover:bg-success-500/30',
	bg_checked: 'checked:bg-success dark:checked:bg-success',
	bg_checked_hover: 'hover:checked:bg-success-900 dark:hover:checked:bg-success-700',
	bg_checked_peer: 'peer-checked:bg-success dark:peer-checked:bg-success',
	border: 'border-success dark:border-success',
	border_focus: 'focus:border-success dark:focus:border-success',
	ring: 'ring-success dark:ring-success',
	ring_focus: 'focus:ring-success/30 dark:focus:ring-success/30',
	ring_focus_peer: 'peer-focus:ring-success/30 dark:peer-focus:ring-success/30',

};

const info = {
	...common,
	text: 'text-info dark:text-info',
	text_hover: 'hover:text-info-700 dark:hover:text-info-700',
	bg: 'bg-info dark:bg-info',
	bg_glass: 'bg-info-50  dark:bg-info-500/20',
	bg_glass_focus: 'focus:bg-info-100/60 dark:focus:bg-info-500/30text',
	bg_hover: 'hover:bg-info-700 dark:hover:bg-info-700',
	bg_glass_hover: 'hover:bg-info-50  dark:hover:bg-info-500/20',
	bg_glass_highlight_hover: 'hover:bg-info-100/60 dark:hover:bg-info-500/30',
	bg_checked: 'checked:bg-info dark:checked:bg-info',
	bg_checked_hover: 'hover:checked:bg-info-900 dark:hover:checked:bg-info-700',
	bg_checked_peer: 'peer-checked:bg-info dark:peer-checked:bg-info',
	border: 'border-info dark:border-info',
	border_focus: 'focus:border-info dark:focus:border-info',
	ring: 'ring-info dark:ring-info',
	ring_focus: 'focus:ring-info/30 dark:focus:ring-info/30',
	ring_focus_peer: 'peer-focus:ring-info/30 dark:peer-focus:ring-info/30',
};

const colormap = {
	bg,
	text,
	form,
	theme: {
		default: _default,
		primary,
		secondary,
		tertiary,
		quaternary,
		danger,
		warning,
		success,
		info
	}
};

export default colormap;
