import { SvelteComponent } from 'svelte';
declare const __propDef: {
	props: {
		store?: import('svelte/motion').Tweened<number> | undefined;
		delay?: number | undefined;
		duration?: number | ((from: any, to: any) => number) | undefined;
		easing?: ((t: number) => number) | undefined;
		interpolate?: ((a: any, b: any) => (t: number) => any) | undefined;
		animate?: boolean | undefined;
		max?: number | undefined;
		shadowed?: import('../..').ThemeShadowed | undefined;
		size?: number | import('../..').ThemeSize | undefined;
		text?: string | boolean | undefined;
		textunit?: string | undefined;
		theme?: import('../..').ThemeColor | undefined;
		tracksize?: number | import('../..').ThemeSize | undefined;
		value?: any;
		variant?: 'default' | 'filled' | undefined;
		string?: string | number | null | undefined;
		fill?: string | null | undefined;
		stroke?: string | null | undefined;
		filter?: string | null | undefined;
		values?: string | null | undefined;
		color?: string | null | undefined;
		style?: string | null | undefined;
		mask?: string | null | undefined;
		path?: string | null | undefined;
		x?: string | number | null | undefined;
		y?: string | number | null | undefined;
		class?:
			| string
			| (string & Record<string, unknown>)
			| (string & import('../..').ClassArgument[])
			| null
			| undefined;
		id?: string | null | undefined;
		lang?: string | null | undefined;
		tabindex?: number | null | undefined;
		role?: import('svelte/elements').AriaRole | null | undefined;
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
		'on:copy'?: import('svelte/elements').ClipboardEventHandler<SVGSVGElement> | null | undefined;
		'on:cut'?: import('svelte/elements').ClipboardEventHandler<SVGSVGElement> | null | undefined;
		'on:paste'?: import('svelte/elements').ClipboardEventHandler<SVGSVGElement> | null | undefined;
		'on:compositionend'?:
			| import('svelte/elements').CompositionEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:compositionstart'?:
			| import('svelte/elements').CompositionEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:compositionupdate'?:
			| import('svelte/elements').CompositionEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:focus'?: import('svelte/elements').FocusEventHandler<SVGSVGElement> | null | undefined;
		'on:focusin'?: import('svelte/elements').FocusEventHandler<SVGSVGElement> | null | undefined;
		'on:focusout'?: import('svelte/elements').FocusEventHandler<SVGSVGElement> | null | undefined;
		'on:blur'?: import('svelte/elements').FocusEventHandler<SVGSVGElement> | null | undefined;
		'on:change'?: import('svelte/elements').FormEventHandler<SVGSVGElement> | null | undefined;
		'on:beforeinput'?:
			| import('svelte/elements').EventHandler<InputEvent, SVGSVGElement>
			| null
			| undefined;
		'on:input'?: import('svelte/elements').FormEventHandler<SVGSVGElement> | null | undefined;
		'on:reset'?: import('svelte/elements').FormEventHandler<SVGSVGElement> | null | undefined;
		'on:submit'?:
			| import('svelte/elements').EventHandler<SubmitEvent, SVGSVGElement>
			| null
			| undefined;
		'on:invalid'?: import('svelte/elements').EventHandler<Event, SVGSVGElement> | null | undefined;
		'on:formdata'?:
			| import('svelte/elements').EventHandler<FormDataEvent, SVGSVGElement>
			| null
			| undefined;
		'on:load'?: import('svelte/elements').EventHandler<Event, Element> | null | undefined;
		'on:error'?: import('svelte/elements').EventHandler<Event, Element> | null | undefined;
		'on:toggle'?: import('svelte/elements').EventHandler<Event, SVGSVGElement> | null | undefined;
		'on:keydown'?: import('svelte/elements').KeyboardEventHandler<SVGSVGElement> | null | undefined;
		'on:keypress'?:
			| import('svelte/elements').KeyboardEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:keyup'?: import('svelte/elements').KeyboardEventHandler<SVGSVGElement> | null | undefined;
		'on:abort'?: import('svelte/elements').EventHandler<Event, SVGSVGElement> | null | undefined;
		'on:canplay'?: import('svelte/elements').EventHandler<Event, SVGSVGElement> | null | undefined;
		'on:canplaythrough'?:
			| import('svelte/elements').EventHandler<Event, SVGSVGElement>
			| null
			| undefined;
		'on:cuechange'?:
			| import('svelte/elements').EventHandler<Event, SVGSVGElement>
			| null
			| undefined;
		'on:durationchange'?:
			| import('svelte/elements').EventHandler<Event, SVGSVGElement>
			| null
			| undefined;
		'on:emptied'?: import('svelte/elements').EventHandler<Event, SVGSVGElement> | null | undefined;
		'on:encrypted'?:
			| import('svelte/elements').EventHandler<Event, SVGSVGElement>
			| null
			| undefined;
		'on:ended'?: import('svelte/elements').EventHandler<Event, SVGSVGElement> | null | undefined;
		'on:loadeddata'?:
			| import('svelte/elements').EventHandler<Event, SVGSVGElement>
			| null
			| undefined;
		'on:loadedmetadata'?:
			| import('svelte/elements').EventHandler<Event, SVGSVGElement>
			| null
			| undefined;
		'on:loadstart'?:
			| import('svelte/elements').EventHandler<Event, SVGSVGElement>
			| null
			| undefined;
		'on:pause'?: import('svelte/elements').EventHandler<Event, SVGSVGElement> | null | undefined;
		'on:play'?: import('svelte/elements').EventHandler<Event, SVGSVGElement> | null | undefined;
		'on:playing'?: import('svelte/elements').EventHandler<Event, SVGSVGElement> | null | undefined;
		'on:progress'?: import('svelte/elements').EventHandler<Event, SVGSVGElement> | null | undefined;
		'on:ratechange'?:
			| import('svelte/elements').EventHandler<Event, SVGSVGElement>
			| null
			| undefined;
		'on:seeked'?: import('svelte/elements').EventHandler<Event, SVGSVGElement> | null | undefined;
		'on:seeking'?: import('svelte/elements').EventHandler<Event, SVGSVGElement> | null | undefined;
		'on:stalled'?: import('svelte/elements').EventHandler<Event, SVGSVGElement> | null | undefined;
		'on:suspend'?: import('svelte/elements').EventHandler<Event, SVGSVGElement> | null | undefined;
		'on:timeupdate'?:
			| import('svelte/elements').EventHandler<Event, SVGSVGElement>
			| null
			| undefined;
		'on:volumechange'?:
			| import('svelte/elements').EventHandler<Event, SVGSVGElement>
			| null
			| undefined;
		'on:waiting'?: import('svelte/elements').EventHandler<Event, SVGSVGElement> | null | undefined;
		'on:auxclick'?: import('svelte/elements').MouseEventHandler<SVGSVGElement> | null | undefined;
		'on:click'?: import('svelte/elements').MouseEventHandler<SVGSVGElement> | null | undefined;
		'on:contextmenu'?:
			| import('svelte/elements').MouseEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:dblclick'?: import('svelte/elements').MouseEventHandler<SVGSVGElement> | null | undefined;
		'on:drag'?: import('svelte/elements').DragEventHandler<SVGSVGElement> | null | undefined;
		'on:dragend'?: import('svelte/elements').DragEventHandler<SVGSVGElement> | null | undefined;
		'on:dragenter'?: import('svelte/elements').DragEventHandler<SVGSVGElement> | null | undefined;
		'on:dragexit'?: import('svelte/elements').DragEventHandler<SVGSVGElement> | null | undefined;
		'on:dragleave'?: import('svelte/elements').DragEventHandler<SVGSVGElement> | null | undefined;
		'on:dragover'?: import('svelte/elements').DragEventHandler<SVGSVGElement> | null | undefined;
		'on:dragstart'?: import('svelte/elements').DragEventHandler<SVGSVGElement> | null | undefined;
		'on:drop'?: import('svelte/elements').DragEventHandler<SVGSVGElement> | null | undefined;
		'on:mousedown'?: import('svelte/elements').MouseEventHandler<SVGSVGElement> | null | undefined;
		'on:mouseenter'?: import('svelte/elements').MouseEventHandler<SVGSVGElement> | null | undefined;
		'on:mouseleave'?: import('svelte/elements').MouseEventHandler<SVGSVGElement> | null | undefined;
		'on:mousemove'?: import('svelte/elements').MouseEventHandler<SVGSVGElement> | null | undefined;
		'on:mouseout'?: import('svelte/elements').MouseEventHandler<SVGSVGElement> | null | undefined;
		'on:mouseover'?: import('svelte/elements').MouseEventHandler<SVGSVGElement> | null | undefined;
		'on:mouseup'?: import('svelte/elements').MouseEventHandler<SVGSVGElement> | null | undefined;
		'on:select'?: import('svelte/elements').EventHandler<Event, SVGSVGElement> | null | undefined;
		'on:selectionchange'?:
			| import('svelte/elements').EventHandler<Event, SVGSVGElement>
			| null
			| undefined;
		'on:selectstart'?:
			| import('svelte/elements').EventHandler<Event, SVGSVGElement>
			| null
			| undefined;
		'on:touchcancel'?:
			| import('svelte/elements').TouchEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:touchend'?: import('svelte/elements').TouchEventHandler<SVGSVGElement> | null | undefined;
		'on:touchmove'?: import('svelte/elements').TouchEventHandler<SVGSVGElement> | null | undefined;
		'on:touchstart'?: import('svelte/elements').TouchEventHandler<SVGSVGElement> | null | undefined;
		'on:gotpointercapture'?:
			| import('svelte/elements').PointerEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:pointercancel'?:
			| import('svelte/elements').PointerEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:pointerdown'?:
			| import('svelte/elements').PointerEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:pointerenter'?:
			| import('svelte/elements').PointerEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:pointerleave'?:
			| import('svelte/elements').PointerEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:pointermove'?:
			| import('svelte/elements').PointerEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:pointerout'?:
			| import('svelte/elements').PointerEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:pointerover'?:
			| import('svelte/elements').PointerEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:pointerup'?:
			| import('svelte/elements').PointerEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:lostpointercapture'?:
			| import('svelte/elements').PointerEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:scroll'?: import('svelte/elements').UIEventHandler<SVGSVGElement> | null | undefined;
		'on:resize'?: import('svelte/elements').UIEventHandler<SVGSVGElement> | null | undefined;
		'on:wheel'?: import('svelte/elements').WheelEventHandler<SVGSVGElement> | null | undefined;
		'on:animationstart'?:
			| import('svelte/elements').AnimationEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:animationend'?:
			| import('svelte/elements').AnimationEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:animationiteration'?:
			| import('svelte/elements').AnimationEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:transitionstart'?:
			| import('svelte/elements').TransitionEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:transitionrun'?:
			| import('svelte/elements').TransitionEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:transitionend'?:
			| import('svelte/elements').TransitionEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:transitioncancel'?:
			| import('svelte/elements').TransitionEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:outrostart'?:
			| import('svelte/elements').EventHandler<CustomEvent<null>, SVGSVGElement>
			| null
			| undefined;
		'on:outroend'?:
			| import('svelte/elements').EventHandler<CustomEvent<null>, SVGSVGElement>
			| null
			| undefined;
		'on:introstart'?:
			| import('svelte/elements').EventHandler<CustomEvent<null>, SVGSVGElement>
			| null
			| undefined;
		'on:introend'?:
			| import('svelte/elements').EventHandler<CustomEvent<null>, SVGSVGElement>
			| null
			| undefined;
		'on:message'?: import('svelte/elements').MessageEventHandler<SVGSVGElement> | null | undefined;
		'on:messageerror'?:
			| import('svelte/elements').MessageEventHandler<SVGSVGElement>
			| null
			| undefined;
		'on:visibilitychange'?:
			| import('svelte/elements').EventHandler<Event, SVGSVGElement>
			| null
			| undefined;
		'on:cancel'?: import('svelte/elements').EventHandler<Event, SVGSVGElement> | null | undefined;
		'on:close'?: import('svelte/elements').EventHandler<Event, SVGSVGElement> | null | undefined;
		'on:fullscreenchange'?:
			| import('svelte/elements').EventHandler<Event, SVGSVGElement>
			| null
			| undefined;
		'on:fullscreenerror'?:
			| import('svelte/elements').EventHandler<Event, SVGSVGElement>
			| null
			| undefined;
		mode?: string | number | null | undefined;
		rotate?: string | number | null | undefined;
		width?: string | number | null | undefined;
		height?: string | number | null | undefined;
		name?: string | null | undefined;
		min?: string | number | null | undefined;
		href?: string | null | undefined;
		media?: string | null | undefined;
		target?: string | null | undefined;
		origin?: string | number | null | undefined;
		type?: string | null | undefined;
		direction?: string | number | null | undefined;
		crossorigin?: '' | 'anonymous' | 'use-credentials' | null | undefined;
		speed?: string | number | null | undefined;
		opacity?: string | number | null | undefined;
		preserveAspectRatio?: string | null | undefined;
		viewBox?: string | null | undefined;
		className?: string | null | undefined;
		method?: string | null | undefined;
		'accent-height'?: string | number | null | undefined;
		accumulate?: 'none' | 'sum' | null | undefined;
		additive?: 'replace' | 'sum' | null | undefined;
		'alignment-baseline'?:
			| 'inherit'
			| 'auto'
			| 'alphabetic'
			| 'hanging'
			| 'ideographic'
			| 'mathematical'
			| 'baseline'
			| 'before-edge'
			| 'text-before-edge'
			| 'middle'
			| 'central'
			| 'after-edge'
			| 'text-after-edge'
			| null
			| undefined;
		allowReorder?: 'yes' | 'no' | null | undefined;
		alphabetic?: string | number | null | undefined;
		amplitude?: string | number | null | undefined;
		'arabic-form'?: 'initial' | 'medial' | 'terminal' | 'isolated' | null | undefined;
		ascent?: string | number | null | undefined;
		attributeName?: string | null | undefined;
		attributeType?: string | null | undefined;
		autoReverse?: string | number | null | undefined;
		azimuth?: string | number | null | undefined;
		baseFrequency?: string | number | null | undefined;
		'baseline-shift'?: string | number | null | undefined;
		baseProfile?: string | number | null | undefined;
		bbox?: string | number | null | undefined;
		begin?: string | number | null | undefined;
		bias?: string | number | null | undefined;
		by?: string | number | null | undefined;
		calcMode?: string | number | null | undefined;
		'cap-height'?: string | number | null | undefined;
		clip?: string | number | null | undefined;
		'clip-path'?: string | null | undefined;
		clipPathUnits?: string | number | null | undefined;
		'clip-rule'?: string | number | null | undefined;
		'color-interpolation'?: string | number | null | undefined;
		'color-interpolation-filters'?: 'inherit' | 'auto' | 'sRGB' | 'linearRGB' | null | undefined;
		'color-profile'?: string | number | null | undefined;
		'color-rendering'?: string | number | null | undefined;
		contentScriptType?: string | number | null | undefined;
		contentStyleType?: string | number | null | undefined;
		cursor?: string | number | null | undefined;
		cx?: string | number | null | undefined;
		cy?: string | number | null | undefined;
		d?: string | null | undefined;
		decelerate?: string | number | null | undefined;
		descent?: string | number | null | undefined;
		diffuseConstant?: string | number | null | undefined;
		display?: string | number | null | undefined;
		divisor?: string | number | null | undefined;
		'dominant-baseline'?: string | number | null | undefined;
		dur?: string | number | null | undefined;
		dx?: string | number | null | undefined;
		dy?: string | number | null | undefined;
		edgeMode?: string | number | null | undefined;
		elevation?: string | number | null | undefined;
		'enable-background'?: string | number | null | undefined;
		end?: string | number | null | undefined;
		exponent?: string | number | null | undefined;
		externalResourcesRequired?: string | number | null | undefined;
		'fill-opacity'?: string | number | null | undefined;
		'fill-rule'?: 'inherit' | 'nonzero' | 'evenodd' | null | undefined;
		filterRes?: string | number | null | undefined;
		filterUnits?: string | number | null | undefined;
		'flood-color'?: string | number | null | undefined;
		'flood-opacity'?: string | number | null | undefined;
		focusable?: string | number | null | undefined;
		'font-family'?: string | null | undefined;
		'font-size'?: string | number | null | undefined;
		'font-size-adjust'?: string | number | null | undefined;
		'font-stretch'?: string | number | null | undefined;
		'font-style'?: string | number | null | undefined;
		'font-variant'?: string | number | null | undefined;
		'font-weight'?: string | number | null | undefined;
		format?: string | number | null | undefined;
		from?: string | number | null | undefined;
		fx?: string | number | null | undefined;
		fy?: string | number | null | undefined;
		g1?: string | number | null | undefined;
		g2?: string | number | null | undefined;
		'glyph-name'?: string | number | null | undefined;
		'glyph-orientation-horizontal'?: string | number | null | undefined;
		'glyph-orientation-vertical'?: string | number | null | undefined;
		glyphRef?: string | number | null | undefined;
		gradientTransform?: string | null | undefined;
		gradientUnits?: string | null | undefined;
		hanging?: string | number | null | undefined;
		'horiz-adv-x'?: string | number | null | undefined;
		'horiz-origin-x'?: string | number | null | undefined;
		ideographic?: string | number | null | undefined;
		'image-rendering'?: string | number | null | undefined;
		in2?: string | number | null | undefined;
		in?: string | null | undefined;
		intercept?: string | number | null | undefined;
		k1?: string | number | null | undefined;
		k2?: string | number | null | undefined;
		k3?: string | number | null | undefined;
		k4?: string | number | null | undefined;
		k?: string | number | null | undefined;
		kernelMatrix?: string | number | null | undefined;
		kernelUnitLength?: string | number | null | undefined;
		kerning?: string | number | null | undefined;
		keyPoints?: string | number | null | undefined;
		keySplines?: string | number | null | undefined;
		keyTimes?: string | number | null | undefined;
		lengthAdjust?: string | number | null | undefined;
		'letter-spacing'?: string | number | null | undefined;
		'lighting-color'?: string | number | null | undefined;
		limitingConeAngle?: string | number | null | undefined;
		local?: string | number | null | undefined;
		'marker-end'?: string | null | undefined;
		markerHeight?: string | number | null | undefined;
		'marker-mid'?: string | null | undefined;
		'marker-start'?: string | null | undefined;
		markerUnits?: string | number | null | undefined;
		markerWidth?: string | number | null | undefined;
		maskContentUnits?: string | number | null | undefined;
		maskUnits?: string | number | null | undefined;
		mathematical?: string | number | null | undefined;
		numOctaves?: string | number | null | undefined;
		offset?: string | number | null | undefined;
		operator?: string | number | null | undefined;
		order?: string | number | null | undefined;
		orient?: string | number | null | undefined;
		orientation?: string | number | null | undefined;
		overflow?: string | number | null | undefined;
		'overline-position'?: string | number | null | undefined;
		'overline-thickness'?: string | number | null | undefined;
		'paint-order'?: string | number | null | undefined;
		'panose-1'?: string | number | null | undefined;
		pathLength?: string | number | null | undefined;
		patternContentUnits?: string | null | undefined;
		patternTransform?: string | number | null | undefined;
		patternUnits?: string | null | undefined;
		'pointer-events'?: string | number | null | undefined;
		points?: string | null | undefined;
		pointsAtX?: string | number | null | undefined;
		pointsAtY?: string | number | null | undefined;
		pointsAtZ?: string | number | null | undefined;
		preserveAlpha?: string | number | null | undefined;
		primitiveUnits?: string | number | null | undefined;
		r?: string | number | null | undefined;
		radius?: string | number | null | undefined;
		refX?: string | number | null | undefined;
		refY?: string | number | null | undefined;
		'rendering-intent'?: string | number | null | undefined;
		repeatCount?: string | number | null | undefined;
		repeatDur?: string | number | null | undefined;
		requiredExtensions?: string | number | null | undefined;
		requiredFeatures?: string | number | null | undefined;
		restart?: string | number | null | undefined;
		result?: string | null | undefined;
		rx?: string | number | null | undefined;
		ry?: string | number | null | undefined;
		scale?: string | number | null | undefined;
		seed?: string | number | null | undefined;
		'shape-rendering'?: string | number | null | undefined;
		slope?: string | number | null | undefined;
		spacing?: string | number | null | undefined;
		specularConstant?: string | number | null | undefined;
		specularExponent?: string | number | null | undefined;
		spreadMethod?: string | null | undefined;
		startOffset?: string | number | null | undefined;
		stdDeviation?: string | number | null | undefined;
		stemh?: string | number | null | undefined;
		stemv?: string | number | null | undefined;
		stitchTiles?: string | number | null | undefined;
		'stop-color'?: string | null | undefined;
		'stop-opacity'?: string | number | null | undefined;
		'strikethrough-position'?: string | number | null | undefined;
		'strikethrough-thickness'?: string | number | null | undefined;
		'stroke-dasharray'?: string | number | null | undefined;
		'stroke-dashoffset'?: string | number | null | undefined;
		'stroke-linecap'?: 'inherit' | 'square' | 'round' | 'butt' | null | undefined;
		'stroke-linejoin'?: 'inherit' | 'round' | 'miter' | 'bevel' | null | undefined;
		'stroke-miterlimit'?: string | null | undefined;
		'stroke-opacity'?: string | number | null | undefined;
		'stroke-width'?: string | number | null | undefined;
		surfaceScale?: string | number | null | undefined;
		systemLanguage?: string | number | null | undefined;
		tableValues?: string | number | null | undefined;
		targetX?: string | number | null | undefined;
		targetY?: string | number | null | undefined;
		'text-anchor'?: string | null | undefined;
		'text-decoration'?: string | number | null | undefined;
		textLength?: string | number | null | undefined;
		'text-rendering'?: string | number | null | undefined;
		to?: string | number | null | undefined;
		transform?: string | null | undefined;
		u1?: string | number | null | undefined;
		u2?: string | number | null | undefined;
		'underline-position'?: string | number | null | undefined;
		'underline-thickness'?: string | number | null | undefined;
		unicode?: string | number | null | undefined;
		'unicode-bidi'?: string | number | null | undefined;
		'unicode-range'?: string | number | null | undefined;
		'units-per-em'?: string | number | null | undefined;
		'v-alphabetic'?: string | number | null | undefined;
		'vector-effect'?: string | number | null | undefined;
		version?: string | null | undefined;
		'vert-adv-y'?: string | number | null | undefined;
		'vert-origin-x'?: string | number | null | undefined;
		'vert-origin-y'?: string | number | null | undefined;
		'v-hanging'?: string | number | null | undefined;
		'v-ideographic'?: string | number | null | undefined;
		viewTarget?: string | number | null | undefined;
		visibility?: string | number | null | undefined;
		'v-mathematical'?: string | number | null | undefined;
		widths?: string | number | null | undefined;
		'word-spacing'?: string | number | null | undefined;
		'writing-mode'?: string | number | null | undefined;
		x1?: string | number | null | undefined;
		x2?: string | number | null | undefined;
		xChannelSelector?: string | null | undefined;
		'x-height'?: string | number | null | undefined;
		'xlink:actuate'?: string | null | undefined;
		'xlink:arcrole'?: string | null | undefined;
		'xlink:href'?: string | null | undefined;
		'xlink:role'?: string | null | undefined;
		'xlink:show'?: string | null | undefined;
		'xlink:title'?: string | null | undefined;
		'xlink:type'?: string | null | undefined;
		'xml:base'?: string | null | undefined;
		'xml:lang'?: string | null | undefined;
		xmlns?: string | null | undefined;
		'xmlns:xlink'?: string | null | undefined;
		'xml:space'?: string | null | undefined;
		y1?: string | number | null | undefined;
		y2?: string | number | null | undefined;
		yChannelSelector?: string | null | undefined;
		z?: string | number | null | undefined;
		zoomAndPan?: string | null | undefined;
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
export default class Component extends SvelteComponent<
	ComponentProps,
	ComponentEvents,
	ComponentSlots
> {
	get store(): import('svelte/motion').Tweened<number>;
}
export {};
