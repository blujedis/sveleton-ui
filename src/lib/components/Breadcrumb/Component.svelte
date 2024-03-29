<script lang="ts">
	import { page } from '$app/stores';
	import { themer, themeStore } from '$lib/theme';
	import { get_current_component, onMount, setContext } from 'svelte/internal';
	import { forwardEventsBuilder } from '$lib/utils';
	import BreadcrumbOption from '../BreadcrumbOption';
	import type { BreadcrumbOptionProps } from '../BreadcrumbOption';
	import { type BreadcrumbProps, breadcrumbDefaults as defaults } from './module';
	import type { ElementNativeProps } from '../types';

	type $$Props = BreadcrumbProps & ElementNativeProps<'ol'>;

	export let { full, generated, rounded, shadowed, size, theme, transitioned, variant } = {
		...defaults
	} as Required<BreadcrumbProps>;

	setContext('BreadCrumb', {
		globals: {
			rounded,
			shadowed,
			size,
			theme,
			transitioned,
			variant
		}
	});

	const th = themer($themeStore);

	$: items = generateBreadcrumbs();

	$: breadcrumbListClasses = th
		.create('Breadcrumb')
		.option('fieldFontSizes', size, size)
		.option('breadcrumbSpacings', size, size)
		.append('inline-flex items-center', true)

		.compile(true);

	$: breadcrumbNavClasses = th
		.create('BreadcrumbNav')
		.variant('breadcrumbNav', variant, theme, true)
		.option('roundeds', rounded, rounded)
		.option('shadows', shadowed, shadowed)
		.append('w-full', full)
		.append(
			'px-4 sm:px-6 lg:px-8 first:px-2 first:sm:px-4 first:lg:px-6 inline-flex items-center',
			true
		)
		.append($$restProps.class, true)
		.compile(true);

	const forwardedEvents = forwardEventsBuilder(get_current_component());

	function generateBreadcrumbs() {
		const split = ($page.route?.id || '')
			.slice(1)
			.split('/')
			.filter((v) => v !== '');
		if (!split.length) return [] as BreadcrumbOptionProps[];
		const segments = [] as string[];
		const result = split.map((s, i) => {
			s = s.replace(/\(.+\)$/, ''); // convert /(app) to /
			segments.push(s);
			const label = s.charAt(0).toUpperCase() + s.slice(1);
			const href = [...segments].join('/');
			return {
				label,
				href: href.startsWith('/') ? href : '/' + href,
				icon: i === 0 ? 'mdi:home' : undefined,
				selected: split.length - 1 === i,
				index: i,
				size,
				sronly: i === 0 ? label : undefined,
				theme,
				transitioned,
				variant
			} as BreadcrumbOptionProps;
		});
		return result;
	}
</script>

<nav class={breadcrumbNavClasses} aria-label="Breadcrumb">
	<ol use:forwardedEvents {...$$restProps} class={breadcrumbListClasses}>
		<slot>
			{#if generated}
				{#each items as item}
					<BreadcrumbOption {...item} />
				{/each}
			{/if}
		</slot>
	</ol>
</nav>
