import MMultiMenu from './m-multi-menu';

export default {
    title: 'ui system/molecules/m-multi-menu',
    component: MMultiMenu,
    args: {
        optionsArray: [],
    },
}

const Template = (args) => ({
    components: { MMultiMenu },
    setup() {
        return { args };
    },
    template: '<m-multi-menu v-bind="args"/>',
});

export const TwoSubmenu = Template.bind({});
TwoSubmenu.args = {
    optionsArray: [
        [
            { value: 'Heizenberg', label: 'Walter' },
            { value: 'Partner', label: 'Jesse' },
            { value: 'Mercenary', label: 'Mike' },
        ],
        [
            { value: 'Director', label: 'Michael' },
            { value: 'Administrator', label: 'Pamela' },
            { value: 'James', label: 'Salesman' },
        ],
    ],
};
