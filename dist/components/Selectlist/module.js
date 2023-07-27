export const selectListDefaults = {
    autoclose: true,
    escapable: true,
    filter: (q, i) => i.filter((v) => v.label.includes(q) || (v.value + '').includes(q) || (v.group + '')?.includes(q)),
    size: 'md',
    strategy: 'button',
    theme: 'frame',
    variant: 'filled'
};
