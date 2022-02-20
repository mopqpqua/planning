import ACheckbox from './a-checkbox';

export default {
    title: 'ui system/atoms/a-checkbox',
    component: ACheckbox,
    args: {
        disabled: false,
    },
    argTypes: {
        onChange: { action: 'changed' },
    },
};

const Template = (args) => ({
    components: { ACheckbox },
    setup() {
        return { args };
    },
    template: '<a-checkbox v-bind="args"/>',
});

export const NotChecked = Template.bind({});
NotChecked.args = {
    checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
    checked: true,
};
