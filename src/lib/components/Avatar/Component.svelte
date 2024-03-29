<script lang="ts">
	import { type AvatarProps, avatarDefaults as defaults } from './module';
	import { themer, themeStore } from '$lib/theme';
	import { getContext, get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '$lib/utils';
	import type { ElementProps } from '../types';
	import Icon from '../Icon';
	import type { AvatarStackContext } from '../AvatarStack';
	import type { IconifyIcon } from '@iconify/svelte';

	type $$Props = AvatarProps & Omit<ElementProps<'img'>, 'placeholder'>;

	const context = getContext<AvatarStackContext>('AvatarStack');

	export let {
		animation,
		notification,
		placeholder,
		rounded,
		shadowed,
		size,
		stacked,
		theme,
		variant
	} = {
		...defaults,
		...context?.globals
	} as Required<AvatarProps>;

	$: console.log(context?.globals);

	let _placeholder = placeholder as string | IconifyIcon;
	if (placeholder === true) _placeholder = 'mdi:account';

	if (notification === true) notification = 'top-right' as any; // TS above props complains.

	const th = themer($themeStore);

	$: avatarClasses = th
		.create('Avatar')
		.variant('avatar', stacked ? 'stacked' : variant, theme, true)
		.option('avatarSizes', size, size)
		.option('roundeds', rounded, rounded)
		.option('shadows', shadowed, shadowed)
		.append('relative', stacked === 'down')
		.append($$restProps.class, true)
		.compile(true);

	$: avatarNotificationClasses =
		(notification &&
			th
				.create('AvatarNotification')
				.variant('avatarNotification', 'default', theme, true)
				.option('avatarNotificationSizes', size, size)
				.append('absolute right-0 top-0 block rounded-full ring-2', true)
				.append(
					animation === 'ping' ? 'animate-ping' : animation === 'pulse' ? 'animate-pulse' : '',
					animation
				)
				.compile(true)) ||
		'';

	$: avatarPlaceholderClasses =
		(_placeholder &&
			th
				.create('AvatarPlaceholder')
				.variant('avatarPlaceholder', 'default', theme, true)
				.option('roundeds', rounded, rounded)
				.option('shadows', shadowed, shadowed)
				.option('avatarSizes', size, size)
				.append('relative inline-block overflow-hidden"', true)
				.compile(true)) ||
		'';

	const forwardedEvents = forwardEventsBuilder(get_current_component());
</script>

{#if _placeholder}
	<span class={avatarPlaceholderClasses}>
		<Icon icon={_placeholder} class="h-full w-full" />
		{#if notification}
			<span class={avatarNotificationClasses} />
		{/if}
	</span>
{:else if notification}
	<span class="relative inline-block">
		<img use:forwardedEvents src="" alt="Avatar" {...$$restProps} class={avatarClasses} />
		<span class={avatarNotificationClasses} />
	</span>
{:else}
	<img use:forwardedEvents src="" alt="Avatar" {...$$restProps} class={avatarClasses} />
{/if}
