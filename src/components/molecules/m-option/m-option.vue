<template>
    <li
        :class="[
            'm-option',
            {'m-option--active': active}
        ]"
        @click="$emit('option-chosen', option.value)"
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
        },
    },
    emits: ['option-chosen'],
});
</script>

<style src="./m-option.css"/>
