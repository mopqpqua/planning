<template>
    <ul class="m-menu">
        <MOption
            v-for="(option, index) of options"
            :key="`option${index}`"
            :active="option.value === currentOption.value"
            :option="option"
            @option-chosen="changeCurrentOption"
        />
    </ul>
</template>

<script>
import { defineComponent, ref } from 'vue';
import MOption from '@molecules/m-option/m-option';

export default defineComponent({
    name: 'm-menu',
    components: { MOption },
    props: {
        options: {
            type: Array,
            default: () => ([]),
        },
    },
    emits: ['option-changed'],
    setup(props, { emit }) {
        const currentOption = ref({ value: null });
        const changeCurrentOption = (option) => {
            currentOption.value = option;
            emit('option-changed', currentOption.value);
        };

        return { currentOption, changeCurrentOption };
    }
});
</script>

<style src="./m-menu.css"/>
