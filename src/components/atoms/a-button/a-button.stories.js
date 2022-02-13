import AButton from './a-button.vue';

export default {
    title: 'atoms/a-button',
    components: AButton,
    args: {
        primary: false,
        secondary: false,
        text: false,
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
