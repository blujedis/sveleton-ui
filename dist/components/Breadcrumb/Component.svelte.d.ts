import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        flush?: boolean | undefined;
        full?: boolean | undefined;
        generated?: boolean | undefined;
        rounded?: any;
        shadowed?: any;
        size?: any;
        theme?: any;
        transitioned?: any;
        variant?: "default" | "filled" | "unfilled" | undefined;
        reversed?: boolean | null | undefined;
        start?: number | null | undefined;
        type?: "a" | "i" | "1" | "A" | "I" | null | undefined;
        accesskey?: string | null | undefined;
        autofocus?: boolean | null | undefined;
        class?: string | (string & Record<string, unknown>) | (string & import("../..").ClassArgument[]) | null | undefined;
        contenteditable?: "inherit" | import("svelte/elements").Booleanish | null | undefined;
        contextmenu?: string | null | undefined;
        dir?: string | null | undefined;
        draggable?: import("svelte/elements").Booleanish | null | undefined;
        enterkeyhint?: "search" | "done" | "enter" | "go" | "next" | "previous" | "send" | null | undefined;
        hidden?: boolean | null | undefined;
        id?: string | null | undefined;
        lang?: string | null | undefined;
        part?: string | null | undefined;
        placeholder?: string | null | undefined;
        slot?: string | null | undefined;
        spellcheck?: import("svelte/elements").Booleanish | null | undefined;
        style?: string | null | undefined;
        tabindex?: number | null | undefined;
        title?: string | null | undefined;
        translate?: "" | "yes" | "no" | null | undefined;
        inert?: boolean | null | undefined;
        radiogroup?: string | null | undefined;
        role?: import("svelte/elements").AriaRole | null | undefined;
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
        color?: string | null | undefined;
        itemprop?: string | null | undefined;
        itemscope?: boolean | null | undefined;
        itemtype?: string | null | undefined;
        itemid?: string | null | undefined;
        itemref?: string | null | undefined;
        results?: number | null | undefined;
        security?: string | null | undefined;
        unselectable?: "on" | "off" | null | undefined;
        inputmode?: "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | null | undefined;
        is?: string | null | undefined;
        'bind:innerHTML'?: string | null | undefined;
        'bind:textContent'?: string | null | undefined;
        'bind:innerText'?: string | null | undefined;
        'bind:contentRect'?: DOMRectReadOnly | null | undefined;
        'bind:contentBoxSize'?: ResizeObserverSize[] | null | undefined;
        'bind:borderBoxSize'?: ResizeObserverSize[] | null | undefined;
        'bind:devicePixelContentBoxSize'?: ResizeObserverSize[] | null | undefined;
        'data-sveltekit-keepfocus'?: true | "" | "off" | null | undefined;
        'data-sveltekit-noscroll'?: true | "" | "off" | null | undefined;
        'data-sveltekit-preload-code'?: true | "" | "off" | "eager" | "viewport" | "hover" | "tap" | null | undefined;
        'data-sveltekit-preload-data'?: true | "" | "off" | "hover" | "tap" | null | undefined;
        'data-sveltekit-reload'?: true | "" | "off" | null | undefined;
        'data-sveltekit-replacestate'?: true | "" | "off" | null | undefined;
        'aria-activedescendant'?: string | null | undefined;
        'aria-atomic'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-autocomplete'?: "none" | "both" | "list" | "inline" | null | undefined;
        'aria-busy'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-checked'?: boolean | "true" | "false" | "mixed" | null | undefined;
        'aria-colcount'?: number | null | undefined;
        'aria-colindex'?: number | null | undefined;
        'aria-colspan'?: number | null | undefined;
        'aria-controls'?: string | null | undefined;
        'aria-current'?: "time" | import("svelte/elements").Booleanish | "page" | "step" | "location" | "date" | null | undefined;
        'aria-describedby'?: string | null | undefined;
        'aria-details'?: string | null | undefined;
        'aria-disabled'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-dropeffect'?: "link" | "none" | "copy" | "execute" | "move" | "popup" | null | undefined;
        'aria-errormessage'?: string | null | undefined;
        'aria-expanded'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-flowto'?: string | null | undefined;
        'aria-grabbed'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-haspopup'?: "dialog" | "menu" | import("svelte/elements").Booleanish | "grid" | "listbox" | "tree" | null | undefined;
        'aria-hidden'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-invalid'?: import("svelte/elements").Booleanish | "grammar" | "spelling" | null | undefined;
        'aria-keyshortcuts'?: string | null | undefined;
        'aria-label'?: string | null | undefined;
        'aria-labelledby'?: string | null | undefined;
        'aria-level'?: number | null | undefined;
        'aria-live'?: "off" | "assertive" | "polite" | null | undefined;
        'aria-modal'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-multiline'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-multiselectable'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-orientation'?: "horizontal" | "vertical" | null | undefined;
        'aria-owns'?: string | null | undefined;
        'aria-placeholder'?: string | null | undefined;
        'aria-posinset'?: number | null | undefined;
        'aria-pressed'?: boolean | "true" | "false" | "mixed" | null | undefined;
        'aria-readonly'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-relevant'?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | null | undefined;
        'aria-required'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-roledescription'?: string | null | undefined;
        'aria-rowcount'?: number | null | undefined;
        'aria-rowindex'?: number | null | undefined;
        'aria-rowspan'?: number | null | undefined;
        'aria-selected'?: import("svelte/elements").Booleanish | null | undefined;
        'aria-setsize'?: number | null | undefined;
        'aria-sort'?: "none" | "ascending" | "descending" | "other" | null | undefined;
        'aria-valuemax'?: number | null | undefined;
        'aria-valuemin'?: number | null | undefined;
        'aria-valuenow'?: number | null | undefined;
        'aria-valuetext'?: string | null | undefined;
        'on:copy'?: import("svelte/elements").ClipboardEventHandler<HTMLOListElement> | null | undefined;
        'on:cut'?: import("svelte/elements").ClipboardEventHandler<HTMLOListElement> | null | undefined;
        'on:paste'?: import("svelte/elements").ClipboardEventHandler<HTMLOListElement> | null | undefined;
        'on:compositionend'?: import("svelte/elements").CompositionEventHandler<HTMLOListElement> | null | undefined;
        'on:compositionstart'?: import("svelte/elements").CompositionEventHandler<HTMLOListElement> | null | undefined;
        'on:compositionupdate'?: import("svelte/elements").CompositionEventHandler<HTMLOListElement> | null | undefined;
        'on:focus'?: import("svelte/elements").FocusEventHandler<HTMLOListElement> | null | undefined;
        'on:focusin'?: import("svelte/elements").FocusEventHandler<HTMLOListElement> | null | undefined;
        'on:focusout'?: import("svelte/elements").FocusEventHandler<HTMLOListElement> | null | undefined;
        'on:blur'?: import("svelte/elements").FocusEventHandler<HTMLOListElement> | null | undefined;
        'on:change'?: import("svelte/elements").FormEventHandler<HTMLOListElement> | null | undefined;
        'on:beforeinput'?: import("svelte/elements").EventHandler<InputEvent, HTMLOListElement> | null | undefined;
        'on:input'?: import("svelte/elements").FormEventHandler<HTMLOListElement> | null | undefined;
        'on:reset'?: import("svelte/elements").FormEventHandler<HTMLOListElement> | null | undefined;
        'on:submit'?: import("svelte/elements").EventHandler<SubmitEvent, HTMLOListElement> | null | undefined;
        'on:invalid'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:formdata'?: import("svelte/elements").EventHandler<FormDataEvent, HTMLOListElement> | null | undefined;
        'on:load'?: import("svelte/elements").EventHandler<Event, Element> | null | undefined;
        'on:error'?: import("svelte/elements").EventHandler<Event, Element> | null | undefined;
        'on:toggle'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:keydown'?: import("svelte/elements").KeyboardEventHandler<HTMLOListElement> | null | undefined;
        'on:keypress'?: import("svelte/elements").KeyboardEventHandler<HTMLOListElement> | null | undefined;
        'on:keyup'?: import("svelte/elements").KeyboardEventHandler<HTMLOListElement> | null | undefined;
        'on:abort'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:canplay'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:canplaythrough'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:cuechange'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:durationchange'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:emptied'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:encrypted'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:ended'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:loadeddata'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:loadedmetadata'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:loadstart'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:pause'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:play'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:playing'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:progress'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:ratechange'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:seeked'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:seeking'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:stalled'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:suspend'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:timeupdate'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:volumechange'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:waiting'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:auxclick'?: import("svelte/elements").MouseEventHandler<HTMLOListElement> | null | undefined;
        'on:click'?: import("svelte/elements").MouseEventHandler<HTMLOListElement> | null | undefined;
        'on:contextmenu'?: import("svelte/elements").MouseEventHandler<HTMLOListElement> | null | undefined;
        'on:dblclick'?: import("svelte/elements").MouseEventHandler<HTMLOListElement> | null | undefined;
        'on:drag'?: import("svelte/elements").DragEventHandler<HTMLOListElement> | null | undefined;
        'on:dragend'?: import("svelte/elements").DragEventHandler<HTMLOListElement> | null | undefined;
        'on:dragenter'?: import("svelte/elements").DragEventHandler<HTMLOListElement> | null | undefined;
        'on:dragexit'?: import("svelte/elements").DragEventHandler<HTMLOListElement> | null | undefined;
        'on:dragleave'?: import("svelte/elements").DragEventHandler<HTMLOListElement> | null | undefined;
        'on:dragover'?: import("svelte/elements").DragEventHandler<HTMLOListElement> | null | undefined;
        'on:dragstart'?: import("svelte/elements").DragEventHandler<HTMLOListElement> | null | undefined;
        'on:drop'?: import("svelte/elements").DragEventHandler<HTMLOListElement> | null | undefined;
        'on:mousedown'?: import("svelte/elements").MouseEventHandler<HTMLOListElement> | null | undefined;
        'on:mouseenter'?: import("svelte/elements").MouseEventHandler<HTMLOListElement> | null | undefined;
        'on:mouseleave'?: import("svelte/elements").MouseEventHandler<HTMLOListElement> | null | undefined;
        'on:mousemove'?: import("svelte/elements").MouseEventHandler<HTMLOListElement> | null | undefined;
        'on:mouseout'?: import("svelte/elements").MouseEventHandler<HTMLOListElement> | null | undefined;
        'on:mouseover'?: import("svelte/elements").MouseEventHandler<HTMLOListElement> | null | undefined;
        'on:mouseup'?: import("svelte/elements").MouseEventHandler<HTMLOListElement> | null | undefined;
        'on:select'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:selectionchange'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:selectstart'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:touchcancel'?: import("svelte/elements").TouchEventHandler<HTMLOListElement> | null | undefined;
        'on:touchend'?: import("svelte/elements").TouchEventHandler<HTMLOListElement> | null | undefined;
        'on:touchmove'?: import("svelte/elements").TouchEventHandler<HTMLOListElement> | null | undefined;
        'on:touchstart'?: import("svelte/elements").TouchEventHandler<HTMLOListElement> | null | undefined;
        'on:gotpointercapture'?: import("svelte/elements").PointerEventHandler<HTMLOListElement> | null | undefined;
        'on:pointercancel'?: import("svelte/elements").PointerEventHandler<HTMLOListElement> | null | undefined;
        'on:pointerdown'?: import("svelte/elements").PointerEventHandler<HTMLOListElement> | null | undefined;
        'on:pointerenter'?: import("svelte/elements").PointerEventHandler<HTMLOListElement> | null | undefined;
        'on:pointerleave'?: import("svelte/elements").PointerEventHandler<HTMLOListElement> | null | undefined;
        'on:pointermove'?: import("svelte/elements").PointerEventHandler<HTMLOListElement> | null | undefined;
        'on:pointerout'?: import("svelte/elements").PointerEventHandler<HTMLOListElement> | null | undefined;
        'on:pointerover'?: import("svelte/elements").PointerEventHandler<HTMLOListElement> | null | undefined;
        'on:pointerup'?: import("svelte/elements").PointerEventHandler<HTMLOListElement> | null | undefined;
        'on:lostpointercapture'?: import("svelte/elements").PointerEventHandler<HTMLOListElement> | null | undefined;
        'on:scroll'?: import("svelte/elements").UIEventHandler<HTMLOListElement> | null | undefined;
        'on:resize'?: import("svelte/elements").UIEventHandler<HTMLOListElement> | null | undefined;
        'on:wheel'?: import("svelte/elements").WheelEventHandler<HTMLOListElement> | null | undefined;
        'on:animationstart'?: import("svelte/elements").AnimationEventHandler<HTMLOListElement> | null | undefined;
        'on:animationend'?: import("svelte/elements").AnimationEventHandler<HTMLOListElement> | null | undefined;
        'on:animationiteration'?: import("svelte/elements").AnimationEventHandler<HTMLOListElement> | null | undefined;
        'on:transitionstart'?: import("svelte/elements").TransitionEventHandler<HTMLOListElement> | null | undefined;
        'on:transitionrun'?: import("svelte/elements").TransitionEventHandler<HTMLOListElement> | null | undefined;
        'on:transitionend'?: import("svelte/elements").TransitionEventHandler<HTMLOListElement> | null | undefined;
        'on:transitioncancel'?: import("svelte/elements").TransitionEventHandler<HTMLOListElement> | null | undefined;
        'on:outrostart'?: import("svelte/elements").EventHandler<CustomEvent<null>, HTMLOListElement> | null | undefined;
        'on:outroend'?: import("svelte/elements").EventHandler<CustomEvent<null>, HTMLOListElement> | null | undefined;
        'on:introstart'?: import("svelte/elements").EventHandler<CustomEvent<null>, HTMLOListElement> | null | undefined;
        'on:introend'?: import("svelte/elements").EventHandler<CustomEvent<null>, HTMLOListElement> | null | undefined;
        'on:message'?: import("svelte/elements").MessageEventHandler<HTMLOListElement> | null | undefined;
        'on:messageerror'?: import("svelte/elements").MessageEventHandler<HTMLOListElement> | null | undefined;
        'on:visibilitychange'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:cancel'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:close'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:fullscreenchange'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
        'on:fullscreenerror'?: import("svelte/elements").EventHandler<Event, HTMLOListElement> | null | undefined;
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
export default class Component extends SvelteComponentTyped<ComponentProps, ComponentEvents, ComponentSlots> {
}
export {};