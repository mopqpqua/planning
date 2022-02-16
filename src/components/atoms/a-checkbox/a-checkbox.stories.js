import ACheckbox from './a-checkbox';

export default {
    title: 'ui system/atoms/a-checkbox',
    component: ACheckbox,
    args: {
        disabled: false,
    },
    argTypes: {
        onChange: { action: 'changed' }
    },
    template: '<a-checkbox v-bind="args"/>',
};

const Template = (args) => ({
    components: { ACheckbox },
    setup() {
        return { args };
    },
    template: '<a-checkbox v-bind="args"/>',
});

export const NotChecked = Template.bind({});

export const Checked = Template.bind({});
Checked.args = {
    checked: true,
};
