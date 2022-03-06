import MOption from './m-option';

export default {
    title: 'ui system/molecules/m-option',
    component: MOption,
    args: {
        label: 'Label',
        active: false,
    },
    argTypes: {
        onOptionChosen: { action: 'option-chosen' },
    },
};

const Template = (args) => ({
    components: { MOption },
    setup() {
        return { args };
    },
    template: '<m-option v-bind="args"/>',
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
}
;
export const IconedOption = (args) => ({
    components: { MOption },
    setup() {
        return { args };
    },
    template: `
        <m-option v-bind="args">
            <template #image>
                <img src="assets/icon-plus.svg"/>
            </template>
        </m-option>
    `,
});
