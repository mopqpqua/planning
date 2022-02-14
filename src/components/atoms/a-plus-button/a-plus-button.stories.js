import APlusButton from './a-plus-button';

export default {
    title: 'ui system/atoms/a-plus-button',
    components: APlusButton,
    args: {
        disabled: false,
    },
    template: '<a-plus-button v-bind="args"/>',
};

export const PlusButton = (args) => ({
    components: { APlusButton },
    setup() {
        return { args };
    },
    template: '<a-plus-button v-bind="args"/>',
});
