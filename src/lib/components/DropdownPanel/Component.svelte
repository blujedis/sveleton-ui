<script lang="ts">
	import { type DropdownPanelProps, dropdownPanelDefaults as defaults } from './module';
	import { ensureArray, themer, themeStore } from '$lib/theme';
	import { getContext, onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import type { DropdownContext } from '$lib/components/Dropdown/module';
	import { useFocusTrap } from '$lib/hooks';
	import type { ElementNativeProps } from '../types';

	type $$Props = DropdownPanelProps & ElementNativeProps<'div'>;

	const context = getContext<DropdownContext>('Dropdown');

	export let {
		delay,
		duration,
		easing,
		focustrap,
		opacity,
		position,
		rounded,
		shadowed,
		start,
		theme,
		unmount,
		variant,
		width
	} = {
		...defaults,
		...context.globals
	} as Required<$$Props>;

	let ref: HTMLDivElement | undefined;
	const [bindFocusTrap, handleFocusTrap] = useFocusTrap(focustrap);

	$: unmounted = false;

	$: panelStyles = $context.visible
		? $$restProps.style
		: !unmount
		? 'display:none;'
		: $$restProps.style;

	$: panelClasses = themer($themeStore)
		.create('DropdownPanel')
		.variant('dropdownPanel', variant, theme, true)
		.option('roundeds', rounded === 'full' ? 'xl2' : rounded, rounded)
		.option('shadows', shadowed, shadowed)
		.append(`dropdown-panel absolute z-20 mt-1 min-w-full focus:outline-none`, true)
		.append(position === 'right' ? 'right-0' : 'left-0', true)
		.append(position === 'right' ? 'origin-top-right' : 'origin-top-left', !duration)
		.append('origin-center', duration)
		.append('invisible', !unmounted)
		.append($$restProps.class, true)
		.compile(true);

	function getChildren() {
		const container = ref?.firstChild as HTMLElement;
		const items = (Array.from(container.children) || []) as HTMLElement[];
		return [items, container] as [HTMLElement[], HTMLElement];
	}

	function handleNavigation(e: KeyboardEvent) {
		if (e.repeat || !['ArrowUp', 'ArrowDown', ' '].includes(e.key)) return;
		const [items, container] = getChildren();
		if (!items.length) return;
		const activeNode = document.activeElement as HTMLElement;
		// user is selecting current value.
		// must have a contained active node.
		if (e.key === ' ' && container.contains(activeNode)) {
			// already selected nothing to do.
			if ($context.selected.includes(activeNode.dataset.value as any)) return;
			context.select(activeNode.dataset.value);
		}
		// user is navigting.
		else {
			let currentNode: HTMLElement | undefined;
			if (container.contains(activeNode)) {
				// already navigating child nodes.
				const currentIndex = items.indexOf(activeNode);
				const nextIndex = e.key === 'ArrowDown' ? currentIndex + 1 : currentIndex - 1;
				// Nothing to do is a repeat key or out of scope.
				if (nextIndex < 0 || nextIndex > items.length - 1) return;
				// Otherwise set the current node to the new index.
				currentNode = items[nextIndex];
			} else {
				// dropdown expanded start at first or selected node.
				const selectedNode = items.find((node) =>
					$context.selected.includes(node.dataset.value as any)
				);
				// focus selected or first node if multiple the first selected gets focus.
				currentNode = selectedNode || items[0];
			}
			if (currentNode) currentNode.focus();
		}
	}
	function initPanel(node: HTMLElement) {
		unmounted = unmount;
		node.focus();
	}
	onMount(() => {});
</script>

{#if (unmounted && $context.visible) || !unmounted}
	<div
		{...$$restProps}
		bind:this={ref}
		use:initPanel
		use:bindFocusTrap
		on:keydown={handleFocusTrap}
		on:keydown={handleNavigation}
		transition:scale={{ duration, start, delay, easing, opacity }}
		class={panelClasses}
		style={panelStyles}
		role={context.mode === 'menu' ? 'menu' : 'listbox'}
		aria-orientation="vertical"
		tabindex="-1"
	>
		<div class="py-1 flex flex-col" role="none">
			<slot items={$context.filtered} />
		</div>
	</div>
{/if}
