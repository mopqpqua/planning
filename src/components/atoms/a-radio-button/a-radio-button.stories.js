import ARadioButton from './a-radio-button';

export default {
    title: 'ui system/atoms/a-radio-button',
    component: ARadioButton,
    args: {
        disabled: false,
    },
    argTypes: {
        onChange: { action: 'changed' }
    },
}

const Template = (args) => ({
    components: { ARadioButton },
    setup() {
        return { args };
    },
    template: '<a-radio-button v-bind="args"/>',
});

export const NotChecked = Template.bind({});
NotChecked.args = {
    checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
    checked: true,
};
