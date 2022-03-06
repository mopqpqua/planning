import MMenu from './m-menu';
import *  as OptionStories from '../m-option/m-option.stories';

export default {
    title: 'ui system/molecules/m-menu',
    component: MMenu,
    args: {
        options: [],
    },
    argTypes: {
        changeCurrentOption: {},
    },
}

const Template = (args) => ({
    components: { MMenu },
    setup() {
        return { args };
    },
    template: '<m-menu v-bind="args"/>',
});

export const EmptyMenu = Template.bind({});
EmptyMenu.args = {};

export const ThreeItemsMenu = Template.bind({});
ThreeItemsMenu.args = {
    options: [
        { value: 'Heizenberg', label: 'Walter' },
        { value: 'Partner', label: 'Jesse' },
        { value: 'Mercenary', label: 'Mike' },
    ],
};
