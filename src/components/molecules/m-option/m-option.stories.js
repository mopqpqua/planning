import MOption from './m-option';
import { action } from '@storybook/addon-actions';

export default {
    title: 'ui system/molecules/m-option',
    component: MOption,
    excludeStories: /.*Data$/,
    args: {
        active: false,
    },
    argTypes: {
        onOptionChosen: {},
    },
};

export const actionsData = {
    onOptionChosen: action('option-chosen'),
};

const Template = (args) => ({
    components: { MOption },
    setup() {
        return { args, ...actionsData };
    },
    template: '<m-option v-bind="args"/>',
});

export const Default = Template.bind({});
Default.args = {
    option: { value: 'Heizenberg', label: 'Walter' },
};

export const IconedOption = (args) => ({
    components: { MOption },
    setup() {
        return { args, ...actionsData };
    },
    template: `
        <m-option v-bind="args">
            <template #image>
                <img class="m-option__icon" src="assets/icon-study-hat.svg"/>
            </template>
        </m-option>
    `,
});
IconedOption.args = { ...Default.args };

export const ActiveIconedOption = (args) => ({
    components: { MOption },
    setup() {
        return { args, ...actionsData };
    },
    template: `
        <m-option v-bind="args">
            <template #image>
                <img class="m-option__icon" src="assets/icon-study-hat-active.svg"/>
            </template>
        </m-option>
    `,
});
ActiveIconedOption.args = { ...Default.args, active: true };
