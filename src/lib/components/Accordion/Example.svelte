<script lang="ts">
	import Section from '../_Example/Section.svelte';
	import SelectTheme from '../_Example/SelectTheme.svelte';
	import SelectSize from '../_Example/SelectSize.svelte';
	import SelectRounded from '../_Example/SelectRounded.svelte';
	import SelectShadowed from '../_Example/SelectShadowed.svelte';
	import ListOptions from '../_Example/ListOptions.svelte';
	import ToggleOptions from '../_Example/ToggleOptions.svelte';
	import ExamplePage from '../_Example/ExamplePage.svelte';
	import Checkbox from '../_Example/Checkbox.svelte';
	import Accordion, { type AccordianVariant } from '.';
	import AccordionButton from '../AccordionButton';
	import AccordionOption from '../AccordionOption';
	import AccordionPanel from '../AccordionPanel';
	import type {
		ThemeColor,
		ThemeRounded,
		ThemeShadowed,
		ThemeSize,
		ThemeTransitioned
	} from '$lib/theme';

	const title = 'Accordion';
	const description = 'Boilerplate component for accordions.';
	const code = `
  `;

	const props = {
		multiple: false,
		rounded: 'none' as ThemeRounded,
		shadowed: 'none' as ThemeShadowed,
		size: 'md' as ThemeSize,
		theme: 'danger' as ThemeColor,
		variant: 'default' as AccordianVariant
	};
</script>

<ExamplePage {title} {description} {code}>
	<ToggleOptions>
		<!-- <Checkbox label="Full" bind:checked={props.full} /> -->
		<Checkbox label="Multiple" bind:checked={props.multiple} />
	</ToggleOptions>
	<ListOptions>
		<SelectTheme bind:value={props.theme} />
		<SelectSize bind:value={props.size} />
		<SelectRounded bind:value={props.rounded} />
		<SelectShadowed bind:value={props.shadowed} />
	</ListOptions>

	<Section>
		<hr />
	</Section>

	<!-- <div class="flex space-x-2">
		<label for="filled">
			<div class="text-sm">Filled:</div>
		</label> -->
	{#key props}
		<Accordion {...props}>
			<AccordionPanel name={0}>
				<AccordionButton>One</AccordionButton>
				<AccordionOption class="p-4"
					>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.</AccordionOption
				>
			</AccordionPanel>
			<AccordionPanel name={1}>
				<AccordionButton>Two</AccordionButton>
				<AccordionOption class="p-4"
					>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.</AccordionOption
				>
			</AccordionPanel>
		</Accordion>
	{/key}
	<!-- </div> -->
</ExamplePage>
