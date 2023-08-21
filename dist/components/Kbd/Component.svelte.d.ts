/// <reference types="node" />
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        full?: boolean | undefined;
        rounded?: import("../../types").ThemeRounded | undefined;
        shadowed?: import("../../types").ThemeShadowed | undefined;
        size?: import("../../types").ThemeSize | undefined;
        theme?: "default" | "dark" | "primary" | "secondary" | "tertiary" | "danger" | "success" | "warning" | "info" | undefined;
        transitioned?: boolean | undefined;
        variant?: import("./module").KbdVariant | undefined;
        unstyled?: boolean | undefined;
        slot?: string | null | undefined;
        style?: string | null | undefined;
        title?: string | null | undefined;
        hidden?: boolean | null | undefined;
        class?: string | null | undefined;
        radiogroup?: string | null | undefined;
        id?: string | null | undefined;
        color?: string | null | undefined;
        'aria-hidden'?: import("svelte/elements").Booleanish | null | undefined;
        accesskey?: string | null | undefined;
        autofocus?: boolean | null | undefined;
        contenteditable?: import("svelte/elements").Booleanish | "inherit" | null | undefined;
        contextmenu?: string | null | undefined;
        dir?: string | null | undefined;
        draggable?: import("svelte/elements").Booleanish | null | undefined;
        enterkeyhint?: "search" | "done" | "enter" | "go" | "next" | "previous" | "send" | null | undefined;
        lang?: string | null | undefined;
        part?: string | null | undefined;
        placeholder?: string | null | undefined;
        spellcheck?: import("svelte/elements").Booleanish | null | undefined;
        tabindex?: number | null | undefined;
        translate?: "" | "yes" | "no" | null | undefined;
        inert?: boolean | null | undefined;
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
        itemprop?: string | null | undefined;
        itemscope?: boolean | null | undefined;
        itemtype?: string | null | undefined;
        itemid?: string | null | undefined;
        itemref?: string | null | undefined;
        results?: number | null | undefined;
        security?: string | null | undefined;
        unselectable?: "on" | "off" | null | undefined;
        inputmode?: "text" | "search" | "decimal" | "none" | "tel" | "url" | "email" | "numeric" | null | undefined;
        is?: string | null | undefined;
        'bind:innerHTML'?: string | null | undefined;
        'bind:textContent'?: string | null | undefined;
        'bind:innerText'?: string | null | undefined;
        'bind:contentRect'?: any;
        'bind:contentBoxSize'?: ResizeObserverSize[] | null | undefined;
        'bind:borderBoxSize'?: ResizeObserverSize[] | null | undefined;
        'bind:devicePixelContentBoxSize'?: ResizeObserverSize[] | null | undefined;
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
        'aria-haspopup'?: "dialog" | "menu" | "grid" | import("svelte/elements").Booleanish | "listbox" | "tree" | null | undefined;
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
        'on:copy'?: import("svelte/elements").ClipboardEventHandler<HTMLElement> | null | undefined;
        'on:cut'?: import("svelte/elements").ClipboardEventHandler<HTMLElement> | null | undefined;
        'on:paste'?: import("svelte/elements").ClipboardEventHandler<HTMLElement> | null | undefined;
        'on:compositionend'?: import("svelte/elements").CompositionEventHandler<HTMLElement> | null | undefined;
        'on:compositionstart'?: import("svelte/elements").CompositionEventHandler<HTMLElement> | null | undefined;
        'on:compositionupdate'?: import("svelte/elements").CompositionEventHandler<HTMLElement> | null | undefined;
        'on:focus'?: import("svelte/elements").FocusEventHandler<HTMLElement> | null | undefined;
        'on:focusin'?: import("svelte/elements").FocusEventHandler<HTMLElement> | null | undefined;
        'on:focusout'?: import("svelte/elements").FocusEventHandler<HTMLElement> | null | undefined;
        'on:blur'?: import("svelte/elements").FocusEventHandler<HTMLElement> | null | undefined;
        'on:change'?: import("svelte/elements").FormEventHandler<HTMLElement> | null | undefined;
        'on:beforeinput'?: import("svelte/elements").EventHandler<InputEvent, HTMLElement> | null | undefined;
        'on:input'?: import("svelte/elements").FormEventHandler<HTMLElement> | null | undefined;
        'on:reset'?: import("svelte/elements").FormEventHandler<HTMLElement> | null | undefined;
        'on:submit'?: import("svelte/elements").EventHandler<SubmitEvent, HTMLElement> | null | undefined;
        'on:invalid'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:formdata'?: import("svelte/elements").EventHandler<FormDataEvent, HTMLElement> | null | undefined;
        'on:load'?: import("svelte/elements").EventHandler<Event, Element> | null | undefined;
        'on:error'?: import("svelte/elements").EventHandler<Event, Element> | null | undefined;
        'on:toggle'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:keydown'?: import("svelte/elements").KeyboardEventHandler<HTMLElement> | null | undefined;
        'on:keypress'?: import("svelte/elements").KeyboardEventHandler<HTMLElement> | null | undefined;
        'on:keyup'?: import("svelte/elements").KeyboardEventHandler<HTMLElement> | null | undefined;
        'on:abort'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:canplay'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:canplaythrough'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:cuechange'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:durationchange'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:emptied'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:encrypted'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:ended'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:loadeddata'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:loadedmetadata'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:loadstart'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:pause'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:play'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:playing'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:progress'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:ratechange'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:seeked'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:seeking'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:stalled'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:suspend'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:timeupdate'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:volumechange'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:waiting'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:auxclick'?: import("svelte/elements").MouseEventHandler<HTMLElement> | null | undefined;
        'on:click'?: import("svelte/elements").MouseEventHandler<HTMLElement> | null | undefined;
        'on:contextmenu'?: import("svelte/elements").MouseEventHandler<HTMLElement> | null | undefined;
        'on:dblclick'?: import("svelte/elements").MouseEventHandler<HTMLElement> | null | undefined;
        'on:drag'?: import("svelte/elements").DragEventHandler<HTMLElement> | null | undefined;
        'on:dragend'?: import("svelte/elements").DragEventHandler<HTMLElement> | null | undefined;
        'on:dragenter'?: import("svelte/elements").DragEventHandler<HTMLElement> | null | undefined;
        'on:dragexit'?: import("svelte/elements").DragEventHandler<HTMLElement> | null | undefined;
        'on:dragleave'?: import("svelte/elements").DragEventHandler<HTMLElement> | null | undefined;
        'on:dragover'?: import("svelte/elements").DragEventHandler<HTMLElement> | null | undefined;
        'on:dragstart'?: import("svelte/elements").DragEventHandler<HTMLElement> | null | undefined;
        'on:drop'?: import("svelte/elements").DragEventHandler<HTMLElement> | null | undefined;
        'on:mousedown'?: import("svelte/elements").MouseEventHandler<HTMLElement> | null | undefined;
        'on:mouseenter'?: import("svelte/elements").MouseEventHandler<HTMLElement> | null | undefined;
        'on:mouseleave'?: import("svelte/elements").MouseEventHandler<HTMLElement> | null | undefined;
        'on:mousemove'?: import("svelte/elements").MouseEventHandler<HTMLElement> | null | undefined;
        'on:mouseout'?: import("svelte/elements").MouseEventHandler<HTMLElement> | null | undefined;
        'on:mouseover'?: import("svelte/elements").MouseEventHandler<HTMLElement> | null | undefined;
        'on:mouseup'?: import("svelte/elements").MouseEventHandler<HTMLElement> | null | undefined;
        'on:select'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:selectionchange'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:selectstart'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:touchcancel'?: import("svelte/elements").TouchEventHandler<HTMLElement> | null | undefined;
        'on:touchend'?: import("svelte/elements").TouchEventHandler<HTMLElement> | null | undefined;
        'on:touchmove'?: import("svelte/elements").TouchEventHandler<HTMLElement> | null | undefined;
        'on:touchstart'?: import("svelte/elements").TouchEventHandler<HTMLElement> | null | undefined;
        'on:gotpointercapture'?: import("svelte/elements").PointerEventHandler<HTMLElement> | null | undefined;
        'on:pointercancel'?: import("svelte/elements").PointerEventHandler<HTMLElement> | null | undefined;
        'on:pointerdown'?: import("svelte/elements").PointerEventHandler<HTMLElement> | null | undefined;
        'on:pointerenter'?: import("svelte/elements").PointerEventHandler<HTMLElement> | null | undefined;
        'on:pointerleave'?: import("svelte/elements").PointerEventHandler<HTMLElement> | null | undefined;
        'on:pointermove'?: import("svelte/elements").PointerEventHandler<HTMLElement> | null | undefined;
        'on:pointerout'?: import("svelte/elements").PointerEventHandler<HTMLElement> | null | undefined;
        'on:pointerover'?: import("svelte/elements").PointerEventHandler<HTMLElement> | null | undefined;
        'on:pointerup'?: import("svelte/elements").PointerEventHandler<HTMLElement> | null | undefined;
        'on:lostpointercapture'?: import("svelte/elements").PointerEventHandler<HTMLElement> | null | undefined;
        'on:scroll'?: import("svelte/elements").UIEventHandler<HTMLElement> | null | undefined;
        'on:resize'?: import("svelte/elements").UIEventHandler<HTMLElement> | null | undefined;
        'on:wheel'?: import("svelte/elements").WheelEventHandler<HTMLElement> | null | undefined;
        'on:animationstart'?: import("svelte/elements").AnimationEventHandler<HTMLElement> | null | undefined;
        'on:animationend'?: import("svelte/elements").AnimationEventHandler<HTMLElement> | null | undefined;
        'on:animationiteration'?: import("svelte/elements").AnimationEventHandler<HTMLElement> | null | undefined;
        'on:transitionstart'?: import("svelte/elements").TransitionEventHandler<HTMLElement> | null | undefined;
        'on:transitionrun'?: import("svelte/elements").TransitionEventHandler<HTMLElement> | null | undefined;
        'on:transitionend'?: import("svelte/elements").TransitionEventHandler<HTMLElement> | null | undefined;
        'on:transitioncancel'?: import("svelte/elements").TransitionEventHandler<HTMLElement> | null | undefined;
        'on:outrostart'?: import("svelte/elements").EventHandler<CustomEvent<null>, HTMLElement> | null | undefined;
        'on:outroend'?: import("svelte/elements").EventHandler<CustomEvent<null>, HTMLElement> | null | undefined;
        'on:introstart'?: import("svelte/elements").EventHandler<CustomEvent<null>, HTMLElement> | null | undefined;
        'on:introend'?: import("svelte/elements").EventHandler<CustomEvent<null>, HTMLElement> | null | undefined;
        'on:message'?: import("svelte/elements").MessageEventHandler<HTMLElement> | null | undefined;
        'on:messageerror'?: import("svelte/elements").MessageEventHandler<HTMLElement> | null | undefined;
        'on:visibilitychange'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:cancel'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:close'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:fullscreenchange'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
        'on:fullscreenerror'?: import("svelte/elements").EventHandler<Event, HTMLElement> | null | undefined;
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
export default class Component extends SvelteComponent<ComponentProps, ComponentEvents, ComponentSlots> {
}
export {};
