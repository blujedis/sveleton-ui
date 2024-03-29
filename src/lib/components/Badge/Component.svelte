<script lang="ts">
	import { type BadgeProps, badgeDefaults as defaults } from './module';
	import { themer, themeStore } from '$lib/theme';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '$lib/utils';
	import type { ElementNativeProps } from '../types';
	import Icon from '../Icon';

	type $$Props = BadgeProps & Omit<ElementNativeProps<'span'>, 'size'>;

	export let { removable, full, rounded, shadowed, size, theme, transitioned, variant, unstyled } =
		{
			...defaults
		} as Required<BadgeProps>;

	const th = themer($themeStore);

	$: badgeClasses = unstyled
		? th
				.create('Badge')
				.option('common', 'transition', transitioned)
				.remove(transitioned === 'colors' ? 'transition-all' : 'transition-colors', transitioned)
				.option('badgePadding', size, size)
				.option('badgeFontSizes', size, size)
				.option('roundeds', rounded, rounded)
				.option('shadows', shadowed, shadowed)
				.append('w-full', full)
				.append('relative inline-flex items-center', true)
				.append($$restProps.class, true)
				.compile(true)
		: th
				.create('Badge')
				.variant('badge', variant, theme, true)
				.option('common', 'transition', transitioned)
				.remove(transitioned === 'colors' ? 'transition-all' : 'transition-colors', transitioned)
				.option('badgePadding', size, size && !removable)
				.option('badgeFieldPadding', size, size && !!removable)
				.option('badgeFontSizes', size, size)
				.option('roundeds', rounded, rounded)
				.option('shadows', shadowed, shadowed)
				.append('w-full', full)
				.append('inline-block mr-1', true)
				.append($$restProps.class, true)
				.compile(true);

	const forwardedEvents = forwardEventsBuilder(get_current_component());
</script>

{#if removable}
	<button use:forwardedEvents {...$$restProps} class={badgeClasses}>
		<slot />
		<slot name="icon">×</slot>
	</button>
{:else}
	<span {...$$restProps} class={badgeClasses}>
		<slot />
	</span>
{/if}
