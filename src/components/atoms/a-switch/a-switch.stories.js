import ASwitch from './a-switch.vue';
import { ref } from 'vue';

export default {
    title: 'ui system/atoms/a-switch',
    component: ASwitch,
    args: {
        disabled: false,
    },
    argTypes: {
        'onUpdate:modelValue': { action: 'changed' },
    },
}

export const Primary = (args) => ({
    components: { ASwitch },
    setup() {
        const value = ref(false);
        return { args, value };
    },
    template: '<a-switch v-bind="args" v-model="value"/>'
});
