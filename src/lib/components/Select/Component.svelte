<script lang="ts">
	import { type SelectProps, selectDefaults as defaults, type SelectContext } from './module';
	import { ensureArray, themer, themeStore } from '$lib/theme';
	import { get_current_component, setContext } from 'svelte/internal';
	import { forwardEventsBuilder } from '$lib/utils';
	import type { ElementNativeProps } from '../types';
	import { useSelect } from '$lib/stores/select';

	type $$Props = SelectProps & Omit<ElementNativeProps<'select'>, 'size'>;

	export let {
		disabled,
		focused,
		full,
		multiple,
		placeholder,
		rounded,
		selected,
		shadowed,
		size,
		theme,
		transitioned,
		variant,
		unstyled
	} = {
		...defaults
	} as Required<$$Props>;

	const store = useSelect({ multiple, selected: ensureArray(selected) });

	export const context = setContext<SelectContext>('Dropdown', {
		...store
	});

	const th = themer($themeStore);

	$: inputClasses = th
		.create('Select')
		.variant('select', variant, theme, true)
		.option(focused === 'default' ? 'focusedSizes' : 'focusedVisibleSizes', size, focused)
		.option(focused === 'default' ? 'focused' : 'focusedVisible', theme, focused)
		.append('focus:ring-offset-0 focus:border-transparent', variant !== 'flushed')
		.option('placeholders', theme, true)
		.option('common', 'transition', transitioned)
		.remove(transitioned === 'colors' ? 'transition-all' : 'transition-colors', transitioned)
		.option('fieldFontSizes', size, size)
		.option('fieldPadding', size, size)
		.option('roundeds', rounded, rounded && variant !== 'flushed')
		.option('shadows', shadowed, shadowed)
		.option('disableds', theme, disabled)
		.append('w-full', full)
		.append('border-0 ring-1 ring-black ring-opacity-5', variant === 'filled')
		.append('flex items-center justify-center pr-10', true) // always pad right for caret.
		.append(multiple ? 'form-multiselect' : 'form-select', true)
		.append($$restProps.class, true)
		.compile(true);

	const forwardedEvents = forwardEventsBuilder(get_current_component());
</script>

<select
	{...$$restProps}
	use:forwardedEvents
	{multiple}
	class={inputClasses}
	value={multiple ? $store.selected : $store.selected[0]}
>
	{#if placeholder}
		<option value="" disabled selected
			>{typeof placeholder === 'string' ? placeholder : 'Please Select'}</option
		>
	{/if}
	<slot selectedItems={$store.selected} select={context.select} unselect={context.unselect} />
</select>
