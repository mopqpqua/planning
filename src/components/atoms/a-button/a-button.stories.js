import AButton from './a-button.vue';

export default {
    title: 'a-button',
    components: AButton,
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
