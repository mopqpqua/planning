import AButton from './a-button.vue';

export default {
    title: 'ui system/atoms/a-button',
    component: AButton,
    args: {
        big: false,
        disabled: false,
    },
    argTypes: {
        onClick: { action: 'clicked' },
    },
};

const Template = (args) => ({
    components: { AButton },
    setup() {
        return { args };
    },
    template: '<a-button v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
};
export const Secondary = Template.bind({});
Secondary.args = {
    secondary: true,
};
export const Text = Template.bind({});
Text.args = {
    text: true,
};
