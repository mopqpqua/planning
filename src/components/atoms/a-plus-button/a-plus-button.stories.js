import APlusButton from './a-plus-button';

export default {
    title: 'ui system/atoms/a-plus-button',
    component: APlusButton,
    args: {
        disabled: false,
    },
    argTypes: {
        onClick: { action: 'clicked' },
    },
};

export const PlusButton = (args) => ({
    components: { APlusButton },
    setup() {
        return { args };
    },
    template: '<a-plus-button v-bind="args"/>',
});
