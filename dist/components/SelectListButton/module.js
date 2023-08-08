import { inputDefaults } from '../Input';
export const selectListButtonDefaults = {
    ...inputDefaults,
    caret: 'octicon:chevron-down-24',
    placeholder: '',
    roticon: true,
    variant: 'outlined',
    badgeVariant: 'filled',
    onBeforeAdd: (value, _input) => ({ label: value, value, group: '', selected: false }),
    onBeforeRemove: (_item, _input) => true // default just allow removal.
};