import {
	variantBorder,
	variantBorderHover,
	variantBorderHoverGroup,
	variantFilled,
	variantActive,
	variantFilledHover,
	variantFlushed,
	variantFlushedHover,
	variantGhost,
	variantGhostHover,
	variantOutlined,
	variantOutlinedHover,
	variantPanel,
	variantText,
	variantTextHover,
	variantItemCurrent,
	variantItemExpanded,
	variantItemSelected,
	variantItemHover,
	variantItemChecked,
	variantTextExpanded,
	variantBorderExpanded,
	variantItemCheckedGhost,
	variantItemCheckedFilled,
	variantOutlinedHoverless
} from '$lib/constants/variants';

export const globals = {
	text: { ...variantText },
	textHover: { ...variantTextHover },
	textExpanded: { ...variantTextExpanded },
	filledActive: { ...variantActive },
	filled: { ...variantFilled },
	filledHover: { ...variantFilledHover },
	outlined: { ...variantOutlined },
	outlinedHover: { ...variantOutlinedHover },
	outlinedHoverless: { ...variantOutlinedHoverless },
	bordered: { ...variantBorder },
	borderedHover: { ...variantBorderHover },
	borderedHoverGroup: { ...variantBorderHoverGroup },
	borderExpanded: { ...variantBorderExpanded },
	ghost: { ...variantGhost },
	ghostHover: { ...variantGhostHover },
	flushed: { ...variantFlushed },
	flushedHover: { ...variantFlushedHover },
	panel: { ...variantPanel },
	itemHover: { ...variantItemHover },
	itemCurrent: { ...variantItemCurrent },
	itemSelected: { ...variantItemSelected },
	itemExpanded: { ...variantItemExpanded },
	itemChecked: { ...variantItemChecked },
	itemCheckedGhost: { ...variantItemCheckedGhost },
	itemCheckedFilled: { ...variantItemCheckedFilled }
};

export * from './AccordionButton/config';
export * from './Badge/config';
export * from './Breadcrumb/config';
export * from './BreadcrumbOption/config';
export * from './Button/config';
export * from './ButtonGroupItem/config';
export * from './CardElement/config';
export * from './Checkbox/config';
export * from './DataGridFilter/config';
export * from './DataGridHeader/config';
export * from './Empty/config';
export * from './Flushed/config';
export * from './Input/config';
export * from './Kbd/config';
export * from './Label/config';
export * from './MenuOption/config';
export * from './MenuPanel/config';
export * from './Notification/config';
export * from './PaginationDetail/config';
export * from './PaginationPage/config';
export * from './Popover/config';
export * from './ProgressBar/config';
export * from './ProgressCircle/config';
export * from './Radio/config';
export * from './Range/config';
export * from './Select/config';
export * from './SelectOption/config';
export * from './SelectListButton/config';
export * from './SelectListOption/config';
export * from './SelectListPanel/config';
export * from './Switch/config';
export * from './Tab/config';
export * from './Tabs/config';
