<script lang="ts">
	import Select from './Select.svelte';

	export let value = '';
</script>

<Select
	bind:value
	label="Shadowed"
	items={[
		{ label: 'None', value: 'none' },
		{ label: 'Extra Small', value: 'xs' },
		{ label: 'Small', value: 'sm' },
		{ label: 'Medium', value: 'md' },
		{ label: 'Large', value: 'lg' },
		{ label: 'Extra Large', value: 'xl' },
		{ label: '2x Large', value: 'xl2' }
	]}
/>
