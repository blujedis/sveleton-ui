import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
	props: {
		store?: import('svelte/motion').Tweened<any> | undefined;
		delay?: number | undefined;
		duration?: number | ((from: any, to: any) => number) | undefined;
		easing?: ((t: number) => number) | undefined;
		interpolate?: ((a: any, b: any) => (t: number) => any) | undefined;
		animate?: boolean | undefined;
		full?: boolean | undefined;
		max?: number | undefined;
		rounded?: import('../..').ThemeRounded | undefined;
		shadowed?: import('../..').ThemeShadowed | undefined;
		size?: import('../..').ThemeSize | undefined;
		theme?: import('../..').ThemeColor | undefined;
		value?: any;
		variant?: 'default' | 'filled' | undefined;
		color?: string | null | undefined;
		title?: string | null | undefined;
		slot?: string | null | undefined;
		style?: string | null | undefined;
		hidden?: boolean | null | undefined;
		accesskey?: string | null | undefined;
		autofocus?: boolean | null | undefined;
		class?:
			| string
			| (string & Record<string, unknown>)
			| (string & import('../..').ClassArgument[])
			| null
			| undefined;
		contenteditable?: 'inherit' | import('svelte/elements').Booleanish | null | undefined;
		contextmenu?: string | null | undefined;
		dir?: string | null | undefined;
		draggable?: import('svelte/elements').Booleanish | null | undefined;
		enterkeyhint?:
			| 'search'
			| 'done'
			| 'enter'
			| 'go'
			| 'next'
			| 'previous'
			| 'send'
			| null
			| undefined;
		id?: string | null | undefined;
		lang?: string | null | undefined;
		part?: string | null | undefined;
		placeholder?: string | null | undefined;
		spellcheck?: import('svelte/elements').Booleanish | null | undefined;
		tabindex?: number | null | undefined;
		translate?: '' | 'yes' | 'no' | null | undefined;
		inert?: boolean | null | undefined;
		radiogroup?: string | null | undefined;
		role?: import('svelte/elements').AriaRole | null | undefined;
		about?: string | null | undefined;
		datatype?: string | null | undefined;
		inlist?: any;
		prefix?: string | null | undefined;
		property?: string | null | undefined;
		resource?: string | null | undefined;
		typeof?: string | null | undefined;
		vocab?: string | null | undefined;
		autocapitalize?: string | null | undefined;
		autocorrect?: string | null | undefined;
		autosave?: string | null | undefined;
		itemprop?: string | null | undefined;
		itemscope?: boolean | null | undefined;
		itemtype?: string | null | undefined;
		itemid?: string | null | undefined;
		itemref?: string | null | undefined;
		results?: number | null | undefined;
		security?: string | null | undefined;
		unselectable?: 'on' | 'off' | null | undefined;
		inputmode?:
			| 'text'
			| 'search'
			| 'none'
			| 'tel'
			| 'url'
			| 'email'
			| 'numeric'
			| 'decimal'
			| null
			| undefined;
		is?: string | null | undefined;
		'bind:innerHTML'?: string | null | undefined;
		'bind:textContent'?: string | null | undefined;
		'bind:innerText'?: string | null | undefined;
		'bind:contentRect'?: DOMRectReadOnly | null | undefined;
		'bind:contentBoxSize'?: ResizeObserverSize[] | null | undefined;
		'bind:borderBoxSize'?: ResizeObserverSize[] | null | undefined;
		'bind:devicePixelContentBoxSize'?: ResizeObserverSize[] | null | undefined;
		'aria-activedescendant'?: string | null | undefined;
		'aria-atomic'?: import('svelte/elements').Booleanish | null | undefined;
		'aria-autocomplete'?: 'none' | 'both' | 'list' | 'inline' | null | undefined;
		'aria-busy'?: import('svelte/elements').Booleanish | null | undefined;
		'aria-checked'?: boolean | 'true' | 'false' | 'mixed' | null | undefined;
		'aria-colcount'?: number | null | undefined;
		'aria-colindex'?: number | null | undefined;
		'aria-colspan'?: number | null | undefined;
		'aria-controls'?: string | null | undefined;
		'aria-current'?:
			| 'time'
			| import('svelte/elements').Booleanish
			| 'page'
			| 'step'
			| 'location'
			| 'date'
			| null
			| undefined;
		'aria-describedby'?: string | null | undefined;
		'aria-details'?: string | null | undefined;
		'aria-disabled'?: import('svelte/elements').Booleanish | null | undefined;
		'aria-dropeffect'?: 'link' | 'none' | 'copy' | 'execute' | 'move' | 'popup' | null | undefined;
		'aria-errormessage'?: string | null | undefined;
		'aria-expanded'?: import('svelte/elements').Booleanish | null | undefined;
		'aria-flowto'?: string | null | undefined;
		'aria-grabbed'?: import('svelte/elements').Booleanish | null | undefined;
		'aria-haspopup'?:
			| 'dialog'
			| 'menu'
			| import('svelte/elements').Booleanish
			| 'grid'
			| 'listbox'
			| 'tree'
			| null
			| undefined;
		'aria-hidden'?: import('svelte/elements').Booleanish | null | undefined;
		'aria-invalid'?:
			| import('svelte/elements').Booleanish
			| 'grammar'
			| 'spelling'
			| null
			| undefined;
		'aria-keyshortcuts'?: string | null | undefined;
		'aria-label'?: string | null | undefined;
		'aria-labelledby'?: string | null | undefined;
		'aria-level'?: number | null | undefined;
		'aria-live'?: 'off' | 'assertive' | 'polite' | null | undefined;
		'aria-modal'?: import('svelte/elements').Booleanish | null | undefined;
		'aria-multiline'?: import('svelte/elements').Booleanish | null | undefined;
		'aria-multiselectable'?: import('svelte/elements').Booleanish | null | undefined;
		'aria-orientation'?: 'horizontal' | 'vertical' | null | undefined;
		'aria-owns'?: string | null | undefined;
		'aria-placeholder'?: string | null | undefined;
		'aria-posinset'?: number | null | undefined;
		'aria-pressed'?: boolean | 'true' | 'false' | 'mixed' | null | undefined;
		'aria-readonly'?: import('svelte/elements').Booleanish | null | undefined;
		'aria-relevant'?:
			| 'text'
			| 'additions'
			| 'additions removals'
			| 'additions text'
			| 'all'
			| 'removals'
			| 'removals additions'
			| 'removals text'
			| 'text additions'
			| 'text removals'
			| null
			| undefined;
		'aria-required'?: import('svelte/elements').Booleanish | null | undefined;
		'aria-roledescription'?: string | null | undefined;
		'aria-rowcount'?: number | null | undefined;
		'aria-rowindex'?: number | null | undefined;
		'aria-rowspan'?: number | null | undefined;
		'aria-selected'?: import('svelte/elements').Booleanish | null | undefined;
		'aria-setsize'?: number | null | undefined;
		'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other' | null | undefined;
		'aria-valuemax'?: number | null | undefined;
		'aria-valuemin'?: number | null | undefined;
		'aria-valuenow'?: number | null | undefined;
		'aria-valuetext'?: string | null | undefined;
		'on:copy'?:
			| import('svelte/elements').ClipboardEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:cut'?:
			| import('svelte/elements').ClipboardEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:paste'?:
			| import('svelte/elements').ClipboardEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:compositionend'?:
			| import('svelte/elements').CompositionEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:compositionstart'?:
			| import('svelte/elements').CompositionEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:compositionupdate'?:
			| import('svelte/elements').CompositionEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:focus'?:
			| import('svelte/elements').FocusEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:focusin'?:
			| import('svelte/elements').FocusEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:focusout'?:
			| import('svelte/elements').FocusEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:blur'?: import('svelte/elements').FocusEventHandler<HTMLProgressElement> | null | undefined;
		'on:change'?:
			| import('svelte/elements').FormEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:beforeinput'?:
			| import('svelte/elements').EventHandler<InputEvent, HTMLProgressElement>
			| null
			| undefined;
		'on:input'?: import('svelte/elements').FormEventHandler<HTMLProgressElement> | null | undefined;
		'on:reset'?: import('svelte/elements').FormEventHandler<HTMLProgressElement> | null | undefined;
		'on:submit'?:
			| import('svelte/elements').EventHandler<SubmitEvent, HTMLProgressElement>
			| null
			| undefined;
		'on:invalid'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:formdata'?:
			| import('svelte/elements').EventHandler<FormDataEvent, HTMLProgressElement>
			| null
			| undefined;
		'on:load'?: import('svelte/elements').EventHandler<Event, Element> | null | undefined;
		'on:error'?: import('svelte/elements').EventHandler<Event, Element> | null | undefined;
		'on:toggle'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:keydown'?:
			| import('svelte/elements').KeyboardEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:keypress'?:
			| import('svelte/elements').KeyboardEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:keyup'?:
			| import('svelte/elements').KeyboardEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:abort'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:canplay'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:canplaythrough'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:cuechange'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:durationchange'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:emptied'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:encrypted'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:ended'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:loadeddata'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:loadedmetadata'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:loadstart'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:pause'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:play'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:playing'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:progress'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:ratechange'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:seeked'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:seeking'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:stalled'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:suspend'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:timeupdate'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:volumechange'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:waiting'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:auxclick'?:
			| import('svelte/elements').MouseEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:click'?:
			| import('svelte/elements').MouseEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:contextmenu'?:
			| import('svelte/elements').MouseEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:dblclick'?:
			| import('svelte/elements').MouseEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:drag'?: import('svelte/elements').DragEventHandler<HTMLProgressElement> | null | undefined;
		'on:dragend'?:
			| import('svelte/elements').DragEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:dragenter'?:
			| import('svelte/elements').DragEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:dragexit'?:
			| import('svelte/elements').DragEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:dragleave'?:
			| import('svelte/elements').DragEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:dragover'?:
			| import('svelte/elements').DragEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:dragstart'?:
			| import('svelte/elements').DragEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:drop'?: import('svelte/elements').DragEventHandler<HTMLProgressElement> | null | undefined;
		'on:mousedown'?:
			| import('svelte/elements').MouseEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:mouseenter'?:
			| import('svelte/elements').MouseEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:mouseleave'?:
			| import('svelte/elements').MouseEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:mousemove'?:
			| import('svelte/elements').MouseEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:mouseout'?:
			| import('svelte/elements').MouseEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:mouseover'?:
			| import('svelte/elements').MouseEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:mouseup'?:
			| import('svelte/elements').MouseEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:select'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:selectionchange'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:selectstart'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:touchcancel'?:
			| import('svelte/elements').TouchEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:touchend'?:
			| import('svelte/elements').TouchEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:touchmove'?:
			| import('svelte/elements').TouchEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:touchstart'?:
			| import('svelte/elements').TouchEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:gotpointercapture'?:
			| import('svelte/elements').PointerEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:pointercancel'?:
			| import('svelte/elements').PointerEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:pointerdown'?:
			| import('svelte/elements').PointerEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:pointerenter'?:
			| import('svelte/elements').PointerEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:pointerleave'?:
			| import('svelte/elements').PointerEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:pointermove'?:
			| import('svelte/elements').PointerEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:pointerout'?:
			| import('svelte/elements').PointerEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:pointerover'?:
			| import('svelte/elements').PointerEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:pointerup'?:
			| import('svelte/elements').PointerEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:lostpointercapture'?:
			| import('svelte/elements').PointerEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:scroll'?: import('svelte/elements').UIEventHandler<HTMLProgressElement> | null | undefined;
		'on:resize'?: import('svelte/elements').UIEventHandler<HTMLProgressElement> | null | undefined;
		'on:wheel'?:
			| import('svelte/elements').WheelEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:animationstart'?:
			| import('svelte/elements').AnimationEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:animationend'?:
			| import('svelte/elements').AnimationEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:animationiteration'?:
			| import('svelte/elements').AnimationEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:transitionstart'?:
			| import('svelte/elements').TransitionEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:transitionrun'?:
			| import('svelte/elements').TransitionEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:transitionend'?:
			| import('svelte/elements').TransitionEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:transitioncancel'?:
			| import('svelte/elements').TransitionEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:outrostart'?:
			| import('svelte/elements').EventHandler<CustomEvent<null>, HTMLProgressElement>
			| null
			| undefined;
		'on:outroend'?:
			| import('svelte/elements').EventHandler<CustomEvent<null>, HTMLProgressElement>
			| null
			| undefined;
		'on:introstart'?:
			| import('svelte/elements').EventHandler<CustomEvent<null>, HTMLProgressElement>
			| null
			| undefined;
		'on:introend'?:
			| import('svelte/elements').EventHandler<CustomEvent<null>, HTMLProgressElement>
			| null
			| undefined;
		'on:message'?:
			| import('svelte/elements').MessageEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:messageerror'?:
			| import('svelte/elements').MessageEventHandler<HTMLProgressElement>
			| null
			| undefined;
		'on:visibilitychange'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:cancel'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:close'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:fullscreenchange'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
		'on:fullscreenerror'?:
			| import('svelte/elements').EventHandler<Event, HTMLProgressElement>
			| null
			| undefined;
	};
	events: {
		[evt: string]: CustomEvent<any>;
	};
	slots: {
		default: {};
	};
};
export type ComponentProps = typeof __propDef.props;
export type ComponentEvents = typeof __propDef.events;
export type ComponentSlots = typeof __propDef.slots;
export default class Component extends SvelteComponentTyped<
	ComponentProps,
	ComponentEvents,
	ComponentSlots
> {
	get store(): import('svelte/motion').Tweened<any>;
}
export {};
