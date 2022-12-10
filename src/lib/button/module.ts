
import { Builder, normalize } from '@forewind/util';
import themeStore from '../init';
import type { PickElement } from '$lib/types';
import { get } from 'svelte/store';

export type ButtonElementProps = PickElement<'button', 'size'>;
export type ButtonDefaults = typeof defaults;
export type ButtonProps = ButtonElementProps & ButtonDefaults;

const { palette, components } = get(themeStore);
const features = normalize(components.button.main, palette);
const main = new Builder(features, palette);
const defaults = main.defaults({
  base: true,
  size: 'md',
  variant: 'filled'
});

export default {
  defaults,
  features,
  main,
  palette,
};
