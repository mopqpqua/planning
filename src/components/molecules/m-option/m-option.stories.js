import MOption from './m-option';
import { action } from '@storybook/addon-actions';

export default {
    title: 'ui system/molecules/m-option',
    component: MOption,
    args: {
        active: false,
    },
    argTypes: {
        onOptionChosen: { action: 'option-chosen' },
    },
};

export const actionsData = {
    onOptionChoosen: action('option-choosen'),
};

const Template = (args) => ({
    components: { MOption },
    setup() {
        return { args };
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
        return { args };
    },
    template: `
        <m-option v-bind="args">
            <template #image>
                <img class="m-option__icon" src="assets/icon-study-hat.svg"/>
            </template>
        </m-option>
    `,
});

export const ActiveIconedOption = (args) => ({
    components: { MOption },
    setup() {
        return { args };
    },
    template: `
        <m-option v-bind="args">
            <template #image>
                <img class="m-option__icon" src="assets/icon-study-hat-active.svg"/>
            </template>
        </m-option>
    `,
});
ActiveIconedOption.args = {...ActiveIconedOption.args, active: true};
