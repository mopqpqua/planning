<template>
    <li
        :class="[
            'm-option',
            {'m-option--active': active}
        ]"
        @click="$emit('option-chosen', option)"
    >
        <slot name="image"></slot>
        {{ option.label }}
    </li>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AOption',
    props: {
        active: Boolean,
        option: {
            type: Object,
            default: () => ({
                value: null,
                label: 'Label',
            }),
            validator: task => ['value', 'label'].every(key => key in task),
        },
    },
    emits: ['option-chosen'],
});
</script>

<style src="./m-option.css"/>
