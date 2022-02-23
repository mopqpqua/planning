import AOption from './a-option';

export default {
    title: 'ui system/atoms/a-option',
    component: AOption,
    args: {
        label: 'Label',
        active: false,
    },
    argTypes: {
        onOptionChosen: { action: 'option-chosen' },
    },
};

const Template = (args) => ({
    components: { AOption },
    setup() {
        return { args };
    },
    template: '<a-option v-bind="args"/>',
});

export const StringOption = Template.bind({});
StringOption.args = {
    option: 'Heizenberg',
};

export const ObjectOption = Template.bind({});
ObjectOption.args = {
    option: {
        name: 'Rick',
        surname: 'Sanchez',
    },
};

export const IconedOption = Template.bind({});
IconedOption.args = {
    iconName: 'icon-plus',
    option: 'Heizenberg',
};
